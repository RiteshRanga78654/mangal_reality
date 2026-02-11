"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus, Minus, Star, ShieldCheck, TreePine, Landmark,
  TrendingUp, Phone, Mail, ArrowRight, Waves, Zap, Fence,
  Quote, MapPin, Maximize2, Layout, Navigation
} from 'lucide-react';

const NatureValleyPhase1 = () => {
  const [showMoreLandmarks, setShowMoreLandmarks] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // --- MANGAL REALTY SIGNATURE BUTTON COMPONENT ---
  const MangalButton = ({ children, onClick, className = "" }) => (
    <button
      onClick={onClick}
      className={`group relative cursor-pointer px-10 py-5 text-white font-bold tracking-[0.1em] text-[10px] md:text-xs overflow-hidden transition-all duration-300 w-full sm:w-auto ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
      </span>
      <div className="absolute inset-1 bg-[#22C55E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
      <div className="absolute inset-1 border border-[#22C55E]"></div>
    </button>
  );

  const projectStats = [
    { label: "VMRDA Approved", value: "Phase 1", icon: <Landmark />, sub: "Clear Title Layout" },
    { label: "Location", value: "Pisini", icon: <MapPin />, sub: "Near NH-16 Highway" },
    { label: "Total Area", value: "17 Acres", icon: <Maximize2 />, sub: "Premium Open Plots" }
  ];

  // UPDATED HIGHLIGHTS WITH BULLET POINTS
  const highlights = [
    { 
      title: "Gated Security", 
      icon: <ShieldCheck />, 
      points: [
        "Gated Community with Compound Wall",
        "24/7 Security Watch",
        "Grand Entrance Arch"
      ] 
    },
    { 
      title: "Prime Infra", 
      icon: <Fence />, 
      points: [
        "40ft Wide Blacktop Roads",
        "Dedicated Water Tank & Distribution",
        "Underground Drainage System"
      ] 
    },
    { 
      title: "Legal & Admin", 
      icon: <Landmark />, 
      points: [
        "VMRDA Approved Development",
        "Clear Title Layout",
        "Full Documentation Transparency"
      ] 
    },
    { 
      title: "Lush Greenery", 
      icon: <TreePine />, 
      points: [
        "Lush Green Spaces & Water Bodies",
        "Avenue Plantation Along Roads",
        "61+ Premium Community Amenities"
      ] 
    }
  ];

  const testimonials = [
    { name: "Rajesh Kumar", text: "Investing in Bhogapuram through Mangal Realty was the best decision. The development speed is unmatched.", role: "Business Owner" },
    { name: "Anitha Reddy", text: "The Nature Valley truly lives up to its name. It's peaceful yet so close to the upcoming airport hub.", role: "Home Maker" },
    { name: "Suresh Mani", text: "Phase 1 completion was seamless. The spot registration process was handled very professionally.", role: "Tech Lead" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
        setIsFading(false);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div
      className="bg-[#f8fafc] min-h-screen font-medium antialiased text-slate-900 overflow-x-hidden"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex flex-col lg:flex-row bg-[#0A1A10] overflow-hidden">
        <div className="w-full lg:w-2/3 h-[45vh] lg:h-screen relative">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1500"
            className="w-full h-full object-cover opacity-60"
            alt="Nature Valley (Phase 1)"
          />
        </div>

        <div className="w-full lg:w-1/3 flex items-center px-6 md:px-12 py-12 lg:py-20 bg-[#0A1A10]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-none mb-6 tracking-tighter uppercase">
              Nature Valley <br /> <span className="text-[#22C55E]">(Phase 1)</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed max-w-md italic">
              "Experience the Green Side of Life."  
            </p>
            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed max-w-md">
              The Nature Valley, a testament to our vision of harmonious living nestled in the serene landscape of Bhogapuram.
            </p>
            <MangalButton>
              View Brochure <ArrowRight size={16} />
            </MangalButton>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS GRID */}
      <section className="px-6 -mt-10 lg:-mt-16 relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {projectStats.map((stat, i) => (
            <div key={i} className="bg-white shadow-xl p-8 lg:p-10 border-b-8 border-[#22C55E] group text-left">
              <div className="text-[#22C55E] mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <p className="text-slate-400 text-[9px] font-bold tracking-[0.2em] mb-1 uppercase">{stat.label}</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-black tracking-tighter">{stat.value}</h2>
              <p className="text-slate-500 text-[10px] md:text-xs mt-1 font-bold">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROJECT HIGHLIGHTS - UPDATED TO BULLET POINTS */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 lg:mb-16 gap-6 text-left">
          <div className="w-full">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
              Phase 1 <br className="hidden md:block" />
              <span className="text-[#22C55E]">Completed</span>
            </h2>
            <div className="w-16 md:w-20 h-2 bg-[#22C55E] mt-4 md:mt-6"></div>
          </div>
          <p className="max-w-md text-slate-500 text-sm md:text-base">
            100% Sold Out & Delivered. A serene landscape featuring futuristic infrastructure and standard legal compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 border border-slate-100 shadow-sm transition-all duration-500 group text-left hover:bg-[#15803d] cursor-pointer rounded-2xl"
            >
              <div className="text-[#22C55E] mb-6 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold mb-4 tracking-tight uppercase text-slate-900 group-hover:text-white transition-colors">
                {item.title}
              </h4>
              
              <ul className="space-y-2">
                {item.points.map((point, pIdx) => (
                  <li 
                    key={pIdx} 
                    className="text-[11px] leading-tight text-slate-500 group-hover:text-emerald-50 flex items-start gap-2 transition-colors duration-300"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#22C55E] group-hover:bg-white shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE CONNECTIVITY HUB */}
      <section className="py-16 lg:py-24 bg-[#0A1A10] px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 lg:mb-16 gap-8 text-left">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none uppercase">Location <span className="text-[#22C55E]">Advantage</span></h2>
              <p className="text-slate-400 mt-4 md:mt-6 text-base md:text-lg ">Situated at the heart of the Bhogapuram International Airport growth corridor.</p>
            </div>
            <MangalButton onClick={() => setShowMoreLandmarks(!showMoreLandmarks)}>
              {showMoreLandmarks ? <Minus size={16} /> : <Plus size={16} />}
              {showMoreLandmarks ? "Close Details" : "Growth Landmarks"}
            </MangalButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <div className="md:col-span-2 h-[300px] lg:h-[450px] relative overflow-hidden group">
              <img src="/assets/images/airport-vizag.jpeg" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" alt="Bhogapuram View" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-left">
                <span className="bg-[#22C55E] text-black px-3 py-1 text-[9px] font-bold mb-3 inline-block tracking-widest uppercase">Future Hub</span>
                <h4 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">International Airport Corridor</h4>
              </div>
            </div>

            <div className="h-[300px] lg:h-[450px] relative overflow-hidden group">
              <img src="/assets/images/highway-pic.jpeg" className="w-full h-full object-cover" alt="Connectivity" />
              <div className="absolute inset-0 bg-[#22C55E]/20 group-hover:bg-[#22C55E]/40 transition-colors"></div>
              <div className="absolute bottom-8 left-8 text-left">
                <h4 className="text-2xl md:text-3xl font-bold text-white leading-none uppercase tracking-tighter">5 MIN TO <br /> HIGHWAY</h4>
              </div>
            </div>

            {/* <AnimatePresence>
              {showMoreLandmarks && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="h-[250px] lg:h-[350px] relative overflow-hidden md:col-span-3"
                >
                  <img src="https://images.unsplash.com/photo-1590483736622-39da8af7541b?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Beach" />
                  <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end text-left">
                    <h4 className="text-xl md:text-2xl font-bold text-[#22C55E] uppercase">Beach Road</h4>
                    <p className="text-white text-xs">15 Minutes Drive to Coastal Corridor</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence> */}

            <div className={`transition-all duration-700 bg-white p-8 lg:p-12 flex flex-col justify-center text-left md:col-span-3 ${!showMoreLandmarks && 'lg:col-span-2'}`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {[{ l: "Airport Site", d: "8 KM" }, { l: "Tagarapuvalsa", d: "12 KM" }, { l: "Miracle City", d: "5 KM" }, { l: "Vizag City", d: "35 KM" }].map((item, i) => (
                  <div key={i} className="flex flex-col border-l-2 border-[#22C55E] pl-4">
                    <span className="text-[9px] font-bold text-slate-400 tracking-wider mb-1 uppercase">{item.l}</span>
                    <span className="text-xl lg:text-3xl font-bold text-black">{item.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-16 lg:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative text-left">
              <Quote className="absolute -top-10 -left-6 text-[#22C55E] opacity-10" size={120} />
              <div className="relative z-10">
                <h3 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-8 uppercase">Client <br /><span className="text-[#22C55E]">Success</span></h3>

                <div className={`transition-all duration-500 min-h-[150px] ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  <p className="text-lg md:text-2xl font-medium text-slate-800 leading-relaxed mb-8 ">
                    "{testimonials[testimonialIndex].text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#0A1A10] text-[#22C55E] rounded-full flex items-center justify-center font-bold text-xl uppercase">
                      {testimonials[testimonialIndex].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-lg md:text-xl tracking-tighter uppercase">{testimonials[testimonialIndex].name}</p>
                      <div className="flex text-[#22C55E] mb-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">{testimonials[testimonialIndex].role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-8 lg:mt-12">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setTestimonialIndex(i)} className={`h-1.5 transition-all duration-300 ${i === testimonialIndex ? 'w-12 bg-[#22C55E]' : 'w-3 bg-slate-200'}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 h-[300px] lg:h-[450px]">
              <div className="h-full shadow-2xl"><img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Nature Valley" /></div>
              <div className="h-full shadow-2xl translate-y-8"><img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Greenery" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT FOOTER */}
      <footer className="py-16 lg:py-24 px-6 bg-[#0A1A10] text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-10 leading-none uppercase">Ready for the <br /> <span className="text-[#22C55E]">Next Phase?</span></h2>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 items-center mb-12">
            <div className="flex items-center gap-3 font-bold tracking-[0.1em] text-[10px] md:text-xs">
              <Mail className="text-[#22C55E]" size={18} /> info@mangalRealty.com
            </div>
            <div className="flex items-center gap-3 font-bold tracking-[0.1em] text-[10px] md:text-xs">
              <Phone className="text-[#22C55E]" size={18} /> +91 9429690913
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="/contact-us" className="contents">
              <MangalButton>Enquire for Phase 2</MangalButton>
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contents"
            >
              <MangalButton>Get Location Map</MangalButton>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NatureValleyPhase1;