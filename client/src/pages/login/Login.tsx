import { Link } from "react-router-dom"
export const Login = () => {
  return (
    <div>
       <div className=" max-sm:my-0 flex">
          <div className="w-[32.25%] bg-pry relative h-screen">
              <video
                src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover">            
              </video>
            </div>
            <div className="w-[67.75%] bg-white flex flex-col px-44 py-32 justify-center">
              <h1 className="text-md font-sans font-bold mb-4">Sign in to your Locale</h1>
              <p className="text-sm font-extralight">Sign in to your account to enjoy world-class Locales</p>
              <div className="div py-12">
                <form action="" className="flex flex-col w-[60%] text-black mb-10">
                  <label htmlFor="" className="text-xs font-semibold mb-1">Email:</label>
                  <input type="text"
                    placeholder="please enter your email"
                    className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                      hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                      focus:border-red-200 focus:border-2 shadow-sm"
                  />
                  <label htmlFor="" className="text-xs font-semibold mt-5 mb-1 ">password:</label>
                  <input type="password"
                    placeholder="please enter your password"
                    className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                      hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xm
                      focus:border-red-200 focus:border-2 shadow-sm"
                  />
                  {/* <label htmlFor="" className="text-base mt-10">Password:</label>
                  <input type="password" placeholder="enter your password" className="w-full pl-6 py-4 rounded-sm my-6" />
                  <input type="submit" value="LOG IN" className="colgrad w-[40%] self-center py-2" /> */}
                  <button type="submit"
                    className="bg-[#0d0c22] hover:bg-[#ffffff] hover:border-2 hover:border-black rounded-full py-5 px-7 text-white hover:text-black font-semibold mt-4 custom-selection"
                    >Sign in</button>
                    <p className="py-4 text-center font-light">Don't have an account? 
                    <Link className="border-b border-transparent hover:border-blue-500 mx-2 font-semibold" to={'/register'}>Sign up</Link>
                    </p>
                </form>

              </div>
            </div>
            {/* <div className="basis-[32.5%] pt-40 bg-pry flex px-[8%] flex-col max-sm:hidden">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <p className="text-sm font-extralight">Login to your account to enjoy world class Locales</p>
            </div> */}
            {/* <div className="basis-[65%] max-sm:basis-[98%] max-sm:mx-auto py-20 flex flex-col items-center colgrad"> */}
                {/* <h1 className="text-xl font-bold text-white mb-14">LOCALE</h1>
                <form action="" className="flex flex-col w-[60%] text-black mb-10">
                <label htmlFor="" className="text-base ">Username:</label>
                <input type="text" placeholder="enter your username" className="w-full pl-6 py-4 rounded-sm my-6" />
                <label htmlFor="" className="text-base mt-10">Password:</label>
                <input type="password" placeholder="enter your password" className="w-full pl-6 py-4 rounded-sm my-6" />
                <input type="submit" value="LOG IN" className="colgrad w-[40%] self-center py-2" />
                </form>
                <Link to="">Forgot Password</Link>
                <p>Don't have an account? <Link to="">Register</Link>  </p> */}
            {/* </div>         */}
        </div> 
    </div>
  )
}
