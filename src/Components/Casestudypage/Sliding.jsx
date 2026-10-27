import { useState, useEffect } from 'react';
import React from 'react';
import { MdOutlineArrowRight } from "react-icons/md";
import HoverTypingEffect from '../Animation/HoverTypingEffect';
import TypingEffect from '../Animation/TypingEffect';
import Img1 from "../../assets/Casei1.png";
import Img2 from "../../assets/Casei2.png";
import Img3 from "../../assets/Casei3.png";
import Img4 from "../../assets/Casei4.png";
import Img5 from "../../assets/Casei5.png";

import marketing from "../../assets/new/10.jpg";
import mobile from "../../assets/new/14.jpg";
import aviation from "../../assets/new/13.jpg"


const Sliding = () => {
    const [slashCount, setSlashCount] = useState(0);

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

    const details = [
        {
            title: 'Digital Marketing: Boosting Brand Visibility for a Global Retailer',
            description: 'ESTPLs digital marketing team crafted a tailored strategy that included search engine optimization (SEO), content marketing, social media engagement, and targeted paid advertising. We focused on building an authentic brand voice that resonated with the audience and executed engaging campaigns across multiple digital channels.',
            image: marketing,
            Button: 'SaaS Development',
            technologies: [
                { name: 'Python', icon: '🐍' },
                { name: 'TensorFlow', icon: '🧠' },
                { name: 'AWS', icon: '☁️' },
                { name: 'Pandas', icon: '📊' },
                { name: 'R', icon: '📈' },
            ],
        },
        {
            title: 'Mobile App Development: Revolutionizing Customer Experience for a Fintech Startup',
            description: 'ESTPLs mobile app development team built a cross-platform app using the latest technologies to ensure a seamless, user-friendly interface. The app was designed with enhanced security features, real-time updates, and personalized user experiences',
            image: mobile,
            Button: 'SaaS Development',
            technologies: [
                { name: 'Python', icon: '🐍' },
                { name: 'TensorFlow', icon: '🧠' },
                { name: 'AWS', icon: '☁️' },
                { name: 'Pandas', icon: '📊' },
                { name: 'R', icon: '📈' },
            ],
        },
        {
            title: 'Aviation Solutions: Streamlining Airport Operations for a Leading Aviation Hub',
            description: 'ESTPL provided a suite of aviation solutions that streamlined ground handling, baggage tracking, flight monitoring, and customer service systems. By integrating IoT devices and real-time data analytics, we optimized operations and improved communication between different departments.',
            image: aviation,
            Button: 'SaaS Development',
            technologies: [
                { name: 'Python', icon: '🐍' },
                { name: 'TensorFlow', icon: '🧠' },
                { name: 'AWS', icon: '☁️' },
                { name: 'Pandas', icon: '📊' },
                { name: 'R', icon: '📈' },
            ],
        },
       
      
    ];

    return (
        <div className='bg-[#edf2f3] p-4'>
            <div className="flex flex-col lg:flex-row w-full max-w-[1200px] mx-auto">
                <div className='flex flex-col lg:grid lg:grid-cols-3 gap-4'>
                    
                    <div className='lg:col-span-1 lg:sticky lg:top-24 lg:h-[100vh] flex flex-col justify-between'>
                        <div>
                            <ul className="text-left">
                                <li className='text-red-500 font-bold'>/ all</li>
                            </ul>
                        </div>
                        <div className='mt-4 lg:mt-auto'>
                            <p className='text-sm lg:text-base'>
                                The software that we build takes our clients to the next level!
                            </p>
                            <div className='mt-4 px-3 py-3 flex items-center gap-2 bg-red-500 text-white text-xs lg:text-sm font-semibold rounded hover:bg-red-600 transition duration-300 w-[80%] lg:w-[60%]'>
                                <button className="w-full text-center">
                                    <HoverTypingEffect text="BOOK A FREE CONSULTATION" speed={30} />
                                </button>
                                <span className="flex items-center justify-center">
                                    <MdOutlineArrowRight />
                                </span>
                            </div>
                        </div>
                    </div>

                    
                    <div className='lg:col-span-2'>
                        {details.map((detail, index) => (
                            <div key={index} className="mb-10">
                                <h1 className='text-4xl lg:text-4xl font-bold hover:text-red-500 transition-colors mb-4 flex items-center justify-between'>
                                    <TypingEffect text={detail.title} speed={70} />
                                    <span className="flex items-center justify-center bg-transparent text-black-500 py-1 px-2 border border-black ml-2 transition duration-300 hover:bg-white hover:text-red-600">
                                        <MdOutlineArrowRight size={24} />
                                    </span>
                                </h1>

                                <div className='flex flex-col md:flex-row gap-8'>
                                    <div className="w-full md:w-2/3 ">
                                    <img src={detail.image} alt={detail.title} className='w-full h-[30vh] sm:h-[50vh] object-cover rounded-[30px]' />

                                    </div>

                                    <div className="w-full md:w-2/3 flex flex-col justify-between">
                                        <p className='text-gray-700 text-sm lg:text-base'>
                                            {detail.description}
                                        </p>
                                        <span className='inline-block border border-black bg-white text-black text-sm lg:text-base px-3 py-2 mt-4 lg:mt-8 w-full md:w-auto'>
                                            {detail.Button}
                                        </span>

                                        <ul className='flex flex-wrap gap-2 mt-4 lg:mt-8'>
                                            {detail.technologies.map((tech, techIndex) => (
                                                <li key={techIndex} className='flex items-center'>
                                                    <span className='w-8 h-12 flex items-center justify-center text-3xl rounded-lg hover:bg-gray-100 transition-colors duration-200'>
                                                        {tech.icon}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="w-full overflow-hidden text-stone-400 text-center whitespace-nowrap mt-8"
                                    style={{
                                        fontSize: '1rem',
                                        letterSpacing: '-0.1rem',
                                        lineHeight: '2',
                                    }}
                                >
                                    {generateSlashes(window.innerWidth)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sliding;
