"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin, Maximize2, ShieldCheck, Leaf, Map, Zap, Home, ChevronRight,
  Target
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

// --- 2. UNIFIED MANGAL BUTTON COMPONENT ---
const MangalButton = ({ text, href }) => {
  const isExternal = href.startsWith('http');

  return (
    <Link 
      href={href} 
      target={isExternal ? "_blank" : "_self"} 
      rel={isExternal ? "noopener noreferrer" : ""}
      className="group relative inline-block cursor-pointer px-10 py-5 text-[#22c55e] hover:text-white font-bold tracking-widest text-xs overflow-hidden transition-all duration-300 rounded-none"
    >
      <span className="relative z-10 transition-colors duration-500">
        {text}
      </span>
      <div className="absolute inset-0 bg-[#22c55e] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
      <div className="absolute inset-0 border border-[#22c55e]"></div>
    </Link>
  );
};

// --- 3. MAIN ONGOING PROJECTS PAGE ---
const OngoingProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "The Nature City",
      tagline: "Experience the harmony of luxury and nature in a sprawling green landscape.",
      location: "Pisini, AP",
      status: "Phase 1: Roads & Plotting",
    
      area: "100 Acres",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200",
      link: "https://the-nature-city.vercel.app/"
    },
    {
      id: 2,
      title: "The Nature Valley Phase-2",
      tagline: "A boutique residential community designed for peace and sustainable living.",
      location: "Pisini, AP",
      status: "Phase 2: Landscaping",
      area: "45 Acres",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200",
      link: "/the-nature-valley-phase2"
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-medium antialiased text-slate-900 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover brightness-50"
            alt="Mangal Realty Banner"
          />
        </div>

       <div className="relative z-20 text-center px-6 max-w-5xl">
                 <motion.div
                   initial={{ opacity: 0, y: 40 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1.2, ease: "easeOut" }}
                 >
                   <div className="relative z-10 text-center text-white px-6 mt-14">
                     <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-sm font-bold tracking-[0.1em] ">
                       <a href="/" className="hover:text-green-400 flex items-center gap-1 transition-colors">
                         <Home size={12} /> Home
                       </a>
                       <ChevronRight size={12} className="opacity-50" />
                       <span className="text-white">Ongoing Projects</span>
                     </nav>
                     <h2 className="text-4xl md:text-7xl mb-10 font-bold tracking-tighter  leading-none">
                       Where Families Flourish and Dreams Take Root
       
                     </h2>
                     <div className="h-1 w-20 bg-[#22c55e] my-8 mx-auto" />
                   </div>
                 </motion.div>
               </div>

        {/* FLOATING STATS BAR */}
        {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] max-w-6xl z-999">
          <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-gray-100">
              {[
                { label: "Ongoing Projects", val: "03" },
                { label: "Planned Units", val: "20+" },
                { label: "Customer Trust", val: "100%" }
              ].map((stat, i) => (
                <div key={i} className="text-center px-4">
                  <p className="text-[#22C55E] text-4xl md:text-5xl font-extrabold mb-2">
                    <AnimatedCounter value={stat.val} />
                  </p>
                  <p className="text-gray-400 text-[10px] md:text-xs font-bold tracking-[0.2em] ">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </section>

      <div className="h-10 md:h-15 bg-[#f8fafc]"></div>

      {/* PROJECTS GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              key={project.id}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-15`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 z-20 bg-white px-5 py-2 rounded-full shadow-md">
                    <p className="text-[#22C55E] font-bold text-xs tracking-widest ">Active Phase</p>
                  </div>
                </div>
                {/* Accent background box */}
                <div className={`absolute -bottom-6 ${index % 2 !== 0 ? '-left-6' : '-right-6'} -z-10 w-2/3 h-2/3 bg-emerald-50 rounded-3xl opacity-50`}></div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                   {/* <span className="text-[#22c55e] font-bold tracking-[0.3em] text-xs  mb-2">Project Details</span> */}
                   <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-none">
                    {project.title}
                  </h2>
                </div>
                
                <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
                  {project.tagline}
                </p>

                <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-50 rounded-xl text-[#22C55E]"><MapPin size={24} /></div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold  tracking-wider">Location</p>
                      <p className="font-bold text-slate-800">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-50 rounded-xl text-[#22C55E]"><Maximize2 size={24} /></div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold  tracking-wider">Total Area</p>
                      <p className="font-bold text-slate-800">{project.area}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <MangalButton text="EXPLORE PROJECT" href={project.link} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-[#0A1A10] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tighter mb-10 leading-tight">
                Ready to secure your <br/> <span className="text-[#22c55e]">future home?</span>
              </h2>
              <MangalButton text="CONTACT SALES" href="/contact-us" />
            </div>
        </div>
      </section>
    </div>
  );
};

export default OngoingProjectsPage;