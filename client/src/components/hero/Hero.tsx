import { heroImg } from "../../assets/images"
export const Hero = () => {
  return (
    <div className="containr mx-auto h-[85vh] bg-cover bg-contain bg-heroBg items-center flex flex-col md:flex-row justify-around md:bg-none">
        <div className="flex flex-col gap-6 lg:gap-2">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Welcome to </h1>
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Your </h1>
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Locale directory</h1>
            <p className="text-sm lg:text-sm mt-8 font-extralight">Home for all your Locale needs :)</p>
        </div>
        <img src={heroImg} alt="" className="basis-[40%] w-full hidden md:block" />
    </div>
  )
}
