import Image from "next/image";
import React from "react";
import {
  Code2,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
  Check,
  Laptop,
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";

export const metadata = {
  title: "Custom WordPress Website Development UK | BizGrow Digital",
  description:
    "High-performance, secure WordPress websites built for UK businesses. Fast loading, SEO-optimised, scalable, and conversion-focused.",
  alternates: {
    canonical: "https://bizgrow-digital.co.uk/wordpress-website/",
  },
  };

const WordPressPage = () => {
  return (
    <section className="w-full bg-white ">
      {/* --- HERO: Fixed Centering --- */}
      <div className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/Laptop mockup.jpg"
          alt="WordPress Development"
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />

        {/* Overlay ko 'to-r' se hata kar radial ya simple black overlay karein taake center text nazar aaye */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Yahan 'text-center' aur 'items-center' add kiya gaya hai */}
        <div className="relative z-10 max-w-7xl mx-auto md:pt-10 px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            {" "}
            {/* Direction 'up' center ke liye zyada suit karti hai */}
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Enterprise-Grade WordPress Websites
            </span>
            <h1 className="text-white text-5xl md:text-6xl  font-black leading-tiet mb-6">
              WordPress Engineered for{" "}
              <span className="text-orange-500">Business </span>
              GROWTH
            </h1>
            <p className="text-gray-300 text-lg md:text-lg max-w-2xl mb-10 mx-auto">
              {" "}
              {/* mx-auto added */}
              Generic themes limit your potential. We create high-performance,
              scalable, and secure WordPress websites tailored for UK brands
              that drive engagement and results.
            </p>
            <div className="flex justify-center gap-4">
              {" "}
              {/* justify-center added */}
              <button className="bg-[#B54118] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all">
                Build Your WordPress Platform →
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* --- NEW SECTION: The "Not Just a Theme" Grid --- */}
      <section className="w-full dark:bg-black  dark:border-t-2 dark:border-orange-700 ">
        <div className="py-14 max-w-7xl mx-auto px-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-5xl font-black text-center dark:text-white mb-6">
                What We Deliver
              </h2>
              <p className="text-gray-500 text-center  dark:text-gray-400">
                We build performance-focused <Link href="https://bizgrow-digital.co.uk/wordpress-on-page-seo-checklist/" className="text-[#B54118] underline">WordPress websites</Link>  without bloated
                page builders or unnecessary plugins, ensuring fast load times,
                strong search visibility, and long-term scalability for UK
                businesses.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Headless WordPress Architecture",
                  icon: <Code2 className="w-8 h-8" />,
                  desc: <>WordPress is used as a <Link href="https://bizgrow-digital.co.uk/write-better-content-with-these-e-e-a-t-seo-techniques/ " className="text-[#B54118] underline">powerful content</Link> backend, combined with React or Next.js on the front end for superior speed and flexibility.</>,
                },
                {
                  title: "Custom Admin Experience",
                  icon: <LayoutDashboard className="w-8 h-8" />,
                  desc: "Clean, tailored admin dashboards that allow your team to manage content confidently without risking site stability.",
                },
                {
                  title: "Enterprise-Level Security",
                  icon: <ShieldCheck className="w-8 h-8" />,
                  desc: "Advanced server-side security hardening to protect your website, data, and users from vulnerabilities and threats.",
                },
                {
                  title: "Core Web Vitals Optimisation",
                  icon: <Rocket className="w-8 h-8" />,
                  desc: "Built to meet Google’s performance standards, delivering fast, stable, and user-friendly experiences that support higher rankings.",
                },
              ].map((box, i) => (
                <div
                  key={i}
                  className="group relative p-10 bg-white dark:bg-[#001235]/40 backdrop-blur-md rounded-[2.5rem] border-2 border-slate-100 dark:border-white/5 shadow-xl hover:shadow-[#B54118]/20 transition-all duration-500 overflow-hidden hover:-translate-y-2"
                >
                  {/* 🔹 Animated Icon Container */}
                  <div className="relative mb-6">
                    <div className="relative z-10 text-[#B54118] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {box.icon}
                    </div>
                    {/* Subtle glow behind icon on hover */}
                    <div className="absolute inset-0 bg-[#B54118]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  </div>

                  {/* 🔹 Title & Desc */}
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[#B54118] transition-colors">
                    {box.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
                    {box.desc}
                  </p>

                  {/* 🔹 Bottom Decorative Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[#B54118] group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 🚀 PREMIUM COMPARISON: Standard vs BizGrow */}
      <section className="dark:bg-black py-24 relative overflow-hidden dark:border-t-2 dark:border-orange-700">
        {/* Background Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#B54118]/5 blur-[120px] rounded-full -z-10" />

        <div className="relative py-20 bg-slate-900 dark:bg-[#001235]/30 backdrop-blur-xl border-2 border-white/5 dark:border-white/10 text-white rounded-[3.5rem] mx-4 md:mx-10 shadow-2xl overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase">
                Standard WordPress vs{" "}
                <span className="text-[#B54118]">BizGrow WordPress</span>
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
              {/* ❌ SLOW & BLOATED CARD - Updated for better visibility */}
              <FadeIn direction="left" delay={0.2}>
                <div className="h-full p-10 border border-white/10 rounded-[2.5rem] bg-white/5 hover:bg-white/[0.08] transition-all duration-500 group relative overflow-hidden">
                  {/* Subtle Red Glow for "Warning/Negative" vibe */}
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-500/5 blur-3xl rounded-full" />

                  <h3 className="text-2xl font-bold mb-8 text-gray-400 tracking-wide group-hover:text-gray-300 transition-colors">
                    Standard WordPress Websites
                  </h3>

                  <ul className="space-y-6 text-left">
                    {[
                      "Slow, bloated performance",
                      "Generic pre-built themes",
                      "Multiple unnecessary plugins",
                      "Poor mobile speed and usability",
                      "Higher security and maintenance risks",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-sm md:text-base font-medium text-gray-500 group-hover:text-gray-400 transition-colors"
                      >
                        {/* Icons ko dull se "Sharp Muted Red" kiya hai */}
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500/10 border border-red-500/20 text-red-500/70 flex items-center justify-center text-xs font-bold">
                          ✕
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* ✅ BIZ GROW WP (THE WINNER) */}
              <FadeIn direction="right" delay={0.4}>
                <div className="relative h-full p-10 border-2 border-[#B54118] rounded-[2.5rem] bg-[#B54118]/10 shadow-[0_0_40px_rgba(181,65,24,0.15)] overflow-hidden group">
                  {/* Winner Badge */}
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-[#B54118] px-6 py-2 rounded-b-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-lg">
                    The Winner
                  </div>

                  <h3 className="text-2xl font-black mb-8 text-[#B54118] uppercase tracking-tight">
                    BizGrow WordPress Solutions
                  </h3>

                  <ul className="space-y-6 text-left">
                    {[
                      "Performance-engineered architecture",
                      "Lightweight, custom-built code",
                      "Zero-bloat development approach",
                      <><Link href="https://bizgrow-digital.co.uk/search-engine-optimisation/" className="text-[#B54118] underline">SEO</Link>and Core Web Vitals optimised</>,
                      "Enterprise-level security standards",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-sm md:text-base font-bold dark:text-white group-hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/30">
                          <Check size={14} strokeWidth={4} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Subtle Inner Glow */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#B54118]/20 blur-3xl rounded-full" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      {/* 🚀 FINAL CTA: WordPress Masterpiece (The Signature Style) */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-24 md:py-32 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_30px_70px_rgba(0,0,0,0.5)] group"
            style={{
              backgroundImage: "url('/wp-cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed", // Smooth Parallax
            }}
          >
            {/* 🔹 Depth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-[#B54118]/20 z-0"></div>

            {/* 🔹 Glass Border (Aapki Brand Identity) */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#B54118]/30 transition-all duration-500"></div>

            <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center">
              {/* Top Badge */}
              <FadeIn direction="up" className="flex flex-col items-center">
                <span className="px-6 py-2  rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                  WordPress Excellence
                </span>

                <h2 className="text-4xl md:text-7xl mt-4 font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                  Let’s Build Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    WordPress Website
                  </span>
                </h2>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.2}
                className="flex flex-col items-center"
              >
                <p className="mx-auto mb-12 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl italic">
                  "Ready to launch a WordPress website that drives growth,
                  engages your audience, and positions your brand professionally
                  online?"
                </p>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.4}
                className="flex flex-col items-center"
              >
                <Link href="/contact-us">
                  {/* 🎯 FIXED PREMIUM BUTTON */}
                  <button className="relative px-8 py-4 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(181,65,24,0.6)]">
                    {/* Shine Effect */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-lg uppercase tracking-[0.2em]">
                      Start Your Project →
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

export default WordPressPage;
