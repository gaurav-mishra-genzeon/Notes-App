import { Request, Response } from "express";
import { db } from "../utils/db.server";


//Get all Notes
const getNotes = async (req: Request, res: Response) =>{
 try{
   res.status(201).send("getNotes");
 }
 catch(err){
   console.log(err);
 }
} 


//Post All Notes
const postNotes= async (req: Request, res: Response) =>{
    try{

    }
    catch(err){
        console.log(err);
    }
}

//Delete a Note
const deleteNote= async (req: Request, res: Response) =>{
    try{

    }catch(err){
        console.log(err);
    }
}

//Update a Note

const updateNote= async (req: Request, res: Response) =>{
    try{

    }catch(err){
        console.log(err);
    }
}


export {getNotes, postNotes, deleteNote, updateNote}

