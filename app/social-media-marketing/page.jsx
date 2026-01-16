"use client";
import Image from "next/image";
import React from "react";
import {
  BarChart,
  Heart,
  Globe,
  CheckCircle2,
  Zap,
  Share2,
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";

const SocialMediaMarketingPage = () => {
  const smmServices = [
    {
      title: "Content Strategy",
      desc: "Data-driven storytelling and high-impact visuals designed to capture attention and stop the scroll.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Community Growth",
      desc: "Proactive engagement strategies to build a loyal following and foster meaningful brand relationships.",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      title: "Platform Management",
      desc: "Comprehensive management across Instagram, TikTok, and LinkedIn with tailored brand voices.",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Actionable Analytics",
      desc: "Deep-dive performance reports that translate social metrics into real-world business ROI.",
      icon: <BarChart className="w-8 h-8" />,
    },
  ];

  return (
    <section className="w-full bg-white ">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[80vh] md:h-screen pt-10 lg:pt-20 w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/fb-bg.jpg"
          alt="Social Media Growth Strategy"
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Digital Influence & Viral Reach
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-none mb-6">
              BEYOND THE{" "}
              <span className="text-orange-500 underline decoration-4 underline-offset-8">
                LIKE
              </span>{" "}
              <br className="hidden md:block" />
              BUTTON
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-2xl mb-10 mx-auto px-4 font-light leading-relaxed">
              We don't just chase vanity metrics. We build vibrant digital
              communities that drive brand loyalty and high-intent conversions.
            </p>
            <Link href="/contact-us">
              <button className="bg-[#B54118] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all uppercase tracking-widest shadow-2xl">
                Start Your Viral Journey
              </button>
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* --- SERVICES GRID: Equal Height --- */}
      <section className="w-full  dark:bg-black dark:border-t-2 dark:border-orange-700">
        <div className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
            {smmServices.map((service, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1} className="flex">
                <div className="p-10 bg-slate-50 dark:bg-slate-700/40 rounded-[2.5rem] border border-transparent hover:border-orange-500/30 transition-all group w-full flex flex-col h-full shadow-sm hover:shadow-xl">
                  <div className="text-orange-500 mb-6 group-hover:rotate-12 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-xl font-bold dark:text-white mb-4 uppercase tracking-tight min-h-[3rem]">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* --- STRATEGY SECTION: Unique Layout --- */}
      <div className="py-24 bg-white dark:bg-[#020817] dark:border-t-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1 group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-100 dark:border-orange-800 transition-transform group-hover:scale-[1.02] duration-500">
              <Image
                src="/smm-strategy.jpg"
                alt="Social Media Strategy"
                width={600}
                height={800}
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-black dark:text-white leading-tight uppercase">
              How We Turn <br />{" "}
              <span className="text-orange-500 italic">Noise into Results</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              Effective social marketing isn't about constant posting; it's
              about psychology, precision timing, and data-backed creative
              execution.
            </p>
            <div className="space-y-4">
              {[
                "Strategic Audience Research",
                "Viral Hook Implementation",
                "Sentiment & Competitor Analysis",
                "Cross-Platform Brand Sync",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <CheckCircle2 className="text-orange-500 w-6 h-6 flex-shrink-0" />
                  <span className="font-bold dark:text-white text-sm md:text-base uppercase tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🚀 FINAL CTA: Social Media News Feed (Signature Style) */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-24 md:py-32 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_30px_70px_rgba(0,0,0,0.5)] group"
            style={{
              backgroundImage: "url('/smm-cta.jpg')",
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
              {/* 🎯 FIXED TOP BADGE: Sizing locked to content */}
              <FadeIn direction="up" className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                <span className="w-fit px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black mb-8 tracking-[0.3em] uppercase">
                  Social Influence
                </span>
                </div>

                <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                  Ready to Own the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    News Feed?
                  </span>
                </h2>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.2}
                className="flex flex-col items-center text-center"
              >
                <p className="mx-auto mb-12 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl italic">
                  "Don't just be part of the conversation—lead it. Let's create
                  a social presence that turns followers into brand advocates."
                </p>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.4}
                className="flex flex-col items-center"
              >
                <Link href="/contact-us">
                  {/* 🎯 SIGNATURE PREMIUM BUTTON */}
                  <button className="relative px-8 py-4 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(181,65,24,0.6)]">
                    {/* Shine Effect Animation */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-lg uppercase tracking-[0.2em]">
                      Go Viral Now →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* Corner Glow Accents */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#B54118]/10 blur-[130px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SocialMediaMarketingPage;
