import { Home } from "./pages/home/Home";
import {About} from "./pages/About";
import { Contact } from "./pages/Contact";
import { Mallamfx } from "./pages/Mallamfx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
import { SignUp } from "./pages/signup/SignUp";
function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/malamfx" element={<Mallamfx />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={"Error 404"} />
        </Routes>
      </Router>
    </>
  )
}

export default App
