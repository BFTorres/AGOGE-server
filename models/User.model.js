const { Schema, model } = require("mongoose");

let userSchema = new Schema(
  {
  username: {
    type: String,
    unique: true
  },
  passwordHash: { // passwordHash: String,
    type: String,
    required: true
  },
  usertype: {
    type: String,
    enum: ['Student', 'Teacher']
    //Student=User, Teacher=Admin
  },
  /*notes: {
    type: Schema.Types.ObjectId,
    ref: 'Notes'
  }*/
  /*lessons: [{
    type: Schema.Types.ObjectId,
    ref: 'lessons'
  }]*/
});

const UserModel = model("user", userSchema);

module.exports = UserModel
