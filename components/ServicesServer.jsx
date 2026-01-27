"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./MotionWrapper";

export default function ServicesSection() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const visibleCards = [
    { 
      title: "Website Development", 
      img: "/web-development2.jpg", 
      alt: "Website Development - BizGrowDigital",
      desc: "High-performance websites designed to attract, engage, and convert." 
    },
    { 
      title: "Search Engine Optimisation", 
      img: "/SEO.jpg", 
      alt: "Search Engine Optimisation - BizGrowDigital",
      desc: "Data-driven SEO strategies that increase visibility and drive qualified traffic." 
    },
    { 
      title: "Digital Marketing", 
      img: "/Social media.jpg", 
      alt: "Digital Marketing - BizGrowDigital",
      desc: "Integrated digital marketing strategies designed to grow reach, leads, and revenue." 
    },
    { 
      title: "Creative Content", 
      img: "/creative.jpg", 
      alt: "Creative Content - BizGrowDigital",
      desc: "Compelling content crafted to engage audiences and strengthen your brand." 
    },
    { 
      title: "Graphic Design", 
      img: "/graphic-design.jpg", 
      alt: "Graphic Design - BizGrowDigital",
      desc: "Professional graphic design that communicates your brand with clarity." 
    },
  ];

  return (
    <section ref={container} className="relative w-full h-[300vh] md:h-[400vh] bg-[#F2E8D5] dark:bg-black dark:border-b-2 dark:border-orange-700">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* --- Heading: Optimized Spacing --- */}
        <div className="text-center z-10 w-full px-6 flex flex-col items-center mb-4 md:mb-8">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-6xl lg:text-6xl mt-8 text-[#B54118] font-black uppercase tracking-tighter leading-none pt-10">
              Our Digital Services
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-black dark:text-white mt-4 text-sm md:text-[16px] font-medium max-w-xl mx-auto opacity-90">
              Empowering your business to thrive online with tailored digital solutions.
            </p>
          </FadeIn>
        </div>

        {/* --- Cards Wrapper: Fully Responsive Container --- */}
        <div className="relative w-full max-w-6xl px-4 h-[55vh] md:h-[50vh] flex items-center justify-center">
          {visibleCards.map((card, idx) => {
            const start = idx * 0.18;
            const end = start + 0.25;
            return (
              <Card
                key={idx}
                i={idx}
                {...card}
                progress={scrollYProgress}
                range={[start, end]}
                isFirst={idx === 0}
                isLast={idx === visibleCards.length - 1}
              />
            );
          })}
        </div>

        {/* --- Footer Button: Always Visible --- */}
        <div className="mt-8 md:mt-12 z-20 w-full px-4 flex justify-center">
          <Link href="/our-digital-services" className="group" aria-label="View all of our digital services"> 
            <button className="px-8 py-4 md:px-14 md:py-4 my-4 bg-[#B54118] text-white text-base md:text-lg font-black rounded-2xl hover:scale-110 active:scale-95 transition-all duration-500 shadow-[0_20px_50px_rgba(181,65,24,0.3)] uppercase tracking-widest">
              Explore All Services →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Card({ title, img, desc, alt, i, progress, range, isFirst, isLast }) {
  const [start, end] = range;
  
  // Logic remains same, but we use percentages that adapt to parent width
  const xTranslate = isFirst ? "0%" : "150%"; 
  const xExit = isLast ? "0%" : "-150%";

  const x = useTransform(progress, [start, start + 0.1, end - 0.1, end], [xTranslate, "0%", "0%", xExit]);
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]);
  const scale = useTransform(progress, [start, start + 0.1, end - 0.1, end], [isFirst ? 1 : 0.85, 1, 1, isLast ? 1 : 0.85]);

  return (
    <motion.div
      style={{ x, opacity, scale, zIndex: i }}
      className="absolute w-full max-w-[95%] lg:max-w-4xl shadow-[0_40px_100px_rgba(0,0,0,0.2)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.6)] rounded-[2.5rem] bg-white dark:bg-[#000B25] p-5 md:p-10 border border-gray-100 dark:border-white/5 flex flex-col md:flex-row gap-6 md:gap-10 items-center will-change-transform"
    >
      {/* Image Container: Fixed Ratios */}
      <div className="w-full md:w-1/2 aspect-video md:aspect-square lg:aspect-video overflow-hidden rounded-[1.5rem] shrink-0 border dark:border-white/10">
        <Image 
          src={img} 
          width={600} 
          height={400} 
          // sizes attribute added to solve Performance issue
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          alt={alt} 
          className="object-cover w-full h-full transition-transform duration-700 hover:scale-110" 
          priority={i === 0} 
        />
      </div>

      {/* Content Container */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
        <div className="flex flex-col items-center md:items-start mb-2">
           <span className="px-4 py-1 rounded-full bg-orange-500/10 text-[#B54118] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3">
             Strategy 0{i + 1}
           </span>
           <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#B54118] dark:text-orange-500 font-black leading-[1.1] uppercase tracking-tighter">
             {title}
           </h3>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base lg:text-lg mt-3 font-medium leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}