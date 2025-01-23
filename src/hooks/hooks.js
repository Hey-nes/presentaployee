import { useEffect, useState } from "react";

const useOrientation = () => {
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

  return isLandscape;
};

export default useOrientation;
