import React, { useEffect, useState } from "react";
import "./Skills.css";
import UpArrow from "./../../asset/UpArrow.png";
import DownArrow from "./../../asset/DownArrow.png";
import axios from "axios";
import { SERVER_BASE_URL, SKILLS } from "../../constants/serverPath";

const Skills = ({ selectedSkills, setSelectedSkills }) => {
  // Local Component
  const [openSkills, setOpenSkills] = useState(false);

  // For API
  const [skills, setSkills] = useState("");

  // const token = getTokenFromLocalStorage();

  useEffect(() => {
    if (openSkills) {
      axios
        .get(SERVER_BASE_URL + SKILLS)
        .then((skills) => {
          setSkills(skills.data.data.skills);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  const handleOpenDropdown = () => {
    setOpenSkills(!openSkills);
  };

  return (
    <div onClick={handleOpenDropdown} className="SkillsContianer">
      Skills {!openSkills ? <img src={DownArrow} /> : <img src={UpArrow} />}
      {openSkills ? (
        <div className="AllSkills">
          {!skills
            ? ""
            : skills.map((skill) => {
                return (
                  <div
                    onClick={(e) =>
                      setSelectedSkills([...selectedSkills, skill.skillName])
                    }
                    key={skill._id}
                  >
                    {skill.skillName}
                  </div>
                );
              })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Skills;
