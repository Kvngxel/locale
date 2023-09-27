import { Home } from "./pages/home/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
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
import { UpdateLocale } from "./pages/locale/UpdateLocale";
import { useEffect, useState } from "react";

function App() {
  const [completeProfile, setCompleteProfile] = useState(true);
  const [isLoggedIn, setIsLoggedin] = useState(true);
  useEffect(() => {
    let token = localStorage.getItem("token");
    let isComplete = localStorage.getItem("isComplete");
    setIsLoggedin(!!token); // Convert to boolean using double negation !!
    setCompleteProfile(!!isComplete);
    console.log({ token: token });
    console.log({ one: isLoggedIn });
  }, [Navigate]);


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
          <Route path="/locale" element={<Locale />} />
          <Route path="/updatelocale" element={<UpdateLocale />} />
          <Route path="/about" element={<About />} />
          <Route path="/malamfx" element={<Mallamfx />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={"() => <div>Error 404</div>"} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
