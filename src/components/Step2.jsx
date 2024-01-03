import { useState } from "react";
import arcadeSvg from "../images/icon-arcade.svg";
import advancedSvg from "../images/icon-advanced.svg";
import proSvg from "../images/icon-pro.svg";
import WindowSize from "./WindowSize";
const Step2 = ({ nextStep, prevStep, handleSelectedOption }) => {
  //   const [option, setOptions] = useState("");
  const [toggleOptions, setToggleOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [validate, setValidate] = useState("");
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const toggle = () => {
    setToggleOptions((prev) => !prev);
    setSelectedOption(null);
  };
  const handleNextStep = () => {
    if (!selectedOption) {
      setValidate("You must select one option");
    } else {
      setValidate("");
      nextStep();
    }
  };
  const handleOptions = (value) => {
    setSelectedOption(value);

    handleSelectedOption(value);
  };

  return (
    <>
      <div className="stepContainer">
        {" "}
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="options">
          <div
            onClick={() =>
              handleOptions({
                name: "Arcade",
                time: toggleOptions ? "(Yearly)" : "(Monthly)",
                price: toggleOptions ? "90" : "9",
              })
            }
            className={selectedOption?.name === "Arcade" ? "selected" : ""}
          >
            <img src={arcadeSvg} alt="arcade" />
            <div className="nameAndPriceInOptions">
              {" "}
              <h3>Arcade</h3>
              <p>${toggleOptions ? "90" : "9"}/mo</p>
              {!toggleOptions === false ? <div>2 months free</div> : ""}
            </div>
          </div>
          <div
            onClick={() =>
              handleOptions({
                name: "Advanced",
                time: toggleOptions ? "(Yearly)" : "(Monthly)",
                price: toggleOptions ? "120" : "12",
              })
            }
            className={selectedOption?.name === "Advanced" ? "selected" : ""}
          >
            <img src={advancedSvg} alt="Advanced" />
            <div className="nameAndPriceInOptions">
              {" "}
              <h3>Advanced</h3>
              <p>${toggleOptions ? "120" : "12"}/mo</p>
              {!toggleOptions === false ? <div>2 months free</div> : ""}
            </div>{" "}
          </div>
          <div
            onClick={() =>
              handleOptions({
                name: "Pro",
                time: toggleOptions ? "(Yearly)" : "(Monthly)",
                price: toggleOptions ? "150" : "15",
              })
            }
            className={selectedOption?.name === "Pro" ? "selected" : ""}
          >
            <img src={proSvg} alt="Pro" />
            <div className="nameAndPriceInOptions">
              {" "}
              <h3>Pro</h3>
              <p>${toggleOptions ? "150" : "15"}/mo</p>{" "}
              {!toggleOptions === false ? <div>2 months free</div> : ""}
            </div>
          </div>
        </div>
        <div className="toggle-container">
          <div onClick={() => setToggleOptions(true)}>Monthly</div>
          <div className="toggle">
            {" "}
            <input type="checkbox" checked={toggleOptions} onChange={toggle} />
            <span className="slider" onClick={toggle}></span>
          </div>
          <div onClick={() => setToggleOptions(false)}>Yearly</div>
        </div>
        {validate && <div className="validate">{validate}</div>}
        {windowSize > 768 ? (
          <WindowSize
            setWindowSize={setWindowSize}
            prevStep={prevStep}
            handleNextStep={handleNextStep}
            nextStep={"Next Step"}
          />
        ) : (
          ""
        )}
      </div>{" "}
      {windowSize < 768 ? (
        <WindowSize
          setWindowSize={setWindowSize}
          prevStep={prevStep}
          handleNextStep={handleNextStep}
          nextStep={"Next Step"}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default Step2;
