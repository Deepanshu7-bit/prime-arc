"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FullScreenMoment() {
  return (
    <section className="relative w-full h-[85vh] sm:h-screen flex items-center justify-center bg-[#09090b] overflow-hidden border-b border-stone-800/40">
      {/* Background Photography */}
      <Image
        src="/assets/project2.jpg"
        alt="Panoramic interior architectural dining hall space by Prime Arc Studio"
        fill
        className="object-cover object-center brightness-[0.4] contrast-[1.05]"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]/80" />

      {/* Center Typographic Overlay */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <span className="font-mono-cad text-xs tracking-[0.3em] text-[#d4af37] uppercase">
            // SPATIAL ESSENCE
          </span>
          <h2 className="font-syne text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-stone-100 uppercase leading-tight">
            “GOOD DESIGN <br />
            <span className="font-serif-editorial italic font-normal text-stone-300">GIVES SPACE</span> <br />
            A CHARACTER.”
          </h2>
        </motion.div>
      </div>

      {/* Vector Corner Ticks */}
      <div className="absolute top-12 left-12 pointer-events-none hidden sm:block font-mono-cad text-[10px] text-stone-400">
        [PANORAMIC FRAME // VERDE MONOLITH]
      </div>
      <div className="absolute bottom-12 right-12 pointer-events-none hidden sm:block font-mono-cad text-[10px] text-stone-400">
        SCALE 1:1 · FULL VIEWPORT
      </div>
    </section>
  );
}
