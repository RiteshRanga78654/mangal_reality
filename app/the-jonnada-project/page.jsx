"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Minus, Star, ShieldCheck, TreePine, Landmark, 
  TrendingUp, Phone, Mail, ArrowRight, Waves, Zap, Fence, 
  Quote
} from 'lucide-react';

const GreenMeadowsJonnada = () => {
  const [showMoreLandmarks, setShowMoreLandmarks] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // --- MANGAL REALTY SIGNATURE BUTTON COMPONENT ---
  const MangalButton = ({ children, onClick, className = "" }) => (
    <button
      onClick={onClick}
      className={`group relative cursor-pointer px-10 py-5 text-white font-bold tracking-[0.2em] text-[10px] md:text-xs overflow-hidden uppercase transition-all duration-300 w-full sm:w-auto ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
      </span>
      <div className="absolute inset-1 bg-[#22C55E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
      <div className="absolute inset-1 border border-[#22C55E]"></div>
    </button>
  );

  const projectStats = [
    { label: "VMRDA Approved", value: "LP: 71/2020", icon: <Landmark />, sub: "VMRDA/DPMS Approved" }, 
    { label: "Price", value: "₹13,999", icon: <TrendingUp />, sub: "Per Sq. Yard" }, 
    { label: "ROI Status", value: "18%", icon: <Zap />, sub: "Expected Returns" } 
  ];

  const highlights = [
    { title: "24/7 Security", icon: <ShieldCheck />, desc: "CCTV surveillance and professional security teams." }, 
    { title: "Elite Infrastructure", icon: <Fence />, desc: "Grand Entrance Arch, Compound Wall & BT Roads." }, 
    { title: "Modern Utilities", icon: <Waves />, desc: "Advanced Drainage System & Completed Electrical Work." },
    { title: "Green Living", icon: <TreePine />, desc: "Vastu-compliant plots with Avenue Plantation & Parks." } 
  ];

  const testimonials = [
    { name: "Srinivas Rao", text: "The Jonnada project is ideally located. Being near Lendi and Raghu colleges makes it a perfect investment for future rental demand.", role: "Educator" },
    { name: "Priya Sharma", text: "100% work completion and on-spot registration gave me the confidence I needed to invest my savings here.", role: "Home Buyer" },
    { name: "Vikas Reddy", text: "Best for both living and investment. The 18% ROI promise and VMRDA approval make it a secure asset.", role: "Real Estate Investor" }
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
            alt="Green Meadows Jonnada"
          />
        </div>

        <div className="w-full lg:w-1/3 flex items-center px-6 md:px-12 py-12 lg:py-20 bg-[#0A1A10]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full text-left">
            <h2 className="text-[#22C55E] font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Mangal Realty Presents</h2>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-none uppercase mb-6 tracking-tighter">
              GREEN <br /> <span className="text-[#22C55E]">MEADOWS</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed italic max-w-md">
              "Build Your Dream. Grow Your Wealth." Located primely in Jonnada's educational hub.
            </p>
            <MangalButton>
              On Spot Registration <ArrowRight size={16} />
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
              <p className="text-slate-400 text-[9px] font-bold tracking-[0.2em] uppercase mb-1">{stat.label}</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-black tracking-tighter">{stat.value}</h2>
              <p className="text-slate-500 text-[10px] md:text-xs mt-1 font-bold">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROJECT HIGHLIGHTS */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 lg:mb-16 gap-6 text-left">
          <div className="w-full">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none uppercase">Project <br className="hidden md:block" /><span className="text-[#22C55E]">Highlights</span></h2>
            <div className="w-16 md:w-20 h-2 bg-[#22C55E] mt-4 md:mt-6"></div>
          </div>
          <p className="max-w-md text-slate-500 text-sm md:text-base">100% Work Completed. VMRDA Approved layout featuring premium amenities for modern living.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="bg-white p-8 border border-slate-100 shadow-sm hover:bg-[#0A1A10] hover:text-white transition-all duration-500 group text-left">
              <div className="text-[#22C55E] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-xl font-bold uppercase mb-3 tracking-tight">{item.title}</h4>
              <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE CONNECTIVITY HUB */}
      <section className="py-16 lg:py-24 bg-[#0A1A10] px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 lg:mb-16 gap-8 text-left">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none uppercase">Location <span className="text-[#22C55E]">Corridor</span></h2>
              <p className="text-slate-400 mt-4 md:mt-6 text-base md:text-lg italic">Strategically located just 250 meters from the highway at Jonnada Junction.</p>
            </div>
            <MangalButton onClick={() => setShowMoreLandmarks(!showMoreLandmarks)}>
              {showMoreLandmarks ? <Minus size={16} /> : <Plus size={16} />}
              {showMoreLandmarks ? "Close Map" : "View Distance Map"}
            </MangalButton>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <div className="md:col-span-2 h-[300px] lg:h-[450px] relative overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" alt="Educational Hub" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-left">
                <span className="bg-[#22C55E] text-black px-3 py-1 text-[9px] font-bold uppercase mb-3 inline-block tracking-widest">Educational Hub</span>
                <h4 className="text-2xl md:text-4xl font-bold uppercase">Lendi, Raghu & VITAM</h4>
              </div>
            </div>
            
            <div className="h-[300px] lg:h-[450px] relative overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Airport" />
              <div className="absolute inset-0 bg-[#22C55E]/20 group-hover:bg-[#22C55E]/40 transition-colors"></div>
              <div className="absolute bottom-8 left-8 text-left">
                <h4 className="text-2xl md:text-3xl font-bold uppercase text-white leading-none">15 KM TO <br /> AIRPORT</h4>
              </div>
            </div>

            <AnimatePresence>
              {showMoreLandmarks && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }} 
                  exit={{ opacity: 0, height: 0 }}
                  className="h-[250px] lg:h-[350px] relative overflow-hidden md:col-span-3"
                >
                  <img src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Temple" />
                  <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end text-left">
                    <h4 className="text-xl md:text-2xl font-bold uppercase text-[#22C55E]">Padmanabham</h4>
                    <p className="text-white text-xs">10 Minutes Drive to Temple</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className={`transition-all duration-700 bg-white p-8 lg:p-12 flex flex-col justify-center text-left md:col-span-3 ${!showMoreLandmarks && 'lg:col-span-2'}`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {[{l: "Revidi Junction", d: "3 KM"}, {l: "Highway", d: "5 KM"}, {l: "Lake Palace", d: "9 KM"}, {l: "Madhurawada", d: "25 KM"}].map((item, i) => (
                  <div key={i} className="flex flex-col border-l-2 border-[#22C55E] pl-4">
                    <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-1">{item.l}</span>
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
                <h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">Investor <br /><span className="text-[#22C55E]">Voices</span></h3>
                
                <div className={`transition-all duration-500 min-h-[150px] ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  <p className="text-lg md:text-2xl font-medium text-slate-800 leading-relaxed mb-8 italic">
                    "{testimonials[testimonialIndex].text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#0A1A10] text-[#22C55E] rounded-full flex items-center justify-center font-bold text-xl">
                      {testimonials[testimonialIndex].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-lg md:text-xl uppercase tracking-tighter">{testimonials[testimonialIndex].name}</p>
                      <div className="flex text-[#22C55E] mb-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{testimonials[testimonialIndex].role}</p>
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
               <div className="h-full shadow-2xl"><img src="https://images.unsplash.com/photo-1582408921715-18e7806367c1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Real Estate" /></div>
               <div className="h-full shadow-2xl translate-y-8"><img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Modern House" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT FOOTER */}
      <footer className="py-16 lg:py-24 px-6 bg-[#0A1A10] text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-10 leading-none">Your Jonnada <br /> <span className="text-[#22C55E]">Legacy Starts</span> Here</h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 items-center mb-12">
               <div className="flex items-center gap-3 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
                 <Mail className="text-[#22C55E]" size={18} /> info@mangalreality.com
               </div>
               <div className="flex items-center gap-3 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
                 <Phone className="text-[#22C55E]" size={18} /> +91 9429690913
               </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <MangalButton>Book Site Visit</MangalButton>
              <MangalButton>Contact Sales</MangalButton>
            </div>
            
            <p className="mt-16 text-[9px] text-slate-600 uppercase tracking-[0.4em] font-bold">
              © 2024 Mangal Realty. VMRDA LP: 71/2020
            </p>
          </div>
      </footer>
    </div>
  );
};

export default GreenMeadowsJonnada;