import HoverTypingEffect from '../Components/Animation/HoverTypingEffect';
import { MdOutlineArrowRight } from "react-icons/md";
import React, { useState, useEffect } from 'react';
import contact from "../assets/contact.png"

const Contacts = () => {
  const [slashCount, setSlashCount] = useState(0);

  const generateSlashes = () => {
    return '/'.repeat(slashCount);
  };

  useEffect(() => {
    const calculateSlashes = () => {
      const viewportWidth = window.innerWidth;
      const count = Math.max(2, Math.floor(viewportWidth / 8));
      setSlashCount(count);
    };

    calculateSlashes();
    // Add event listener for window resizing
    window.addEventListener('resize', calculateSlashes);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', calculateSlashes);
  }, []);

  return (
    <>
    <div className='bg-[#edf2f3] lg:h-[80vh]'>
      <div className="flex flex-col lg:flex-row bg-[#edf2f3] w-11/12 max-w-[1200px] h-auto lg:h-[70vh] items-start mx-auto relative">

        
        <div className="flex-1 p-6 lg:p-10 flex justify-start">
          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-semibold leading-snug max-w-full lg:max-w-[800px]">
          Bringing Your Ideas to Life—Anywhere, Anytime.
          </h1>

          <img 
              src={contact} 
              alt="contact" 
              className='hidden lg:block w-full h-full max-w-[400px] rotate-animation'
          />

        </div>

        
        <div className="w-full lg:w-auto mt- lg:mt-0 lg:absolute left-0 lg:left-auto lg:bottom-0 lg:right-0 p-4">
          <div className="flex flex-col items-center lg:flex-row gap-6 lg:gap-7 justify-center lg:justify-between text-center lg:text-left">
            <p className="text-base md:text-lg font-medium text-black">
            Submit your details and we’ll reach out within the next 24 hours.
            </p>
            <div className="flex items-center gap-4 bg-red-500 text-white text-lg sm:text-xl md:text-2xl font-semibold rounded hover:bg-red-600 transition duration-300 w-[180px] sm:w-[220px] md:w-[300px]">
              <button className="w-full h-12 md:h-[8vh] text-center">
                <HoverTypingEffect text="CONTACT US" speed={30} />
              </button>
              <span className="flex items-center justify-center bg-transparent text-white py-1 px-2 transition duration-300 hover:bg-white hover:text-red-600">
                <MdOutlineArrowRight />
              </span>
            </div>
          </div>
        </div>

        
      </div>
          <div
        className="w-full overflow-hidden text-stone-300 text-center whitespace-nowrap mt-2"
        style={{
          fontSize: '1.4rem',
          letterSpacing: '-0.15rem',
          lineHeight: '2',
          animation: 'reveal-slashes 2s linear forwards',
        }}
      >
        {generateSlashes()}
      </div>
    </div>

    </>
  );
};

export default Contacts;