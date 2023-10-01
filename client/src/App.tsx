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
import { UploadRouteGuardProps } from "./types/userTypes";

function App() {
  const CompleteProfile: React.FC<UploadRouteGuardProps> = ({ element }) => {
    if (
      !localStorage.getItem('token') ||
      localStorage.getItem('token') === 'undefined'
    ) {
      return <Navigate to="/" />;
    }

    if(localStorage.getItem('isComplete')=== "true"){
      return <>{element}</>; // Render the element
    }
    else{
      return <>{<UpdateProfile/>}</>; // Render the element
    }

  };
  const LoggedIn: React.FC<UploadRouteGuardProps> = ({ element }) => {
    if (
      localStorage.getItem('token')
    ) {
      return <Navigate to="/" />;
    }
    return <>{element}</>; // Render the element
  };
  const HasDirectory: React.FC<UploadRouteGuardProps> = ({ element }) => {
    if (
      localStorage.getItem('hasDir') === "true"
    ) {
      return <Navigate to="/updatelocale" />; // Render the element
    }
    return <>{element}</>; // Render the element
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoggedIn element={<Login />} />}
        />
        <Route
          path="/signup"
          element={<LoggedIn element={<SignUp />} />}
        />
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/updateprofile" element={<CompleteProfile element={<UpdateProfile />} />} />
        <Route path="/malamfx" element={<Mallamfx />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<CompleteProfile element={<Profile />} />}/>
        <Route path="/locale" element={<CompleteProfile element={<HasDirectory element={<Locale/>} />} />} />
        <Route path="/updatelocale" element={<CompleteProfile element={<UpdateLocale />} />} />
        <Route path="*" element= "Error 404" />
      </Routes>
    </Router>
  );
}

export default App;
