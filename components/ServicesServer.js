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
      desc: "Modern, fast & conversion-focused websites.",
    },
    {
      title: "SEO Optimization",
      img: "/SEO.jpg",
      desc: "Search engine optimized strategies to increase visibility.",
    },
    {
      title: "Digital Marketing",
      img: "/Social media.jpg",
      desc: "Social media marketing, paid ads, and analytics.",
    },
    {
      title: "Creative Content",
      img: "/creative.jpg",
      desc: "Strategically written content that drives engagement.",
    },
    {
      title: "Graphic Design",
      img: "/graphic-design.jpg",
      desc: "Brand-focused graphic designs that communicate clearly.",
    },
  ];

  return (
    <section ref={container} className="relative w-full h-[500vh] bg-[#F2E8D5]">
      {/* 🔹 FIX: h-[100dvh] use kiya taaki mobile browsers ka address bar layout na bigaray */}
      <div
        className="sticky top-0 h-[100dvh] w-full flex flex-col items-center 
      justify-start md:justify-center overflow-hidden px-4"
      >
        {/* 🔹 FIX: Spacing kam ki taaki heading na chupay (pt-12 for mobile) */}
        <div className="text-center mt-22 md:pt-0  md:pb-12 z-10 w-full shrink-0">
          {/* <FadeIn direction="up" className="hidden md:block"> */}
          <h1 className="text-4xl sm:mt-10 md:mt-0 sm:text-4xl md:text-6xl text-[#B54118] font-bold uppercase tracking-tighter leading-none">
            Our Digital Services
          </h1>
          {/* </FadeIn> */}
          {/* <FadeIn direction="up" delay={0.2}> */}
          {/* 🔹 Paragraph fix: text-rendering aur transform fix */}
          <p
            className="text-black mt-3 md:mt-2 text-md md:text-lg font-medium max-w-[270px] md:max-w-none mx-auto"
            style={{
              textRendering: "geometricPrecision",
              transform: "translateZ(0)",
              opacity: 0.8, // Opacity ko constant rakhein ya animation ke baad fix kar dein
            }}
          >
            We help businesses grow online through modern solutions.
          </p>
          {/* </FadeIn> */}
        </div>

        {/* 🔹 FIX: Cards Wrapper ki height mobile par adjust ki taaki spacing manage ho */}
        <div className="relative w-full max-w-5xl h-[45vh] md:h-[60vh] flex items-center justify-center">
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

        {/* Bottom CTA: Shiver rokne ke liye margin fixed rakha */}
        <div className=" mb-8 md:mb-0 md:mt-12 z-10">
          <Link href="/services">
            <button className="px-8 py-4 my-2 md:px-8 md:py-4 bg-[#B54118] text-white text-[15px] md:text-base font-semibold rounded-xl hover:scale-105 transition-all shadow-lg uppercase tracking-wider">
              View All Services →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Card({ title, img, desc, i, progress, range, isFirst, isLast }) {
  const [start, end] = range;

  // 🔹 FIX: Shivering rokne ke liye transform values ko clean kiya
  const xTranslate = isFirst ? "0%" : "105%";
  const xExit = isLast ? "0%" : "-105%";

  const x = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [xTranslate, "0%", "0%", xExit]
  );

  const opacity = useTransform(
    progress,
    [start, start + 0.05, end - 0.05, end],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
  );

  const scale = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [isFirst ? 1 : 0.95, 1, 1, isLast ? 1 : 0.95]
  );

  return (
    <motion.div
      style={{
        x,
        opacity,
        scale,
        zIndex: i,
        // 🔹 FIX: Shivering rokne ke liye hardware acceleration
        transformZ: 0,
        backfaceVisibility: "hidden",
      }}
      className="absolute w-[92%] md:w-full max-w-3xl shadow-xl rounded-[1.2rem] md:rounded-[2rem] bg-white dark:bg-[#000B25] p-3 md:p-10 border border-gray-100 flex flex-col md:flex-row gap-3 md:gap-8 items-center"
    >
      <div className="w-full md:w-1/2 overflow-hidden rounded-lg md:rounded-2xl shrink-0">
        <Image
          src={img}
          width={400}
          height={300}
          alt={title}
          className="object-cover h-[140px] sm:h-[180px] md:h-[300px] w-full"
          priority={i === 0}
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left pb-2 md:pb-0">
        <span className="text-[#B54118] font-bold text-[9px] md:text-sm uppercase tracking-widest opacity-60 block">
          Service 0{i + 1}
        </span>
        <h2 className="text-lg md:text-4xl text-[#B54118] font-black mt-0 md:mt-1 leading-tight uppercase tracking-tighter">
          {title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-[10px] md:text-base leading-snug mt-1 md:mt-4 line-clamp-2 md:line-clamp-none">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
