import React from 'react'

const Notes = ({ element, notes, setNotes, seteditId }) => {
    console.log(element);
    const removeHandler = (id) => {
        const newNotes = notes.filter((elm) => {
            if (elm.id !== id) {
                return elm
            }
        })
        setNotes(newNotes)
        seteditId(id)


    }

    const editHandler = (id) => {
        console.log(id)
        notes.filter((elem) => {
            if (elem.id === id ) {
               document.getElementById("edittitle")
               document.getElementById("editdesc")
            }
        })
       // (document.getElementById(elementId) as HTMLInputElement).value
    }
    return (
        <>
            <div className="card mb-3">
                <div className="card-body" style={{ textTransform: "capitalize" }}>
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.desc}</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                        editHandler(element.id)
                    }}>
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
