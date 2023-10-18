import { useState } from "react";
import { NavBar } from "../../components";
import { useNavigate } from "react-router-dom";

export const UpdateLocale = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [picMessage, setPicMessage] = useState("");
  const [bannerImg, setbannerImg] = useState("");
  const [quote, setquote] = useState("");
  const [desc, setdesc] = useState("");
  const Navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const postDetails = (pics: File | null) => {
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
          setbannerImg(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("It is not an image");
    }
  };
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let token = localStorage.getItem("token");
    try {
      // const response = await fetch("https://locale-fcxr.onrender.com/api/directory", {
        const response = await fetch("http://localhorsst:3000/api/directory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          dir_name: name,
          address: address,
          directory_email: email,
          telephone: phoneNumber,
          profile_image: bannerImg,
          quote: quote,
          description: desc,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      setError("Error Connecting to server");
    }
  }

  return (
    <div className="div">
      <NavBar />
      <div className="flex">
        <div className="w-full md:w-[50vw] mx-auto bg-white flex flex-col justify-center  pt-32">
          <div className="text-center">
            <h1 className="text-md font-sans font-bold mb-4">
              Setup your Locale
            </h1>
            <p className="text-xs font-extralight">Create your dream locale</p>
          </div>
          <div className="py-12">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-[75%] mx-auto md:w-full text-black mb-10"
            >
              <label htmlFor="" className="text-xs font-semibold mb-1">
                Locale name
              </label>
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                type="text"
                placeholder="Locale name"
                className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                        hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                        focus:border-red-200 focus:border-2 shadow-sm"
              />
              <label htmlFor="" className="text-xs font-semibold mt-4">
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
              <label htmlFor="" className="text-xs font-semibold mb-1 pt-3">
                Locale Email:
              </label>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="email"
                placeholder="locale@locale.com"
                className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                        hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                        focus:border-red-200 focus:border-2 shadow-sm"
              />
              <label htmlFor="" className="text-xs font-semibold mb-1 mt-3">
                Telephone:
              </label>
              <input
                onChange={(event) => {
                  setphoneNumber(event.target.value);
                }}
                type="text"
                placeholder="+000"
                className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                        hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                        focus:border-red-200 focus:border-2 shadow-sm"
              />
              <label htmlFor="" className="text-xs font-semibold mt-3 mb-2">
                Banner Image
              </label>
              {bannerImg ? (
              <>
                <img
                  src={bannerImg}
                  alt="user uploaded "
                  style={{ height: "30vh" }}
                />
              </>
            ) : (
              <>
                <img
                  src={
                    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                  }
                  alt="default "
                  style={{ height: "30vh" }}
                />
              </>
            )}
              <input
                onChange={(e) =>
                  postDetails(e.target.files && e.target.files[0])
                }
                type="file"
                name="image"
                accept="image/*"
              ></input>
              <label htmlFor="" className="text-xs font-semibold mb-1 mt-5">
                Quote:
              </label>
              <input
                onChange={(event) => {
                  setquote(event.target.value);
                }}
                type="text"
                placeholder="Awesome quote"
                className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                        hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                        focus:border-red-200 focus:border-2 shadow-sm"
              />
              <label htmlFor="" className="text-xs font-semibold mt-4">
                Description:
              </label>
              <textarea
                onChange={(event) => {
                  setdesc(event.target.value);
                }}
                //   type="text"
                placeholder="Describe your locale"
                className="focus:outline-none w-full pl-6 py-4 rounded-xl my-2 border border-gray-300
                        hover:border-red-200 hover:border-2 placeholder:font-light placeholder:text-xs
                        focus:border-red-200 focus:border-2 shadow-sm"
              />
              <label htmlFor="" className="text-xs font-semibold mt-3 mb-2">
                Locale Image(s)
              </label>
              <input type="file" name="image" accept="image/*"></input>
              <h1>{picMessage}</h1>
              <h1>{error}</h1>
              <button
                type="submit"
                onClick={() => {
                  Navigate("/locale");
                }}
                className="bg-[#0d0c22] hover:bg-[#ffffff] border-2 border-transparent
                        hover:border-2 hover:border-black rounded-full py-5 px-7 text-white
                        hover:text-black font-semibold mt-7 custom-selection"
              >
                Save Locale
              </button>
              <button
                onClick={() => {
                  Navigate("/home");
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
