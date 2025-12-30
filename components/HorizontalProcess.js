"use client";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const HorizontalProcess = () => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress to avoid jitter on fast scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // 1. STAY & PIN LOGIC (segmented ranges):
  // We create dead-zones where each card pauses in center, and ensure the last
  // card is pinned from 0.8 -> 1.0 (no sliding out).
  const inputRange = [0, 0.05, 0.2, 0.4, 0.55, 0.75, 0.85, 1];
  const outputRange = [
    "0vw", // hold first
    "0vw",
    "-100vw", // transition to second
    "-100vw", // hold second
    "-200vw", // transition to third
    "-200vw", // hold third
    "-300vw", // transition to fourth
    "-300vw", // pin fourth until end
  ];

  const x = useTransform(smoothProgress, inputRange, outputRange);

  const sections = [
    { id: "01", title: "STRATEGY", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026", tag: "PLANNING" },
    { id: "02", title: "DIGITAL", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070", tag: "MARKETING" },
    { id: "03", title: "CREATIVE", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964", tag: "DESIGN" },
    { id: "04", title: "DEVELOP", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072", tag: "CODING" },
  ];

  // Height sync: set section height to (sections.length + 1) * 100vh so the
  // final card can remain pinned with no white gap after scrolling.
  const sectionHeightVh = (sections.length + 1) * 100; // e.g., 5 * 100 = 500vh for 4 cards

  return (
    <section
      ref={targetRef}
      style={{ height: `${sectionHeightVh}vh` }}
      className="relative bg-white overflow-visible"
    >
      
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        <motion.div 
          style={{ x }} 
          className="flex will-change-transform"
        >
          {sections.map((item, index) => (
            <div 
              key={item.id} 
              className="relative h-screen w-screen flex flex-col md:flex-row items-center justify-between p-10 md:p-24 flex-shrink-0"
            >
              <div className="z-10 w-full md:w-1/2">
                <span className="text-[#B54118] font-bold tracking-[0.3em] uppercase text-sm">
                  {item.tag}
                </span>
                <h2 className="text-6xl md:text-[8rem] font-black text-slate-900 leading-none mt-4">
                  {item.title}
                </h2>
              </div>

              <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-10 -left-10 text-[10rem] font-black text-slate-100 -z-10 opacity-40">
                  {item.id}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalProcess;