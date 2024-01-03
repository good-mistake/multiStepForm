import { useState } from "react";
import WindowSize from "./WindowSize";
const Step4 = ({
  prevStep,
  nextStep,
  selectedOption,
  selectedAddons,
  change,
}) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const addonsPrice = selectedAddons.map((item) => item.price);
  const result = Object.values(addonsPrice).reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );

  return (
    <>
      <div className="stepContainer">
        {" "}
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className="selectedItems">
          <div className="selectedPlan">
            {" "}
            <div>
              <div>
                {selectedOption?.name}
                <span>{selectedOption.time}</span>
              </div>{" "}
              <button className="changeBtn" onClick={change}>
                Change
              </button>
            </div>
            <div>{selectedOption.price}</div>
          </div>

          <div className="selectedAddons">
            {selectedAddons.map((addon, index) => (
              <div key={index}>
                <div>{addon.name}</div>
                <div>{`+$${addon.price}/mo`}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="total">
            <div>{`Total(per year)`}</div>
            <div>{result + parseInt(selectedOption.price)}</div>
          </div>
        </div>
        {windowSize > 768 ? (
          <WindowSize
            setWindowSize={setWindowSize}
            prevStep={prevStep}
            handleNextStep={nextStep}
            nextStep={"Confirm"}
          />
        ) : (
          ""
        )}
      </div>{" "}
      {windowSize < 768 ? (
        <WindowSize
          setWindowSize={setWindowSize}
          prevStep={prevStep}
          handleNextStep={nextStep}
          nextStep={"Confirm"}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default Step4;
