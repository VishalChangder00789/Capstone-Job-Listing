import React, { useEffect, useState } from "react";
import "./Navbar.css";
import NavbarImage from "../../asset/Navbar.png";
import { useNavigate, useRoutes } from "react-router-dom";
import { BASE_URL, LOGIN, REGISTER } from "../../constants/paths";
import userImage from "../../asset/user.png";
import { removeTokenFromLocalStorge } from "../../controller/removeTokenFromLocalStorage";
import { getUserNameFromLocalStorage } from "../../controller/userNameController";

const Navbar = ({ logIn }) => {
  // Login logic completed

  const [isloggedIn, setIsLoggedIn] = useState(); // need to make it external
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleLogOut = () => {
    removeTokenFromLocalStorge();
    window.location.reload();
  };

  useEffect(() => {
    setIsLoggedIn(logIn);
    setUserName(getUserNameFromLocalStorage());
  }, []);

  return (
    <div className="NavbarContainer">
      <img src={NavbarImage} />

      <div className="NavbarContainer-Buttons">
        {isloggedIn ? (
          <div className="NavbarContainer-Profile">
            <button onClick={handleLogOut}>Logout</button>
            <div>
              Hello!
              {!userName ? "User" : ` ${userName}`}
              <div>
                <img src={userImage} />
              </div>
            </div>
          </div>
        ) : (
          <>
            <button
              onClick={() => navigate(BASE_URL + LOGIN)}
              className="LoginButton"
            >
              Login
            </button>
            <button
              onClick={() => navigate(BASE_URL + REGISTER)}
              className="RegisterButton"
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
