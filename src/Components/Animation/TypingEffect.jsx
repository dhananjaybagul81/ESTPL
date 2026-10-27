import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= text.length) return;

    const symbols = ['#', '%', '&', '$', '*', '@', '!', '^', '~', '∆', '≠', '∑', '¤'];
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    // First, show the random symbol
    const symbolTimer = setTimeout(() => {
      setDisplayedText(prev => 
        prev + randomSymbol
      );

      // Then, after a brief delay, show the actual character
      const characterTimer = setTimeout(() => {
        setDisplayedText(prev => 
          prev.slice(0, -1) + text[currentIndex]
        );
        setCurrentIndex(prev => prev + 1);
      }, speed / 2);

      return () => {
        clearTimeout(characterTimer);
      };
    }, speed);

    return () => {
      clearTimeout(symbolTimer);
    };
  }, [currentIndex, text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;