import React from 'react';
import Bgimg from "../../assets/Servicebg.png";

const Ourpartner = () => {
    return (
        <div className='bg-black py-10'>
        <div className='text-white w-10/12 max-w-[1200px] mx-auto p-4 '>
            <div className='flex mt-17   flex-col  text-justify'>
                <p className='text-2xl mb-20 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    <span className='text-white'>Our entrusted </span> <span className=' bg-gradient-to-r from-blue-300 via-purple-500 to-red-600 bg-clip-text text-transparent'>partners!</span>
                    
                </p>
                <div className="flex justify-center  mb-17   ">
                    <img
                        src={Bgimg}
                        alt="Partner Background"

                    />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Ourpartner;
