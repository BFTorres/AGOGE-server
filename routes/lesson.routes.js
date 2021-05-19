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


router.get('/lessons/:lessonsId', (req, res) => {
  LessonsModel.findById(req.params.lessonsId)
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
//! DELETE


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

//! router.post("/lessons/") insert/add lessons
router.post('/addlessons', (req, res) => {
  const {title, description, image} = req.body;

  if (!title || !location || !size) {
    res.status(500)
      .json({
        message: 'Please fill all the fields'
      })
    return
  }
  
  LessonsModel.create({title, description, imageUrl: image})
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