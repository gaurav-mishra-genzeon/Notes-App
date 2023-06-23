
import React from 'react'

const Forms = ({ title, settitle, desc, setDesc, notes, setNotes }) => {
  const inputHandler = (e) => {
    if (e.target.id === "title") {
      settitle(e.target.value)
    } else {
      setDesc(e.target.value)
    }

  }
  const addNotesHandler = (e) => {
    e.preventDefault()
    if (title !== "" && desc !== "") {
      setNotes((note) => {
        return (
          [...note, {
            title: title,
            desc: desc,
            id: new Date().getTime()
          }]
        )
      })
    }
    settitle("")
    setDesc("")
  }
  return (
    <>
      <div className='container my-3'>
        <div className='row-justify-content-center'>
          <div className='col-md-10'>
            <form style={{ border: "2px solid #ced4da", borderRadius: "10px", padding: "30px" }}>
              <div className="mb-3">

                <label className="form-label">Title</label>
                <input type="text" className="form-control" id="title" placeholder='Enter your title' value={title}
                  onChange={inputHandler} />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea rows={3}
                  className='form-control'
                  placeholder='Enter About your description' value={desc} onChange={inputHandler} />
              </div>

              <button type="submit" className="btn btn-primary" onClick={addNotesHandler}>Add Notes</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Forms
