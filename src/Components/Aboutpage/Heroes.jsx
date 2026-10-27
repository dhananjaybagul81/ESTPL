import React, { useState, useEffect } from 'react';
import TypingEffect from '../Animation/TypingEffect';
import InfiniteSlider from './InfiniteSlider';
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
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 lg:h-[80vh] bg-[#edf2f3] w-10/12 max-w-[1200px] mx-auto relative">

                    <div  className="mt-20 text-justify">
                        <h1 className="text-[40px] lg:text-[60px] font-bold leading-tight text-start">
                            <TypingEffect text="Transforming Ideas into Powerful Digital Solutions " speed={30} />
                            <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'><TypingEffect text="since 2014" speed={30} /></span>
                        </h1>
                    </div>


                    <div className="flex flex-col lg:mt-56 lg:p-10 right-0 lg:w-10/12">

                            <div className="flex justify-end items-end">
                                <p className="md:text-2xl lg:p-4">
                                At Engeniuspark Technologies, we turn ideas into impactful digital solutions, helping startups and enterprises succeed with innovative products that enhance joy, convenience, and efficiency.                 
                                </p>
                            </div>

                    </div>
                    
                </div>

                   
                <InfiniteSlider/>
                
                <div
                    className="w-full overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation"
                    style={{
                    fontSize: '2rem',
                    letterSpacing: '-0.6rem',
                    lineHeight: '1',
                    animation: 'reveal-slashes 2s linear forwards'
                    }}
                >
                    {generateSlashes(window.innerWidth)}
                </div>
        </div>
    )
}

export default Heroes