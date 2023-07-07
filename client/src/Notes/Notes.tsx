import React, { useState,useEffect } from 'react'
import { Switch } from "antd"
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
import authHeader from '../components/services/auth-header';

const url = `http://localhost:3001/api/notes`;
const Notes = ({ title,content,removeHandler,id,notes,setNotes,statusHandler,done,setDone }) => {
      const[status,setStatus]= useState("")

     useEffect(()=>{
           fetchNotesbyId() 
     },[])
  const fetchNotesbyId = async () => {
            try {
              const res = await axios.get(`${url}/${id}`, { headers: authHeader() });
            console.log(res.data.note)
            //  if(res.data.note.done===true)
            //  {
            //    setStatus(true)
            //  }
            //  console.log(status)
            } catch (error) {
              console.error("Error getting notes:", error);
            }
          };

    const nav= useNavigate()

    return (
        <>
            <div className="card mb-3">
                <div className="card-body" style={{ textTransform: "capitalize" }}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                  
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                   onClick={() => nav(`/dashboard/${id}`,{state:{notes,setNotes}})}>
                        Edit
                    </button>
                    <button className="btn btn-danger mx-2" onClick={() => {
                        removeHandler(id)
                    }}>Delete</button>
                     
             <Switch  defaultChecked={false} checkedChildren="DONE" unCheckedChildren="NOT DONE" />
                </div>
            </div>
        </>
    )
}

export default Notes
