// R E Q U I R E  D E P E N D E N C I E S
const router = require("express").Router();

const saveData = require("../Develop/public/assets/js/saveData.js");

// G E T
router.get("/notes", function (req, res) {
  saveData
    .retrieveNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// P O S T
router.post("/notes", (req, res) => {
  saveData
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// D E L E T E  R E Q U E S T
router.delete("/notes/:id", function (req, res) {
  saveData
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
