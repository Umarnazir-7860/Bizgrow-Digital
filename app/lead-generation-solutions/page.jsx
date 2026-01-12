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
          alt="Lead Generation Services"
          fill
          priority
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

      {/* --- SERVICE GRID --- */}
      <section className="py-14 bg-gray-50 dark:bg-[#020817] dark:border-t-2 dark:border-orange-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
              A Results-First <span className="text-[#B54118]">Approach</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-16">
              Quality over quantity. We focus on leads that actually convert
              into revenue, not just vanity metrics.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 items-stretch">
            {leadServices.map((item, index) => (
              <FadeIn
                key={index}
                direction="up"
                delay={0.1 * index}
                className="h-full flex"
              >
                <div className="group h-full flex flex-col p-10 dark:border dark:border-[#B54118] bg-white dark:bg-slate-700 rounded-[2.5rem] border border-slate-100  shadow-lg hover:shadow-2xl transition-all duration-300 w-full">
                  {/* Icon Container */}
                  <div
                    className={`w-16 h-16 mx-auto ${item.bgColor} ${item.hoverBg} group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shrink-0`}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold dark:text-white mb-4 uppercase tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description - flex-grow ensures this fills the height */}
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-grow">
                    {item.desc}
                  </p>
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
                alt="Lead Generation Results"
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

      {/* --- CALL TO ACTION --- */}
      <section className="dark:bg-black py-20 dark:border-y-2 dark:border-orange-700 ">
        <div
          className="relative py-24 mx-4 my-20 rounded-[3rem] text-white text-center dark:border  dark:border-[#B54118] px-6 md:mx-20 bg-cover bg-center bg-fixed overflow-hidden shadow-2xl"
          style={{ backgroundImage: "url('/sales-pipeline.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/85 z-0"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">
              Ready to Fill Your <br />
              <span className="text-orange-500">Sales Pipeline?</span>
            </h2>
            <p className="mx-auto mb-10 text-lg md:text-xl text-gray-300 max-w-2xl font-light">
              Stop waiting for customers to find you. Let us build a proactive
              system that delivers consistent, high-quality leads every single
              day.
            </p>
            <Link href="/contact-us">
              <button className="px-8 py-5 text-sm bg-[#B54118] text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-xl uppercase tracking-widest">
                Get Your Free Audit
              </button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LeadGenerationPage;
