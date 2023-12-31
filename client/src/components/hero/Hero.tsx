import { useNavigate } from "react-router-dom"
import Tag  from "./Tag"

export const Hero = () => {
  const Navigate = useNavigate()
  const createLocale = () =>{
    Navigate('/UpdateLocale')
  } 

  return (
    <div className="bg-main py-14 md:py-24 h-[85vh] text-center">
      <Tag />
      <h1 className="text-[50px] pt-10 md:pt-0 md:text-3xl px-10 md:px-48 mx-auto
         leading-[55px] font-serif md:leading-[82px]
        custom-selection">
        Welcome to your locale directory
      </h1>
      <p className="pt-14 pb-10 md:py-8 font-light text-sm md:text-base custom-selection">Home for all your Locale needs :)</p>
      <button onClick ={createLocale} className="bg-[#0d0c22] hover:bg-[#ffffff] rounded-full py-5
        px-9 md:py-5 md:px-7 text-white hover:text-black font-semibold mt-4
        custom-selection">
          Create a Directory
        </button>
    </div>
  )
}
