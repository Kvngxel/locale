import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="h-screen flex">
      <div className="w-1/3 bg-pry relative">
        <video
          src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="w-2/3 bg-white flex flex-col justify-center pl-40 pt-28">
        <h1 className="text-md font-sans font-bold mb-4">Sign up to Locale</h1>
        <p className="text-sm font-extralight">Sign up an account with us today</p>
        <div className="py-12">
          <form action="" className="flex flex-col w-[60%] text-black mb-10">
            <label htmlFor="" className="text-xs font-semibold mb-1">Email:</label>
            <input
              type="text"
              placeholder="Please enter your email"
              className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                focus:border-red-200 focus:border-2 shadow-sm"
            />
            <label htmlFor="" className="text-xs font-semibold mt-5 mb-1">Password:</label>
            <input
              type="password"
              placeholder="Please enter your password"
              className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                focus:border-red-200 focus:border-2 shadow-sm"
            />
            <button
              type="submit"
              className="bg-[#0d0c22] hover:bg-[#ffffff] border-2 border-transparent
                hover:border-2 hover:border-black rounded-full py-5 px-7 text-white
                hover:text-black font-semibold mt-7 custom-selection"
            >
              Create Account
            </button>
            <p className="py-4 text-center font-light">
              Already have an account?
              <Link className="border-b border-transparent hover:border-blue-500 mx-2 font-semibold" to={'/login'}>
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
