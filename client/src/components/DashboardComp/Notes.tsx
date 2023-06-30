import React, { useState } from 'react'
import { Switch } from "antd"
import {  useNavigate } from 'react-router-dom'

const Notes = ({ title,content,removeHandler,id,notes,setNotes,statusHandler,done,setDone }) => {

    const nav= useNavigate()
    const[status,setStatus]= useState(false)

    const statusFunc=(check)=>{
        statusHandler(id)
          console.log(check)
          if(check===true)
          {
            setStatus(true)
          }
    }
    // console.log(element);


//     const removeHandler=(id)=>{
// const  newNotes=notes.filter((elm)=>{
//     if(elm.id!==id){
//         return elm
//     }
//  })
//  setNotes(newNotes)
//     }
    return (
        <>
            <div className="card mb-3">
                <div className="card-body" style={{ textTransform: "capitalize" }}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                  
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                   onClick={() => nav(`/dashboard/${id}`,{state:{notes,setNotes}})}>

                    {/* <Link to={`/dashboard/${id}`}></Link> */}
                        Edit
                    </button>
                    <button className="btn btn-danger mx-2" onClick={() => {
                        removeHandler(id)
                    }}>Delete</button>

             <Switch disabled={status} onClick={statusFunc} defaultChecked={false} checkedChildren="DONE" unCheckedChildren="NOT DONE" />
                </div>
            </div>
        </>
    )
}

export default Notes
