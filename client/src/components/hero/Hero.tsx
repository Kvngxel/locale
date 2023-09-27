import Tag  from "./Tag"

export const Hero = () => {
  return (
    <div className="bg-main py-10 md:py-24 h-[85vh] text-center">
      <Tag />
      <h1 className="text-3xl px-48 mx-auto leading-3xl font-serif leading-[82px] custom-selection">Welcome to your locale directory</h1>  
      <p className="py-8  text-base custom-selection">Home for all your Locale needs :)</p>
      <button className="bg-[#0d0c22] hover:bg-[#ffffff] rounded-full py-5 px-7 text-white hover:text-black font-semibold mt-4 custom-selection">Create a Directory</button>
    </div>
    // <div className="containr mx-auto h-[85vh] bg-cover bg-heroBg items-center flex flex-col md:flex-row justify-around md:bg-none">
    //     <div className="flex flex-col gap-6 lg:gap-2">
    //         <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Welcome to </h1>
    //         <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Your </h1>
    //         <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Locale directory</h1>
    //         <p className="text-sm lg:text-sm mt-8 font-extralight">Home for all your Locale needs :)</p>
    //     </div>
    //     <img src={heroImg} alt="" className="basis-[40%] w-full hidden md:block" />
    // </div>
  )
}
