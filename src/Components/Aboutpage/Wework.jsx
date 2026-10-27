import React, { useState, useEffect } from 'react';
import TypingEffect from '../Animation/TypingEffect';

const Wework = () => {
  return (
    <div className="flex flex-col items-end w-10/12 mx-auto lg:px-6 mt-20">
      <div className="justify-end">
       
        <div className='flex-end w-full  flex justify-end'>
        <p className='mb-8 text-4xl lg:w-1/2 font-semibold '>
        At Engeniuspark Technologies, we create innovative digital solutions that elevate everyday life, 
            <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>
                <TypingEffect text=" partnering with entrepreneurs " speed={30} />
            </span> 
            to transform ideas into impactful, 
            <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>
                <TypingEffect text=" efficient products." speed={30} />
            </span>
        </p>
        </div>

        <p className="text-xl md:text-2xl lg:p-4 lg:w-1/2 right-0 justify-end items-end text-black text-justify">
        With years of experience, we bring care, precision, and expertise to every project, guiding our clients toward successful outcomes. Our approach combines attention to detail with a deep understanding of market needs, ensuring that each product we build empowers our clients to achieve their vision and connect meaningfully with their audience.
        </p>
      </div>
    </div>
  );
};

export default Wework;