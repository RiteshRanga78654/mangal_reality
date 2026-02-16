"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Home, ChevronRight } from "lucide-react";

// --- DUMMY DATA ---
const galleryPhotos = [
  { id: 1, type: "image", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200" },
  { id: 2, type: "image", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200" },
  { id: 3, type: "image", url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200" },
  { id: 4, type: "image", url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200" },
  { id: 5, type: "image", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200" },
  { id: 6, type: "image", url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200" },
];

const MarqueeColumn = ({ items, reverse = false, onSelect }) => (
  <div className="flex flex-col h-[600px] md:h-[1000px] overflow-hidden gap-4 md:gap-8">
    <motion.div
      animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ ease: "linear", duration: 40, repeat: Infinity }}
      className="flex flex-col gap-4 md:gap-8"
    >
      {[...items, ...items].map((img, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 0.98 }}
          className="relative aspect-square w-full rounded-none overflow-hidden cursor-pointer shadow-xl border-2 md:border-[6px] border-white"
          onClick={() => onSelect(img)}
        >
          <img
            src={img.url}
            alt="Gallery"
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default function LuxuryGalleryPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div
        className="bg-white min-h-screen font-medium antialiased text-slate-900 rounded-none overflow-x-hidden"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        {/* --- 1. HERO SECTION (Updated to match Video Page size/style) --- */}
        <section className="relative h-[72vh] flex items-center justify-center bg-[#0a1a10] overflow-hidden pt-20">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920"
              className="w-full h-full object-cover scale-105"
              alt="Hero Background"
            />
            {/* Symmetrical Gradient for centering text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a10]/60 via-transparent to-[#0a1a10]/60" />
          </div>

          <div className="relative z-10 px-6 text-center text-white max-w-5xl">
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 mb-8 text-[10px] md:text-xs font-bold tracking-[0.2em] opacity-80"
            >
              <Home size={14} /><span className="text-white"> Home</span> 
              <ChevronRight size={12} /> 
             
              <span className="text-emerald-400">Gallery</span>
            </motion.nav>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-bold tracking-tighter leading-none  mb-8"
            >
              Our Gallery
            </motion.h1>

            <div className="h-1 w-20 bg-[#22c55e] mx-auto mb-8" />
          </div>
        </section>

        {/* --- 2. PHOTO MARQUEE SECTION --- */}
        <section className="py-24 max-w-7xl mx-auto px-4 md:px-6 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 border-b border-slate-100 pb-12 gap-6 text-center md:text-left">
            <div>
              <p className="text-[#22C55E] text-[10px] font-bold tracking-[0.3em]  mb-4">Visual Journey</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter  text-slate-900 leading-none">Photo <br className="hidden md:block"/> Collection</h2>
            </div>
            <div className="max-w-xs text-slate-400 text-[10px] md:text-xs tracking-widest leading-loose  md:text-right">
                Explore the textures, landscapes, and architectural details that define Mangal Realty.
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12">
            <MarqueeColumn items={galleryPhotos} onSelect={setSelectedItem} />
            <MarqueeColumn
              items={galleryPhotos}
              reverse={true}
              onSelect={setSelectedItem}
            />
            <div className="hidden md:block">
              <MarqueeColumn items={galleryPhotos} onSelect={setSelectedItem} />
            </div>
          </div>
        </section>

        {/* --- 3. LIGHTBOX MODAL --- */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a1a10]/95 backdrop-blur-md p-4"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-none z-10"
              >
                <X size={32} />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full max-w-6xl aspect-auto max-h-[85vh] rounded-none overflow-hidden shadow-2xl border border-white/10 bg-black"
              >
                <img
                  src={selectedItem.url}
                  className="w-full h-full object-contain"
                  alt="Gallery Full View"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}