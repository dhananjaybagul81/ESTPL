import React, { useEffect, useRef, useState } from 'react';
import './CubicImageLoader.css';
import cube1 from "../../assets/cube/cube1.png";
import cube2 from "../../assets/cube/cube2.png";
import cube3 from "../../assets/cube/cube3.png";
import cube4 from "../../assets/cube/cube4.png";
import cube5 from "../../assets/cube/cube5.png";
import cube6 from "../../assets/cube/cube6.png";
import cube7 from "../../assets/cube/cube7.png";
import cube8 from "../../assets/cube/cube8.png";
import cube9 from "../../assets/cube/cube9.png";
import cube10 from "../../assets/cube/cube10.png";
import cube11 from "../../assets/cube/cube11.png";
import cube12 from "../../assets/cube/cube12.png";
import cube13 from "../../assets/cube/cube13.png";
import cube14 from "../../assets/cube/cube14.png";
import cube15 from "../../assets/cube/cube15.png";
import cube16 from "../../assets/cube/cube16.png";
import cube17 from "../../assets/cube/cube17.png";
import cube18 from "../../assets/cube/cube18.png";
import cube19 from "../../assets/cube/cube19.png";
import cube20 from "../../assets/cube/cube20.png";

const images = [cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10, cube11, cube12, cube13, cube14, cube15, cube16, cube17, cube18, cube19, cube20];

const CubicImageLoader = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      // Calculate the scroll position relative to the container's absolute position
      const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = window.scrollY - containerTop;

      // Set a small scrollable height to show all images within a shorter range
      const totalScrollableHeight = window.innerHeight;
      const imageHeight = totalScrollableHeight / images.length;

      // Calculate the image index based on the scroll position
      const newIndex = Math.floor(scrollPosition / imageHeight);

      // Update the index if it's different and within bounds
      if (newIndex >= 0 && newIndex < images.length && newIndex !== currentImageIndex) {
        setCurrentImageIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentImageIndex]);

  return (
    <div className='w-4/12 border' ref={containerRef} style={{ height: '0vh', position: 'relative' }}>
      <div className="sticky top-0 h-screen flex justify-center items-center">
        <img
          src={images[currentImageIndex]}
          alt={`Cube ${currentImageIndex + 1}`}
          className="max-h-full w-auto transition-opacity duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default CubicImageLoader;