import React from 'react'

const Working = () => {
  return (
    <div className="flex flex-col  w-full">
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-10 lg:py-16">

        <div className="flex items-start mb-10 lg:mb-20 text-center">
          <h1 className="text-4xl lg:text-7xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-700 to-red-500 bg-clip-text text-transparent">Working</span> <span>at Estpl</span>
          </h1>
        </div>
      
        <div className="max-w-4xl text-justify space-y-8 lg:space-y-12 px-4 lg:px-0">
          <p className="text-lg lg:text-2xl leading-relaxed">
          At ESTPL, we embrace a flexible work culture that allows our team members to work remotely from anywhere in the world. Here’s how we support your success:          </p>

          <p className="text-lg lg:text-2xl leading-relaxed">
          Flexible Work Hours: Start and finish your day at times that suit you, as long as you meet project goals and deadlines.          </p>

          <p className="text-lg lg:text-2xl leading-relaxed">
          Remote Collaboration: Our team stays connected through Slack and GSuite, ensuring seamless communication across borders.   </p>

          <p className="text-lg lg:text-2xl leading-relaxed">
          Support for Learning & Growth: We offer paid courses through top learning platforms, encouraging continuous growth and skill mastery.          </p>
        </div>
      </div>
    </div>
  )
}

export default Working;
