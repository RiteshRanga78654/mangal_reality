'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Eye, Leaf, Shield, Sparkles, Trees, Wind, Droplets, Home, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export default function VisionMission() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const brandGreen = "#15803d";

  return (
    <main
      ref={containerRef}
      className="bg-white text-slate-900 min-h-screen font-sans"
    >

      {/* 1. HERO SECTION - 80VH WHITE THEME */}
      <section className="relative h-[72vh] flex items-center justify-center overflow-hidden bg-slate-50">
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 0.4], [0, 100]) }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"
            alt="Nature"
            className="w-full h-80vh  "
          />
          {/* Subtle white gradient for text clarity */}
          <div className="absolute inset-0 from-white/20 via-transparent to-white" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <nav className="flex items-center justify-center gap-2 mb-8 text-[10px] md:text-xs font-bold tracking-[0.2em]  text-white">
            <a href="/" className="hover:text-emerald-700 flex items-center gap-1 transition-colors">
              <Home size={12} /> Home
            </a>
            <ChevronRight size={12} className="opacity-40" />
            <span className="text-[#22c55e]">About Us</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8"
          >
            Vision & Mission
          </motion.h1>
           <div className="h-1 w-20 bg-[#22c55e] mx-auto mb-8" />
        </div>
      </section>

      {/* 2. VISION & MISSION - CLEAN CARDS */}

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {[
            {
              title: "Our Vision",
              icon: <Eye size={36} />,
              text: "To transform communities where every family thrives, where children grow surrounded by nature's healing embrace and spaces that inspire connection, cultivate wellness, and create legacies of joy.",
              accent: "01"
            },
            {
              title: "Our Mission",
              icon: <Target size={36} />,
              text: "To deliver family-centered developments that integrate experience like holistic wellness daily that prioritizes health, fosters joyful moments, and leaves the earth better than we found it.",
              accent: "02"
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative p-10 md:p-16 rounded-2xl bg-slate-50 border border-slate-200 group hover:shadow-xl transition-all duration-500"
            >
              <div className="mb-8 text-emerald-600">{card.icon}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{card.title}</h2>
              <p className="text-lg leading-relaxed text-black ">
                "{card.text}"
              </p>
              <div className="absolute top-10 right-10 text-6xl font-black text-slate-100 select-none group-hover:text-emerald-50 transition-colors">
                {card.accent}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CORE VALUES - GRID ON WHITE */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-4">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 -mt-20">Non-Negotiables</h2>
              <p className="text-emerald-700 tracking-[0.2em] text-[10px] md:text-xs font-bold ">The Foundation of Mangal Realty</p>
            </div>
            <div className="hidden lg:block h-px bg-slate-200 grow mx-12 mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Leaf />, title: "Holistic Family Wellness", desc: "Health, happiness, and harmony aren't much to ask, they're basic. Family health is paramount." },
              { icon: <Shield />, title: "Safe Heaven", desc: "Protected havens where families feel Secure, nurturing environments and peace of mind is built into every corner." },
              { icon: <Sparkles />, title: "Mindful Architecture", desc: "Spaces that honor both nature and human needs. Refined living that elevates the soul." },
              { icon: <Trees />, title: "Authentic Nature", desc: "Leading with sustainability and Architecture that breathes with the land that heal." },
              { icon: <Wind />, title: "Living Legacy", desc: "Environmental leadership through action & Elevated living rooted in values." },
              { icon: <Droplets />, title: "Luxury with Purpose", desc: "Building lasting legacies. Creating homes with integrity, responsibility, and vision." }
            ].map((val, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-emerald-50 flex items-center justify-center mb-8 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{val.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE PROMISE - CLEAN TEXT REVEAL */}

      <section className="py-20 flex items-center justify-center text-center px-6 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <p className="text-3xl md:text-5xl font-bold leading-tight text-slate-900 mb-10 tracking-tighter">
            "We build legacies that don't <br className="hidden md:block" /> cost the <span className="text-emerald-600">Earth</span>."
          </p>
          <div className="flex items-center justify-center gap-4 text-slate-400 tracking-[0.3em] text-[10px] font-bold ">
            <div className="h-px w-10 bg-slate-200" />
            Established 2026 — Mangal Realty 
            <div className="h-px w-10 bg-slate-200" />
          </div>
        </motion.div>
      </section>
    </main>
  );
}