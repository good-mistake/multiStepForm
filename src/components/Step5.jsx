import React from "react";
import thankSvg from "../images/icon-thank-you.svg";
const Step5 = () => {
  return (
    <>
      <div className="thankYouStep">
        <img src={thankSvg} alt="Thank You" />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </>
  );
};

export default Step5;
