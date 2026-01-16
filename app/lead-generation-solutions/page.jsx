import Image from "next/image";
import React from "react";
import {
  Target,
  Magnet,
  Filter,
  LineChart,
  CheckCircle2,
  Globe,
  Zap,
} from "lucide-react";
import HorizontalProcess from "@components/HorizontalProcess";
import ShapeChangeSection from "@components/test";
import VShapeTransition from "@components/test2";
import Link from "next/link";
import FadeIn from "@components/MotionWrapper";


export const metadata = {
  title:"Lead Generation Services to Grow Your UK Business",
  description:"Maximise engagement and qualified leads with BizGrow Digital’s professional lead generation solutions for UK businesses.",
}

const LeadGenerationPage = () => {
  const leadServices = [
    {
      title: "Lead Prospecting",
      desc: "We identify and connect you with high-value decision-makers in your niche using advanced targeting tools.",
      icon: <Target className="w-8 h-8" />,
      bgColor: "bg-orange-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Lead Magnets",
      desc: "Crafting irresistible offers, whitepapers, and webinars that pull qualified prospects into your sales ecosystem.",
      icon: <Magnet className="w-8 h-8" />,
      bgColor: "bg-blue-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Conversion Funnels",
      desc: "Designing  multi-step funnels that turn cold traffic into hot leads.",
      icon: <Filter className="w-8 h-8" />,
      bgColor: "bg-purple-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Lead Nurturing",
      desc: "Automated follow-up sequences that keep your brand top-of-mind until the lead is ready to buy.",
      icon: <Zap className="w-8 h-8" />,
      bgColor: "bg-green-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
  ];

  return (
    <section className="relative w-full">
      {/* --- HERO SECTION --- */}
      <div className="relative  h-screen w-full">
        <Image
          src="/lead-hero.jpg" // Hero image suggestion: High-end corporate building or data visualization
          alt="Lead generation services by BizGrow digital"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 w-full bg-black/75 flex flex-col justify-center items-center px-6">
          {/* 🔹 FIX: Har element ko 'w-full flex justify-center' wale div mein wrap kiya gaya hai */}
          <FadeIn direction="up" delay={0.2} className="w-full">
            <div className="w-full flex justify-center">
              <span
                className="text-orange-500 font-bold tracking-[0.3em] uppercase 
              text-xs md:text-sm mb-4 block text-center"
              >
                Scalable Growth Engines
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} className="w-full">
            <div className="w-full flex justify-center">
              <h1 className="text-white text-3xl md:text-7xl text-center font-black max-w-5xl leading-[1.1]">
                Fuel Your Sales Pipe with <br />
                <span className="text-orange-500">Qualified Leads</span>
              </h1>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6} className="w-full">
            <div className="w-full flex justify-center">
              <p className="text-gray-300 text-lg md:text-2xl text-center max-w-2xl mt-8">
                We stop the guessing game. Our data-driven lead generation
                strategies ensure your sales team only talks to people ready to
                do business.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 🚀 SERVICE GRID: Results-First Approach */}
      <section className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
        {/* Subtle Branding Blur */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#B54118]/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-20">
            <FadeIn
              direction="up"
              delay={0.2}
              className="flex flex-col items-center"
            >
              <div className="flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter uppercase">
                  A Results-First{" "}
                  <span className="text-[#B54118]">Approach</span>
                </h2>
                <div className="w-24 h-1.5 bg-[#B54118] mt-6 rounded-full" />
              </div>
            </FadeIn>

            <FadeIn
              direction="up"
              delay={0.4}
              className="flex flex-col items-center"
            >
              <div className="flex justify-center">
                <p className="mt-8 text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
                  Quality over quantity. We focus on leads that actually convert
                  into revenue, not just vanity metrics.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* leadServices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {leadServices.map((item, index) => (
              <FadeIn
                key={index}
                direction="up"
                delay={0.1 * index}
                className="h-full flex"
              >
                {/* Card: Changed dark:bg-slate-700 to match your Brand Navy/Black */}
                <div className="group relative h-full flex flex-col p-10 bg-white dark:bg-[#001235]/40 backdrop-blur-md rounded-[3rem] border-2 border-slate-100 dark:border-white/5 shadow-xl hover:shadow-[#B54118]/20 transition-all duration-500 w-full overflow-hidden hover:-translate-y-3">
                  {/* Icon Container - Animated Scale/Rotate */}
                  <div
                    className={`w-20 h-20 mx-auto ${item.bgColor} ${item.hoverBg} group-hover:text-white text-[#B54118] rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110 shrink-0 text-3xl`}
                  >
                    {item.icon}
                  </div>

                  {/* Title - Consistent Font Black */}
                  <h3 className="text-xl font-black dark:text-white mb-4 uppercase tracking-tight group-hover:text-[#B54118] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description - flex-grow ensures cards stay equal height */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium flex-grow">
                    {item.desc}
                  </p>

                  {/* Hover Indicator Line */}
                  <div className="mt-8 w-12 h-1 bg-gray-100 dark:bg-white/10 mx-auto rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-[#B54118] transition-all duration-700 mx-auto" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- DATA SECTION (Lead Gen Focus) --- */}
      <section className="py-24 bg-white dark:bg-black dark:border-t-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <FadeIn direction="right" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-black dark:text-white leading-tight">
                Data-Driven Insights <br />
                <span className="text-orange-500">& Smart Targeting</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 pt-8 text-lg">
                Lead generation isn't just about traffic; it's about the right
                traffic. We use predictive analytics to find your future
                customers before your competitors do.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Targeted LinkedIn Outreach",
                "High-Intent Google Ads",
                "Custom Landing Pages",
                "CRM Integration & Tracking",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#B54118] w-5 h-5" />
                  <span className="font-semibold dark:text-gray-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <FadeIn direction="left" delay={0.4}>
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-100 dark:border-orange-800">
              <Image
                src="/lead-generation.jpg" // Suggestion: Screenshot of a lead dashboard or growth chart
                alt="Smart Lead Generation UK"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Signature Transitions */}
      <HorizontalProcess />
      <ShapeChangeSection />
      <VShapeTransition />

{/* 🚀 FINAL PREMIUM CTA: Sales Pipeline */}
<section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 md:px-10">
    <div
      className="relative py-24 md:py-32 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_30px_70px_rgba(0,0,0,0.5)] group"
      style={{ 
        backgroundImage: "url('/sales-pipeline.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' 
      }}
    >
      {/* 🔹 Overlay: Depth aur Readability ke liye */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-[#B54118]/20 z-0"></div>

      {/* 🔹 Premium Glass Border Overlay */}
      <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#B54118]/30 transition-all duration-500"></div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center">
        
        {/* Top Status Badge */}
        <FadeIn direction="up" className="flex flex-col items-center">
          <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                  Start Your Journey
                </span>
          
          <h2 className="text-4xl md:text-7xl mt-6 font-black mb-8 leading-[1.1] tracking-tighter uppercase">
            Ready to Fill Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
              Sales Pipeline?
            </span>
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className="flex flex-col items-center">
          <p className="mx-auto mb-14 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl italic">
            "Stop waiting for customers to find you. Let us build a proactive
            system that delivers consistent, high-quality leads every single day."
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.4} className="flex flex-col items-center text-center">
          <Link href="/contact-us">
            {/* 🎯 Aapka Fixed Bold Button with Shine Effect */}
            <button className="relative px-12 py-6 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(181,65,24,0.6)]">
              
              {/* Shine Animation */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
              
              <span className="relative z-10 text-lg uppercase tracking-[0.2em]">
                Get Your Free Audit →
              </span>
            </button>
          </Link>
        </FadeIn>
      </div>

      {/* 🔹 Background Glowing Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B54118]/10 blur-[130px] rounded-full -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B54118]/10 blur-[130px] rounded-full -z-10"></div>
    </div>
  </div>
</section>    </section>
  );
};

export default LeadGenerationPage;
