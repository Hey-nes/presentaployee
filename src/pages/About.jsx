import React from "react";
import useOrientation from "../hooks/hooks";
import Gallery from "../compontents/Gallery/Gallery";

const About = () => {
  const isLandscape = useOrientation();

  return (
    <main className="main">
      {isLandscape ? (
        <Gallery />
      ) : (
        <p className="description">Turn phone sideways please</p>
      )}
    </main>
  );
};

export default About;
