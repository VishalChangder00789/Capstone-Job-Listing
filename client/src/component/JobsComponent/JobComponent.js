import React from "react";
import "./JobComponent.css";
import { getDefaultNormalizer } from "@testing-library/react";

const JobComponent = ({
  name,
  people,
  rupees,
  location,
  skills,
  remote,
  fullTime,
}) => {
  return (
    <div className="JobComponentContainer">
      {/* Logo Image */}
      <div className="JobComponentContainer-ImageContainer">
        <img /> Company Logo
      </div>

      {/* Second Division */}

      <div className="JobComponentContainer-InformationContainer">
        <div className="JobComponentContainer-InformationContainer-Name">
          Company Name
        </div>
        <div className="JobComponentContainer-InformationContainer-CompanyDetail">
          <div>People</div>
          <div>Rupees</div>
          <div>Location</div>
        </div>

        <div className="JobComponentContainer-InformationContainer-JobType">
          <div>Office</div>
          <div>Full Time</div>
        </div>
      </div>

      {/* Third Division */}
      <div className="JobConmponentContainer-Skills">
        <div>All Skills in horizontal</div>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default JobComponent;
