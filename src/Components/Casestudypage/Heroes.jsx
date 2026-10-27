import React, { useState, useEffect } from 'react';
import TypingEffect from '../Animation/TypingEffect';

const Heroes = () => {
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
    <div className='bg-[#edf2f3]'>
      <div className="flex flex-col lg:flex-row bg-[#edf2f3] w-10/12 max-w-[1200px] items-start mx-auto ">
        <div className="grid grid-cols-1 gap-8 w-full mt-14 px-4">
          <div className="">
            <h1 className="text-4xl md:text-4xl lg:text-6xl md:h-[200px] font-semibold leading-none max-w-[800px]">
              <TypingEffect text="Success Stories: How ESTPL Transformed Businesses" speed={70} />
            </h1>
          </div>

        </div>
      </div>
      <div
        className="w-full overflow-hidden text-stone-300 text-center whitespace-nowrap mt-2"
        style={{
          fontSize: '1.3rem',
          letterSpacing: '-0.15rem',
          lineHeight: '2',
          animation: 'reveal-slashes 2s linear forwards',
        }}
      >
        {generateSlashes(window.innerWidth)}
      </div>
    </div>
  );
};

export default Heroes;
