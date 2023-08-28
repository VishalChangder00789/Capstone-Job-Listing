import React, { useState } from "react";
import "./Client_Login.css";
import Background from "../../asset/background.png";
import Input from "../../component/Inputs/Input";
import Button from "../../component/Button/Button";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import axios from "axios";

import { BASE_URL, LOGIN, REGISTER } from "../../constants/paths";
import { SERVER_BASE_URL, SERVER_LOGIN } from "../../constants/serverPath";
import { sendTokenToLocalStorage } from "../../controller/isLoggedIn";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const SignIn = (e, Email, Password) => {
    let token = "";

    axios
      .post(SERVER_BASE_URL + SERVER_LOGIN, {
        email: Email,
        password: Password,
      })
      .then((res) => {
        token = res.data.token;
        sendTokenToLocalStorage(token);
        console.log("Token sent to local storage");
        navigate(BASE_URL);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Make a div outer and then start working inside

  return (
    <div className="LoginContainer">
      <div className="LoginContainer_LeftSection">
        <div className="LoginContainer_LeftSection_TopContent">
          <div className="LoginContainer_LeftSection_TopContent_Content">
            <h1>Already have an account?</h1>
            <h4>Your personal job finder is here</h4>
          </div>

          <div className="LoginContainer_LeftSection_FormContainer">
            <Input
              name="Email"
              type="text"
              placeholder="Email"
              setState={setEmail}
              stateValue={Email}
            />

            <Input
              name="Password"
              type="password"
              placeholder="Password"
              setState={setPassword}
              stateValue={Password}
            />

            <Button
              ButtonTitle="Sign In"
              onClickHandler={(e) => SignIn(e, Email, Password)}
            />
          </div>
          <div className="LoginContainer_LeftSection_BottomContent">
            Don’t have an account? <Link to={BASE_URL + REGISTER}>Sign Up</Link>
          </div>
        </div>
      </div>
      <div className="LoginContainer_RightSection">
        <div>Your Personal Job Finder</div>
        <img src={Background} />
      </div>
    </div>
  );
};

export default Login;
