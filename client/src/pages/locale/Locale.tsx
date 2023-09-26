import { NavBar } from "../../components";

export const Locale = () => {
  return (
    <div>
        <NavBar/>
        <div className="mb-32">
            <div className="text-center mt-5">
                <h1 className="text-lg pt-20 pb-7 font-semibold">Business Name</h1>
                <p className="text-sm">Business Quote</p>
            </div>
            <div className="text-center w-[90vw] py-32 mx-auto mt-10 bg-main rounded-sm ">Banner Image</div>
            <div className="mx-24 mt-20 text-center">
                <h1 className="text-md pb-7 font-semibold">Address:</h1>
                <p className="text-sm">Address</p>
            </div>
            <div className="mx-24 my-10 text-center">
                <h1 className="text-md pb-7 font-semibold">Locale Email:</h1>
                <p className="text-sm">example@example.com</p>
            </div>
            <div className="mx-24 my-10 text-center">
                <h1 className="text-md mb-5 font-semibold">Locale Telephone:</h1>
                <p className="text-sm">+000</p>
            </div>
            <div className="mx-24 my-10 text-center">
                <h1 className="text-md mb-5 font-semibold">Description:</h1>
                <p className="text-sm">My Description</p>
            </div>
        </div>
    </div>
  );
};
