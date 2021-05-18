const { Schema, model } = require("mongoose");

let lessonSchema = new Schema (
  {
  title: String,
  description: String,
  //completed: Boolean,
  imageUrl: {
    String, 
  },//! CLOUDINARY
  user_id: { //owner
    type: Schema.Types.ObjectId, ref: "user"
  }
   //!!!
  //! module?, differentiation between classes etc.?
  /*asignedBy: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }*/
  // image
}
);

const LessonsModel = model("lessons", lessonSchema);

module.exports = LessonsModel;