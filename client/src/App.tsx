import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Mallamfx } from "./pages/Mallamfx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Login } from "./pages/login/Login";
import { UpdateProfile } from "./pages/profile/UpdateProfile";
import { SignUp } from "./pages/signup/SignUp";
import { Locale } from "./pages/locale/Locale";
import { Profile } from "./pages/profile/Profile"
import { UpdateLocale } from "./pages/locale/UpdateLocale";
import { useEffect, useState } from "react";

function App() {
  const [completeProfile, setCompleteProfile] = useState(true);
  const [isLoggedIn, setIsLoggedin] = useState(true);
  useEffect(() => {
    setIsLoggedin(!!localStorage.getItem("token")); // Convert to boolean using double negation !!
    setCompleteProfile(!!localStorage.getItem("isComplete"));
  }, [Navigate, localStorage]);


  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={isLoggedIn ? <Navigate to="/" /> : <SignUp />}
          />
          <Route path="/" element={isLoggedIn?completeProfile?<Home/>:<Navigate to="updateprofile"/>:<Home />} />
          <Route
            path="/updateprofile"
            element={
              isLoggedIn ? <UpdateProfile /> : <Navigate to={"/contact"} />
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/malamfx" element={<Mallamfx />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/locale" element={<Locale />} />
          <Route path="/updatelocale" element={<UpdateLocale />} />
          <Route path="*" element={"Error 404"} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
