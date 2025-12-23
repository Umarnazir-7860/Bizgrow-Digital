// components/Footer.js

import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  // Define the structure for links for easier mapping
  const importantLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  const servicesLinks = [
    { name: "Creative Content", href: "/services/creative-content" },
    {
      name: "Email Marketing",
      href: "/services/creative-content/email-marketing",
    },
    {
      name: "Lead Generation",
      href: "/services/creative-content/lead-generation",
    },
    { name: "WordPress", href: "/services/creative-content/wordpress" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    {
      name: "Facebook Marketing",
      href: "/services/digital-marketing/facebook",
    },
    {
      name: "Social Media Marketing",
      href: "/services/digital-marketing/social-media",
    },
    { name: "Website Development", href: "/services/web-development" },
    { name: "Graphic Design", href: "/services/graphic-design" },
    {
      name: "Search Engine Optimisation",
      href: "/services/seo/search-engine-optimisation",
    },
  ];

  // Define social media icons and links
  const socialMedia = [
    { Icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#000B25] text-white py-10 mr-[-250px] mt-[35px]  md:px-8">
      <div className="max-w-full mr-70 md:mr-0 grid grid-cols-1 ml-5 gap-8 md:grid-cols-1 lg:grid lg:grid-cols-5">
        {/* === Column 1: College Info === */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <div className="mb-4">
            {/* Replace with your actual logo image path */}
            <Image
              src="/Bizgrow-digital-logo.png"
              alt="International College of Contemporary Sciences Logo"
              width={120}
              height={60}
              className="mb-2 rounded-xl flex"
            />
          </div>
          <p className="text-sm leading-relaxed sm:mr-70  lg:mr-0 mb-4">
            <span className="font-bold">BizGrow Digital</span> is a
            results-driven digital solutions company committed to helping
            businesses grow online. Guided by our mission “Empowering Brands for
            the Digital Era,” we equip businesses with modern web development,
            data-driven marketing strategies, and creative design solutions to
            achieve measurable growth and lasting impact.
          </p>
          <p className="text-base font-extrabold text-[#B54118] mt-6">
            BIZGROW DIGITAL
          </p>
        </div>

        {/* === Column 2: Quick Links === */}
        <div>
          <h3 className="text-xl font-bold mb-4 ">Quick Links:</h3>
          <ul className="space-y-2 text-md">
            {importantLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#FEDB01]  transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* === Column 3: Services Links === */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services Links:</h3>
          <ul className="space-y-2 text-md">
            {servicesLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#FEDB01] transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* === Column 4: Contact Us & Map === */}
        <div className="col-span-1 mx-2 ml-0">
          <h3 className="text-lg font-bold mb-4">Contact Us:</h3>
          <div className="space-y-3 mb-6 text-sm">
            <p className="flex items-center font-bold">
              <FaPhoneAlt className="mr-2 text-2xl text-[#FEDB01] min-w-[1rem]" />
              Mobile: +44 7360 182981 Office: +44 20 8090 4209
            </p>
            <p className="flex items-center font-bold">
              <FaEnvelope className="mr-2 text-[#FEDB01] min-w-[1rem]" />
              <a href="mailto:info@iccs.uk" className="hover:text-[#FEDB01]">
                info@iccs.uk
              </a>
            </p>
            <p className="flex font-bold">
              <FaMapMarkerAlt className="mr-2 text-[#FEDB01] mt-1 min-w-[1rem]" />
              7 Bernard Road, RM7 0HX Romford, London, United Kingdom
            </p>
          </div>

          {/* Map Section */}
          <div className="bg-gray-100 h-40 w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.6778661243093!2d144.96674!3d-37.8210137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4bfadc1839%3A0xb7442f9eed7c3b64!2sBizGrow%20Digital!5e0!3m2!1sen!2s!4v1766504497748!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* === Social Media Icons === */}
          <div className="flex justify-center space-x-2 mt-4 ">
            {socialMedia.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="bg-white text-[#1D2B52] p-3 rounded-full hover:bg-[#B54118] hover:text-white transition duration-300"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* === Social Media Icons Separator === */}
      <hr className="border-t border-gray-700 my-8 max-w-7xl mx-auto" />
    </footer>
  );
};

export default Footer;
