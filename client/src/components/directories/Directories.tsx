import { heroImg } from "../../assets/images";
import { useEffect, useState } from "react";

interface ApiItem {
    address:string; 
    created_at:string;
    description:string; 
    id:number;
    name:string;
    updated_at:string;
}
export const Directories = () => {
  const [data, setData] = useState<ApiItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/directories');
        const apiData: ApiItem[] = await response.json();
        setData(apiData);
        console.log(apiData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[70vw] mx-auto p-12 flex flex-col">
      <h1 className="text-lg text-sec4 self-center mb-20">LOCALE DIRECTORIES</h1>
      <div className="flex w-full flex-wrap justify-evenly gap-6 rounded gap-y-16">

        {data && data.map((company:ApiItem) => (
          <div key={company.id} className="relative basis-[40%] rounded-lg basis">
            <img src={heroImg} alt="" className="w-full rounded-[9px]" />
            <div className="absolute bottom-0 w-full h-[20%] items-center rounded-[9px] bg-sec flex justify-around">
              <p className="text-sm">{company.name}</p>
              <p className="text-xs text-white">See more ...</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6"><h1>{'<'}</h1> <h1>1 of 5</h1> <h1>{'>'}</h1></div>
    </div>
  );
};
