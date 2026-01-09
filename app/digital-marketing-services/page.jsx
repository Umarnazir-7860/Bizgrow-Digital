import Image from "next/image";
import React from "react";
import { 
  BarChart3, 
  Search, 
  Share2, 
  Mail, 
  MousePointerClick, 
  TrendingUp,
  Check
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
    <section className="w-full bg-white dark:bg-[#020817]">
      {/* --- HERO SECTION: Responsive & Centered --- */}
      <div className="relative h-[80vh] md:h-screen pt-10 lg:pt-20 w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/digital-hero.webp" 
          alt="Full Stack Digital Marketing"
          fill
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
              Digital <span className="text-orange-500">Dominance</span> <br className="hidden md:block" />
              Redefined
            </h1>
            <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl mb-10 mx-auto px-4 font-light">
              We don't just run campaigns; we build your brand into a digital powerhouse. 
              Our data-driven strategies deliver real, measurable results every time.
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
      <div className="py-10 md:py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black dark:text-white uppercase mb-6">
            Our <span className="text-orange-500">Marketing</span> Arsenal
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {marketingServices.map((service, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <div className="group p-8 bg-gray-50 dark:bg-slate-900/50 rounded-[2rem] border border-transparent hover:border-orange-500/20 hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 h-full flex flex-col items-center text-center shadow-sm hover:shadow-2xl">
                <div className="w-16 h-16 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold dark:text-white mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* --- RESPONSIVE VALUE SECTION (New Layout) --- */}
      <div className="py-20 bg-[#B54118]/90 rounded-[3rem] md:rounded-[5rem] mx-4 md:mx-10 mb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black leading-tight uppercase">
              We Don't Just Get <br /> Traffic, We Get <br /> <span className="underline">Conversions</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Real-time Data Tracking",
              "Conversion Rate Optimization",
              "Competitor Analysis",
              "Omnichannel Marketing"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
                <div className="bg-white text-orange-500 p-1 rounded-full"><Check size={16} strokeWidth={4} /></div>
                <span className="font-bold text-sm md:text-base uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- FINAL CTA: Consistently Powerful --- */}
      <section
        className="relative py-20 mx-4 my-20 rounded-[2.5rem] text-white text-center px-6 md:mx-20 bg-cover bg-fixed bg-center overflow-hidden shadow-2xl"
        style={{ backgroundImage: "url('/Smart Digital Marketing.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/85 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase leading-tight tracking-tighter">
              Ready to Scale <br />
              <span className="text-orange-500">Your Digital Reach?</span>
            </h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <p className="mx-auto mb-10 text-lg md:text-xl text-gray-300 max-w-2xl font-light px-4">
              Stop guessing. Start growing. Let's create a marketing strategy that 
              actually pays for itself through massive growth and increased sales.
            </p>
          </FadeIn>

          <Link href="/contact-us">
            <button className="px-12 py-5 bg-[#B54118] text-white font-bold rounded-2xl
             hover:scale-105 transition-all shadow-lg uppercase tracking-widest">
              Get My Strategy Call
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default DigitalMarketingPage;