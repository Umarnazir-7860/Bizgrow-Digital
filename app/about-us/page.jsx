// app/about/page.js
import FadeIn from "@components/MotionWrapper";
import Image from "next/image";
import Link from "next/link";
import {
  FaBullseye,
  FaCheckCircle,
  FaEye,
  FaHandshake,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-screen w-full">
        <Image
          src="/about-hero.jpg"
          fill
          className="object-cover"
          alt="About BizGrow Digital"
          priority
        />

        {/* 🔹 FIX: 'inset-0' aur 'w-full' add kiya taake content poori screen ke hisab se center ho */}
        <div
          className="absolute inset-0 w-full bg-black/60 flex flex-col items-center 
          justify-center text-center px-4"
        >
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-white text-4xl md:text-6xl mt-20 font-bold mb-4">
              About BizGrow Digital
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            {/* 🔹 FIX: 'mx-auto' add kiya taake max-width ke sath text center mein hi rahe */}
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
              We are committed to helping businesses grow online with innovative
              digital solutions, creative design, and data-driven marketing
              strategies.
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

      {/* Overview Section Wrapper: Poori screen ka background aur border yahan aayega */}
      <section className="w-full bg-white dark:bg-black dark:border-y-2 dark:border-orange-700 py-12 md:py-20">
        {/* Content Container: Ye content ko center mein rakhega aur sides par padding dega */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-4">
            <FadeIn direction="right" delay={0.2}>
              <h2 className="text-4xl md:text-5xl  font-black text-[#B54118]  uppercase tracking-tighter">
                About Us
              </h2>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <p className="text-gray-700 dark:text-white text-sm sm:text-base lg:text-md leading-relaxed text-justify md:text-left  ">
                At BizGrow Digital, our focus is on your business’s brand,
                specifically online, using results-driven digital marketing
                services and creative thinking. We have SEO professionals,
                developers, and digital marketers who help in delivering results
                to media success. We’re not your average digital agency; we are
                your business’s growth partners, helping your business unleash
                its full potential. <br />
                <b className="text-black">Your partner for digital growth </b>
                We specialise in advanced SEO, websites built with purpose that
                make an impact, all to generate valuable leads for growth. When
                you work with us, you will become visible and will start to
                establish a presence of credibility and reliability that exposes
                long-term growth.
              </p>
            </FadeIn>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <FadeIn direction="left" delay={0.4}>
              <div className="relative">
                <Image
                  src="/team-collaboration.jpg"
                  width={550}
                  height={400}
                  className="rounded-[2rem] shadow-2xl object-cover"
                  alt="Team Collaboration"
                />
                {/* Decorative Background Shape - Sirf bari screens par */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-[#B54118]/5 rounded-full hidden md:block" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[#F2E8D5] dark:bg-[#000B25] dark:border-b-2 dark:border-orange-700  py-10 px-4 ">
        <FadeIn direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#B54118] mb-12">
            Our Mission & Vision
          </h2>
        </FadeIn>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mission */}
          <div className="w-full lg:w-1/2 bg-white dark:bg-[#000B25] border border-gray-200 shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
            <FadeIn direction="right" delay={0.3}>
              <div className="bg-[#B54118]/20 p-5 rounded-full mb-4 inline-flex">
                <FaBullseye className="text-[#B54118] h-10 w-10" />
              </div>
              <h3 className="text-2xl font-semibold dark:text-[#B54118] mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-white text-sm">
                BizGrow Digital helps UK businesses grow online with strategies
                that increase visibility, connect their business to potential
                customers, and build their brand presence of their business. We
                provide results-driven digital solutions so that businesses can
                be distinguishable from others in their industry and achieve
                measurable success across all digital platforms.
              </p>
            </FadeIn>
          </div>

          {/* Vision */}
          <div className="w-full lg:w-1/2 bg-white border  dark:bg-[#000B25] border-gray-200 shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
            <FadeIn direction="left" duration={0.3}>
              <div className="bg-[#B54118]/20 p-5 rounded-full mb-4 inline-flex">
                <FaEye className="text-[#B54118] h-10 w-10" />
              </div>
              <h3 className="text-2xl font-semibold dark:text-[#B54118] mb-3">
                Our Vision
              </h3>
              <p className="text-gray-700 dark:text-white text-sm">
                We aim to be the trusted digital partner for UK brands, helping
                them succeed online, establish credibility, and reach more
                customers. By crafting professional digital strategies and
                providing innovative solutions, we will help businesses to
                achieve long-term growth and a strong, recognisable online
                presence.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🚀 NEW SECTION: What Makes Us Different */}
      <section className="w-full py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-[#B54118] mb-16 uppercase">
              What Makes Us Different
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Listen with Purpose */}
            <FadeIn direction="up" delay={0.1}>
              <div className="group bg-white dark:bg-[#001235] p-8 rounded-2xl border border-orange-700 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center text-center">
                {/* Animated Icon Container */}
                <div className="mb-6 p-4 rounded-full bg-[#B54118]/10 group-hover:bg-[#B54118] transition-colors duration-500">
                  <FaHandshake className="text-[#B54118] group-hover:text-white text-4xl transition-transform duration-700 group-hover:[transform:rotateY(360deg)]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  We Listen with Purpose
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Every strategy we build is rooted in your unique goals to make
                  sure we get a solution that actually meets your needs.
                </p>
              </div>
            </FadeIn>

            {/* Feature 2: Complex Simple */}
            <FadeIn direction="up" delay={0.2}>
              <div className="group bg-white dark:bg-[#001235] p-8 rounded-2xl border border-orange-700 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-[#B54118]/10 group-hover:bg-[#B54118] transition-colors duration-500">
                  <FaLightbulb className="text-[#B54118] group-hover:text-white text-4xl transition-transform duration-700 group-hover:[transform:rotateY(360deg)]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  We Make the Complex Simple
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  With our collective experience, we are able to build pragmatic
                  and actionable plans to take your ideas and turn them into
                  results.
                </p>
              </div>
            </FadeIn>

            {/* Feature 3: Deliver Results */}
            <FadeIn direction="up" delay={0.3}>
              <div className="group bg-white dark:bg-[#001235] p-8 rounded-2xl border border-orange-700 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-[#B54118]/10 group-hover:bg-[#B54118] transition-colors duration-500">
                  <FaRocket className="text-[#B54118] group-hover:text-white text-4xl transition-transform duration-700 group-hover:[transform:rotateY(360deg)]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  We Deliver Results
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Everything from mobile-responsive websites to better placement
                  in search results allows us to produce real results.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.5}>
            <div className="mt-16 p-8 bg-[#F2E8D5] dark:bg-[#000B25] rounded-2xl border-l-8 border-[#B54118]">
              <p className="text-xl md:text-2xl font-medium text-black dark:text-white italic">
                "At BizGrow Digital, we don’t just develop websites; we build
                powerful digital solutions that turn visitors into clients and
                position your brand as a trusted leader in your industry."
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full dark:bg-black">
        <div className="max-w-7xl mx-auto py-10  px-4 lg:px-0">
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-center text-[#B54118] mb-7">
              Our Core Values
            </h2>
          </FadeIn>
          <div className="flex flex-col px-4 md:flex-row gap-8">
            {/* Integrity */}

            <div
              className="flex-1  dark:bg-[#000B25]  border border-orange-700 shadow-lg rounded-xl
           p-8 transition-transform hover:scale-105 flex flex-col items-center text-center 
           hover:shadow-2xl duration-300"
            >
              <FadeIn direction="right">
                <div className="bg-[#B54118]/20 p-5 rounded-full mb-4 inline-flex">
                  <FaHandshake className="text-[#B54118] h-10 w-10" />
                </div>
                <h3 className="text-2xl text-[#B54118] font-semibold mb-3">
                  Integrity
                </h3>
                <p className="dark:text-white text-black text-md">
                  We believe in honest communication, ethical practices, and
                  delivering what we promise. Trust is the cornerstone of every
                  relationship we develop.
                </p>
              </FadeIn>
            </div>

            {/* Quality and Clarity*/}
            <div className="flex-1 dark:bg-[#000B25]  border border-orange-700 shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-transform hover:scale-105 duration-300">
              <FadeIn direction="up">
                <div className="bg-[#B54118]/20 p-5 rounded-full mb-4 inline-flex">
                  <FaLightbulb className="text-[#B54118] h-10 w-10" />
                </div>
                <h3 className="text-2xl text-[#B54118] font-semibold mb-3">
                  Quality and Clarity
                </h3>
                <p className="dark:text-white text-black text-md">
                  All of our strategies, messages & designs are created with
                  intention, precision, and clear intent to maximise the value
                  of and make an extraordinary impact with.
                </p>
              </FadeIn>
            </div>

            {/* Growth-Driven Mindset */}
            <div className="flex-1 dark:bg-[#000B25] border border-orange-700 shadow-lg rounded-xl p-8 transition-transform hover:scale-105 flex flex-col items-center text-center hover:shadow-2xl duration-300">
              <FadeIn direction="left">
                <div className="bg-[#B54118]/20 p-5 rounded-full mb-4 inline-flex">
                  <FaRocket className="text-[#B54118] h-10 w-10" />
                </div>
                <h3 className="text-2xl text-[#B54118] font-semibold mb-3">
                  Growth-Driven Mindset
                </h3>
                <p className="dark:text-white text-black text-md">
                  We focus on continual improvement, developing strategic
                  thinkers, and developing a long-term digital growth strategy
                  for our clients.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="mx-auto py-16 dark:bg-[#000B25] dark:border-t-2 dark:border-orange-700  px-4 lg:px-0">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#B54118]  mb-12">
            Trusted By
          </h2>
        </FadeIn>

        <div className="flex justify-center items-center">
          <Image
            src="/client-logo.jpg"
            width={1200}
            height={400}
            className="object-contain w-full rounded-xl max-w-[1200px] h-auto"
            alt="Our Clients"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dark:bg-black py-20 dark:border-y-2 dark:border-orange-700 ">
        <div
          className="relative py-10 mx-4 my-10 rounded-2xl dark:border dark:border-[#B54118] text-white text-center px-4 md:mx-20 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/team-work.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60 z-0 rounded-2xl"></div>
          <div className="relative z-10 mx-1 md:mx-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let’s Grow with BizGrow Digital
            </h2>
            <p className=" mx-auto mb-8 text-lg md:text-xl">
              We work closely with each client to understand what they need. Our
              solutions are simple, flexible, and designed to get real results.
              By working together, we make sure every project helps your
              business grow and succeed.
            </p>
            <Link href="/contact-us">
              <button className="px-8 py-4 bg-[#B54118] text-white font-semibold rounded-xl hover:scale-105 transition">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
