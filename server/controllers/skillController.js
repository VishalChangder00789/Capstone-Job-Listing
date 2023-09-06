const catchAsync = require("./../utils/catchAsync");
const skillModel = require("../models/skillModel");

exports.getAllSkills = catchAsync(async (req, res, next) => {
  const skills = await skillModel.find();

  res.status(201).json({
    status: "success",
    message: "Skills Found",
    length: skills.length,
    data: {
      skills,
    },
  });
});

exports.postSkill = catchAsync(async (req, res, next) => {
  const skill = await skillModel.create(req.body);

  res.status(201).json({
    status: "success",
    message: "Skill Created",
    data: {
      skill,
    },
  });
});
