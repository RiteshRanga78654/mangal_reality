'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Eye, Leaf, Shield, Sparkles, Trees, Wind, Droplets } from 'lucide-react';
import { useRef } from 'react';

export default function VisionMission() {
  const containerRef = useRef(null);
  
  // Parallax effect for the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const ecoFeatures = [
    { icon: <Trees size={32} />, title: "Reforestation", desc: "10 trees planted for every home sold." },
    { icon: <Wind size={32} />, title: "Clean Air", desc: "Medical-grade air filtration in every room." },
    { icon: <Droplets size={32} />, title: "Water Saving", desc: "100% greywater recycling systems." }
  ];

  return (
    <main ref={containerRef} className="bg-[#0A1A10] text-[#E0E7E0] min-h-screen">
      
      {/* 1. RESPONSIVE HERO SECTION */}
      <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 0.4], [0, 150]) }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80" 
            alt="Deep Forest" 
            className="w-full h-full object-cover opacity-40 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A10]/10 via-transparent to-[#0A1A10]" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-4"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#4ADE80] uppercase text-[10px] md:text-xs font-bold tracking-[0.5em] block mb-4"
          >
            The Soul of Our Work
          </motion.span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl  text-white mb-8">Our Essence</h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-[#4ADE80] mx-auto"
          />
        </motion.div>
      </section>

      {/* 2. VISION & MISSION - RESPONSIVE CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {[
            { 
              title: "Our Vision", 
              icon: <Eye size={40} />, 
              text: "To redefine the luxury landscape by creating sanctuaries that celebrate the delicate balance of high-end living and deep ecological respect.",
              accent: "01"
            },
            { 
              title: "Our Mission", 
              icon: <Target size={40} />, 
              text: "To pioneer regenerative architecture, ensuring every Mangal development leaves the earth better than we found it through radical transparency.",
              accent: "02"
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="relative p-8 md:p-14 rounded-3xl bg-[#122619]/40 border border-white/10 backdrop-blur-md group"
            >
              <div className="mb-8 text-[#4ADE80]">{card.icon}</div>
              <h2 className="text-3xl md:text-4xl  text-white mb-6">{card.title}</h2>
              <p className="text-base md:text-lg leading-relaxed text-[#B0C4B0] font-light italic">
                "{card.text}"
              </p>
              <div className="absolute top-8 right-8 text-5xl opacity-[0.05] select-none">
                {card.accent}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CORE VALUES - FULLY ALIGNED GRID */}
      <section className="py-20 lg:py-32 bg-[#08140C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl  text-white mb-2">Non-Negotiables</h2>
              <p className="text-[#4ADE80] tracking-[0.2em] text-[10px] md:text-xs uppercase font-bold">The Foundation of Mangal Realty</p>
            </div>
            <div className="hidden lg:block h-px bg-white/10 flex-grow mx-8 mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              { icon: <Leaf />, title: "Regenerative", desc: "We actively restore natural habitats through our building footprint." },
              { icon: <Shield />, title: "Total Trust", desc: "Every stone and promise is etched in uncompromising honesty." },
              { icon: <Sparkles />, title: "Curated Craft", desc: "Architecture that breathes. We prioritize artisanal precision." }
            ].map((val, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="p-8 lg:p-12 bg-[#0A1A10] border border-white/5 rounded-2xl transition-all hover:border-[#4ADE80]/30"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8 text-[#4ADE80]">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-4 tracking-tighter">{val.title}</h3>
                <p className="text-[#B0C4B0] text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ECO-STATISTICS SECTION */}
      <section className="py-20 border-y border-white/5 bg-[#0A1A10]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 text-center">
          {ecoFeatures.map((feature, i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              <div className="text-[#4ADE80] mb-2">{feature.icon}</div>
              <h4 className="text-white text-xl">{feature.title}</h4>
              <p className="text-sm text-[#B0C4B0] max-w-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE PROMISE - ALIGNED TEXT REVEAL */}
      <section className="py-40 flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl"
        >
          <p className="text-3xl md:text-5xl leading-tight text-white mb-8">
            "We build legacies that don't cost the <span className="text-[#4ADE80]">Earth</span>."
          </p>
          <div className="text-white/30  tracking-[0.5em] text-[10px]">
            Established 2026 — Mangal Realty Group
          </div>
        </motion.div>
      </section>
    </main>
  );
}