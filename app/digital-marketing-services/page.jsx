import Image from "next/image";
import React from "react";
import {
  BarChart3,
  Search,
  Share2,
  Mail,
  MousePointerClick,
  TrendingUp,
  Check,
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";

const DigitalMarketingPage = () => {
  const marketingServices = [
    {
      title: "Search Engine Optimization",
      desc: "We propel your website to the top of Google search results to significantly increase organic traffic and boost sales.",
      icon: <Search className="w-8 h-8" />,
    },
    {
      title: "Pay-Per-Click (PPC)",
      desc: "Achieve instant results with targeted Ads on Google and Meta platforms designed to maximize your ROI.",
      icon: <MousePointerClick className="w-8 h-8" />,
    },
    {
      title: "Social Media Strategy",
      desc: "Strengthening your brand voice across social platforms to spark meaningful engagement and build a loyal community.",
      icon: <Share2 className="w-8 h-8" />,
    },
    {
      title: "Content Marketing",
      desc: "Value-driven content that builds authority, establishes trust, and converts cold audiences into repeat customers.",
      icon: <BarChart3 className="w-8 h-8" />,
    },
  ];

  return (
    <section className="w-full bg-white ">
      {/* --- HERO SECTION: Responsive & Centered --- */}
      <div className="relative h-[80vh]  md:h-screen pt-10 lg:pt-20 w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/digital-hero.webp"
          alt="Full Stack Digital Marketing"
          fill
          fetchPriority="high"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Result-Oriented Agency
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-[1.1] mb-6 uppercase">
              Digital <span className="text-orange-500">Dominance</span>{" "}
              <br className="hidden md:block" />
              Redefined
            </h1>
            <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl mb-10 mx-auto px-4 font-light">
              We don't just run campaigns; we build your brand into a digital
              powerhouse. Our data-driven strategies deliver real, measurable
              results every time.
            </p>
            <Link href="/contact-us">
              <button className="bg-[#B54118] text-white px-8 md:px-12 py-4 rounded-full font-bold hover:scale-105 transition-all text-sm md:text-base uppercase tracking-widest shadow-xl">
                Boost Your ROI
              </button>
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* --- UNIQUE SECTION: Floating Services Grid --- */}
      <section className="w-full dark:bg-black mx-auto px-6 dark:border-t-2 dark:border-orange-700">
        <div className="py-10 md:py-32 max-w-7xl ">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black dark:text-white uppercase mb-6">
              Our <span className="text-orange-500">Marketing</span> Arsenal
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {marketingServices.map((service, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1} className="h-full">
                <div className="group relative p-10 bg-white dark:bg-[#001235]/40 backdrop-blur-md rounded-[3rem] border-2 border-orange-700 dark:border-white/5 shadow-xl hover:shadow-[#B54118]/20 transition-all duration-500 h-full flex flex-col items-center text-center overflow-hidden hover:-translate-y-3">
                  {/* 🔹 Animated Icon Box */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-orange-500/10 text-[#B54118] rounded-[1.5rem] flex items-center justify-center group-hover:bg-[#B54118] group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-[15deg] group-hover:scale-110 text-3xl">
                      {service.icon}
                    </div>
                    {/* Subtle icon glow */}
                    <div className="absolute inset-0 bg-[#B54118]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  </div>

                  {/* 🔹 Title: Bold & Consistent */}
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter group-hover:text-[#B54118] transition-colors">
                    {service.title}
                  </h3>

                  {/* 🔹 Description: Readability first */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium flex-grow">
                    {service.desc}
                  </p>

                  {/* 🔹 Interactive Bottom Line */}
                  <div className="mt-8 w-12 h-1 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-[#B54118] transition-all duration-700" />
                  </div>

                  {/* Subtle inner corner glow */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#B54118]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- RESPONSIVE VALUE SECTION (New Layout) --- */}
      <section className="dark:bg-[#020817] dark:border-t-2 dark:border-orange-700 py-20">
        <div className="py-20 bg-gray-700 dark:border dark:border-orange-700 rounded-[3rem] md:rounded-[5rem] mx-4 md:mx-10 mb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black leading-tight uppercase">
                We Don't Just Get <br /> Traffic, We Get <br />{" "}
                <span className="underline">Conversions</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Real-time Data Tracking",
                "Conversion Rate Optimization",
                "Competitor Analysis",
                "Omnichannel Marketing",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-orange-600/50 p-4 rounded-2xl backdrop-blur-sm border border-white/20"
                >
                  <div className="bg-white text-orange-500 p-1 rounded-full">
                    <Check size={16} strokeWidth={4} />
                  </div>
                  <span className="font-bold text-sm md:text-base uppercase">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA: Digital Marketing Scale (Signature Style) */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-24 md:py-32 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_30px_70px_rgba(0,0,0,0.5)] group"
            style={{
              backgroundImage: "url('/Smart Digital Marketing.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed", // Parallax Effect
            }}
          >
            {/* 🔹 Depth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-[#B54118]/20 z-0"></div>

            {/* 🔹 Glass Border Identity */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#B54118]/30 transition-all duration-500"></div>

            <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center">
              {/* Top Growth Badge */}
              <FadeIn direction="up" className="flex flex-col items-center">
                  <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                  Marketing Excellence
                </span>

                <h2 className="text-4xl mt-4 md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                  Ready to Scale <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    Your Digital Reach?
                  </span>
                </h2>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.2}
                className="flex flex-col items-center"
              >
                <p className="mx-auto mb-12 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl italic">
                  "Stop guessing. Start growing. Let's create a marketing
                  strategy that actually pays for itself through massive growth
                  and increased sales."
                </p>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.4}
                className="flex flex-col items-center"
              >
                <Link href="/contact-us">
                  {/* 🎯 FIXED PREMIUM BUTTON WITH SHINE */}
                  <button className="relative px-12 py-6 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(181,65,24,0.6)]">
                    {/* Shine Animation */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-lg uppercase tracking-[0.2em]">
                      Get My Strategy Call →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* Glowing Accents */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B54118]/10 blur-[130px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DigitalMarketingPage;
