"use client";
import Image from "next/image";
import React from "react";
import { 
  Code2, 
  Zap, 
  Layers, 
  MousePointer2,
  CheckCircle2,
  Smartphone,
  Cpu
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";

const WebDevelopmentPage = () => {
  const techStack = [
    {
      title: "Next.js & React",
      desc: "Building lightning-fast, SEO-optimized web applications using the latest React features and Server Components.",
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      title: "Tailwind CSS",
      desc: "Crafting pixel-perfect, highly responsive layouts with a utility-first approach for rapid and clean styling.",
      icon: <Layers className="w-8 h-8" />,
    },
    {
      title: "Motion Magic",
      desc: "Bringing interfaces to life with fluid Framer Motion and GSAP animations that enhance user engagement.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Modern TypeScript",
      desc: "Writing clean, type-safe, and maintainable code to ensure your project scales without technical debt.",
      icon: <Code2 className="w-8 h-8" />,
    },
  ];

  return (
    <section className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/web-dev-hero.jpg" 
          alt="Modern Frontend Development"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Frontend Engineering Specialist
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-none mb-6">
              HIGH-END <span className="text-orange-500">INTERFACES</span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-3xl mb-10 mx-auto px-4 font-light leading-relaxed">
              We specialize in building ultra-fast, animated, and responsive web experiences 
              using Next.js and Framer Motion. Quality over templates, always.
            </p>
            <Link href="/contact-us">
              <button className="bg-[#B54118] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all uppercase tracking-widest shadow-2xl">
                Start Your Project
              </button>
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* --- TECH FEATURES GRID --- */}
      <div className="py-24 max-w-7xl mx-auto px-6 dark:bg-black dark:border-t-2 dark:border-orange-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
          {techStack.map((tech, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1} className="flex">
              <div className="p-10 bg-slate-50 dark:bg-slate-700/40 rounded-[2.5rem] border border-transparent hover:border-orange-500/30 transition-all group w-full flex flex-col h-full shadow-sm hover:shadow-xl">
                <div className="text-orange-500 mb-6 group-hover:rotate-6 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold dark:text-white mb-4 uppercase tracking-tight">
                    {tech.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* --- BEYOND TEMPLATES SECTION --- */}
      <section className="dark:bg-[#020817] py-20 dark:border-t-2 dark:border-orange-700">
      <div className="py-24 bg-slate-900 mx-4 md:mx-10 dark:border dark:border-orange-700 rounded-[4rem] mb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase">
              The Power of <br /> <span className="text-orange-500">Custom Code</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Say goodbye to slow WordPress themes. We build custom-coded React applications 
              that load instantly and provide a premium feel to your users.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Speed & Performance",
                "SEO Friendly Architecture",
                "Mobile-First Design",
                "Advanced Animations",
                "Clean Component Code",
                "Scalable Frontend"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-orange-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-white font-medium text-sm uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
             <Image 
              src="/web-strategy.jpg" 
              alt="Clean Code Frontend" 
              fill
              className="object-cover transition-all duration-1000"
             />
          </div>
        </div>
      </div>
      </section>

      {/* --- CONSISTENT CTA --- */}
        <section className="dark:bg-black py-20 dark:border-y-2 dark:border-orange-700 ">
      <div
        className="relative py-20 mx-4 my-20 dark:border dark:border-[#B54118] rounded-[2.5rem] text-white text-center px-6 md:mx-20 bg-cover bg-fixed bg-center overflow-hidden shadow-2xl"
        style={{ backgroundImage: "url('/web-cta.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/75 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
              Ready to Build <br />
              <span className="text-orange-500">Something Better?</span>
            </h2>
            <p className="mx-auto mb-10 text-lg md:text-xl text-gray-300 max-w-2xl font-light px-4">
              Stop settling for slow, bloated sites. Let's build a modern frontend 
              experience that truly represents your brand's quality.
            </p>
            <Link href="/contact-us">
              <button className="px-12 py-5 bg-[#B54118] text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-lg uppercase tracking-widest">
                Start Your Project
              </button>
            </Link>
          </FadeIn>
        </div>
      </div>
      </section>
    </section>
  );
};

export default WebDevelopmentPage;