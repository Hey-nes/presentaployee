import { useState, useEffect } from "react";
import styles from "./Slide.module.css";
import Link from "next/link";

const Slide = () => {
  const [employees, setEmployees] = useState([
    {
      id: "1",
      name: "Martin Cedeskog",
      age: 37,
      languages: "PHP",
      hobby: "Riding motorcycles",
      image: "https://ca.slack-edge.com/T03KUPHFY-U01SVD25L1J-af7740ab8939-512",
      started_year: 2021,
      quote: "'A smooth sea never made a skilled sailor'",
      fika: "Mazarin",
    },
    {
      id: "2",
      name: "Jimmy Rosenholm",
      age: 47,
      languages: ".NET",
      hobby: "Padel",
      image: "https://ca.slack-edge.com/T03KUPHFY-U0F8REUFP-b9b72b47f0f1-512",
      started_year: 2014,
      quote: "'Knowledge is knowing that a tomato is a fruit. Wisdom is knowing not to put it in a fruit salad.'",
      fika: "Budapestrulle",
    },
    {
      id: "3",
      name: "Jonas Nyqvist",
      age: 47,
      languages: "Python, PHP",
      hobby: "Piano",
      image: "https://ca.slack-edge.com/T03KUPHFY-U9WKL0XJP-95e260443951-512",
      started_year: 2018,
      quote: "'Det har jag aldrig provat tidigare så det klarar jag helt säkert!'",
      fika: "Bulle",
    },
    {
      id: "4",
      name: "Christopher 'KHRIZTOPHOPOROS' Nagy",
      age: 35,
      languages: "PHP",
      hobby: "Fika",
      image: "https://ca.slack-edge.com/T03KUPHFY-U06D70Y3QSD-5babef985d19-512",
      started_year: 2024,
      quote: "'Adapt or die'",
      fika: "Morotskaka",
    },
    {
      id: "5",
      name: "Sebastian Heynes",
      age: 32,
      languages: "JS, Python, PHP",
      hobby: "Playing music",
      image: "https://ca.slack-edge.com/T03KUPHFY-U0803G5UWUE-bcf73ddf2b0c-512",
      started_year: 2024,
      quote: "'Buy the ticket, take the ride'",
      fika: "Wienerpecan",
    },
  ]);

  const [employeeIndex, setEmployeeIndex] = useState(0);
  const [typedDescription, setTypedDescription] = useState([]);
  const [easterEgg, setEasterEgg] = useState(false);

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
    <div key={employee.id} className={styles.slide}>
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
      {
        (employeeIndex == employees.length - 1 && (
          <Link href="/EasterEgg">
            <span>&#x1F95A;</span>
          </Link>
        ))
      }
    </div>
  );
};

export default Slide;
