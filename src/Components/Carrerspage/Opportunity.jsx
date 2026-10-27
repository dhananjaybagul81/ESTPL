import React from 'react';
import Img2 from "../../assets/carrer2.png";
const Opportunity = () => {
    return (
        <div className=" bg-[#0f1115] w-full px-4 md:px-6 lg:px-8">
            <div className="container mx-auto flex flex-col items-center justify-center py-8 md:py-12 lg:py-16">
               
                <div className='w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw] mb-8 md:mb-12'>
                <img src={Img2} alt="About ESTPL" className="w-full h-auto" />
                </div>

             
                <div className="w-full max-w-4xl text-left md:text-justify mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-700 to-red-500 bg-clip-text text-transparent">Why Join</span>
                        <span className="text-white ml-2"> ESTPL?</span>
                    </h1>
                </div>

                {/* Content Section */}
                <div className="w-full max-w-4xl space-y-6 md:space-y-8 lg:space-y-12">
                    {/* Job Title */}
                    {/* <h2 className='font-bold text-white underline text-2xl md:text-3xl lg:text-4xl'>
                        Backend team-lead
                    </h2> */}

                    {/* Job Description */}
                    <p className="text-white text-base md:text-xl lg:text-2xl leading-relaxed">
                    Work on exciting, impactful projects using innovative technologies.
                    </p>


                    <p className="text-white text-base md:text-xl lg:text-2xl leading-relaxed">

                    Be a part of a global team with diverse expertise and perspectives.
                    </p>


                    <p className="text-white text-base md:text-xl lg:text-2xl leading-relaxed">

                    We’re always on the lookout for talented individuals to join our growing team. If you’re ready to take your career to the next level, we’d love to hear from you!

                    </p>
                    {/* Tech Stack */}
                    {/* <div className="text-white text-base md:text-xl lg:text-2xl leading-relaxed">
                        <p className="mb-4">Tech-stack:</p>
                        <ul className="list-none space-y-2">
                            <li>
                                <span className="text-blue-500">Core:</span> JavaScript, Node.js, 
                                Apollo GraphQL, Gitlab
                            </li>
                            <li>
                                <span className="text-blue-500">AWS Services:</span>
                            </li>
                            <li className="pl-4">
                                • AWS ECS, EC2, IAM
                                <br />
                                • Systems Manager, Batch, Athena
                                <br />
                                • RDS (PostgreSQL), Kinesis, Kinesis Firehose
                                <br />
                                • AppFlow, SQS, Lambda
                                <br />
                                • S3, EventBridge
                            </li>
                        </ul>
                    </div> */}

                    {/* Optional: Apply Button */}
                    <div className="pt-8 md:pt-12">
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg 
                            text-lg md:text-xl hover:bg-blue-600 transition-colors
                            w-full md:w-auto">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Opportunity;