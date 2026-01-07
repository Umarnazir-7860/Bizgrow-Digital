import Image from "next/image";
import React from "react";
import { PenTool, Video, Layers, Target, CheckCircle2 } from "lucide-react";
import HorizontalProcess from "@components/HorizontalProcess";
import ShapeChangeSection from "@components/test";
import VShapeTransition from "@components/test2";
import Link from "next/link";
import FadeIn from "@components/MotionWrapper";

const CreativeContentPage = () => {
  const contentFeatures = [
    {
      title: "Brand Storytelling",
      desc: "We craft compelling narratives that resonate with your audience, turning your brand values into an emotional journey.",
      icon: <Layers className="w-8 h-8" />,
      bgColor: "bg-orange-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Visual Graphics",
      desc: "High-impact social media assets and marketing collateral designed to reinforce your brand's visual identity.",
      icon: <PenTool className="w-8 h-8" />,
      bgColor: "bg-blue-100",
      hoverBg: "group-hover:bg-blue-600",
    },
    {
      title: "Video Production",
      desc: "Professional video editing and motion graphics that drive engagement and convert viewers into loyal customers.",
      icon: <Video className="w-8 h-8" />,
      bgColor: "bg-purple-100",
      hoverBg: "group-hover:bg-purple-600",
    },
    {
      title: "Content Strategy",
      desc: "Data-backed content blueprints designed to reach your target demographics and fuel long-term organic growth.",
      icon: <Target className="w-8 h-8" />,
      bgColor: "bg-green-100",
      hoverBg: "group-hover:bg-green-600",
    },
  ];

  return (
    <section className="relative w-full">
      {/* --- HERO SECTION --- */}
      <div className="relative  h-[75vh] md:h-screen w-full">
        <Image
          src="/creative-content-hero.jpg"
          alt="Creative Content Services"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 w-full mx-auto bg-black/70 flex flex-col pt-12 justify-center items-center px-6">
          <FadeIn direction="up" delay={0.2}>
            {/* 🔹 FIX: Wrapper div inside FadeIn to force centering */}
            <div className="w-full flex flex-col items-center">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block text-center">
                Creative Excellence
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="w-full flex flex-col items-center">
              <h1 className="text-white text-5xl md:text-7xl text-center font-bold max-w-4xl leading-tight">
                Words & Visuals That <br />
                <span className="text-orange-500 text-4xl">
                  Command Attention
                </span>
              </h1>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div className="w-full flex flex-col items-center">
              <p className="text-gray-300 text-lg md:text-xl text-center max-w-2xl mt-6">
                We don't just produce content; we engineer experiences that
                elevate your brand's market authority and global reach.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* --- FEATURES GRID --- */}
      <section className="py-14 bg-gray-50 dark:bg-[#020817]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col justify-center items-center mb-16 gap-6">
            <div className="max-w-3xl">
              <FadeIn direction="up" delay={0.2}>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 text-center dark:text-white leading-tight">
                  Crafting Digital <br />
                  <span className="text-[#B54118]">Masterpieces</span>
                </h2>
              </FadeIn>
            </div>
            <FadeIn direction="up" delay={0.4}>
              <p className="text-gray-600 dark:text-gray-400 text-lg text-center max-w-xl">
                Your content is your digital handshake. We ensure every pixel
                and every word serves a purpose in achieving your business
                goals.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentFeatures.map((item, index) => (
              <FadeIn key={index} direction="up" delay={0.2 * index}>
                <div className="group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <div
                    className={`w-14 h-14 ${item.bgColor} ${item.hoverBg} group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:rotate-6`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY US SECTION --- */}
      <section className="py-10 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 md:flex-row gap-16 items-center">
          <FadeIn direction="right" delay={0.3}>
            <div className="relative h-[400px] md:h-[600px] w-full rounded-[3rem] overflow-hidden">
              <Image
                src="/download (8).png"
                alt="Creative Workflow"
                fill
                className="object-center"
              />
            </div>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-4xl font-black dark:text-white leading-tight">
                Why Choose Our <br />
                <span className="text-orange-500">Creative Strategy?</span>
              </h2>
            </FadeIn>

            <div className="space-y-6">
              {[
                "Conversion-Focused Copywriting",
                "Trending Visual Styles & Aesthetics",
                "SEO-Optimized Editorial Content",
                "Platform-Specific Format Optimization",
              ].map((text, i) => (
                <FadeIn key={i} direction="up" delay={0.1 * i}>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#B54118] w-6 h-6 flex-shrink-0" />
                    <p className="text-lg font-medium dark:text-gray-200">
                      {text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={0.6}>
              <Link href="/contact-us">
                <button className="bg-black dark:bg-white dark:text-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#B54118] dark:hover:bg-[#B54118] dark:hover:text-white transition-all">
                  Discuss Your Project
                </button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 mx-4 my-20 rounded-[2.5rem] text-white text-center px-6 md:mx-20 bg-cover bg-fixed overflow-hidden shadow-2xl"
        style={{ backgroundImage: "url('/creative-cta.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">
              Let's Build Something <br />
              <span className="text-orange-500">Extraordinary</span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="mx-auto mb-10 text-lg text-gray-300 max-w-2xl">
              Ready to give your brand the creative edge it deserves? Your dream
              project is just one conversation away.
            </p>
          </FadeIn>
          <Link href="/contact-us">
            <button className="px-10 py-5 bg-[#B54118] text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-lg uppercase tracking-wide">
              Start Your Journey
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default CreativeContentPage;
