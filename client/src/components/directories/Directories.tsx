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
  const [first, setFirst] = useState(0);
  // this is a template data to show the maximum and minimum are working
   const data2=[
    {
      id:1,
      name:"jokes",
    },
    {
      id:2,
      name:"jokes",
    },
    {
      id:3,
      name:"jokes",
    },
    {
      id:4,
      name:"jokes",
    },
    {
      id:5,
      name:"jokes",
    },
    {
      id:6,
      name:"jokes",
    },
    {
      id:7,
      name:"jokes",
    },
    {
      id:8,
      name:"jokes",
    },
    {
      id:9,
      name:"jokes",
    },
    {
      id:10,
      name:"jokes",
    },
    {
      id:11,
      name:"jokes",
    },
    {
      id:12,
      name:"jokes",
    },
    {
      id:13,
      name:"jokes",
    },
   ]

  const increase = () =>{
    if(first+6<data2.length){
      setFirst(first+6);
    }

  } 
  const reduce = () =>{
    if(first>0){
      setFirst(first-6);
    }

  } 

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

        {data2 && data2.slice(first,first+6).map((company) => (
          <div key={company.id} className="relative basis-[40%] rounded-lg basis">
            <img src={heroImg} alt="" className="w-full rounded-[9px]" />
            <div className="absolute bottom-0 w-full h-[20%] items-center rounded-[9px] bg-sec flex justify-around">
              <p className="text-sm">{company.name}</p>
              <p className="text-sm">{company.id}</p>
              <p className="text-xs text-white">See more ...</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6 mt-6 items-center"><h1 className="bg-sec aspect-[] rounded py-2 px-4" onClick={reduce}>{'<'}</h1> <h1>1 of 5</h1> <h1 onClick={increase} className="bg-sec aspect-[] rounded py-2 px-4">{'>'}</h1></div>
    </div>
  );
};
