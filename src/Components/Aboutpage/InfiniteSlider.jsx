import React, { useEffect, useState } from 'react';
import image1 from "../../assets/new/05.jpg"
import image2 from "../../assets/new/02.png"

const InfiniteSlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Define your slider items - you can add more images/colors as needed
  const sliderItems = [
    { bgColor: 'bg-red-400', width: 'w-64', height: 'h-64', image : image1 },
    { bgColor: 'bg-blue-500', width: 'w-96', height: 'h-72' , image : image2 },
    { bgColor: 'bg-blue-500', width: 'w-[600px]', height: 'h-96' , image : image1 },
    { bgColor: 'bg-red-400', width: 'w-64', height: 'h-64'  ,image : image2 },
    { bgColor: 'bg-blue-500', width: 'w-96', height: 'h-72' , image : image1 }
  ];

  useEffect(() => {
    const animate = () => {
      setScrollPosition(prev => (prev - 0.5) % (sliderItems.length * 100));
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
    
  }, [sliderItems.length]);

  return (
    <div className="overflow-hidden w-full  bottom-0 left-0">
      <div 
        className="flex gap-8 py-8"
        style={{ 
          transform: `translateX(${scrollPosition}px)`,
          width: 'fit-content'
        }}
      >
        {/* Double the items to create seamless loop */}
        {[...sliderItems, ...sliderItems].map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} ${item.width} ${item.height} rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300`}
          >
            {/* <img 
              src={`/api/placeholder/${item.width.replace('w-', '')}/${item.height.replace('h-', '')}`} 
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            /> */}

            <img 
              src={item.image} 
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />

          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;