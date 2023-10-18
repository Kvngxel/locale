import { useEffect, useState } from "react";
import { NavBar } from "../../components";
import { LocaleApi } from "../../types/userTypes";
export const Locale = () => {
    const [locale, setLocale] = useState<LocaleApi | null>(null)
    const userDetails = async () => {
        try {
          let token = localStorage.getItem("token");
          // const res = await fetch("https://locale-fcxr.onrender.com/api/directory", {
            const res = await fetch("http://localhost:3000/api/directory", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          const userData = await res.json();
          setLocale(userData)
        } catch (err) {
            console.error("error");
        }
    };
    console.log(locale)
      useEffect(() => {
        userDetails()
        console.log(locale)
        
      }, []);
  return (
    <div>
        <NavBar/>
        <div className="mb-32">
            <div className="text-center mt-5">
                <h1 className="text-lg pt-20 pb-7 font-semibold">{locale?locale.dir_name:"Loading Directory Details"}</h1>
                <p className="text-sm">{locale?locale.dir_name:"Loading Directory Details"}</p>
            </div>
            <img className="text-center w-[60vw]  mx-auto mt-10 rounded-sm " src={locale?locale.profile_image:"Loading Directory Details"}/>
            <div className="mx-24 mt-20 text-center">
                <h1 className="text-md pb-7 font-semibold">Address:</h1>
                <p className="text-sm">{locale?locale.address:"Loading Directory Details"}</p>
            </div>
            <div className="mx-24 my-10 text-center">
                <h1 className="text-md pb-7 font-semibold">Locale Email:</h1>
                <p className="text-sm">{locale?locale.directory_email:"Loading Directory Details"}</p>
            </div>
            <div className="mx-24 my-10 text-center">
                <h1 className="text-md mb-5 font-semibold">Locale Telephone:</h1>
                <p className="text-sm">{locale?locale.telephone:"Loading Directory Details"}</p>
            </div>
            <div className="mx-24 my-10 text-center">
                <h1 className="text-md mb-5 font-semibold">Description:</h1>
                <p className="text-sm">{locale?locale.description:"Loading Directory Details"}</p>
            </div>
        </div>
    </div>
  );
};
