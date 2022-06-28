const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  text: String,
});

module.exports = Note = mongoose.model("Note", noteSchema);
