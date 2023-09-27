import { NavBar } from '../../components'
import { Footer } from '../../components';
import { dir1 } from "../../assets/images";
import { User } from "../../types/userTypes";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


export const Profile = () => {
    const [user, setUser] = useState<User | null>(null)
    const Navigate = useNavigate();
    const userDetails = async () => {
        try {
          let token = localStorage.getItem("token");
          const res = await fetch("http://localhost:3000/api/user", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          const userData = await res.json();
          setUser(userData)
        } catch (err) {
          console.error("error");
        }
      };
      useEffect(() => {
        userDetails()
        console.log(user)
        
      }, []);
    return (
    <div>
        <NavBar />
        <div className='flex justify-center items-center pt-32 pb-14'>
            <div>
                <img className='w-36 h-36 rounded-full' src={user?user.profile_pic:dir1} alt="Profile Image" />
            </div>
            <div className='pl-5'>
                <h1 className='text-lg font-semibold py-3'>{user? `${user.first_name} ${user.last_name}`:"Loading details"}</h1>
                <p className='font-light text-xs'>{user? user.email:"Loading details"}</p>
                <button
                  onClick={() => {
                    Navigate("/updateprofile");
                  }}
                  className="bg-[#0d0c22] hover:bg-[#ffffff] rounded-full py-5
                      px-9 md:py-5 md:px-7 text-white hover:text-black font-semibold mt-4
                      custom-selection border-2 hover:border-3 text-xs">
                      Edit Profile
                </button>
            </div>   
        </div>
        <div className="border w-[30%] mx-auto "></div>
        <div className="py-10 text-center">
            <p className='py-24'>{user? user.address:"Loading details"}</p>
        </div>
        <div className="border w-[30%] mx-auto"></div>
        <Footer />
    </div>
  )
}
