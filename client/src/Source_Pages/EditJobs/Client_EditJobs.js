import React, { useEffect, useState } from "react";
import axios from "axios";

// Local Imports
import "./Client_EditJobs.css";
import Background2 from "./../../asset/background2.png";
import Button from "../../component/Button/Button";
import { useNavigate } from "react-router-dom";
import { BASE_URL, HOME } from "../../constants/paths";

import { useSelector } from "react-redux";
import {
  SERVER_BASE_URL,
  SERVER_GETJOBS,
  SERVER_BASE_URL_SAFE,
} from "../../constants/serverPath";
import { getTokenFromLocalStorage } from "../../controller/getTokenFromLocalStorage";

// Patch is not working normally did a work around

const EditJobs = () => {
  const navigate = useNavigate();

  const [CompanyName, setCompanyName] = useState("");
  const [LogoURL, setLogoURL] = useState("");
  const [JobPosition, setJobPosition] = useState("");
  const [MonthlySalary, setMonthlySalary] = useState("");
  const [JobType, setJobType] = useState("");
  const [RemoteOffice, setRemoteOffice] = useState("");
  const [Location, setLocation] = useState("");
  const [JobDescription, setJobDescription] = useState("");
  const [AboutCompany, setAboutCompany] = useState("");
  const [SkillsRequired, setSkillsRequired] = useState("");
  const [Information, setInformation] = useState("");
  const token = getTokenFromLocalStorage();

  const selectedJobForEdit = useSelector((state) => state.SelectedJobForEdit);
  const [JobDisplay, setJobDisplay] = useState("");

  useEffect(() => {
    if (selectedJobForEdit) {
      axios
        .get(SERVER_BASE_URL + SERVER_GETJOBS + `/${selectedJobForEdit.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((data) => {
          const EditJob = data.data.data.job;
          setJobDisplay(EditJob);
          console.log(EditJob);

          setCompanyName(EditJob.companyName);
          setLogoURL(EditJob.logoUrl);
          setJobPosition(EditJob.jobPosition);
          setMonthlySalary(EditJob.monthlySalary);
          setLocation(EditJob.location);
          setJobDescription(EditJob.jobDescription);
          setAboutCompany(EditJob.aboutCompany);

          setJobType(EditJob.jobType);
          setRemoteOffice(EditJob.remoteOffice);

          // Make the skills required array to string
          let skills = EditJob.skillsRequired.toString();
          setSkillsRequired(skills);

          setInformation(EditJob.information);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);

  const EditJob = () => {
    if (
      !CompanyName ||
      !LogoURL ||
      !JobPosition ||
      !MonthlySalary ||
      !Location ||
      !JobDescription ||
      !AboutCompany ||
      !SkillsRequired ||
      !Information
    ) {
      return;
    }

    axios
      .patch(
        SERVER_BASE_URL + SERVER_GETJOBS + `/${selectedJobForEdit.id}`,
        {
          companyName: CompanyName,
          logoUrl: LogoURL,
          jobPosition: JobPosition,
          monthlySalary: MonthlySalary,
          location: Location,
          jobDescription: JobDescription,
          aboutCompany: AboutCompany,
          skillsRequired: SkillsRequired.split(","),
          information: Information,
          jobType: JobType,
          remoteOffice: RemoteOffice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        navigate(HOME);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Cancel = () => {
    setCompanyName("");
    setLogoURL("");
    setJobPosition("");
    setMonthlySalary("");
    setJobType("");
    setRemoteOffice("");
    setLocation("");
    setJobDescription("");
    setAboutCompany("");
    setSkillsRequired("");
    setInformation("");
  };

  return (
    <div className="EditJobContainer">
      <div className="EditJobContainer-LeftSection">
        <div className="EditJobContainer-LeftSection-TopContent">
          <div className="EditJobContainer-LeftSection-TopContent-Content">
            <h1>Update Job Description</h1>
          </div>

          <div className="EditJobContainer-LeftSection-FormContainer">
            <div className="InputContainer-EDIT-ADD">
              <label>Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
                value={CompanyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="InputContainer-EDIT-ADD">
              <label> Add Logo URL</label>
              <input
                type="text"
                placeholder="Add Logo URL"
                value={LogoURL}
                onChange={(e) => setLogoURL(e.target.value)}
              />
            </div>

            <div className="InputContainer-EDIT-ADD">
              <label> Job Position</label>
              <input
                type="text"
                placeholder="Add Job Position"
                value={JobPosition}
                onChange={(e) => setJobPosition(e.target.value)}
              />
            </div>

            <div className="InputContainer-EDIT-ADD">
              <label> Monthly Salary</label>
              <input
                type="number"
                placeholder="Enter Amount in rupees"
                value={MonthlySalary}
                onChange={(e) => setMonthlySalary(e.target.value)}
              />
            </div>

            {/*  CHANGES ARE NEEDED HERE */}

            <div className="InputContainer-EDIT-ADD">
              <label>Job Type</label>
              <select onChange={(e) => setJobType(e.target.value)}>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </div>

            <div className="InputContainer-EDIT-ADD">
              <label>Remote/Office</label>
              <select onChange={(e) => setRemoteOffice(e.target.value)}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>

            <div className="InputContainer-EDIT-ADD">
              <label> Location </label>
              <input
                type="text"
                placeholder="Enter location"
                value={Location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="InputContainer-EDIT-ADD">
              <label> Job Description</label>
              <textarea
                className="text-area"
                type="text"
                placeholder="Enter Job Description "
                value={JobDescription}
                minLength="50"
                maxLength="1000"
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

            <div className="InputContainer-EDIT-ADD">
              <label> About Company</label>
              <textarea
                className="text-area"
                type="text"
                placeholder="About Company "
                value={AboutCompany}
                minLength="50"
                maxLength="1000"
                onChange={(e) => setAboutCompany(e.target.value)}
              />
            </div>

            <div className="InputContainer-EDIT-ADD">
              <label> Skills </label>
              <input
                type="text"
                placeholder="Enter comma seperated skills"
                value={SkillsRequired}
                onChange={(e) => setSkillsRequired(e.target.value)}
              />
            </div>

            <div className="InputContainer-EDIT-ADD">
              <label> Additional Information </label>
              <input
                type="text"
                placeholder="Enter any additional information"
                value={Information}
                onChange={(e) => setInformation(e.target.value)}
              />
            </div>

            <div className="FormButtonsContainer">
              <Button
                ButtonTitle="Cancel"
                onClickHandler={Cancel}
                cancelButton={true}
              />
              <Button ButtonTitle="Update Job" onClickHandler={EditJob} />
            </div>
          </div>
        </div>
      </div>
      <div className="EditJobContainer-RightSection">
        <div>Recruiter update job details here</div>
        <img src={Background2} />
      </div>
    </div>
  );
};

export default EditJobs;
