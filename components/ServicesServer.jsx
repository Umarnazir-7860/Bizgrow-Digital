"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@components/MotionWrapper";

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
    <section ref={container} className="relative w-full h-[250vh] md:h-[350vh] bg-[#F2E8D5] dark:bg-black dark:border-b-2 dark:border-orange-700 ">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
        
        {/* Heading Section */}
        <div className="text-center z-10 w-full flex flex-col items-center">
          <FadeIn direction="up">
            <h2 className="text-4xl mt-20 md:text-6xl text-[#B54118] font-bold uppercase tracking-tighter leading-none">
              Our Digital Services
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            {/* Contrast Fix: text-black dark:text-white ensure accessibility */}
            <p className="text-black dark:text-white mb-6 text-sm  md:text-[16px] font-medium max-w-[300px] md:max-w-xl mx-auto">
              Empowering your business to thrive online with tailored digital solutions.
            </p>
          </FadeIn>
        </div>

        {/* Cards Wrapper */}
        <div className="relative w-full mt-7 max-w-5xl h-[50vh] md:h-[60vh] flex items-center justify-center">
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

        {/* View All Services Button */}
        <div className="mt-16 z-10 w-full ">
          {/* Touch Target Fix: Added padding around link for better clickable area */}
          <Link href="/our-digital-services" className="flex justify-center p-2 group" aria-label="View all of our digital services"> 
            <button className="px-12 py-5 mb-4 bg-[#B54118] text-white text-base md:text-lg font-bold rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl uppercase tracking-wider whitespace-nowrap">
              View All Services →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Card({ title, img, desc, alt, i, progress, range, isFirst, isLast }) {
  const [start, end] = range;
  const xTranslate = isFirst ? "0%" : "120%";
  const xExit = isLast ? "0%" : "-120%";

  const x = useTransform(progress, [start, start + 0.1, end - 0.1, end], [xTranslate, "0%", "0%", xExit]);
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]);
  const scale = useTransform(progress, [start, start + 0.1, end - 0.1, end], [isFirst ? 1 : 0.9, 1, 1, isLast ? 1 : 0.9]);

  return (
    <motion.div
      style={{ x, opacity, scale, zIndex: i, transformZ: 0 }}
      className="absolute w-[95%] md:w-full max-w-3xl shadow-2xl rounded-[1.5rem] md:rounded-[2rem] bg-white dark:bg-[#000B25] p-4 md:p-10 border border-gray-100 flex flex-col md:flex-row gap-4 md:gap-8 items-center"
    >
      <div className="w-full md:w-1/2 overflow-hidden rounded-xl shrink-0">
        <Image 
          src={img} 
          width={400} 
          height={300} 
          alt={alt} 
          className="object-cover h-[150px] md:h-[240px] w-full" 
          priority={i === 0} 
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        {/* Contrast & Accessibility Fix: Removed opacity-60 for better readability */}
        <span className="text-[#B54118] font-extrabold text-xs uppercase tracking-widest">
          Service 0{i + 1}
        </span>
        <h3 className="text-2xl md:text-4xl text-[#B54118] font-black mt-1 leading-tight uppercase">
          {title}
        </h3>
        <p className="text-gray-800 dark:text-gray-200 text-sm md:text-lg mt-2 md:mt-4 font-medium">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}