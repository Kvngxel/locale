import { NavBar } from '../components';
import { Footer } from '../components';
import Api from '../components/API/Api';


export const Mallamfx = () => {
  return (
      <div>  
        <NavBar />
                  {/* <div className='mx-auto ml-80  pl-40 mt-32 text-3xl...' >
                     <h1 className="text-lg md:text-xl lg:text-2xl font-sans">  */}
                           {/* <b> Mallam FX</b>            
                     </h1>
                  </div>        
                             <div className='mx-auto ml-80  pl-40 mb-10' >
                               <p className="text-sm lg:text-sm mt-8 font-extralight">
                                Welcome to your live currency converter
                                    </p> 
           
                               </div>
                               <div className='flex mx-auto ml-70 pl-40 mb-10 mr-80 h-80'> */}
                                            {/* Left Half: Exchange Box Credentials */}
                                            {/* <div className='w-1/2 p-4 bg-blue-500 text-white'>
                                            <h2 className="text-lg font-semibold"> Live Currency Updates </h2> */}
                                            {/* Add your exchange box content here */}
                                            {/* </div> */}

                                                {/* Right Half: Live Currency Updates */}
                                                {/* <div className='w-1/2 p-4 bg-green-500 text-white'>
                                                <h2 className="text-lg font-semibold">Exchange Box Credentials</h2> */}
                                                {/* Add your live currency updates content here */}
                                                {/* </div>
                                    </div>
        <hr className="mt-40"/> */}


        
     {/*    <div className="text-center mt-40">
          <h2 className="text-lg font-inter font-medium">Meet the Team</h2> 
        </div> */}
        {/* <div className="flex flex-wrap justify-center mt-20 mb-40">
 

        </div>   */}


<div className="flex flex-col items-center justify-center min-h-screen mt-32">
<div className="text-center text-black text-[45px] font-semibold font-['Inter'] pb-5">Mallam FX</div>
  <div className="text-center text-black text-xl font-light font-inter mb-12 pb-10">Welcome to your live currency converter</div>

  <div className="flex justify-center">
    <div className="w-[351px] h-[595px] bg-stone-50 shadow" >
    <div className="text-center text-black text-[40px] font-bold font-['Inter']">PAIRS </div>
    <div className= " pl-10 pt-10">
    <div className="flex items-center">
     <div className="w-[122.51px] h-11 text-black text-[22px] font-normal font-['Metal']">USD/CAD</div>
     <div className="w-[201.86px] h-11 text-lime-900 text-[22px] font-normal font-['Metal']"> = 1.35 ▲</div>
</div>
  <div className="flex items-center">
              <div className="w-[147.18px] h-[44.19px] text-black text-[22px] font-normal font-['Metal']">USD/GBP</div>
              <div className="w-[200.96px] h-[44.19px] text-red-600 text-[22px] font-normal font-['Metal']"> = 0.82▼</div>
 </div>
<div className="flex items-center">
                <div className="w-[122.51px] h-11 text-black text-[22px] font-normal font-['Metal']">USD/JPY</div>
                <div className="w-[201.86px] h-11 text-lime-900 text-[22px] font-normal font-['Metal']"> = 149.21 ▲</div>
</div>
<div className="flex items-center">
                <div className="w-[122.51px] h-11 text-black text-[22px] font-normal font-['Metal']">USD/CNY</div>
                <div className="w-[201.86px] h-11 text-lime-900 text-[22px] font-normal font-['Metal']"> = 7.31 ▲</div>
</div>
<div className="flex items-center">
                <div className="w-[122.51px] h-11 text-black text-[22px] font-normal font-['Metal']">USD/QAR</div>
                <div className="w-[201.86px] h-11 text-lime-900 text-[22px] font-normal font-['Metal']"> = 3.65▲</div>
</div>
<div className="flex items-center">
              <div className="w-[147.18px] h-[44.19px] text-black text-[22px] font-normal font-['Metal']">USD /SAR</div>
              <div className="w-[200.96px] h-[44.19px] text-red-600 text-[22px] font-normal font-['Metal']"> = 3.75 ▼</div>
 </div>
 <div className="flex items-center">
              <div className="w-[147.18px] h-[44.19px] text-black text-[22px] font-normal font-['Metal']">USD/EUR</div>
              <div className="w-[200.96px] h-[44.19px] text-red-600 text-[22px] font-normal font-['Metal']"> = 0.95 ▼</div>
 </div>
 <div className="flex items-center">
              <div className="w-[147.18px] h-[44.19px] text-black text-[22px] font-normal font-['Metal']">USD/RUB</div>
              <div className="w-[200.96px] h-[44.19px] text-red-600 text-[22px] font-normal font-['Metal']"> = 96.56 ▼</div>
 </div>
 <div className="flex items-center">
              <div className="w-[147.18px] h-[44.19px] text-black text-[22px] font-normal font-['Metal']">USD/INR</div>
              <div className="w-[200.96px] h-[44.19px] text-red-600 text-[22px] font-normal font-['Metal']"> = 83.17 ▼</div>
 </div>
 <div className="flex items-center">
              <div className="w-[147.18px] h-[44.19px] text-black text-[22px] font-normal font-['Metal']">USD/SGD</div>
              <div className="w-[200.96px] h-[44.19px] text-red-600 text-[22px] font-normal font-['Metal']"> = 1.37 ▼</div>
 </div>
    </div>

    </div>
    <div className="w-[539px] h-[595px] bg-gradient-to-r from-red-600 via-red-500 to-orange-300 shadow mb-40">
    <div className="text-center text-white text-[40px] font-bold font-['Inter']">Exchange</div>
  <div className=" ml-10 pl-5 pt-10">

    <div className='pl-5'>
    <div className="text-white text-s font-small font-['Inter']">From:</div>
    <div className="flex items-center pt-5 pt-5">
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