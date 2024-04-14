const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    noteTitle: {
      type: String,
      required: true,
    },
    noteDes: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const Note = mongoose.model("notes_",notesSchema);

module.exports = Note;
