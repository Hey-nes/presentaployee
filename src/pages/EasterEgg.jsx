import { useEffect, useState } from "react";
import useOrientation from "../hooks/hooks";
import Link from "next/link";

const EasterEgg = () => {
  const [greetings, setGreetings] = useState([]);
  const [isPressed, toggleIsPressed] = useState(false);
  const isLandscape = useOrientation();

  const fetchGreetings = async () => {
    try {
      const response = await fetch("/api/hello");
      const jsonResponse = await response.json();
      setGreetings(jsonResponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGreetings();
  }, []);

  return !isLandscape ? (
    <main className="main">
      {isPressed ? (
        <>
          {greetings.map((greeting) => (
            <>
              <h2 key={greeting._id} className="title-is-2">
                {greeting.greeting}
              </h2>
              <img src="https://kwiss.me/assets/quiz/14640522741110471714.png" />
            </>
          ))}
        </>
      ) : (
        <>
          <p className="description">
            Undra vad som händer om du trycker på knappen?
          </p>
        </>
      )}
      <button
        className="button-large"
        onClick={() => toggleIsPressed(!isPressed)}
      >
        {isPressed ? <Link href="/">"Schas Ove!"</Link> : "Tryck"}
      </button>
    </main>
  ) : (
    <main className="main">
      <p className="description">Vänd tillbaka luren!</p>
    </main>
  );
};

export default EasterEgg;
