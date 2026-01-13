"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  FaCode,
  FaPaintBrush,
  FaChartLine,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaBullhorn,
  FaSearch,
} from "react-icons/fa";
import { Code2 } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  if (!mounted) return null;

  const services = [
    {
      title: "Creative Content",
      description: "Brand storytelling & visuals",
      href: "/creative-content",
      icon: <FaPaintBrush />,
    },
    {
      title: "Email Marketing",
      description: "High-converting email campaigns",
      href: "/email-marketing",
      icon: <FaEnvelope />,
    },
    {
      title: "Lead Generation",
      description: "Sales-focused strategies",
      href: "/lead-generation-solutions",
      icon: <FaChartLine />,
    },
    {
      title: "WordPress",
      description: "Custom WP development & themes",
      href: "/wordpress-website",
      icon: <FaCode />,
    },
    {
      title: "Digital Marketing",
      description: "Omnichannel marketing solutions",
      href: "/digital-marketing-services",
      icon: <FaBullhorn />,
    },
    {
      title: "Facebook Marketing",
      description: "Targeted ads & social growth",
      href: "/facebook-marketing-services",
      icon: <FaBullhorn />,
    },
    {
      title: "Social Media Marketing",
      description: "Engagement & community building",
      href: "/social-media-marketing",
      icon: <FaBullhorn />,
    },
    {
      title: "Web Development",
      description:
        "High-performance React & Next.js apps with Framer Motion & GSAP animations.",
      href: "/web-development",
      icon: <Code2 />,
    },
    {
      title: "Graphic Design",
      description: "Creative logos & branding",
      href: "/graphic-design-services",
      icon: <FaPaintBrush />,
    },
    {
      title: "Search Engine Optimisation",
      description: "Boost your organic visibility",
      href: "/search-engine-optimisation",
      icon: <FaSearch />,
    },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex py-3 items-center justify-between">
          <Link href="/">
            <Image
              src="/BizGrow-digital-logo.png"
              alt="BizGrow Digital Logo"
              width={110}
              height={40}
              priority
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-medium text-white">
            <Link href="/" className="hover:text-orange-500 transition">
              Home
            </Link>
            <Link href="/about-us" className="hover:text-orange-500 transition">
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Link href="/our-digital-services">
                <button 
                  className="flex items-center gap-1 text-orange-500 outline-none"
                  aria-expanded={open}
                  aria-haspopup="true"
                >
                  Services
                  <svg 
                    className={`w-4 h-4 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </Link>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-8 w-[720px] rounded-2xl bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl"
                  >
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {services.map((s, i) => (
                        <Link
                          key={i}
                          href={s.href}
                          className="group flex gap-4 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition"
                        >
                          <div className="text-orange-500 text-lg mt-1">
                            {s.icon}
                          </div>
                          <div>
                            <h4 className="text-black dark:text-white text-sm font-semibold group-hover:text-orange-500">
                              {s.title}
                            </h4>
                            <p className="text-[10px] text-gray-500 leading-tight">
                              {s.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/blogs" className="hover:text-orange-500 transition">
              Blogs
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-orange-500 transition"
            >
              Contact
            </Link>
          </div>

          {/* THEME & MOBILE BUTTON */}
          <div className="flex items-center gap-4">
            <button
              aria-label={resolvedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"} 
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white"
            >
              {resolvedTheme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
            <button
              aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white text-2xl mx-4 p-2" 
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-white z-[60] overflow-y-auto outline-none"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/10 sticky top-0 bg-black z-10">
              <Image
                src="/BizGrow-digital-logo.png"
                alt="BizGrow Digital Logo"
                width={100}
                height={35}
              />
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="text-white text-3xl"
              >
                ✕
              </button>
            </div>

            <div className="px-6 py-8 pb-12 flex flex-col space-y-6">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium text-black"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium text-black"
              >
                About
              </Link>

              {/* Services Section */}
              <div className="space-y-4">
                <button
                  aria-label="Toggle services list"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex justify-between items-center text-xl font-medium text-black"
                >
                  Services
                  <span
                    className={`text-orange-500 transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col space-y-2 pl-4 border-l border-gray-200"
                    >
                      {services.map((service, i) => (
                        <Link
                          key={i}
                          href={service.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0"
                        >
                          <div className="text-orange-500 text-lg">
                            {service.icon}
                          </div>
                          <span className="text-black text-base font-semibold">
                            {service.title}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/blogs"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium text-black"
              >
                Blogs
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium text-black"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}