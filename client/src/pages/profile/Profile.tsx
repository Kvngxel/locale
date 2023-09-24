import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div className="h-screen flex relative">
      <div className="w-1/3 bg-pry relative">
        <video
          src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
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
        </Link>
      </div>
      <div className="w-2/3 bg-white flex flex-col justify-center pl-40 pt-80 overflow-y-scroll">
      {/* <div className="w-2/3 bg-white overflow-y-scroll"> */}
        <h1 className="text-md font-sans font-bold mb-4">Setup your Profile</h1>
        <p className="text-xs font-extralight">Create your locale profile</p>
        <div className="py-12">
          <form action="" className="flex flex-col w-[60%] text-black mb-10">
            <label htmlFor="" className="text-xs font-semibold mb-1">First Name</label>
            <input
              type="text"
              placeholder="First name"
              className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                focus:border-red-200 focus:border-2 shadow-sm"
            />
            <label htmlFor="" className="text-xs font-semibold mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                focus:border-red-200 focus:border-2 shadow-sm"
            />
            <label htmlFor="" className="text-xs font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="please enter your email address"
              className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                focus:border-red-200 focus:border-2 shadow-sm"
            />
            <label htmlFor="" className="text-xs font-semibold mt-5 mb-1">Address</label>
            <textarea
            //   type="text"
              placeholder="Please enter your address"
              className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                focus:border-red-200 focus:border-2 shadow-sm"
            />
            <label htmlFor="" className="text-xs font-semibold mt-5 mb-1">Profile Pic</label>
            <input type="file" name="image" accept="image/*"></input>
            <button
              type="submit"
              className="bg-[#0d0c22] hover:bg-[#ffffff] border-2 border-transparent
                hover:border-2 hover:border-black rounded-full py-5 px-7 text-white
                hover:text-black font-semibold mt-7 custom-selection"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
