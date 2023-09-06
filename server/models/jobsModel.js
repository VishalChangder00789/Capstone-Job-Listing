const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "Please enter your company name"],
    trim: true,
    unique: true,
    maxlength: [25, "A company name should be less than 25 characters"],
    minlength: [10, "A company name should be more than 10 characters"],
  },
  logoUrl: {
    type: String,
    required: [true, "A job should have a logo of a company"],
  },
  jobPosition: {
    type: String,
    required: [true, "A Job should have a position"],
  },
  monthlySalary: {
    type: Number,
    required: [true, "A job should have a monthly salary"],
    min: [10000, "A salary should be more than 10,000"],
  },
  jobType: {
    type: String,
    required: [true, "Need a job type"],
  },
  remoteOffice: {
    type: Boolean,
    required: [true, "Is it remote ? "],
  },
  location: {
    type: String,
    required: [true, "Need a location"],
  },
  jobDescription: {
    type: String,
    required: [true, "Need a job description"],
    minlength: [50, "A description should be more than 50 characters"],
    maxlength: [1000, "A description should be less than 1000 characters"],
  },
  aboutCompany: {
    type: String,
    required: [true, "Please fill the about me section"],
    maxlength: [1000, "A about me should be less than 200 characters"],
    minlength: [50, "A about me should be more than 50 characters"],
  },
  skillsRequired: {
    type: [String],
    required: [true, "Please enter the skills required for this job role"],
  },
  information: {
    type: String,
    required: [true, "Information is required"],
  },
  totalPeople: {
    type: Number,
    required: [
      true,
      "Mention the number of poeple working in the orgainization",
    ],
  },
});

const jobModel = mongoose.model("Job", jobSchema);
module.exports = jobModel;
