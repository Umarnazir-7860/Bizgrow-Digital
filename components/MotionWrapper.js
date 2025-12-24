"use client";

import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0, direction = "up", duration = 0.5 }) {
  // Direction decide karne ka logic
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: directions[direction].x, 
        y: directions[direction].y 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{  margin: "-50px" }} // Jab 50px screen par aaye tab start ho
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
}