const express = require("express");
const { handleAllNotes, handleCreateNote, handleReadNote, handleUpdateNote, handleDeleteNote } = require("../controller");

const router = express.Router();

router.route("/notes").get(handleAllNotes).post(handleCreateNote)
router.route("/notes/:id").get(handleReadNote).patch(handleUpdateNote).delete(handleDeleteNote);

module.exports = router