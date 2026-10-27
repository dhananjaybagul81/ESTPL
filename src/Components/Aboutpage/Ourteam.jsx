import React from 'react';
import Img2 from "../../assets/Abouti1.png";
import TypingEffect from '../Animation/TypingEffect';

const Ourteam = () => {
    return (
        <div className='bg-[#0f1115]'>
            <div className="flex flex-col min-h-screen  w-10/12 max-w-[1200px] mx-auto">

            <div className="flex flex-col items-center justify-center flex-grow px-4 lg:py-16">

                <div className="lg:mt-14 mb-8 flex flex-col lg:flex-row gap-5">
                    <p className="text-white text-2xl md:text-5xl lg:w-8/12">
                            At the heart of ESTPL are
                            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                                <TypingEffect text=" three founders " speed={30} />
                            </span>driven by a shared passion for innovation.<span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                                <TypingEffect text=" innovation " speed={30} />
                            </span> 
                            {/* <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                                <TypingEffect text=" results-oriented working climate." speed={30} />
                            </span> */}
                    </p>
                    <p className='text-white lg:w-3/12 '>Driven by passion, our team consistently delivers products that exceed expectations.</p>
                </div>

                {/* <div className='flex flex-col  items-center'>
                    <img src={Img2} alt="About ESTPL" />
                </div> */}

            </div>
            </div>
        </div>
    );
};

export default Ourteam;