import React, { useState, useEffect } from 'react';
import TypingEffect from '../Animation/TypingEffect';
import profile from "../../assets/profilei.jpeg";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import spicemaester from "../../assets/spicemaester.jpeg"
import desifarms from "../../assets/desifarms.jpeg"
import zoomvenues from "../../assets/zoomvenues.jpeg"
import profileimage from "../../assets/profileimage.png"

const Card = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    // const [expanded, setExpanded] = useState({});
    const [isAnimating, setIsAnimating] = useState(false);

    const testimonials = [
        {
          id: 1,
          name: "Mrs. Shilpa",
          position: "Zoomvenues",
          logo: zoomvenues,
          avatar: profileimage,
          text: "I want to thank Engeniuspark Team for the fantastic job they did on my app development project. The company has very high standards and did an incredible job. I would surely recommend their services for amazing outcomes."
        },
        {
            id: 2,
            name: "Mr. Sunil",
            position: "Desi Farms",
            logo: desifarms,
            avatar: profileimage,
            text: "Engeniuspark Technologies has created a Web Application for my business and provide maintenance for that. I am happy with the professional nature of the employees who are always willing to help, therefore, I must say it is a best Web Design Company In Nashik."
          },
          {
            id: 3,
            name: "Mr. Manav",
            position: "SPICE MAESTER",
            logo: spicemaester,
            avatar: profileimage,
            text: "Working with the Engeniuspark Team has been a most pleasant experience! Their dedication and passion for what they do is exemplified by their unrivaled customer support and attentiveness to the specific needs of our business. We look forward to a long lasting and prosperous relationship!"
          },
        // Add more testimonials as needed
      ];
  
      const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      };
    
      const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      };
  
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
        <div className='h-full mx-auto w-10/12  max-w-[1200px] py-8 sm:py-12 md:py-20'>

            {/* Hero Text */}
            <div className=' flex flex-col sm:flex-row justify-end mt-8 w-full space-y-4 sm:space-y-0 sm:space-x-2'>
                    <p className='font-semibold text-3xl md:text-6xl text-black lg:w-6/12'>What
                            <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>
                            <TypingEffect text=" our clients say " speed={30} /></span>
                            about Estpl                        
                    </p>
                
            </div>

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

            <div className="flex flex-col md:flex-row items-center gap-20 pt-20 pb-10 mt-10 w-full">
                {/* Left side - Logo and Avatar */}

                <div className='lg:w-5/12'>
                        <div className="relative w-60 h-60 mx-auto">
                                            <div className="bg-black w-full h-full rounded-lg flex items-center justify-center -rotate-12">
                                            <span className="text-white text-7xl font-bold rotate-12  p-2 "> <img 
                                            src={testimonials[currentIndex].logo}
                                            alt="Avatar"
                                            className="bottom-[-20px] right-[-50px] w-28 h-28 rounded-full"
                                            /></span>
                                            </div>
                                            <img 
                                            src={testimonials[currentIndex].avatar}
                                            alt="Avatar"
                                            className="absolute bottom-[-20px] right-[-50px] w-28 h-28 rounded-full border-2 border-black p-2"
                                            />
                        </div>
                </div>

                {/* Right side - Testimonial Content */}
                <div className="flex-1 pt-6 pr-6">
                    {/* Decorative background cards */}
                    <div className="relative">
                        {/* Bottom card */}
                        <div className="absolute -bottom-3 -right-3 w-full h-full bg-gray-100 rounded-lg border border-gray-200" />
                        {/* Middle card */}
                        <div className="absolute -bottom-1.5 -right-1.5 w-full h-full bg-gray-50 rounded-lg border border-gray-200" />
                        
                        {/* Main card */}
                        <div className="bg-white rounded-lg p-8 shadow-sm relative border  border-gray-200 hover:-rotate-1 cursor-pointer">
                        {/* Author info */}
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className="font-semibold text-md">{testimonials[currentIndex].name}</h3>
                            <span className="text-gray-500">/</span>
                            <p className="text-gray-500 text-sm">{testimonials[currentIndex].position}</p>
                        </div>

                        {/* Testimonial text */}
                        <p className="text-xl font-medium leading-relaxed text-gray-800">
                            "{testimonials[currentIndex].text}"
                        </p>
                        </div>
                    </div>
                </div>

            </div> 
                {/* Navigation */}
            <div className="flex items-center justify-around w-full">

                        <div className="flex items-center  w-4/12 justify-center">
                            {/* <img src="/clutch-logo.png" alt="Clutch" className="h-6" /> */}
                            <span className="text-red-500 ml-2">Estpl 5.0</span>
                        </div>
                        
                        <div className="flex items-center justify-center gap-2 ml-10  w-4/12">
                            {Array(5).fill(null).map((_, i) => (
                            <div 
                                key={i}
                                className={`w-8 h-[2px] ${i === currentIndex ? 'bg-black' : 'bg-gray-300'}`}
                            />
                            ))}
                        </div>

                        <div className="flex justify-end gap-4  w-4/12">
                            <button 
                            onClick={handlePrev}
                            className="p-2 border rounded-full hover:bg-gray-100"
                            >
                            <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button 
                            onClick={handleNext}
                            className="p-2 border rounded-full hover:bg-gray-100"
                            >
                            <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
            </div>
            

         </div>
    );
}

export default Card;
