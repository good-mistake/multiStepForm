import { useEffect } from "react";

const WindowSize = ({ prevStep, handleNextStep, setWindowSize, nextStep }) => {
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWindowSize]);

  return (
    <>
      {" "}
      <div className="buttons">
        {" "}
        <button className="goBackButton" onClick={prevStep}>
          Go Back
        </button>
        <button className="nextButton" onClick={handleNextStep}>
          {nextStep}
        </button>
      </div>
    </>
  );
};

export default WindowSize;
