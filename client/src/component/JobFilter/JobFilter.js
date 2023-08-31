import React, { useState } from "react";
import "./JobFilter.css";
import SearchIcon from "../../asset/Search.png";
import Skills from "../Skills/Skills";

const JobFilter = ({ setSearchTerm, searchTerm }) => {
  const [skills, setSkills] = useState("");

  return (
    <div className="JobFilterContainer">
      <div className="JobFilterContainer-InnerContent">
        <div className="JobFilterContainer-InnerContent-Inputs">
          <img src={SearchIcon} />
          <input
            type="text"
            placeholder="Type any job title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="JobFilterContainer-InnerContent-SkillsContainer">
          {/* Create a skill drop down component */}
          <Skills />
          <div className="JobFilterContainer-InnerContent-SkillsContianer-nextContent">
            {" "}
            Add an Editable skills sets
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
