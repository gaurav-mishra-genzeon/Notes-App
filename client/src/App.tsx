import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Home from './components/Home';
import {Routes,Route  } from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path= '/' element={<Home />} />
      <Route path= '/login' element={<Login />} />
      <Route path= '/dashboard' element={<Dashboard />} />
    </Routes>
   
    </>
  );
}

export default App;
