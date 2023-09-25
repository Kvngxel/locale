import { NavBar } from "../../components";

export const UpdateLocale = () => {
  return (
    <div className="div"> 
        <NavBar />   
        <div className="h-screen flex relative">
            <div className="w-full bg-white flex flex-col justify-center pl-[380px] pt-[550px]">
                <h1 className="text-md font-sans font-bold mb-4">Setup your Locale</h1>
                <p className="text-xs font-extralight">Create your dream locale</p>
                <div className="py-12">
                <form action="" className="flex flex-col w-[60%] text-black mb-10">
                    <label htmlFor="" className="text-xs font-semibold mb-1">Locale name</label>
                    <input
                    type="text"
                    placeholder="Locale name"
                    className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                        hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                        focus:border-red-200 focus:border-2 shadow-sm"
                    />
                    <label htmlFor="" className="text-xs font-semibold mt-4">Address:</label>
                    <textarea
                    //   type="text"
                    placeholder="Please enter your address"
                    className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                        hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                        focus:border-red-200 focus:border-2 shadow-sm"
                    />
                     <label htmlFor="" className="text-xs font-semibold mb-1 pt-3">Locale Email:</label>
                    <input
                    type="email"
                    placeholder="locale@locale.com"
                    className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                        hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                        focus:border-red-200 focus:border-2 shadow-sm"
                    />   
                    <label htmlFor="" className="text-xs font-semibold mb-1 mt-3">Telephone:</label>
                    <input
                    type="text"
                    placeholder="+000"
                    className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                        hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                        focus:border-red-200 focus:border-2 shadow-sm"
                    />                                    
                    <label htmlFor="" className="text-xs font-semibold mt-3 mb-2">Banner Image</label>
                    <input type="file" name="image" accept="image/*"></input>
                    <label htmlFor="" className="text-xs font-semibold mb-1 mt-5">Quote:</label>
                    <input
                    type="text"
                    placeholder="Awesome quote"
                    className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                        hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                        focus:border-red-200 focus:border-2 shadow-sm"
                    />   
                    <label htmlFor="" className="text-xs font-semibold mt-4">Description:</label>
                    <textarea
                    //   type="text"
                    placeholder="Describe your locale"
                    className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                        hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                        focus:border-red-200 focus:border-2 shadow-sm"
                    />
                    <label htmlFor="" className="text-xs font-semibold mt-3 mb-2">Locale Image(s)</label>
                    <input type="file" name="image" accept="image/*"></input>
                    <button
                    type="submit"
                    className="bg-[#0d0c22] hover:bg-[#ffffff] border-2 border-transparent
                        hover:border-2 hover:border-black rounded-full py-5 px-7 text-white
                        hover:text-black font-semibold mt-7 custom-selection"
                    > Save Locale
                    </button>
                </form>
                </div>
            </div>
        </div>
    </div>
  );
};
