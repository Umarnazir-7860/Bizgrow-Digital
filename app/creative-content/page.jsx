import Image from "next/image";
import React from "react";
import { PenTool, Video, Layers, Target, CheckCircle2 } from "lucide-react";
import HorizontalProcess from "@components/HorizontalProcess";
import ShapeChangeSection from "@components/test";
import VShapeTransition from "@components/test2";
import Link from "next/link";
import FadeIn from "@components/MotionWrapper";


export const metadata ={
  title:"Creative Content Services by BizGrow Digital UK",
  description:"BizGrow Digital offers expert creative content services to enhance engagement, brand visibility, and online business growth across the UK."
}

const CreativeContentPage = () => {
  const contentFeatures = [
    {
      title: "Brand Storytelling",
      desc: "We develop authentic, compelling narratives that connect with your audience and translate your brand values into memorable experiences.",
      icon: <Layers className="w-8 h-8" />,
      bgColor: "bg-orange-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Visual Design",
      desc: "High-impact digital visuals and marketing assets created to strengthen brand consistency and enhance visual recognition across platforms.",
      icon: <PenTool className="w-8 h-8" />,
      bgColor: "bg-blue-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Video & Motion Content",
      desc: "Professionally produced video editing and motion graphics designed to increase engagement, communicate value, and build audience trust.",
      icon: <Video className="w-8 h-8" />,
      bgColor: "bg-purple-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Content Strategy",
      desc: "Insight-led content frameworks developed using data and audience analysis to drive reach, relevance, and sustainable organic growth.",
      icon: <Target className="w-8 h-8" />,
      bgColor: "bg-green-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
  ];

  return (
    <section className="relative w-full">
      {/* --- HERO SECTION --- */}
      <div className="relative  h-[85vh] md:h-screen w-full">
        <Image
          src="/creative-content-hero.jpg"
          alt="Creative Content Services - BizGrow Digital"
          fill
          fetchPriority="high"
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 w-full mx-auto bg-black/70 flex flex-col pt-12 justify-center items-center px-6">
          <FadeIn direction="up" delay={0.2}>
            {/* 🔹 FIX: Wrapper div inside FadeIn to force centering */}
            <div className="w-full flex flex-col items-center">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block text-center">
                Creative Content
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="w-full flex flex-col items-center">
              <h1 className="text-white text-4xl md:text-7xl text-center font-bold max-w-5xl leading-tight">
                Words & Visuals That Define Authority <br />
                <span className="text-orange-500 text-4xl">
                  Command Attention
                </span>
              </h1>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div className="w-full flex flex-col items-center">
              <p className="text-gray-300 text-lg md:text-xl text-center max-w-2xl mt-6">
                Strategically developed words and visuals that elevate your
                brand voice and engage the right audience.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 🚀 UNIQUE FEATURES GRID: Crafting Masterpieces */}
      <section className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
        {/* Background Branding Orbs */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#B54118]/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header Text */}
          <div className="flex flex-col justify-center items-center mb-20 gap-4 text-center">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-6xl  font-black text-slate-900 dark:text-white leading-tight tracking-normal uppercase">
                Crafting Digital Experiences <br />
                That
                <span className="text-[#B54118]"> Inspire</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#B54118] mx-auto mt-4 rounded-full" />
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="flex justify-center">
                <p className="text-gray-600 dark:text-gray-400 text-lg md:text-[16px] max-w-4xl leading-relaxed font-medium mt-4">
                  Your content is your brand’s first impression. We ensure every
                  word, visual, and interaction is strategically designed to
                  support your business objectives and drive meaningful results.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentFeatures.map((item, index) => (
              <FadeIn
                key={index}
                direction="up"
                delay={0.2 * index}
                className="h-full"
              >
                <div className="group relative h-full p-8 bg-white dark:bg-[#001235]/40 backdrop-blur-md rounded-[2rem] border-2 border-slate-100 dark:border-white/5 shadow-xl hover:shadow-[#B54118]/20 transition-all duration-500 flex flex-col items-start overflow-hidden hover:-translate-y-3">
                  {/* 🔹 Icon Box: Animated & Glowing */}
                  <div className="relative mb-8">
                    <div
                      className={`relative z-10 w-16 h-16 ${item.bgColor} ${item.hoverBg} group-hover:text-white text-[#B54118] rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110 shadow-lg`}
                    >
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <div className="absolute inset-0 bg-[#B54118]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-normal group-hover:text-[#B54118] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium flex-grow">
                    {item.desc}
                  </p>

                  {/* 🔹 Decorative Subtle Indicator */}
                  <div className="mt-6 w-8 h-1 bg-[#B54118]/20 group-hover:w-full group-hover:bg-[#B54118] transition-all duration-500 rounded-full" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY US SECTION --- */}
      <section className="py-10 bg-white dark:bg-[#020817]  dark:border-t-2 dark:border-orange-700">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 md:flex-row gap-16 items-center">
          <FadeIn direction="right" delay={0.3}>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden">
              <Image
                src="/download (8).png"
                alt="BizGrow Digital - Creative Strategy "
                fill
                className="object-center"
              />
            </div>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-4xl font-black dark:text-white leading-tight">
                Why Choose Our <br />
                <span className="text-orange-500">Creative Strategy?</span>
              </h2>
            </FadeIn>

            <div className="space-y-6">
              {[
                "Insight-Driven Creative Planning",
                "Audience-Focused Content Development",
                "Consistent Brand Voice & Visual Identity",
                "Performance-Led Creative Execution",
                "Scalable Content Systems for Growth",
              ].map((text, i) => (
                <FadeIn key={i} direction="up" delay={0.1 * i}>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#B54118] w-6 h-6 flex-shrink-0" />
                    <p className="text-lg font-medium dark:text-gray-200">
                      {text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={0.6}>
              <Link href="/contact-us">
                <button className="bg-black dark:bg-white dark:text-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#B54118] dark:hover:bg-[#B54118] dark:hover:text-white transition-all">
                  Discuss Your Project
                </button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🚀 CREATIVE CTA SECTION: Consistent & Bold */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-20 md:py-28 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] group"
            style={{
              backgroundImage: "url('/creative-cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed", // Parallax consistent
            }}
          >
            {/* 🔹 Consistent Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-[#B54118]/20 z-0"></div>

            {/* 🔹 Glassmorphism Border */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#B54118]/30 transition-all duration-500"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
              <FadeIn direction="up" delay={0.2}>
                {/* Top Badge for extra detail */}
                <div className="flex justify-center mb-8">
                  <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                    Creative Excellence
                  </span>
                </div>

                <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                  Let's Build Something <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    Extraordinary
                  </span>
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <p className="mx-auto mb-12 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl italic">
                  "Ready to give your brand a creative edge that delivers real
                  impact? Your next project starts with a simple conversation."
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.6}>
                <Link href="/contact-us">
                  <button className="relative px-12 py-5 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(181,65,24,0.5)]">
                    {/* Shine Animation Effect */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-xl uppercase tracking-widest">
                      Start Your Journey →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* Decorative Blur Orbs */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#B54118]/10 blur-[120px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CreativeContentPage;
