"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Play, 
  Layers, 
  ArrowUpRight, 
  Monitor, 
  Box, 
  FileText,
  ChevronRight
} from 'lucide-react';

const brandGreen = "#22C55E";

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
  return (
    <main className="bg-white font-sans overflow-hidden text-left">
      
      {/* 1. INSTITUTIONAL HERO BANNER */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
          alt="Creative Banner"
          className="absolute z-10 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-black via-transparent to-black/60"></div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mt-40"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-green-500 font-bold mb-6 block">Visual Assets & Media</span>
            <h1 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85]">
              Our <br />
              <span className="text-stone-400">Creatives</span>
            </h1>
            <div className="w-24 h-1.5 bg-green-500 mx-auto mt-10"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. PORTFOLIO GRID - FORMAL SYMMETRY */}
      <section className="relative z-30 -mt-16 py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {creativePortfolio.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
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
                <h3 className="text-2xl font-bold text-black uppercase tracking-tight mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-400 group-hover:text-black transition-colors">
                  View Detail <ArrowUpRight size={14} style={{ color: brandGreen }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS SECTION (FORMAL) */}
      <section className="py-24 bg-stone-50 border-y border-stone-200  ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-black mb-8 leading-none">
                Technical <br /> <span className="text-stone-400">Precision</span>
              </h2>
              <p className="text-stone-500 text-lg font-light mb-10 leading-relaxed">
                Our creative department utilizes advanced BIM (Building Information Modeling) and real-time Ray Tracing engines to ensure absolute fidelity between conceptual design and final construction.
              </p>
              <div className="grid grid-cols-2 gap-6">
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
            <div className="relative p-10 bg-white border border-stone-200 shadow-2xl">
                <div className="absolute top-0 right-0 w-2 h-full bg-green-500"></div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Resource Center</h4>
                <p className="text-xs text-stone-400 mb-8 uppercase tracking-widest">Access our formal asset library for corporate usage.</p>
                <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border-b border-stone-100 hover:bg-stone-50 cursor-pointer transition-colors group">
                        <div className="flex items-center gap-4">
                            <FileText size={20} className="text-stone-300 group-hover:text-green-500" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Brand Style Guide 2026</span>
                        </div>
                        <ChevronRight size={16} className="text-stone-300" />
                    </div>
                    <div className="flex justify-between items-center p-4 border-b border-stone-100 hover:bg-stone-50 cursor-pointer transition-colors group">
                        <div className="flex items-center gap-4">
                            <Box size={20} className="text-stone-300 group-hover:text-green-500" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">High-Res Render Archive</span>
                        </div>
                        <ChevronRight size={16} className="text-stone-300" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FORMAL FOOTER CTA */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight">
              Request Project <br /> <span style={{ color: brandGreen }}>Specifications</span>
            </h2>
            <p className="text-stone-400 mb-12 text-sm uppercase tracking-[0.2em] font-light">
              Official creative and technical dossiers are available for institutional partners.
            </p>
            <button className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-green-600 hover:text-white transition-all">
                Access Media Portal
            </button>
        </div>
      </section>

    </main>
  );
}