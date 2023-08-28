const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");
const userController = require("../controllers/userController");
const jobController = require("../controllers/jobsController");

// Route protection is still needed

router.route("/_REGISTER").post(authController.register);
router.route("/_LOGIN").post(authController.login);

// Chained and Protection of routes  : If the user is not authenticated then it will not be able to go forward
router.route("/_USERS").get(authController.protect, userController.getAllUsers);

// router
//   .route("/_JOBS")
//   .get(authController.protect, jobController.getAllJobs)
//   .post(authController.protect, jobController.createJobs);

router
  .route("/_JOBS")
  .get(jobController.getAllJobs)
  .post(authController.protect, jobController.createJobs);

router
  .route("/_JOBS/:id")
  .get(jobController.getJob)
  .patch(authController.protect, jobController.updateJob);

module.exports = router;
