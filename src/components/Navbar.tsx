"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Studio", href: "#studio" },
    { name: "Work", href: "#work" },
    { name: "Language", href: "#language" },
    { name: "Craft", href: "#craft" },
    { name: "Approach", href: "#approach" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#09090b]/80 backdrop-blur-md border-b border-stone-800/40 py-4 shadow-2xl"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-none border border-stone-400/30 flex items-center justify-center group-hover:border-[#d4af37] transition-colors">
              <Compass className="w-4 h-4 text-stone-300 group-hover:text-[#d4af37] transition-colors" />
            </div>
            <div>
              <span className="block font-cinzel font-semibold tracking-[0.25em] text-xs md:text-sm text-stone-100 uppercase">
                PRIME ARC
              </span>
              <span className="block font-mono-cad text-[9px] tracking-[0.3em] text-stone-400 uppercase">
                STUDIO · MOHALI
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono-cad text-xs tracking-[0.2em] text-stone-300 hover:text-[#d4af37] uppercase transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#work"
              className="font-mono-cad text-[11px] tracking-[0.25em] text-stone-400 hover:text-stone-100 transition-colors uppercase flex items-center gap-1"
            >
              EXPLORE <span className="text-[#d4af37]">↓</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-stone-100 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#09090b]/95 backdrop-blur-xl flex flex-col justify-between px-8 py-24 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="font-mono-cad text-[10px] tracking-[0.3em] text-[#d4af37] uppercase mb-4">
                // NAVIGATION MENU
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-syne text-3xl tracking-tight text-stone-200 hover:text-[#d4af37] transition-colors py-2 border-b border-stone-800/40"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="space-y-2">
              <p className="font-mono-cad text-xs text-stone-400">
                Prime Arc Studio — Mohali / Chandigarh
              </p>
              <p className="font-mono-cad text-[10px] text-stone-500">
                +91-98722 43091 · info@primearcstudio.in
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
