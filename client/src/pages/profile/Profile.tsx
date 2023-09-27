import { NavBar } from '../../components'
import { Footer } from '../../components';
import { dir } from "../../assets/images";

export const Profile = () => {
  return (
    <div>
        <NavBar />
        <div className='flex justify-center items-center pt-32 pb-14'>
            <div>
                <img className='w-36 h-36 rounded-full' src={dir} alt="Profile Image" />
            </div>
            <div className='pl-5'>
                <h1 className='text-lg font-semibold py-3'>Eze Excel</h1>
                <p className='font-light text-xs'>example@example.com</p>
                <button className="bg-[#0d0c22] hover:bg-[#ffffff] rounded-full py-5
                    px-9 md:py-5 md:px-7 text-white hover:text-black font-semibold mt-4
                    custom-selection border-2 hover:border-3 text-xs">
                    Edit Profile
                </button>
            </div>   
        </div>
        <div className="border w-[30%] mx-auto "></div>
        <div className="py-10 text-center">
            <p className='py-24'>My Little description :), yay</p>
        </div>
        <div className="border w-[30%] mx-auto"></div>
        <Footer />
    </div>
  )
}
