const { Schema, model } = require("mongoose");

let lessonSchema = new Schema (
  {
  title: String,
  description: String,
  //completed: Boolean,
  image: String, 
  //! CLOUDINARY
  /*user_id: { //owner
    type: Schema.Types.ObjectId, ref: "user"
  }
  */
}
);

const LessonsModel = model("lessons", lessonSchema);

module.exports = LessonsModel;