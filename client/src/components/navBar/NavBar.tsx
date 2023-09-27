import { Link, useNavigate } from "react-router-dom"
import { logo } from "../../assets/images"
import  Dropdown  from "./Dropdown"
import { useEffect, useState } from "react";


export const NavBar = () => {
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const Navigate = useNavigate()
  const handleLogout = async() => {
    localStorage.removeItem('token');
    localStorage.removeItem('isComplete');
    Navigate('/')
  }
  useEffect(() => {
    setIsLoggedin(!!localStorage.getItem("token")); // Convert to boolean using double negation !!
  }, []);
  return (
    <header className="flex justify-around bg-main pt-10 pb-4 px-[8vw] h-[15vh] shadow items-center max-sm:gap-4">
    <nav className="flex gap-7 pr-10 text-nxl max-sm:hidden">
      <Link className="hover:text-sec3 hover:font-semibold custom-selection pt-1" to={'/'}>Home</Link>
      <Link className="hover:text-sec3 hover:font-semibold custom-selection pt-1" to={'/about'}>About</Link>
      <Link className="hover:text-sec3 hover:font-semibold custom-selection pt-1" to={'/contact'}>Contact</Link>         
    </nav>
    <Link className="hover:text-sec3 hover:font-semibold custom-selection mb-5" to={'/'}><img src={logo} alt="LOCALE" className="w-32"/></Link>
    <input type="text"
      placeholder="Search..."
      className="focus:outline-none placeholder:text-gray-500 placeholder:text-xs
        placeholder:font-light pt-3 rounded-3xl text-center w-[17vw] max-sm:hidden py-3 text-xs
        px-6"
        />
    <nav className="flex gap-7 text-nxl max-sm:hidden">
      { isLoggedIn?
      <>
      <Link className="hover:text-blue-400 hover:font-semibold text-black custom-selection pt-5" to={'/profile'}>Profile</Link>
      <button onClick={handleLogout} className="bg-[#0d0c22] hover:bg-[#ffffff] rounded-full
        py-5 px-7 text-white hover:text-black font-semibold" >Log out</button>       
      </>
      :
      <>
      <Link className="hover:text-blue-400 hover:font-semibold text-black custom-selection pt-5" to={'/login'}>Log in</Link>
      <Link className="bg-[#0d0c22] hover:bg-[#ffffff] rounded-full py-5 px-7 text-white hover:text-black font-semibold " to={'/signup'}>Sign Up</Link>
      </>

      }
      
    </nav>
    <div className="hidden max-sm:block">
      <Dropdown />
    </div>  
  </header>
  )
}