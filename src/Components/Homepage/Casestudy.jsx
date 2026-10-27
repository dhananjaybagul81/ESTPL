import React from 'react';
import TypingEffect from '../Animation/TypingEffect';
const Casestudy = () => {
  return (
    <div className='bg-white'>
      <div className='relative w-10/12 max-w-[1200px] mx-auto flex flex-col items-start p-5 md:p-10'>
      {/* Responsive heading */}
      <h1 className='font-extrabold text-[50px] md:text-[100px] lg:text-[150px] xl:text-[200px] leading-none'>
        CASE<br />STUDIES
      </h1>

      {/* Responsive description */}
      <div className='flex md:justify-end py-10 md:p-10'>
        <p className='text-[20px] md:text-[25px] lg:text-[30px] xl:text-[40px] font-medium text-center md:text-left md:w-[60%]'>
          {/* Take a <span className='text-blue-400'>closer look</span> at some of the <br />
          <span className='text-blue-400'>projects</span> we worked on! */}

          <TypingEffect text="Take a " speed={30} />
          <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'><TypingEffect text="closer look " speed={30} /></span>
          <span className=''><TypingEffect text="at some of the " speed={30} /></span> 
          <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'><TypingEffect text=" projects " speed={30} /></span>
          <span className=''><TypingEffect text="we worked on!" speed={30} /></span>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Casestudy;
