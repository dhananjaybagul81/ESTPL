import React, { useEffect, useState } from 'react';
import "./Homepage.css"
import TypingEffect from '../Animation/TypingEffect';
import TextRevealAnimation from '../Animation/TextRevealAnimation';
import estpl from "../../assets/estpl.png"
const Ourcross = () => {
  const [slashCount, setSlashCount] = useState(0);

  const generateSlashes = (width) => {
    const slashWidth = 3; // Width of each slash character
    const count = Math.max(2, Math.floor(width / slashWidth));
    return '/'.repeat(count);
  };

  useEffect(() => {
    const calculateSlashes = () => {
      const viewportWidth = window.innerWidth;
      setSlashCount(Math.floor(viewportWidth / 8));
    };

    calculateSlashes();
    window.addEventListener('resize', calculateSlashes);
    return () => window.removeEventListener('resize', calculateSlashes);
  }, []);

  return (
    <div className="relative w-full border">
      {/* Top slashes */}
      <div
        className="w-full hidden lg:block overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation"
        style={{
          fontSize: '2rem',
          letterSpacing: '-0.6rem',
          lineHeight: '1',
          animation: 'reveal-slashes 2s linear forwards'
        }}
      >
        {generateSlashes(window.innerWidth)}
      </div>

      <div className="flex items-center justify-center max-w-[1200px] w-10/12 mx-auto py-8 border">
        <div className="flex-1 text-center">
          <div className="relative flex items-center justify-center mb-10">
          {/* <TextRevealAnimation 
              text="ESTPL"
              className="block w-full text-[50px] md:text-[70px] lg:text-[140px] xl:text-[180px] leading-[1] mb-4 font-bold"
            /> */}
            <img className='w-[40rem]' src={estpl} alt='estpl'/>
          </div>

          <div className='border flex w-full'>
            <div className="mt-10 md:mt-24 lg:mt-32 p-4 md:p-8 text-left border w-1/2">
              <p className="text-lg md:text-xl lg:text-[18px] text-black font-medium">
                
                <TypingEffect text="Our cross-functional development team has everything, 
                you need to build, launch,
                and grow your rocket!" speed={30} />
                </p>
            </div>
            <div className='border w-1/2'>
              img
            </div>
          </div>
        </div>
      </div>

      {/* Bottom slashes */}
      {/* <div
        className="w-full overflow-hidden text-gray-300 text-center whitespace-nowrap slash-animation"
        style={{
          fontSize: '0.5rem',
          letterSpacing: '0.5px',
          lineHeight: '1',
          animation: 'reveal-slashes 2s linear forwards'
        }}
      >
        {generateSlashes(window.innerWidth)}
      </div> */}
    </div>
  );
};

export default Ourcross;
