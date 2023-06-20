import React from 'react'

function Navbar() {
  return (
    <>
      <form>
        <div className="mb-3">
         
          <label className="form-label">Title</label>
          <input type="text" className="form-control" id="title"  />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
         <textarea name="desc" id="desc" rows = "3" className='Form-control'></textarea>
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Navbar
