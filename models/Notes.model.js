const { Schema, model } = require("mongoose");

let notesSchema = new Schema(
  {
  note: {
    type: String,
  },
  /*owner: {
      type: Schema.Types.ObjectId,
      ref: 'user' 
  }*/   //! ???
}
);

const NotesModel = model("notes", notesSchema);

module.exports = NotesModel;