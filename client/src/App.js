import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

// Local Imports
import "./App.css";
import Login from "./Source_Pages/Login/Client_Login";
import Register from "./Source_Pages/Register/Client_Register";

// Constants
import {
  LOGIN,
  REGISTER,
  BASE_URL,
  HOME,
  ADDJOBS,
  SINGLEJOB,
} from "./constants/paths";
import Jobs from "./Source_Pages/Jobs/Client_Jobs";
import AddJobs from "./Source_Pages/AddJobs/Client_AddJobs";
import JobDescription from "./Source_Pages/JobDescription/Client_JobDescription";

const App = () => {
  console.log(BASE_URL + LOGIN);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path={BASE_URL + LOGIN} element={<Login />} />
          <Route path={BASE_URL + REGISTER} element={<Register />} />
          <Route path={BASE_URL + HOME} element={<Jobs />} />
          <Route path={BASE_URL + ADDJOBS} element={<AddJobs />} />
          <Route path={BASE_URL + SINGLEJOB} element={<JobDescription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
