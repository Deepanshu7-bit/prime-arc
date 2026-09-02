"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StudioSection() {
  return (
    <section
      id="studio"
      className="relative w-full py-28 md:py-40 px-6 md:px-12 bg-[#09090b] text-stone-100 overflow-hidden border-b border-stone-800/40"
    >
      {/* Background Subtle CAD Blueprint Grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Label & Coordinates */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#d4af37]" />
              <span className="font-mono-cad text-xs tracking-[0.3em] text-[#d4af37] uppercase">
                SECTION 01 // THE STUDIO
              </span>
            </div>

            <div className="border-l border-stone-800 pl-6 py-2 space-y-3">
              <p className="font-mono-cad text-xs tracking-[0.2em] text-stone-400">
                PRACTICE LOCATION:
              </p>
              <p className="font-sans text-sm text-stone-300 font-light">
                Mohali / Chandigarh Tricity, Punjab
              </p>
              <p className="font-mono-cad text-[10px] tracking-[0.25em] text-stone-500">
                [30.7046° N, 76.7179° E]
              </p>
            </div>
          </div>

          {/* Right Column Statement & Paragraphs */}
          <div className="lg:col-span-8 space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 leading-[1.15] uppercase"
            >
              WE CREATE INTERIORS <br />
              <span className="font-serif-editorial italic font-normal text-stone-300">
                THAT ARE FELT BEFORE
              </span> <br />
              THEY ARE EXPLAINED.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-stone-300 font-light text-base md:text-lg leading-relaxed max-w-2xl"
            >
              <p>
                Prime Arc Studio is a contemporary interior architecture practice rooted in the quiet pursuit of spatial balance. We believe that true luxury does not shout; it resides in the delicate dialogue between raw stone, warm timber, natural light, and tailored proportion.
              </p>
              <p>
                Every project we undertake in Mohali and the Chandigarh Tricity is a bespoke exploration. We eliminate non-essentials to create environments that feel calm, tactile, and effortlessly lived-in—spaces that honor the character of those who inhabit them.
              </p>
            </motion.div>

            {/* Editorial Architectural Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-stone-800/60 font-mono-cad">
              <div>
                <span className="block text-2xl md:text-3xl text-stone-100 font-light">01</span>
                <span className="block text-[10px] tracking-[0.2em] text-stone-400 uppercase mt-1">
                  SPATIAL MATRICES
                </span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl text-stone-100 font-light">02</span>
                <span className="block text-[10px] tracking-[0.2em] text-stone-400 uppercase mt-1">
                  TACTILE CRAFT
                </span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl text-stone-100 font-light">03</span>
                <span className="block text-[10px] tracking-[0.2em] text-stone-400 uppercase mt-1">
                  LIGHT &amp; PROPORTION
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
