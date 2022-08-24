// R E Q U I R E  D E P E N D E N C I E S
const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);

class Save {
  write(note) {
    return writeNote("db/db.json", JSON.stringify(note));
  }

  read() {
    return readNote("db/db.json", "utf8");
  }

  retrieveNotes() {
    return this.read().then((notes) => {
      let parsedNotes;
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }
      return parsedNotes;
    });
  }

  addNote(note) {
    const { title, text } = note;
    if (!title || !text) {
      throw new Error("Both title and text can not be blank");
    }
    // U U I D  P A C K A G E TO  A D D  U N I Q U E  I D'S
    const newNote = { title, text, id: uuidv4() };

    // R E T R E I V E , A D D, &  U P D A T E  N O T E S
    return this.retrieveNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }

  //  D E L E T E  F U N C T I O N
  deleteNote(id) {
    return this.retrieveNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filteredNotes) => this.write(filteredNotes));
  }
}

module.exports = new Save();
