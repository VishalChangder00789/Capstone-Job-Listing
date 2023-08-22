import React, { useState, useSyncExternalStore } from "react";
import "./Login_Client_Left.css";
import "./Login_Client_Right.css";
import BackgroundImage from "../../asset/background.png";
import axios from "axios";
import { sendTokenToLocalStorage } from "../../controller/isLoggedIn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e, email, password) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/v1/_LOGIN", {
      email: email,
      password: password,
    });

    // Storing the token to the local storage.
    sendTokenToLocalStorage(response.data.token);

    // Show the if user is logged in or not and update in the redux store

    // Put navigation
  };

  return (
    <div className="LoginContainer">
      <div className="LoginContainer-LeftPart">
        <div className="LoginContainer-LeftPart-TopContent">
          <div className="LC-LP-TC-Heading">Already have an account ?</div>
          <div className="LC-LP-TC-Sub-Heading">
            Your personal job finder is here
          </div>
        </div>
        <div className="LoginContainer-LeftPart-MidContent">
          <input
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="LoginContainer-LeftPart-MidContent-Input"
          />
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="LoginContainer-LeftPart-MidContent-Input"
          />
        </div>
        <div className="LoginContainer-LeftPart-BottomContent">
          <button
            onClick={(e) => handleLogin(e, email, password)}
            className="LoginContainer-LeftPart-BottomContent-Button"
          >
            Sign In
          </button>
          <div className="LoginContainer-LeftPart-BottomContent-Link">
            Don’t have an account? Add a link
          </div>
        </div>
      </div>
      <div className="LoginContainer-RightPart">
        <img
          src={BackgroundImage}
          className="LoginContainer-RighttPart-Image"
        />
        <div className="LoginContainer-RighttPart-Heading">
          Your Personal Job Finder
        </div>
      </div>
    </div>
  );
};

export default Login;
