import React from 'react';

const Corevalue = () => {
    return (
        <div className=''>
          <div className="flex h-full w-10/12 max-w-[1200px] mx-auto relative">
            <div className="lg:p-8 mt-20 text-justify mb-40"> {/* Adjusted bottom margin */}
                <h1 className="text-[4rem] md:text-[6rem] lg:text-[12rem] font-extrabold leading-none">
                    CORE <br /> <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>VALUES</span>
                </h1>
                <div className='flex lg:justify-end pt-20'>        
                    <p className="text-gray-800 lg:w-8/12 text-2xl md:text-5xl text-start font-semibold">
                        At ESTPL, our work is rooted in a shared passion for <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>technology </span> and <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>guided </span> by principles that drive our team’s commitment to <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>quality, </span> <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>integrity, </span> and <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>success. </span>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Corevalue;
