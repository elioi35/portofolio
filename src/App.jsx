import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Services from "./pages/Services"

function App() {

  return (
    <>
    <Navbar></Navbar>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contacts" element={<Contacts/>}/>
  <Route path="/services" element={<Services/>}/>

   </Routes>
    </>
  )
}

export default App
