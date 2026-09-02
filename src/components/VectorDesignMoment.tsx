"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function VectorDesignMoment() {
  const [activeStage, setActiveStage] = useState<"plan" | "form" | "space">("space");

  return (
    <section className="relative w-full py-28 md:py-40 px-6 md:px-12 bg-[#09090b] text-stone-100 overflow-hidden border-b border-stone-800/40">
      {/* Background Subtle CAD Grid */}
      <div className="absolute inset-0 bg-cad-grid-dense opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-1.5 h-1.5 bg-[#d4af37]" />
              <span className="font-mono-cad text-xs tracking-[0.3em] text-[#d4af37] uppercase">
                SECTION 04 // VECTOR-DRIVEN DESIGN MOMENT
              </span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-bold tracking-tight text-stone-100 uppercase">
              DESIGN IDEA → BUILT SPACE
            </h2>
          </div>

          {/* Stage Controls */}
          <div className="flex items-center gap-2 p-1.5 bg-stone-950/80 backdrop-blur-md border border-stone-800 rounded-none font-mono-cad text-xs">
            {(["plan", "form", "space"] as const).map((stage) => (
              <button
                key={stage}
                onClick={() => setActiveStage(stage)}
                className={`px-5 py-2 uppercase transition-all duration-300 ${
                  activeStage === stage
                    ? "bg-[#d4af37] text-stone-950 font-bold"
                    : "text-stone-400 hover:text-stone-100"
                }`}
              >
                0{stage === "plan" ? "1" : stage === "form" ? "2" : "3"} // {stage}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Interactive Stage Viewer */}
        <div className="relative w-full h-[450px] sm:h-[600px] border border-stone-800/80 bg-stone-950 overflow-hidden flex items-center justify-center">
          {/* Stage 1: 2D Blueprint Floor Plan */}
          {activeStage === "plan" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 p-8 flex flex-col justify-between bg-stone-950"
            >
              <div className="font-mono-cad text-xs text-stone-500 tracking-[0.2em] uppercase">
                // ARCHITECTURAL DRAFTING PLAN · 1:50 SCALE MATRIX
              </div>

              <svg className="w-full h-full stroke-stone-300 fill-none" viewBox="0 0 800 500">
                {/* Wall Outlines */}
                <rect x="100" y="80" width="600" height="340" strokeWidth="2" stroke="rgba(212,175,55,0.8)" />
                <line x1="300" y1="80" x2="300" y2="420" strokeWidth="1.5" strokeDasharray="6 6" />
                <line x1="100" y1="240" x2="700" y2="240" strokeWidth="1.5" />

                {/* Door Arcs */}
                <path d="M 300 240 A 60 60 0 0 1 360 300" stroke="#d4af37" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M 100 160 A 40 40 0 0 1 140 200" stroke="#d4af37" strokeWidth="1.2" strokeDasharray="3 3" />

                {/* Furniture Blueprint Outlines */}
                <rect x="360" y="120" width="180" height="90" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
                <circle cx="200" cy="330" r="45" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />

                {/* Dimension Ticks */}
                <line x1="100" y1="50" x2="700" y2="50" stroke="#888" strokeWidth="0.75" />
                <text x="400" y="42" fill="#d4af37" fontSize="12" fontFamily="var(--font-mono)" textAnchor="middle">
                  MAIN SPATIAL AXIS [12.40m]
                </text>
              </svg>

              <div className="font-mono-cad text-[10px] text-stone-400 tracking-[0.25em]">
                PHASE 01: INITIAL CAD LAYOUT &amp; CIRCULATION PATHWAYS
              </div>
            </motion.div>
          )}

          {/* Stage 2: 3D Isometric Structural Form */}
          {activeStage === "form" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 p-8 flex flex-col justify-between bg-stone-950"
            >
              <div className="font-mono-cad text-xs text-[#d4af37] tracking-[0.2em] uppercase">
                // 3D ISOMETRIC VOLUMETRIC FORM &amp; LIGHT STUDY
              </div>

              <svg className="w-full h-full stroke-stone-300 fill-none" viewBox="0 0 800 500">
                {/* Isometric Cube Wireframes */}
                <g strokeWidth="1.2" stroke="rgba(255,255,255,0.7)">
                  {/* Cube 1 */}
                  <polygon points="400,100 600,200 400,300 200,200" stroke="#d4af37" />
                  <line x1="400" y1="300" x2="400" y2="440" stroke="#d4af37" />
                  <line x1="600" y1="200" x2="600" y2="340" />
                  <line x1="200" y1="200" x2="200" y2="340" />
                  <polygon points="400,440 600,340 400,300 200,340" strokeDasharray="4 4" />
                </g>

                {/* Perspective Rays */}
                <line x1="400" y1="100" x2="400" y2="20" stroke="rgba(212,175,55,0.4)" strokeDasharray="3 3" />
              </svg>

              <div className="font-mono-cad text-[10px] text-stone-400 tracking-[0.25em]">
                PHASE 02: VOLUMETRIC MASSING, SUN-ANGLE PENETRATION &amp; CEILING RATIOS
              </div>
            </motion.div>
          )}

          {/* Stage 3: Real Completed Built Space */}
          {activeStage === "space" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src="/assets/project1.jpg"
                alt="Completed Prime Arc Studio Interior Architecture Project"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1200px) 100vw, 80vw"
              />

              {/* Blueprint Vector Line Overlay Over Real Photo */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
                <rect x="50" y="40" width="900" height="520" stroke="rgba(212,175,55,0.5)" strokeWidth="1" strokeDasharray="6 6" fill="none" />
                <circle cx="500" cy="300" r="140" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" strokeDasharray="4 4" fill="none" />
                <text x="70" y="80" fill="#ffffff" fontSize="12" fontFamily="var(--font-mono)" letterSpacing="2">
                  REALIZED PROJECT // CONTEMPORARY RESIDENCE
                </text>
              </svg>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
