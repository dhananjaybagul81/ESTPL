import React, { useEffect, useState } from 'react';
import './Ourservices.css';
import { MdOutlineArrowRight } from 'react-icons/md';
import estpl from "../../assets/estpl.png"

const Ourservices = () => {
  const [slashCount, setSlashCount] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const generateSlashes = (width) => {
    const slashWidth = 3; // Width of each slash character
    const count = Math.max(2, Math.floor(width / slashWidth));
    return '/'.repeat(count);
  };

  useEffect(() => {
    const calculateSlashes = () => {
      const viewportWidth = window.innerWidth;
      setSlashCount(Math.floor(viewportWidth / 8));
    };

    calculateSlashes();
    window.addEventListener('resize', calculateSlashes);
    return () => window.removeEventListener('resize', calculateSlashes);
  }, []);

  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row w-10/12 max-w-[1200px] mx-auto bg-white">
        <div className="md:w-1/2 flex justify-center items-center  top-0 md:h-screen">
          <img
            src={estpl}
            alt="Service"
            className="w-full max-w-[300px] rounded-lg"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-between p-4">
          {/* Service sections */}
          {[
            {
              title: 'Digital Marketing',
              description:
                'In a competitive digital world, standing out is key. Our expert team at Engeniuspark Technologies creates customized digital marketing strategies that forge meaningful connections with your audience.',
            },
            {
              title: 'Custom Web Development',
              description:
                "Your website is the cornerstone of your online presence. We specialize in developing responsive, user-centric websites that not only look stunning but are optimized for performance.",
            },
            {
              title: 'Mobile App Development',
              description:
                'In today’s mobile-first era, your app needs to do more than just function—it needs to captivate. Our app development team creates high-performance, cross-platform apps for iOS and Android that deliver smooth, intuitive experiences.',
            },
            {
              title: 'Staffing',
              description:
                'With a talent-driven approach, we connect your business with the skilled professionals needed to drive success, ensuring each candidate is a perfect fit for your unique goals.',
            }
          ].map((service, index) => (
            <div key={index} className="service-section cursor-pointer">
              <div
                className={`w-full overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation ${
                  hoveredIndex === index ? 'animate-slash' : ''
                }`}
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '-0.15rem',
                  lineHeight: '1',
                  animation: 'reveal-slashes 2s linear forwards',
                  
                }}
              >
                {generateSlashes(window.innerWidth)}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 mb-8 mt-8 gap-3">
                <div className="flex flex-col">
                  <h1
                    className="font-semibold text-[30px] group transition-colors duration-300"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <span className="group-hover:text-red-500">
                      <MdOutlineArrowRight className="group-hover:bg-red-500 group-hover:text-white" />{' '}
                      {service.title}
                    </span>
                  </h1>
                </div>
                <div className="flex flex-col md:ml-4  my-auto">
                  <p data-aos="fade-up" className="text-gray-700 text-[12px]">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div
            className={`w-full hidden lg:block overflow-hidden text-stone-300 text-center whitespace-nowrap mt-5 slash-animation ${
              hoveredIndex !== null ? 'animate-slash' : ''
            }`}
            style={{
              fontSize: '0.8rem',
              letterSpacing: '-0.2rem',
              lineHeight: '1',
              animation: 'reveal-slashes 2s linear forwards',
            }}
          >
            {generateSlashes(window.innerWidth)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
