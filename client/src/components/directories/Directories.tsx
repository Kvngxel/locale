// import { heroImg } from "../../assets/images";
// import { dir } from "../../assets/images";
import { dir1 } from "../../assets/images";
import { useEffect, useState } from "react";

interface ApiItem {
    address:string; 
    created_at:string;
    description:string; 
    dir_name:string;
    directory_email:string;
    id:number;
    profile_image:string;
    quote:string;
    telephone:string;
    updated_at:string;
    user_id:number;

}
export const Directories = () => {
  const [data, setData] = useState<ApiItem[]>([]);
  const [first, setFirst] = useState(0);
  const [from, setFrom] = useState(1);

  const increase = () =>{
    if(first+6<data.length){
      setFirst(first+6);
      setFrom(from+1)
    }    
  } 
  const reduce = () =>{
    if(first>0){
      setFirst(first-6);
      setFrom(from-1)
    }
  } 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/directories');
        console.log(response)
        const apiData: ApiItem[] = await response.json();
        setData(apiData);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto pt-32 pb-28 px-32 flex flex-col bg-pry">
      <h1 className="text-lg text-sec4 font-serif self-center mb-20">LOCALE DIRECTORIES</h1>
      <div className="flex justify-evenly gap-10 rounded gap-y-16 pb-10">
        {data &&
          data.slice(first, first + 6).map((company) => (
            <div key={company.id} className="relative md:w-[40%] w-[45%]">
              <img
                src={dir1}
                // src={heroImg}
                alt="Directory Image"
                className="max-w-xs rounded-[30px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-opacity-50 text-white pr-5 py-6">
              <p className="pb-28 text-3xl">{company.dir_name.charAt(0)}</p>
                <p className="text-sm pb-2">{company.dir_name}</p>
                {/* <p className="text-sm">{company.id}</p> */}
                <button className="text-xs">See more</button>
                {/* <p className="text-xs">See more ...</p> */}
              </div>
            </div>
          ))}
      </div>      
      {/* <div className="flex  justify-evenly gap-6 rounded gap-y-16">
        {data && data.slice(first,first+6).map((company) => (
          <div key={company.id} className="relative md:basis-[40%] basis[45%] basis">
            <img src={dir} alt="Directory Image" className="max-w-xs rounded-[30px]" />
            <div className="">
              <p className="text-sm">{company.dir_name}</p>
              <p className="text-sm">{company.id}</p>
              <p className="text-xs text-white">See more ...</p>
            </div>
          </div>
        ))}
      </div> */}

      <div className="flex justify-center gap-6 mt-6 items-center">
        <h1 className="bg-[#0d0c22] hover:bg-[#ffffff] hover:text-black border-2 border-transparent hover:border-black rounded-full py-3 px-6 mx-5 text-white font-semibold mt-4 custom-selection text-sm" onClick={reduce}>{'<'}</h1>
        {data && <h1 className="pt-5">{from} of  {Math.ceil(data.length/5)}</h1>}
        <h1 onClick={increase} className="bg-[#0d0c22] hover:bg-[#ffffff] hover:text-black border-2 border-transparent hover:border-black rounded-full py-3 px-6 mx-5 text-white font-semibold mt-4 custom-selection text-sm">{'>'}</h1>
      </div>
    </div>
  );
};
