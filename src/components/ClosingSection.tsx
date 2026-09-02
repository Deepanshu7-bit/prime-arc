"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUp, ArrowRight } from "lucide-react";

export default function ClosingSection() {
  return (
    <footer className="relative w-full min-h-[80vh] flex flex-col justify-between py-24 px-6 md:px-12 bg-[#09090b] text-stone-100 overflow-hidden">
      {/* Cinematic Closing Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpg"
          alt="Cinematic Architectural Space by Prime Arc Studio"
          fill
          className="object-cover object-center brightness-[0.25] contrast-[1.1]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-[#09090b]/80" />
      </div>

      {/* Main Closing Heading */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="font-mono-cad text-xs tracking-[0.3em] text-[#d4af37] uppercase">
            // DIGITAL EXHIBITION CONCLUSION
          </span>

          <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-stone-100 uppercase">
            LET THE SPACE <br />
            <span className="font-serif-editorial italic font-normal text-stone-300">SPEAK.</span>
          </h2>

          <p className="font-serif-editorial italic text-lg sm:text-xl text-stone-300">
            Explore the interior architecture of Prime Arc Studio.
          </p>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6">
            <a
              href="#work"
              className="px-8 py-4 bg-stone-100 text-stone-950 font-mono-cad text-xs tracking-[0.25em] uppercase flex items-center gap-3 hover:bg-[#d4af37] transition-colors"
            >
              VIEW SELECTED WORK
              <ArrowUp className="w-4 h-4" />
            </a>

            <a
              href="mailto:info@primearcstudio.in"
              className="px-8 py-4 bg-stone-950/80 backdrop-blur-md border border-stone-700 text-stone-200 font-mono-cad text-xs tracking-[0.25em] uppercase flex items-center gap-3 hover:border-stone-400 hover:text-white transition-colors"
            >
              GET IN TOUCH
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-cad text-[10px] text-stone-400">
        <div>
          © {new Date().getFullYear()} PRIME ARC STUDIO · ALL RIGHTS RESERVED
        </div>
        <div>
          MOHALI · CHANDIGARH TRICITY // ARCHITECTURAL PORTFOLIO
        </div>
      </div>
    </footer>
  );
}
