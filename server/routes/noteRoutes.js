const router = require("express").Router();

const { getAllNotes, createNewNote } = require("../controllers/noteController");

router.get("/", getAllNotes);
router.post("/", createNewNote);

module.exports = router;
