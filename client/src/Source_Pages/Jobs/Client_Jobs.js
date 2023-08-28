import React, { useEffect, useState } from "react";
import "./Client_Jobs.css";
import Navbar from "../../component/Navbar/Navbar";
import JobFilter from "../../component/JobFilter/JobFilter";
import JobComponent from "../../component/JobsComponent/JobComponent";
import axios from "axios";
import { getTokenFromLocalStorage } from "../../controller/getTokenFromLocalStorage";
import { SERVER_BASE_URL, SERVER_GETJOBS } from "../../constants/serverPath";

const Jobs = () => {
  const [Jobs, setJobs] = useState("");
  const token = getTokenFromLocalStorage();

  useEffect(() => {
    axios
      .get(SERVER_BASE_URL + SERVER_GETJOBS)
      .then((response) => {
        setJobs(response.data.data.jobs);
        console.log(Jobs);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }, []);

  return (
    <div className="MainPageJobContainer">
      <Navbar logIn={token ? true : false} />

      <div className="MainPageJobContainer-body">
        <JobFilter />
        {!Jobs
          ? ""
          : Jobs.map((m) => {
              // Pass an ID
              return <JobComponent item={m} />;
            })}
      </div>
    </div>
  );
};

export default Jobs;
