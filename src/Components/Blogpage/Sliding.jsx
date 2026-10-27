import React, { useState, useEffect } from 'react';
import Img1 from "../../assets/15.png";
import Img2 from "../../assets/17.jpg";
import Img3 from "../../assets/new/14.jpg";
import Img4 from "../../assets/16.png";
// import Img5 from "../../assets/Blogi5.png";
import Img6 from "../../assets/Blogi6.png";
import HoverTypingEffect from '../Animation/HoverTypingEffect';
import { MdOutlineArrowRight } from "react-icons/md";
import TypingEffect from '../Animation/TypingEffect';

const Sliding = () => {

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

  const details = [
    {
      title: 'The Power of User-Centric Development: Why It Matters for Your Business',
      description: 'This article would discuss the importance of developing applications with a user-centered approach. It will highlight how understanding user needs and behaviors can drive design decisions and create more engaging, effective solutions. You can provide examples of how Engeniuspark Technologies uses user feedback and data to build intuitive and high-performing applications',
      image: Img1,
      text: 'By Dhananjay Bagul',
    },
    {
      title: 'Choosing the Right Tech Stack for Your Project: A Guide for Businesses',
      description: 'This article would provide an overview of how businesses can choose the right tech stack for their projects. It would touch on factors like scalability, project type, development timelines, and cost-effectiveness, emphasizing how Engeniuspark Technologies helps clients select the best technologies for their needs.',
      image: Img2,
      text: 'By Aditya Rokade',
    },
    {
      title: 'From Idea to Reality: The Journey of Building a Mobile Application',
      description: 'Walk your audience through the mobile app development lifecycle, from initial concept to final deployment. This article would detail each stage of the process, showcasing Engeniuspark Technologies expertise in delivering high-quality, scalable mobile apps for clients across industries.',
      image: Img3,
      text: 'By Sandip A.',
    },
    {
      title: 'The Role of Agile Methodology in Modern Web Development',
      description: 'This article would explain how the Agile methodology is applied in web development and its benefits in creating flexible, scalable, and high-quality web applications. It could focus on how Engeniuspark Technologies uses Agile to keep projects on track and deliver results quickly while staying adaptable to changing requirements.',
      image: Img4,
      text: 'By Adity Rokade',
    },
    // {
    //   title: 'Why Cloud Solutions Are Essential for Scalability and Flexibility',
    //   description: 'Discuss the importance of cloud solutions in today’s business environment, especially for companies looking to scale quickly. This article would explain the benefits of cloud technology for both web and mobile applications and showcase Engeniuspark Technologies expertise in integrating cloud services to provide scalable, secure, and cost-effective solutions.',
    //   image: Img5,
    //   text: 'By Akash',
    // },
   
  ];

  return (
    <div className='bg-[#edf2f3] '>
      <div className="flex flex-col lg:flex-row bg-[#edf2f3] w-10/12 max-w-[1200px] items-start mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-3 w-full  '>
          <div className='hidden md:block  col-span-1 p-4 flex flex-col justify-start sticky top-24 h-screen '>
            <ul className="text-left">
              <li className='text-red-500 font-bold'>/ all</li>
              <li className='mt-2 text-gray-800'>best practices</li>
              <li className='mt-2 text-gray-800'>great tools</li>
              <li className='mt-2 text-gray-800'>techsplaining</li>
              <li className='mt-2 text-gray-800'>project how-to's</li>
            </ul>

            <ul className='text-left mt-auto'>
              <p className='text-sm md:text-base'>The software that we build takes <br /> our clients to the next level!</p>
              <div className='mt-8 px-3 py-3 md:px-4 md:py-2 flex items-center gap-2 bg-red-500 text-white text-[12px] md:text-[15px] font-semibold rounded hover:bg-red-600 transition duration-300 w-[70%] md:w-[60%] group'>
                <button className="w-[100%] text-center">
                  <HoverTypingEffect text="BOOK A FREE CONSULTATION" speed={30} />
                </button>
                <span className="flex items-center justify-center bg-transparent text-white py-1 transition duration-300 group-hover:bg-white group-hover:text-red-600">
                  <MdOutlineArrowRight />
                </span>
              </div>
            </ul>
          </div>


          <div className='col-span-2 p-4 overflow-y-auto '>
            {details.map((detail, index) => (
              <>
                <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-14 mt-8  pb-4 ">
                  <div className="flex items-center justify-center">
                    <img src={detail.image} alt={detail.title} className='w-full h-[30vh] sm:h-[50vh] object-cover rounded-[30px]' />
                  </div>
                  <div className="flex flex-col justify-start">

                    <h1 className='text-[24px] sm:text-[24px] md:text-[30px] font-bold mt-4 transition-colors duration-300 hover:text-red-600 flex items-center'>
                      {/* <span className="flex items-start justify-start mb-14 bg-transparent text-black-500 py-1 px-2 border border-black mr-2 transition duration-300 hover:bg-white hover:text-red-600">
                        <MdOutlineArrowRight size={30} />
                      </span> */}
                      {detail.title}
                    </h1>
                    <p className='text-gray-700 mt-2 sm:mt-4'>{detail.description}</p>
                    <p className='text-sm text-gray-500 mt-4 sm:mt-6'>{detail.text}</p>
                  </div>


                </div>
                <div
                  className="w-full overflow-hidden text-stone-400 text-center whitespace-nowrap  "
                  style={{
                    fontSize: '1.3rem',
                    letterSpacing: '-0.15rem',
                    lineHeight: '2',
                    animation: 'reveal-slashes 2s linear forwards',
                  }}
                >
                  {generateSlashes(window.innerWidth)}
                </div>

              </>
            ))}

          </div>


        </div>
      </div>
    </div>
  );
}

export default Sliding;
