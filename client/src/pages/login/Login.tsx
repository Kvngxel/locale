import { Link } from "react-router-dom"
import { Footer, NavBar } from "../../components"

export const Login = () => {
  return (
    <div>
       <NavBar />
       <div className="my-20 max-sm:my-0 flex containr">
            <div className="basis-[40%] pt-40 bg-pry flex px-[8%] flex-col max-sm:hidden">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <p className="text-sm font-extralight">Login to your account to enjoy world class Locales</p>
            </div>
            <div className="basis-[60%] max-sm:basis-[98%] max-sm:mx-auto py-20 flex flex-col items-center colgrad">
                <h1 className="text-xl font-bold text-white mb-14">LOCALE</h1>
                <form action="" className="flex flex-col w-[60%] text-black mb-10">
                <label htmlFor="" className="text-base ">Username:</label>
                <input type="text" placeholder="enter your username" className="w-full pl-6 py-4 rounded-sm my-6" />
                <label htmlFor="" className="text-base mt-10">Password:</label>
                <input type="password" placeholder="enter your password" className="w-full pl-6 py-4 rounded-sm my-6" />
                <input type="submit" value="LOG IN" className="colgrad w-[40%] self-center py-2" />
                </form>
                <Link to="">Forgot Password</Link>
                <p>Don't have an account? <Link to="">Register</Link>  </p>

            </div>
        
        </div> 
        <Footer/>
    </div>
  )
}
