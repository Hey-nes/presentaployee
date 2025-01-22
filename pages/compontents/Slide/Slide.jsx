import { useState, useEffect } from "react";
import styles from "./Slide.module.css";

const Slide = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      age: 35,
      languages: "JavaScript, Python",
      hobby: "Cycling",
      image: "https://loremflickr.com/320/240",
      started_year: 2014,
      quote: "Life is a highway",
      fika: "Kanelbulle",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Smith",
      age: 28,
      languages: "Ruby, Go",
      hobby: "Photography",
      image: "https://loremflickr.com/320/240",
      started_year: 2018,
      quote: "The journey is the reward.",
      fika: "Chokladboll",
    },
    {
      id: 3,
      first_name: "Alice",
      last_name: "Johnson",
      age: 42,
      languages: "Java, C++",
      hobby: "Gardening",
      image: "https://loremflickr.com/320/240",
      started_year: 2005,
      quote: "Think big, start small.",
      fika: "Semla",
    },
    {
      id: 4,
      first_name: "Bob",
      last_name: "Williams",
      age: 50,
      languages: "C#, PHP",
      hobby: "Fishing",
      image: "https://loremflickr.com/320/240",
      started_year: 1998,
      quote: "Adapt or die.",
      fika: "Wienerbröd",
    },
  ]);

  const [employeeIndex, setEmployeeIndex] = useState(0);
  const [typedDescription, setTypedDescription] = useState([]);

  const changeEmployee = (num) => {
    setEmployeeIndex((prev) => prev + num);
    setTypedDescription([]);
  };

  useEffect(() => {
    if (employees.length > 0) {
      const employee = employees[employeeIndex];

      const description = [
        `Name: ${employee.first_name} ${employee.last_name}`,
        `Age: ${employee.age} years old`,
        `Employed since: ${employee.started_year}`,
        `Programming languages: ${employee.languages}`,
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
    <div key={employee.id} className={styles.slide}>
      <div className={styles.buttonContainer}>
        {employeeIndex > 0 && (
          <button className="button-small" onClick={() => changeEmployee(-1)}>
            Back
          </button>
        )}
      </div>
      <div className={styles.slideImage}>
        <img src={employee.image} />
      </div>
      <div className={styles.slideDescription}>{typedDescription}</div>
      <div className={styles.buttonContainer}>
        {employeeIndex < employees.length - 1 && (
          <button className="button-small" onClick={() => changeEmployee(1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Slide;
