"use client";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import FadeIn from "./MotionWrapper";

const HorizontalProcess = () => {
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection logic
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

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
    { id: "02", title: "DIGITAL", img: "/digital-marketing.jpg", tag: "MARKETING" },
    { id: "03", title: "CREATIVE", img: "/creative-design.jpg", tag: "DESIGN" },
    { id: "04", title: "DEVELOP", img: "/coding.jpg", tag: "CODING" },
  ];

  // Mobile par height auto hogi, desktop par long height animation ke liye
  const sectionHeightVh = isMobile ? "auto" : (sections.length + 1) * 100;

  return (
    <section
      ref={targetRef}
      style={{ height: isMobile ? "auto" : `${sectionHeightVh}vh` }}
      className="relative bg-white dark:bg-black overflow-visible py-20 md:py-0"
    >
      {/* Sticky container sirf desktop par active hoga */}
      <div className={`${isMobile ? 'relative' : 'sticky top-0 h-screen w-full flex items-center overflow-hidden'}`}>
        
        {/* --- MAIN HEADING --- */}
        <div className={`${isMobile ? 'relative mb-12' : 'absolute top-10 left-0 w-full z-20 pointer-events-none'}`}>
          <motion.div className="text-center">
            <FadeIn direction="up" delay={0.2}>
              <h3 className="text-[#B54118] font-bold tracking-[0.5em] text-xs md:text-sm mt-5 mb-2">
                OUR WORKFLOW
              </h3>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <h2 className="text-3xl md:text-4xl dark:text-white font-black text-slate-900 uppercase">
                How We Bring Results
              </h2>
            </FadeIn>
            <div className="w-12 h-1 bg-[#B54118] mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* --- CONTENT WRAPPER --- */}
        <motion.div 
          style={{ x: isMobile ? 0 : x }} 
          className={`flex ${isMobile ? 'flex-col px-6 gap-24' : 'will-change-transform'}`}
        >
          {sections.map((item) => (
            <div 
              key={item.id} 
              className={`relative flex-shrink-0 flex flex-col md:flex-row items-center justify-between 
              ${isMobile ? 'w-full' : 'h-screen w-screen p-10 md:pt-40'}`}
            >
              {/* Text Side */}
              <div className="z-10 w-full md:w-1/2 mb-8 md:mb-0">
                <FadeIn direction={isMobile ? "up" : "right"} delay={0.2}>
                  <span className="text-[#B54118] font-bold tracking-[0.3em] uppercase text-sm md:text-base">
                    <span>{item.id}</span> {item.tag}
                  </span>
                </FadeIn>
                <FadeIn direction={isMobile ? "up" : "right"} delay={0.4}>
                  <h2 className="text-5xl sm:text-6xl md:text-[7rem] font-black dark:text-white text-slate-900 leading-none mt-4">
                    {item.title}
                  </h2>
                </FadeIn>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10"
                />
                {/* Background Shadow Number */}
                <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 text-[6rem] md:text-[10rem] font-black text-slate-100 dark:text-white/5 z-0 opacity-60 md:opacity-40">
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