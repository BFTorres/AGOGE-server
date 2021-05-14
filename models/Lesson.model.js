const mongoose = require("mongoose");

let LessonSchema = new mongoose.Schema ({
  title: String,
  description: String //!!!
  //! module?, differentiation between classes etc.?
  /*asignedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }*/
});

let LessonModel = mongoose.model("lessons", LessonSchema);

module.exports = LessonModel;