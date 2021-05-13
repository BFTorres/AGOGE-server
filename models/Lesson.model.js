const { Schemal, model } = require("mongoose");

const lessonSchema = new Schema ({
  title: String,
  description: String, //!!!
  //! module?, differentiation between classes etc.?
  /*asignedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }*/
})

const Lesson = model("Lesson", lessonSchema);

module.exports = Lesson;