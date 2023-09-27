import { NavBar } from '../components';
import { Footer } from '../components';

// import { Comment } from '../components';

export const About = () => {
  return (
      <div>  
        <NavBar />
        <div className='mx-auto ml-80  mt-60 text-3xl...' >
          <h1 className="text-lg md:text-xl lg:text-2xl font-sans"> 
              <b> About Us</b>            
          </h1>
        </div>        
        <p> </p>
        <div className='mx-auto ml-80' >
          <p className="text-sm lg:text-sm mt-8 font-extralight">
             Welcome to our Locale, Get to know about us and the product we offer!
          </p>  
        </div>
        <hr className="mt-40"/>
        <div className="text-center mt-40">
          <h2 className="text-lg font-inter font-medium">Meet the Team</h2> 
        </div>
        <div className="flex flex-wrap justify-center mt-20 mb-40">
          <div className="bg-sec2 text-center rounded-3xl w-72 mx-6 font-sans font-light text-sm py-4 mb-16">
            <img src="https://media.istockphoto.com/id/1206439390/photo/silhouette-of-profile-guy-in-shirt-with-white-button-in-aqua-menthe-circle-on-black.webp?s=170667a&w=0&k=20&c=xIcUug38E_KlqT3HjxDYSQE7ZlMyV0y0vKmkXmr016U="
                alt=""
                className="rounded-full h-40 w-40 mx-auto my-5" />
            <p className="pt-2 text-base">Excel</p>
            <p className="pt-3">FullStack Developer</p>
            <p className="py-4">Sports Loving Programmer</p>
            <button className="bg-gray-200 hover:bg-gray-300 hover:text-white px-10 py-3 mb-2 mt-4">Github</button>
          </div><div className="bg-sec2 text-center rounded-3xl w-72 mx-6 font-sans font-light text-sm py-4 mb-16">
            <img src="https://media.istockphoto.com/id/1206439390/photo/silhouette-of-profile-guy-in-shirt-with-white-button-in-aqua-menthe-circle-on-black.webp?s=170667a&w=0&k=20&c=xIcUug38E_KlqT3HjxDYSQE7ZlMyV0y0vKmkXmr016U="
                alt=""
                className="rounded-full h-40 w-40 mx-auto my-5" />
            <p className="pt-2 text-base">Excel</p>
            <p className="pt-3">FullStack Developer</p>
            <p className="py-4">Sports Loving Programmer</p>
            <button className="bg-gray-200 hover:bg-gray-300 hover:text-white px-10 py-3 mb-2 mt-4">Github</button>
          </div>
          <div className="bg-sec2 text-center rounded-3xl w-72 mx-6 font-sans font-light text-sm py-4 mb-16">
            <img src="https://media.istockphoto.com/id/1206439390/photo/silhouette-of-profile-guy-in-shirt-with-white-button-in-aqua-menthe-circle-on-black.webp?s=170667a&w=0&k=20&c=xIcUug38E_KlqT3HjxDYSQE7ZlMyV0y0vKmkXmr016U="
                alt=""
                className="rounded-full h-40 w-40 mx-auto my-5" />
            <p className="pt-2 text-base">Excel</p>
            <p className="pt-3">FullStack Developer</p>
            <p className="py-4">Sports Loving Programmer</p>
            <button className="bg-gray-200 hover:bg-gray-300 hover:text-white px-10 py-3 mb-2 mt-4">Github</button>
          </div>
        </div>  
      <Footer />
        
      </div>
    );
  }
 