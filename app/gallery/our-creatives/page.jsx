"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, User } from "lucide-react";

const CREATIVES = [
  { id: "01", name: "Arjun Mehta", role: "Principal Architect", img: "/assets/images/INFOGRAPHIC 22.webp" },
  { id: "02", name: "Sara Khan", role: "Interior Stylist", img: "/assets/images/INFOGRAPHIC 23.webp" },
  { id: "03", name: "Vikram Raj", role: "3D Visualizer", img: "/assets/images/INFOGRAPHIC 22.webp" },
  { id: "04", name: "Ananya Iyer", role: "Urban Planner", img: "/assets/images/INFOGRAPHIC 23.webp" },
];

export default function ProfessionalResponsiveGallery() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <p className="text-[#22c55e] text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Our Studio</p>
          <h2 className="text-4xl md:text-6xl font-serif text-[#0a1a10] tracking-tight">The Creatives</h2>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* List Section: Stacks on Mobile, 5 Cols on Desktop */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col gap-4">
            {CREATIVES.map((person, index) => (
              <motion.div
                key={person.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)} // Better for touch devices
                className={`relative p-6 md:p-8 rounded-2xl cursor-pointer transition-all duration-500 border ${
                  hoveredIndex === index 
                  ? 'bg-[#0a1a10] border-[#0a1a10] text-white shadow-xl' 
                  : 'bg-transparent border-gray-100 text-[#0a1a10] hover:border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${
                      hoveredIndex === index ? 'text-[#22c55e]' : 'text-gray-300'
                    }`}>
                      {person.id}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif mt-1">{person.name}</h3>
                    <p className={`text-xs mt-1 transition-colors ${
                      hoveredIndex === index ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {person.role}
                    </p>
                  </div>
                  
                  {/* Small circle indicator */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    hoveredIndex === index ? 'bg-[#22c55e] text-[#0a1a10]' : 'bg-gray-50 text-gray-300'
                  }`}>
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Mobile-Only Image: Shown inside the card when active on small screens */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="lg:hidden overflow-hidden"
                    >
                      <img 
                        src={person.img} 
                        alt={person.name} 
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Desktop Preview: Hidden on Mobile, Fixed on Desktop */}
          <div className="hidden lg:block lg:col-span-7 sticky top-32 h-[600px]">
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden bg-gray-50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={CREATIVES[hoveredIndex].img} 
                    alt={CREATIVES[hoveredIndex].name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a10]/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-12 left-12 text-white">
                    <h4 className="text-4xl font-serif mb-2">{CREATIVES[hoveredIndex].name}</h4>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-[1px] bg-[#22c55e]" />
                      <p className="text-[#22c55e] text-xs font-bold uppercase tracking-widest">
                        {CREATIVES[hoveredIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}