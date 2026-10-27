import React, { useState, useEffect } from 'react';
import Img1 from "../../assets/Service1.png";
// import Img2 from "../../assets/servicei2.png";
import HoverTypingEffect from '../Animation/HoverTypingEffect';
import { MdOutlineArrowRight } from "react-icons/md";

import marketing from "../../assets/new/10.jpg"
import mobile from "../../assets/new/14.jpg"
import aviation from "../../assets/new/13.jpg"


const Servicecard = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [expanded, setExpanded] = useState({});
    const [slashCount, setSlashCount] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Handle the testimonial carousel
    const handleCardClick = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const toggleExpand = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    const testimonials = [
        { id: 1, name: "", text: "Computer Vision" },
        { id: 2, name: "", text: "Machine Learning" },
        { id: 3, name: "", text: "Natural Language Processing" },
        { id: 4, name: "", text: "LLM Development" },
        { id: 5, name: "", text: "Deep Learning" },
    ];

    const services = [
        {
            id: '001',
            title: 'Digital Marketing – Connection',
            description: 'Building brands that resonate. We create impactful digital strategies to enhance visibility and foster lasting audience relationships through targeted campaigns, SEO, and content marketing.',
            image: marketing,
            technologies: [
                { name: 'Python', icon: '🐍' },
                { name: 'TensorFlow', icon: '🧠' },
                { name: 'AWS', icon: '☁️' },
                { name: 'Pandas', icon: '📊' },
            ],
            keyFeature: 'Key Feature:',
        },
        {
            id: '002',
            title: 'Web Development – Foundation',
            description: 'Create interactive mobile apps and increase user engagement.',
            image: mobile,
            technologies: [
                { name: 'React', icon: '⚛️' },
                { name: 'Node.js', icon: '🌐' },
                { name: 'CSS', icon: '🎨' },
                { name: 'Python', icon: '🐍' },
            ],
            keyFeature: 'Key Feature:',
        },
        {
            id: '003',
            title: 'Mobile App Development – Innovation',
            description: 'Captivate on-the-go. Our cross-platform mobile apps offer seamless, user-friendly experiences that engage customers, anytime, anywhere.',
            image: mobile,
            technologies: [
                { name: 'React', icon: '⚛️' },
                { name: 'Node.js', icon: '🌐' },
                { name: 'CSS', icon: '🎨' },
                { name: 'Python', icon: '🐍' },
            ],
            keyFeature: 'Key Feature:',
        },
        {
            id: '004',
            title: 'Aviation Solutions – Efficiency',
            description: 'Precision in motion. From logistics to ground handling, our aviation solutions improve operational efficiency and elevate service standards for seamless airport operations',
            image:aviation,
            technologies: [
                { name: 'React', icon: '⚛️' },
                { name: 'Node.js', icon: '🌐' },
                { name: 'CSS', icon: '🎨' },
                { name: 'Python', icon: '🐍' },
            ],
            keyFeature: 'Key Feature:',
        },
    ];

    const generateSlashes = (width) => {
        const slashWidth = 3;
        const count = Math.max(2, Math.floor(width / slashWidth));
        return '/'.repeat(count);
    };

    useEffect(() => {
        const calculateSlashes = () => {
            const viewportWidth = window.innerWidth;
            setSlashCount(Math.floor(viewportWidth / 12));
        };

        calculateSlashes();
        window.addEventListener('resize', calculateSlashes);
        return () => window.removeEventListener('resize', calculateSlashes);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row bg-white w-10/12 max-w-[1200px] items-start mx-auto">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {services.map((service, index) => (
                    <div key={service.id} className="mb-32 last:mb-0">
                        <div className="text-sm text-gray-500 mb-4 text-left">
                            Service / {service.id}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14">
                            <div className="relative mt-8 p-4 w-full lg:w-[400px] lg:h-[400px] flex justify-center lg:justify-start">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full max-w-[300px] h-[350px] object-cover rounded-lg shadow-lg"
                                />
                            </div>

                            <div className="lg:col-span-2 lg:ml-20 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-4xl sm:text-2xl lg:text-4xl font-bold mb-8 whitespace-pre-line text-left">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg sm:text-2xl text-gray-700 mb-12 text-left">
                                        {service.description}
                                    </p>
                                    <h3 className="text-xl font-semibold sm:text-2xl mt-8 mb-4">
                                        {service.keyFeature}
                                    </h3>

                                    <div className="relative   flex-1 mt-2 sm:text-2xl">
                                        {testimonials.map((testimonial, index) => {
                                            const isActive = index === activeIndex;
                                            const position = (index - activeIndex + testimonials.length) % testimonials.length;
                                            const charLimit = 60;

                                            return (
                                                <div
                                                    key={testimonial.id}
                                                    onClick={handleCardClick}
                                                    className={`absolute w-full h-[120px]  bg-white p-8 rounded-[10px] shadow-lg border border-gray-300 cursor-pointer transition-all duration-500 ease-in-out ${position === 0 ? 'z-30 opacity-100' : 'opacity-0'}`}
                                                >
                                                    <p className="text-gray-600 text-[24px]">
                                                        {expanded[testimonial.id] ? testimonial.text : `${testimonial.text.slice(0, charLimit)}...`}
                                                        {testimonial.text.length > charLimit && (
                                                            <span onClick={() => toggleExpand(testimonial.id)} className="text-blue-500 cursor-pointer ml-1">
                                                                {expanded[testimonial.id] ? 'Show less' : 'Read more'}
                                                            </span>
                                                        )}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col mt-24 lg:mt-32 ">
                                <h3 className="text-xl font-semibold mb-4 text-center lg:text-right">
                                    Technology we use:
                                </h3>
                                <div className="flex flex-row flex-wrap justify-center lg:justify-end gap-4 ">
                                    {service.technologies.map((tech, idx) => (
                                        <div key={idx} className="w-12 h-12 flex items-center justify-center text-3xl rounded-lg hover:bg-gray-100 transition-colors duration-200" title={tech.name}>
                                            {tech.icon}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="w-full  hidden lg:flex justify-center items-center gap-4  overflow-hidden text-stone-400 text-center slash-animation" style={{ fontSize: '1.5rem', letterSpacing: '-0.15rem', lineHeight: '1', animation: 'reveal-slashes 2s linear forwards' }}>
                            <div className="flex-1 mt-32">
                                {generateSlashes(window.innerWidth)}&nbsp;&nbsp;
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Servicecard;
