import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <header className="flex justify-around bg-pry pt-8 pb-4 px-[15vw] h-[15vh] shadow-md items-center">
        <h1 className="text-sec3 text-base font-semibold">LOCALE</h1>
        <input type="text" placeholder="Search Locale" className="text-center w-[20vw] py-2 text-2xs"/>
        <nav className="flex gap-6 pr-5 text-x">
          <Link className="hover:text-sec3 " to={'/'}>HOME</Link>
          <Link className="hover:text-sec3 " to={'/about'}>ABOUT</Link>
          <Link className="hover:text-sec3 " to={'/contact'}>CONTACT</Link>
        </nav>
    </header>
  )
}
