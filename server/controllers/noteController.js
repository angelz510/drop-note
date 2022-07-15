const Note = require("../models/noteModel");

module.exports = {
  getAllNotes: async (req, res) => {
    try {
      const notes = await Note.find();
      res.json(notes);
    } catch (err) {
      res.json({ msg: err });
    }
  },
  createNewNote: async (req, res) => {
    try {
      const newNote = new Note({
        text: req.body.text,
      });
      res.json(await newNote.save());
    } catch (err) {
      res.json({ msg: err });
    }
  },
};
