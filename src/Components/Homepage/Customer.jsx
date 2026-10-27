import React from 'react';
import TypingEffect from '../Animation/TypingEffect';
const Customer = () => {
  return (
    <div className='bg-white'>
            <div className="flex justify-start mt-10 p-4 w-10/12 max-w-[1200px] mx-auto">
          <div className='lg:w-1/2 py-14'>
              <p data-aos="fade-right" className="text-[24px] font-semibold md:text-[38px]">
                
                <TypingEffect text="Collaborating closely with you to " speed={30} />
                <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'><TypingEffect text=" build solutions that drive growth. " speed={30} /></span>
                <span className=''><TypingEffect text="Your vision leads the way!" speed={30} /></span>

              </p>
  
      </div>
      </div>
    </div>
  );
}

export default Customer;
