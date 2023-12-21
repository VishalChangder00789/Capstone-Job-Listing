import React, { useEffect, useState } from "react";
import "./JobComponent.css";
import { useDispatch } from "react-redux";
import { addJob } from "../../store/SelectedJobSlice";
import { addEditJob } from "../../store/SelectedJobForEdit";
import { useNavigate } from "react-router-dom";
import { ADDJOBS, BASE_URL, EDITJOBS, SINGLEJOB } from "../../constants/paths";
import { SERVER_BASE_URL, SERVER_GETJOBS } from "../../constants/serverPath";
import { getTokenFromLocalStorage } from "../../controller/getTokenFromLocalStorage";
import people from "../../asset/people.png";
import axios from "axios";

const JobComponent = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Skills, setSkills] = useState("");
  const token = getTokenFromLocalStorage();

  const handleJobComponentContainer = (jobId) => {
    dispatch(addJob(jobId));
    navigate(SINGLEJOB);
  };

  const handleEdit = (itemId) => {
    axios
      .get(SERVER_BASE_URL + SERVER_GETJOBS + `/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        navigate(EDITJOBS);
        dispatch(addEditJob(itemId));
      });
  };

  useEffect(() => {
    const Skills = item.skillsRequired;
    setSkills(Skills);
  }, []);

  return (
    <div id={item._id} className="JobComponentContainer">
      {/* Logo Image */}
      <div className="JobComponentContainer-ImageContainer">
        <img src={item.logoUrl} />
      </div>

      {/* Second Division */}

      <div className="JobComponentContainer-InformationContainer">
        <div className="JobComponentContainer-InformationContainer-Name">
          {item.companyName}
        </div>
        <div className="JobComponentContainer-InformationContainer-CompanyDetail">
          <div>
            <img src={people} />
            {item.totalPeople}
          </div>
          <div>{item.monthlySalary}</div>
          <div>{item.location}</div>
        </div>

        <div className="JobComponentContainer-InformationContainer-JobType">
          <div>{item.remoteOffice ? "Full Time" : "Remote"}</div>
          <div>Full Time</div>
        </div>
      </div>

      {/* Third Division */}
      <div className="JobConmponentContainer-Skills">
        <div className="JobConmponentContainer-Skills-SubContainer">
          {!Skills
            ? ""
            : Skills.map((skill) => {
                return <div>{skill}</div>;
              })}
        </div>
        <div className="JobConmponentContainer-Skills-ButtonsContainer">
          {!token ? (
            <div>
              <button onClick={() => handleJobComponentContainer(item._id)}>
                View Details
              </button>
            </div>
          ) : (
            <div>
              <button onClick={() => handleEdit(item._id)}>Edit</button>
              <button onClick={() => handleJobComponentContainer(item._id)}>
                View Details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobComponent;
