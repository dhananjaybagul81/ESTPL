import React from "react";
import { motion } from "framer-motion";
import "./AnimatedLink.css"; // Import CSS file for additional styling

const AnimatedLink = ({ text, href }) => {
  const letters = text.split("");

  return (
    <a href={href} className="animated-link">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="animated-letter"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={{
            rest: {
              y: 0,
              color: "#333",
            },
            hover: {
              y: [-2, 0], // A small upward motion for each letter
              color: ["#FF0000", "#333"], // Sweep from red to black
              transition: {
                duration: 0.8,
                delay: index * 0.03,
                type: "spring",
              },
            },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </a>
  );
};

export default AnimatedLink;
