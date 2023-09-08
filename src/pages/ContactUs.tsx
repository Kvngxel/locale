// import React from 'react';

import { Footer } from '../components';
import { NavBar } from '../components';
import { Comment } from '../components';


 function ContactUs() {
    
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

    export default ContactUs;

// function Contact() {
//     return (
//       <div>  
        
//         <button onClick={() => window.location.href = `/contacts/1`} type="submit">Contact</button>
            
    
        
//       </div>
//     );
//   }
  
//   export default Contact;