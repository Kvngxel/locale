import { phone, location, mail,  } from "../../assets/icons"
export const Footer = () => {
  return (
    <div className="w-full text-center">
      <div className="border-t-2 py-10 md:py-24">
        <h1 className="text-base font-medium md:font-semibold md:text-lg text-sec3">LOCALE</h1>
        <p className="text-xs w-[80%] mx-auto font-extralight pt-8 pb-16">Your one stop destinaton for businesses world wide</p>
        <div className="flex flex-col md:flex-row justify-around text-sm font-extralight gap-6">
          <div className="flex flex-row justify-center items-center md:flex-col">
            <img src={mail} alt="" className="w-10  md:mx-auto"/>
            <p>locale@locale.com</p>
          </div>
          <div className="flex flex-row justify-center items-center md:flex-col md:mt-60">
            <img src={location} alt="" className="w-10 md:mx-auto"/>
            <p >Somewhere on Earth</p>
          </div>
          <div className="flex flex-row justify-center items-center md:flex-col">
            <img src={phone} alt="" className="w-10  md:mx-auto" />
            <p>+234-112-345-6789</p>
          </div>

        </div>

      </div>

      <div className="text-[#B0B0B0] text-sm font-extralight border-t-2 py-6">Copyright @ Locale 2023</div>
      
    </div>
  )
}
