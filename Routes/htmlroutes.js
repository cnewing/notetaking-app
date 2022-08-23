// R E Q U I R E  D E P E N D E N C I E S
const { Router } = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const path = require("path");
const routeer = require("express").Router();

Router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

routeer.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// D E F A U L T  T O  H O M E P A G E
Router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = Router;
