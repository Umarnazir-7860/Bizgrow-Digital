"use client";
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

const GraphicDesignPage = () => {
  return (
    <section className="w-full bg-white dark:bg-[#020817] overflow-hidden">
      {/* --- HERO SECTION: Consistent Style --- */}
      <div className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/WALLPAPER.jpg"
          alt="Premium Graphic Design Services"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Visual Excellence & Artistry
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-none mb-6">
              DESIGN THAT <span className="text-orange-500">SPEAKS</span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-3xl mb-10 mx-auto px-4 font-light leading-relaxed">
              We blend strategic thinking with artistic precision to create
              visuals that don't just look good—they perform. Elevate your brand
              with premium design.
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
      <div className="py-32 max-w-7xl mx-auto px-6">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl font-black dark:text-white mb-16 uppercase tracking-tighter">
            Our Creative{" "}
            <span className="text-orange-500 underline">Ecosystem</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Large Card: UI/UX with Background Image Overlay */}
          <div className="md:col-span-2 md:row-span-2 rounded-[3rem] relative overflow-hidden group shadow-2xl">
            {/* Background Image */}
            <Image
              src="/uxui.png" // High-end interface design image
              alt="UI/UX Experience"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0" />

            {/* Glowing Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px] group-hover:bg-orange-500/40 transition-all duration-700 z-10" />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-end p-12">
              <div className="bg-orange-500/10 backdrop-blur-md border border-orange-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Figma className="text-orange-500 w-10 h-10" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-4 uppercase tracking-tighter">
                UI/UX EXPERIENCE
              </h3>
              <p className="text-gray-300 max-w-md italic text-lg leading-relaxed">
                Creating digital journeys that are intuitive, beautiful, and
                conversion-focused.
              </p>
            </div>
          </div>

          {/* Small Card 1: Branding */}
          <div className="bg-orange-500 rounded-[3rem] p-10  flex flex-col justify-between hover:-rotate-2 transition-transform cursor-pointer shadow-xl">
            <Palette className="text-white w-12 h-12" />
            <h3 className="text-2xl font-black text-white leading-tight uppercase">
              BRAND <br /> IDENTITY
            </h3>
          </div>

          {/* Small Card 2: Socials */}
          <div className="bg-slate-100 dark:bg-slate-800 rounded-[3rem] p-10 flex flex-col justify-between hover:rotate-2 transition-transform cursor-pointer">
            <Sparkles className="text-orange-500 w-12 h-12" />
            <h3 className="text-2xl font-black dark:text-white leading-tight uppercase">
              SOCIAL <br /> ASSETS
            </h3>
          </div>

          {/* Wide Card: Vector/Print */}
          <div className="md:col-span-3 mt-10 bg-white border-2 border-slate-100 dark:border-slate-800 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-10 hover:shadow-2xl transition-all">
            <div className="max-w-xl">
              <h3 className="text-3xl font-black dark:text-white mb-4 uppercase">
                The Vector Advantage
              </h3>
              <p className="text-gray-500">
                From high-res print to infinitely scalable digital vectors, we
                ensure your brand never loses its edge in any medium.
              </p>
            </div>
            <PenTool className="text-orange-500 w-20 h-20 opacity-20" />
          </div>
        </div>
      </div>

      {/* --- CONTENT SECTION: Unique Visual Philosophy --- */}
      <div className="py-14 bg-white dark:bg-[#020817] mb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse gap-20 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-5xl md:text-7xl font-black dark:text-white leading-none uppercase">
              WHY OUR <br /> <span className="text-orange-500">PIXELS</span> POP
            </h2>
            <div className="space-y-6">
              {[
                "Strategic Color Psychology",
                "Advanced Typography Layouts",
                "Custom-Crafted Illustrations",
                "Conversion-Focused UI",
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
          <div className="w-full lg:w-1/2 relative h-[500px] rounded-[4rem] overflow-hidden border-[12px] border-slate-50 dark:border-slate-900 shadow-2xl">
            <Image
              src="/grphs.jpg"
              alt="Design Thinking"
              fill
              className="object-cover  transition-all duration-1000"
            />
          </div>
        </div>
      </div>

      {/* --- CTA SECTION: Consistent Style --- */}
      <section
        className="relative py-20 mx-4 my-20 rounded-[2.5rem] text-white text-center px-6 md:mx-20 bg-cover bg-fixed bg-center overflow-hidden shadow-2xl"
        style={{ backgroundImage: "url('/graphic-cta.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/85 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
              Ready to Build <br />
              <span className="text-orange-500">Something Better?</span>
            </h2>
            <p className="mx-auto mb-10 text-lg md:text-xl text-gray-300 max-w-2xl font-light px-4">
              Stop settling for average visuals. Let's create a premium design
              identity that positions your brand at the top of your industry.
            </p>
            <Link href="/contact-us">
              <button className="px-12 py-5 bg-[#B54118] text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-lg uppercase tracking-widest">
                Start Your Project
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </section>
  );
};

export default GraphicDesignPage;
