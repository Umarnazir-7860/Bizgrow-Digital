import Image from "next/image";
import React from "react";
import {
  Facebook,
  Instagram,
  Users,
  MessageSquare,
  PieChart,
  Target,
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";

export const metadata = {
  title: "Facebook Growth Services | UK Business Marketing",
  description:"BizGrow Digital delivers Facebook marketing that boosts brand visibility, engagement, and leads with strategy-driven, measurable results.",
  alternates: {
    canonical: "https://bizgrow-digital.co.uk/facebook-marketing-services/",
  },
};

const FacebookMarketingPage = () => {
  const fbFeatures = [
    {
      title: "Audience Precision",
      desc: "We identify the most relevant people for your brand and ensure your message reaches those who are most likely to engage and trust your business.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Re-Engagement Strategy",
      desc: "We reconnect with users who previously interacted with your brand, guiding them back with relevant reminders and meaningful touchpoints.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Creative Storytelling",
      desc: "We craft compelling visuals and copy that tell your brand story, capture attention, and encourage real interaction",
      icon: <PieChart className="w-8 h-8" />,
    },
    {
      title: "Conversation Nurturing",
      desc: "We use smart messaging and timely responses to build relationships, answer queries, and turn interest into loyal customers.",
      icon: <MessageSquare className="w-8 h-8" />,
    },
  ];

  return (
    <section className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[80vh]  md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/fb.jpg"
          alt="Facebook marketing services UK "
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <div className="flex gap-4 mt-6 opacity-80">
              <Facebook className="text-orange-500 w-8 h-8" />
              <Instagram className="text-white w-8 h-8" />
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-6 uppercase">
              Understanding the
              <br />
              <span className="text-orange-500 text-glow">
                Social Algorithm
              </span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-2xl mb-10 mx-auto px-4 font-light">
              Facebook's success goes beyond posting content. We design
              intelligent social strategies that increase reach, build
              credibility, and position your brand as a trusted voice in your
              industry.
            </p>
            <Link href="/contact-us">
              <button className="bg-[#B54118] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all uppercase tracking-widest shadow-2xl">
                Create a Strong Social Presence
              </button>
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* --- FEATURE SECTION: Fixed Spacing & Height --- */}
      <section className="w-full dark:bg-black  dark:border-y-2 dark:border-orange-700">
        <div className="py-14 max-w-7xl  mx-auto px-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
            {fbFeatures.map((f, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1} className="flex">
                <div className="p-10 bg-slate-50 dark:bg-slate-700/40 rounded-[2.5rem] border border-transparent hover:border-orange-500/30 transition-all group w-full flex flex-col h-full shadow-sm hover:shadow-xl">
                  <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                    {f.icon}
                  </div>

                  <div className="flex-grow flex flex-col">
                    <h2 className="text-xl font-bold dark:text-white mb-4 uppercase tracking-tight min-h-[3rem]">
                      {f.title}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- STRATEGY SECTION --- */}
      <section className="dark:bg-[#020817] py-20">
        <div className="py-24 bg-slate-900 dark:border dark:border-orange-700 mx-4 md:mx-10 rounded-[4rem] mb-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase">
                  The 3-Step <br />{" "}
                  <span className="text-orange-500 italic">Social Growth </span>{" "}
                  Formula
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      t: "Awareness",
                      d: "Expanding your brand reach to the right audience who haven’t discovered your business yet.",
                    },
                    {
                      step: "02",
                      t: "Engagement",
                      d: "Creating meaningful interactions that strengthen credibility and build genuine trust",
                    },
                    {
                      step: "03",
                      t: "Conversion",
                      d: "The final strategic push that turns interest into a loyal, paying customer.",
                    },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                      <span className="text-3xl font-black text-white/20 group-hover:text-orange-500 transition-colors">
                        {s.step}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 uppercase">
                          {s.t}
                        </h3>
                        <p className="text-gray-400 text-sm">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden">
                <Image
                  src="/award-winning.jpg"
                  alt="Three-step digital marketing strategy"
                  fill
                  className="object-cover transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA: Facebook Dominance (Signature Style) */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-24 md:py-32 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_30px_70px_rgba(0,0,0,0.5)] group"
            style={{
              backgroundImage: "url('/fb-cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            {/* 🔹 Deep Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-[#B54118]/20 z-0"></div>

            {/* 🔹 Signature Glass Border */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#B54118]/30 transition-all duration-500"></div>

            <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center">
              {/* 🎯 FIXED TOP BADGE: Content-only width */}
              <FadeIn direction="up">
                <div className="flex flex-col items-center">
                  <span className="w-fit px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black mb-8 tracking-[0.3em] uppercase">
                    Organic Social Excellence
                  </span>
                </div>

                <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                  Stop Posting <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    Start Growing
                  </span>
                </h2>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.2}
                className="flex flex-col items-center"
              >
                <p className="mx-auto mb-12 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl italic">
                  “Don’t settle for shallow engagement and wasted time. Let’s
                  build a Facebook strategy that drives real growth and lasting
                  results.”
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
                    {/* Shine Effect */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-lg uppercase tracking-[0.2em]">
                      Grow My Brand Now →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B54118]/10 blur-[130px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FacebookMarketingPage;
