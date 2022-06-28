const Note = require("../models/noteModel");

module.exports = {
  getAllNotes: async (req, res) => {
    try {
      const notes = await Notes.find().sort({ _id: -1 });
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
