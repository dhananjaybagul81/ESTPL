import React from 'react';
import Img1 from "../../assets/carrer1.jpg";

const AboutEstpl = () => {
  return (
    <div className="flex flex-col  bg-[#0f1115] w-full">
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-10 lg:py-16">

        <div className="flex flex-col items-center w-10/12  max-w-[1200px] ">
          <img src={Img1} alt="About ESTPL" className="w-full " />
        </div>
    
        <div className="flex items-center mt-10 lg:mt-20 mb-8 lg:mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 via-purple-700 to-red-500 bg-clip-text text-transparent lg:text-6xl font-semibold">About</span>
          <span className="text-white text-4xl lg:text-6xl font-semibold ml-2 lg:ml-3">Estpl</span>
        </div>

        <div className="max-w-4xl text-justify space-y-8 lg:space-y-12 px-4 lg:px-0">
          <p className="text-white text-lg lg:text-2xl leading-relaxed">
            Estpl is a software development company and a product studio. 
            Products of our own help us learn and polish our skills to excel 
            in the projects we deliver to our partners.
          </p>

          <p className="text-white text-lg lg:text-2xl leading-relaxed">
          We believe in learning by doing. By developing our own products and working with clients across diverse sectors, we constantly refine our skills, ensuring that we can deliver the best possible service for our partners.

          </p>

          <p className="text-white text-lg lg:text-2xl leading-relaxed">
          As part of the ESTPL team, you’ll work on innovative and challenging projects using the latest technologies to solve real-world problems. With a focus on growth, collaboration, and excellence, ESTPL provides an exciting environment to build a rewarding career in IT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutEstpl;
