import React, { useState } from "react";
import "./Client_Register.css";
import Background from "../../asset/background.png";
import Input from "../../component/Inputs/Input";
import Button from "../../component/Button/Button";
import { BASE_URL, HOME, LOGIN, REGISTER } from "../../constants/paths";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { SERVER_BASE_URL, SERVER_REGISTER } from "../../constants/serverPath";
import axios from "axios";
import { sendTokenToLocalStorage } from "../../controller/isLoggedIn";

const Register = () => {
  const navigate = useNavigate();

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");

  const Register = (e, Name, Email, Mobile, Password, PasswordConfirm) => {
    axios
      .post(SERVER_BASE_URL + SERVER_REGISTER, {
        name: Name,
        email: Email,
        password: Password,
        passwordConfirm: PasswordConfirm,
      })
      .then((data) => {
        sendTokenToLocalStorage(data.data.token);
        navigate(BASE_URL + HOME);
      })
      .catch((error) => {
        console.log(error);
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
              name="Name"
              type="text"
              placeholder="Name"
              setState={setName}
              stateValue={Name}
            />

            <Input
              name="Email"
              type="text"
              placeholder="Email"
              setState={setEmail}
              stateValue={Email}
            />

            <Input
              name="Mobile"
              type="number"
              placeholder="Mobile"
              setState={setMobile}
              stateValue={Mobile}
            />

            <Input
              name="Password"
              type="password"
              placeholder="Password"
              setState={setPassword}
              stateValue={Password}
            />

            <Input
              name="PasswordConfirm"
              type="password"
              placeholder="Password Confirm"
              setState={setPasswordConfirm}
              stateValue={PasswordConfirm}
            />

            <div>
              <Input
                name="Checkbox"
                type="checkbox"
                setState={setPassword}
                stateValue={Password}
              />
              <div>
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
