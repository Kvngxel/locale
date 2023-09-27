import { Footer } from '../components';
import { NavBar } from '../components';

export const Contact = () => {
    return (
        
        <div id="contact">
          <div>
          <NavBar />
            <div className='text-center md:text-left py-14 md:py-0 h-[85vh]'>
              <div className='mx-auto mt-40 md:ml-80 md:mt-60 text-3xl' >
                <h1 className="text-lg md:text-xl lg:text-2xl font-sans"> 
                    <b> Contact Us</b>            
                </h1>
              </div>    
              <div className='mx-auto md:ml-80' >
                <p className="text-sm lg:text-sm mt-6 font-extralight">
                  Reach out to us anytime, we got you :)
                </p>  
              </div>
            </div>
            <hr className="my-20"/>

          <Footer />
          </div>
        </div>
      );
    }


