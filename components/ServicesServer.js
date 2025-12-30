"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@components/MotionWrapper";

export default function ServicesSection() {
  const container = useRef(null);

  // Pure section ki height ke mutabiq scroll track karein
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
    // Section height 600vh rakhein taaki 5 cards ke liye kafi scroll mile
    <section ref={container} className="relative w-full h-[600vh] bg-[#F2E8D5]">
      
      {/* Sticky replacement: Fixed height container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center 
      justify-center overflow-hidden px-4">
        
        <div className="text-center mb-6 z-10">
            <FadeIn direction="up">
              <h1 className="text-4xl md:text-6xl text-[#B54118] font-bold">Our Digital Services</h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-black mt-2 text-lg">We help businesses grow online through modern solutions.</p>
            </FadeIn>
        </div>

        {/* Cards Wrapper */}
        <div className="relative w-full max-w-5xl h-[55vh] flex items-center justify-center">
          {visibleCards.map((card, idx) => {
            // Logic: Har card ko 0.2 ka window milega
            // Card 0: 0.0 - 0.2, Card 1: 0.2 - 0.4, etc.
            const start = idx * 0.18; // Thora overlap ke liye 0.18 rakha hai
            const end = start + 0.25; 
            
            return (
              <Card 
                key={idx} 
                i={idx} 
                {...card} 
                progress={scrollYProgress} 
                range={[start, end]} 
              />
            );
          })}
        </div>

        <div className="mt-8 z-10">
          <Link href="/services">
            <button className="px-8 py-4 bg-[#B54118] text-white font-semibold rounded-xl hover:scale-105 transition shadow-lg">
              View All Services →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Card({ title, img, desc, i, progress, range }) {
  const [start, end] = range;

  // X-axis animation: Right to Left
  // Card enters at 'start', stays in center, leaves at 'end'
  const x = useTransform(
    progress,
    [start, start + 0.08, end - 0.08, end],
    ["150%", "0%", "0%", "-150%"]
  );

  const opacity = useTransform(
    progress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    progress,
    [start, start + 0.08, end - 0.08, end],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.div
      style={{
        x,
        opacity,
        scale,
        zIndex: i,
      }}
      className="absolute w-full max-w-3xl shadow-2xl rounded-2xl bg-white dark:bg-[#000B25] p-6 md:p-10 border border-gray-100 flex flex-col md:flex-row gap-6 items-center"
    >
      <div className="w-full md:w-1/2">
        <Image src={img} width={400} height={250} alt={title} className="rounded-xl object-cover h-[200px] md:h-[280px] w-full" />
      </div>
      <div className="w-full md:w-1/2">
        <span className="text-[#B54118] font-bold text-sm uppercase opacity-60">Service 0{i + 1}</span>
        <h2 className="text-2xl md:text-3xl text-[#B54118] font-extrabold mt-1 leading-tight">{title}</h2>
        <p className="text-gray-700 dark:text-white mt-3 text-sm md:text-base leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}