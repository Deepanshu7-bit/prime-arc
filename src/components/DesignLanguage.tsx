"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Layers, Box, Maximize2 } from "lucide-react";

const pillars = [
  {
    icon: Sun,
    number: "01",
    title: "LIGHT",
    subtitle: "ATMOSPHERIC CHOREOGRAPHY",
    description:
      "How natural daylight and indirect cove illumination shape mood, carve shadow lines, and evolve across hours.",
    vectorSvg: (
      <svg className="w-full h-24 stroke-[#d4af37]/40 fill-none" viewBox="0 0 200 80">
        <circle cx="100" cy="40" r="30" strokeWidth="0.75" strokeDasharray="3 3" />
        <line x1="20" y1="40" x2="180" y2="40" strokeWidth="0.5" />
        <line x1="100" y1="10" x2="100" y2="70" strokeWidth="0.5" />
        <path d="M 50 40 Q 100 10 150 40" strokeWidth="1" stroke="rgba(255,255,255,0.6)" />
      </svg>
    ),
  },
  {
    icon: Layers,
    number: "02",
    title: "MATERIAL",
    subtitle: "TACTILE & HONEST SURFACES",
    description:
      "Honest travertine stone, smoked oak joinery, aged bronze, hand-troweled lime plaster, and authentic textures.",
    vectorSvg: (
      <svg className="w-full h-24 stroke-[#d4af37]/40 fill-none" viewBox="0 0 200 80">
        <rect x="30" y="20" width="140" height="40" strokeWidth="0.75" strokeDasharray="4 4" />
        <line x1="30" y1="33" x2="170" y2="33" strokeWidth="0.5" />
        <line x1="30" y1="46" x2="170" y2="46" strokeWidth="0.5" />
        <line x1="75" y1="20" x2="75" y2="60" strokeWidth="0.5" />
        <line x1="125" y1="20" x2="125" y2="60" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    icon: Box,
    number: "03",
    title: "FORM",
    subtitle: "GEOMETRIC RESTRAINT",
    description:
      "Sculptural furniture outlines, clean structural axes, and architectural silhouettes designed to endure.",
    vectorSvg: (
      <svg className="w-full h-24 stroke-[#d4af37]/40 fill-none" viewBox="0 0 200 80">
        <path d="M 40 60 L 100 20 L 160 60 Z" strokeWidth="0.75" />
        <rect x="70" y="35" width="60" height="25" strokeWidth="0.5" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    icon: Maximize2,
    number: "04",
    title: "PROPORTION",
    subtitle: "SPATIAL EQUILIBRIUM",
    description:
      "Generous negative space and harmonious ratios between human scale, ceiling height, and built volume.",
    vectorSvg: (
      <svg className="w-full h-24 stroke-[#d4af37]/40 fill-none" viewBox="0 0 200 80">
        <circle cx="100" cy="40" r="35" strokeWidth="0.75" />
        <rect x="75" y="15" width="50" height="50" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="100" y1="5" x2="100" y2="75" strokeWidth="0.5" />
      </svg>
    ),
  },
];

export default function DesignLanguage() {
  return (
    <section
      id="language"
      className="relative w-full py-28 md:py-40 px-6 md:px-12 bg-[#09090b] text-stone-100 border-b border-stone-800/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#d4af37]" />
            <span className="font-mono-cad text-xs tracking-[0.3em] text-[#d4af37] uppercase">
              SECTION 03 // DESIGN LANGUAGE
            </span>
          </div>
          <h2 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight text-stone-100 uppercase">
            THE LANGUAGE OF SPACE
          </h2>
          <p className="font-serif-editorial italic text-lg sm:text-xl text-stone-400">
            Four fundamental pillars guiding every architectural interior designed by Prime Arc Studio.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative p-8 bg-stone-950/60 backdrop-blur-md border border-stone-800/60 hover:border-[#d4af37]/60 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Pillar CAD Header */}
                  <div className="flex items-center justify-between font-mono-cad text-xs text-stone-400 mb-6">
                    <span className="text-[#d4af37]">{pillar.number}</span>
                    <Icon className="w-5 h-5 text-stone-400 group-hover:text-[#d4af37] transition-colors" />
                  </div>

                  <h3 className="font-syne text-2xl font-bold tracking-wider text-stone-100 uppercase group-hover:text-[#d4af37] transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="font-mono-cad text-[10px] tracking-[0.2em] text-stone-400 uppercase mt-1">
                    {pillar.subtitle}
                  </div>

                  <p className="mt-6 font-sans text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Vector SVG Animation Card Moment */}
                <div className="mt-8 pt-4 border-t border-stone-800/40">
                  {pillar.vectorSvg}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
