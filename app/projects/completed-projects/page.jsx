"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin, Maximize2, ShieldCheck, Leaf, Map, Zap, Gem, BarChart3, Home, ChevronRight
} from 'lucide-react';

// --- 1. ANIMATED COUNTER COMPONENT ---
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

// --- 2. FIXED MANGAL BUTTON COMPONENT ---
const MangalButton = ({ text, href }) => (
  <Link 
    href={href} 
    className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden transition-all duration-500 ease-in-out border border-[#22c55e]"
  >
    {/* This layer handles the background slide ONLY on button hover */}
    <span className="absolute inset-0 bg-[#22c55e] transition-transform duration-500 ease-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
    
    {/* This layer handles the text color change */}
    <span className="relative z-10 text-[#22c55e] font-bold tracking-widest text-xs transition-colors duration-500 group-hover:text-white ">
      {text}
    </span>
  </Link>
);


// --- 3. MAIN COMPLETED PROJECTS PAGE ---
const CompletedProjectsPage = () => {
  const projects = [
    {
      title: "The Nature Valley (Phase 1)",
      location: "Pisini",
      area: "17 Acres",
      tagline: "Experience the Luxurious Green Side of Life.",
      description: "The Nature Valley, a testament to our vision of harmonious living nestled in the serene landscape of Bhogapuram.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000",
      link: "/the-nature-valley-phase1"
    },
    {
      title: "The Smart City",
      location: "Dakamari",
      area: "3 Acres",
      tagline: "Intelligence Meets Luxury in the Heart of Dakamari.",
      description: "The Smart City located in the vibrant area of Dakamari represents the perfect fusion of modern technology & comfortable family living.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
      link: "/the-smart-city"
    },
    {
      title: "The Green Meadows",
      location: "Jonnada",
      area: "5 Acres",
      tagline: "Expansive Green Living Across Five Acres of Excellence.",
      description: "The Green Meadows a 5-acre completed project that exemplifies our dedication to creating spacious, nature-integrated living environments.",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1000",
      link: "/the-green-meadows"
    }
  ];

  const features = [
    { title: "Sustainable Design", icon: <Leaf size={32} />, desc: "Eco-friendly infrastructure with rainwater harvesting and native plantation." },
    { title: "Prime Connectivity", icon: <Map size={32} />, desc: "Strategically located near upcoming Vizag growth hubs and expressways." },
    { title: "VMRDA Approved", icon: <ShieldCheck size={32} />, desc: "100% clear titles, RERA registered, and hassle-free legal documentation." },
    { title: "Modern Amenities", icon: <Zap size={32} />, desc: "Gated communities with underground utilities, parks, and 24/7 security." }
  ];

  return (
    <div
      className="bg-[#f8fafc] min-h-screen font-medium antialiased text-slate-900 overflow-x-hidden"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >

      {/* HERO SECTION */}
      <section className="relative h-[75vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Mangal Realty Banner"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative z-10 text-center text-white px-6">
              <nav className="flex items-center justify-center gap-2 mb-8 text-[10px] md:text-sm font-bold tracking-[0.2em] ">
                <Link href="/" className="hover:text-green-400 flex items-center gap-1 transition-colors">
                  <Home size={12} /> Home
                </Link>
                <ChevronRight size={12} className="opacity-50" />
                <span className="text-[#22c55e]">Completed Projects</span>
              </nav>
              <h1 className="text-4xl md:text-6xl mb-8 font-bold tracking-tighter leading-[1.1]">
                Completed Projects
              </h1>
              <div className="h-1 w-20 bg-[#22c55e] mx-auto mb-8" />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-40 md:h-56 bg-[#f8fafc]"></div>

      {/* PROJECTS GRID */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto mt-[-180px]">
        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={index}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group/img">
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[450px] md:h-[600px] object-cover transform group-hover/img:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="absolute top-6 left-6 z-20 bg-white px-5 py-2 rounded-full shadow-md">
                    <p className="text-[#22C55E] font-bold text-xs tracking-widest "> Completed </p>
                  </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-[0.9]">
                    {project.title}
                    </h2>
                    <p className="text-[#22C55E] text-lg font-bold tracking-wide">"{project.tagline}"</p>
                </div>
                
                <p className="text-slate-600 text-lg leading-relaxed font-normal">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-50 rounded-xl text-[#22C55E]"><MapPin size={24} /></div>
                    <div>
                        <p className="text-[10px] text-gray-400 font-black  tracking-widest mb-1">Location</p>
                        <p className="font-bold text-slate-800 text-lg">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-50 rounded-xl text-[#22C55E]"><Maximize2 size={24} /></div>
                    <div>
                        <p className="text-[10px] text-gray-400 font-black  tracking-widest mb-1">Total Area</p>
                        <p className="font-bold text-slate-800 text-lg">{project.area}</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                    <MangalButton text="Explore Project Details" href={project.link} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY INVEST SECTION */}
      <section className="bg-[#0A1A10] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-[#22C55E] font-black tracking-[0.2em] text-xs mb-3 ">Investment Excellence</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Why Choose <span className="text-[#22C55E]">Mangal Realty</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-gradient-to-br from-[#22C55E] to-emerald-900 p-8 md:p-10 rounded-[2rem] flex flex-col relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                    <Gem size={24} className="text-white" />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">Strategic Appreciation</h3>
                <p className="text-white/80 max-w-md text-base leading-snug">Every project is selected for high growth in the North Vizag corridor, ensuring maximum ROI.</p>
              </div>
              <BarChart3 size={200} className="absolute -bottom-5 -right-5 text-white/5" />
            </div>

            <div className="md:col-span-4 bg-[#1a3324] border border-white/5 p-8 md:p-10 rounded-[2rem] flex flex-col justify-center text-left">
              <div className="w-12 h-12 bg-[#22C55E]/20 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} className="text-[#22C55E]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Legally Ironclad</h4>
              <p className="text-gray-400 text-sm leading-relaxed">100% VMRDA & LP approvals with verified clear titles and RERA compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE MANGAL STANDARD FEATURES */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-none">
                The <span className="text-[#22C55E]">Mangal</span> Realty
            </h2>
            <div className="w-32 h-2 bg-[#22C55E] mx-auto mt-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, idx) => (
                <div 
                key={idx} 
                className="p-10 border border-gray-100 rounded-[2.5rem] transition-all duration-700 group text-left hover:bg-[#22C55E] hover:shadow-[0_40px_80px_-15px_rgba(34,197,94,0.3)] hover:border-[#22C55E] cursor-pointer"
                >
                <div className="text-[#22C55E] mb-8 transform group-hover:scale-110 group-hover:text-white transition-all duration-500">
                    {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors duration-300">
                    {item.title}
                </h3>

                <p className="text-gray-500 text-base leading-relaxed group-hover:text-emerald-50 transition-colors duration-300">
                    {item.desc}
                </p>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f8fafc] py-32 px-6 text-center border-t border-gray-200">
        <motion.div whileInView={{ opacity: [0, 1], y: [20, 0] }} transition={{ duration: 0.8 }}>
          <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-12 tracking-tighter leading-[0.9]">
            Stay Updated for <br /> the Next Big Thing
          </h3>
          <MangalButton text="Get Early Access" href="/contact-us" />
        </motion.div>
      </section>

    </div>
  );
};

export default CompletedProjectsPage;