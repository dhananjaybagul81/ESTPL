import React, { useEffect, useState } from 'react';

const TextRevealAnimation = ({ text, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure animation triggers after component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <span 
      className={`inline-block transform transition-all duration-1000 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-full opacity-0'
      } ${className || ''}`}
    >
      {text}
    </span>
  );
};

export default TextRevealAnimation;