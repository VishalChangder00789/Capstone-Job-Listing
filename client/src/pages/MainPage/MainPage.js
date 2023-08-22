import React from "react";
import "./MainPage.css";
import Navbar from "../../component/Navbar/Navbar";
import JobFilter from "../../component/JobFilter/JobFilter";
import JobComponent from "../../component/JobsComponent/JobComponent";

const MainPage = () => {
  return (
    <div className="MainPageContainer">
      <Navbar />
      <div className="MainPageContainer-MainContent">
        <JobFilter />
        {/* Looped through */}
        <JobComponent />
      </div>
    </div>
  );
};

export default MainPage;
