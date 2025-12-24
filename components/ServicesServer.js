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
    { title: "Website Development", img: "/web-development2.jpg", desc: "Modern, fast & conversion-focused websites." },
    { title: "SEO Optimization", img: "/SEO.jpg", desc: "Search engine optimized strategies to increase visibility." },
    { title: "Digital Marketing", img: "/Social media.jpg", desc: "Social media marketing, paid ads, and analytics." },
    { title: "Creative Content", img: "/creative.jpg", desc: "Strategically written content that drives engagement." },
    { title: "Graphic Design", img: "/graphic-design.jpg", desc: "Brand-focused graphic designs that communicate clearly." },
  ];

  return (
    <section ref={container} className="relative bg-[#F2E8D5]/90">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden space-y-5 px-4">
       
        <div className="text-center mb-12">
           <FadeIn direction="up">
            <h1 className="text-4xl md:text-6xl text-[#B54118] mt-20 font-bold">Our Digital Services</h1>
           </FadeIn>
           <FadeIn direction="up" delay={0.4}>
         <p className="text-black mt-2 text-lg ">We help businesses grow online through modern solutions.</p>
        </FadeIn>
        </div>
        

        <div className="relative w-full max-w-4xl h-[50vh] flex items-center justify-center">
          {visibleCards.map((card, idx) => (
            <Card 
              key={idx} 
              i={idx} 
              {...card} 
              progress={scrollYProgress} 
              // 0.2 ka gap har card ke liye
              range={[idx * 0.2, (idx + 1) * 0.2]} 
            />
          ))}
        </div>

        <div className="mt-10 mb-6">
          <Link href="/services">
            <button className="px-8 py-4 bg-[#B54118] text-white font-semibold rounded-xl hover:scale-105 transition shadow-lg">
              View All Services →
            </button>
          </Link>
        </div>
      </div>

      {/* Height ko barha kar 800vh kar diya taaki scroll slow aur smooth ho jaye */}
      <div className="h-[800vh]" />
    </section>
  );
}

function Card({ title, img, desc, i, progress, range }) {
  const start = range[0];
  const end = range[1];
  
  // Center point ko expand kiya taaki card "Stay" kare
  // Input: [Start, Start+Margin, End-Margin, End]
  // Output: [Right, Center, Center, Left]
  const x = useTransform(
    progress, 
    [start, start + 0.05, end - 0.05, end], 
    [1200, 0, 0, -1200]
  );
  
  // Opacity bhi center mein stay karegi
  const opacity = useTransform(
    progress, 
    [start, start + 0.05, end - 0.05, end], 
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    progress, 
    [start, start + 0.05, end - 0.05, end], 
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
      className="absolute w-full max-w-3xl shadow-2xl rounded-2xl bg-white dark:bg-[#000B25] p-6 md:p-10 border border-gray-100 flex flex-col md:flex-row gap-8 items-center"
    >
      <div className="w-full md:w-1/2">
        <Image src={img} width={400} height={250} alt={title} className="rounded-xl object-cover h-[250px] w-full" />
      </div>
      <div className="w-full md:w-1/2">
        <span className="text-[#B54118] font-bold text-sm uppercase opacity-60 tracking-widest">Service 0{i + 1}</span>
        <h2 className="text-2xl md:text-4xl text-[#B54118] font-extrabold mt-2 leading-tight">{title}</h2>
        <p className="text-gray-700 dark:text-white mt-4 text-sm md:text-lg leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}