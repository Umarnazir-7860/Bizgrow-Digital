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
    <section ref={container} className="relative w-full h-[300vh] md:h-[500vh] bg-[#F2E8D5]">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
        
        {/* Heading & Paragraph Section */}
        <div className="text-center z-10 w-full flex flex-col items-center">
          <FadeIn direction="up">
            <h1 className="text-4xl mt-20 md:text-6xl text-[#B54118] font-bold uppercase tracking-tighter leading-none">
              Our Digital Services
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-black mt-4 text-lg md:text-xl font-medium max-w-[300px] md:max-w-xl mx-auto">
              We help businesses grow online through modern solutions.
            </p>
          </FadeIn>
        </div>

        {/* Cards Wrapper */}
        <div className="relative w-full mt-10 max-w-5xl h-[50vh] md:h-[60vh] flex items-center justify-center">
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

        {/* 🔹 FIX: Button properly centered inside FadeIn wrapper */}
        <div className="mt-12 z-10 w-full ">
          <FadeIn direction="up" delay={0.4}>
            <Link href="/services" className="flex justify-center"> 
              <button className="px-10 py-4 mb-4 bg-[#B54118] text-white text-sm md:text-base font-semibold rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg uppercase tracking-wider whitespace-nowrap">
                View All Services →
              </button>
            </Link>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}

function Card({ title, img, desc, i, progress, range, isFirst, isLast }) {
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
        <Image src={img} width={400} height={300} alt={title} className="object-cover h-[180px] md:h-[280px] w-full" priority={i === 0} />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <span className="text-[#B54118] font-bold text-xs uppercase tracking-widest opacity-60">
          Service 0{i + 1}
        </span>
        <h2 className="text-2xl md:text-4xl text-[#B54118] font-black mt-1 leading-tight uppercase">
          {title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-lg mt-2 md:mt-4">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}