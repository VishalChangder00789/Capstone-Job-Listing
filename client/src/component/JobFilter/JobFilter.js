import React, { useEffect, useState } from "react";
import "./JobFilter.css";
import SearchIcon from "../../asset/Search.png";
import Skills from "../Skills/Skills";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { SERVER_BASE_URL } from "../../constants/serverPath";
import { BASE_URL, ADDJOBS } from "../../constants/paths";

const JobFilter = ({ setSearchTerm, searchTerm }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [JobType, setJobType] = useState("");
  const navigate = useNavigate();

  const handleAddJobButton = () => {
    navigate(ADDJOBS);
  };

  const removeItem = (skillName) => {
    const selectedSkillsList = [...selectedSkills];

    const remaningSkills = selectedSkillsList.filter(
      (skills) => skills !== skillName
    );
    setSelectedSkills(remaningSkills);
  };

  useEffect(() => {
    setSearchTerm({
      jobType: JobType,
      skillsRequired: selectedSkills,
    });
  }, [JobType, selectedSkills]);

  return (
    <div className="JobFilterContainer">
      <div className="JobFilterContainer-InnerContent">
        <div className="JobFilterContainer-InnerContent-Inputs">
          <img src={SearchIcon} />
          <input
            type="text"
            placeholder="Type any job title"
            value={JobType}
            onChange={(e) => setJobType(e.target.value)}
          />
        </div>
        <div className="JobFilterContainer-InnerContent-SkillsContainer">
          {/* Create a skill drop down component */}
          <Skills
            setSelectedSkills={setSelectedSkills}
            selectedSkills={selectedSkills}
          />
          <div className="JobFilterContainer-InnerContent-SkillsContianer-nextContent">
            {!selectedSkills
              ? ""
              : selectedSkills.map((m) => {
                  return (
                    <div className="SingleSkillComponent">
                      {m}
                      <div onClick={() => removeItem(m)}>X</div>
                    </div>
                  );
                })}
          </div>

          <div className="JobFilter-InnerContent-SkillsContainer-addJobButton">
            <button onClick={handleAddJobButton}>+ Add Job</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
