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
    <>
    <section className="bg-[#edf2f3] px-8 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto w-11/12 max-w-[1200px] ">
        <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-10">
       
          <div className="">
            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl font-semibold leading-tight md:leading-tight lg:leading-tight">
              <TypingEffect
                text="Our Service"
                speed={70}
              />
            </h1>
          </div>

        
         
        </div>
      </div>
     
    </section>
     <div
     className="w-full overflow-hidden text-stone-400 text-center whitespace-nowrap bg-[#edf2f3]"
     style={{
       fontSize: '1.4rem',
       letterSpacing: '-0.15rem',
       lineHeight: '1.5',
       animation: 'reveal-slashes 2s linear forwards',
     }}
   >
     {generateSlashes(window.innerWidth)}
   </div>
   </>
  );
};

export default Heroes;