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
router.post('/create', (req, res) => {
  const {title, description} = req.body;
  LessonsModel.create({title: title, description: description})
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err
     })
    })
})
// PATCH requests to http:localhost:5005/api/lessons/:id
router.patch('/lessons/:id', (req,res) => {
  let id = req.params.id
  const {title, description} = req.body;
  LessonsModel.findByIdAndUpdate(id, {$set: {title: title, description: description}}, {new: true})
    .then((response) => {
      res.status(200).json(response)
    })
      .catch((err) => {
        res.status(500).json({
          error: 'Something went wrong',
          message: err
        })
      })
})


//! Details?

//! Edit and Delete?

module.exports = router;