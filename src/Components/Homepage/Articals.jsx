import React from 'react';
import image1 from "../../assets/new/14.jpg"
import Img1 from "../../assets/15.png";
import Img2 from "../../assets/17.jpg";

const Articles = () => {
    const articles = [
        {
            id: 1,
            title: "The Power of User-Centric Development: Why It Matters for Your Business",
            description: "This article would discuss the importance of developing applications with a user-centered approach. It will highlight how understanding user needs and behaviors can drive design decisions and create more engaging, effective solutions.",
            image: Img1,
            author: "Viktoriya Poligenko",
            bgColor: "bg-blue-600"
        },
        {
            id: 2,
            title: "Choosing the Right Tech Stack for Your Project: A Guide for Businesses",
            description: "This article would provide an overview of how businesses can choose the right tech stack for their projects. ",
            image: Img2,
            author: "Viktoriya Poligenko",
            bgColor: "bg-purple-600"
        },
        {
            id: 3,
            title: "From Idea to Reality: The Journey of Building a Mobile Application",
            description: "Walk your audience through the mobile app development lifecycle, from initial concept to final deployment. This article would detail each stage of the process, showcasing Engeniuspark Technologies' expertise in delivering high-quality, scalable mobile apps for clients across industries.",
            image: image1,
            author: "Viktoriya Poligenko, Mariana Neagu",
            bgColor: "bg-red-600"
        }
    ];

    return (
        <div className='bg-white'>
         <div className="w-full px-4 sm:px-6 md:w-10/12 max-w-[1200px] mx-auto  py-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-black font-semibold mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                Stay Updated with Our Recent Articles


            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {articles.map((article) => (
                    <div
                        key={article.id}
                        className="cursor-pointer group flex flex-col rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden 
                                 transition-transform duration-300 hover:-translate-y-2 
                                 border border-gray-100 hover:shadow-xl"
                    >
                        {/* Image Container */}
                        <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                            <div className={`absolute inset-0`}></div>
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* Content Container */}
                        <div className="flex flex-col flex-grow p-4 sm:p-6 md:p-7 lg:p-4 bg-white">
                            <h2 className="text-xl sm:text-xl font-semibold mb-3 sm:mb-4 md:mb-6">
                                {article.title}
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-sm mb-4 sm:mb-6 md:mb-8 flex-grow">
                                {article.description}
                            </p>

                            {/* Author Section */}
                            <div className="flex items-center mt-auto">
                                <img
                                    src={article.image}
                                    alt={article.author}
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3"
                                />
                                <span className="text-xs sm:text-sm text-gray-500">
                                    {article.author}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Articles;