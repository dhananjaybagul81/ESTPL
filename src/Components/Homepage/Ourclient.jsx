import React, { useEffect, useState } from 'react';
import TypingEffect from '../Animation/TypingEffect';

const Ourclient = () => {
    const [slashCount, setSlashCount] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
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
        <div className=' bg-white'>
            <div className='pt-20 flex flex-col h-full bg-white w-10/12 max-w-[1200px] mx-auto'>
                <h1 className='font-semibold text-[34px] mb-12 text-left'>
                <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'><TypingEffect text="Our clients are:" speed={30} /></span></h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full  ">
                    <div className="mt-4  flex flex-col justify-between">
                        <h1 data-aos="fade-up"  className='font-semibold text-[28px] '>Businesses</h1>
                        <p data-aos="fade-up"  className='text-[13px] py-3'>We partner with established companies to optimize operations, boost productivity, and drive growth. Whether you’re a local print shop, a service provider, or a large enterprise, we offer tailored solutions that help your business stay competitive and succeed in a dynamic market.</p>
                        <div
                            className={`w-full overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation animate-slash
                            }`}
                            style={{
                            fontSize: '0.6rem',
                            letterSpacing: '-0.1rem',
                            lineHeight: '1',
                            animation: 'reveal-slashes 2s linear forwards',
                            
                            }}
                        >
                            {generateSlashes(window.innerWidth)}
                        </div>
                    </div>
                    <div className="mt-4  flex flex-col justify-between">
                        <h1  data-aos="fade-up"  className='font-semibold text-[28px] '>Creative Projects</h1>
                        <p data-aos="fade-up"  className='text-[13px]  py-3'>For designers, marketers, and creatives, we provide innovative tools and platforms that simplify the creative process. From custom illustration builders to advanced design features, we help bring your ideas to life with ease and efficiency.</p>
                        <div
                            className={`w-full overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation animate-slash
                            }`}
                            style={{
                            fontSize: '0.6rem',
                            letterSpacing: '-0.1rem',
                            lineHeight: '1',
                            animation: 'reveal-slashes 2s linear forwards',
                            
                            }}
                        >
                            {generateSlashes(window.innerWidth)}
                        </div>
                    </div>
                    <div className="mt-4  flex flex-col justify-between">
                        <h1 data-aos="fade-up"  className='font-semibold text-[28px] '>Startups</h1>
                        <p data-aos="fade-up"  className='text-[13px]  py-3'>We support startups by offering flexible, scalable solutions that foster innovation and growth. Our tools and expertise help startups in industries like healthcare, technology, and more to launch, scale, and succeed by streamlining operations and enhancing user experiences.</p>
                        <div
                            className={`w-full overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation animate-slash
                            }`}
                            style={{
                            fontSize: '0.6rem',
                            letterSpacing: '-0.1rem',
                            lineHeight: '1',
                            animation: 'reveal-slashes 2s linear forwards',
                            
                            }}
                        >
                            {generateSlashes(window.innerWidth)}
                        </div>
                    </div>
                    <div className="mt-4  flex flex-col justify-between">
                        <h1 data-aos="fade-up"  className='font-semibold text-[28px] '>SaaS Companies</h1>
                        <p data-aos="fade-up"  className='text-[13px]  py-3'>Infograto - making your presentation stand out has never been this easy. Infograto lets users create fun and engaging video presentations tailored to a specific theme.</p>
                        <div
                            className={`w-full overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation animate-slash
                            }`}
                            style={{
                            fontSize: '0.6rem',
                            letterSpacing: '-0.1rem',
                            lineHeight: '1',
                            animation: 'reveal-slashes 2s linear forwards',
                            
                            }}
                        >
                            {generateSlashes(window.innerWidth)}
                        </div>
                    </div>
                    {/* <div className="bg-blue-100 p-6 rounded-lg shadow-lg mt-4">
                        <h1 className='font-bold text-lg mb-8'>Creative Projects</h1>
                        <p>ITG Builder - an online illustrations builder that enables designers and marketers to create illustrations tailored to their specific needs in just a few clicks.</p>
                    </div>
                    <div className="bg-blue-100 p-6 rounded-lg shadow-lg mt-4">
                        <h1 className='font-bold text-lg mb-8'>Startups</h1>
                        <p>Caree - a Sweden-based startup providing a SaaS patient care platform for doctors and patients. Allows for practice management with the digital availability of electronic health records (EHR).</p>
                    </div>
                    <div className="bg-blue-100 p-6 rounded-lg shadow-lg mt-4">
                        <h1 className='font-bold text-lg mb-8'>SaaS Companies</h1>
                        <p>Infograto - making your presentation stand out has never been this easy. Infograto lets users create fun and engaging video presentations tailored to a specific theme.</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Ourclient;
