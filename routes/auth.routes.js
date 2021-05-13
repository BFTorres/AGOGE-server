const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserModel = require("../models/User.model");


//signup
router.post('/signup', (req, res) => {
  const {username, email, password } = req.body;
  console.log(username, email, password);
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    UserModel.create({name: username, email, passwordHash: hash})
      .then((user) => {
        user.passwordHash = "***";
        res.status(200).json(user);
      })
      .catch((err) => {
        if (err.code === 11000) {
          res.status(500).json({
            errorMessage: 'username or email entered already exists!',
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

//login
router.post('/login', (req, res) => {
  const {email, password} = req.body;
  UserModel.findOne({email})
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
                    error: 'Passwords don\'t match',
                })
              return; 
            }
        })
        .catch(() => {
            res.status(500).json({
                error: 'Email format not correct',
            })
          return; 
        });
  })
  .catch((err) => {
    res.status(500).json({
        error: 'Email does not exist',
        message: err
    })
    return;  
  });
})

