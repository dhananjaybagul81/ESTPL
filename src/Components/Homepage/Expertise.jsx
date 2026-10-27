import React, { useEffect, useRef, useState } from 'react';
import TypingEffect from '../Animation/TypingEffect';
import cube1 from "../../assets/cube/cube1.png";
import cube2 from "../../assets/cube/cube2.png";
import cube3 from "../../assets/cube/cube3.png";
import cube4 from "../../assets/cube/cube4.png";
import cube5 from "../../assets/cube/cube5.png";
import cube6 from "../../assets/cube/cube6.png";
import cube7 from "../../assets/cube/cube7.png";
import cube8 from "../../assets/cube/cube8.png";
import cube9 from "../../assets/cube/cube9.png";
import cube10 from "../../assets/cube/cube10.png";
import cube11 from "../../assets/cube/cube11.png";
import cube12 from "../../assets/cube/cube12.png";
import cube13 from "../../assets/cube/cube13.png";
import cube14 from "../../assets/cube/cube14.png";
import cube15 from "../../assets/cube/cube15.png";
import cube16 from "../../assets/cube/cube16.png";
import cube17 from "../../assets/cube/cube17.png";
import cube18 from "../../assets/cube/cube18.png";
import cube19 from "../../assets/cube/cube19.png";
import cube20 from "../../assets/cube/cube20.png";
const images = [cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10, cube11, cube12, cube13, cube14, cube15, cube16, cube17, cube18, cube19, cube20];

const Expertise = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      // Calculate the scroll position relative to the top of the Expertise container
      const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = window.scrollY - containerTop;

      // Set a height for the scroll range over which all images should appear
      const scrollRange = containerRef.current.offsetHeight;
      const imageHeight = scrollRange / images.length; // Scroll height for each image change

      // Calculate the image index based on the relative scroll position
      const newIndex = Math.floor(scrollPosition / imageHeight);

      // Update the index if it's within bounds
      if (newIndex >= 0 && newIndex < images.length && newIndex !== currentImageIndex) {
        setCurrentImageIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentImageIndex]);

    return (
        <div className='bg-black '  ref={containerRef}>
            <div className='h-full mx-auto w-10/12  max-w-[1200px] py-8 sm:py-12 md:py-20  relative'>
                {/* Hero Text */}
                <div className=' flex flex-col sm:flex-row justify-end mt-8  w-full space-y-4 sm:space-y-0 sm:space-x-2'>
                    <p className='font-bold text-[24px] md:text-[40px] text-white '>
                            <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'><TypingEffect text="ESTPL – Your Trusted Partner for Development Solutions. " speed={30} /></span>
                            <span className=''><TypingEffect text="we offer comprehensive development solutions, including web and app development, digital marketing, and specialized services for the aviation industry." speed={30} /></span> 
                    </p>

                </div>


                {/* First Grid Section */}
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 
                '>
                    <div className=' '>
                        <h2 className='text-white font-semibold text-[30px] mb-3 md:mb-4'>Expertise</h2>
                        <p className='text-gray-300 text-sm leading-relaxed  w-8/12'>
                        With over 10 years of experience in creating fast, easy-to-use, and technologically advanced applications, we have successfully completed 80+ innovative projects. When you partner with us, you can trust that your project is in expert hands.
                        </p>
                    </div>



                    <div className='px-2 sm:px-3 md:pl-4 mt-8 sm:mt-12 md:mt-60  flex justify-end'>
                        <div className='w-9/12'>
                            <h2 className='text-white font-semibold text-[30px] mb-3 md:mb-4   w-full'>Versatility</h2>
                            <p className='text-gray-300 text-sm leading-relaxed   w-full'>
                            Our personalized approach allows us to cater to your project’s unique needs. We recommend the right technologies and development processes, helping you achieve your desired outcomes and delivering solutions that align perfectly with your business goals.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="sticky top-1/2 transform mr-20 -translate-y-1/2 z-10 hidden md:flex justify-center items-center pointer-events-none">
                    <img
                        src={images[currentImageIndex]}
                        alt={`Cube ${currentImageIndex + 1}`}
                        className="max-h-full w-auto transition-opacity duration-500 ease-in-out"
                    />
                    </div>

                <div className='relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20'>
                    <div className=' '>
                        <h2 className='text-white font-semibold text-[30px] mb-3 md:mb-4'>Global Reach</h2>
                        <p className='text-gray-300 text-sm leading-relaxed  w-8/12'>
                        Our team at Engeniuspark Technologies is ready to collaborate with clients around the globe. Our vast international experience has taught us that strong business practices and human values transcend time zones and language barriers, ensuring seamless communication and cooperation.
                        </p>
                    </div>

                    <div className='px-2 sm:px-3 md:pl-4 mt-8 sm:mt-12 md:mt-60  flex justify-end'>
                        <div className=' w-9/12'>
                            <h2 className='text-white font-semibold text-[30px] mb-3 md:mb-4   w-full'>Flexibility</h2>
                            <p className='text-gray-300 text-sm leading-relaxed   w-full'>
                            We believe in flexibility and close collaboration throughout the development process. We build scalable and adaptable applications and work alongside your team to gather feedback and refine the solution from the early stages to ensure the best possible result.
                            </p>
                        </div>
                    </div>
                </div>


                <div className='relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 '>
                    <div className=' '>
                        <h2 className='text-white font-semibold text-[30px] mb-3 md:mb-4 w-9/12'>Modern tech stack and development process</h2>
                        <p className='text-gray-300 text-sm leading-relaxed  w-8/12'>
                        Our cross-functional team is driven by a passion for innovation and excellence. We use the latest tools and technologies to deliver top-notch results, ensuring your project is completed quickly, efficiently, and with precision.
                        </p>
                    </div>

                    <div className='px-2 sm:px-3 md:pl-4 mt-8 sm:mt-12 md:mt-60  flex justify-end'>
                        <div className=' w-9/12'>
                            <h2 className='text-white font-semibold text-[30px] mb-3 md:mb-4   w-full'>Hands-on personal experience with SAAS startups</h2>
                            <p className='text-gray-300 text-sm leading-relaxed w-full'>
                            We understand the unique challenges faced by startups and provide hands-on support to ensure success. From early development stages to post-launch, we guide you through every step of the process, ensuring your solutions are impactful and user-friendly.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Expertise;