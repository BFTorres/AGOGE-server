const router = require('express').Router();
const UserModel = require("../models/User.model");
const LessonsModel = require("../models/Lesson.model");


router.get("/lessons", (req, res) => {
  LessonsModel.find()
  //! asign
    .populate('userId')
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

/*
//! asign3
router.post("/allstudents", userType, (req, res) => {
  const { allstudents } = req.params
  let user = req.session.loggedInUser; //!session
  if (user && user.userType == "Student") {
    student = true;
    next()
  } 
  UserModel.findByIdAndUpdate(id, { status })
    .populate(allstudents)
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
*/




router.get('/lessons/:lessonsId', (req, res) => {
  LessonsModel.findById(req.params.lessonsId)
    .populate('userId')
   .then((lessons) => {
     console.log(lessons)
        res.status(200).json(lessons)
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
router.patch('/lessons/:lessonsId', (req,res) => {
  let lessonsId = req.params.lessonsId
  const {title, description, image} = req.body;
  LessonsModel.findByIdAndUpdate(lessonsId, {$set: {title: title, description: description, image: image}}, {new: true})
    .then((lessons) => {
      res.status(200).json(lessons)
    })
      .catch((err) => {
        res.status(500).json({
          error: 'Something went wrong',
          message: err
        })
      })
})

//! router.post("/lessons/") insert/add lessons
router.post('/create', (req, res) => {
  const {title, description, image, userId} = req.body;

 if (!title || !description || !image) {
    res.status(500)
      .json({
        message: 'Please fill all the fields'
      })
    return
  }
  LessonsModel.create({
    title, 
    description, 
    image,
    userId: req.session.loggedInUser._id//! asign
    
  })
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

router.get('/lessons/:userId', (req, res, next) => {
  const { userId } = req.params;

  LessonsModel.find({ userId })
    .populate("userId")
    .then((lessons) => {
      res.status(200).json(lessons);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong when finding venues owner',
        message: err
      })
    });
})

router.delete('/lessons/:id', (req, res) => {
  LessonsModel.findByIdAndDelete(req.params.id)
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


module.exports = router;