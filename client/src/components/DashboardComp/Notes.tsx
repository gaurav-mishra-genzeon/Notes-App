import React from 'react'

const Notes = ({ element,notes,setNotes }) => {
    console.log(element);
    const removeHandler=(id)=>{
const  newNotes=notes.filter((elm)=>{
    if(elm.id!==id){
        return elm
    }
 })
 setNotes(newNotes)
 


    }
    return (
        <>
            <div className="card mb-3">
                <div className="card-body" style={{ textTransform: "capitalize" }}>
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.desc}</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Edit
                    </button>


                    <button className="btn btn-danger mx-2" onClick={() => {
                        removeHandler(element.id)
                    }}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default Notes
