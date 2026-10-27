import React from 'react'
import { MdOutlineArrowRight } from 'react-icons/md';
import HoverTypingEffect from '../Animation/HoverTypingEffect';
const AllCases = () => {
  return (
    <div className='bg-white'>
        <div className='h-[40vh] md:h-[25vh] lg:h-[60vh] w-10/12 max-w-[1200px] mx-auto flex justify-end items-end gap-10'>
            <p className='text-[18px] lg:w-[30%] font-semibold'>The software that we build takes our clients to the next level!</p>
                     <div className='px-3 py-3 md:px-4 md:py-2 h-[50px] flex items-center gap-2 bg-black text-red-500 text-[12px] md:text-[15px] font-semibold rounded hover:bg-red-600 hover:text-white transition duration-300 w-[70%] md:w-[30%] group'>
                        <button className="text-center">
                            <HoverTypingEffect text="ALL CASES" speed={10} />
                        </button>
                        <span className="flex items-center justify-center bg-transparent text-white py-1 transition duration-300 group-hover:bg-white group-hover:text-red-600">
                            <MdOutlineArrowRight />
                        </span>
                    </div>
        </div>
    </div>
  )
}

export default AllCases