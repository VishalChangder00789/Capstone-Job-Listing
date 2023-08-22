import React, { useState } from "react";
import "./Navbar.css";
import TopImage from "../../asset/TopImage.png";

const Navbar = () => {
  // Login logic completed

  const [isloggedIn, setIsLoggedIn] = useState(false); // need to make it external

  return (
    <div className="Navbar-Container">
      <div className="Navbar-Container-ImageContainer">
        <img src={TopImage} />
      </div>
      <div className="Navbar-Container-InteractiveElements">
        {!isloggedIn ? (
          <>
            <button className="Navbar-Container-InteractiveElements-Button Login">
              Log In
            </button>
            <button className="Navbar-Container-InteractiveElements-Button Register">
              Register
            </button>
          </>
        ) : (
          <>
            <div className="Navbar-Container-InteractiveElements-Button Name">
              Name of the recruiter
            </div>
            <div className="Navbar-Container-InteractiveElements-Button Profile">
              Pic
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
