import Image from "next/image";
import React from "react";
import {
  Mail,
  Users,
  BarChart3,
  Zap,
  MousePointerClick,
  CheckCircle2,
  Workflow,
} from "lucide-react";
import HorizontalProcess from "@components/HorizontalProcess";
import ShapeChangeSection from "@components/test";
import VShapeTransition from "@components/test2";
import Link from "next/link";
import FadeIn from "@components/MotionWrapper";

const EmailMarketingPage = () => {
  const emailServices = [
    {
      title: "Campaign Strategy",
      desc: "We design data-driven email roadmaps that target your audience segments with precision and purpose.",
      icon: <Workflow className="w-8 h-8" />,
      bgColor: "bg-blue-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Email Automation",
      desc: "Set your growth on autopilot with advanced triggers and drip sequences that nurture leads 24/7.",
      icon: <Zap className="w-8 h-8" />,
      bgColor: "bg-orange-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Creative Copywriting",
      desc: "High-converting subject lines and body copy that bypasses spam filters and lands straight in the heart.",
      icon: <Mail className="w-8 h-8" />,
      bgColor: "bg-purple-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "A/B Testing & Analytics",
      desc: "Constant optimization through split testing and deep performance tracking to maximize your ROI.",
      icon: <BarChart3 className="w-8 h-8" />,
      bgColor: "bg-green-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
  ];

  return (
    <section className="relative w-full">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[80vh] md:h-screen w-full">
        <Image
          src="/test2.jpg" // Ensure this image exists in public folder
          alt="Email Marketing Services"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 w-full bg-black/75 flex flex-col justify-center items-center px-6">
          {/* Row 1: Label */}
          <FadeIn direction="up" delay={0.2}>
            <div className="w-full flex justify-center">
              <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-4 block text-center">
                Direct-to-Consumer Growth
              </span>
            </div>
          </FadeIn>

          {/* Row 2: Heading */}
          <FadeIn direction="up" delay={0.4}>
            <div className="w-full flex justify-center">
              <h1 className="text-white text-4xl md:text-7xl text-center font-black max-w-5xl leading-tight">
                Turn Your Inbox Into A <br />
                <span className="text-orange-500">Revenue Engine</span>
              </h1>
            </div>
          </FadeIn>

          {/* Row 3: Paragraph */}
          <FadeIn direction="up" delay={0.6}>
            <div className="w-full flex justify-center">
              <p className="text-gray-300 text-xl md:text-2xl text-center max-w-2xl mt-8">
                Don't just send emails. Build relationships and drive sales with
                highly personalized, automated email marketing campaigns.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 🚀 CORE FEATURES GRID: Maximum Impact */}
      <section className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
        {/* Background Glow for Branding */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#B54118]/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header Text - Fixed Alignment */}
          <div className="text-center mb-20">
            <FadeIn
              direction="up"
              delay={0.2}
              className="flex flex-col items-center"
            >
              <div className="flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter uppercase">
                  Maximum Impact, <br />
                  <span className="text-[#B54118]">Zero Spam</span>
                </h2>
                <div className="w-24 h-1.5 bg-[#B54118] mt-6 rounded-full" />
              </div>
            </FadeIn>

            {/* P tag alignment fixed by centering the FadeIn wrapper itself */}
            <FadeIn
              direction="up"
              delay={0.4}
              className="flex flex-col items-center"
            >
              <div className="flex justify-center">
                <p className="mt-8 text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
                  We bridge the gap between your brand and your customers
                  through targeted messaging that actually gets opened and
                  clicked.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Email Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {emailServices.map((item, index) => (
              <FadeIn
                key={index}
                direction="up"
                delay={0.1 * index}
                className="h-full"
              >
                {/* Card Design - Changed dark:bg-slate-700 to match your Brand Navy/Black */}
                <div className="group relative h-full p-10 bg-white dark:bg-[#001235]/40 backdrop-blur-md rounded-[3rem] border-2 border-slate-100 dark:border-white/5 shadow-xl hover:shadow-[#B54118]/20 transition-all duration-500 flex flex-col items-center text-center overflow-hidden hover:-translate-y-3">
                  {/* Animated Icon Box */}
                  <div
                    className={`w-20 h-20 ${item.bgColor} ${item.hoverBg} group-hover:text-white text-[#B54118] rounded-[1.5rem] flex items-center justify-center mb-8 shadow-lg transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110 shrink-0 text-3xl`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-[#B54118] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium flex-grow">
                    {item.desc}
                  </p>

                  {/* Subtle Progress Indicator (Branding) */}
                  <div className="mt-8 w-12 h-1 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-[#B54118] transition-all duration-700" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS/WHY US SECTION --- */}
      <section className="py-24 bg-white dark:bg-black dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <FadeIn direction="right" delay={0.3}>
              <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/test.jpg"
                  alt="Email Marketing Strategy"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-6 bg-[#B54118] p-8 rounded-3xl text-white shadow-xl hidden md:block">
                <p className="text-4xl font-black">4200%</p>
                <p className="text-sm opacity-80 uppercase tracking-widest font-bold">
                  Average ROI
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="space-y-10 order-1 lg:order-2">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-black dark:text-white leading-tight">
                Why Email is Still the <br />
                <span className="text-orange-500">King of Marketing</span>
              </h2>
            </FadeIn>

            <div className="space-y-6">
              {[
                {
                  label: "Ownership of your audience",
                  icon: <Users className="text-orange-500" />,
                },
                {
                  label: "Personalized Customer Journeys",
                  icon: <MousePointerClick className="text-orange-500" />,
                },
                {
                  label: "Highest Conversion Rates",
                  icon: <CheckCircle2 className="text-orange-500" />,
                },
                {
                  label: "Automated Sales Funnels",
                  icon: <Zap className="text-orange-500" />,
                },
              ].map((item, i) => (
                <FadeIn key={i} direction="up" delay={0.1 * i}>
                  <div className="flex items-center  gap-5 bg-gray-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-transparent hover:border-orange-500 transition-colors">
                    {item.icon}
                    <p className="text-lg font-bold dark:text-gray-200">
                      {item.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Components for Continuity */}

      <ShapeChangeSection />

      {/* 🚀 FINAL EMAIL CTA: High Conversion & Consistent */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-24 md:py-32 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_30px_70px_rgba(0,0,0,0.5)] group"
            style={{
              backgroundImage: "url('/email-cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed", // Consistent Parallax
            }}
          >
            {/* 🔹 Consistent Overlay: Black to Brand Orange hint */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-[#B54118]/20 z-0"></div>

            {/* 🔹 Glassmorphism Border Overlay */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#B54118]/30 transition-all duration-500"></div>

            <div className="relative z-20 max-w-5xl mx-auto px-6">
              <FadeIn direction="up" className="flex flex-col items-center">
                {/* Top Status Badge */}
              <div className="flex justify-center mb-8">
                 <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                    Revenue Focused
                  </span>
                </div>

                <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                  Stop Leaving Money <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    On The Table
                  </span>
                </h2>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.2}
                className="flex flex-col items-center"
              >
                <p className="mx-auto mb-14 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl italic">
                  "Let us build an email marketing system that consistently
                  brings back customers and scales your business revenue."
                </p>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.4}
                className="flex flex-col items-center"
              >
                <Link href="/contact-us">
                  <button className="relative px-12 py-6 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(181,65,24,0.6)]">
                    {/* Shine Animation Effect */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-xl uppercase tracking-widest">
                      Launch Your Campaign →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* 🔹 Decorative Glowing Accents */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B54118]/10 blur-[130px] rounded-full -z-10"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B54118]/10 blur-[130px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default EmailMarketingPage;
