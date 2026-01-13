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

const page = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Designing high-performance, secure, and SEO-optimised websites using Next.js, React, and custom WordPress solutions built for scalability and conversions.",
      icon: <Globe className="w-8 h-8" />,
      bgColor: "bg-orange-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Graphic Design",
      desc: "Creating visually compelling, user-focused designs that enhance user experience, strengthen brand identity, and engage your target audience.",
      icon: <Palette className="w-8 h-8" />,
      bgColor: "bg-blue-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "SEO",
      desc: "Improving search engine visibility and driving high-quality organic traffic through strategic, results-focused Google ranking optimisation.",
      icon: <TrendingUp className="w-8 h-8" />,
      bgColor: "bg-green-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Digital Marketing",
      desc: "Driving brand growth by connecting with the right audience through strategic social media management and search engine-led growth strategies.",
      icon: <Megaphone className="w-8 h-8" />,
      bgColor: "bg-purple-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Social Media Marketing",
      desc: "Building brand awareness and meaningful engagement through strategic content, platform-focused management, and data-led social growth.",
      icon: <Fingerprint className="w-8 h-8" />,
      bgColor: "bg-red-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    // ... baqi services same rahengi
    {
      title: "Creative Content",
      desc: "Crafting high-quality, audience-focused content that strengthens brand messaging, builds trust, and drives meaningful engagement.",
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
          alt="Services Hero"
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
            font-bold mt-26 max-w-3xl px-4"
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
      {/* Services Section  */}
      <section className="py-10 bg-gray-200 dark:bg-[#000B25] dark:border-t-2 dark:border-orange-700">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Text */}
          <div className="text-center mb-16">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                Data-Powered Solutions for <br />
                <span className="text-[#B54118]">Next-Level Growth</span>
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <p className="mt-4 text-gray-600 dark:text-white max-w-2xl mx-auto text-lg">
                Leveraging the latest technology and data-driven strategies, we
                elevate your brand identity and maximise online visibility.
              </p>
            </FadeIn>
          </div>
          {/* Services Grid  */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              /* FadeIn ko 'h-full' dena zaroori hai taake grid stretch ho sakay */
              <FadeIn
                key={index}
                direction="up"
                delay={0.1 * index}
                className="h-full"
              >
                <div
                  className="group h-full p-10 bg-white dark:bg-gray-700 rounded-[2.5rem] 
        border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 
        transition-all duration-300 flex flex-col"
                >
                  <div
                    className={`w-16 h-16 ${service.bgColor} ${service.hoverBg} ${service.hoverIcon} 
          rounded-2xl flex items-center justify-center mb-6 transition-all 
          duration-300 group-hover:rotate-12  shrink-0`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className="text-2xl font-bold text-slate-800 dark:text-white mb-4 
          transition-colors group-hover:text-[#B54118] "
                  >
                    {service.title}
                  </h3>

                  {/* 'flex-grow' text ko expansion deta hai aur cards ko match karta hai */}
                  <p className="text-gray-600 dark:text-white leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <HorizontalProcess />
      <ShapeChangeSection />
      <VShapeTransition />
      {/* CTA Section */}
      <section className="dark:bg-black py-20 dark:border-y-2 dark:border-orange-700 ">
        <div
          className="relative py-20 mx-4 my-20 rounded-[2rem] text-white text-center dark:border dark:border-[#B54118] px-6 md:mx-20 bg- bg-cover bg-fixed overflow-hidden shadow-2xl"
          style={{ backgroundImage: "url('/services-cta.jpg')" }}
        >
          {/* Overlay using your secondary color variable with transparency */}
          <div className="absolute inset-0 bg-[black]/80 z-0"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
              Scale Your Online Presence with Confidence <br />
            </h2>

            <p className="mx-auto mb-10 text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl">
              We design and optimise digital solutions that convert visitors
              into customers, helping your business achieve measurable growth.
              Start your journey today.
            </p>

            <Link href="/contact-us">
              <button className="px-6 py-4 bg-[#B54118] text-white font-bold rounded-2xl hover:scale-105 hover:brightness-110 transition-all duration-300 shadow-lg uppercase tracking-widest">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
