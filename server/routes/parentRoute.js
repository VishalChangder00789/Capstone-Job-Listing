const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");
const userController = require("../controllers/userController");
const jobController = require("../controllers/jobsController");
const skillController = require("../controllers/skillController");

// Authentication Controllers
router.route("/_REGISTER").post(authController.register);
router.route("/_LOGIN").post(authController.login);

// Chained and Protection of routes  : If the user is not authenticated then it will not be able to go forward
// Users Controller
router.route("/_USERS").get(authController.protect, userController.getAllUsers);

// router
//   .route("/_JOBS")
//   .get(authController.protect, jobController.getAllJobs)
//   .post(authController.protect, jobController.createJobs);

// Jobs Controller
router
  .route("/_JOBS")
  .get(jobController.getAllJobs)
  .post(authController.protect, jobController.createJobs);

router
  .route("/_JOBS/:id")
  .get(jobController.getJob)
  .patch(authController.protect, jobController.updateJob);

// Skills Controller
router
  .route("/_SKILLS")
  .get(skillController.getAllSkills)
  .post(skillController.postSkill);

module.exports = router;
