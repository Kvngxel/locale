import { Footer } from '../components';
import { NavBar } from '../components';
import { Comment } from '../components';


export const Contact = () => {
    
    // const contact = {
    //   first: "Your",
    //   last: "Name",
    //   Phone_Number: "Phone Number",
    //   Git_Hub: "Git Hub",
    //   Message: "Some notes",
    //   favorite: true,
    // };
    return (
        
        <div id="contact">
         <div>
         <NavBar />
         <div className='mx-auto ml-80  mt-60 text-3xl...' >
        <h1> 
            <b> Contac Us</b>
            
            </h1>

        </div>
        
        <p> </p>
        <div className='mx-auto ml-80' >
        
             Reach out to us anytime, we got you :)
             <p> Plot 266, Federal Mortgage Bank Building,
                Tafawa Balewa Way, Central Business District,
                Abuja, Nigeria.</p>
            
        

        </div>
      
       

         </div>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <Comment />
         <Footer />
        </div>
      );
    }


