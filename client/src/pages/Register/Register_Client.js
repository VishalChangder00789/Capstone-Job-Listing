import React, { useState } from "react";
import "./Register_Client_Left.css";
import "./Register_Client_Right.css";
import BackgroundImage from "../../asset/background.png";
import axios from "axios";
import { sendTokenToLocalStorage } from "../../controller/isLoggedIn";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleCreateAccount = async (
    e,
    name,
    email,
    mobile,
    password,
    checkbox,
    passwordConfirm
  ) => {
    if (
      !name ||
      !email ||
      !mobile ||
      !password ||
      !checkbox ||
      !passwordConfirm
    ) {
      console.log(name, email, mobile, password, checkbox, passwordConfirm);
      return;
    }

    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/api/v1/_REGISTER",
      {
        name,
        email,
        mobile,
        password,
        passwordConfirm,
      }
    );

    // Storing the token to the local storage.
    sendTokenToLocalStorage(response.data.token);

    // Show the if user is logged in or not and update in the redux store

    // Put navigation to the dashboard with logged In
  };

  return (
    <div className="RegisterContainer">
      <div className="RegisterContainer-LeftPart">
        <div className="RegisterContainer-LeftPart-TopContent">
          <div className="RegisterContainer-LeftPart-Heading">
            Create an account
          </div>
          <div className="RegisterContainer-LeftPart-Sub-Heading">
            Your personal job finder is here
          </div>
        </div>
        <div className="RegisterContainer-LeftPart-MidContent">
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="RegisterContainer-LeftPart-MidContent-Input"
          />
          <input
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="RegisterContainer-LeftPart-MidContent-Input"
          />
          <input
            name="mobile"
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile"
            className="RegisterContainer-LeftPart-MidContent-Input"
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="RegisterContainer-LeftPart-MidContent-Input"
          />

          <input
            name="passwordConfirm"
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="Password Confirm"
            className="RegisterContainer-LeftPart-MidContent-Input"
          />

          <div>
            <input
              name="password"
              type="checkbox"
              value={checkbox}
              onChange={(e) => setCheckBox(!checkbox)}
              className="RegisterContainer-LeftPart-MidContent-Input"
            />
            By creating an account, I agree to our terms of use and privacy
            policy
          </div>
        </div>
        <div className="RegisterContainer-LeftPart-BottomContent">
          <button
            onClick={(e) =>
              handleCreateAccount(
                e,
                name,
                email,
                mobile,
                password,
                checkbox,
                passwordConfirm
              )
            }
            className="RegisterContainer-LeftPart-BottomContent-Button"
          >
            Create Account
          </button>
          <div className="RegisterContainer-LeftPart-BottomContent-Link">
            Already have an account? Link Sign In
          </div>
        </div>
      </div>
      <div className="RegisterContainer-RightPart">
        <img
          src={BackgroundImage}
          className="RegisterContainer-RighttPart-Image"
        />
        <div className="RegisterContainer-RighttPart-Heading">
          Your Personal Job Finder
        </div>
      </div>
    </div>
  );
};

export default Register;
