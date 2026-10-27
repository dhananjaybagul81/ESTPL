import React from 'react';
import TypingEffect from '../Animation/TypingEffect';
import HoverTypingEffect from '../Animation/HoverTypingEffect';
import { MdOutlineArrowRight } from "react-icons/md";
import estpl from "../../assets/estpl.png"
import about1 from "../../assets/about1.png"
const Checkout = () => {
    return (
        // <div className='grid grid-cols-1 md:grid-cols-2 mx-auto pl-40 pr-40 h-full p-8 w-[90vw]  mt-20 bg-[#edf2f3] shadow-lg'>
           
        //     <div className='flex flex-col justify-start  p-10 mb-10  '>
        //        <p className='flex justify-start font-extrabold text-[50px] leading-tight'>
        //        Check out some of our projects in our Case Studies section
        //        </p>
        //        <h1 className='font-semibold text-2xl'>and join our partner’s success stories!</h1>
        //         <button className='mt-8 bg-red-500 text-white p-2 w-[20vw] rounded-md'>
        //             GO TO CASE STUDIES
        //         </button>
        //     </div>
            
            
        //     <div className='flex justify-center items-center'>
        //         <img 
        //             src="https://via.placeholder.com/300" 
        //             alt="Diamond" 
        //             className='w-full h-auto max-w-[300px]'
        //         />
        //     </div>
        // </div>
        <div className='bg-white py-20 '>
        <div className='flex flex-col-reverse lg:flex-row gap-3 mx-auto w-10/12 max-w-[1200px] bg-[#edf2f3] shadow-lg'>
            {/* Text Content */}
            <div className='flex flex-col justify-center p-5 lg:p-20 lg:w-8/12'>
                <h1 className='font-bold text-[35px] md:text-[50px]'>
                <TypingEffect text="Explore our Case Studies to see how we’ve helped our partners succeed," speed={30} /></h1>
                <h3 className='font-semibold text-[20px] md:text-[20px]'>
                <TypingEffect text="and discover the stories behind their growth!" speed={30} />

                </h3>
                <div className='mt-8 px-3 py-3 md:px-4 md:py-2 flex items-center gap-2 bg-red-500 text-white text-[12px] md:text-[15px] font-semibold rounded hover:bg-red-600 transition duration-300 w-[70%] md:w-[100%] group'>
                    <button className="w-[80%] text-center">
                        <HoverTypingEffect text="Go to the case studies" speed={10} />
                    </button>
                    <span className="flex items-center justify-center bg-transparent text-white py-1 transition duration-300 group-hover:bg-white group-hover:text-red-600">
                        <MdOutlineArrowRight />
                    </span>
                </div>


            </div>
            
            {/* Image */}
            <div className='flex justify-center items-center p-5 md:top-0'>
                <img 
                    src={about1} 
                    alt="Diamond" 
                    className='w-full h-auto max-w-[300px]'
                />
            </div>
        </div>
        </div>

    );
}

export default Checkout;
