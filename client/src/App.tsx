import { Home } from "./pages/home/Home";
import {About} from "./pages/About";
import { Contact } from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";


function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
