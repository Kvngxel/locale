import { phone, location, mail,  } from "../../assets/icons"
import { logo } from "../../assets/images"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="w-full text-center">
      <div className="border-t-2 md:py-24">
      <div className="flex justify-center pt-17">
        <Link className="hover:text-sec3 hover:font-semibold custom-selection mb-5" to={'/'}><img src={logo} alt="LOCALE" className="w-40"/></Link>
      </div>
        <p className="text-sm w-[80%] mx-auto font-extralight pt-3">Your one stop destinaton for businesses world wide</p>
        <div className="flex flex-col md:flex-row justify-around text-sm font-extralight">
          <div className="flex flex-row justify-center items-center md:flex-col pl-28">
            <img src={mail} alt="" className="w-10  md:mx-auto py-5"/>
            <p>locale@locale.com</p>
          </div>
          <div className="flex flex-row justify-center items-center md:flex-col md:mt-36">
            <img src={location} alt="" className="w-10 md:mx-auto py-5"/>
            <p >Somewhere on Earth</p>
          </div>
          <div className="flex flex-row justify-center items-center md:flex-col pr-28">
            <img src={phone} alt="" className="w-10  md:mx-auto py-5" />
            <p>+234-112-345-6789</p>
          </div>
        </div>
      </div>

      <div className="text-[#828282] text-xs font-extralight border-t py-9 bg-main">Copyright @ Locale 2023</div>
      
    </div>
  )
}
