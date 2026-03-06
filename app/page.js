import Image from "next/image";
import React from "react";
import ServicesServer from "@components/ServicesServer";
import Link from "next/link";
import FadeIn from "@components/MotionWrapper";
import { TrendingUp, Search, Palette, BarChart3, Globe2 } from "lucide-react";

export const metadata = {
  title: "BizGrow Digital | Expert Digital Marketing Services UK", // Ye layout wale template ki wajah se "About Us | BizGrow Digital" ban jayega
  description:
    "BizGrow Digital’s UK digital marketing agency helps businesses grow with SEO, social media, web development, and lead generation strategies.",
  alternates: {
    canonical: "https://bizgrow-digital.co.uk/",
  },
};

const HomePage = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[95vh] md:h-screen">
        <Image
          src="/admin-ajax.webp"
          fill
          priority
          fetchPriority="high"
          alt="Home Page - BizGrow Digital"
          className="object-cover transition-all duration-700" // Smooth transition ke liye
          placeholder="blur"
          // Ye Base64 code image ko load hone tak ek premium "Dark Grey/Blue" blur dikhayega
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8AKpT899BQAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 w-full bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-white text-3xl md:text-5xl mt-20   md:mx-28 font-bold md:leading-[4rem]">
              Smart Digital Marketing Solutions for UK Business Growth
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="mt-6 text-white max-w-4xl mx-auto text-sm md:text-lg">
              We help UK businesses increase online visibility, attract
              qualified leads, and grow faster through SEO, web development, and
              data-driven digital marketing strategies.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.6}>
            <Link href="/our-digital-services">
              <button className="mt-8 px-8 py-4 bg-[#B54118] text-white font-semibold rounded-xl hover:scale-105 transition">
                Explore Our Services →
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 🚀 UNIQUE FEATURE SECTION: Boost Online Presence */}
      <section className="relative py-24 bg-white dark:bg-[#000B25]  overflow-hidden">
        {/* Background Subtle Branding Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#B54118]/5 blur-[100px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B54118]/5 blur-[130px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 🔹 Left Content: Text & Action */}
            <div className="relative z-10">
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-white/5 border border-orange-100 dark:border-white/10 mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B54118] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B54118]"></span>
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest text-[#B54118] dark:text-orange-400">
                    Skyrocket Your Growth
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tighter">
                  Boost Your Online Presence with <br />
                  <span className="text-[#B54118] inline-block mt-2">
                    BizGrow Digital
                  </span>
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="space-y-6">
                  <p className="text-black dark:text-gray-300 text-lg leading-relaxed font-medium">
                    Ready to attract more clients, increase website traffic, and
                    generate qualified leads? BizGrow Digital delivers{" "}
                    <span className="text-[#B54118] dark:text-orange-500 font-bold underline">
                      <Link href="https://bizgrow-digital.co.uk/how-digital-marketing-drives-faster-growth-for-businesses/ ">
                        results-driven digital marketing UK businesses
                      </Link>
                    </span>{" "}
                    helping brands grow with confidence.
                  </p>

                  <p className="text-black dark:text-gray-400 text-base leading-relaxed border-l-4 border-[#B54118] pl-6 italic">
                    Our team builds high-performing websites, improves Google
                    rankings through SEO, and creates targeted social media
                    marketing strategies that connect your business with the
                    right audience.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <div className="mt-12">
                  <Link href="/our-digital-services">
                    <button className="group relative px-8 py-5 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(181,65,24,0.3)]">
                      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                      <span className="relative z-10 flex items-center gap-3">
                        Learn More About Our Services
                        <span className="transition-transform group-hover:translate-x-2">
                          →
                        </span>
                      </span>
                    </button>
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* 🔹 Right Content: Dynamic Image & Floating Elements */}
            <div className="relative group">
              <FadeIn direction="left" delay={0.4}>
                {/* Main Image Container with Border Accent */}
                <div className="relative z-10 p-4 border border-orange-700/10 dark:border-white/5 rounded-[3rem] backdrop-blur-sm">
                  <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl">
                    <Image
                      src="/boost.jpg"
                      alt="Boost Online Presence"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                    {/* Overlay on Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Floating Stats Card (Adding a professional touch) */}
                <div className="absolute -bottom-8 left-6 md:bottom-12 md:-left-12 z-20 bg-white dark:bg-[#001235] p-6 rounded-3xl shadow-2xl border border-orange-700/10 dark:border-white/10 animate-bounce-slow">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 dark:bg-[#B54118]/20 rounded-2xl">
                      <TrendingUp className="text-[#B54118] h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                        Growth Rate
                      </p>
                      <p className="text-2xl font-black text-slate-900 dark:text-white">
                        +145%
                      </p>
                    </div>
                  </div>
                </div>

                {/* Background Decorative Frame */}
                <div className="absolute top-12 -right-12 w-full h-full border-2 border-[#B54118]/20 rounded-[3rem] -z-10 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="relative">
        <ServicesServer />
      </section>

      {/* 🚀 NEW SECTION: Industries We Help Grow */}
      <section className="py-24 bg-white dark:bg-[#000B25] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">
                Industries <span className="text-[#B54118]">We Work With</span>
              </h2>
              <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg font-medium">
                While we love to work with all of our clients, there is no doubt
                our portfolio is extensive. We have extreme command over
                multiple sectors helping them achieve sustainable digital
                growth.
              </p>
            </FadeIn>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {[
              { name: "E-commerce", img: "/ecommerce-h.jpg" },
              { name: "Construction", img: "/Construction-h.jpg" },
              { name: "Real Estate", img: "/Real Estate-h.jpg" },
              { name: "Healthcare", img: "/healthcare-h.jpg" },
              { name: "Hospitality", img: "/HOSPITALITY (1).jpg" },
              { name: "Education ", img: "/education-h.jpg" },
            ].map((industry, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="group relative flex flex-col items-center">
                  {/* Image Container */}
                  <div className="relative w-full aspect-square overflow-hidden rounded-[2rem] mb-4 shadow-lg border border-gray-100 dark:border-[#B54118]">
                    <Image
                      src={industry.img}
                      alt={industry.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 "
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-[#B54118]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  {/* Industry Name */}
                  <h3 className="text-sm md:text-lg font-black uppercase tracking-widest text-slate-800 dark:text-white group-hover:text-[#B54118] transition-colors">
                    {industry.name}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA Line for Industries */}
          <FadeIn direction="up" delay={0.6}>
            <div className="mt-20 p-10 bg-gray-50 dark:bg-[#001235]/50 rounded-[2.5rem] border  border-[#B54118] text-center">
              <h4 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Start Your{" "}
                <span className="text-[#B54118]">UK Digital Growth</span> Today
              </h4>
              <Link href="/contact-us">
                <button className="px-10 py-4 bg-[#B54118] text-white font-black uppercase tracking-widest text-xs rounded-xl hover:shadow-[0_15px_30px_rgba(181,65,24,0.4)] transition-all">
                  Get a Free Strategy Call
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 🚀 SECTION: Why Businesses Trust BizGrow Digital */}
      <section className="py-24 bg-gray-50 dark:bg-black text-center px-6 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B54118] to-transparent opacity-30" />

        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-black text-[#B54118] mb-6 uppercase tracking-tighter">
              <span className="text-slate-900 dark:text-white">
                Why Businesses Trust{" "}
              </span>
              BizGrow Digital?{" "}
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mb-16 text-lg md:text-xl leading-relaxed font-medium">
              BizGrow Digital is a trusted digital marketing agency helping UK
              businesses improve online visibility, generate qualified leads,
              and achieve measurable growth through innovative digital
              strategies.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
            {/* 🔹 Braces yahan shuru ho rahi hain JS mapping ke liye */}
            {[
              {
                icon: <TrendingUp size={40} strokeWidth={2} />,
                title: "Results-Driven Marketing",
                desc: "Our focus is simple: delivering measurable outcomes such as increased traffic, higher search rankings, and more qualified leads.",
                dir: "left",
              },
              {
                icon: <Globe2 size={40} strokeWidth={2} />,
                title: "UK Market Understanding",
                desc: "We understand the UK digital landscape and create strategies that connect businesses with the right local and national audiences.",
                dir: "up",
              },
              {
                icon: <BarChart3 size={40} strokeWidth={2} />,
                title: "Transparent Performance Reporting",
                desc: "Clear analytics and regular reporting keep you informed about the performance of your digital marketing activities.",
                dir: "right",
              },
            ].map((item, index) => (
              <FadeIn
                key={index}
                direction={item.dir}
                delay={0.2 * (index + 1)}
                className="h-full"
              >
                <div className="group relative h-full bg-white dark:bg-[#001235]/50 backdrop-blur-sm border-2 border-transparent dark:border-white/5 p-10 rounded-[2rem] shadow-xl hover:shadow-[#B54118]/20 hover:border-[#B54118]/50 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
                  {/* Icon Box */}
                  <div className="relative z-10 mb-8 p-5 rounded-2xl bg-orange-50 dark:bg-[#B54118]/10 text-[#B54118] group-hover:bg-[#B54118] group-hover:text-white transition-all duration-500 transform group-hover:-rotate-12 shadow-md">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="relative z-10 text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="relative z-10 text-gray-600 dark:text-gray-300 text-base leading-relaxed flex-grow">
                    {item.desc}
                  </p>

                  {/* Bottom Accent Line & Floating Glow */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-[#B54118] group-hover:w-full transition-all duration-700" />
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#B54118]/10 blur-3xl rounded-full group-hover:bg-[#B54118]/20 transition-all" />
                </div>
              </FadeIn>
            ))}
            {/* 🔹 Braces yahan khatam ho rahi hain */}
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA SECTION: Consistent & Impactful */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-20 md:py-22 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] group"
            style={{
              backgroundImage: "url('/hero-cta.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed", // Consistent Parallax
            }}
          >
            {/* 🔹 Consistent Overlay - Matching the first CTA */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#B54118]/30 z-0"></div>

            {/* 🔹 Glassmorphism Border */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none transition-colors duration-500 group-hover:border-[#B54118]/40"></div>

            <div className="relative z-20 max-w-4xl mx-auto px-6">
              <FadeIn direction="up">
                <div className="flex justify-center mb-6">
                  <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                    Let's Partner Up
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
                  Trusted by Top UK GROWING BUSINESSES:
                  <br />
                  <span className="text-[#B54118]">
                    Let's Build Your Success.
                  </span>
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="mb-12 text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed italic">
                  “BizGrow Digital helps your UK business grow online. We build
                  high-performing websites, improve your SEO, and deliver
                  marketing strategies that generate real results.”
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <Link href="/contact-us">
                  <button className="relative px-8 py-4 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(181,65,24,0.6)]">
                    {/* Shine Animation Effect */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-xl uppercase tracking-wider">
                      Contact Us Now
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* 🔹 Animated Accents for Consistency */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#B54118]/10 blur-[100px] rounded-full -z-10"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B54118]/10 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
