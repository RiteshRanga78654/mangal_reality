"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin, Maximize2, ShieldCheck, Leaf, Map, Zap, Gem, BarChart3
} from 'lucide-react';

// --- 1. ANIMATED COUNTER COMPONENT ---
// Ensures numbers count up properly when scrolled into view
const AnimatedCounter = ({ value, duration = 1500 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = parseInt(value.replace(/\D/g, ''));
          const totalFrames = Math.round(duration / 16);
          const increment = end / totalFrames;
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setDisplayValue(end);
              clearInterval(timer);
            } else {
              setDisplayValue(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={nodeRef}>
      {displayValue}{value.includes('+') ? '+' : value.includes('%') ? '%' : ''}
    </span>
  );
};

// --- 2. UNIFIED MANGAL BUTTON COMPONENT ---
// Implements the specific filling hover effect requested
const MangalButton = ({ text, href }) => (
  <Link href={href} className="group relative cursor-pointer px-12 py-5 text-black font-bold uppercase tracking-[0.2em] text-xs overflow-hidden inline-block text-center transition-colors duration-500">
    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
      {text}
    </span>
    {/* Filling background effect */}
    <div className="absolute inset-0 bg-[#22C55E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-0"></div>
    {/* Constant border */}
    <div className="absolute inset-0 border border-[#22C55E]"></div>
  </Link>
);

// --- 3. MAIN COMPLETED PROJECTS PAGE ---
const CompletedProjectsPage = () => {
  const projects = [
    {
      title: "The Smart City",
      location: "Dakamari",
      area: "3 Acres",
      tagline: "Intelligence meets luxury in the heart of Dakamari.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
      link: "/the-smart-city" 
    },
    {
      title: "The Jonnada Project",
      location: "Jonnada",
      area: "5 Acres",
      tagline: "Expansive green living across five acres of excellence.",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1000",
      link: "/the-jonnada-project"
    }
  ];

  const features = [
    { title: "Sustainable Design", icon: <Leaf size={32} />, desc: "Eco-friendly infrastructure with rainwater harvesting." },
    { title: "Prime Connectivity", icon: <Map size={32} />, desc: "Strategically located near upcoming Vizag growth hubs." },
    { title: "VMRDA Approved", icon: <ShieldCheck size={32} />, desc: "100% clear titles and hassle-free documentation." },
    { title: "Modern Amenities", icon: <Zap size={32} />, desc: "Gated communities with underground drainage and parks." }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans antialiased text-slate-900 overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[80vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover"
            alt="Mangal Realty Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#f8fafc]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase">
            CRAFTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-emerald-300">LEGACIES</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-8">
            Where architectural vision meets sustainable reality. Explore our portfolio of successfully delivered landmarks.
          </p>
          <MangalButton text="View Projects" href="#projects" />
        </motion.div>

        {/* FLOATING STATS BAR */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] max-w-5xl z-30">
          <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 md:gap-0 md:divide-x md:divide-gray-100">
              <div className="text-center">
                <p className="text-[#22C55E] text-4xl md:text-5xl font-black mb-1">
                  <AnimatedCounter value="02" />
                </p>
                <p className="text-gray-500 text-[10px] md:text-xs uppercase font-bold tracking-widest">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-[#22C55E] text-4xl md:text-5xl font-black mb-1">
                  <AnimatedCounter value="08+" />
                </p>
                <p className="text-gray-500 text-[10px] md:text-xs uppercase font-bold tracking-widest">Acres Developed</p>
              </div>
              <div className="text-center">
                <p className="text-[#22C55E] text-4xl md:text-5xl font-black mb-1">
                  <AnimatedCounter value="100%" />
                </p>
                <p className="text-gray-500 text-[10px] md:text-xs uppercase font-bold tracking-widest">Customer Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPACER FOR OVERLAP */}
      <div className="h-32 md:h-40 bg-[#f8fafc]"></div>

      {/* PROJECTS GRID */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              key={index}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 group`}
            >
              <div className="w-full lg:w-3/5 relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg">
                  <p className="text-[#22C55E] font-black text-xl  uppercase">COMPLETED</p>
                </div>
              </div>

              <div className="w-full lg:w-2/5 space-y-8 text-left">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                  {project.title}
                </h2>
                <p className="text-blacktext-lg leading-relaxed ">"{project.tagline}"</p>
                <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 rounded-lg text-[#22C55E]"><MapPin size={20} /></div>
                    <div><p className="text-[10px] text-black uppercase font-bold">Location</p><p className="font-bold">{project.location}</p></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 rounded-lg text-[#22C55E]"><Maximize2 size={20} /></div>
                    <div><p className="text-[10px] text-black uppercase font-bold">Total Area</p><p className="font-bold">{project.area}</p></div>
                  </div>
                </div>
                {/* Unified Button with project-specific link */}
                <MangalButton text="Explore Project" href={project.link} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY INVEST SECTION */}
      <section className="bg-[#0A1A10] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <h2 className="text-[#22C55E] font-bold tracking-[0.2em]  text-sm mb-4">Investment Excellence</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white  tracking-tighter">Why Choose <span className="text-[#22C55E]">Mangal Realty</span></h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-gradient-to-br from-[#22C55E] to-emerald-800 p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
              <div className="relative z-10 text-left">
                <Gem size={48} className="text-white mb-8" />
                <h3 className="text-3xl md:text-5xl font-black text-white  mb-4">Strategic <br /> Appreciation</h3>
                <p className="text-white max-w-md text-lg opacity-90">Every project is selected for its high growth potential in the North Vizag corridor.</p>
              </div>
              <BarChart3 size={300} className="absolute -bottom-10 -right-10 text-white/5" />
            </div>

            <div className="md:col-span-4 bg-[#22C55E] p-8 rounded-[2.5rem] border border-slate-700 flex flex-col justify-center text-left">
              <ShieldCheck size={40} className="text-[#22C55E] mb-6" />
              <h4 className="text-2xl font-bold text-white mb-4 ">Legally Ironclad</h4>
              <p className="text-white text-sm">100% VMRDA & LP approvals with verified clear titles for every plot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE MANGAL STANDARD FEATURES */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">The <span className="text-[#22C55E]">Mangal</span> Standard</h2>
            <div className="w-20 h-1.5 bg-[#22C55E] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, idx) => (
              <div key={idx} className="p-8 border border-gray-100 rounded-3xl hover:shadow-2xl hover:border-[#22C55E]/30 transition-all duration-300 group text-left">
                <div className="text-[#22C55E] mb-6 transform group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-50 py-24 px-6 text-center border-t border-gray-100">
        <motion.div whileInView={{ scale: [0.95, 1] }} transition={{ duration: 0.5 }}>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-10  tracking-tighter leading-none">Stay Updated <br /> for the Next Big Thing?</h3>
          <MangalButton text="Subscribe Now" href="/subscribe" />
        </motion.div>
      </section>

    </div>
  );
};

export default CompletedProjectsPage;