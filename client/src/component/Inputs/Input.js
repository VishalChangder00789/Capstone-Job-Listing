import React from "react";
import "./Input.css";

const Input = ({ name, type, placeholder, setState, stateValue, label }) => {
  return !label ? (
    <div className="InputContainer">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setState(e.target.value)}
        value={stateValue}
      />
    </div>
  ) : (
    <div className="InputContainer">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => setState(e.target.value)}
        value={stateValue}
      />
    </div>
  );
};

export default Input;
