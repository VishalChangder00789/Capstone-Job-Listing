import React, { useEffect, useState } from "react";
import "./Dropdown.css";
import downArrow from "../../asset/DownArrow.png";
import upArrow from "../../asset/UpArrow.png";
import { nanoid } from "nanoid";

const Dropdown = ({ label, title, options, setValue }) => {
  const [OpenDropDown, setOpenDropDown] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.className !== "DropdownContainer") {
        setOpenDropDown(false);
      }
    });

    return document.removeEventListener("click", () => {
      setOpenDropDown(false);
    });
  }, []);

  return (
    <div className="DropdownMainContainier">
      <label>{label}</label>
      <div
        onClick={() => setOpenDropDown(!OpenDropDown)}
        className="DropdownContainer"
      >
        {title} <img src={OpenDropDown ? upArrow : downArrow} />
        {!OpenDropDown ? (
          ""
        ) : (
          <div className="InnerDropDownContainer">
            {options.map((op) => {
              return (
                <div
                  onClick={() => setValue(op)}
                  key={nanoid()}
                  className="DropDownItem"
                >
                  {op}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
