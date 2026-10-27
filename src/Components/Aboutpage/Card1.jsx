import React from 'react';
import TypingEffect from '../Animation/TypingEffect';
import { MdOutlineArrowRight } from 'react-icons/md';
import HoverTypingEffect from '../Animation/HoverTypingEffect';
import estpl from "../../assets/estpl.png"


const Card1 = () => {
    return (
        <div className='bg-black py-10'>
            <div className='h-full mx-auto w-10/12  max-w-[1200px] py-8 sm:py-12 md:py-20 '>
                {/* Hero Text */}
                <div className=' flex flex-col sm:flex-row justify-start mt-8 w-full space-y-4 sm:space-y-0 sm:space-x-2'>

                    <p className='font-semibold text-3xl sm:text-3xl md:text-6xl text-white  w-8/12'>What Makes
                            <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>
                            <TypingEffect text=" ESTPL Unique? " speed={30} /></span>
                            
                    </p>

            
                </div>
                {/* <hr className='mt-20' /> */}
                {/* First Grid Section */}
                <div className='relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 
                '>
                    <div className=''>
                        {/* <h2 className='text-white font-semibold text-[30px] mb-3 md:mb-4'>Expertise</h2> */}
                        <p className='text-white md:text-xl leading-relaxed  w-8/12 '>
                        At ESTPL, we bring years of hands-on experience and expertise to the table, specializing in building enterprise-level software solutions that address the evolving needs of businesses. Our team of skilled developers, based in India, is passionate about crafting strong, robust systems that solve real-world challenges.
                        </p>
                    </div>
                    
                    <div className='px-2 sm:px-3 md:pl-4 mt-8 sm:mt-12 md:mt-60 flex justify-end'>
                        <div className='w-9/12'>
                            {/* <h2 className='text-white font-semibold text-[30px] mb-3 md:mb-4   w-full'>Versatility</h2> */}
                            <p className='text-white md:text-xl leading-relaxed  w-full'>
                            We understand what works and what doesn’t, as we've had the privilege of developing and launching our own products. This first-hand experience keeps us at the forefront of industry trends and ensures that we’re always ready to adapt to the ever-changing technological landscape. Whether you're looking for specialized skills or ongoing support, we have the right expertise to help your business succeed.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className='relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20'>
                    <div className=' '>
                        <h2 className='text-white font-semibold text-[30px] mb-3 md:mb-4'>International</h2>
                        <p className='text-gray-300 text-sm leading-relaxed  w-8/12'>
                        The DS global team is ready to work with you wherever you are. Our experience working with clients worldwide has taught us that sound business practices and humanity are universal regardless of timezone or language.
                        </p>
                    </div>

                    <div className='px-2 sm:px-3 md:pl-4 mt-8 sm:mt-12 md:mt-60  flex justify-end'>
                        <div className=' w-9/12'>
                            <h2 className='text-white font-semibold text-[30px] mb-3 md:mb-4   w-full'>Flexibility</h2>
                            <p className='text-gray-300 text-sm leading-relaxed   w-full'>
                            We value adaptability and involvement in our development process. We construct flexible and scalable applications in close collaboration with our development team and give feedback from the earliest stages of development.
                            </p>
                        </div>
                    </div>
                </div> */}


                {/* <div className='relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 '>
                    <div className=' '>
                        <h2 className='text-white font-semibold text-[30px] mb-3 md:mb-4 w-9/12'>Modern tech stack and development process</h2>
                        <p className='text-gray-300 text-sm leading-relaxed  w-8/12'>
                        Our skilled cross-functional team is driven to use the best development practices and the latest tech on the market. This dynamic combination lets us deliver the results you want in record time.
                        </p>
                    </div>

                    <div className='px-2 sm:px-3 md:pl-4 mt-8 sm:mt-12 md:mt-60  flex justify-end'>
                        <div className=' w-9/12'>
                            <h2 className='text-white font-semibold text-[30px] mb-3 md:mb-4   w-full'>Hands-on personal experience with SAAS startups</h2>
                            <p className='text-gray-300 text-sm leading-relaxed w-full'>
                            When it comes to SaaS development, we've done it all. We understand the problems and needs of startups, from the early development stages to post-launch activities.
                            </p>
                        </div>
                    </div>
                </div> */}

            </div>

            <div className='h-full mx-auto w-10/12  max-w-[1200px] py-8 sm:py-12 md:py-20'>

                {/* Hero Text */}
                <div className=' flex flex-col sm:flex-row justify-end mt-8 w-full space-y-4 sm:space-y-0 sm:space-x-2'>

                     <p className='font-semibold text-3xl sm:text-4xl md:text-6xl text-white md:w-6/12'>What can Estpl
                             <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>
                             <TypingEffect text=" help you with? " speed={30} /></span>
                                
                     </p>

                 </div>

                 <div className=" my-10 h-[50vh] relative">

                    <div className="border border-stone-400 md:absolute left-[20rem] lg:left-[30rem] rounded-md m-5 p-5 lg:w-3/12 group cursor-pointer">
                        <h2 className="text-white font-semibold text-2xl md:text-3xl flex gap-3 group-hover:text-red-500">
                        <MdOutlineArrowRight className="border mt-1.5 h-8 w-8 group-hover:bg-red-500 group-hover:text-white group-hover:border-none " />
                        <div>
                            Custom web<br />
                            development
                        </div>
                        </h2>
                    </div>

                    <div className="border border-stone-400 md:absolute top-[10rem] lg:top-[5rem] rounded-md m-5 p-5 lg:w-3/12 group cursor-pointer">
                        <h2 className="text-white font-semibold text-2xl md:text-3xl flex gap-3 group-hover:text-red-500">
                        <MdOutlineArrowRight className="border mt-1.5 h-8 w-8 group-hover:bg-red-500 group-hover:text-white group-hover:border-none " />
                        <div>
                             AI-powered development
                        </div>
                        </h2>
                    </div>

                    <div className="border border-stone-400 md:absolute left-[20rem] bottom-[5rem] lg:bottom-[2rem] rounded-md m-5 p-5 lg:w-3/12 group cursor-pointer">
                        <h2 className="text-white font-semibold text-2xl md:text-3xl flex gap-3 group-hover:text-red-500">
                        <MdOutlineArrowRight className="border mt-1.5 h-8 w-8 group-hover:bg-red-500 group-hover:text-white group-hover:border-none " />
                        <div>
                        
                                Mobile development
                        </div>
                        </h2>
                    </div>

                </div>

                <div className=" my-10 h-[50vh] relative">

                        <div className="border border-stone-400 md:absolute top-[8rem] lg:top-0 left-[5rem] lg:left-[45rem] rounded-md m-5 p-8 lg:w-3/12 group cursor-pointer">
                            <h2 className="text-white font-semibold text-2xl md:text-3xl flex gap-3 group-hover:text-red-500">
                            <MdOutlineArrowRight className="border mt-1.5 h-8 w-8 group-hover:bg-red-500 group-hover:text-white group-hover:border-none " />
                            <div>
                                    SaaS development
                            </div>
                            </h2>
                        </div>

                        <div className="border border-stone-400 md:absolute lg:top-[8rem] lg:left-[25rem] bg-black rounded-md m-5 p-8 lg:w-3/12 group cursor-pointer">
                            <h2 className="text-white font-semibold text-2xl md:text-3xl flex gap-3 group-hover:text-red-500">
                            <MdOutlineArrowRight className="border mt-1.5 h-8 w-8 group-hover:bg-red-500 group-hover:text-white group-hover:border-none " />
                            <div>
                                     Quality Assurance
                            </div>
                            </h2>
                        </div>

                        <div className="border border-stone-400 md:absolute bottom-[4rem] right-0 lg:left-[4rem] lg:bottom-0 rounded-md m-5 p-5 lg:w-3/12 group cursor-pointer">
                            <h2 className="text-white font-semibold text-2xl md:text-3xl flex gap-3 group-hover:text-red-500">
                            <MdOutlineArrowRight className="border mt-1.5 h-8 w-8 group-hover:bg-red-500 group-hover:text-white group-hover:border-none " />
                            <div>
                                UI/UX Design
                            </div>
                            </h2>
                        </div>

                </div>

                {/* <div className='flex flex-col lg:flex-row mx-auto w-10/12  max-w-[1200px] bg-[#1f2228] shadow-lg my-5'>
           
                        <div className='flex justify-center items-center md:top-0 p-5'>
                            <img 
                                src={estpl} 
                                alt="Diamond" 
                                className='w-full h-auto max-w-[300px]'
                                            />
                        </div>

                        <div className='flex flex-col justify-center py-10 lg:py-24 px-5 lg:px-10 '>
                                    <h1 className='font-bold text-[35px] md:text-[50px] text-white'>
                                    <TypingEffect text="We also have products of our own" speed={30} /></h1>
                                    <h3 className='font-semibold text-[20px] md:text-[20px] text-white'>
                                    <TypingEffect text="You can check them out here" speed={30} />
                                    </h3>
                                    <div className='mt-8 px-3 py-3 md:px-4 md:py-2 flex items-center gap-2 bg-red-500 text-white text-[12px] md:text-[15px] font-semibold rounded hover:bg-red-600 transition duration-300 w-[70%] md:w-[50%] group'>
                                        <button className="text-center">
                                            <HoverTypingEffect text="CHECK THEM OUT" speed={10} />
                                        </button>
                                        <span className="flex items-center justify-center bg-transparent text-white py-1 transition duration-300 group-hover:bg-white group-hover:text-red-600">
                                            <MdOutlineArrowRight />
                                        </span>
                        </div>
                                    




                        </div>


                </div> */}

            </div>

        </div>
    );
};

export default Card1;