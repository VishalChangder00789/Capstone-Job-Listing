const mongoose = require("mongoose");

const SkillSchema = mongoose.Schema({
  skillName: {
    type: String,
    required: [true, "You should add a skill"],
    maxLength: [25, "Skill name must be less than 25 letters"],
    unique: true,
  },
});

const skill = mongoose.model("Skills", SkillSchema);
module.exports = skill;
