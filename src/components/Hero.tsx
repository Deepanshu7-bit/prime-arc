"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroVectorCanvas from "./HeroVectorCanvas";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 bg-[#09090b] overflow-hidden">
      {/* Background Hero Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpg"
          alt="Luxury Interior Living Space by Prime Arc Studio"
          fill
          priority
          className="object-cover object-center brightness-[0.45] contrast-[1.05] scale-105 transition-transform duration-1000"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-[#09090b]/60" />
      </div>

      {/* Hero Architectural Vector Overlay */}
      <HeroVectorCanvas />

      {/* Top Label Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-none bg-stone-950/60 backdrop-blur-md border border-stone-700/50"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          <span className="font-mono-cad text-[10px] sm:text-xs tracking-[0.25em] text-stone-300 uppercase">
            INTERIOR DESIGN · ARCHITECTURE · SPACES
          </span>
        </motion.div>
      </div>

      {/* Main Headline & Supporting Editorial Copy */}
      <div className="relative z-20 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-stone-100 leading-[1.05] uppercase"
          >
            SPACES <br />
            <span className="font-serif-editorial italic font-normal text-stone-300">WITH A</span> <br />
            POINT OF VIEW.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 md:mt-8 font-sans text-sm md:text-base lg:text-lg text-stone-300 font-light max-w-xl leading-relaxed"
          >
            Prime Arc Studio creates considered interiors shaped by material, light, proportion and everyday living in Mohali &amp; Chandigarh Tricity.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a
              href="#work"
              className="group px-7 py-4 bg-stone-100 text-stone-950 font-mono-cad text-xs tracking-[0.25em] uppercase flex items-center gap-3 hover:bg-[#d4af37] hover:text-stone-950 transition-all duration-300 shadow-xl"
            >
              EXPLORE OUR WORK
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#studio"
              className="group px-7 py-4 bg-stone-950/70 backdrop-blur-md border border-stone-700/60 text-stone-200 font-mono-cad text-xs tracking-[0.25em] uppercase flex items-center gap-3 hover:border-stone-400 hover:text-white transition-all duration-300"
            >
              THE STUDIO
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer Hero Metadata */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-8 border-t border-stone-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="font-mono-cad text-[10px] tracking-[0.25em] text-stone-400 uppercase">
          MOHALI · CHANDIGARH TRICITY // EST. STUDIO
        </div>
        <div className="font-mono-cad text-[10px] tracking-[0.25em] text-stone-500 uppercase flex items-center gap-2">
          <span>SCROLL TO DISCOVER</span>
          <span className="w-12 h-[1px] bg-stone-700 inline-block" />
        </div>
      </div>
    </section>
  );
}
