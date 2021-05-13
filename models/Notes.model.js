const { Schema, model } = require("mongoose");

const notesSchema = new Schema(
  {
  note: {
    type: String,
    required: true,
  }
  }
);

const Notes = model("Notes", notesSchema);

module.exports = Notes;