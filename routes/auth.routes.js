const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserModel = require("../models/User.model");
//const LessonModel = require("../models/Lesson.model");
//const NotesModel = require("../models/Notes.model");
//!back log cloudinary for student profile



//signup
router.post('/signup', (req, res) => {
  const {username, usertype, password} = req.body;

  
  if (!username || !password) {
    res.status(500)
    .json({
      errorMessage: "Please enter username and password",
    });
    return;
  }
  

  /*const myRegex = new RegExp(
    /^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/
  );
  if (!myRegex.test(username)) {
    res.status(500).json({
      errorMessage: "Username format not correct",
    });
    return;
  }
  const myPassRegex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  );
  if (!myPassRegex.test(password)) {
    res.status(500).json({
      errorMessage:
        "Password needs to have 8 characters, a number and an Uppercase letter",
    });
    return;
  }
  */
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    UserModel.create({username: username, passwordHash: hash, usertype})
      .then((user) => {
        user.passwordHash = "***";
        req.session.loggedInUser = user;
        res.status(200).json(user);
      })
      .catch((err) => {
        if (err.code === 11000) {
          res.status(500).json({
            errorMessage: 'username entered already exists!',
            message: err,
          });
        } 
        else {
          res.status(500).json({
            errorMessage: 'Something went wrong!',
            message: err,
          });
        }
      })
});

// middleware loggedIn
const isLoggedIn = (req, res, next) => {  
  if (req.session.loggedInUser) {
      next()
  }
  else {
      res.status(401).json({
          message: 'Unauthorized user',
          code: 401,
      })
  };
};

//login
router.post('/login', (req, res) => {
  const {username, password} = req.body;

 
  if (!username || !password) {
    res.status(500).json({
      error: "Please enter username and password",
    });
    return;
  }

  //logout


  UserModel.findOne({username})
  .then((userData) => {
       //check if passwords match
      bcrypt.compare(password, userData.passwordHash)
        .then((doesItMatch) => {
            //if it matches
            if (doesItMatch) {
              // req.session is the special object that is available to you
              userData.passwordHash = "***";
              req.session.loggedInUser = userData;
              res.status(200).json(userData)
            }
            //if passwords do not match
            else {
                res.status(500).json({
                    error: 'Password not correct',
                })
              return; 
            }
        })
        .catch(() => {
            res.status(500).json({
                error: 'Username format not correct',
            })
          return; 
        });
  })
  .catch((err) => {
    res.status(500).json({
        error: 'Username does not exist',
        message: err
    })
    return;  
  });
})

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.status(204).json({message: "successfully logged out"});
})




// THIS IS A PROTECTED ROUTE
// will handle all get requests to http:localhost:5005/api/user
router.get("/user", isLoggedIn, (req, res, next) => {
  res.status(200).json(req.session.loggedInUser);
});

//!CLOUDINARY

module.exports = router;