const express = require("express");
const router = express.Router();

const Profile = require("../../models/Profile");

// @route   GET api/profile
// @desc    Info profile
// @access  public
router.get("/profile", (req, res) => {
  Profile.findById(req.query.id)
    .then((profile) => res.json(profile))
    .catch((e) => {
      console.error(e);
    });
});

// @route   POST api/profile
// @desc    Create profile
// @access  public
router.post("/profile", (req, res) => {
  const newProfile = new Profile({
    name: req.body.name,
    sports: req.body.sports,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    description: req.body.description,
    team: req.body.team,
    location: req.body.location,
    interests: req.body.interests,
  });

  newProfile
    .save()
    .then((Profile) => res.json(Profile))
    .catch((e) => {
      console.error(e);
    });
});

// @route   PUT api/profile
// @desc    Edit profile
// @access  public
router.put("/profile", (req, res) => {
  const body = {
    name: req.body.name,
    sports: req.body.sports,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    description: req.body.description,
    team: req.body.team,
    location: req.body.location,
    interests: req.body.interests,
  };

  Profile.findByIdAndUpdate(req.query.id, body)
    .then((Profile) => res.json(Profile))
    .catch((e) => {
      console.error(e);
    });
});

module.exports = router;
