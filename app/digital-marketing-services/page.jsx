import Image from "next/image";
import React from "react";
import { Search, Check, Users, PenTool, Code2 } from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";

export const metadata = {
  title: "BizGrow Digital | Expert Digital Marketing Services UK",
  description:
    "Our UK-based digital marketing services enhance brand influence, attract the right clients, and foster long-term business growth.",
};

const DigitalMarketingPage = () => {
  const marketingServices = [
    {
      title: "Search Engine Optimisation (SEO)",
      desc: "Drives more visitors to your website through increasing visibility in search engines (e.g., Google) and generating quality traffic from your target customers.",
      // Search icon SEO ke liye perfect hai
      icon: <Search className="w-8 h-8" />,
    },
    {
      title: "Social Media Marketing (SMM)",
      desc: "Create Brand Awareness, interact with your audience, and develop a social community across multiple Social Media Platforms (e.g., Facebook, Instagram, and LinkedIn).",
      // Users ya Share2 icon SMM (community/social) ke liye behtar hai
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Creative Content Services",
      desc: "Create attention-grabbing blog posts, website articles, and design graphics to attract new audiences and build credibility for your brand.",
      // PenTool ya FileText content creation aur graphics ko show karta hai
      icon: <PenTool className="w-8 h-8" />,
    },
    {
      title: "Web Development",
      desc: "We design and develop fast, secure, and user-friendly websites to reflect the identity of your brand and its Marketing Goals while providing a quality user experience.",
      // Code2 ya Layout icon development ke liye standard hai
      icon: <Code2 className="w-8 h-8" />,
    },
  ];

  return (
    <section className="w-full bg-white ">
      {/* --- HERO SECTION: Responsive & Centered --- */}
      <div className="relative h-[80vh]  md:h-screen pt-10 lg:pt-20 w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/digital-hero.webp"
          alt="Digital marketing services by BizGrow Digital"
          fill
          fetchPriority="high"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Boost Your Online Growth
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] mb-6 uppercase">
              With <span className="text-orange-500">BizGrow Digital </span>{" "}
              <br className="hidden md:block" />
              Marketing Services
            </h1>
            <p className="text-gray-300 text-base md:text-lg lg:text-lg max-w-3xl mb-10 mx-auto px-4 font-light">
              BizGrow Digital offers UK businesses focused and results-driven
              digital marketing services to help them become more visible,
              generate qualified leads, and maximise their online growth
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
        <div className="py-10 md:py-24 max-w-7xl mx-auto">
          {" "}
          {/* py-32 ko thoda kam kiya */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black dark:text-white uppercase mb-6">
              Digital{" "}
              <span className="text-orange-500">Marketing Services </span>{" "}
              offered by BizGrow Digital
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {marketingServices.map((service, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1} className="h-full">
                {/* Change: p-10 ko p-7 kiya taake height kam ho, aur rounded-3rem ko 2rem kiya */}
                <div className="group relative p-7 bg-white dark:bg-[#001235]/40 backdrop-blur-md rounded-[2rem] border-2 border-orange-700 dark:border-white/5 shadow-xl hover:shadow-[#B54118]/20 transition-all duration-500 h-full flex flex-col items-center text-center overflow-hidden hover:-translate-y-2">
                  {/* 🔹 Animated Icon Box: Size 20 se 16 kiya */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-orange-500/10 text-[#B54118] rounded-[1.2rem] flex items-center justify-center group-hover:bg-[#B54118] group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-[10deg] text-2xl">
                      {service.icon}
                    </div>
                    <div className="absolute inset-0 bg-[#B54118]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  </div>

                  {/* 🔹 Title: text-2xl ko text-xl kiya taake 4 columns mein fit aaye */}
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tight group-hover:text-[#B54118] transition-colors leading-tight">
                    {service.title}
                  </h3>

                  {/* 🔹 Description: font-medium rakha hai aur leading tight ki hai */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-snug font-medium flex-grow">
                    {service.desc}
                  </p>

                  {/* 🔹 Interactive Bottom Line: Margin mt-8 se mt-6 kiya */}
                  <div className="mt-6 w-12 h-1 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-[#B54118] transition-all duration-700" />
                  </div>

                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#B54118]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- RESPONSIVE VALUE SECTION (Fully Refined) --- */}
      <section className="relative dark:bg-[#020817] py-20 overflow-hidden">
        {/* Background Glow - Text ko stand out karne ke liye */}
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full -z-10" />

        <div className="bg-[#000d26] dark:border dark:border-orange-500/20 rounded-[3rem] md:rounded-[4.5rem] mx-4 md:mx-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

          <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Column: Typography Refined */}
            <div className="space-y-6">
             

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] uppercase tracking-tight text-white">
                We Are More Than  Just Marketers, 
                <span className="text-orange-500 inline-block mt-2 relative">
                  We Engineer Results
                 
                </span>
              </h2>

              <p className="text-white text-lg md:text-lg font-medium max-w-md leading-relaxed opacity-80">
                Moving beyond traditional methods to build data-driven growth
                machines.
              </p>
            </div>

            {/* Right Column: Grid Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Search Visibility Engineering",
                "Mapping Audience Intent",
                "Structuring Conversion Pathways",
                "Optimising Performance",
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 bg-white/[0.03] hover:bg-orange-600/10 p-5 rounded-2xl border border-white/5 hover:border-orange-500/40 transition-all duration-500 backdrop-blur-sm"
                >
                  <div className="bg-orange-600 text-white p-1.5 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-orange-900/20">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-xs md:text-sm leading-tight uppercase tracking-tight text-gray-200 group-hover:text-white transition-colors">
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
                  Start Growing Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    Online Business Today!
                  </span>
                </h2>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.2}
                className="flex flex-col items-center"
              >
                <p className="mx-auto mb-12 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl italic">
                  "To obtain an effective Digital Marketing Services solution
                  that can help increase your online visibility and create
                  measurable growth opportunities, contact BizGrow Digital
                  today!"
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
