import React, { useState, useEffect } from 'react';
import TypingEffect from '../Animation/TypingEffect';
import HoverTypingEffect from '../Animation/HoverTypingEffect';
import profile from "../../assets/profilei.jpeg";
import profileimage from "../../assets/profileimage.png"
import { MdOutlineArrowRight } from "react-icons/md";
import estpl from "../../assets/estpl.png"
import { Link } from 'react-router-dom';

const Heroes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState({});

  const testimonials = [
    {
      id: 1,
      name: "Mr.Dhananjay",
      text: "I want to thank Engeniuspark Team for the fantastic job they did on my app development project. The company has very high standards and did an incredible job. I would surely recommend their services for amazing outcomes.",
      avatar: profileimage
    },
    {
      id: 2,
      name: "Mr. Sunil",
      text: "Engeniuspark Technologies has created a Web Application for my business and provide maintenance for that. I am happy with the professional nature of the employees who are always willing to help, therefore, I must say it is a best Web Design Company In Nashik.",
      avatar: profileimage
    },
    {
      id: 3,
      name: "Mr. Manav",
      text: "Working with the Engeniuspark Team has been a most pleasant experience! Their dedication and passion for what they do is exemplified by their unrivaled customer support and attentiveness to the specific needs of our business. We look forward to a long lasting and prosperous relationship!",
      avatar: profileimage
    }
  ];

  const handleCardClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);  
  };

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const [slashCount, setSlashCount] = useState(0);

  const generateSlashes = (width) => {
    const slashWidth = 3;
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
      <div className="flex flex-col lg:flex-row bg-[#edf2f3] w-full lg:w-10/12 max-w-[1200px] items-start mx-auto">
        {/* Left Section */}
        <div className="flex-1 mt-10 lg:mt-10 flex flex-col justify-start items-center lg:items-start text-center lg:text-left p-4 lg:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-semibold leading-none">
            <TypingEffect text="EXCELLENCE IN EXECUTION" speed={70} />
          </h1>
          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-[18px] w-full lg:w-[70%] font-medium text-black">
            <TypingEffect text="Welcome to Engeniuspark Technologies – Your Partner in Innovation and Excellence." speed={30} />
          </p>

          <div className='mt-8 px-3 py-2 md:px-4 md:py-2 flex items-center gap-2 bg-red-500 text-white text-xs md:text-sm font-semibold rounded hover:bg-red-600 transition duration-300 w-full sm:w-3/4 md:w-[60%] group'>
            <Link to="/contact-us" className='flex items-center gap-3'>
              <button className="w-full text-center">
                <HoverTypingEffect text="BOOK A FREE CONSULTATION" speed={10} />
              </button>
              <span className="flex items-center justify-center bg-transparent text-white py-1 transition duration-300 group-hover:bg-white group-hover:text-red-600">
                <MdOutlineArrowRight />
              </span>
            </Link>  
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col mt-10 lg:mt-0 p-4 lg:p-8 mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-6">
            {/* Rating Card */}
            <div className="text-left lg:w-1/2">
              <h2 className="text-lg md:text-xl font-bold">
                Estpl <span className="text-red-500">★ 5.0</span>
              </h2>
              <p className="mt-2 text-xs md:text-sm text-gray-600">
                We're recognized as one of the leading software development companies in the India.
              </p>
            </div>

            {/* Testimonial Cards Container */}
            <div className="relative h-[140px] sm:h-[160px] lg:w-1/2 cursor-pointer">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                const position = (index - activeIndex + testimonials.length) % testimonials.length;
                const charLimit = 60;

                if (position > 2) return null; // Only show top 3 cards

                return (
                  <div
                    key={testimonial.id}
                    onClick={handleCardClick}
                    className={`absolute w-full bg-[#edf2f3] border border-stone-300 p-4 rounded-lg shadow-sm transition-all duration-300 ease-in-out ${
                      position === 0 
                        ? 'z-30 opacity-100 translate-y-0' 
                        : position === 1 
                          ? 'z-20 opacity-90 translate-y-2' 
                          : 'z-10 opacity-80 translate-y-4'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <h3 className="text-sm font-medium">{testimonial.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {expanded[testimonial.id] 
                        ? testimonial.text 
                        : testimonial.text.slice(0, charLimit)
                      }
                      {testimonial.text.length > charLimit && !expanded[testimonial.id] && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(testimonial.id);
                          }}
                          className="text-blue-500 hover:text-blue-600 ml-1"
                        >
                          Read more
                        </button>
                      )}
                    </p>
                  </div>
                );
              })}

              {/* Navigation Dots */}
              <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDotClick(index);
                    }}
                    className={`h-1 w-1 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slash Effect and Image */}
      <div className="relative w-full">
        <div className="hidden lg:block w-full overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation">
          {generateSlashes(window.innerWidth)}
        </div>

        <div className="flex items-center justify-center max-w-[1200px] w-full lg:w-10/12 mx-auto py-8">
          <div className="flex-1 text-center">
            <div className="relative flex items-center justify-center mb-8 lg:mb-10">
              <img className='w-[18rem] md:w-[30rem] lg:w-[40rem]' data-aos="fade-up" src={estpl} alt='estpl' />
            </div>

            <div className='flex flex-col lg:flex-row w-full'>
              <div className="mt-6 p-4 text-left w-full lg:w-1/2">
                <p data-aos="fade-right" className="text-base md:text-lg lg:text-[18px] text-black font-medium">
                  <TypingEffect  text="End-to-End Development for Unstoppable Growth. Let’s Take Your Business to New Heights!" speed={30} />
                </p>
              </div>
              <div className='w-full lg:w-1/2 p-4'>
                img 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heroes;