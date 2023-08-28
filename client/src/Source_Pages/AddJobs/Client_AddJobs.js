import React, { useEffect, useState } from "react";

// Local Imports
import "./Client_AddJobs.css";
import Background2 from "./../../asset/background2.png";
import Input from "../../component/Inputs/Input";
import Button from "../../component/Button/Button";
import { Link, useSearchParams } from "react-router-dom";
import { BASE_URL, LOGIN, REGISTER } from "../../constants/paths";
import Dropdown from "../../component/Dropdown/Dropdown";
import { addJob } from "../../controller/addJob";

const AddJobs = () => {
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

  const jobType = ["Full Time", "Part Time"];
  const remote = ["Yes", "No"];

  const AddJob = () => {
    let remoteOffice = false;
    if (RemoteOffice === "Yes") {
      remoteOffice = true;
    }

    // To be completed
    addJob();
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
    <div className="AddJobContainer">
      <div className="AddJobContainer-LeftSection">
        <div className="AddJobContainer-LeftSection-TopContent">
          <div className="AddJobContainer-LeftSection-TopContent-Content">
            <h1>Add job description</h1>
          </div>

          <div className="AddJobContainer-LeftSection-FormContainer">
            <Input
              label="Company Name"
              name="CompanyName"
              type="text"
              placeholder="Enter your company name here"
              setState={setCompanyName}
              stateValue={CompanyName}
            />

            <Input
              label="Add Logo URL"
              name="logoURL"
              type="text"
              placeholder="Enter the link"
              setState={setLogoURL}
              stateValue={LogoURL}
            />

            <Input
              label="Job Position"
              name="logoURL"
              type="text"
              placeholder="Enter job position"
              setState={setJobPosition}
              stateValue={JobPosition}
            />

            <Input
              label="Monthly Salary"
              name="salary"
              type="number"
              placeholder="Enter Amount in rupees"
              setState={setMonthlySalary}
              stateValue={MonthlySalary}
            />

            {/*  CHANGES ARE NEEDED HERE */}

            <Dropdown
              label="Job Type"
              title={JobType === "" ? "Select" : `${JobType}`}
              options={jobType}
              setValue={setJobType}
            />

            <Dropdown
              label="Remote/office"
              title={RemoteOffice === "" ? "Select" : `${RemoteOffice}`}
              options={remote}
              setValue={setRemoteOffice}
            />

            <Input
              label="Location"
              name="Location"
              type="text"
              placeholder="Enter Location"
              setState={setLocation}
              stateValue={Location}
            />

            <Input
              label="Job Description"
              name="description"
              type="text"
              placeholder="Type the job description"
              setState={setJobDescription}
              stateValue={JobDescription}
            />

            <Input
              label="About Company"
              name="aboutCompany"
              type="text"
              placeholder="Type about your company"
              setState={setAboutCompany}
              stateValue={AboutCompany}
            />

            <Input
              label="Skills required"
              name="skills"
              type="text"
              placeholder="Enter the must have skills"
              setState={setSkillsRequired}
              stateValue={SkillsRequired}
            />

            <Input
              label="Information"
              name="information"
              type="text"
              placeholder="Enter the additional information"
              setState={setInformation}
              stateValue={Information}
            />

            <div className="FormButtonsContainer">
              <Button
                ButtonTitle="Cancel"
                onClickHandler={Cancel}
                cancelButton={true}
              />
              <Button ButtonTitle="+ Add Job" onClickHandler={AddJob} />
            </div>
          </div>
        </div>
      </div>
      <div className="AddJobContainer-RightSection">
        <div>Recruiter add job details here</div>
        <img src={Background2} />
      </div>
    </div>
  );
};

export default AddJobs;
