import React, { useEffect, useState } from "react";
import Gallery from "./compontents/Gallery/Gallery";

const About = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: landscape)");

    setIsLandscape(mediaQuery.matches);

    const handleOrientationChange = (event) => {
      setIsLandscape(event.matches);
    };

    mediaQuery.addEventListener("change", handleOrientationChange);

    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  return (
    <div className="main">
      {isLandscape ? (
        <Gallery />
      ) : (
        <p className="description">Turn phone sideways please</p>
      )}
    </div>
  );
};

export default About;
