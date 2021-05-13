const router = require('express').Router();
const bcrypt = require('bcryptjs');
const UserModel = require("../models/User.model");
const LessonsModel = require("../models/Lesson.model");
const NotesModel = require ("../models/Notes.model")

router.get("/lessons", (req, res) => {
  LessonsModel.find()
    .then((lessons) => {
      res.status(200).json(lessons);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

//! router.post("/lessons/") insert/add lessons


//! Details?

//! Edit and Delete?

module.exports = router;