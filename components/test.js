"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ShapeChangeSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"] // Animation center tak aate aate poori ho jayegi
  });

  // Scroll ke sath values change karna
  const width = useTransform(scrollYProgress, [0, 1], ["80%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div ref={containerRef} className="h-[150vh] flex items-start justify-center bg-gray-100 pt-20">
      <motion.div
        style={{
          width,
          borderRadius,
          scale,
        }}
        className="h-[60vh] bg-black flex items-center justify-center overflow-hidden"
      >
        <h2 className="text-white text-4xl md:text-6xl font-bold text-center px-10">
          ENGAGEMENT <br /> OF THE
        </h2>
      </motion.div>
    </div>
  );
}