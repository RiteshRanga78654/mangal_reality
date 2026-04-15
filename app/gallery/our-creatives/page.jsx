"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  Play,
  Layers,
  ArrowUpRight,
  Monitor,
  Box,
  FileText,
  ChevronRight,
  X,
  Home
} from 'lucide-react';
import ContactPopup from "@/app/pop-form/page"; // ← ADDED

const brandGreen = "#22C55E";
const MangalButton = ({ text, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`group relative cursor-pointer px-10 py-5 font-bold tracking-[0.1em] text-[10px] md:text-xs overflow-hidden  transition-all duration-300 w-full sm:w-auto ${className}`}
  >
    <span className="relative z-10 flex items-center justify-center text-[#22C55E] group-hover:text-white transition-colors duration-300 gap-3">
      {text} <ArrowUpRight size={16} />
    </span>
    <div className="absolute inset-1 bg-[#22C55E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
    <div className="absolute inset-1 border border-[#22C55E]"></div>
  </button>
);
const creativePortfolio = [
  {
    id: 1,
    image: "/assets/images/creative-1.webp",
  },
  {
    id: 2,
    image: "/assets/images/creative-2.webp",
  },
  {
    id: 3,
    image: "/assets/images/creative-3.webp",
  }
];

export default function OurCreativesFormal() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // ← ADDED

  return (
    <main
      className="bg-white font-medium overflow-hidden text-left"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >

      {/* 1. INSTITUTIONAL HERO BANNER */}
      <section className="relative h-[60vh] md:h-[82vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
          alt="Creative Banner"
          className="absolute z-10 w-full h-full object-cover opacity-40"
        />
        <div className="absolute "></div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className=""
          >
            <div className="relative z-10 text-center text-white px-6">
              <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-sm font-bold tracking-[0.2em] ">
                <a href="/" className="hover:text-green-400 flex items-center gap-1 transition-colors">
                  <Home size={12} /> Home
                </a>
                <ChevronRight size={12} className="opacity-50" />
                <span className="text-[#22c55e]">Gallery</span>
              </nav>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter  leading-none">
                Our Creatives
              </h2>
              <div className="h-1 w-20 bg-[#22c55e] mx-auto my-8" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PORTFOLIO GRID */}
      <section className="relative z-30 -mt-16 py-16 lg:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 lg:mb-32">
            {creativePortfolio.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8 shadow-xl bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-105"
                  />
                  {item.isVideo && (
                    <div className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                      <Play size={16} className="text-green-600 ml-0.5" fill="currentColor" />
                    </div>
                  )}
                </div>

                <p className="text-[10px] font-bold  tracking-[0.3em] text-green-500 mb-4">
                  {item.category}
                </p>

                <h3 className="text-2xl font-bold text-black  tracking-tight mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FORMAL FOOTER CTA */}
      <section className="py-16 lg:py-24 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-7xl font-bold  tracking-tighter mb-8 leading-tight">
            Request Project <br /> <span style={{ color: brandGreen }}>Specifications</span>
          </h2>
          <div className="flex justify-center mt-12">
            {/* ↓ onClick opens the popup */}
            <MangalButton
              text="Access Media Portal"
              onClick={() => setIsPopupOpen(true)}
            />
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all z-[110]"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-[4/3] md:aspect-video rounded-lg overflow-hidden shadow-2xl bg-stone-900"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-left">
                <h4 className="text-white text-xl font-bold  tracking-tighter">{selectedImage.title}</h4>
                <p className="text-stone-400 text-sm mt-1  tracking-widest">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTACT POPUP ← ADDED */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

    </main>
  );
}