import React, { useEffect, useState } from 'react'


import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Notes from './DashboardComp/Notes'
import EditModal from './DashboardComp/EditModal'
import Forms from './DashboardComp/Forms'



const Dashboard = () => {

  const [logindata, setLoginData] = useState([]);
  console.log(logindata);
  const [data, setData] = useState(["ravi", "sanket"])
  const history = useNavigate();


  const [title, settitle] = useState("")
  const [desc, setDesc] = useState("")
  const [notes, setNotes] = useState<any[]>([getNotesFromLs])
  localStorage.setItem("notes", JSON.stringify(notes))


  const details = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser)
      console.log(user);
      setLoginData(user);

    }

  }
  const userlogout = () => {
    localStorage.removeItem("user_login")
    history("/")
  }
  useEffect(() => {
    details();
  }, [])

  return (

    <div>

      {/* <Forms/> */}
      {
        logindata.length === 0 ? "error" :
          <>

            <EditModal />

            <Forms title={title} settitle={settitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes} />

            <div className='container'>
              <div className='row'>
                <div className='col-md-10'>
                  <h1 className='mb-3'>Your Notes</h1>
                  {
                    notes.length === 0 ? <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Message</h5>
                        <p className="card-text">No notes are Available for Reading</p>
                      </div>
                    </div> : notes.map((element) => {
                      return (
                        <Notes element={element} key={element.id} notes={notes} setNotes={setNotes}/>
                      )
                    })

                  }
                </div>
              </div>
            </div>
            <Button onClick={userlogout}>LogOut</Button>
           


          </>
      }


    </div>
  )
  function getNotesFromLs() {
    const note = JSON.parse(localStorage.getItem("notes") ||'{}');
  if(note){
      return note
    }else{
      return [];
    }
  }

}

export default Dashboard
