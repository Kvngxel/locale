import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <header className="flex justify-around bg-pry py-6 px-[15vw] items-center">
        <h1 className="text-sec3 text-xl font-semibold">LOCALE</h1>
        <input type="text" placeholder="Search Locale" className="text-center w-[20vw] py-2"/>
        <nav className="flex gap-6">
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}>Contact</Link>
        </nav>
    </header>
  )
}
