const router = require("express").Router();

const { getAllNotes, createNewNote } = require("../controllers/noteController");

//router.get("/", getAllNotes);
router.post("/", createNewNote);

router.get("/", (req, res) => {
  res.send("success");
});

module.exports = router;
