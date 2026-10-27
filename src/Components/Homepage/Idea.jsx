import React from 'react';
import TypingEffect from '../Animation/TypingEffect';
import HoverTypingEffect from '../Animation/HoverTypingEffect';
import { MdOutlineArrowRight } from "react-icons/md";
import diamond from "../../assets/diamondimage.png"
const Idea = () => {
    return (
        <div className='bg-white py-20 '>
        <div className='flex flex-col-reverse md:flex-row mx-auto w-10/12  max-w-[1200px] bg-[#edf2f3] shadow-lg'>
            {/* Text Content */}
            <div className='flex flex-col  justify-center p-5 md:p-10 lg:p-24 '>
                <h1 className='font-bold text-[35px] md:text-[50px]'>
                <TypingEffect text="Looking to Innovate?" speed={30} /></h1>
                <h3 className='font-semibold text-[20px] md:text-[20px]'>
                <TypingEffect text="We’ve got the expertise to make it happen." speed={30} />

                </h3>
                <div className='mt-8 px-3 py-3 md:px-4 md:py-2 flex items-center gap-2 bg-red-500 text-white text-[12px] md:text-[15px] font-semibold rounded hover:bg-red-600 transition duration-300 w-[100%] lg:w-[100%] group'>
                    <button className="w-[80%] text-center">
                        <HoverTypingEffect text="CLICK FOR A FREE CONSULTATION" speed={10} />
                    </button>
                    <span className="flex items-center justify-center bg-transparent text-white py-1 transition duration-300 group-hover:bg-white group-hover:text-red-600">
                        <MdOutlineArrowRight />
                    </span>
                </div>
                

 


            </div>
            
            {/* Image */}
            <div className='flex justify-center items-center md:sticky md:top-0'>
                <img 
                    src={diamond} 
                    alt="Diamond" 
                    className='w-full h-full max-w-[400px] rotate-animation'
                />
            </div>

        </div>
        </div>
    );
}

export default Idea;
