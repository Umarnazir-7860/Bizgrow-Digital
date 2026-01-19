
import Image from "next/image";
import React from "react";
import {
  Palette,
  Figma,
  Layers,
  CheckCircle2,
  Sparkles,
  PenTool,
  MoveUpRight,
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";


export const metadata = {
title:"Premium Graphic Design Services | BizGrow Digital",
description:"BizGrow Digital delivers premium graphic design: logos, UI/UX, social assets. Build trust fast, boost engagement and conversions."
};

const GraphicDesignPage = () => {
  return (
    <section className="w-full bg-white  overflow-hidden">
      {/* --- HERO SECTION: Consistent Style --- */}
      <div className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/WALLPAPER.jpg"
          alt="Premium Graphic Design Services"
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Premium Graphic Design Services
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-none mb-6">
              DESIGN THAT BUILDS{" "}
              <span className="text-orange-500">TRUST IN SECONDS</span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-3xl mb-10 mx-auto px-4 font-light leading-relaxed">
              Our graphic design focuses on clarity, structure, and visual
              authority, helping businesses stand out immediately while
              maintaining a professional and trustworthy brand image.
            </p>
            <Link href="/contact-us">
              <button className="bg-[#B54118] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all uppercase tracking-widest shadow-2xl">
                Start Creating
              </button>
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* --- UNIQUE SERVICE "BENTO" GRID: Artistic Middle Section --- */}
      <section className="w-full dark:bg-black dark:border-t-2 dark:border-orange-700">
        <div className="py-32 max-w-7xl mx-auto px-6 ">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
              {/* Main Heading */}
              <h2 className="text-4xl md:text-6xl font-black dark:text-white text-slate-900 uppercase tracking-tighter leading-[0.9]">
                Our Graphic Design <br />
                <span className="text-[#B54118] relative inline-block">
                  Capabilities
                  {/* Animated Underline */}
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-[#B54118]/20 -z-10"></span>
                </span>
              </h2>

              {/* Sub-description (Jo aapne mangi thi) */}
              <p className="text-gray-500 dark:text-gray-400 text-md md:text-xl font-medium leading-relaxed max-w-2xl mx-auto tracking-tight">
                Strategic design services crafted to strengthen brand identity,
                improve user experience, and support business growth across
                digital platforms.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Large Card: UI/UX with Background Image Overlay */}
            <div className="md:col-span-2 md:row-span-2 rounded-[3rem] relative overflow-hidden group shadow-2xl">
              {/* Background Image */}
              <Image
                src="/uxui.png" // High-end interface design image
                alt="UI/UX Experience - BizGrowDigital"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0" />

              {/* Glowing Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px] group-hover:bg-orange-500/40 transition-all duration-700 z-10" />

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-end p-12">
                <div className="bg-orange-500/10 backdrop-blur-md border border-orange-500/20  w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Figma className="text-orange-500 w-10 h-10" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4 uppercase tracking-tighter">
                  UI / UX Design
                </h3>
                <p className="text-gray-300 max-w-md italic text-lg leading-relaxed">
                  User-focused interface design that improves usability,
                  engagement, and conversion rates across websites and digital
                  products.
                </p>
              </div>
            </div>

            {/* Small Card 1: Branding */}
            <div className="bg-[#B54118] rounded-[3.5rem] p-10 min-h-[320px] flex flex-col justify-between hover:-rotate-2 transition-all duration-500 cursor-pointer shadow-2xl group">
              <div className="space-y-6">
                <Palette className="text-white w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-3xl font-black text-white leading-none uppercase tracking-tighter">
                  Brand Identity <br /> Design
                </h3>
              </div>
              <p className="text-white/80 text-sm font-medium leading-relaxed mt-4 max-w-[250px]">
                Professional logo design, brand guidelines, and visual systems
                that create a consistent and recognisable brand presence.
              </p>
            </div>

            {/* Small Card 2: Socials */}
            <div className="bg-slate-100 dark:bg-slate-800 rounded-[3.5rem] p-10 min-h-[320px] flex flex-col justify-between hover:rotate-2 transition-all duration-500 cursor-pointer shadow-xl group">
              <div className="space-y-6">
                <Sparkles className="text-[#B54118] w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-3xl font-black dark:text-white text-slate-900 leading-none uppercase tracking-tighter">
                  SOCIAL <br /> ASSETS
                </h3>
              </div>
              <p className="text-slate-500 dark:text-gray-400 text-sm font-medium leading-relaxed mt-4 max-w-[250px]">
                High-impact social media graphics designed to increase
                visibility, interaction, and brand recall across platforms.
              </p>
            </div>

            {/* Wide Card: Vector/Print */}
            <div className="md:col-span-3 mt-10 bg-white dark:bg-gray-700 border-2 border-slate-100 dark:border-slate-800 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-10 hover:shadow-2xl transition-all">
              <div className="max-w-xl">
                <h3 className="text-3xl font-black dark:text-white mb-4 uppercase">
                  High-Quality Vector Design for Professional Brands
                </h3>
                <p className="text-gray-500 dark:text-white ">
                  From logos to marketing visuals, our vector graphics deliver
                  precise detail, scalability, and a professional finish across
                  all platforms and resolutions.
                </p>
              </div>
              <PenTool className="text-orange-600 dark:text-orange-400 w-20 h-20 " />
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION: Unique Visual Philosophy --- */}
      <div className="py-14 bg-white dark:bg-[#020817] dark:border-t-2 dark:border-orange-700">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse gap-20 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-5xl md:text-6xl font-black dark:text-white leading-none uppercase">
              VISUALS THAT MAKE PEOPLE <br />{" "}
              <span className="text-orange-500">TRUST </span> YOU FAST
            </h2>
            <div className="space-y-6">
              {[
                "Brand Consistency",
                "Clean Typography",
                "Premium Layouts",
                "Clear Messaging",
                "Conversion UI",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <span className="w-10 h-[2px] bg-orange-500 group-hover:w-16 transition-all duration-300" />
                  <span className="text-xl font-bold dark:text-white uppercase tracking-tighter">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative h-[500px] rounded-[4rem] overflow-hidden border-[12px] border-slate-50 dark:border-orange-900 shadow-2xl">
            <Image
              src="/grphs.jpg"
              alt="Professional design studio - BizGrow Digital "
              fill
              className="object-cover  transition-all duration-1000"
            />
          </div>
        </div>
      </div>

      {/* 🚀 FINAL CTA: Graphic Design (Signature Style) */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-24 md:py-32 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_30px_70px_rgba(0,0,0,0.5)] group"
            style={{
              backgroundImage: "url('/graphic-cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            {/* 🔹 Deep Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-[#B54118]/20 z-0"></div>

            {/* 🔹 Signature Glass Border */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#B54118]/30 transition-all duration-500"></div>

            <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center">
              {/* 🎯 TOP BADGE: Fixed alignment with flex-col wrapper */}
              <FadeIn
                direction="up"
                className="w-full flex flex-col items-center"
              >
                <div className="flex flex-col items-center mb-8">
                  <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                    Visual Excellence
                  </span>
                </div>

                <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                  CRAFTED FOR <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    SERIOUS BRANDS
                  </span>
                </h2>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.2}
                className="flex flex-col items-center text-center"
              >
                <p className="mx-auto mb-12 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl italic">
                  Designed to support growth, not trends. We create refined
                  visual identities that help businesses appear credible,
                  established, and ready to scale, without unnecessary
                  complexity.
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
                    {/* Shine Animation */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-lg uppercase tracking-[0.2em]">
                    Get Started Today →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* Background Decorative Accent */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B54118]/10 blur-[130px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default GraphicDesignPage;
