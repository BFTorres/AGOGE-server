const { Schema, model } = require("mongoose");

let lessonSchema = new Schema (
  {
  title: String,
  description: String,
  //completed: Boolean,
  image: String, 
  //userId: {type: Schema.Types.ObjectId, ref: "user"},
  // assign Lessons to users /
}
);

const LessonsModel = model("lessons", lessonSchema);

module.exports = LessonsModel;