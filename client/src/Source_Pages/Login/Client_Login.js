import React, { useEffect, useState } from "react";
import "./Client_Login.css";
import Background from "../../asset/background.png";
import Input from "../../component/Inputs/Input";
import Button from "../../component/Button/Button";
import { useDispatch } from "react-redux";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import warning from "../../asset/warning.png";

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
import { addLoggedInUser } from "../../store/UserLoggedInJobSlice";
import { EMAIL, PASSWORD } from "../../constants/inputNames";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const [GoodToGo, setGoodToGo] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setError("");
    return;
  }, [GoodToGo]);

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

        // Storing the data to Client state
        const resObj = { ...res };
        dispatch(addLoggedInUser(resObj.data));

        navigate(BASE_URL);
      })
      .catch((error) => {
        // Error Handling
        let ErrorData = error.response.data;
        if (
          ErrorData.status === "fail" &&
          ErrorData.message === "Email or Password is not entered"
        ) {
          setError("Email or Password is incorrect");
          return;
        }
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
              name={EMAIL}
              type="text"
              placeholder="Email"
              setState={setEmail}
              stateValue={Email}
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

            <Button
              ButtonTitle="Sign In"
              onClickHandler={(e) => SignIn(e, Email, Password)}
            />
          </div>

          <div className="LoginContainer_LeftSection_BottomContent">
            Don’t have an account? <Link to={BASE_URL + REGISTER}>Sign Up</Link>
          </div>
        </div>
        {Error ? (
          <div className="ErrorClass">
            <img src={warning} />
            {Error}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="LoginContainer_RightSection">
        <div>Your Personal Job Finder</div>
        <img src={Background} />
      </div>
    </div>
  );
};

export default Login;
