    import Image from "next/image";
import React from "react";
import { 
  BarChart3, 
  Search, 
  TrendingUp, 
  Globe2, 
  CheckCircle2,
  Zap,
  Target
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";

const SEOPage = () => {
  return (
    <section className="w-full bg-white dark:bg-[#020817] overflow-hidden">
      
      {/* --- HERO SECTION: Consistent Style --- */}
      <div className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/seo-hero.png" 
          alt="Premium SEO Services"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Search Engine Dominance
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-none mb-6">
              RANK ON <span className="text-orange-500">TOP</span>
            </h1>
            <p className="text-gray-300 text-base md:text-xl max-w-3xl mb-10 mx-auto px-4 font-light leading-relaxed">
              We don't just optimize; we dominate search results. Transform your 
              digital visibility with data-backed SEO strategies that drive organic growth.
            </p>
            <Link href="/contact-us">
              <button className="bg-[#B54118] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all uppercase tracking-widest shadow-2xl">
                Audit My Site
              </button>
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* --- SEO BENTO GRID: The Strategy Section --- */}
      <div className="py-32 max-w-7xl mx-auto px-6">
        <FadeIn direction="up">
           <h2 className="text-3xl md:text-5xl font-black dark:text-white mb-16 uppercase tracking-tighter">
             The Science of <span className="text-orange-500 underline">Ranking</span>
           </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Large Card: Data Analytics with Image BG */}
          <div className="md:col-span-2 md:row-span-2 rounded-[3rem] relative overflow-hidden group shadow-2xl">
             <Image 
                src="/analytics.png" 
                alt="SEO Data Analytics"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
             <div className="relative z-20 h-full flex flex-col justify-end p-12">
                <div className="bg-orange-500/20 backdrop-blur-md border border-orange-500/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                   <TrendingUp className="text-orange-500 w-10 h-10" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4 uppercase">Advanced Analytics</h3>
                <p className="text-gray-300 max-w-md italic text-lg">Real-time data monitoring to ensure your keywords are always moving in the right direction.</p>
             </div>
          </div>

          {/* Small Card 1: Keyword Research */}
          <div className="bg-slate-900 rounded-[3rem] p-10 flex flex-col justify-between hover:border-orange-500/50 border border-transparent transition-all">
             <Search className="text-orange-500 w-12 h-12" />
             <h3 className="text-2xl font-black text-white leading-tight uppercase">KEYWORD <br/> STRATEGY</h3>
          </div>

          {/* Small Card 2: Technical SEO */}
          <div className="bg-orange-500 rounded-[3rem] p-10 flex flex-col justify-between hover:-rotate-2 transition-transform shadow-xl">
             <Zap className="text-white w-12 h-12" />
             <h3 className="text-2xl font-black text-white leading-tight uppercase">TECHNICAL <br/> OPTIMIZATION</h3>
          </div>

          {/* Wide Card: Global Reach */}
          <div className="md:col-span-3 bg-white border-2 border-orange-300 dark:border-slate-800 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-10 hover:shadow-2xl transition-all">
             <div className="max-w-xl">
                <h3 className="text-3xl font-black dark:text-white mb-4 uppercase">Dominate Globally</h3>
                <p className="text-gray-500">From local search presence to international dominance, our SEO frameworks scale with your business goals.</p>
             </div>
             <Globe2 className="text-orange-500 w-20 h-20 opacity-70" />
          </div>
        </div>
      </div>

      {/* --- REVERSED CONTENT: Why Trust Us --- */}
      <div className="py-24 bg-white dark:bg-[#020817] mb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse gap-20 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-5xl md:text-7xl font-black dark:text-white leading-none uppercase">
              DATA <br /> <span className="text-orange-500">OVER</span> GUESSES
            </h2>
            <div className="space-y-6">
              {[
                "Comprehensive On-Page Audits",
                "High-Authority Backlink Strategy",
                "Speed & Core Web Vitals",
                "Semantic Search Optimization"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <span className="w-10 h-[2px] bg-orange-500 group-hover:w-20 transition-all duration-500" />
                  <span className="text-xl font-bold dark:text-white uppercase tracking-tighter">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative h-[500px] rounded-[4rem] overflow-hidden border-[12px] border-slate-50 dark:border-slate-900 shadow-2xl group">
            <Image 
              src="/data-over.png" 
              alt="SEO Strategy" 
              fill 
              className="object-cover  transition-all duration-1000" 
            />
            <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>

      {/* --- CTA SECTION: Consistent Style --- */}
      <section
        className="relative py-20 mx-4 my-20 rounded-[2.5rem] text-white text-center px-6 md:mx-20 bg-cover bg-fixed bg-center overflow-hidden shadow-2xl"
        style={{ backgroundImage: "url('/seo-cta.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/85 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
              Ready to Build <br />
              <span className="text-orange-500">Something Better?</span>
            </h2>
            <p className="mx-auto mb-10 text-lg md:text-xl text-gray-300 max-w-2xl font-light px-4">
              Rank higher, drive more traffic, and convert visitors into customers. 
              Let's build your search engine authority together.
            </p>
            <Link href="/contact-us">
              <button className="px-12 py-5 bg-[#B54118] text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-lg uppercase tracking-widest">
                Start Your Project
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>
      
    </section>
  );
};

export default SEOPage;