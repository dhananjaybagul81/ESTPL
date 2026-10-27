import React, { useEffect, useState } from 'react';
import TypingEffect from '../Animation/TypingEffect';
import { MdOutlineArrowRight } from 'react-icons/md';
import HoverTypingEffect from '../Animation/HoverTypingEffect';
import estpl from "../../assets/h-setting.png"

const Weoffer = () => {
  const services = [
    { title: 'Digital Marketing', description: 'Building brands that resonate. We create impactful digital strategies to enhance visibility and foster lasting audience relationships through targeted campaigns, SEO, and content marketing.', Project: '12' },
    { title: 'Custom Web Development', description: 'Your online cornerstone. Our team crafts responsive, performance-optimized websites that capture your brand’s essence and drive engagement and conversions.' , Project: '12' },
    { title: 'Mobile App Development', description: 'Captivate on-the-go. Our cross-platform mobile apps offer seamless, user-friendly experiences that engage customers, anytime, anywhere.' , Project: '12' },
    { title: 'Aviation Solutions', description: 'Precision in motion. From logistics to ground handling, our aviation solutions improve operational efficiency and elevate service standards for seamless airport operations' , Project: '12' }
  ];

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
    <div className='bg-black py-10'>
      <div className='text-white w-10/12 max-w-[1200px] mx-auto md:p-4 '>
        <div className='flex mt-20  md:text-center'>
          <p className='font-bold text-[32px] sm:text-[42px] md:text-[40px] mb-20 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>
            <TypingEffect
              text="We equip our partners with the tools and insights needed to lead in the following key areas."
              speed={30}
            />
          </p>
        </div>
        <div className='flex flex-col justify-start p-4'>
          {/* <span>/</span>
          <div className='grid grid-cols-1 md:grid-cols-2 mb-8 mt-8'>
            <div className='flex flex-col'>
              <h1 className='font-bold text-[32px] sm:text-[50px] md:text-[70px] hover:text-red-600 transition duration-300'>Our Services</h1>
            </div>
            <div className='flex flex-col md:ml-4'>
              <p>
                Work with a development team attuned to your business goals. We offer a full development cycle, and a scalable cross-functional team that supports your project at every stage.
              </p>
            </div>
          </div>
          <span>/</span> */}

          {services.map((service, index) => (
            <div key={index} className=''>

                <div
                    className={`w-full  overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation ${
                    hoveredIndex === index ? 'animate-slash' : ''
                    }`}
                    style={{
                    fontSize: '0.6rem',
                    letterSpacing: '-0.15rem',
                    lineHeight: '1',
                    animation: 'reveal-slashes 2s linear forwards',
                    
                    }}
                >
                    {generateSlashes(window.innerWidth)}
                </div>

                <div className='flex flex-col md:flex-row md:items-center mb-8 mt-8 cursor-pointer'>
                    <div className='flex items-center md:w-6/12 group '>
                        {/* <MdOutlineArrowRight className="mr-1 hidden lg:block group-hover:bg-red-500 group-hover:text-white md:text-[40px] border group-hover:border-x-0 group-hover:border-y-0" /> */}
                        <h1 className='font-bold text-[32px] group sm:text-[40px] md:text-[50px] hover:text-red-600 transition duration-300 leading-tight'>
                        <TypingEffect
                          text={service.title}
                          speed={30}
                        />
                        </h1>
                    </div>
                    <div className='flex flex-col my-2 md:ml-4 md:my-auto text-[12px] md:w-5/12'>
                        <p>{service.description}</p>
                    </div>
                    <div className='flex flex-col md:ml-4 my-auto text-[12px] md:w-1/12 text-end'>
                        <p>{service.Project} Projects</p>
                    </div>
                </div>


            </div>
            
            ))}

            <div
                className={`w-full  overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation
                  animate-slash
                }`}
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '-0.15rem',
                  lineHeight: '1',
                  animation: 'reveal-slashes 2s linear forwards',
                  
                }}
              >
                {generateSlashes(window.innerWidth)}
              </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row mx-auto w-10/12  max-w-[1200px] bg-[#1f2228] shadow-lg my-10'>
           
                       {/* Image */}
            <div className='flex justify-center items-center md:sticky md:top-0 lg:w-8/12'>
                <img 
                    src={estpl} 
                    alt="Diamond" 
                    className='h-auto max-w-[300px]'
                />
            </div>
           
            {/* Text Content */}
            <div className='flex flex-col justify-center py-10 md:py-24 p-5 md:px-10 '>
                <h1 className='font-bold text-[35px] md:text-[50px] text-white'>
                <TypingEffect text="Need smarter solutions for your business?" speed={30} /></h1>
                <h3 className='font-semibold text-[20px] md:text-[20px] text-white'>
                <TypingEffect text="Let’s explore automation together." speed={30} />
                </h3>
                <div className='mt-8 px-3 py-3 md:px-4 md:py-2 flex items-center gap-2 bg-red-500 text-white text-[12px] md:text-[15px] font-semibold rounded hover:bg-red-600 transition duration-300 w-[70%] md:w-[50%] group'>
                    <button className="text-center">
                        <HoverTypingEffect text="Get your free consultation now!" speed={10} />
                    </button>
                    <span className="flex items-center justify-center bg-transparent text-white py-1 transition duration-300 group-hover:bg-white group-hover:text-red-600">
                        <MdOutlineArrowRight />
                    </span>
                </div>
              
            </div>
            

        </div>
    </div>
  );
};

export default Weoffer;