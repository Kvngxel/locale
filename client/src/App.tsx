import { Home } from "./pages/home/Home";
import {About} from "./pages/About";
import { Contact } from "./pages/Contact";
import { Mallamfx } from "./pages/Mallamfx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile"
import { UpdateProfile } from "./pages/profile/UpdateProfile";
import { SignUp } from "./pages/signup/SignUp";
import { Locale } from "./pages/locale/Locale";
import { UpdateLocale } from "./pages/locale/UpdateLocale";
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
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/locale" element={<Locale />} />
          <Route path="/updatelocale" element={<UpdateLocale />} />
          <Route path="*" element={"Error 404"} />
        </Routes>
      </Router>
    </>
  )
}

export default App
