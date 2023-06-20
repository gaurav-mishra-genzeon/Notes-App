import React, { useEffect, useState } from 'react'
import Forms from './DashboardComp/Forms'

import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "./Dashboard.css"


const Dashboard = () => {

  const [logindata, setLoginData] = useState([]);
  console.log(logindata);

  const history = useNavigate();

  const details = () =>{
    const getuser = localStorage.getItem("user_login");
    if(getuser && getuser.length){
      const user = JSON.parse(getuser)
      console.log(user);
      setLoginData(user);
      
    }

  }
   const userlogout = ()=>{
    localStorage.removeItem("user_login")
    history("/")
   }
  useEffect(()=>{
    details();
  },[])

  return (
    // <div>
    //   Dashboard
    //  <Body/>
    //  <Note/>
    //  <Footer/>
    // </div>
    <>
    <Forms/>
      {
        logindata.length === 0 ? "error" :
          <>
          <div className='dashboard_header'>


            <h1>Dashboard page</h1>
           
           
            <Button onClick={userlogout}>LogOut</Button>
          </div>
          </>
      }
    </>
  )
}

export default Dashboard
