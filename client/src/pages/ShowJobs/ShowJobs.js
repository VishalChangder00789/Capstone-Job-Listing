import React from "react";
import "./ShowJobs.css";
import Navbar from "../../component/Navbar/Navbar";

const ShowJobs = () => {
  return (
    <>
      <div className="ShowJobsPageContainer">
        <Navbar />
        <div className="TopNamedComponentContainer">Title</div>
        <div className="ShowJobsPageContainer-MainContent"></div>
      </div>
    </>
  );
};

export default ShowJobs;
