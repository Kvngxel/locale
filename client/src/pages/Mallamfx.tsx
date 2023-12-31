import { NavBar } from '../components';
import { Footer } from '../components';
// import Api from '../components/API/Api';
import { useEffect, useState } from "react";

export const Mallamfx = () => {
  const [ locale, setLocale] = useState<{ [key: string]: string }>({})
  const userDetails = async (searchValue: string) => {
      try {
        
        const res = await fetch(`https://locale-fcxr.onrender.com/extracted/${searchValue}`, {
          // const res = await fetch(`http://localhost:3000/extracted/${searchValue}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
           
          },
        });
        const userData = await res.text();
        setLocale((prevLocales) => ({
          ...prevLocales,
          [searchValue]: userData,
        }))
      } catch (err) {
          console.error("error");
      }
  };
    useEffect(() => {
      
    /*   userDetails("usd"); // Fetch data for "usd"
      userDetails("eur"); // Fetch data for "eur"
      userDetails("gbp"); // Fetch data for "gbp"
   */
      const currencyCodes = ["usd", "eur", "gbp","cad","jpy","cny","qar","sar","eur","rub","inr","sgd"]; // Add more currency codes as needed

    // Loop through currency codes and fetch data for each one
    currencyCodes.forEach((currencyCode) => {
      userDetails(currencyCode);
    });

    window.scrollTo(0, 0);
      
    }, []); 



  return (
      <div>  
        <NavBar />
        <div className="flex flex-col items-center justify-center min-h-screen mt-32">
  <div className="text-center text-black text-[45px] font-semibold font-['Inter'] pb-5">Mallam FX</div>
    <div className="text-center text-black text-xl font-light font-inter mb-12 pb-10">Welcome to your live currency converter</div>

    <div className="flex justify-center">
      <div className="w-[351px] h-[595px] bg-stone-50 shadow" >
      <div className="text-center text-black text-[40px] font-bold font-['Inter']">PAIRS </div>
      <div className= " pl-10 pt-10">
      <div className="flex items-center">
      <div className="w-[122.51px] h-11 text-black text-[22px] font-normal font-['Metal']">GBP/CAD</div>
      <div className="w-[201.86px] h-11 text-lime-900 text-[22px] font-normal font-['Metal'] " > = {Number(locale["cad"]).toFixed(6).toString()} ▲</div>
  </div>
    <div className="flex items-center">
                <div className="w-[147.18px] h-[44.19px] text-black text-[22px] font-normal font-['Metal']">GBP/USD</div>
                <div className="w-[200.96px] h-[44.19px] text-red-600 text-[22px] font-normal font-['Metal']"> = {Number(locale["usd"]).toFixed(6).toString()}▼</div>
  </div>
  <div className="flex items-center">
                  <div className="w-[122.51px] h-11 text-black text-[22px] font-normal font-['Metal']">GBP/JPY</div>
                  <div className="w-[201.86px] h-11 text-lime-900 text-[22px] font-normal font-['Metal']"> = {Number(locale["jpy"]).toFixed(6).toString()} ▲</div>
  </div>
  <div className="flex items-center">
                  <div className="w-[122.51px] h-11 text-black text-[22px] font-normal font-['Metal']">GBP/CNY</div>
                  <div className="w-[201.86px] h-11 text-lime-900 text-[22px] font-normal font-['Metal']"> = {Number(locale["cny"]).toFixed(6).toString()} ▲</div>
  </div>
  <div className="flex items-center">
                  <div className="w-[122.51px] h-11 text-black text-[22px] font-normal font-['Metal']">GBP/QAR</div>
                  <div className="w-[201.86px] h-11 text-lime-900 text-[22px] font-normal font-['Metal']"> = {Number(locale["qar"]).toFixed(6).toString()}▲</div>
  </div>
  <div className="flex items-center">
                <div className="w-[147.18px] h-[44.19px] text-black text-[22px] font-normal font-['Metal']">GBP /SAR</div>
                <div className="w-[200.96px] h-[44.19px] text-red-600 text-[22px] font-normal font-['Metal']"> = {Number(locale["sar"]).toFixed(6).toString()}▼</div>
  </div>
  <div className="flex items-center">
                <div className="w-[147.18px] h-[44.19px] text-black text-[22px] font-normal font-['Metal']">GBP/EUR</div>
                <div className="w-[200.96px] h-[44.19px] text-red-600 text-[22px] font-normal font-['Metal']"> = {Number(locale["eur"]).toFixed(6).toString()} ▼</div>
  </div>
  <div className="flex items-center">
                <div className="w-[147.18px] h-[44.19px] text-black text-[22px] font-normal font-['Metal']">GBP/RUB</div>
                <div className="w-[200.96px] h-[44.19px] text-red-600 text-[22px] font-normal font-['Metal']"> = {Number(locale["rub"]).toFixed(6).toString()}▼</div>
  </div>
  <div className="flex items-center">
                <div className="w-[147.18px] h-[44.19px] text-black text-[22px] font-normal font-['Metal']">GBP/INR</div>
                <div className="w-[200.96px] h-[44.19px] text-red-600 text-[22px] font-normal font-['Metal']"> = {Number(locale["inr"]).toFixed(6).toString()} ▼</div>
  </div>
  <div className="flex items-center">
                <div className="w-[147.18px] h-[44.19px] text-black text-[22px] font-normal font-['Metal']">GBP/SGD</div>
                <div className="w-[200.96px] h-[44.19px] text-red-600 text-[22px] font-normal font-['Metal']"> = {Number(locale["sgd"]).toFixed(6).toString()} ▼</div>
  </div>
      </div>

      </div>
      <div className="w-[539px] h-[595px] bg-gradient-to-r from-red-600 via-red-500 to-orange-300 shadow mb-40">
      <div className="text-center text-white text-[40px] font-bold font-['Inter']">Exchange</div>
    <div className=" ml-10 pl-5 pt-10">

      <div className='pl-5'>
      <div className="text-white text-s font-small font-['Inter']">From:</div>
      <div className="flex items-center pt-5">
            <div className="w-[51px] h-[48px] bg-green-900 rounded" />
            <div className="w-[334px] h-[48px] bg-neutral-50 rounded border border-neutral-400" />            
      </div>
      
      <div className="text-white text-s font-medium font-['Inter'] pt-5">To:</div>
      <div className="flex items-center pt-5">
          <div className="w-[51px] h-[48px] bg-green-900 rounded" />
          <div className="w-[334px] h-[48px] bg-neutral-50 rounded border border-neutral-400" />           
      </div>


      </div>

  <div className='pl-16 ml-20 pt-5'>

  <div className="flex justify-center items-center w-[148px] h-[43px] bg-gradient-to-r from-red-600 via-red-500 to-orange-300 rounded-md shadow">
    <div className="text-white text-[18px] font-semibold font-['Inter']">EXCHANGE</div>
  </div>


  </div>
      <div className="text-white text-s font-medium font-['Inter'] pb-5 ">Result:</div>
      <div className="w-[434px] h-[48px] bg-neutral-50 rounded border border-neutral-400 " />
      <div className="text-center text-black text-s font-normal font-['Inter'] leading-[20px] pt-5 ">Nigerian Naira<br/>to<br/>United States Dollar</div>
      <div className="text-center text-black text-[15px] font-normal font-['Inter'] leading-[30px]">Last updated Sep 27, 2023 22:32 UTC</div>
      
    </div>
    
        </div> 
    </div>
        </div>       
        <Footer />        
      </div>
    );
  }