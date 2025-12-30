import Image from "next/image";
import React from "react";
import { 
  Globe, 
  Palette, 
  TrendingUp, 
  Megaphone, 
  Fingerprint, 
  Smartphone 
} from "lucide-react";
import HorizontalProcess from "@components/HorizontalProcess";
import ShapeChangeSection from "@components/test";
import BoathouseShapeSection from "@components/test2";
import VShapeTransition from "@components/test2";
import VShapeTransition2 from "@components/test3";

const page = () => {

  const services = [
    {
      title: "Web Development",
      desc: "Next.js aur React ka use karke hum fast, secure aur SEO-friendly websites banate hain.",
      icon: <Globe className="w-8 h-8" />,
      bgColor: "bg-orange-200",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "UI/UX Design",
      desc: "User experience hamari priority hai. Hum modern aur clean interfaces design karte hain.",
      icon: <Palette className="w-8 h-8" />,
      bgColor: "bg-blue-200",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-blue-600",
    },
    {
      title: "SEO Mastery",
      desc: "Sirf traffic nahi, relevant traffic. Hum aapki website ko Google ke top results mein laate hain.",
      icon: <TrendingUp className="w-8 h-8" />,
      bgColor: "bg-green-200",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-green-600",
    },
    {
      title: "Digital Marketing",
      desc: "Social media aur search ads ke zariye hum aapki brand reach ko target audience tak pohnchate hain.",
      icon: <Megaphone className="w-8 h-8" />,
      bgColor: "bg-purple-200",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-purple-600",
    },
    {
      title: "Brand Identity",
      desc: "Logo design se lekar brand voice tak, hum aapki unique identity create karte hain.",
      icon: <Fingerprint className="w-8 h-8" />,
      bgColor: "bg-red-200",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-red-600",
    },
    {
      title: "App Development",
      desc: "iOS aur Android ke liye high-performance hybrid aur native mobile applications.",
      icon: <Smartphone className="w-8 h-8" />,
      bgColor: "bg-yellow-200",
      hoverIcon: "group-hover:text-white",
      hoverBg: "group-hover:bg-yellow-600",
    },
  ];
  
  return (
    // Main Section: Isay py-20 ki zarurat Hero mein nahi hoti agar aap h-screen use kar rahe hain
    <section className="relative w-full">
      {/* Hero Container */}
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <Image
          src="/services-hero.jpg"
          alt="Services Hero"
          fill
          priority
          className="object-cover object-center" // object-cover image ko stretch hone se bachata hai
        />

        {/* Overlay: Taaki image ke upar text parha ja sakay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center space-y-3">
          {/* Aapka Text Yahan Aayega */}
          <h1 className="text-white text-5xl md:text-7xl text-center font-bold mt-26 max-w-3xl">
            Data-Driven Services to{" "}
            <span className="text-orange-500">Scale Your Business</span> for
            Growth
          </h1>
          <p className="text-white text-lg md:text-xl text-center max-w-2xl">
            We provide end-to-end digital solutions that help brands grow,
            engage, and dominate their niche
          </p>
          <button className="mt-8 px-8 py-4 bg-[#B54118] text-white font-semibold rounded-xl hover:scale-105 transition">
            Explore Our Services →
          </button>
        </div>
      </div>
      {/*   */}
      {/* Services Section  */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Text */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Solutions Tailored for <br />
              <span className="text-[#B54118]">Your Growth</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Latest technology aur data-driven strategy ke sath hum aapki brand
              identity ko next level par le jate hain.
            </p>
          </div>
       {/* Services Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div 
          key={index}
          className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 
          shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className={`w-16 h-16 ${service.bgColor} ${service.hoverBg} ${service.hoverIcon} rounded-2xl 
          flex items-center justify-center mb-6 transition-all 
          duration-300 group-hover:rotate-12`}>
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4 transition-colors 
          group-hover:text-[#B54118]">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {service.desc}
          </p>
        </div>
      ))}
    </div>
        </div>
      </section>
      <HorizontalProcess/>
      <ShapeChangeSection/>
      <VShapeTransition/>
      <VShapeTransition2/>
    </section>
    
  );
};

export default page;
