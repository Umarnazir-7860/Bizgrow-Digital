import Image from "next/image";
import React from "react";
import {
  Code2,
  Zap,
  Layers,
  MousePointer2,
  CheckCircle2,
  Smartphone,
  Cpu,
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";

export const metadata = {
  title: "Professional Web Development Services | BizGrow Digital ",
  description:
    "Get a modern, responsive website that converts. Built by BizGrow Digital using Next.js for speed, performance, and growth.",
};

const WebDevelopmentPage = () => {
  const techStack = [
    {
      title: "Next.js & React",
      desc: "Developing high-performance, SEO-optimised web applications using modern React features and server-side rendering for superior speed",
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      title: "Tailwind CSS",
      desc: "Delivering clean, responsive designs with a utility-first framework for consistent styling and fast, scalable development.",
      icon: <Layers className="w-8 h-8" />,
    },
    {
      title: "Animations Magic",
      desc: "Bringing interfaces to life with fluid Framer Motion and GSAP animations that enhance user engagement.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Modern TypeScript",
      desc: "Writing clean, type-safe, and maintainable code to ensure your project grows smoothly  without technical debt or bugs.",
      icon: <Code2 className="w-8 h-8" />,
    },
  ];

  return (
    <section className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/web-dev-hero.jpg"
          alt="Modern web development services "
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Start Your Web Development Journey
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black leading-none mb-6">
              HIGH-PERFORMANCE <span className="text-orange-500">WEBSITES</span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-3xl mb-10 mx-auto px-4 font-light leading-relaxed">
              We build fast, secure, and high-converting websites using modern
              tools like Next.js and Tailwind. No templates, just custom
              solutions for serious businesses.
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
      <section className="w-full dark:bg-black dark:border-t-2 dark:border-orange-700">
        <div className="py-24 max-w-7xl mx-auto px-6 ">
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
      </section>
      {/* --- BEYOND TEMPLATES SECTION --- */}
      <section className="dark:bg-[#020817] py-20 dark:border-t-2 dark:border-orange-700">
        <div className="py-24 bg-slate-900 mx-4 md:mx-10 dark:border dark:border-orange-700 rounded-[4rem] mb-24 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase">
                The Power of <br />{" "}
                <span className="text-orange-500">Custom Development</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                No more slow themes or generic templates. We build bespoke React
                applications that deliver exceptional speed, smooth
                interactions, and a premium user experience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Fast loading Performance",
                  "SEO-Optimised Structure",
                  "Mobile-First Design",
                  "Advanced Interactive Animations",
                  "Clean & Maintainable Code",
                  "Scalable Architecture",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-orange-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-white font-medium text-sm uppercase tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/web-strategy.jpg"
                alt="Custom code for fast, scalable websites"
                fill
                className="object-cover transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA: Web Development (Signature Style) */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-24 md:py-32 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_30px_70px_rgba(0,0,0,0.5)] group"
            style={{
              backgroundImage: "url('/web-cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            {/* 🔹 Deep Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-[#B54118]/20 z-0"></div>

            {/* 🔹 Signature Glass Border */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#B54118]/30 transition-all duration-500"></div>

            <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center">
              {/* 🎯 FIXED TOP BADGE: Wrapped in flex-col for perfect centering */}
              <FadeIn
                direction="up"
                className="flex flex-col items-center w-full"
              >
                <div className="flex flex-col items-center mb-8">
                  <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                    Frontend Mastery
                  </span>
                </div>

                <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                  Ready to Launch <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    Something Exceptional?
                  </span>
                </h2>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.2}
                className="flex flex-col items-center text-center"
              >
                <p className="mx-auto mb-12 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl italic">
                  "Stop using slow, outdated websites. Let’s create a modern,
                  fast, and premium frontend that reflects your brand’s true
                  value."
                </p>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.4}
                className="flex flex-col items-center"
              >
                <Link href="/contact-us">
                  {/* 🎯 SIGNATURE SHINE BUTTON */}
                  <button className="relative px-8 py-4 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(181,65,24,0.6)]">
                    {/* Shine Effect Animation */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-lg uppercase tracking-[0.2em]">
                      Start Your Project →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* Background Decorative Accents */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#B54118]/10 blur-[130px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WebDevelopmentPage;
