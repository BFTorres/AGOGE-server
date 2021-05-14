const { Schema, model } = require("mongoose");

let UserSchema = new Schema(
  {
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  usertype: {
    type: String,
    enum: ['Student', 'Teacher']
    //Student=User, Teacher=Admin
  },
  lessons: {
    type: Schema.Types.ObjectId,
    ref: 'lessons'
  }
});

let UserModel = model("user", UserSchema);

module.exports = UserModel;
