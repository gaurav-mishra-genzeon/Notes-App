import { Request, Response } from "express";
import { db } from "../utils/db.server";


//Get all Notes
const getNotes = async (req: Request, res: Response) =>{
 try{
    const userId = (req as any).userId;
    // console.log(userId);
    const notes = await db.note.findMany({
      where: { userId },
    });
    res.status(201).send({ notes });
 }
 catch(err){
   console.log(err);
   res.status(500).send("Something went wrong");
 }
} 


//Post All Notes
const postNotes= async (req: Request, res: Response) =>{
    const userId = (req as any).userId;
  // console.log(userId)
  const { title, content } = (req as any).body;
  console.log(title, content);
    try{
        const notes = await db.note.create({
            data: {
              title,
              content,
              userId,
              done: false,
            },
          });
          res.status(201).send({ notes });
    }
    catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

//Toggle status of the notes to done
const doneNote=async(req: Request, res: Response)=>{
    const noteId = parseInt(req.params.id);
    const status= await db.note.update({
      where:{
        id:noteId
      },
      data:{
        done:true
      }
  
    })
  }
  
//Delete a Note
const deleteNote= async (req: Request, res: Response) =>{
    try{
        const noteId = parseInt(req.params.id);
        await db.note.delete({
          where: { id: noteId},
        });
        res.status(201).send("Note deleted");
    }catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

//Update a Note

const updateNote= async (req: Request, res: Response) =>{
    try{
        const noteId = parseInt(req.params.id);
        const { title, content, done } = req.body;
    
        const updatedNote = await db.note.update({
          where: { id: noteId },
          data: {
            title,
            content,
            done,
          },
        });
        res.status(200).send(updatedNote);
    }catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}


export {getNotes, postNotes, deleteNote, updateNote,doneNote}

