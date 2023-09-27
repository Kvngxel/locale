import { NavBar } from '../components';
import { Footer } from '../components';


export const Mallamfx = () => {
  return (
      <div>  
        <NavBar />
                  <div className='mx-auto ml-80  pl-40 mt-32 text-3xl...' >
                     <h1 className="text-lg md:text-xl lg:text-2xl font-sans"> 
                           <b> Mallam FX</b>            
                     </h1>
                  </div>        
                             <div className='mx-auto ml-80  pl-40 mb-10' >
                               <p className="text-sm lg:text-sm mt-8 font-extralight">
                                Welcome to your live currency converter
                                    </p> 
           
                               </div>
                               <div className='flex mx-auto ml-70 pl-40 mb-10 mr-80 h-80'>
                                            {/* Left Half: Exchange Box Credentials */}
                                            <div className='w-1/2 p-4 bg-blue-500 text-white'>
                                            <h2 className="text-lg font-semibold"> Live Currency Updates </h2>
                                            {/* Add your exchange box content here */}
                                            </div>

                                                {/* Right Half: Live Currency Updates */}
                                                <div className='w-1/2 p-4 bg-green-500 text-white'>
                                                <h2 className="text-lg font-semibold">Exchange Box Credentials</h2>
                                                {/* Add your live currency updates content here */}
                                                </div>
                                    </div>
        <hr className="mt-40"/>
     {/*    <div className="text-center mt-40">
          <h2 className="text-lg font-inter font-medium">Meet the Team</h2> 
        </div> */}
        <div className="flex flex-wrap justify-center mt-20 mb-40">
 

        </div>  
      <Footer />
        
      </div>
    );
  }