"use client";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./MotionWrapper";

const HorizontalProcess = () => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

 // 🔹 Shivering kam karne ke liye stiffness/damping adjust ki
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70, 
    damping: 30,
    restDelta: 0.001
  });

  const inputRange = [0, 0.05, 0.2, 0.4, 0.55, 0.75, 0.85, 1];
  const outputRange = ["0vw", "0vw", "-100vw", "-100vw", "-200vw", "-200vw", "-300vw", "-300vw"];

  const x = useTransform(smoothProgress, inputRange, outputRange);

  const sections = [
    { id: "01", title: "STRATEGY", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026", tag: "PLANNING" },
    { id: "02", title: "DIGITAL", img: "digital-marketing.jpg", tag: "MARKETING" },
    { id: "03", title: "CREATIVE", img: "creative-design.jpg", tag: "DESIGN" },
    { id: "04", title: "DEVELOP", img: "coding.jpg", tag: "CODING" },
  ];

  const sectionHeightVh = (sections.length + 1) * 100;

  return (
    <section
      ref={targetRef}
      style={{ height: `${sectionHeightVh}vh` }}
      className="relative bg-white overflow-visible"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* --- MAIN HEADING (Top Center) --- */}
        <div className="absolute top-15 left-0 w-full z-20  pointer-events-none" style={{ transform: 'translateZ(0)' }}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
             <FadeIn direction="up" delay={0.2}>
            <h3 className="text-[#B54118] pointer-events-none font-bold tracking-[0.5em] text-xs md:text-sm mt-5 mb-2">
              OUR WORKFLOW
            </h3>
            </FadeIn>
             <FadeIn direction="up" delay={0.4}>
            <h2 className="text-2xl md:text-4xl dark:text-white font-black text-slate-900 uppercase">
              How We Bring Results
            </h2>
            </FadeIn>
              <FadeIn direction="up" delay={0.6}>
            <div className="w-12 h-1 bg-[#B54118] mx-auto mt-4 rounded-full" /></FadeIn>
          </motion.div>
        </div>

        <motion.div 
          style={{ x }} 
          className="flex will-change-transform dark:bg-black"
        >
          {sections.map((item) => (
            <div 
              key={item.id} 
              className="relative  mt-64 md:mt-0 h-screen w-screen flex flex-col md:flex-row items-center justify-between p-10 md:pt-40 flex-shrink-0"
            >
              <div className="z-10 w-full md:w-1/2">
               <FadeIn direction="right" delay={0.2}>
                <span className="text-[#B54118] font-bold tracking-[0.3em] uppercase text-sm">
                   <span>{item.id}</span> {item.tag}
                </span>
                </FadeIn>
                 <FadeIn direction="right" delay={0.4}>
                <h2 className="text-5xl  md:text-[7rem] font-black dark:text-white text-slate-900 leading-none mt-4">
                  {item.title}
                </h2>
                </FadeIn>
              </div>

              <div className="w-full md:w-1/2 h-[45vh] md:h-[60vh] relative md:mt-0">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-2xl -mt-40 md:mt-0 shadow-2xl"
                />
                <div className="absolute -bottom-10 -left-10 text-[8rem] md:text-[10rem] font-black text-slate-100 -z-10 opacity-40">
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