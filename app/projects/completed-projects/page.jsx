"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  ChevronRight,
  MapPin,
  Maximize,
  Layout,
  ArrowRight,
  Filter,
} from "lucide-react";

const PROJECTS = [
{
    id: 1,
    slug: "eco-vista-residences",
    title: "Eco-Vista Residences",
    location: "Visakhapatnam, AP",
    status: "Ongoing",
    area: "2400 - 4500 Sq.Ft",
    type: "Premium Villa Plots",
    description: "Eco-Vista represents a new era of sustainable luxury. Nestled in a prime location, it offers wide roads, lush green spaces, and state-of-the-art security for your dream home.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200",
    features: ["Vastu Compliant", "Solar Lighting", "24/7 Security", "Parks & Play Areas"]
  },
  {
    id: 2,
    title: "Green-Leaf County",
    location: "Hyderabad, TS",
    status: "Completed",
    area: "1800 - 3200 Sq.Ft",
    type: "Sustainable Living",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800",
    category: "Investment",
  },
  {
    id: 3,
    title: "The Corporate Square",
    location: "Visakhapatnam, AP",
    status: "Upcoming",
    area: "5000+ Sq.Ft",
    type: "Commercial Hub",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800",
    category: "Commercial",
  },
  {
    id: 1,
    title: "Eco-Vista Residences",
    location: "Visakhapatnam, AP",
    status: "Ongoing",
    area: "2400 - 4500 Sq.Ft",
    type: "Premium Villa Plots",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800",
    category: "Residential",
  },
  {
    id: 2,
    title: "Green-Leaf County",
    location: "Hyderabad, TS",
    status: "Completed",
    area: "1800 - 3200 Sq.Ft",
    type: "Sustainable Living",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800",
    category: "Investment",
  },
  {
    id: 3,
    title: "The Corporate Square",
    location: "Visakhapatnam, AP",
    status: "Upcoming",
    area: "5000+ Sq.Ft",
    type: "Commercial Hub",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800",
    category: "Commercial",
  },
];

const CATEGORIES = ["All", "Residential", "Commercial", "Investment"];

export default function ProjectPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <>
      <div className="bg-white">
        {/* Hero Section with Dark Theme #0a1a10 Overlay */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920"
              className="w-full h-full object-cover"
              alt="Hero Background"
            />
            {/* Custom Dark Overlay */}
            <div className="absolute inset-0 "></div>
          </div>

          <div className="relative z-10 text-center text-white px-6">
            <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-sm font-medium tracking-[0.2em] uppercase">
              <a
                href="/"
                className="hover:text-green-400 flex items-center gap-1 transition-colors"
              >
                <Home size={12} /> Home
              </a>
              <ChevronRight size={12} className="opacity-50" />
              <a
                href="/"
                className="hover:text-green-400 flex items-center gap-1 transition-colors"
              >
                 Projects
              </a>
              <ChevronRight size={12} className="opacity-50" />
              <span className="text-green-500">Completed Projects</span>
            </nav>
            <h2 className="text-4xl md:text-8xl tracking-tight"style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
             Completed Projects
            </h2>
          </div>
        </section>

        {/* --- FILTER SECTION --- */}
        <section className="py-12 border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-40">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 text-[#0a1a10]">
              <Filter size={18} className="text-[#22c55e]" />
              <span className="font-bold text-sm uppercase tracking-widest">
                Filter By
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-xs font-bold uppercase tracking-widest pb-2 transition-all relative ${
                    filter === cat
                      ? "text-[#22c55e]"
                      : "text-gray-400 hover:text-[#0a1a10]"
                  }`}
                >
                  {cat}
                  {filter === cat && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#22c55e]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROJECTS GRID --- */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                    <a href={`/projects/completed-projects/${item.slug}`}>
  

                  <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-[#22c55e] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                        {item.status}
                      </span>
                    </div>

                    {/* Overlay Info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a10] via-[#0a1a10]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 p-8 w-full">
                        <p className="text-green-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                          {item.type}
                        </p>
                        <h3 className="text-white text-2xl md:text-3xl font-serif mb-4 leading-tight">
                          {item.title}
                        </h3>

                        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 mb-6">
                          <div className="flex items-center gap-2 text-white/80">
                            <MapPin size={14} className="text-green-400" />
                            <span className="text-xs">{item.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/80">
                            <Maximize size={14} className="text-green-400" />
                            <span className="text-xs">{item.area}</span>
                          </div>
                        </div>

                        <button className="flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-widest group/btn">
                          View Project Details
                          <ArrowRight
                            size={14}
                            className="group-hover/btn:translate-x-2 transition-transform text-green-400"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        {/* <section className="bg-gray-50 py-24 px-6 border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <Layout className="w-12 h-12 text-[#22c55e] mx-auto mb-6 opacity-50" />
            <h2 className="text-3xl md:text-5xl font-serif text-[#0a1a10] mb-8">
              Looking for a custom property investment plan?
            </h2>
            <button className="bg-[#22c55e] hover:bg-[#1ca850] text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-xl active:scale-95">
              Consult Our Experts
            </button>
          </div>
        </section> */}
      </div>
    </>
  );
}
