import Image from "next/image";
import React from "react";
import {
  BarChart3,
  Search,
  TrendingUp,
  Globe2,
  CheckCircle2,
  Zap,
  Target,
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";

const SEOPage = () => {
  return (
    <section className="w-full bg-white  overflow-hidden">
      {/* --- HERO SECTION: Consistent Style --- */}
      <div className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/seo-hero.png"
          alt="Premium SEO Services"
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Search Engine Dominance
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-none mb-6">
              RANK ON <span className="text-orange-500">TOP</span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-3xl mb-10 mx-auto px-4 font-light leading-relaxed">
              We don't just optimize; we dominate search results. Transform your
              digital visibility with data-backed SEO strategies that drive
              organic growth.
            </p>
            <Link href="/contact-us">
              <button className="bg-[#B54118] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all uppercase tracking-widest shadow-2xl">
                Audit My Site
              </button>
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* --- SEO BENTO GRID: The Strategy Section --- */}
      <section className="w-full dark:bg-black dark:border-t-2 dark:border-orange-700">
        <div className="py-32 max-w-7xl mx-auto px-6  ">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl flex justify-center font-black dark:text-white mb-16 uppercase tracking-tighter">
              The Science of{" "}
              <span className="text-orange-500 underline">Ranking</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Large Card: Data Analytics with Image BG */}
            <div className="md:col-span-2 md:row-span-2 rounded-[3rem] dark:border dark:border-[#B54118] relative overflow-hidden group shadow-2xl">
              <Image
                src="/analytics.png"
                alt="SEO Data Analytics"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
              <div className="relative z-20 h-full flex flex-col justify-end p-12">
                <div className="bg-orange-500/20 backdrop-blur-md border border-orange-500/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="text-orange-500 w-10 h-10" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4 uppercase">
                  Advanced Analytics
                </h3>
                <p className="text-gray-300 max-w-md italic text-lg">
                  Real-time data monitoring to ensure your keywords are always
                  moving in the right direction.
                </p>
              </div>
            </div>

            {/* Small Card 1: Keyword Research */}
            <div className="bg-slate-900  rounded-[3rem] p-10 flex flex-col justify-between hover:border-orange-500/50 dark:border dark:border-orange-600 border border-transparent transition-all">
              <Search className="text-orange-500 w-12 h-12" />
              <h3 className="text-2xl font-black text-white leading-tight uppercase">
                KEYWORD <br /> STRATEGY
              </h3>
            </div>

            {/* Small Card 2: Technical SEO */}
            <div className="bg-orange-500 rounded-[3rem] p-10 flex flex-col justify-between hover:-rotate-2 transition-transform shadow-xl">
              <Zap className="text-white w-12 h-12" />
              <h3 className="text-2xl font-black text-white leading-tight uppercase">
                TECHNICAL <br /> OPTIMIZATION
              </h3>
            </div>

            {/* Wide Card: Global Reach */}
            <div className="md:col-span-3 dark:bg-slate-900 dark:border dark:border-orange-500 to-transparent border-2 border-orange-300 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-10 hover:shadow-2xl transition-all">
              <div className="max-w-xl">
                <h3 className="text-3xl font-black dark:text-white mb-4 uppercase">
                  Dominate Globally
                </h3>
                <p className="text-gray-500">
                  From local search presence to international dominance, our SEO
                  frameworks scale with your business goals.
                </p>
              </div>
              <Globe2 className="text-orange-500 w-20 h-20 opacity-70" />
            </div>
          </div>
        </div>
      </section>
      {/* --- REVERSED CONTENT: Why Trust Us --- */}
      <div className="py-24 bg-white dark:bg-[#020817] dark:border-t-2 dark:border-orange-700 ">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse gap-20 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-5xl md:text-7xl font-black dark:text-white leading-none uppercase">
              DATA <br /> <span className="text-orange-500">OVER</span> GUESSES
            </h2>
            <div className="space-y-6">
              {[
                "Comprehensive On-Page Audits",
                "High-Authority Backlink Strategy",
                "Speed & Core Web Vitals",
                "Semantic Search Optimization",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <span className="w-10 h-[2px] bg-orange-500 group-hover:w-20 transition-all duration-500" />
                  <span className="text-xl font-bold dark:text-white uppercase tracking-tighter">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative h-[500px] rounded-[4rem] overflow-hidden border-[8px] border-slate-30 dark:border-orange-700 shadow-2xl group">
            <Image
              src="/data-over.png"
              alt="SEO Strategy"
              fill
              className="object-cover  transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>

      {/* 🚀 FINAL CTA: SEO Authority (Signature Style) */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-24 md:py-32 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_30px_70px_rgba(0,0,0,0.5)] group"
            style={{
              backgroundImage: "url('/seo-cta.jpg')",
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
              {/* 🎯 TOP BADGE: Fixed alignment with div wrapper */}
              <FadeIn
                direction="up"
                className="w-full flex flex-col items-center"
              >
                <div className="flex flex-col items-center mb-8">
                  <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                    Search Authority
                  </span>
                </div>

                <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                  Ready to Build <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    Something Better?
                  </span>
                </h2>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.2}
                className="flex flex-col items-center text-center"
              >
                <p className="mx-auto mb-12 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl italic">
                  "Rank higher, drive more traffic, and convert visitors into
                  customers. Let's build your search engine authority together."
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
                      Start Your Project →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B54118]/10 blur-[130px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SEOPage;
