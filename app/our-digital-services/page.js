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
      desc: "Building fast, secure, and SEO-friendly websites using the power of Next.js, React, and custom WordPress solutions.",
      icon: <Globe className="w-8 h-8" />,
      bgColor: "bg-orange-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Graphic Design",
      desc: "Prioritizing user experience by designing modern, clean, and engaging interfaces tailored for your audience.",
      icon: <Palette className="w-8 h-8" />,
      bgColor: "bg-blue-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-blue-600",
    },
    {
      title: "SEO",
      desc: "Driving high-quality organic traffic by ranking your website at the top of Google search results.",
      icon: <TrendingUp className="w-8 h-8" />,
      bgColor: "bg-green-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-green-600",
    },
    {
      title: "Digital Marketing",
      desc: "Expanding your brand's reach to your target audience through strategic social media management and search engine ads.",
      icon: <Megaphone className="w-8 h-8" />,
      bgColor: "bg-purple-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-purple-600",
    },
    {
      title: "Brand Identity",
      desc: "Crafting a unique identity for your business, from professional logo design to a consistent and impactful brand voice.",
      icon: <Fingerprint className="w-8 h-8" />,
      bgColor: "bg-red-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-red-600",
    },
    // ... baqi services same rahengi
    {
      title: "Creative Content",
      desc: "Developing high-performance hybrid and native mobile applications for both iOS and Android platforms.",
      icon: <PenTool className="w-8 h-8" />,
      bgColor: "bg-yellow-100",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-yellow-600",
    },
  ];

  return (
    // Main Section: Isay py-20 ki zarurat Hero mein nahi hoti agar aap h-screen use kar rahe hain
    <section className="relative w-full">
      {/* Hero Container */}
      <div className="relative  h-[85vh] md:h-screen w-full">
        {/* Background Image */}
        <Image
          src="/services-hero.jpg"
          alt="Services Hero"
          fill
          priority
          className="object-cover object-center" // object-cover image ko stretch hone se bachata hai
        />

    {/* Overlay: Taaki image ke upar text parha ja sakay */}
<div className="absolute inset-0 w-full bg-black/50 flex flex-col justify-center items-center space-y-3">
  
  {/* Content wahi hai, sirf FadeIn par 'w-full' add kiya hai */}
  <FadeIn direction="up" delay={0.2} className="w-full">
    <h1 className="text-white text-5xl mx-auto md:text-7xl text-center font-bold mt-26 max-w-3xl px-4">
      Data-Driven Services to{" "}
      <span className="text-orange-500">Scale Your Business</span> for
      Growth
    </h1>
  </FadeIn>

  <FadeIn direction="up" delay={0.4} className="w-full">
    <p className="text-white text-lg mx-auto md:text-xl text-center max-w-2xl px-4">
      We provide end-to-end digital solutions that help brands grow,
      engage, and dominate their niche
    </p>
  </FadeIn>

  {/* 🔹 FIX: Yahan 'flex justify-center' add kiya hai taake button center mein aaye */}
 <FadeIn direction="up" delay={0.6} className="w-full">
  {/* 🔹 FIX: Button ko is div mein wrap kiya taake alignment force ho sake */}
  <div className="w-full flex justify-center">
    <button className="mt-8 px-8 py-4 bg-[#B54118] text-white font-semibold rounded-xl hover:scale-105 transition shadow-lg">
      Explore Our Services →
    </button>
  </div>
</FadeIn>

</div>
      </div>
      {/*   */}
      {/* Services Section  */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Text */}
          <div className="text-center mb-16">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Solutions Tailored for <br />
                <span className="text-[#B54118]">Your Growth</span>
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                Latest technology aur data-driven strategy ke sath hum aapki
                brand identity ko next level par le jate hain.
              </p>
            </FadeIn>
          </div>
          {/* Services Grid  */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <FadeIn key={index} direction="up" delay={0.1 * index}>
                <div
                  className="group h-full p-10 bg-white dark:bg-[#000B25] rounded-[2.5rem] 
        border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 
        transition-all duration-300 flex flex-col"
                >
                  <div
                    className={`w-16 h-16 ${service.bgColor} ${service.hoverBg} ${service.hoverIcon} 
          rounded-2xl flex items-center justify-center mb-6 transition-all 
          duration-300 group-hover:rotate-12 shrink-0`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className="text-2xl font-bold text-slate-800 dark:text-white mb-4 
          transition-colors group-hover:text-[#B54118]"
                  >
                    {service.title}
                  </h3>

                  {/* 'flex-grow' ensures all cards look uniform even with short text */}
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
      <section
        className="relative py-20 mx-4 my-20 rounded-[2rem] text-white text-center px-6 md:mx-20 bg- bg-cover bg-fixed overflow-hidden shadow-2xl"
        style={{ backgroundImage: "url('/services-cta.jpg')" }}
      >
        {/* Overlay using your secondary color variable with transparency */}
        <div className="absolute inset-0 bg-[black]/80 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
            Ready to Scale Your <br />
            <span className="text-[var(--color-primary)]">Digital Reach?</span>
          </h2>

          <p className="mx-auto mb-10 text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl">
            We don’t just build websites; we create growth engines. Let’s turn
            your business goals into a digital reality today.
          </p>

          <Link href="/contact-us">
            <button className="px-10 py-5 bg-[var(--color-primary)] text-white font-bold rounded-2xl hover:scale-105 hover:brightness-110 transition-all duration-300 shadow-lg uppercase tracking-widest">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default page;
