const router = require("express").Router();

const { getAllNotes, createNewNote } = require("../controllers/noteController");

router.get("/notes", getAllNotes);
router.post("/newnote", createNewNote);

module.exports = router;
