"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ShapeChangeSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"], // Animation center tak aate aate poori ho jayegi
  });

  // Scroll ke sath values change karna
  const width = useTransform(scrollYProgress, [0, 1], ["80%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["10px", "0px"]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [0.4, 0.6, 1]);

  return (
    <div
      ref={containerRef}
      className="h-[100vh] md:h-[200vh] flex  items-start justify-center bg-gray-100 pt-10"
    >
      <motion.div
        style={{
          width,
          borderRadius,
          scale,
        }}
        className="h-[100vh] md:h-[200vh] bg-black flex flex-col items-center justify-center overflow-hidden"
      >
        <h2 className="text-white text-4xl md:text-6xl font-bold text-center px-10 leading-tight">
          <motion.span
            className="inline-block pt-60 text-3xl md:text-8xl" // Ye sabse zaroori hai transform ke liye
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }} // Jab screen par aaye tab chale
            // Sirf ek baar animate ho
            transition={{ duration: 0.8, delay:0.4, ease: "easeOut" }}
          >
            WE SCALE YOUR
          </motion.span>

          <br />

          <motion.span
            className="inline-block pt-5 text-3xl md:text-8xl mt-6 text-[#B54118]" // Dusri line ko bhi animate karein
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
           
            transition={{ duration: 0.8, delay: 0.6 }} // Thora sa late aaye
          >
            DIGITAL PRESENCE
          </motion.span>

        
        </h2>
        <video
      src="/v-shape.mp4"
      autoPlay
      loop
      muted
      playsInline
      className=" object-cover"
    />
      </motion.div>
      
    </div>
  );
}
