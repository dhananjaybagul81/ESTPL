import React from 'react';
import { GrGraphQl } from "react-icons/gr";
import { IoLogoVue } from "react-icons/io5";
import { FaReact, FaAws } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import TypingEffect from '../Animation/TypingEffect';
import { MdOutlineArrowRight } from 'react-icons/md';
import HoverTypingEffect from '../Animation/HoverTypingEffect';

const Moderteck = () => {
    return (
        <div className=' mt-2 w-10/12 max-w-[1200px] mx-auto'>

            <div className='flex flex-col md:flex-row justify-between items-center mt-20 gap-10'>
                <div className="flex-1">

                      <p className="text-black text-3xl lg:text-5xl md:w-8/12 font-semibold">
                                Modern tech stack 
                                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                                    <TypingEffect text=" and industry’s " speed={30} />
                                </span> 
                                best practices 
                                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                                    <TypingEffect text=" have been the wind in our sails. " speed={30} />
                                </span>
                                The tech we use for our projects:
                        </p>

                </div>

                {/* <div className='flex-1 mt-4 md:mt-0 md:ml-8'>
                    <p className='text-[18px] text-justify'>
                        Modern but proven tools speed up the development process and increase your project’s effectiveness, feasibility, and investment appeal. Competitive technology combined with our cross-functional development team and flexible development methodologies will get you the results you want, faster.
                    </p>
                </div> */}
            </div>


            <div className='relative grid grid-cols-1 gap-3 md:gap-0 w-full min-h-[60vh] top-20 mb-10 md:p-4'>
                {/* GraphQL Card */}
                <div className='md:absolute lg:right-80 right-0  w-[300px] p-5 border border-gray-400'>
                    <h1 className='text-[30px] font-medium mb-4 flex items-center'>
                    <GrGraphQl className='mr-2 border' /> GraphQL
                    </h1>
                    <p className='text-sm text-gray-700 leading-relaxed'>
                    Empower clients with tailored APIs, offering flexibility and powerful developer tools for seamless evolution over time.
                    </p>
                </div>

                {/* Vue.js Card */}
                <div className='md:absolute lg:left-28 left-0 top-28  w-[300px] p-5 border border-gray-400'>
                    <h1 className='text-[30px] font-medium mb-4 flex items-center'>
                    <IoLogoVue className='mr-2' /> Vue.js
                    </h1>
                    <p className='text-sm text-gray-700 leading-relaxed'>
                    A progressive JavaScript framework for building fast, high-performance web applications with reduced costs.
                    </p>
                </div>

                {/* React.js Card */}
                <div className='md:absolute top-60 lg:top-44 right-10 lg:right-12 bg-white w-[300px] p-5 border border-gray-400'>
                    <h1 className='text-[30px] font-medium mb-4 flex items-center'>
                    <FaReact className='mr-2' /> React.js
                    </h1>
                    <p className='text-sm text-gray-700 leading-relaxed'>
                    The go-to library for building user interfaces, React allows seamless integration of components from various developers, teams, and organizations.
                    </p>
                </div>
            </div>

            <div className='relative grid grid-cols-1 w-full gap-3 md:gap-0 min-h-[60vh] top-20 mb-10  md:p-4 flex-1'>
                <div className='md:absolute top-0 left-8 w-[300px] p-5 border border-gray-400'>
                    <h1 className='text-[30px] font-medium mb-4 flex items-center'>
                        <RiNextjsFill className='mr-2' /> Next.js
                    </h1>
                    <p className='text-sm text-gray-700 leading-relaxed'>
                    A React framework for building full-stack web applications, providing additional features and optimizations for enhanced performance.
                    </p>
                </div>

                <div className='md:absolute top-[10rem] left-[22rem] lg:left-[30rem] w-[300px] p-5 border border-gray-400'>
                    <h1 className='text-[30px] font-medium mb-4 flex items-center'>
                        <TbBrandReactNative className='mr-2' /> MongoDB
                    </h1>
                    <p className='text-sm text-gray-700 leading-relaxed'>
                        A scalable NoSQL database that supports transactions, real-time analytics, and mobile applications with a simple query interface.
                    </p>
                </div>

                <div className='md:absolute top-[24rem] lg:top-60 right-[12rem] lg:right-12 w-[300px] p-5 border border-gray-400'>
                    <h1 className='text-[30px] font-medium mb-4 flex items-center'>
                        <IoLogoNodejs className='mr-2' /> Node.js
                    </h1>
                    <p className='text-sm text-gray-700 leading-relaxed'>
                    Efficient and lightweight, Node.js is ideal for data-intensive, real-time applications across distributed systems.
                    </p>
                </div>
            </div>

            <div className='relative grid grid-cols-1 w-full gap-3 md:gap-0 min-h-[60vh] top-20 mb-10 md:p-4 flex-1'>
                <div className='md:absolute bottom-0 left-0 w-[300px] p-5 border border-gray-400'>
                    <h1 className='text-[30px] font-medium mb-4 flex items-center'>
                        <FaAws className='mr-2' /> AWS
                    </h1>
                    <p className='text-sm text-gray-700 leading-relaxed'>
                    With AWS, scale your applications effortlessly with cloud services for compute, storage, content delivery, and more, ensuring flexibility and reliability.                    
                    </p>
                </div>

                <div className='md:absolute top-0 lg:left-[25rem] w-[300px] p-5 border border-gray-400'>
                    <h1 className='text-[30px] font-medium mb-4 flex items-center'>
                        <BiLogoPostgresql className='mr-2' /> PostgreSQL
                    </h1>
                    <p className='text-sm text-gray-700 leading-relaxed'>
                    A reliable, high-performance relational database with over 30 years of development, offering robust features and scalability.
                    </p>
                </div>

                <div className='md:absolute top-[10rem] right-12 w-[300px] p-5 border border-gray-400'>
                    <h1 className='text-[30px] font-medium mb-4 flex items-center'>
                        <FaReact className='mr-2' /> React Native
                    </h1>
                    <p className='text-sm text-gray-700 leading-relaxed'>
                    Manage, protect and define your data types, build custom functions, and write code from different programming languages without having to recompile your database.
                    </p>
                </div>
            </div>

            <div className='px-3 mt-[6rem] mb-5 py-3 md:px-4 md:py-2 flex items-center gap-2 bg-black text-red-500 text-[12px] md:text-[15px] font-semibold rounded hover:bg-red-600 hover:text-white transition duration-300 w-[70%] md:w-[30%] group'>
                    <button className="text-center">
                        <HoverTypingEffect text="ALL TECHNOLOGIES" speed={10} />
                    </button>
                    <span className="flex items-center justify-center bg-transparent text-white py-1 transition duration-300 group-hover:bg-white group-hover:text-red-600">
                        <MdOutlineArrowRight />
                    </span>
            </div>
        </div>
    );
};

export default Moderteck;
