import React, { useState } from "react";
import "./Skills.css";
import UpArrow from "./../../asset/UpArrow.png";
import DownArrow from "./../../asset/DownArrow.png";

const Skills = () => {
  // Local Component
  const [openSkills, setOpenSkills] = useState(false);

  const handleOpenDropdown = () => {
    setOpenSkills(!openSkills);
  };

  return (
    <div onClick={handleOpenDropdown} className="SkillsContianer">
      Skills {!openSkills ? <img src={DownArrow} /> : <img src={UpArrow} />}
    </div>
  );
};

export default Skills;
