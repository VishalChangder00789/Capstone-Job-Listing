const catchAsync = require("../utils/catchAsync");
const userModel = require("./../models/userModel");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await userModel.find();

  res.status(201).json({
    status: "success",
    message: "Users Found",
    data: {
      users,
    },
  });
});
