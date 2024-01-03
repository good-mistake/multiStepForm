import { useState, useEffect } from "react";
const Step1 = ({ nextStep }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [nameValidate, setNameValidate] = useState("");
  const [emailValidate, setemailValidate] = useState("");
  const [numberValidate, setNumberValidate] = useState("");
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  console.log(windowSize);
  const emailValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handelNextStep = (e) => {
    e?.preventDefault();
    if (name.trim() === "") {
      setNameValidate("This field is required");
    } else {
      setNameValidate("");
    }
    if (email.trim() === "") {
      setemailValidate("This field is required");
    } else if (!emailValidation(email.trim())) {
      setemailValidate("Please enter a correct email address");
    } else {
      setemailValidate("");
    }
    if (number.trim() === "") {
      setNumberValidate("This field is required");
    } else if (typeof number !== Number) {
      setNumberValidate("Please enter a number");
    } else {
      setNumberValidate("");
    }
    if (
      name.trim() !== "" &&
      emailValidation(email.trim()) &&
      number.trim() !== ""
    ) {
      nextStep();
    }
  };
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
      <div className="stepContainer">
        {" "}
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form action="">
          <div>
            <div>
              {" "}
              <label htmlFor="name">Name</label>
              <div className="validation">{nameValidate}</div>
            </div>

            <input
              type="text"
              placeholder="e.g. Stephen King"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={!nameValidate ? "" : "inputValidation"}
              required
            />
          </div>{" "}
          <div>
            <div>
              {" "}
              <label htmlFor="email">Email Address</label>{" "}
              <div className="validation">{emailValidate}</div>
            </div>

            <input
              type="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={!emailValidate ? "" : "inputValidation"}
              required
            />
          </div>{" "}
          <div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <div className="validation">{numberValidate}</div>
            </div>

            <input
              type="tel"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className={!numberValidate ? "" : "inputValidation"}
              required
            />
          </div>
        </form>{" "}
        {windowSize > 768 ? (
          <div className="step1Btn">
            <button className="nextButton" onClick={handelNextStep}>
              Next Step
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {windowSize < 768 ? (
        <div className="step1Btn">
          <button className="nextButton" onClick={handelNextStep}>
            Next Step
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Step1;
