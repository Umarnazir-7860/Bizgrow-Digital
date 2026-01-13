"use client";
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

const FacebookMarketingPage = () => {
  const fbFeatures = [
    {
      title: "Precision Targeting",
      desc: "We place your ads in front of the specific audience segments that have a 90% higher intent to purchase your product.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Retargeting Campaigns",
      desc: "We track visitors who left your site and bring them back through strategic Facebook reminders to complete their purchase.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Creative Ad Copies",
      desc: "Engineered visuals and high-converting captions designed to stop the scroll and compel users to click.",
      icon: <PieChart className="w-8 h-8" />,
    },
    {
      title: "Messenger Marketing",
      desc: "Leveraging intelligent chatbots and direct messaging to convert leads into loyal customers in real-time.",
      icon: <MessageSquare className="w-8 h-8" />,
    },
  ];

  return (
    <section className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[80vh]  md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/fb.jpg" 
          alt="Facebook Ads Management"
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
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-none mb-6 uppercase">
              Mastering the <br />
              <span className="text-orange-500 text-glow">Social Algorithm</span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-2xl mb-10 mx-auto px-4 font-light">
              Facebook marketing is more than just a 'Post Boost.' We engineer data-backed 
              Meta strategies that position your brand as a social media industry leader.
            </p>
            <Link href="/contact-us">
              <button className="bg-[#B54118] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all uppercase tracking-widest shadow-2xl">
                Start Your Campaign
              </button>
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* --- FEATURE SECTION: Fixed Spacing & Height --- */}
    <section className="w-full dark:bg-black  dark:border-y-2 dark:border-orange-700"> 
       <div className="py-14 max-w-7xl  mx-auto px-6 " >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
          {fbFeatures.map((f, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1} className="flex">
              <div className="p-10 bg-slate-50 dark:bg-slate-700/40 rounded-[2.5rem] border border-transparent hover:border-orange-500/30 transition-all group w-full flex flex-col h-full shadow-sm hover:shadow-xl">
                
                <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                  {f.icon}
                </div>
                
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-bold dark:text-white mb-4 uppercase tracking-tight min-h-[3rem]">
                    {f.title}
                  </h3>
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
                Our 3-Step <br /> <span className="text-orange-500 italic">Winning</span> Formula
              </h2>
              <div className="space-y-6">
                {[
                  { step: "01", t: "Awareness", d: "Scaling your brand reach to high-potential audiences who aren't yet familiar with your business." },
                  { step: "02", t: "Engagement", d: "Driving meaningful interactions to build authority and foster deep brand trust." },
                  { step: "03", t: "Conversion", d: "The final strategic push that transforms a warm lead into a committed customer." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <span className="text-3xl font-black text-white/20 group-hover:text-orange-500 transition-colors">{s.step}</span>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 uppercase">{s.t}</h4>
                      <p className="text-gray-400 text-sm">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden">
               <Image 
                src="/award-winning.jpg" 
                alt="Marketing Funnel" 
                fill 
                className="object-cover transition-all duration-700"
               />
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* --- CONSISTENT CTA --- */}
        <section className="dark:bg-black py-20 dark:border-y-2 dark:border-orange-700 ">
      <div
        className="relative py-20 mx-4 my-20 dark:border dark:border-[#B54118] rounded-[2.5rem] text-white text-center px-6 md:mx-20 bg-cover bg-fixed bg-center overflow-hidden shadow-2xl"
        style={{ backgroundImage: "url('/fb-cta.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/85 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
              Stop Boosting. <br />
              <span className="text-orange-500">Start Dominating.</span>
            </h2>
            <p className="mx-auto mb-10 text-lg md:text-xl text-gray-300 max-w-2xl font-light px-4">
              Don't waste your budget on vanity metrics like empty likes. Let's build a Facebook 
              marketing machine that generates real, sustainable revenue for your business.
            </p>
            <Link href="/contact-us">
              <button className="px-12 py-5 bg-[#B54118] text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-lg uppercase tracking-widest">
                Grow My Brand Now
              </button>
            </Link>
          </FadeIn>
        </div>
      </div>
      </section>
    </section>
  );
};

export default FacebookMarketingPage;