"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function StudioLocation() {
  return (
    <section
      id="contact"
      className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#09090b] text-stone-100 border-b border-stone-800/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Brand Identity */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#d4af37]" />
              <span className="font-mono-cad text-xs tracking-[0.3em] text-[#d4af37] uppercase">
                SECTION 09 // STUDIO IDENTITY
              </span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl font-semibold tracking-wider text-stone-100 uppercase">
              PRIME ARC STUDIO
            </h2>

            <p className="font-mono-cad text-xs tracking-[0.25em] text-stone-400 uppercase">
              MOHALI · CHANDIGARH TRICITY
            </p>

            <p className="font-sans text-stone-300 text-sm sm:text-base font-light leading-relaxed max-w-md">
              Interior Design · Architecture · Spatial Experiences for discerning residential and commercial clients across Punjab and Chandigarh Tricity.
            </p>
          </div>

          {/* Right Column: Studio Coordinates & Contact */}
          <div className="lg:col-span-6 space-y-8 font-mono-cad text-xs">
            <div className="p-6 bg-stone-950/60 border border-stone-800 space-y-4">
              <div className="flex items-center gap-3 text-[#d4af37]">
                <MapPin className="w-4 h-4" />
                <span className="tracking-[0.2em] uppercase">STUDIO LOCATIONS</span>
              </div>
              <div className="space-y-3 text-stone-300 font-sans font-light text-xs sm:text-sm">
                <div>
                  <p className="font-semibold text-stone-200">Main Studio (Mohali):</p>
                  <p>Banda Bahadur Colony, Near Shiv Mandir, Thana Road, Banur, SAS Nagar, Mohali - 140601</p>
                </div>
                <div className="pt-2 border-t border-stone-800/60">
                  <p className="font-semibold text-stone-200">Zirakpur Studio:</p>
                  <p>Shop No. 19, Upper Ground Floor, Hi Fi Street, Highland Road, Zirakpur</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-stone-950/60 border border-stone-800 space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Phone className="w-4 h-4" />
                  <span className="uppercase">PHONE</span>
                </div>
                <p className="font-sans text-stone-200 text-sm font-light">
                  <a href="tel:+919872243091" className="hover:text-[#d4af37] transition-colors">
                    +91-98722 43091
                  </a>
                </p>
              </div>

              <div className="p-6 bg-stone-950/60 border border-stone-800 space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Mail className="w-4 h-4" />
                  <span className="uppercase">EMAIL</span>
                </div>
                <p className="font-sans text-stone-200 text-xs font-light space-y-1">
                  <a href="mailto:info@primearcstudio.in" className="block hover:text-[#d4af37] transition-colors">
                    info@primearcstudio.in
                  </a>
                  <a href="mailto:primearcstudio55@gmail.com" className="block text-stone-400 hover:text-[#d4af37] transition-colors">
                    primearcstudio55@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
