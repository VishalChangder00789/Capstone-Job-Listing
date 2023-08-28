import React, { useEffect, useState } from "react";
import "./Navbar.css";
import NavbarImage from "../../asset/Navbar.png";
import { useNavigate } from "react-router-dom";
import { BASE_URL, LOGIN, REGISTER } from "../../constants/paths";
import user from "../../asset/user.png";
import { removeTokenFromLocalStorge } from "../../controller/removeTokenFromLocalStorage";

const Navbar = ({ logIn }) => {
  // Login logic completed

  const [isloggedIn, setIsLoggedIn] = useState(); // need to make it external
  const navigate = useNavigate();

  const handleLogOut = () => {
    removeTokenFromLocalStorge();
    window.location.reload();
  };

  useEffect(() => {
    setIsLoggedIn(logIn);
  }, []);

  return (
    <div className="NavbarContainer">
      <img src={NavbarImage} />

      <div className="NavbarContainer-Buttons">
        {isloggedIn ? (
          <div className="NavbarContainer-Profile">
            <button onClick={handleLogOut}>Logout</button>
            <div>
              Hello! Name of the Recruiter
              <div>
                <img src={user} />
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
