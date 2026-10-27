import React from 'react'

const Heroes = () => {
    return (
        <div className='bg-[#edf2f3]'>
            <div className=''>
            <div className="flex flex-col lg:flex-row bg-[#edf2f3] w-10/12 max-w-[1200px] items-start mx-auto">
                <div className="flex-1  lg:p-10 flex flex-col justify-start">
                    <p className='text-4xl md:text-6xl lg:text-[70px] md:h-[200px] font-semibold leading-none max-w-[800px] bg-gradient-to-r from-blue-400 via-purple-700 to-red-500 bg-clip-text text-transparent'>
                      <span className='text-black'>ESTPL </span>  <br />

                        career opportunities

                    </p>
                </div>

                <div className="flex flex-col md:mt-10 lg:mt-20 w-full lg:w-[40vw] p-6 lg:p-10 lg:relative lg:right-4">
                    <div className="flex justify-start lg:justify-end items-center">
                        <p className="text-md lg:text-2xl font-bold p-2 lg:p-4">
                        Join our team and build a successful career in IT!
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Heroes;
