import { heroImg } from "../../assets/images"
export const Hero = () => {
  return (
    <div className="w-[70vw] mx-auto h-[85vh] items-center flex justify-around">
        <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">Welcome to </h1>
            <h1 className="text-2xl font-semibold">Your </h1>
            <h1 className="text-2xl font-semibold">Locale directory</h1>
            <p className="text-base mt-8 font-extralight">Home for all your Locale needs :)</p>
        </div>
        <img src={heroImg} alt="" className="basis-1/2 w-full" />
    </div>
  )
}
