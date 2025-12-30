"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/our-digital-services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact-us" },
  ];

  if (!mounted) return null;

  return (
    // FIX 1: Added 'inset-x-0' and 'top-0' to ensure it stays pinned globally
    <nav className="fixed top-0 inset-x-0 w-full z-50 py-2 backdrop-blur-md bg-black/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/BizGrow-digital-logo.png"
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
                className="text-white hover:text-orange-500 transition font-medium"
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

            {/* FIX 2: Removed '-left-10' which was causing alignment issues */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors duration-300 focus:outline-none 
                ${resolvedTheme === "dark" ? "bg-orange-600" : "bg-gray-300"}`}
            >
              <span
                className={`inline-block w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300
                ${resolvedTheme === "dark" ? "translate-x-7" : "translate-x-1"}`}
              />
              <FaMoon className="absolute left-1.5 text-gray-700 pointer-events-none" size={12} />
              <FaSun className="absolute right-1.5 text-orange-500 pointer-events-none" size={12} />
            </button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                className="p-2 rounded-md"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {/* FIX 3: Dynamic color for mobile icon if background is light */}
                <svg
                  className={`h-6 w-6 ${mobileOpen ? 'text-black dark:text-white' : 'text-white'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
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
            className="lg:hidden bg-white dark:bg-black shadow-lg overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col space-y-4 text-center">
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl text-black dark:text-white hover:text-orange-500 transition font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}