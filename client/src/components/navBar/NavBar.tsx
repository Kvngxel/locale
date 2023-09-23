import { Link } from "react-router-dom"
import { logo } from "../../assets/images"


export const NavBar = () => {
  return (
    <header className="flex justify-around bg-main pt-10 pb-4 px-[8vw] h-[15vh] shadow items-center max-sm:gap-4">
      <nav className="flex gap-7 pr-10 text-nxl max-sm:hidden">
          <Link className="hover:text-sec3 hover:font-semibold custom-selection pt-1" to={'/'}>Home</Link>
          <Link className="hover:text-sec3 hover:font-semibold custom-selection pt-1" to={'/about'}>About</Link>
          <Link className="hover:text-sec3 hover:font-semibold custom-selection pt-1" to={'/contact'}>Contact</Link>         
         </nav>
        {/* <h1 className="text-sec3 text-base font-semibold mt-3">LOCALE</h1> */}
        <img src={logo} alt="LOCALE" className="w-32"/>
        <input type="text" placeholder="Search..." className="focus:outline-none placeholder:text-gray-500 placeholder:text-sm placeholder:font-light pt-5 rounded-3xl text-center w-[17vw] max-sm:w-3/5 py-3 text-2xs"/>
        <nav className="flex gap-7 text-nxl max-sm:hidden">
          <Link className="hover:text-blue-400 hover:font-semibold text-black custom-selection pt-5" to={'/login'}>Log in</Link>
          <Link className="bg-[#0d0c22] hover:bg-[#2f5131] rounded-full py-5 px-7 text-white font-semibold " to={'/register'}>Sign Up</Link>       
         </nav>
        
        
        
    </header>
  )
}
