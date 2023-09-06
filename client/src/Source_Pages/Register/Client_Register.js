import React, { useState, useEffect } from "react";
import "./Client_Register.css";
import Background from "../../asset/background.png";
import Input from "../../component/Inputs/Input";
import Button from "../../component/Button/Button";
import { BASE_URL, HOME, LOGIN, REGISTER } from "../../constants/paths";
import { Link, useNavigate } from "react-router-dom";
import { SERVER_BASE_URL, SERVER_REGISTER } from "../../constants/serverPath";
import axios from "axios";
import { sendTokenToLocalStorage } from "../../controller/isLoggedIn";
import warning from "../../asset/warning.png";

import {
  EMAIL,
  NAME,
  PASSWORD,
  PASSWORDCONFIRM,
  PHONE,
  CHECKBOX,
} from "../../constants/inputNames";
import { useDispatch } from "react-redux";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { addLoggedInUser } from "../../store/UserLoggedInJobSlice";

const Register = () => {
  const navigate = useNavigate();

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");
  const [CheckBox, setCheckBox] = useState(undefined);
  const [GoodToGo, setGoodToGo] = useState("");
  const [Error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {});

  // Form Rectification
  useEffect(() => {
    setError("");
    return;
  }, [GoodToGo]);

  const Register = (e, Name, Email, Mobile, Password, PasswordConfirm) => {
    console.log(Email, Name, Mobile, Password, PasswordConfirm);

    axios
      .post(SERVER_BASE_URL + SERVER_REGISTER, {
        name: Name,
        email: Email,
        password: Password,
        passwordConfirm: PasswordConfirm,
      })
      .then((data) => {
        sendTokenToLocalStorage(data.data.token);

        // Name component in navbar
        const dataObj = { ...data };
        dispatch(addLoggedInUser(dataObj.data.data.newUser));

        navigate(BASE_URL + HOME);
      })
      .catch((error) => {
        console.log(error);
        let ErrorData = error.response.data;
        if (ErrorData.status === "fail") {
          setError("Email or Password is incorrect");
          return;
        }

        if (ErrorData.status === "error") {
          setError("Provide proper Inputs");
          return;
        }
      });
  };

  // Make a div outer and then start working inside

  return (
    <div className="RegisterContainer">
      <div className="RegisterContainer_LeftSection">
        <div className="RegisterContainer_LeftSection_TopContent">
          <div className="RegisterContainer_LeftSection_TopContent_Content">
            <h1>Create an account</h1>
            <h4>Your personal job finder is here</h4>
          </div>

          <div className="RegisterContainer_LeftSection_FormContainer">
            <Input
              name={NAME}
              type="text"
              placeholder="Name"
              setState={setName}
              stateValue={Name}
              setGoodToGo={setGoodToGo}
            />

            <Input
              name={EMAIL}
              type="text"
              placeholder="Email"
              setState={setEmail}
              stateValue={Email}
              setGoodToGo={setGoodToGo}
            />

            <Input
              name={PHONE}
              type="number"
              placeholder="Mobile"
              setState={setMobile}
              stateValue={Mobile}
              setGoodToGo={setGoodToGo}
            />

            <Input
              name={PASSWORD}
              type="password"
              placeholder="Password"
              setState={setPassword}
              stateValue={Password}
              setGoodToGo={setGoodToGo}
            />

            <Input
              name={PASSWORDCONFIRM}
              type="password"
              placeholder="Password Confirm"
              setState={setPasswordConfirm}
              stateValue={PasswordConfirm}
              setGoodToGo={setGoodToGo}
            />

            <div className="CheckBoxCustom">
              <Input
                name={CHECKBOX}
                type="checkbox"
                setState={setCheckBox}
                stateValue={CheckBox}
                setGoodToGo={setGoodToGo}
              />
              <div className="CheckBoxDiv">
                By creating an account, I agree to our terms of use and privacy
                policy
              </div>
            </div>

            <Button
              ButtonTitle="Register"
              onClickHandler={(e) =>
                Register(e, Name, Email, Mobile, Password, PasswordConfirm)
              }
            />
          </div>

          <div className="RegisterContainer_LeftSection_BottomContent">
            Already have an account?? <Link to={BASE_URL + LOGIN}>Login</Link>
            {Error ? (
              <div className="ErrorClass Register">
                <img src={warning} />
                {Error}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="RegisterContainer_RightSection">
        <div>Your Personal Job Finder</div>
        <img src={Background} />
      </div>
    </div>
  );
};

export default Register;
