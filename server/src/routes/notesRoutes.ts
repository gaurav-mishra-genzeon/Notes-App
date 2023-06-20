import { deleteNote, doneNote, getNotes, postNotes, updateNote } from "../controllers/notesController";
import { checkMiddleware } from "../controllers/userController";
import authenticateToken from "../middleware/authMiddlware";

const express = require('express');
const notes= express.Router();

notes.get("/check", authenticateToken,checkMiddleware);
notes.get("/notes",authenticateToken,getNotes)
notes.post("/notes",authenticateToken,postNotes)
notes.patch("/notes/:id",authenticateToken,updateNote)
notes.patch("/notes/status/:id",authenticateToken,doneNote);
notes.delete("/notes/:id",authenticateToken,deleteNote)

export default notes;