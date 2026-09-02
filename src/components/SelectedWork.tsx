"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  number: string;
  title: string;
  location: string;
  typology: string;
  year: string;
  image: string;
  aspectRatio: "portrait" | "landscape" | "wide";
  description: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    number: "01",
    title: "CONTEMPORARY RESIDENCE",
    location: "Mohali, Punjab",
    typology: "Private Dwelling · Interior Architecture",
    year: "2026",
    image: "/assets/project1.jpg",
    aspectRatio: "portrait",
    description: "A dual-height private villa anchored by a floating helical wooden staircase, smooth clay plaster, and dramatic daylight apertures.",
  },
  {
    id: "project-2",
    number: "02",
    title: "THE VERDE MONOLITH",
    location: "Chandigarh Tricity",
    typology: "Dining Hall · Turnkey Interiors",
    year: "2026",
    image: "/assets/project2.jpg",
    aspectRatio: "landscape",
    description: "Monolithic Verde Alpi marble dining hall with custom warm pendant light sculptures casting poetic geometric shadows.",
  },
  {
    id: "project-3",
    number: "03",
    title: "TRAVERTINE SANCTUARY",
    location: "Sector 82, Mohali",
    typology: "Modern Family Living · Custom Joinery",
    year: "2025",
    image: "/assets/hero.jpg",
    aspectRatio: "wide",
    description: "Serene open-plan lounge connecting indoor limestone flooring with lush private courtyards through floor-to-ceiling glass.",
  },
  {
    id: "project-4",
    number: "04",
    title: "TACTILE CRAFT STUDIO",
    location: "Zirakpur, Punjab",
    typology: "Architectural Materiality & Details",
    year: "2025",
    image: "/assets/craft.jpg",
    aspectRatio: "landscape",
    description: "Fluted travertine stone meet brushed bronze metal seams and smoked oak joinery edges in quiet minimalist symmetry.",
  },
];

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      className="relative w-full py-28 md:py-40 px-6 md:px-12 bg-[#09090b] text-stone-100 overflow-hidden border-b border-stone-800/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-stone-800/60 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-1.5 h-1.5 bg-[#d4af37]" />
              <span className="font-mono-cad text-xs tracking-[0.3em] text-[#d4af37] uppercase">
                SECTION 02 // SELECTED WORK
              </span>
            </div>
            <h2 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight text-stone-100 uppercase">
              SELECTED WORK
            </h2>
          </div>
          <p className="font-serif-editorial italic text-lg sm:text-xl text-stone-400 max-w-md">
            A curated collection of spaces, materials, and spatial moments across Mohali &amp; Chandigarh.
          </p>
        </div>

        {/* Editorial Project List */}
        <div className="mt-16 space-y-32">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="group relative cursor-pointer"
                onMouseEnter={() => setActiveProject(project)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Project CAD Metadata Header */}
                <div className="flex flex-wrap items-center justify-between pb-4 font-mono-cad text-xs text-stone-400 border-b border-stone-800/40 gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[#d4af37] font-semibold">{project.number}</span>
                    <span className="text-stone-500">//</span>
                    <span className="tracking-[0.2em] text-stone-200 uppercase">{project.title}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span>{project.location}</span>
                    <span className="text-stone-600">|</span>
                    <span className="text-stone-400">{project.typology}</span>
                  </div>
                </div>

                {/* Asymmetric Image Container */}
                <div className={`mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  {/* Project Photography */}
                  <div
                    className={`relative overflow-hidden rounded-none bg-stone-900 border border-stone-800/60 shadow-2xl ${
                      project.aspectRatio === "portrait"
                        ? "lg:col-span-7 h-[500px] sm:h-[650px]"
                        : project.aspectRatio === "wide"
                        ? "lg:col-span-12 h-[400px] sm:h-[600px]"
                        : "lg:col-span-8 h-[450px] sm:h-[550px]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 1200px) 100vw, 80vw"
                    />

                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Floating Vector CAD Corner Markers */}
                    <div className="absolute top-4 left-4 p-2 border-t border-l border-white/40 pointer-events-none" />
                    <div className="absolute bottom-4 right-4 p-2 border-b border-r border-white/40 pointer-events-none" />
                  </div>

                  {/* Editorial Project Description */}
                  <div
                    className={`space-y-6 ${
                      project.aspectRatio === "wide" ? "lg:col-span-12 max-w-3xl" : "lg:col-span-4"
                    }`}
                  >
                    <div className="font-mono-cad text-[10px] tracking-[0.25em] text-[#d4af37] uppercase">
                      PROJECT DETAIL // {project.year}
                    </div>

                    <h3 className="font-syne text-2xl sm:text-3xl font-semibold text-stone-100 uppercase group-hover:text-[#d4af37] transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-sans text-stone-300 text-sm sm:text-base font-light leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-4 flex items-center gap-3 font-mono-cad text-xs tracking-[0.2em] text-stone-400 group-hover:text-stone-100 transition-colors">
                      <span>VIEW ARCHITECTURAL ARCHIVE</span>
                      <ArrowUpRight className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
