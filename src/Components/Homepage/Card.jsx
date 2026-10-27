import React from 'react'
import Img1 from "../../assets/new/13.jpg";
import Img2 from "../../assets/new/14.jpg";
import { FaReact, FaAws } from "react-icons/fa6";
import { MdOutlineArrowRight } from 'react-icons/md';
import HoverTypingEffect from '../Animation/HoverTypingEffect';
const Card = () => {
  return (
    <div className='bg-white h-[100vh]'>
      <div className='flex flex-col justify-between gap-3 w-10/12 max-w-[1200px] mx-auto relative'>

      <div className=' bg-white border border-gray-500 cursor-pointer rounded-lg z-1 radius-lg lg:w-1/2 transition-transform hover:-rotate-2 active:-rotate-1 py-8 px-8 flex flex-col gap-4'>
        <img src={Img1} alt="Illustration" className="w-[700px] h-auto object-cover border " />
        <p className='font-bold text-[20px] md:text-[28px] group transition-transform hover:text-red-500 '>
          <MdOutlineArrowRight className='border group-hover:bg-red-500 group-hover:text-white group-hover:border-none' /> Aviation Solutions: Streamlining Airport Operations for a Leading Aviation Hub
        </p>
        {/* <h4 className='text-[14px] md:text-[20px]'>ITG Case Study</h4> */}
        <div className=' flex flex-col md:flex-row md:items-center md:justify-between'>        
            {/* <button className="md:mt-1 text-black border border-black px-8 py-1 text-sm rounded">SaaS Development</button> */}
            {/* <div className='mt-5 text-3xl flex items-center gap-3'>
                <FaReact/>
                <FaReact/>
                <FaReact/>
                <FaReact/>
            </div> */}
        </div>

      </div>

      <div className='bg-white lg:absolute top-96 right-0 border border-gray-500 cursor-pointer rounded-lg z-1 radius-lg lg:w-1/2 transition-transform hover:-rotate-2 active:-rotate-1 py-8 px-8 flex flex-col gap-4'>
        <img src={Img2} alt="Illustration" className="max-h-[300px] w-full h-auto object-cover " />
        <p className='font-bold text-[20px] md:text-[28px] group transition-transform hover:text-red-500'>
          <MdOutlineArrowRight className='border group-hover:bg-red-500 group-hover:text-white group-hover:border-none' /> Digital Marketing: Boosting Brand Visibility for a Global Retailer
        </p>
        <h4 className='text-[14px] md:text-[20px]'>We focused on building an authentic brand voice that resonated with the audience</h4>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>        
            {/* <button className="mt-1 text-black border border-black px-8 py-1 text-sm rounded">SaaS Development</button> */}
            {/* <div className='mt-5 text-3xl flex items-center gap-3'>
                <FaReact/>
                <FaReact/>
                <FaReact/>
                <FaReact/>
            </div> */}
        </div>

      </div>

      </div>


      
    </div>
  )
}

export default Card;
