// app/about/page.js
import Image from "next/image";
import Link from "next/link";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/about-hero.jpg"
          fill
          className="object-cover"
          alt="About BizGrow Digital"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            About BizGrow Digital
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            We are committed to helping businesses grow online with innovative
            digital solutions, creative design, and data-driven marketing
            strategies.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center py-6 px-4 gap-8">
        {/* Text */}
        <div className="w-full lg:w-1/2 py-10 flex flex-col space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold text-[#B54118]">
            Who We Are
          </h1>
          <p className="text-gray-700 text-md md:text-md">
            "We are a passionate and dedicated team of professionals committed
            to delivering innovative solutions that empower businesses to grow,
            adapt, and succeed in today’s fast-paced world. At the core of our
            work is a desire to turn ambitious ideas into tangible results,
            helping our clients overcome challenges, seize opportunities, and
            thrive in an ever-evolving market. Every project we undertake is
            guided by creativity, expertise, and a deep understanding of our
            clients’ unique needs, ensuring solutions that are not only
            effective but also sustainable and future-ready. Our approach
            combines strategic thinking with hands-on execution, allowing us to
            design and implement solutions that drive measurable impact. We
            believe in building strong partnerships with our clients, fostering
            collaboration and transparency at every stage of the process. By
            staying ahead of trends, leveraging cutting-edge technologies, and
            embracing continuous learning, we help businesses navigate
            complexity and achieve their goals with confidence."
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <Image
            src="/team-collaboration.jpg"
            width={500}
            height={400}
            className="rounded-xl"
            alt="Team Collaboration"
          />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="bg-[#F2E8D5] py-10 px-4 ">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#B54118] mb-12">
          Our Mission & Vision
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mission */}
          <div className="w-full lg:w-1/2 bg-white border border-gray-200 shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-[#B54118]/20 p-5 rounded-full mb-4 inline-flex">
              <FaBullseye className="text-[#B54118] h-10 w-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700 text-md">
              Our mission is to empower businesses with innovative solutions
              that drive growth, efficiency, and lasting success. We exist to
              help our clients turn ideas into actionable strategies, overcome
              challenges with confidence, and achieve measurable results.
            </p>
          </div>

          {/* Vision */}
          <div className="w-full lg:w-1/2 bg-white border border-gray-200 shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-[#B54118]/20 p-5 rounded-full mb-4 inline-flex">
              <FaEye className="text-[#B54118] h-10 w-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700 text-md">
              Our vision is to be recognized as a leader in delivering
              transformative solutions that shape the future of industries. We
              aspire to create a world where businesses of all sizes can thrive,
              innovate, and adapt effortlessly to change.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto py-10 px-4 lg:px-0">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#B54118] mb-12">
          Our Core Values
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Integrity */}
          <div className="flex-1 bg-[#000B25] border border-gray-200 shadow-lg rounded-xl p-8 transition-transform hover:scale-105 flex flex-col items-center text-center hover:shadow-2xl duration-300">
            <div className="bg-[#B54118]/20 p-5 rounded-full mb-4 inline-flex">
              <FaHandshake className="text-[#B54118] h-10 w-10" />
            </div>
            <h3 className="text-2xl text-[#B54118] font-semibold mb-3">
              Integrity
            </h3>
            <p className="text-white text-md">
              We act with honesty, transparency, and accountability in
              everything we do.
            </p>
          </div>

          {/* Innovation */}
          <div className="flex-1 bg-[#000B25] border border-gray-200 shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-transform hover:scale-105 duration-300">
            <div className="bg-[#B54118]/20 p-5 rounded-full mb-4 inline-flex">
              <FaLightbulb className="text-[#B54118] h-10 w-10" />
            </div>
            <h3 className="text-2xl text-[#B54118] font-semibold mb-3">
              Innovation
            </h3>
            <p className="text-white text-md">
              We embrace creativity and forward-thinking solutions to solve
              complex problems.
            </p>
          </div>

          {/* Results-Driven */}
          <div className="flex-1 bg-[#000B25] border border-gray-200 shadow-lg rounded-xl p-8 transition-transform hover:scale-105 flex flex-col items-center text-center hover:shadow-2xl duration-300">
            <div className="bg-[#B54118]/20 p-5 rounded-full mb-4 inline-flex">
              <FaRocket className="text-[#B54118] h-10 w-10" />
            </div>
            <h3 className="text-2xl text-[#B54118] font-semibold mb-3">
              Results-Driven
            </h3>
            <p className="text-white text-md">
              We focus on delivering measurable impact and achieving success for
              our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="mx-auto py-16 px-4 lg:px-0">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#B54118] mb-12">
          Trusted By
        </h2>
        <div className="flex justify-center items-center">
          <Image
            src="/client-logo.jpg"
            width={1200}
            height={400}
            className="object-contain w-full max-w-[1200px] h-auto"
            alt="Our Clients"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-10 mx-4 my-20 rounded-2xl text-white text-center px-4 md:mx-20 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/team-work.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0 rounded-2xl"></div>
        <div className="relative z-10 mx-1 md:mx-0">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let’s Work Together to Achieve Your Goals
          </h2>
          <p className=" mx-auto mb-8 text-lg md:text-xl">
            We’ve shared our story, our mission, and our values. Now it’s time
            to create something remarkable for your business. Reach out today
            and let’s start building success together.
          </p>
          <Link href="/contact-us">
            <button className="px-8 py-4 bg-[#B54118] text-white font-semibold rounded-xl hover:scale-105 transition">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
