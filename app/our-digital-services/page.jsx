import Image from "next/image";
import React from "react";
import {
  Globe,
  Palette,
  TrendingUp,
  Megaphone,
  Fingerprint,
  PenTool,
} from "lucide-react";
import HorizontalProcess from "@components/HorizontalProcess";
import ShapeChangeSection from "@components/test";
import VShapeTransition from "@components/test2";
import Link from "next/link";
import FadeIn from "@components/MotionWrapper";

export const metadata = {
  title: "BizGrow Digital | Expert UK Digital Services",
  description:
    "Explore BizGrow Digital’s full range of UK-based digital services, designed to grow your business, boost visibility, and drive results online.",
};

const page = () => {
  const services = [
    {
      title: "Web Development",
      path: "/web-development", // Folder name in your app directory
      desc: "Designing high-performance, secure, and SEO-optimised websites using Next.js, React, and custom WordPress solutions built for scalability and conversions.",
      icon: <Globe className="w-8 h-8" />,
      bgColor: "bg-orange-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Graphic Design",
      path: "/graphic-design-services",
      desc: "Creating visually compelling, user-focused designs that enhance user experience, strengthen brand identity, and engage your target audience.",
      icon: <Palette className="w-8 h-8" />,
      bgColor: "bg-blue-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "SEO",
      path: "/search-engine-optimisation",
      desc: "Improving search engine visibility and driving high-quality organic traffic through strategic, results-focused Google ranking optimisation.",
      icon: <TrendingUp className="w-8 h-8" />,
      bgColor: "bg-green-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Digital Marketing",
      path: "/digital-marketing-services",
      desc: "Driving brand growth by connecting with the right audience through strategic social media management and search engine-led growth strategies.",
      icon: <Megaphone className="w-8 h-8" />,
      bgColor: "bg-purple-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Social Media Marketing",
      desc: "Building brand awareness and meaningful engagement through strategic content, platform-focused management, and data-led social growth.",
      path: "/social-media-marketing",
      icon: <Fingerprint className="w-8 h-8" />,
      bgColor: "bg-red-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-[#B54118]",
    },

    {
      title: "Creative Content",
      desc: "Crafting high-quality, audience-focused content that strengthens brand messaging, builds trust, and drives meaningful engagement.",
      path: "/creative-content",
      icon: <PenTool className="w-8 h-8" />,
      bgColor: "bg-yellow-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-[#B54118]",
    },
  ];

  return (
    // Main Section: Isay py-20 ki zarurat Hero mein nahi hoti agar aap h-screen use kar rahe hain
    <section className="relative w-full">
      {/* Hero Container */}
      <div className="relative  h-[95vh] md:h-screen w-full">
        {/* Background Image */}
        <Image
          src="/services-hero.jpg"
          alt="UK Digital Services by BizGrow Digital"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center" // object-cover image ko stretch hone se bachata hai
        />

        {/* Overlay: Taaki image ke upar text parha ja sakay */}
        <div
          className="absolute inset-0 w-full bg-black/70 flex flex-col justify-center
         items-center space-y-3"
        >
          {/* Content wahi hai, sirf FadeIn par 'w-full' add kiya hai */}
          <FadeIn direction="up" delay={0.2} className="w-full">
            <h1
              className="text-white text-4xl mx-auto md:text-6xl text-center 
            font-bold mt-26 max-w-5xl px-4"
            >
              Data-Driven Solutions to{" "}
              <span className="text-orange-500">Scale Your Business </span>
              Growth
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} className="w-full">
            <p className="text-white text-md mx-auto md:text-xl text-center max-w-2xl px-4">
              We deliver end-to-end digital services that empower brands to
              increase visibility, attract qualified leads, and outperform their
              competition.
            </p>
          </FadeIn>

          {/* 🔹 FIX: Yahan 'flex justify-center' add kiya hai taake button center mein aaye */}
          <FadeIn direction="up" delay={0.6} className="w-full">
            {/* 🔹 FIX: Button ko is div mein wrap kiya taake alignment force ho sake */}
            <div className="w-full flex justify-center">
              <Link href="/contact-us">
                <button className="mt-8 px-8 py-4 bg-[#B54118] text-white font-semibold rounded-xl hover:scale-105 transition shadow-lg">
                  Contact Us →
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
      {/*   */}
      {/* 🚀 UNIQUE SERVICES GRID: Consistent & Premium */}
      <section className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B54118]/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header Text */}
          <div className="text-center mb-20">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
                Data-Powered Solutions for <br />
                <span className="text-[#B54118]">Next-Level Growth</span>
              </h2>
              <div className="w-24 h-2 bg-[#B54118] mx-auto mt-6 rounded-full" />
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="mt-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                Leveraging the latest technology and data-driven strategies, we
                elevate your brand identity and maximise online visibility.
              </p>
            </FadeIn>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
            {services.map((service, index) => (
              <FadeIn
                key={index}
                direction="up"
                delay={0.1 * index}
                className="h-full"
              >
                {/* 🔹 Consistent Card Styling */}
                <div className="group relative h-full p-10 bg-white dark:bg-[#001235]/40 backdrop-blur-md rounded-[2.5rem] border-2 border-slate-100 dark:border-white/5 shadow-xl hover:shadow-[#B54118]/20 transition-all duration-500 flex flex-col items-start text-left overflow-hidden">
                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-full bg-gradient-to-br from-[#B54118]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                  {/* Icon Container - Matching Home Style */}
                  <div
                    className={`w-20 h-20 ${service.bgColor} ${service.hoverBg} ${service.hoverIcon} 
              rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-all 
              duration-500 group-hover:rotate-[15deg] group-hover:scale-110 shrink-0 text-3xl`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-[#B54118] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow text-base font-medium">
                    {service.desc}
                  </p>

                  {/* 🔹 Consistent Arrow/Link for Services */}
                  <Link href={service.path} className="mt-8">
                    <div className="flex items-center gap-2 text-[#B54118] font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 cursor-pointer">
                      Explore More <span>→</span>
                    </div>
                  </Link>

                  {/* 🔹 Bottom Accent Line - Matching Why Choose Us */}
                  <div className="absolute bottom-0 left-0 w-0 h-2 bg-[#B54118] group-hover:w-full transition-all duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <HorizontalProcess />
      <ShapeChangeSection />
      <VShapeTransition />
    
      {/* 🚀 PREMIUM CTA SECTION: Services Page */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-20 md:py-22 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_20px_60px_rgba(181,65,24,0.15)] group"
            style={{
              backgroundImage: "url('/services-cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed", // Parallax consistent with Home
            }}
          >
            {/* 🔹 Dynamic Overlay: Depth create karne ke liye */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-[#B54118]/30 z-0"></div>

            {/* 🔹 Modern Glass Border */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#B54118]/30 transition-all duration-500"></div>

            <div className="relative z-20 max-w-4xl mx-auto px-6">
              <FadeIn direction="up">
                {/* Top Badge */}
                <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                  Take the Leap
                </span>

                <h2 className="text-4xl md:text-7xl mt-4 font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                  Scale Your Presence <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    with Confidence
                  </span>
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="mx-auto mb-12 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl italic">
                  "We design and optimise digital solutions that convert
                  visitors into customers, helping your business achieve
                  measurable growth."
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <Link href="/contact-us">
                  <button className="relative px-12 py-5 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(181,65,24,0.5)]">
                    {/* Shine Animation Effect */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-xl uppercase tracking-widest">
                      Get Started Now →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* 🔹 Background Glowing Orbs */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#B54118]/10 blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#B54118]/10 blur-[120px] rounded-full"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
