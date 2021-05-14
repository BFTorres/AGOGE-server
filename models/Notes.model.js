const mongoose = require("mongoose");

let NotesSchema = new mongoose.Schema(
  {
  note: {
    type: String,
    required: true,
  }
  }
);

let NotesModel = mongoose.model("notes", NotesSchema);

module.exports = NotesModel;