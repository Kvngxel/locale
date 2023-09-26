import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export const Login = () => {
  // const Navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();


  
  async function handleAddTodoSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try{
        const response = await fetch("http://localhost:3000/api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "email": email,
            "password": password
          }),
        });
        const data = await response.json()
        localStorage.setItem("token", JSON.stringify(data));
        console.log(data)
        Navigate('/profile')
       } catch (error) {

    
    }
  }
  return (
    <div className="h-screen flex relative">
      <div className="w-1/3 bg-pry relative">
        <video
          src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        ></video>
        <Link
          className="absolute top-2 left-2 mt-5 ml-7"
          to={"/"}
        >
          <h1 className="text-white text-lg mt-4 ml-4 font-serif">Locale</h1>
          {/* <img src={logo} alt="LOCALE" className="w-32" /> */}
        </Link>
      </div>
      <div className="w-2/3 bg-white flex flex-col justify-center pl-40 pt-28">
        <h1 className="text-md font-sans font-bold mb-4">Sign in to your Locale</h1>
        <p className="text-sm font-extralight">Sign in to your account to enjoy world-class Locales</p>
        <div className="py-12">
          <form onSubmit={handleAddTodoSubmit} className="flex flex-col w-[60%] text-black mb-10">
            <label htmlFor="" className="text-xs font-semibold mb-1">Email:</label>
            <input
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
              type="text"
              placeholder="Please enter your email"
              className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                focus:border-red-200 focus:border-2 shadow-sm"
            />
            <label htmlFor="" className="text-xs font-semibold mt-5 mb-1">Password:</label>
            <input
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
              type="password"
              placeholder="Please enter your password"
              className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                focus:border-red-200 focus:border-2 shadow-sm"
            />
            <p className="py-4 text-center font-light">
              <Link className="border-b border-transparent hover:border-blue-500 mx-2 font-semibold" to={'#'}>
                Forgot password?
              </Link>
            </p>
            <button
              type="submit"
              className="bg-[#0d0c22] hover:bg-[#ffffff] border-2 border-transparent hover:border-2 hover:border-black rounded-full py-5 px-7 text-white hover:text-black font-semibold mt-4 custom-selection"
            >
              Sign in
            </button>
            <p className="py-4 text-center font-light">
              Don't have an account?
              <Link className="border-b border-transparent hover:border-blue-500 mx-2 font-semibold" to={"/signup"}>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
