import React, { useEffect, useState } from "react";
import "./Input.css";
import { useSearchParams } from "react-router-dom";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { EMAIL, NAME, PASSWORD } from "../../constants/inputNames";
import {
  isCorrectEmail,
  isCorrectPassword,
} from "../../controller/inputControllers";

const Input = ({
  name,
  type,
  placeholder,
  setState,
  stateValue,
  label,
  setGoodToGo,
}) => {
  // Using the debouncing feature

  const [Error, setError] = useState("");
  const [InputValue, setInputValue] = useState("");
  const [MainInputValue, setMainInputValue] = useState("");
  const [SubmissionClear, setSubmissionClear] = useState(false);

  //#region ---------------------------  INPUTS CHECK : INPUTS CHECK ---------------------------

  useEffect(() => {
    let timerId = setTimeout(() => {
      setMainInputValue(InputValue);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [InputValue]);

  // If Inputs are Correct or not
  useEffect(() => {
    if (name === EMAIL) {
      isCorrectEmail(MainInputValue, setError, setSubmissionClear);
    } else if (name === PASSWORD) {
      isCorrectPassword(MainInputValue, setError, setSubmissionClear);
    }
  }, [MainInputValue]);

  //#endregion ---------------------------  INPUTS CHECK : INPUTS CHECK ---------------------------

  //#region ---------------------------  INPUTS CHECK : SUBMISSION CLEAR ---------------------------

  // If everything is good
  useEffect(() => {
    if (SubmissionClear) {
      setState(MainInputValue);
      setGoodToGo(true);
    }
  }, [SubmissionClear]);

  //#endregion ---------------------------  INPUTS CHECK : SUBMISSION CLEAR ---------------------------

  return !label ? (
    <div className="InputContainer">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.target.value)}
        value={InputValue}
      />
      {Error ? <ErrorComponent message={Error} /> : ""}
    </div>
  ) : (
    <div className="InputContainer">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.target.value)}
        value={InputValue}
      />
    </div>
  );
};

export default Input;
