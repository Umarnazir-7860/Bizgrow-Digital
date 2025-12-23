import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function ServicesServer() {
  const visibleCards = [
    {
      title: "Website Development",
      img: "/web-development2.jpg",
      desc: "Modern, fast & conversion-focused websites in latest frameworks",
    },
    {
      title: "SEO Optimization",
      img: "/SEO.jpg",
      desc: "Search engine optimized strategies to increase visibility and organic traffic.",
    },
    {
      title: "Digital Marketing",
      img: "/Social media.jpg",
      desc: "Facebook, Instagram, LinkedIn marketing, paid ads, content strategy & analytics.",
    },
    {
      title: "Creative Content",
      img: "/creative.jpg",
      desc: "Visually compelling and strategically written content that drives engagement.",
    },
    {
      title: "Graphic Design",
      img: "/graphic-design.jpg",
      desc: "Brand-focused graphic designs that communicate clearly and creatively.",
    },
  ];

  return (
    <section className="px-6 py-10 bg-[#F2E8D5]/90">
      <Head>
        <title>
          Our Services - Website Development, SEO & Digital Marketing
        </title>
        <meta
          name="description"
          content="We provide modern website development, SEO optimization, and digital marketing to grow your brand online."
        />
      </Head>

      <h1 className="text-3xl md:text-6xl text-[#B54118] text-center font-bold mt-10">
        Our Digital Services
      </h1>

      <p className="max-w-3xl mx-auto text-center text-black mt-4 text-lg">
        We help businesses grow online through modern website development,
        result-driven SEO, powerful digital marketing, and creative design
        solutions.
      </p>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {visibleCards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center my-14">
        <Link href="/services">
          <button className="px-8 py-4 bg-[#B54118] text-white font-semibold rounded-xl hover:scale-105 transition">
            View All Services →
          </button>
        </Link>
      </div>
    </section>
  );
}

function Card({ title, img, desc }) {
  return (
    <div className="shadow-xl rounded-xl bg-white p-5 transition-transform hover:scale-105">
      <Image
        src={img}
        width={500}
        height={300}
        alt={title}
        className="rounded-lg h-[270px] my-5 object-cover"
      />
      <h2 className="text-2xl text-[#B54118] font-bold">{title}</h2>
      <p className="text-black py-4">{desc}</p>
    </div>
  );
}
