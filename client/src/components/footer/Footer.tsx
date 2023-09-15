import { phone, location, mail,  } from "../../assets/icons"
export const Footer = () => {
  return (
    <div className="w-full text-center">
      <div className="border-t-2 py-24 max-sm:hidden">
        <h1 className="text-lg font-medium text-sec3">LOCALE</h1>
        <p className="text-xs font-extralight pt-8 pb-16">Your one stop destinaton for businesses world wide</p>
        <div className="flex justify-around text-sm font-extralight">
          <div>
            <img src={mail} alt="" className="w-10 mx-auto"/>
            <p>locale@locale.com</p>
          </div>
          <div className="mt-28 text-center">
            <img src={location} alt="" className="w-10 mx-auto"/>
            <p >Somewhere on Earth</p>
          </div>
          <div>
            <img src={phone} alt="" className="w-10 mx-auto" />
            <p>+234-112-345-6789</p>
          </div>

        </div>

      </div>

      <div className="text-[#B0B0B0] text-sm font-extralight border-t-2 py-6">Copyright @ Locale 2023</div>
      
    </div>
  )
}
