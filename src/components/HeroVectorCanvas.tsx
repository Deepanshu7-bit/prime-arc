"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroVectorCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden select-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle Architectural Perspective Grid */}
        <g className="opacity-20 stroke-stone-400">
          <line x1="0" y1="450" x2="1440" y2="450" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="720" y1="0" x2="720" y2="900" strokeWidth="0.5" strokeDasharray="4 4" />

          {/* Perspective Vanishing Rays */}
          <line x1="720" y1="450" x2="0" y2="0" strokeWidth="0.5" />
          <line x1="720" y1="450" x2="1440" y2="0" strokeWidth="0.5" />
          <line x1="720" y1="450" x2="0" y2="900" strokeWidth="0.5" />
          <line x1="720" y1="450" x2="1440" y2="900" strokeWidth="0.5" />
        </g>

        {/* Animated CAD Floor Plan Arc (Top Right) */}
        <motion.circle
          cx={isMobile ? 1200 : 1150}
          cy={isMobile ? 200 : 250}
          r={isMobile ? 140 : 220}
          stroke="rgba(212, 175, 55, 0.35)"
          strokeWidth="0.8"
          strokeDasharray="6 6"
          className="animate-orbit"
          style={{ transformOrigin: isMobile ? "1200px 200px" : "1150px 250px" }}
        />

        <motion.path
          d={isMobile ? "M 1060 200 A 140 140 0 0 1 1200 60" : "M 930 250 A 220 220 0 0 1 1150 30"}
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Dimension Measurement Line (Left Side) */}
        {!isMobile && (
          <g className="opacity-40">
            <line x1="80" y1="180" x2="80" y2="720" stroke="#fff" strokeWidth="0.75" />
            <line x1="70" y1="180" x2="90" y2="180" stroke="#fff" strokeWidth="0.75" />
            <line x1="70" y1="720" x2="90" y2="720" stroke="#fff" strokeWidth="0.75" />
            <text
              x="65"
              y="450"
              fill="#fff"
              fontSize="10"
              fontFamily="var(--font-mono)"
              letterSpacing="2"
              transform="rotate(-90 65 450)"
              textAnchor="middle"
              className="opacity-70"
            >
              SCALE 1:50 · SPATIAL BOUNDARY [5.40m]
            </text>
          </g>
        )}

        {/* Floating Structural Blueprint Rectangle (Bottom Right) */}
        <motion.rect
          x={isMobile ? 950 : 1000}
          y={isMobile ? 550 : 520}
          width={isMobile ? 380 : 320}
          height={isMobile ? 220 : 260}
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1"
          strokeDasharray="5 5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        <motion.path
          d={
            isMobile
              ? "M 950 550 L 1330 770 M 1330 550 L 950 770"
              : "M 1000 520 L 1320 780 M 1320 520 L 1000 780"
          }
          stroke="rgba(212, 175, 55, 0.2)"
          strokeWidth="0.5"
        />

        {/* CAD Drafting Ticks & Crosshairs */}
        <g className="stroke-white opacity-40">
          {/* Top Left Crosshair */}
          <line x1="120" y1="100" x2="140" y2="100" strokeWidth="0.75" />
          <line x1="130" y1="90" x2="130" y2="110" strokeWidth="0.75" />

          {/* Bottom Left Crosshair */}
          <line x1="120" y1="800" x2="140" y2="800" strokeWidth="0.75" />
          <line x1="130" y1="790" x2="130" y2="810" strokeWidth="0.75" />

          {/* Top Right Crosshair */}
          <line x1="1320" y1="100" x2="1340" y2="100" strokeWidth="0.75" />
          <line x1="1330" y1="90" x2="1330" y2="110" strokeWidth="0.75" />
        </g>

        {/* Coordinate Text Overlay */}
        <text
          x={isMobile ? "40" : "140"}
          y={isMobile ? "860" : "840"}
          fill="rgba(255, 255, 255, 0.5)"
          fontSize={isMobile ? "9" : "11"}
          fontFamily="var(--font-mono)"
          letterSpacing="1.5"
        >
          [30°41&apos;N 76°45&apos;E] · MOHALI / CHANDIGARH TRICITY
        </text>

        {!isMobile && (
          <text
            x="1330"
            y="840"
            fill="rgba(255, 255, 255, 0.5)"
            fontSize="11"
            fontFamily="var(--font-mono)"
            letterSpacing="1.5"
            textAnchor="end"
          >
            PRIME ARC STUDIO // CAD-VECT-01
          </text>
        )}
      </svg>
    </div>
  );
}
