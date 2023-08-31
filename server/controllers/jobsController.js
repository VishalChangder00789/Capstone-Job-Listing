const catchAsync = require("../utils/catchAsync");
const jobModel = require("./../models/jobsModel");

exports.getAllJobs = catchAsync(async (req, res, next) => {
  console.log(req.query);

  const jobs = await jobModel.find(req.query);

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
