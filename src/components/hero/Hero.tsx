import { heroImg } from "../../assets/images"
export const Hero = () => {
  return (
    <div className="w-[50vw] mx-auto my-[10vh] items-center flex justify-around">
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Welcome to </h1>
            <h1 className="text-2xl">Your </h1>
            <h1 className="text-2xl">Locale directory</h1>
            <p>Home for all your Locale needs :)</p>
        </div>
        <div className="relative">
            <img src={heroImg} alt="" />
        </div>
        
    </div>
  )
}
