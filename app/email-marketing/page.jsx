import Image from "next/image";
import React from "react";
import { 
  Mail, 
  Users, 
  BarChart3, 
  Zap, 
  MousePointerClick, 
  CheckCircle2,
  Workflow
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

      {/* --- CORE FEATURES GRID --- */}
      <section className="py-24 bg-gray-50 dark:bg-[#020817] dark:border-t-2 dark:border-orange-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col justify-center items-center mb-16 gap-6">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 text-center dark:text-white leading-tight">
                Maximum Impact, <br />
                <span className="text-[#B54118]">Zero Spam</span>
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="flex justify-center">
              <p className="text-gray-600 dark:text-gray-400 text-lg text-center max-w-2xl">
                We bridge the gap between your brand and your customers through 
                targeted messaging that actually gets opened and clicked.
              </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emailServices.map((item, index) => (
              <FadeIn key={index} direction="up" delay={0.2 * index}>
                <div className="group p-10 bg-white dark:bg-slate-700 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                  <div className={`w-16 h-16 ${item.bgColor} ${item.hoverBg} group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:rotate-[15deg]`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold dark:text-white mb-4">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
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
                <p className="text-sm opacity-80 uppercase tracking-widest font-bold">Average ROI</p>
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
                { label: "Ownership of your audience", icon: <Users className="text-orange-500" /> },
                { label: "Personalized Customer Journeys", icon: <MousePointerClick className="text-orange-500" /> },
                { label: "Highest Conversion Rates", icon: <CheckCircle2 className="text-orange-500" /> },
                { label: "Automated Sales Funnels", icon: <Zap className="text-orange-500" /> }
              ].map((item, i) => (
                <FadeIn key={i} direction="up" delay={0.1 * i}>
                  <div className="flex items-center  gap-5 bg-gray-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-transparent hover:border-orange-500 transition-colors">
                    {item.icon}
                    <p className="text-lg font-bold dark:text-gray-200">{item.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Components for Continuity */}
      
      <ShapeChangeSection />
      

      {/* --- FINAL CTA --- */}
       <section className="dark:bg-black py-20 dark:border-y-2 dark:border-orange-700 ">
      <div
        className="relative py-24 mx-4 my-20 rounded-[3rem] text-white text-center dark:border dark-border-white px-6 md:mx-20 bg-center bg-fixed overflow-hidden shadow-3xl"
        style={{ backgroundImage: "url('/email-cta.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter">
              Stop Leaving Money <br />
              <span className="text-orange-500">On The Table</span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="mx-auto mb-12 text-lg md:text-xl text-gray-300 max-w-2xl font-light">
              Let us build an email marketing system that consistently brings 
              back customers and scales your business revenue.
            </p>
          </FadeIn>
          <Link href="/contact-us">
            <button className="px-12 py-6 bg-[#B54118] text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl uppercase tracking-widest text-sm">
              Launch Your Campaign
            </button>
          </Link>
        </div>
      </div>
      </section>
    </section>
  );
};

export default EmailMarketingPage;