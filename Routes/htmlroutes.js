// R E Q U I R E  D E P E N D E N C I E S
const path = require("path");
const router = require("express").Router();

Router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// D E F A U L T  T O  H O M E P A G E
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
