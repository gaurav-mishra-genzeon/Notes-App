import { Request, Response } from "express";
import { db } from "../utils/db.server";

//Get all Notes
const getNotes = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    // console.log(userId);
    const notes = await db.note.findMany({
      where: { userId },
    });
    res.status(201).send({ notes });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

//Get Notes by Id
const getNotesbyId = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const noteId = (req as any).params.id;
  try {
    const note = await db.note.findUnique({
      where: {id:Number(noteId)},
      },
    );
    if (!note) {
      return res.status(404).send('Note not found');
    }
    else{
       res.status(201).send({ note });
    }
   
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

//Post All Notes
const postNotes = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  // console.log(userId)
  const { title, content } = (req as any).body;
  // console.log(title, content);
  try {
    const notes = await db.note.create({
      data: {
        title,
        content,
        userId,
        done: false,
      },
    });
    res.status(201).send({ notes });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

//Toggle status of the notes to done
const doneNote = async (req: Request, res: Response) => {
  try {
    const noteId = parseInt(req.params.id);
    console.log("check", noteId);

    const note = await db.note.findUnique({
      where: { id: noteId },
    });

    if ((note as any).done === false) {
      await db.note.update({
        where: {
          id: noteId,
        },
        data: {
          done: true,
        },
      });
      res.status(201).send("Note status updated");
    } else {
      res.status(400).send("This Note cannot be updated");
    }
    //    const status= await db.note.update({
    //   where:{
    //     id:noteId
    //   },
    //   data:{
    //     done:true
    //   }
    // })
    // res.status(201).send(status);
  } catch (err) {
    console.log(err);
    res.status(400).send("error");
  }
};

//Delete a Note
const deleteNote = async (req: Request, res: Response) => {
  try {
    const noteId = parseInt(req.params.id);

    // Check the status of the note
    const note = await db.note.findUnique({
      where: { id: noteId },
    });
    // console.log("1",note);
    if ((note as any).done === false) {
      await db.note.delete({
        where: { id: noteId },
      });
      res.status(201).send("Note deleted");
    } else {
      res.status(400).send("This Note cannot be deleted");
    }

    // await db.note.delete({
    //   where: { id: noteId},
    // });
    // res.status(201).send("Note deleted");
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

//Update a Note

const updateNote = async (req: Request, res: Response) => {
  try {
    const noteId = parseInt(req.params.id);
    const { title, content } = req.body;

    const updatedNote = await db.note.update({
      where: { id: noteId },
      data: {
        title,
        content,
      },
    });
    res.status(200).send(updatedNote);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

export { getNotes, getNotesbyId, postNotes, deleteNote, updateNote, doneNote };
