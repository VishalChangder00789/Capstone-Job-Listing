import React from "react";
import "./ErrorComponent.css";

const ErrorComponent = ({ message }) => {
  return (
    <div className="ErrorComponentContainer">
      <div className="ErrorComponentInnerComponent">{message}</div>
    </div>
  );
};

export default ErrorComponent;
