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
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }, []);

  //#region ----------------- CODE DEBOUNCING AND SEARCHING THE FILTERED OPTIONS -----------------

  const initialObj = {
    jobType: "",
    skillsRequired: [],
  };
  const [searchTerm, setSearchTerm] = useState(initialObj);
  const [debouncedTerm, setDebouncedTerm] = useState(initialObj);

  // Debouncing feature
  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    // Make an API call
    // with filtered items
    // console.log(debouncedTerm);
    axios
      .get(SERVER_BASE_URL + SERVER_GETJOBS, {
        params: {
          jobPosition: `${debouncedTerm.jobType}`,
          skillsRequired: { $in: debouncedTerm.skillsRequired },
        },
      })
      .then((data) => {
        let foundJob = data.data.data.jobs;
        // console.log("Jobs Found are : ", foundJob);
        if (foundJob.length !== 0) {
          setJobs(foundJob);
        }
      });
  }, [debouncedTerm]);

  //#endregion ----------------- CODE DEBOUNCING AND SEARCHING THE FILTERED OPTIONS -----------------

  return (
    <div className="MainPageJobContainer">
      <Navbar logIn={token ? true : false} />

      <div className="MainPageJobContainer-body">
        <JobFilter setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
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
