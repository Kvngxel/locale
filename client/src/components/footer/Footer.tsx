import { phone, location, mail,  } from "../../assets/icons"
import { logo } from "../../assets/images"
import { Link } from "react-router-dom"

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full text-center">
      <div className="md:py-24">
      <div className="flex justify-center pt-17">
        <Link className="hover:text-sec3 hover:font-semibold custom-selection mb-5" to={'/'}><img src={logo} alt="LOCALE" className="w-40"/></Link>
      </div>
        <p className="text-sm w-[80%] mx-auto font-extralight pt-3">Your one stop destinaton for businesses world wide</p>
        <div className="flex flex-col md:flex-row md:justify-around text-sm font-extralight pb-10 md:pb-0">
          <div className="flex flex-row justify-center items-center md:flex-col pt-7 md:pt-0 md:pl-28">
            <img src={mail} alt="" className="w-8 md:w-10 mr-2 md:mx-auto py-4"/>
            <p>locale@locale.com</p>
          </div>
          <div className="flex flex-row py-3 md:py-0 justify-center items-center md:flex-col md:mt-36">
            <img src={location} alt="" className="w-7 mr-2 md:w-10 md:mx-auto py-5"/>
            <p >Somewhere on Earth</p>
          </div>
          <div className="flex flex-row justify-center items-center md:flex-col md:pr-28">
            <img src={phone} alt="" className="w-6 mr-3 md:w-10  md:mx-auto py-5" />
            <p>+234-112-345-6789</p>
          </div>
        </div>
      </div>

      <div className="text-[#828282] text-xs font-extralight border-t p-7 md:py-9 bg-main">Copyright @ Locale {currentYear}</div>
      
    </div>
  )
}
