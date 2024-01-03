import { useState } from "react";
import WindowSize from "./WindowSize";
const Step3 = ({
  nextStep,
  prevStep,
  setSelectedAddons,
  selectedOptionsTime,
}) => {
  const [onlineChecked, setOnlineChecked] = useState(false);
  const [storageChecked, setStorageChecked] = useState(false);
  const [customChecked, setCustomChecked] = useState(false);
  const [validate, setValidate] = useState("");
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const itemPrice = (price) => {
    return selectedOptionsTime.time === "(Monthly)" ? price : price * 10;
  };
  const itemPriceLabel = (price) => {
    const formatPrice =
      selectedOptionsTime.time === "(Yearly)"
        ? `+${price * 10}/yr`
        : `+$${price}/mo`;
    return <div>{formatPrice}</div>;
  };
  const handleCheckbox = (num) => {
    switch (num) {
      case 1:
        setOnlineChecked((prev) => !prev);

        break;
      case 2:
        setStorageChecked((prev) => !prev);

        break;
      case 3:
        setCustomChecked((prev) => !prev);

        break;
      default:
        break;
    }
  };
  const handleNextStep = () => {
    const items = [];

    if (onlineChecked) {
      items.push({
        name: "Online service",
        price: itemPrice(1),
      });
    }
    if (storageChecked) {
      items.push({
        name: "Larger storage",
        price: itemPrice(2),
      });
    }
    if (customChecked) {
      items.push({
        name: "Customizable Profile",
        price: itemPrice(2),
      });
    }

    if (items.length === 0) {
      setValidate("You must select at least one add-on");
    } else {
      setValidate("");
      setSelectedAddons(items);
      nextStep();
    }
  };

  return (
    <>
      <div className="stepContainer">
        {" "}
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className="addonstOption">
          <div className={`${onlineChecked ? "selected " : ""}`}>
            <div>
              {" "}
              <input
                type="checkbox"
                name="onlineService"
                id="onlineService"
                onChange={() => handleCheckbox(1)}
              />
              <label htmlFor="onlineService">
                Online service <span>Access to multiplayer games</span>
              </label>
            </div>
            {itemPriceLabel(1)}
          </div>
          <div className={`${storageChecked ? "selected " : ""}`}>
            <div>
              <input
                type="checkbox"
                name="largerStorage"
                id="largerStorage"
                onChange={() => handleCheckbox(2)}
              />
              <label htmlFor="largerStorage">
                Larger storage <span>Extra 1TB of cloud save</span>
              </label>
            </div>
            {itemPriceLabel(2)}
          </div>
          <div className={`${customChecked ? "selected " : ""}`}>
            {" "}
            <div>
              {" "}
              <input
                type="checkbox"
                name="customizeable"
                id="customizeable"
                onChange={() => handleCheckbox(3)}
              />
              <label htmlFor="customizeable">
                Customizable Profile <span>Custom theme on your profile</span>
              </label>
            </div>
            {itemPriceLabel(2)}
          </div>
        </div>{" "}
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
export default Step3;
