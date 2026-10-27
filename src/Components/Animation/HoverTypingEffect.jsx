import React, { useState, useEffect, useCallback } from 'react';

const HoverTypingEffect = ({ text, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const symbols = ['#', '%', '&', '$', '*', '@', '!', '^', '~', '∆', '≠', '∑', '¤'];
  
  const resetAnimation = useCallback(() => {
    setDisplayedText(text);
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (!isAnimating) return;

    let timeoutId;
    
    if (currentIndex < text.length) {
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      
      setDisplayedText(prev => {
        const newText = prev.split('');
        newText[currentIndex] = randomSymbol;
        return newText.join('');
      });

      timeoutId = setTimeout(() => {
        setDisplayedText(prev => {
          const newText = prev.split('');
          newText[currentIndex] = text[currentIndex];
          return newText.join('');
        });
        setCurrentIndex(i => i + 1);
      }, speed);
    } else {
      setIsAnimating(false);
      setCurrentIndex(0);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isAnimating, currentIndex, text, speed, symbols]);

  return (
    <span
      onMouseEnter={() => {
        if (!isAnimating) {
          setIsAnimating(true);
        }
      }}
      onMouseLeave={() => {
        // Don't reset animation on mouse leave
        // Let it complete naturally
      }}
      className="inline-block"
      style={{ cursor: 'pointer' }}
    >
      {displayedText}
    </span>
  );
};

export default HoverTypingEffect;