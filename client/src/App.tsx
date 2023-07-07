import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Navbar/Header";
import Home from "./components/Signup/Home";
import { Routes, Route} from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./components/DashboardComp/Dashboard";
import Edit from "./components/EditPage/EditPage";
// import PrivateRoute from "./components/PrivateRoute";
// import { useContext, useEffect } from "react";
// import { AppContext } from "./components/context/authContext";
function App() {
  //  const {setToken}=useContext(AppContext);
  //  const nav= useNavigate()

  //  let tok= localStorage.getItem("token")

  //  useEffect(()=>{
  //    || "{}" )
  //    setToken?.(ok)
  //    if(Object.keys(ok)?.length>0){
  //     return nav("/dashboard")
  //    }
  //  },[])

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard/:id" element={<Edit/>} />
      </Routes>
    </>
  );
}

export default App;
