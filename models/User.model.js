const { Schema, model } = require("mongoose");

let userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
  userType: {
    type: String,
    enum: ['Student', 'Teacher']
  }
});

let User = model("User", userSchema);

module.exports = User;
