"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 py-2 backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/Bizgrow-digital-logo.png"
                alt="Logo"
                width={110}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Center: Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-black dark:text-white hover:text-orange-500 transition font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: CTA + Theme Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden lg:inline-block px-4 py-2 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-500 transition"
            >
              Get Started
            </Link>
            <button
              onClick={toggleTheme}
              className={`relative inline-flex items-center h-9 w-20 rounded-full 
                transition-colors duration-300 focus:outline-none
              ${theme === "light" ? "bg-gray-300" : "bg-orange-600"}`}
            >
              {/* Toggle knob */}
              <span
                className={`absolute left-1 inline-block w-8 h-8 bg-white rounded-full 
                  shadow-md transform transition-transform duration-300
                ${theme === "light" ? "translate-x-0" : "translate-x-10"}`}
              />
              {/* Icons */}
              <FaMoon className="absolute left-3 text-gray-700" size={16} />
              <FaSun className="absolute right-3 text-[#000B25]" size={16} />
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md border border-gray-300 dark:border-gray-600"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-black/90 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col space-y-2">
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="text-black dark:text-white hover:text-orange-500 transition font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="px-4 py-2 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-500 transition text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
