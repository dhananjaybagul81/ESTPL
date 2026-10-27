import React, { useState, useEffect } from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import HoverTypingEffect from '../Animation/HoverTypingEffect';
import { MdOutlineArrowRight } from "react-icons/md";
import TypingEffect from '../Animation/TypingEffect';
import profile from "../../assets/profilei.jpeg";
import profileimage from "../../assets/profileimage.png"
import estpl from "../../assets/estpl.png"

const Contactus = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [slashCount, setSlashCount] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [expanded, setExpanded] = useState({});

    const testimonials = [
        {
            id: 1,
            name: "Mrs. Shilpa",
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
      
      const handleCardClick = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      };
    
      const toggleExpand = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
      };
    
      const handleDotClick = (index) => {
        setActiveIndex(index);
      };


    return (
        <div className='bg-[#edf2f3]'>
         <div className="pt-10 bg-[#edf2f3] w-10/12 max-w-[1200px] mx-auto">
            <div className='items-start justify-start'>
                <h1 className="text-6xl md:text-8xl lg:text-[180px] mt-20 font-bold text-start leading-none">CONTACT <br /> US</h1>
            </div>

            <div className="flex flex-col-reverse lg:flex-row gap-20 mt-14">

                <div className="lg:w-4/12">
                    {/* Testimonials container moved to bottom */}
                        <div className="relative h-[150px] lg:h-[250px] flex-1">
                        {testimonials.map((testimonial, index) => {
                            const isActive = index === activeIndex;
                            const position = (index - activeIndex + testimonials.length) % testimonials.length;
                            const charLimit = 60;

                            return (
                            <div
                                key={testimonial.id}
                                onClick={handleCardClick}
                                className={`absolute bottom-0 w-full h-[180px] bg-[#edf2f3] p-6 rounded shadow-lg border border-gray-300 cursor-pointer transition-all duration-500 ease-in-out
                                ${position === 0 ? 'z-30 opacity-100 translate-y-0 translate-x-0' : ''}
                                ${position === 1 ? 'z-20 opacity-60 translate-y-2 translate-x-2 blur-[1px]' : ''}
                                ${position === 2 ? 'z-10 opacity-30 translate-y-4 translate-x-4 blur-[2px]' : ''}
                                ${position >= 3 ? 'opacity-0' : ''}`}
                                style={{
                                transform: `
                                    translate(${position * 8}px, ${position * 10}px)
                                    scale(${1 - position * 0.01})
                                `,
                                }}
                            >
                                <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <h3 className="text-[12px] font-semibold">{testimonial.name}</h3>
                                </div>
                                <p className="text-gray-600 text-[12px]">
                                {expanded[testimonial.id] ? testimonial.text : `${testimonial.text.slice(0, charLimit)}...`}
                                {testimonial.text.length > charLimit && (
                                    <span
                                    onClick={() => toggleExpand(testimonial.id)}
                                    className="text-blue-500 cursor-pointer ml-1"
                                    >
                                    {expanded[testimonial.id] ? 'Show less' : 'Read more'}
                                    </span>
                                )}
                                </p>
                            </div>
                            );
                        })}

                        {/* Navigation Dots */}
                        <div className="absolute bottom-[-30px] left-0 right-0 flex justify-center">
                            {testimonials.map((_, index) => (
                            <span
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-1 w-1 rounded-full mx-1 cursor-pointer transition-all duration-300 ${
                                index === activeIndex ? 'bg-gray-800' : 'bg-gray-400'
                                }`}
                            />
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col justify-between w-fyll lg:w-8/12">
                        <div
                            className={`w-full hidden lg:block overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation animate-slash
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

                <div className="flex md:justify-between mt-4 items-center mb-4">
                    
                        <div className="text-start w-5/12 py-8">
                            {/* <h1 className="text-5xl md:text-6xl font-semibold">100+</h1> */}
                            <h4 className="text-sm md:text-lg">+91 749 984 5199</h4>
                                <div
                                className={`w-full hidden lg:block overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation animate-slash
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

                        <div className="text-start w-5/12 py-8">
                                {/* <h1 className="text-5xl md:text-6xl font-semibold">10+</h1> */}
                                <h4 className="text-sm md:text-lg inline-block">dhaanjaybagul81@gmail.com</h4>

                                <div
                                className={`w-full hidden lg:block overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation animate-slash
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
                </div>

                <div className="flex justify-between mt-4 items-center mb-4 ">
                    
                    <div className="text-start w-5/12 py-8">
                        {/* <h1 className="text-5xl md:text-6xl font-semibold">100+</h1> */}
                        <h4 className="text-lg">Office | USA</h4>
                        <h4 className="text-sm">101 Eisenhower Pkwy, Roseland
                        NJ 07068</h4>
                            <div
                            className={`w-full hidden lg:block overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation animate-slash
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

                    

                    <div className="text-start w-5/12 py-8">
                        {/* <h1 className="text-5xl md:text-6xl font-semibold">100+</h1> */}
                        <h4 className="text-lg">Office | INDIA</h4>
                        <h4 className="text-sm">Sharanpur / Canada Corner Address: Flat No. 1, Canada Palace Apartment, Opposite Navkar Eye Clinic, Canada Corner, Sharanpur Road, Nashik, Maharashtra 422005</h4>
                            <div
                            className={`w-full hidden lg:block overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation animate-slash
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
            </div>

            <div className="flex justify-between mt-4 items-center mb-4 ">
                    
                    <div className="text-start w-5/12 py-8">
                        {/* <h1 className="text-5xl md:text-6xl font-semibold">100+</h1> */}
                        <h4 className="text-lg">Office | UAE</h4>
                        <h4 className="text-sm">Floor 13, Office 55, Burjuman Business Tower,Bur Dubai, Dubai
                        United Arab Emirates</h4>
                            <div
                            className={`w-full hidden lg:block overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation animate-slash
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
            </div>


                    <div className="flex justify-between mt-4 items-center mb-4 ">
                    
                        <div className="text-start w-5/12 py-8">
                            <h1 className="text-5xl md:text-6xl font-semibold">100+</h1>
                            <h4 className="text-md">Successful Projects Delivered</h4>
                            <div
                            className={`w-full hidden lg:block overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation animate-slash
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
                        <div className="text-start w-5/12 py-8">
                            <h1 className="text-5xl md:text-6xl font-semibold">10+</h1>
                            <h4 className="text-md">Years of Expertise in Tech Innovation</h4>

                            <div
                            className={`w-full hidden lg:block overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation animate-slash
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
                        
                    </div>

                    {/* <div className="mt-4 py-8">
                        <p className="text-lg md:text-[18px] text-black font-semibold">
                             Our Clients Have Been Featured In:
                        <br />
                        </p>

                        <div
                            className={`w-full hidden lg:block overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation animate-slash
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
                    </div> */}

                    <div className="text-start mt-12">
                        <h1 className="text-3xl md:text-6xl font-semibold mb-2  w-1/2 lg:w-10/12">Let’s Build Something Amazing!</h1>
                        <div className='mt-8 px-3 py-3 md:px-4 md:py-2 flex items-center gap-2 bg-red-500 text-white text-[12px] md:text-[15px] font-semibold rounded hover:bg-red-600 transition duration-300 w-[100%] md:w-[50%] group'>
                            <button className="w-[80%] text-center">
                                <HoverTypingEffect text="SHARE YOUR IDEAS WITH US" speed={10} />
                            </button>
                            <span className="flex items-center justify-center bg-transparent text-white py-1 transition duration-300 group-hover:bg-white group-hover:text-red-600">
                                <MdOutlineArrowRight />
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <footer className="py-10 sm:py-16 mt-16">
            <div
                            className={`mb-5 w-full hidden lg:block overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation animate-slash
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

                <div className="px-6">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div>
                            <div className="flex mb-6 w-20 h-10">
                                <img src={estpl} alt="ESTPL" className="mr-2" />
                                {/* <span className="font-bold text-xl">ESTPL</span> */}
                            </div>
                            <div className="flex gap-4">
                                <FaFacebook className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
                                <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
                                <FaGithub className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold mb-4">Industries</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-gray-800">Industry 1</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-800">Industry 2</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-800">Careers</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-800">Help Center</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-gray-600">
                        © 2024 ESTPL™
                    </div>
                </div>
            </footer>

        </div>
        </div>
    );
};

export default Contactus;
