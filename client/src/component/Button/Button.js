import React from "react";
import "./Button.css";

const Button = ({ ButtonTitle, onClickHandler, cancelButton }) => {
  return (
    <div
      onClick={onClickHandler}
      className={`ButtonContainer ${cancelButton ? `Cancel` : ""}`}
    >
      {ButtonTitle}
    </div>
  );
};

export default Button;
