const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserModel = require("../models/User.model");

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