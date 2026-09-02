"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const materials = [
  {
    tag: "MATERIAL",
    name: "FLUTED TRAVERTINE MARBLE",
    origin: "Roman Quarry · Natural Porous Finish",
    desc: "Unfilled natural travertine flutes that catch low-angled daylight, creating rhythmic shadows.",
  },
  {
    tag: "TEXTURE",
    name: "SMOKED WHITE OAK",
    origin: "Bespoke Millwork · Matte Oil Finish",
    desc: "Tactile joinery edges crafted with precise miters and hidden integrated reveal gaps.",
  },
  {
    tag: "LIGHT",
    name: "AGED BRUSHED BRASS",
    origin: "Hand-Patinated Metal Seams",
    desc: "Subtle metallic accents that provide warm specular highlights against raw stone.",
  },
  {
    tag: "CRAFT",
    name: "SLAKED LIME PLASTER",
    origin: "Artisanal Troweled Surfaces",
    desc: "Breathable mineral wall finishes that reflect ambient light with organic depth.",
  },
];

export default function CraftSection() {
  return (
    <section
      id="craft"
      className="relative w-full py-28 md:py-40 px-6 md:px-12 bg-[#09090b] text-stone-100 border-b border-stone-800/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-1.5 h-1.5 bg-[#d4af37]" />
              <span className="font-mono-cad text-xs tracking-[0.3em] text-[#d4af37] uppercase">
                SECTION 05 // CRAFT &amp; MATERIALITY
              </span>
            </div>
            <h2 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight text-stone-100 uppercase">
              DETAIL IS THE DESIGN.
            </h2>
          </div>

          <div className="lg:col-span-4 font-serif-editorial italic text-stone-400 text-lg">
            Every junction, Shadow line, and grain transition is deliberately considered.
          </div>
        </div>

        {/* Feature Hero Texture Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Craft Photography Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative h-[450px] sm:h-[600px] bg-stone-900 border border-stone-800 overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/craft.jpg"
              alt="High-resolution close up macro shot of fluted travertine marble and smoked oak joinery"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1200px) 100vw, 60vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

            {/* Floating CAD Labels */}
            <div className="absolute bottom-6 left-6 font-mono-cad text-xs text-stone-200 bg-stone-950/80 backdrop-blur-md px-4 py-2 border border-stone-700/60">
              MACRO DETAIL // STONE + METAL + WOOD JUNCTION
            </div>
          </motion.div>

          {/* Right Material Specifications */}
          <div className="lg:col-span-5 space-y-8">
            {materials.map((mat, idx) => (
              <motion.div
                key={mat.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 bg-stone-950/40 border-l border-stone-800 hover:border-[#d4af37] transition-colors"
              >
                <div className="flex items-center justify-between font-mono-cad text-xs text-stone-400 mb-2">
                  <span className="text-[#d4af37] uppercase">// {mat.tag}</span>
                  <span className="text-stone-500">{mat.origin}</span>
                </div>
                <h3 className="font-syne text-lg font-bold text-stone-100 uppercase">
                  {mat.name}
                </h3>
                <p className="mt-2 font-sans text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                  {mat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
