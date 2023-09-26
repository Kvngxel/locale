import { NavBar } from "../../components";

export const Locale = () => {
  return (
    <div>
        <NavBar/>
        <div className="text-center">
            <h1 className="text-lg pt-20 pb-7 font-semibold">Business Name</h1>
            <p className="text-sm">Business Quote</p>
        </div>
        <div className="text-center w-[30vw] py-32 mx-auto my-10 bg-main rounded-3xl ">Banner Image</div>
    </div>
  );
};
