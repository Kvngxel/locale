import React, { useEffect, useState } from "react";
import { heroImg } from "../../assets/images";

export const Directories = () => {
  const [companies, setCompanies] = useState([]); // Initialize state with an empty array

  useEffect(() => {
    // Fetch data when the component mounts
    fetchDirectories();
  }, []);

  const fetchDirectories = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/directories");
      if (!response.ok) {
        throw new Error("Failed to get response");
      }
      const data = await response.json();
      setCompanies(data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-[70vw] mx-auto p-12 flex flex-col">
      <h1 className="text-lg text-sec4 self-center mb-20">LOCALE DIRECTORIES</h1>
      <div className="flex w-full flex-wrap justify-evenly gap-6 rounded gap-y-16">
        {companies.map((company) => (
          <div key={company.id} className="relative basis-[40%] rounded-lg basis">
            <img src={heroImg} alt="" className="w-full rounded-[9px]" />
            <div className="absolute bottom-0 w-full h-[20%] items-center rounded-[9px] bg-sec flex justify-around">
              <p className="text-sm">{company.name}</p>
              <p className="text-xs text-white">See more ...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
