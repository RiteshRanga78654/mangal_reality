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

const brandGreen = "#22C55E";

// --- MANGAL SIGNATURE BUTTON COMPONENT ---
const MangalButton = ({ text, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`group relative cursor-pointer px-10 py-5 font-bold tracking-[0.1em] text-[10px] md:text-xs overflow-hidden  transition-all duration-300 w-full sm:w-auto ${className}`}
  >
    {/* 1. Added group-hover:text-white and changed base color to green */}
    <span className="relative z-10 flex items-center justify-center text-[#22C55E] group-hover:text-white transition-colors duration-300 gap-3">
      {text} <ArrowUpRight size={16} />
    </span>

    {/* 2. Animated Fill Background */}
    <div className="absolute inset-1 bg-[#22C55E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
    
    {/* 3. Persistent Inset Border */}
    <div className="absolute inset-1 border border-[#22C55E]"></div>
  </button>
);
const creativePortfolio = [
  {
    id: 1,
    category: "Architectural Rendering",
    title: "Signature Skyline Phase I",
    description: "High-fidelity structural visualization showcasing the integration of glass-active facades and urban greenery.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    category: "Digital Experience",
    title: "The Genesis Virtual Tour",
    description: "An immersive 360-degree walkthrough experience designed for international stakeholders and NRI investors.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    isVideo: true
  },
  {
    id: 3,
    category: "Corporate Campaign",
    title: "Trust in Every Brick",
    description: "National brand campaign highlighting Mangal Realty's three decades of transparency and timely delivery.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
  }
];

export default function OurCreativesFormal() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main 
      className="bg-white font-medium overflow-hidden text-left"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      
      {/* 1. INSTITUTIONAL HERO BANNER */}
      <section className="relative h-[60vh] md:h-[78vh] w-full flex items-center justify-center overflow-hidden bg-black">
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
            {/* <span className="text-[10px] uppercase tracking-[0.5em] text-green-500 font-bold mb-6 block">Visual Assets & Media</span> */}
            {/* Standardized Heading: text-4xl to 7xl */}
            <div className="relative z-10 text-center text-white px-6">
            <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-sm font-bold tracking-[0.2em] ">
              <a href="/" className="hover:text-green-400 flex items-center gap-1 transition-colors">
                <Home size={12} /> Home
              </a>
              <ChevronRight size={12} className="opacity-50" />
              <span className="text-white">Gallery</span>
            </nav>
            {/* Standardized Heading: 4xl to 7xl */}
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
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                  />
                  {item.isVideo && (
                    <div className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                      <Play size={16} className="text-green-600 ml-0.5" fill="currentColor" />
                    </div>
                  )}
                </div>
                
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-500 mb-4">
                  {item.category}
                </p>
                <h3 className="text-2xl font-bold text-black  tracking-tight mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
                
                {/* TRIGGER BUTTON: Opens Lightbox */}
                <MangalButton 
                  text="View Details" 
                  onClick={() => setSelectedImage(item)} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS */}
      {/* <section className="py-16 lg:py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              
              <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-black mb-8 leading-none">
                Technical <br /> <span className="text-stone-400">Precision</span>
              </h2>
              <p className="text-stone-500 text-lg mb-10  leading-relaxed">
                Our creative department utilizes advanced BIM and real-time Ray Tracing engines to ensure absolute fidelity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                    { icon: Monitor, label: "4K Rendering" },
                    { icon: Box, label: "VR Integration" },
                    { icon: Camera, label: "Aerial Photogrammetry" },
                    { icon: Layers, label: "BIM Modeling" }
                ].map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-stone-200 rounded-sm">
                        <spec.icon size={18} style={{ color: brandGreen }} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-700">{spec.label}</span>
                    </div>
                ))}
              </div>
            </div>
            <div className="relative p-8 lg:p-10 bg-white border border-stone-200 shadow-2xl text-left">
                <div className="absolute top-0 right-0 w-2 h-full bg-green-500"></div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-black">Resource Center</h4>
                <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border-b border-stone-100 hover:bg-stone-50 cursor-pointer transition-colors group">
                        <div className="flex items-center gap-4">
                            <FileText size={20} className="text-stone-300 group-hover:text-green-500" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black">Brand Style Guide 2026</span>
                        </div>
                        <ChevronRight size={16} className="text-stone-300" />
                    </div>
                    <div className="flex justify-between items-center p-4 border-b border-stone-100 hover:bg-stone-50 cursor-pointer transition-colors group">
                        <div className="flex items-center gap-4">
                            <Box size={20} className="text-stone-300 group-hover:text-green-500" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black">High-Res Render Archive</span>
                        </div>
                        <ChevronRight size={16} className="text-stone-300" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 4. FORMAL FOOTER CTA */}
      <section className="py-16 lg:py-24 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-tight">
              Request Project <br /> <span style={{ color: brandGreen }}>Specifications</span>
            </h2>
            <div className="flex justify-center mt-12">
               <MangalButton text="Access Media Portal" />
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
                  <h4 className="text-white text-xl font-bold uppercase tracking-tighter">{selectedImage.title}</h4>
                  <p className="text-stone-400 text-sm mt-1 uppercase tracking-widest">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}