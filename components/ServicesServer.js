"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@components/MotionWrapper";

export default function ServicesSection() {
  const container = useRef(null);

  // Scroll tracking for the section
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const visibleCards = [
    { title: "Website Development", img: "/web-development2.jpg", desc: "Modern, fast & conversion-focused websites." },
    { title: "SEO Optimization", img: "/SEO.jpg", desc: "Search engine optimized strategies to increase visibility." },
    { title: "Digital Marketing", img: "/Social media.jpg", desc: "Social media marketing, paid ads, and analytics." },
    { title: "Creative Content", img: "/creative.jpg", desc: "Strategically written content that drives engagement." },
    { title: "Graphic Design", img: "/graphic-design.jpg", desc: "Brand-focused graphic designs that communicate clearly." },
  ];

  return (
    <section ref={container} className="relative w-full h-[600vh] bg-[#F2E8D5]">
      
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
        
        {/* Header Section */}
        <div className="text-center mb-6 z-10">
            <FadeIn direction="up">
              <h1 className="text-4xl md:text-6xl text-[#B54118] font-bold uppercase tracking-tighter">Our Digital Services</h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-black mt-2 text-lg font-medium">We help businesses grow online through modern solutions.</p>
            </FadeIn>
        </div>

        {/* Cards Wrapper */}
        <div className="relative w-full max-w-5xl h-[55vh] flex items-center justify-center">
          {visibleCards.map((card, idx) => {
            // Logic: Each card gets its own scroll window
            const start = idx * 0.18; 
            const end = start + 0.25; 
            
            return (
              <Card 
                key={idx} 
                i={idx} 
                {...card} 
                progress={scrollYProgress} 
                range={[start, end]} 
                isFirst={idx === 0} // <--- Ye line add karein
                isLast={idx === visibleCards.length - 1} // Passing last card check
              />
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 z-10">
          <Link href="/services">
            <button className="px-8 py-4 bg-[#B54118] text-white font-semibold rounded-xl hover:scale-105 transition shadow-lg uppercase tracking-wider">
              View All Services →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Card({ title, img, desc, i, progress, range,isFirst, isLast }) {
  const [start, end] = range;

  // X-axis: Last card remains at 0% instead of moving to -150%
  const x = useTransform(
    progress,
    [start, start + 0.08, end - 0.08, end],
   [isFirst ? "0%" : "150%", "0%", "0%", isLast ? "0%" : "-150%"]
  );

  // Opacity: Last card stays visible at the end
  const opacity = useTransform(
    progress,
    [start, start + 0.05, end - 0.05, end],
   [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
  );

  // Scale: Last card doesn't shrink back
  const scale = useTransform(
    progress,
    [start, start + 0.08, end - 0.08, end],
    [isFirst ? 1 : 0.8, 1, 1, isLast ? 1 : 0.8]
  );

  return (
    <motion.div
      style={{
        x,
        opacity,
        scale,
        zIndex: i,
      }}
      className="absolute w-full max-w-3xl shadow-2xl rounded-[2rem] bg-white dark:bg-[#000B25] p-6 md:p-10 border border-gray-100 flex flex-col md:flex-row gap-8 items-center will-change-transform"
    >
      <div className="w-full md:w-1/2 overflow-hidden rounded-2xl">
        <Image 
          src={img} 
          width={400} 
          height={300} 
          alt={title} 
          className="object-cover h-[220px] md:h-[300px] w-full hover:scale-110 transition-transform duration-500" 
        />
      </div>
      
      <div className="w-full md:w-1/2">
        <span className="text-[#B54118] font-bold text-sm uppercase tracking-widest opacity-70 block mb-2">
          Service 0{i + 1}
        </span>
        <h2 className="text-3xl md:text-4xl text-[#B54118] font-black mt-1 leading-[1.1] uppercase tracking-tighter">
          {title}
        </h2>
        <div className="w-12 h-1 bg-[#B54118] my-4 rounded-full" />
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}