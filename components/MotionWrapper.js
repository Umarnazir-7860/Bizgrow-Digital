"use client";

import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0, direction = "up", duration = 0.5 }) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },  // Ye right side se andar aata hai
    right: { x: -40, y: 0 }, // Ye left side se andar aata hai
    none: { x: 0, y: 0 }
  };

  return (
    /* 🔹 FIX: Wrapper jo overflow ko bahar nahi nikalne dega */
    <div className="w-full overflow-x-clip"> 
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
        viewport={{ once: true, margin: "-50px" }} // once: true performance ke liye behtar hai
        transition={{ 
          duration: duration, 
          delay: delay, 
          ease: "easeOut" 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}