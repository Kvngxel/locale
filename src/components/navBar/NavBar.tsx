export const NavBar = () => {
  return (
    <header className="flex justify-around bg-pry py-6 px-[15vw] items-center">
        <h1 className="text-sec3 text-xl font-semibold">LOCALE</h1>
        <input type="text" placeholder="Search Locale" className="text-center w-[20vw] py-2"/>
        <nav className="flex gap-6">
            <button onClick={() => window.location.href = `/`} >Home Page</button>
            <button onClick={() => window.location.href = `/AboutUs/1`} >About</button>
            <button onClick={() => window.location.href = `/ContactUs/1`} type="submit">Contact</button>
        </nav>
    </header>
  )
}
