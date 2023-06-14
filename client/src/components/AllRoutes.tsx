import {Routes, Route} from "react-router-dom"


export default function AllRoutes() {
  return (
  <Routes>
    <Route path="/" element={<h1>HomePage</h1>} />
    <Route path="/signup" element={<h1>SignUp</h1>} />
    <Route path="/login" element={<h1>Login</h1>} />
  </Routes>
  )
}
