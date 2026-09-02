"use client";

import React from "react";
import { motion } from "framer-motion";

const stages = [
  {
    step: "01",
    title: "OBSERVE",
    subtitle: "CONTEXT & DIALOGUE",
    description:
      "We begin by listening deeply. Understanding how you live, the orientation of sunlight, architectural structural constraints, and contextual site dynamics in Mohali / Chandigarh.",
  },
  {
    step: "02",
    title: "CONCEPT",
    subtitle: "SPATIAL POETRY",
    description:
      "Developing a distinct spatial narrative. We articulate spatial flow, material palettes, custom lighting layouts, and 3D volumetric massing.",
  },
  {
    step: "03",
    title: "REFINE",
    subtitle: "PRECISION & SPECIFICATION",
    description:
      "Crafting exact architectural working drawings, millwork details, stonemason specs, bespoke furniture prototypes, and curated textile selections.",
  },
  {
    step: "04",
    title: "REALIZE",
    subtitle: "PHYSICAL EXECUTION",
    description:
      "Meticulous site supervision and turnkey project coordination—ensuring every shadow line, joint, and timber reveal aligns with the initial artistic vision.",
  },
];

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="relative w-full py-28 md:py-40 px-6 md:px-12 bg-[#09090b] text-stone-100 border-b border-stone-800/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#d4af37]" />
            <span className="font-mono-cad text-xs tracking-[0.3em] text-[#d4af37] uppercase">
              SECTION 06 // METHODOLOGY
            </span>
          </div>
          <h2 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight text-stone-100 uppercase">
            AN APPROACH, <br />
            <span className="font-serif-editorial italic font-normal text-stone-400">NOT A FORMULA.</span>
          </h2>
        </div>

        {/* 4 Stages Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative p-8 bg-stone-950/60 backdrop-blur-md border border-stone-800/60 flex flex-col justify-between"
            >
              <div>
                {/* Stage Header */}
                <div className="font-mono-cad text-xs text-[#d4af37] mb-6 flex items-center justify-between">
                  <span>STAGE // {stage.step}</span>
                  <span className="w-2 h-2 rounded-full bg-[#d4af37]/40" />
                </div>

                <h3 className="font-syne text-2xl font-bold tracking-wider text-stone-100 uppercase">
                  {stage.title}
                </h3>
                <div className="font-mono-cad text-[10px] tracking-[0.2em] text-stone-400 uppercase mt-1">
                  {stage.subtitle}
                </div>

                <p className="mt-6 font-sans text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Connecting Vector Marker */}
              <div className="mt-8 pt-4 border-t border-stone-800/40 font-mono-cad text-[10px] text-stone-400">
                [CAD-PHASE-{stage.step}]
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
