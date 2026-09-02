import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono, Cinzel, Cormorant_Garamond, Syne } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "PRIME ARC STUDIO — Interior Architecture & Spatial Design | Mohali · Chandigarh",
  description: "Immersive interior architecture and design portfolio studio based in Mohali and Chandigarh Tricity. Interiors shaped by material, light, proportion, and quiet craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${spaceMono.variable} ${cinzel.variable} ${cormorant.variable} ${syne.variable} scroll-smooth dark`}
    >
      <body className="bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-[#d4af37]/30 selection:text-[#ffffff] overflow-x-hidden min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

