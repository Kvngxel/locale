import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <header className="flex justify-around bg-nav pt-8 pb-4 px-[8vw] h-[15vh] shadow items-center max-sm:gap-4">
        <h1 className="text-sec3 text-base font-semibold mt-3">LOCALE</h1>
        {/* <img src="../../assets/images/logo.svg" alt="LOCALE"/> */}
        <input type="text" placeholder="Search Locale" className="text-center w-[20vw] max-sm:w-3/5 py-2 text-2xs bg-green-200"/>
        <nav className="flex gap-7 pr-10 text-nxl max-sm:hidden mt-3">
          <Link className="hover:text-sec3 hover:font-semibold " to={'/'}>HOME</Link>
          <Link className="hover:text-sec3 hover:font-semibold" to={'/about'}>ABOUT</Link>
          <Link className="hover:text-sec3 hover:font-semibold" to={'/contact'}>CONTACT</Link>
          <Link className="hover:text-blue-400 hover:font-semibold text-blue-200" to={'/login'}>LOGIN</Link>
        </nav>
    </header>
  )
}
