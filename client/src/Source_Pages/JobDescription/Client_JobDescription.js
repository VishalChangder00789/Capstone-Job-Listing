import React, { useEffect, useState } from "react";
import "./Client_JobDescription.css";
import Navbar from "../../component/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SERVER_BASE_URL, SERVER_GETJOBS } from "../../constants/serverPath";
import { getTokenFromLocalStorage } from "../../controller/getTokenFromLocalStorage";
import money from "../../asset/money.png";
import bag from "../../asset/bag.png";
import { useNavigate } from "react-router-dom";
import { ADDJOBS, BASE_URL, EDITJOBS, SINGLEJOB } from "../../constants/paths";
import { addEditJob } from "../../store/SelectedJobForEdit";

const JobDescription = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedJob = useSelector((state) => state.SelectedJob);
  const [JobDisplay, setJobDisplay] = useState("");
  const token = getTokenFromLocalStorage();

  const handleEdit = (id) => {
    axios
      .get(SERVER_BASE_URL + SERVER_GETJOBS + `/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        navigate(EDITJOBS);
        dispatch(addEditJob(id));
      });
  };

  useEffect(() => {
    axios
      .get(SERVER_BASE_URL + SERVER_GETJOBS + `/${selectedJob.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setJobDisplay(data.data.data.job);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(JobDisplay);
  return (
    <div className="JobsDescriptionContainer">
      <Navbar logIn={token ? true : false} />
      {JobDisplay ? (
        <div className="JobsDescriptionContainer-body">
          <div className="JobsDescriptionContainer-body-NameComponent">
            {JobDisplay.jobPosition}/{JobDisplay.jobType} at{" "}
            {JobDisplay.companyName}
          </div>

          <div className="JobsDescriptionContainer-body-Description">
            <div className="JobDescription-body-Description-image">
              <div>{JobDisplay.jobType}</div>
              <div className="JobImage">{<img src={JobDisplay.logoUrl} />}</div>
              <div>{JobDisplay.companyName}</div>
            </div>

            <div className="JobDescription-body-Description-firstContent">
              <div className="JobDescription-body-Description-firstContent-Name">
                <div className="Content">
                  <div className="Position">{JobDisplay.jobPosition}</div>{" "}
                  <div className="EditButton">
                    {!token ? (
                      ""
                    ) : (
                      <button onClick={() => handleEdit(selectedJob.id)}>
                        Edit
                      </button>
                    )}
                  </div>
                </div>
                <div className="Location">{JobDisplay.location}</div>
              </div>

              <div className="JobDescription-body-Description-firstContent-Details">
                <div className="DetailsContent">
                  <div>
                    <img src={money} />
                    Salary
                  </div>
                  <div>{JobDisplay.monthlySalary}/ month</div>
                </div>

                <div className="DetailsContent">
                  <div>
                    <img src={bag} />
                    Duration
                  </div>
                  <div>6 months</div>
                </div>

                <div></div>
              </div>

              <div className="JobDescription-body-Description-firstContent-CompanyInformation">
                <div className="Heading">About Company</div>
                <div>{JobDisplay.aboutCompany}</div>
              </div>

              <div className="JobDescription-body-Description-firstContent-JobInformation">
                <div className="Heading">About the job/internship</div>
                <div>{JobDisplay.jobDescription}</div>
              </div>

              <div className="JobDescription-body-Description-firstContent-SkillsRequired">
                <div className="Heading">Skill(s) required</div>
                <div>
                  {!JobDisplay.skillsRequired
                    ? ""
                    : JobDisplay.skillsRequired.map((s) => {
                        return <div className="SkillsContainer">{s}</div>;
                      })}
                </div>
              </div>

              <div className="JobDescription-body-Description-firstContent-AdditionalInformation">
                <div className="Heading">Additional Information</div>
                <div>{JobDisplay.information}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default JobDescription;
