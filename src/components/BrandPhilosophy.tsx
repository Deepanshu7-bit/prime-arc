"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BrandPhilosophy() {
  return (
    <section className="relative w-full py-32 md:py-48 px-6 md:px-12 bg-[#09090b] text-stone-100 border-b border-stone-800/40 overflow-hidden">
      {/* Background CAD Lines */}
      <div className="absolute inset-0 bg-cad-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#d4af37]" />
            <span className="font-mono-cad text-xs tracking-[0.3em] text-[#d4af37] uppercase">
              SECTION 08 // BRAND PHILOSOPHY
            </span>
          </div>

          <h2 className="font-syne text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-stone-100 uppercase leading-none">
            NOT MORE. <br />
            <span className="font-serif-editorial italic font-normal text-stone-400">JUST BETTER.</span>
          </h2>

          <p className="font-sans text-base sm:text-xl text-stone-300 font-light max-w-2xl mx-auto leading-relaxed pt-6">
            We resist fast trends and arbitrary ornamentation. We craft spatial environments designed to age gracefully over decades—where every detail is essential and every material is true.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
