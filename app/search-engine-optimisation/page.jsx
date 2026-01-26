import Image from "next/image";
import React from "react";
import {
  BarChart3,
  Search,
  TrendingUp,
  Globe2,
  CheckCircle2,
  Zap,
  Target,
  MousePointer2,
  ShieldCheck,
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";

export const metadata = {
  title: "SEO Services UK | Boost Rankings & Grow Online | BizGrow Digital",
  description:
    "UK businesses: Improve visibility, attract leads & increase traffic with data-driven SEO services tailored for measurable results.",
    alternates: {
    canonical: "https://bizgrow-digital.co.uk/search-engine-optimisation/", 
  },
  };

const SEOPage = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/seo-hero.png"
          alt="Premium SEO Services"
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Search Engine Optimisation
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-none mb-6">
              RANK ON <span className="text-orange-500">TOP</span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-3xl mb-10 mx-auto px-4 font-light leading-relaxed">
              SEO focuses on organic search, attracting visitors who are
              actively searching for your products without paying per click.
              Boost your organic visibility with BizGrow Digital.
            </p>
            <Link href="/cosearch-engine-optimisation">
              <button className="bg-[#B54118] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all uppercase tracking-widest shadow-2xl">
                Audit My Site
              </button>
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* --- NEW SECTION: Improved SEO Context --- */}
      <section className="py-14 bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Side: Bold Text Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <FadeIn direction="left">
                <div className="space-y-2 mb-6">
                  <span className="text-[#B54118] font-bold tracking-[0.2em] uppercase text-sm">
                    Search Excellence
                  </span>
                  <div className="h-[2px] w-12 bg-[#B54118]"></div>
                </div>

                <h2 className="text-5xl md:text-6xl font-black dark:text-white text-slate-900 leading-[0.9] uppercase tracking-tighter mb-8">
                  IMPROVE YOUR <br />
                  <span className="text-orange-500">RANKINGS</span> & <br />
                  DRIVE{" "}
                  <span className="text-orange-500  decoration-2 ">
                    ORGANIC
                  </span>{" "}
                  <br />
                  TRAFFIC
                </h2>

                <div className="space-y-6 relative">
                  {/* Main Paragraph - Improved Clarity */}
                  <p className="text-slate-700 dark:text-gray-200 text-xl ml-1 md:text-2xl font-semibold leading-relaxed relative z-10">
                    Search Engine Optimisation (SEO) is more than just
                    ranking it&apos;s about
                    <span className="text-[#B54118]">
                      {" "}
                      visibility, credibility, and long-term growth.
                    </span>
                  </p>

                  {/* Supporting Text - Less Dull */}
                  <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed border-l-4 border-orange-600/60 pl-6">
                    Effective SEO involves on-page techniques like keyword
                    optimisation and technical improvements to ensure your
                    business becomes easier for potential customers to find in a
                    crowded digital landscape.
                  </p>

                  {/* Stats Badges */}
                  <div className="pt-8 flex items-center gap-8">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black dark:text-white text-slate-900">
                        95%
                      </span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-orange-500">
                        Visibility Boost
                      </span>
                    </div>
                    <div className="w-[1px] h-10 bg-gray-300 dark:bg-gray-700"></div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-black dark:text-white text-slate-900">
                        #1
                      </span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-orange-500">
                        Local Rankings
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Side: Image with Premium Frame (Consistency with other sections) */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <FadeIn direction="right" delay={0.2}>
                <div className="relative h-[450px] md:h-[600px] rounded-[4rem] overflow-hidden border-[8px] border-slate-100 dark:border-orange-900/30 shadow-2xl group">
                  <Image
                    src="/improve-your-ranking.png" // Yahan koi bhi SEO analytics ya dashboard ki image laga dein
                    alt="SEO Performance Analytics"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Overlay Gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                  {/* Glass Card Floating Effect (Optional but Premium) */}
                  <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl hidden md:block">
                    <p className="text-white text-sm font-bold uppercase tracking-widest mb-1">
                      Growth Metric
                    </p>
                    <p className="text-white/80 text-xs italic">
                      "Data-driven strategies satisfy both users and search
                      engines."
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEO BENTO GRID (Your Original Style) --- */}
      <section className="w-full dark:bg-black dark:border-t-2 dark:border-orange-700">
        <div className="py-32 max-w-7xl mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl flex justify-center font-black dark:text-white mb-16 uppercase tracking-tighter text-center">
              Our Comprehensive{" "}
              <span className="text-orange-500 underline ml-3">
                {" "}
                SEO Services
              </span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
            {/* Large Card: Data Analytics */}
            <div className="md:col-span-2 md:row-span-2 rounded-[3rem] dark:border dark:border-[#B54118] relative overflow-hidden group shadow-2xl">
              <Image
                src="/analytics.png"
                alt="Data-driven SEO results"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
              <div className="relative z-20 h-full flex flex-col justify-end p-12">
                <div className="bg-orange-500/20 backdrop-blur-md border border-orange-500/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="text-orange-500 w-10 h-10" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4 uppercase">
                  Advanced Analytics
                </h3>
                <p className="text-gray-300 max-w-md italic text-lg">
                  Performance reports and constant monitoring to satisfy both
                  users and search engines.
                </p>
              </div>
            </div>

            {/* Small Card 1: Keyword Research */}
            <div className="bg-slate-900 rounded-[3rem] p-10 flex flex-col justify-between hover:border-orange-500/50 dark:border dark:border-orange-600 border border-transparent transition-all">
              <Search className="text-orange-500 w-12 h-12" />
              <div>
                <h3 className="text-2xl font-black text-white leading-tight uppercase mb-4">
                  KEYWORD <br /> STRATEGY
                </h3>
                <p className="text-gray-400 text-sm">
                  Identifying high-value terms your target audience is searching
                  for.
                </p>
              </div>
            </div>

            {/* Small Card 2: Technical SEO */}
            <div className="bg-orange-500 rounded-[3rem] p-10 flex flex-col justify-between hover:-rotate-2 transition-transform shadow-xl">
              <Zap className="text-white w-12 h-12" />
              <div>
                <h3 className="text-2xl font-black text-white leading-tight uppercase mb-4">
                  TECHNICAL <br /> OPTIMISATION
                </h3>
                <p className="text-white/80 text-sm">
                  Enhancing site speed, mobile responsiveness, and structured
                  data.
                </p>
              </div>
            </div>

            {/* Wide Card: Global & Local */}
            <div className="md:col-span-3 dark:bg-slate-900 dark:border dark:border-orange-500 border-2 border-orange-300 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-10 hover:shadow-2xl transition-all">
              <div className="max-w-xl">
                <h3 className="text-3xl font-black dark:text-white mb-4 uppercase">
                  Why SEO Matters for Growth
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Higher rankings lead to more leads and revenue. We optimise
                  for UK-based searches and local listings to ensure your
                  business gets noticed by the right audience.
                </p>
              </div>
              <Globe2 className="text-orange-500 w-20 h-20 opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Why Choose Us (Checklist Style) --- */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black dark:text-white uppercase">
              Why Choose{" "}
              <span className="text-orange-500">BizGrow Digital</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Track Record",
                desc: "Successfully improving rankings for various UK clients.",
              },
              {
                title: "Custom SEO Plans",
                desc: "Tailored strategies for your specific industry and audience.",
              },
              {
                title: "Sustainable Growth",
                desc: "Focus on long-term organic results, not short-term tricks.",
              },
              {
                title: "White-Hat Techniques",
                desc: "Complying with search engine best practices.",
              },
              {
                title: "Transparent Reporting",
                desc: "Regular performance reports to keep you fully informed.",
              },
              {
                title: "UK Focused",
                desc: "Deep understanding of the UK search landscape and local SEO.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[2rem] border border-orange-600  hover:bg-orange-100 dark:hover:bg-white/5 transition-colors"
              >
                <CheckCircle2 className="text-orange-500 mb-4 w-8 h-8" />
                <h3 className="text-xl font-bold dark:text-white mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REVERSED CONTENT: Data Over Guesses --- */}
      <div className="py-24 bg-slate-50 dark:bg-[#020817] dark:border-t-2 dark:border-orange-700 ">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse gap-20 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-5xl md:text-7xl font-black dark:text-white leading-none uppercase">
              DATA <br /> <span className="text-orange-500">OVER</span> GUESSES
            </h2>
            <p className="text-gray-700 font-semibold">
              Producing high-quality content that satisfies both users and
              search engines.
            </p>
            <div className="space-y-6">
              {[
                "Comprehensive On-Page Audits",
                "High-Authority Backlink Strategy",
                "Speed & Core Web Vitals",
                "Semantic Search Optimisation",
                "Link Building & Authority Growth",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <span className="w-10 h-[2px] bg-orange-500 group-hover:w-20 transition-all duration-500" />
                  <span className="text-xl font-bold dark:text-white uppercase tracking-tighter">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative h-[500px] rounded-[4rem] overflow-hidden border-[8px] border-slate-30 dark:border-orange-700 shadow-2xl group">
            <Image
              src="/data-over.png"
              alt="SEO strategy driving UK business growth"
              fill
              className="object-cover transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>

      {/* --- FINAL CTA SECTION --- */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-24 md:py-32 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_30px_70px_rgba(0,0,0,0.5)] group"
            style={{
              backgroundImage: "url('/seo-cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-[#B54118]/20 z-0"></div>
            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#B54118]/30 transition-all duration-500"></div>

            <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center">
              <FadeIn
                direction="up"
                className="w-full flex flex-col items-center"
              >
                <div className="flex flex-col items-center mb-8">
                  <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                    Search Authority
                  </span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase text-center">
                  Let’s Improve Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B54118] to-orange-400">
                    Search Rankings
                  </span>
                </h2>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.2}
                className="flex flex-col items-center text-center"
              >
                <p className="mx-auto mb-12 text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-3xl italic">
                  "Our SEO strategies are designed to deliver long‑term growth,
                  help your site rank for relevant terms, and convert visitors
                  into loyal customers. Contact BizGrow Digital today for a
                  tailored SEO plan that aligns with your business goals and UK
                  market needs."
                </p>
              </FadeIn>

              <FadeIn
                direction="up"
                delay={0.4}
                className="flex flex-col items-center"
              >
                <Link href="/contact-us">
                  <button className="relative px-8 py-4 bg-[#B54118] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(181,65,24,0.6)]">
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-lg uppercase tracking-[0.2em]">
                      Start Your Project →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SEOPage;
