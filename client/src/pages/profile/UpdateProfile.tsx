import { useEffect, useState } from "react";
import { NavBar } from "../../components";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/userTypes";

export const UpdateProfile = () => {
  const Navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [picMessage, setPicMessage] = useState("");
  const [address, setAddress] = useState("");
  const [pPic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [user, setUser] = useState<User | null>(null);
  const postDetails = (pics: File | null) => {
    setLoading("img recieved")
    if (pics && (pics.type === "image/jpeg" || pics.type === "image/png")) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "dpsystem");
      data.append("cloud_name", "dx2sa98h9");
      fetch("https://api.cloudinary.com/v1_1/dx2sa98h9/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          setLoading("successful")
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("It is not an image");
    }
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    let token = localStorage.getItem("token");
    console.log(token);
    try {
      // const response = await fetch("https://locale-fcxr.onrender.com/api/user", {
        const response = await fetch("http://localhost:3000/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          first_name: fName,
          last_name: lName,
          profile_pic: pPic,
          address: address,
        }),
      });
      const data = await response.json();
      localStorage.setItem("isComplete", "true")
      Navigate("/")
      console.log(data);
    } catch (err) {
      setError("Error Connecting to server");
    }
  }
  const userDetails = async () => {
    try {
      let token = localStorage.getItem("token");
      // const res = await fetch("https://locale-fcxr.onrender.com/api/user", {
        const res = await fetch("http://localhost:3000/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = await res.json();
      setUser(userData);
    } catch (err) {
      console.error("error");
    }
  };
  useEffect(() => {
    userDetails(); 
  }, []);
  return (
    <div className="div">
      <NavBar />
      <div className="flex">
        <div className="w-full md:w-[50vw] mx-auto bg-white flex flex-col justify-center  pt-32">
          <div className="text-center">
            <h1 className="text-md font-sans font-bold mb-4">
              Setup your Profile
            </h1>
            <p className="text-xs font-extralight">
              Create your locale profile
            </p>
          </div>
          <div className="py-12">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-[80%] mx-auto md:w-full text-black mb-10"
            >
              <label htmlFor="" className="text-xs font-semibold mb-1">
                First Name:
              </label>
              <input
                onChange={(event) => {
                  setfName(event.target.value);
                }}
                type="text"
                required
                placeholder="please enter your first name"
                className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                        hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                        focus:border-red-200 focus:border-2 shadow-sm"
              />
              <label htmlFor="" className="text-xs font-semibold mb-1">
                Last Name:
              </label>
              <input
                onChange={(event) => {
                  setlName(event.target.value);
                }}
                type="text"
                placeholder="please enter your last name"
                className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                        hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                        focus:border-red-200 focus:border-2 shadow-sm"
              />
              <label htmlFor="" className="text-xs font-semibold mb-1">
                Email:
              </label>
              <input
                value={user ? user.email : "Loading user email..."}
                disabled
                type="email"
                placeholder="please enter your email"
                className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                        hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                        focus:border-red-200 focus:border-2 shadow-sm"
              />
              <label htmlFor="" className="text-xs font-semibold mt-5 mb-1">
                Address:
              </label>
              <textarea
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
                placeholder="Please enter your address"
                className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                        hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                        focus:border-red-200 focus:border-2 shadow-sm"
              />
              <label htmlFor="" className="text-xs font-semibold mt-5 mb-1">
                Profile Pic
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) =>
                  postDetails(e.target.files && e.target.files[0])
                }
              ></input>
              <h1>{picMessage}</h1>
              <h1>{error}</h1>
              <h1>{loading}</h1>
              <button
                type="submit"
                onClick={() => {
                  Navigate("/profile");
                }}
                className="bg-[#0d0c22] hover:bg-[#ffffff] border-2 border-transparent
                        hover:border-2 hover:border-black rounded-full py-5 px-7 text-white
                        hover:text-black font-semibold mt-7 custom-selection"
              >
                Save
              </button>
              <button
                onClick={() => {
                  Navigate("/");
                }}
                className="bg-[#0d0c22] hover:bg-[#ffffff] border-2 border-transparent
                        hover:border-2 hover:border-black rounded-full py-5 px-7 text-white
                        hover:text-black font-semibold mt-7 custom-selection"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
