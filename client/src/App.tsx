import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Mallamfx } from "./pages/Mallamfx";
import { Login } from "./pages/login/Login";
import { UpdateProfile } from "./pages/profile/UpdateProfile";
import { SignUp } from "./pages/signup/SignUp";
import { Locale } from "./pages/locale/Locale";
import { Profile } from "./pages/profile/Profile";
import { UpdateLocale } from "./pages/locale/UpdateLocale";

function App() {
  const [completeProfile, setCompleteProfile] = useState(Boolean);
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
    setCompleteProfile(!!localStorage.getItem("isComplete"));
  }, []);

  return (
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
        <Route
          path="/"
          element={
            isLoggedIn ? (
              completeProfile ? (
                <Home />
              ) : (
                <Navigate to="updateprofile" />
              )
            ) : (
              <Home />
            )
          }
        />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/malamfx" element={<Mallamfx />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/locale" element={<Locale />} />
        <Route path="/updatelocale" element={<UpdateLocale />} />
        <Route path="*" element= "Error 404" />
      </Routes>
    </Router>
  );
}

export default App;
