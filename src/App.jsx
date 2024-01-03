import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const change = () => {
    setStep(step - 2);
  };
  const renderSteps = () => {
    switch (step) {
      case 1:
        return <Step1 nextStep={nextStep} />;
      case 2:
        return (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            handleSelectedOption={handleSelectedOption}
          />
        );
      case 3:
        return (
          <Step3
            nextStep={nextStep}
            prevStep={prevStep}
            selectedOptionsTime={selectedOption}
            selectedAddons={selectedAddons}
            setSelectedAddons={setSelectedAddons}
          />
        );
      case 4:
        return (
          <Step4
            nextStep={nextStep}
            prevStep={prevStep}
            selectedOption={selectedOption}
            selectedAddons={selectedAddons}
            change={change}
          />
        );
      case 5:
        return <Step5 />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="container">
        <div className="sideBar">
          <ol>
            {" "}
            <li>
              {" "}
              <div className={`pageNumber ${step === 1 ? "active" : ""}`}>
                1
              </div>
              <div className="stepNumber">
                <span>STEP 1</span>YOUR INFO
              </div>
            </li>
            <li>
              <div className={`pageNumber ${step === 2 ? "active" : ""}`}>
                2
              </div>{" "}
              <div className="stepNumber">
                {" "}
                <span>STEP 2</span>SELECT PLAN
              </div>
            </li>
            <li>
              <div className={`pageNumber ${step === 3 ? "active" : ""}`}>
                3
              </div>
              <div className="stepNumber">
                {" "}
                <span>STEP 3</span>ADD-ONS
              </div>
            </li>
            <li>
              <div className={`pageNumber ${step === 4 ? "active" : ""}`}>
                4
              </div>
              <div className="stepNumber">
                {" "}
                <span>STEP 4</span>SUMMARY
              </div>
            </li>
          </ol>
        </div>
        <div className="info">{renderSteps()}</div>
      </div>
    </>
  );
}

export default App;
