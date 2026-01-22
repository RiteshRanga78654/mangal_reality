"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, GraduationCap, Plus, Minus, Quote, Star, 
  Stethoscope, ShoppingBag, ShieldCheck, CheckCircle, 
  TreePine, MapPin, Landmark, TrendingUp, Phone, Mail, 
  ArrowRight, Waves, Zap, Fence, Shovel
} from 'lucide-react';

const GreenMeadowsJonnada = () => {
  const [showMoreLandmarks, setShowMoreLandmarks] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // --- Data from Green Meadows Banner ---
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
    { name: "Srinivas Rao", text: "The Jonnada project is ideally located. Being near Lendi and Raghu colleges makes it a perfect investment for future rental demand.", role: "Educator" }, // [cite: 27, 28, 33]
    { name: "Priya Sharma", text: "100% work completion and on-spot registration gave me the confidence I needed to invest my savings here.", role: "Home Buyer" }, // [cite: 47, 51, 52]
    { name: "Vikas Reddy", text: "Best for both living and investment. The 18% ROI promise and VMRDA approval make it a secure asset.", role: "Real Estate Investor" } // [cite: 6, 7, 22, 23]
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
    <div className="bg-[#f8fafc] min-h-screen font-sans antialiased text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[120vh] flex flex-col lg:flex-row bg-slate-900 overflow-hidden">
        <div className="w-full lg:w-2/3 h-[50vh] lg:h-full relative">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1500" 
            className="w-full h-full object-cover opacity-80"
            alt="Green Meadows Jonnada"
          />
          <div className="absolute top-10 left-10 z-20 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-left">
            <p className="text-[#22C55E] text-[10px] font-bold uppercase tracking-widest">RERA Registered</p>
            <p className="text-white font-black text-lg">P0227041972</p> {/* [cite: 2] */}
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex items-center bg-[#0A1A10] px-8 lg:px-12 py-20 text-left relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-[#22C55E] font-bold tracking-[0.3em] uppercase text-xs mb-4">Mangal Realty Presents</h2>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-none uppercase mb-6 tracking-tighter">
              GREEN <br /> <span className="text-[#22C55E]">MEADOWS</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed italic">
              "Build Your Dream. Grow Your Wealth." Located primely in Jonnada's educational hub.
            </p> {/* [cite: 20, 21, 46] */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#22C55E] text-black px-8 py-4 font-black uppercase tracking-tighter hover:bg-white transition-all duration-300 rounded-full flex items-center gap-2">
                On Spot Registration <ArrowRight size={18} />
              </button> {/* [cite: 47, 52] */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS GRID */}
      <section className="px-6 -mt-12 relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectStats.map((stat, i) => (
            <div key={i} className="bg-white shadow-2xl rounded-[2.5rem] p-10 border-b-8 border-[#22C55E] transition-all hover:-translate-y-2 group">
              <div className="text-[#22C55E] mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <p className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-1 text-left">{stat.label}</p>
              <h2 className="text-4xl font-black text-black tracking-tighter text-left">{stat.value}</h2>
              <p className="text-slate-500 text-xs mt-2 font-bold text-left">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROJECT HIGHLIGHTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 text-left">
          <div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">Project <br /><span className="text-[#22C55E]">Highlights</span></h2>
            <div className="w-20 h-2 bg-[#22C55E] mt-6"></div>
          </div>
          <p className="max-w-md text-slate-500 font-medium">100% Work Completed. VMRDA Approved layout featuring premium amenities for modern living.</p> {/* [cite: 6, 41, 51] */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl hover:bg-[#0A1A10] hover:text-white transition-all duration-500 group text-left">
              <div className="text-[#22C55E] mb-8 group-hover:scale-125 transition-transform">{item.icon}</div>
              <h4 className="text-xl font-black uppercase mb-3 tracking-tight">{item.title}</h4>
              <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE CONNECTIVITY HUB (WITH IMAGES) */}
      <section className="py-24 bg-[#0A1A10] px-6 text-white rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6 text-left">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">Location <span className="text-[#22C55E]">Corridor</span></h2>
              <p className="text-slate-400 mt-6 text-lg">Strategically located just 250 meters from the highway at Jonnada Junction.</p> {/* [cite: 34, 46, 102] */}
            </div>
            <button 
              onClick={() => setShowMoreLandmarks(!showMoreLandmarks)}
              className="bg-white text-black px-10 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-[#22C55E] hover:text-white transition-all flex items-center gap-3"
            >
              {showMoreLandmarks ? <Minus /> : <Plus />}
              {showMoreLandmarks ? "Less Info" : "Distance Map"}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lendi College - Primary Landmark */}
            <div className="md:col-span-2 h-[450px] relative rounded-[4rem] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" alt="Educational Hub" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 text-left">
                <span className="bg-[#22C55E] text-black px-4 py-1 rounded-full text-[10px] font-black uppercase mb-4 inline-block tracking-widest">Surrounded By</span>
                <h4 className="text-4xl font-black uppercase ">Lendi, Raghu & VITAM Colleges</h4> {/* [cite: 27, 28] */}
              </div>
            </div>
            
            <div className="h-[450px] relative rounded-[4rem] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" alt="Airport" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#22C55E]/80 to-transparent"></div>
              <div className="absolute bottom-12 left-10 text-left">
                <h4 className="text-3xl font-black uppercase text-black leading-none">15 KM TO <br /> AIRPORT</h4> {/* [cite: 37] */}
                <p className="text-black/70 font-bold mt-2">International Connectivity</p>
              </div>
            </div>

            <AnimatePresence>
              {showMoreLandmarks && (
                <>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-[350px] relative rounded-[3rem] overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-60" alt="Temple" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 p-10 flex flex-col justify-end text-left">
                      <h4 className="text-2xl font-black uppercase text-[#22C55E]">Padmanabham</h4>
                      <p className="text-white text-sm">10 Minutes Drive to Temple</p> {/* [cite: 30, 31] */}
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-[350px] bg-[#22C55E] p-10 rounded-[3rem] flex flex-col justify-center text-left text-black">
                    <GraduationCap size={48} className="mb-6 opacity-30" />
                    <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">Oakridge International</h4>
                    <p className="mt-4 font-bold">10 Min Drive</p> {/* [cite: 32] */}
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-[350px] relative rounded-[3rem] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1473186578172-c141e6798ee4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Beach" />
                    <div className="absolute inset-0 bg-black/60 p-10 flex flex-col justify-center text-left">
                      <h4 className="text-2xl font-black uppercase text-white">Coastal Corridor</h4>
                      <p className="text-[#22C55E] font-black">25 KM AWAY</p> {/* [cite: 39] */}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            <div className={`transition-all duration-700 h-[350px] bg-white rounded-[3rem] p-12 flex flex-col justify-center shadow-2xl text-left ${showMoreLandmarks ? 'md:col-span-3' : 'md:col-span-2'}`}>
              <div className={`grid gap-x-12 gap-y-6 w-full ${showMoreLandmarks ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2'}`}>
                {[{l: "Revidi Junction", d: "3 KM"}, {l: "Highway", d: "5 KM"}, {l: "Lake Palace", d: "9 KM"}, {l: "Madhurawada", d: "25 KM"}].map((item, i) => (
                  <div key={i} className="flex flex-col border-l-4 border-[#22C55E] pl-6 py-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{item.l}</span> {/* [cite: 34, 35, 36, 38] */}
                    <span className="text-3xl font-black text-black">{item.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative text-left">
              <Quote className="absolute -top-10 -left-10 text-[#22C55E] opacity-10" size={200} />
              <div className="relative z-10">
                <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">Investor <br /><span className="text-[#22C55E]">Voices</span></h3>
                
                <div className={`transition-all duration-500 min-h-[180px] ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  <p className="text-2xl font-medium text-slate-800 leading-relaxed mb-10 italic">
                    "{testimonials[testimonialIndex].text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#0A1A10] text-[#22C55E] rounded-full flex items-center justify-center font-black text-xl">
                      {testimonials[testimonialIndex].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-black text-xl uppercase tracking-tighter">{testimonials[testimonialIndex].name}</p>
                      <div className="flex text-[#22C55E] mb-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                      </div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{testimonials[testimonialIndex].role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-12">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setTestimonialIndex(i)} className={`h-1.5 transition-all duration-300 rounded-full ${i === testimonialIndex ? 'w-12 bg-[#22C55E]' : 'w-3 bg-slate-200'}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="h-[400px] rounded-[3rem] overflow-hidden shadow-2xl"><img src="https://images.unsplash.com/photo-1582408921715-18e7806367c1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Real Estate" /></div>
               <div className="h-[400px] rounded-[3rem] overflow-hidden shadow-2xl mt-16"><img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Modern House" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT FOOTER */}
      <footer className="py-24 px-6 bg-[#0A1A10] text-center text-white rounded-b-[5rem]">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none">Your Jonnada <br /> <span className="text-[#22C55E]">Legacy Starts</span> Here</h2>
            <div className="flex flex-col md:flex-row justify-center gap-12 items-center mb-16">
               <div className="flex items-center gap-3 font-black uppercase tracking-widest">
                 <Mail className="text-[#22C55E]" size={24} /> info@mangalreality.com
               </div>
               <div className="flex items-center gap-3 font-black uppercase tracking-widest">
                 <Phone className="text-[#22C55E]" size={24} /> +91 9429690913 {/* [cite: 53] */}
               </div>
            </div>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-tighter hover:bg-[#22C55E] hover:text-white transition-all">
                Book Site Visit
              </button>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default GreenMeadowsJonnada;