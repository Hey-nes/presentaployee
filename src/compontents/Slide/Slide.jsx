import { useState, useEffect } from "react";
import styles from "./Slide.module.css";
import Link from "next/link";

const Slide = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeIndex, setEmployeeIndex] = useState(0);
  const [typedDescription, setTypedDescription] = useState([]);
  const [easterEgg, setEasterEgg] = useState(false);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("/api/employees");
      const jsonResponse = await response.json();
      setEmployees(jsonResponse);
    } catch (error) {
      console.error("Error fetching employees", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const changeEmployee = (num) => {
    setEmployeeIndex((prev) => prev + num);
    setTypedDescription([]);
  };

  useEffect(() => {
    if (employees.length > 0) {
      const employee = employees[employeeIndex];

      const description = [
        `Name: ${employee.name}`,
        `Age: ${employee.age} years old`,
        `Employed since: ${employee.started_year}`,
        `Skilled in: ${employee.languages}`,
        `Favorite hobby: ${employee.hobby}`,
        `Favorite fika: ${employee.fika}`,
        `Inspirational quote: ${employee.quote}`,
      ];

      let descriptionIndex = 0;
      let charIndex = 0;

      const typeText = () => {
        const currentText = description[descriptionIndex];

        if (charIndex <= currentText.length) {
          setTypedDescription((prev) => {
            const updated = [...prev];
            updated[descriptionIndex] = (
              <p key={descriptionIndex}>{currentText.slice(0, charIndex)}</p>
            );
            return updated;
          });
          charIndex++;
        } else {
          descriptionIndex++;
          charIndex = 0;
          if (descriptionIndex === description.length) {
            clearInterval(interval);
          }
        }
      };

      setTypedDescription(description.map((_, i) => <p key={i}></p>));

      const interval = setInterval(typeText, 20);

      return () => clearInterval(interval);
    }
  }, [employeeIndex, employees]);

  if (employees.length < 1) {
    return (
      <div className={styles.slide}>
        <p>Loading...</p>
      </div>
    );
  }

  const employee = employees[employeeIndex];

  return (
    <div key={employee._id} className={styles.slide}>
      <div className={styles.slideButtonContainerLeft}>
        {employeeIndex > 0 && (
          <button
            className={styles.slideButtonLeft}
            onClick={() => changeEmployee(-1)}
          >
            Back
          </button>
        )}
      </div>
      <div className={styles.slideImageContainer}>
        <img className={styles.slideImage} src={employee.image} />
      </div>
      <div className={styles.slideDescription}>{typedDescription}</div>
      <div className={styles.slideButtonContainerRight}>
        {employeeIndex < employees.length - 1 && (
          <button
            className={styles.slideButtonRight}
            onClick={() => changeEmployee(1)}
          >
            Next
          </button>
        )}
      </div>
      {employeeIndex == employees.length - 1 && (
        <Link href="/EasterEgg">
          <span>&#x1F95A;</span>
        </Link>
      )}
    </div>
  );
};

export default Slide;
