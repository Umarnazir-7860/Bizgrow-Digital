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
              Enterprise Grade CMS
            </span>
            <h1 className="text-white text-5xl md:text-6xl  font-black leading-none mb-6">
              WP <span className="text-orange-500">ENGINEERED</span> <br />
              FOR GROWTH
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 mx-auto">
              {" "}
              {/* mx-auto added */}
              Generic themes are for beginners. We build high-performance,
              scalable, and secure WordPress ecosystems tailored for brands.
            </p>
            <div className="flex justify-center gap-4">
              {" "}
              {/* justify-center added */}
              <button className="bg-[#B54118] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all">
                Start Building
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* --- NEW SECTION: The "Not Just a Theme" Grid --- */}
      <section className="w-full dark:bg-black  dark:border-t-2 dark:border-orange-700 ">
       <div className="py-14 max-w-7xl mx-auto px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-black dark:text-white mb-6">
              Why Our WordPress <br /> is{" "}
              <span className="text-[#B54118]">Different</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              We move away from heavy page builders and bloated plugins to give
              you a site that ranks high and loads fast.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Headless WP",
                icon: <Code2 />,
                desc: "Using WordPress as a backend with React/Next.js for ultimate speed.",
              },
              {
                title: "Custom Admin",
                icon: <LayoutDashboard />,
                desc: "Tailored dashboards so your team can edit content without breaking things.",
              },
              {
                title: "Security Hardening",
                icon: <ShieldCheck />,
                desc: "Server-level security to keep your data safe from any vulnerabilities.",
              },
              {
                title: "Core Web Vitals",
                icon: <Rocket />,
                desc: "Built to pass Google's speed tests with flying colors.",
              },
            ].map((box, i) => (
              <div
                key={i}
                className="p-8 bg-gray-50 dark:bg-slate-700 rounded-3xl border border-transparent hover:border-orange-500/30 transition-all"
              >
                <div className="text-orange-500 mb-4">{box.icon}</div>
                <h3 className="text-xl font-bold dark:text-white mb-2">
                  {box.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
       </section> 
      {/* --- NEW SECTION: Feature Comparison (Design Variation) --- */}
      <section className="dark:bg-[#020817] py-20 dark:border-t-2 dark:border-orange-700 ">
      <div className="py-10 bg-slate-900 dark:border dark:border-white text-white rounded-[4rem] mx-4 md:mx-10 mb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16">
            Standard WP vs. <span className="text-orange-500">Biz Grow WP</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
              <h4 className="text-xl font-bold mb-6 text-gray-400 italic italic">
                Slow & Bloated
              </h4>
              <ul className="space-y-4 text-left opacity-60">
                <li className="flex gap-3">✕ Pre-made templates</li>
                <li className="flex gap-3">✕ 20+ unnecessary plugins</li>
                <li className="flex gap-3">✕ Slow mobile experience</li>
                <li className="flex gap-3">✕ Security risks</li>
              </ul>
            </div>

            <div className="p-8 border-2 border-orange-500 rounded-3xl bg-orange-500/5 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 px-4 py-1 rounded-full text-xs font-bold uppercase">
                The Winner
              </div>
              <h4 className="text-xl font-bold mb-6 text-orange-500">
                Engineered Perfection
              </h4>
              <ul className="space-y-4 text-left">
                <li className="flex gap-3">
                  <Check className="text-green-500" /> Lightweight Custom Code
                </li>
                <li className="flex gap-3">
                  <Check className="text-green-500" /> Zero Bloat Strategy
                </li>
                <li className="flex gap-3">
                  <Check className="text-green-500" /> SEO & Speed Optimized
                </li>
                <li className="flex gap-3">
                  <Check className="text-green-500" /> Enterprise-grade Security
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </section>
      {/* --- FINAL CTA: The Original Powerful Style --- */}
        <section className="dark:bg-black py-20 dark:border-y-2 dark:border-orange-700 ">
      <div
        className="relative py-20 mx-4 my-20 rounded-[2.5rem] dark:border dark:border-[#B54118] text-white text-center px-6 md:mx-20 bg-cover bg-fixed bg-center overflow-hidden shadow-2xl"
        style={{ backgroundImage: "url('/wp-cta.jpg')" }} // Search Keyword: Dark abstract tech background
      >
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase leading-tight">
              Ready to Build Your <br />
              <span className="text-orange-500">WordPress Masterpiece</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p className="mx-auto mb-10 text-lg text-gray-300 max-w-2xl font-light">
              Don't settle for a generic theme. Let's create a high-performance
              WordPress site that is built for speed, security, and your
              success.
            </p>
          </FadeIn>

          <Link href="/contact-us">
            <button className="px-12 py-5 bg-[#B54118] text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-lg uppercase tracking-widest">
              Start Your Project
            </button>
          </Link>
        </div>
      </div>
      </section>
    </section>
  );
};

export default WordPressPage;
