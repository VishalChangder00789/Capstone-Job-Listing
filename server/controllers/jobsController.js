const catchAsync = require("../utils/catchAsync");
const jobModel = require("./../models/jobsModel");

exports.getAllJobs = catchAsync(async (req, res, next) => {
  const myquery = {};

  if (req.query.jobPosition) {
    myquery.jobPosition = req.query.jobPosition;
  }

  if (req.query.skillsRequired) {
    myquery.skillsRequired = req.query.skillsRequired;
  }

  const jobs = await jobModel.find(myquery);

  // const jobs = await jobModel.find({ skillsRequired: { $in: skills } });
  // const jobs = await jobModel.find();

  // Add filtering : Aggregation pipeline

  res.status(201).json({
    status: "success",
    message: "Jobs Found",
    data: {
      jobs,
    },
  });
});

exports.createJobs = catchAsync(async (req, res, next) => {
  const job = await jobModel.create(req.body);

  res.status(201).json({
    status: "success",
    message: "Job Created",
    data: {
      job,
    },
  });
});

exports.getJob = catchAsync(async (req, res, next) => {
  const job = await jobModel.findById(req.params.id);

  res.status(201).json({
    status: "Siccess",
    data: {
      job,
    },
  });
});

exports.updateJob = catchAsync(async (req, res, next) => {
  console.log(req.params.id);

  const updatedJob = await jobModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    status: "Success",
    data: {
      comapanyName: updatedJob.companyName,
    },
  });
});
