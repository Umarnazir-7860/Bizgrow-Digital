// components/Footer.js

import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  const importantLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/our-digital-services" },
    { name: "Blog", href: "/blog" },

    { name: "Contact Us", href: "/contact-us" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  const servicesLinks = [
    { name: "Creative Content", href: "/creative-content" },
    { name: "Email Marketing", href: "/email-marketing" },
    { name: "Lead Generation", href: "/lead-generation-solutions" },
    { name: "WordPress", href: "/wordpress-website" },
    { name: "Digital Marketing", href: "/digital-marketing-services" },
    { name: "Facebook Marketing", href: "/facebook-marketing-services" },
    { name: "Social Media Marketing", href: "/social-media-marketing" },
    { name: "Website Development", href: "/web-development" },
    { name: "Graphic Design", href: "/graphic-design-services" },
    { name: "Search Engine Optimisation", href: "/search-engine-optimisation" },
  ];

  const socialMedia = [
    { Icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61577206013332", label: "Facebook" },
    { Icon: FaTiktok, href: "https://www.tiktok.com/@bizgrowholdings", label: "TikTok" },
    { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/bizgrowdigital/posts/?feedView=all", label: "LinkedIn" },
    { Icon: FaYoutube, href: "https://www.youtube.com/@bizgrowholdings/featured", label: "YouTube" },
  ];

  return (
    <footer className=" bg-[#000B25]  text-white py-10 px-4 md:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Column 1: Logo + About */}
        <div>
          <Image
            src="/BizGrow-digital-logo.png"
            alt="BizGrow Digital Logo"
            width={120}
            height={60}
            className="mb-4 rounded-xl"
          />
          <p className="text-sm leading-relaxed mb-4">
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

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links:</h3>
          <ul className="space-y-2 text-md">
            {importantLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#B54118] transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services Links:</h3>
          <ul className="space-y-2 text-md">
            {servicesLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#B54118] transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact + Map + Social */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us:</h3>
          <div className="space-y-3 mb-6 text-sm">
            <p className="flex items-center font-bold">
              <FaPhoneAlt className="mr-2 text-2xl text-[#B54118] min-w-[1rem]" />
              +44 7903 332433 <br /> 020 8090 4209
            </p>
            <p className="flex items-center font-bold">
              <FaEnvelope className="mr-2 text-[#B54118] min-w-[1rem]" />
              <a href="mailto:info@iccs.uk" className="hover:text-[#FEDB01]">
                Info@bizgrow-digital.co.uk
              </a>
            </p>
            <p className="flex items-start font-bold">
              <FaMapMarkerAlt className="mr-2 text-[#B54118] mt-1 min-w-[1rem]" />
              CEME Campus, Marsh Way, RM13 8EU
            </p>
          </div>

          {/* Responsive Map */}
          <div className="w-full h-40 md:h-60 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317788.248899627!2d0.17185!3d51.51834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a559375c3235%3A0xd4e3f499e51befee!2sCEME%20Campus!5e0!3m2!1sen!2sus!4v1767348057582!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Social Media */}
          <div className="flex justify-center md:justify-start space-x-2 mt-4">
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

      <hr className="border-t border-gray-700 my-8" />
    </footer>
  );
};

export default Footer;
