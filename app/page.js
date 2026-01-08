import Image from "next/image";
import React from "react";
import ServicesServer from "@components/ServicesServer";
import Link from "next/link";
import FadeIn from "@components/MotionWrapper";

const HomePage = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[95vh] md:h-screen">
        <Image
          src="/admin-ajax.jpg"
          fill
          className="object-cover"
          priority
          alt="Hero Background"
        />
        <div className="absolute inset-0 w-full bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <FadeIn direction="up" delay={0.2}>
          <h1 className="text-white text-3xl md:text-5xl mt-20  font-bold md:leading-[4rem]">
            Smart Digital Solutions <br /> That Grow Your Business
          </h1>
          </FadeIn>
          <FadeIn direction="up"delay={0.4}>
          <p className="mt-6 text-white max-w-2xl mx-auto text-sm md:text-lg">
            We help businesses increase visibility, attract quality leads, and
            scale online through modern web development, SEO, and data-driven
            digital marketing.
          </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.6}>
          <Link href="/services">
            <button className="mt-8 px-8 py-4 bg-[#B54118] text-white font-semibold rounded-xl hover:scale-105 transition">
              Explore Our Services →
            </button>
          </Link>
          </FadeIn>
        </div>
      </section>

      {/* Feature Section: Left Text, Right Image */}
      <section className="py-10 bg-gray-50 dark:bg-[#000B25] dark:border-y-2 dark:border-red-700 
      px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div>
            <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold  dark:text-white text-[#000B25] mb-6">
              Boost Your Online Presence with{" "}
              <span className="text-[#B54118]">BizGrow</span> <br />
              <span className="text-3xl md:text-5xl font-bold text-[#B54118]">
                Digital
              </span>
            </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
            <p className="text-black dark:text-white mb-6 text-sm ">
              Ready to attract more clients, increase traffic to your website,
              and grow your online presence? BizGrow Digital provides
              results-driven digital marketing that enables your business to
              grow with confidence. We specialise in delivering SEO services,
              responsive website design, and developing digital marketing
              strategies that generate genuine engagement. Our team develops
              fast, high-performing WordPress websites, improves visibility in
              local searches, and delivers social media marketing to connect
              with the right audience. If you are looking for clicks and traffic
              to your site, reliable leads, and a strategic plan to grow
              long-term online engagement, BizGrow Digital is here to make it
              happen.
            </p>
            </FadeIn>

            <Link href="/services">
              <button className="px-4 py-4 bg-[#B54118] text-white font-semibold rounded-xl 
              hover:scale-105 transition">
                Learn More About Our Services →
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <FadeIn direction="left" delay={0.4}>
          <div className="relative w-full h-80 md:h-[500px]">
            <Image
              src="/boost.jpg" // replace with your image
              alt="Boost Your Online Presence"
              fill
              className="object-cover rounded-2xl mt-4 shadow-lg"
            />
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Services Section */}
      <section>
        <ServicesServer />
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100 dark:bg-black text-center px-6">
       <FadeIn direction="up" delay={0.2}>
       <h2 className="text-3xl md:text-5xl font-bold text-[#B54118] mb-6">
          Why Choose BizGrow Digital
        </h2>
       </FadeIn>
       <FadeIn direction="up" delay={0.4}>
        <p className="max-w-3xl mx-auto text-gray-700 dark:text-white mb-12 text-lg">
          We combine strategy, creativity, and performance to help your brand
          stand out online. Our results-driven approach ensures measurable
          growth for your business.
        </p>
        </FadeIn>
        <div className="max-w-4xl  md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-[#B54118] p-6 rounded-xl shadow-lg transition-transform hover:scale-105">
            <h3 className="text-xl dark:text-white font-semibold mb-2">Strategy-First</h3>
            <p className="text-gray-600 dark:text-white">
              No guesswork—every campaign is data-driven and goal-oriented.
            </p>
          </div>
          <div className="bg-white dark:bg-[#B54118] p-6 rounded-xl shadow-lg transition-transform hover:scale-105">
            <h3 className="text-xl dark:text-white font-semibold mb-2">Performance & SEO</h3>
            <p className="text-gray-600 dark:text-white">
              Websites built to load fast, rank high, and convert visitors.
            </p>
          </div>
          <div className="bg-white dark:bg-[#B54118] p-6 rounded-xl shadow-lg transition-transform hover:scale-105">
            <h3 className="text-xl dark:text-white font-semibold mb-2">Creative Design</h3>
            <p className="text-gray-600 dark:text-white">
              Visuals that communicate your brand clearly and effectively.
            </p>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section
        className="relative py-20 my-10 bg-black mx-4 md:mx-20 my-8 rounded-2xl text-white text-center px-4 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/hero-cta.jpg')" }}
      >
        {/* Dark Overlay taaki text aur button clear nazar aayein */}
        <div className="absolute inset-0 bg-black/60 z-0 rounded-2xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business Online?
          </h2>
          <p className="mb-8 text-lg md:text-xl">
            Let’s build a strong digital presence that attracts, converts, and
            scales. Our team is ready to help your business succeed online.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-[#B54118] text-white font-semibold rounded-xl hover:scale-105 transition shadow-lg">
              Request a Quote
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
