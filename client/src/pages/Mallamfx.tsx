import { NavBar } from '../components';
import { Footer } from '../components';


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
    <div className="text-center text-black text-[40px] font-bold font-['Inter']">PAIRS</div>
    <div className="w-[122.51px] h-11 text-black text-[22px] font-normal font-['Metal']">ETH/USD</div>
    <div className="w-[201.86px] h-11 text-lime-900 text-[22px] font-normal font-['Metal']"> = 1500.471 ▲</div>
    </div>
    <div className="w-[539px] h-[595px] bg-gradient-to-r from-red-600 via-red-500 to-orange-300 shadow mb-40">
    <div className="text-center text-white text-[40px] font-bold font-['Inter']">Exchange</div>
    <div className="text-white text-xl font-small font-['Inter']">From:</div>
    <div className="w-[434px] h-[58px] bg-neutral-50 rounded border border-neutral-400" />
    <div className="text-white text-xl font-medium font-['Inter']">To:</div>
    <div className="w-[434px] h-[58px] bg-neutral-50 rounded border border-neutral-400" />
    <div className="w-[148px] h-[43px] bg-gradient-to-r from-red-600 via-red-500 to-orange-300 rounded-md shadow" />
    <div className="text-center text-black text-[15px] font-normal font-['Inter'] leading-[30px]">Last updated Sep 13, 2023 22:32 UTC</div>
      </div> 
  </div>
  </div>



      <Footer />
        
      </div>
    );
  }