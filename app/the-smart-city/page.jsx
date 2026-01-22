"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Plane, Building2, GraduationCap, MapPin, 
  ShieldCheck, Layout, Navigation, Info,
  Phone, Mail, CheckCircle, Download, 
  TreePine, Construction, Landmark, TrendingUp,
  Plus, Minus, Quote, Star, Stethoscope, ShoppingBag, Train
} from 'lucide-react';


// --- Animated Counter ---
const AnimatedCounter = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const end = parseInt(value.replace(/\D/g, ''));
        const timer = setInterval(() => {
          start += Math.ceil(end / 50);
          if (start >= end) { setDisplayValue(end); clearInterval(timer); }
          else { setDisplayValue(start); }
        }, 30);
      }
    }, { threshold: 0.1 });
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [value]);
  return <span ref={nodeRef}>{displayValue}{value.includes('+') ? '+' : value.includes('%') ? '%' : ''}</span>;
};

// --- Unified Mangal Button ---
const MangalButton = ({ text, href }) => (
  <Link href={href} className="group relative cursor-pointer px-10 py-4 text-white font-bold tracking-[0.1em] text-[14px] overflow-hidden inline-block text-center border border-[#22C55E]">
    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">{text}</span>
    <div className="absolute inset-0 bg-[#22C55E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-0"></div>
  </Link>
);

const SmartCityPremium = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // State for Connectivity Reveal
  const [showMoreLandmarks, setShowMoreLandmarks] = useState(false);

  // State for Testimonial Slider
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const testimonials = [
    {
      name: "Ravi Teja",
      text: "Investing in Smart City Dakamarri was a clear choice. The proximity to the airport and the high quality of infrastructure already in place made it a secure long-term asset.",
      role: "Software Architect"
    },
    {
      name: "Ananya Rao",
      text: "As an NRI, I was looking for a transparent and reliable developer. The progress at the site is impressive, and the green spaces are exactly what I wanted.",
      role: "Investment Banker"
    },
    {
      name: "Suresh Kumar",
      text: "The value appreciation in this corridor is unmatched. Being just 5 minutes from the International Airport makes this the best investment in Vizag.",
      role: "Business Owner"
    }
  ];

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
        setIsFading(false);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const faqs = [
    { q: "Is the project VMRDA Approved?", a: "Yes, the project is 100% VMRDA approved with L.P.NO: 82/2020/1167/VMRDA/DPMS. All documents are verified and clear." },
    { q: "What are the road widths within the project?", a: "The project features a proposed 60-feet main access road and 40-feet wide internal blacktop roads for seamless transit." },
    { q: "Are bank loans available for this project?", a: "Yes, the project is approved by major banks. We provide full assistance in securing loans for your plot purchase." },
    { q: "How far is the Bhogapuram Airport?", a: "The project is strategically located just 5 minutes away from the upcoming Bhogapuram International Airport." }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans antialiased text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] lg:h-screen flex flex-col lg:flex-row bg-slate-900">
        <div className="w-full lg:w-2/3 h-[40vh] lg:h-full relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1500" 
            className="w-full h-full object-cover opacity-70 scale-105 hover:scale-100 transition-transform duration-1000"
            alt="Smart City Banner"
          />
          
        </div>

        <div className="w-full lg:w-1/3 flex items-center bg-[#0A1A10] px-8 lg:px-12 py-16 text-left relative">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-[#22C55E] font-bold tracking-[0.3em]  text-xs mb-4">Mangal Realty Presents</h2>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-none  mb-6 tracking-tighter">
             The Smart City
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Residential plots at Dakamarri—Vizag's fastest growing corridor. Secure your future in the heart of growth.
            </p>
            <MangalButton text="Download Brochure" href="/brochure.pdf" />
          </motion.div>
        </div>
      </section>

      {/* 2. STATS OVERLAY */}
      <section className="px-6 -mt-16 lg:-mt-24 relative z-30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-2xl rounded-3xl p-10 border-b-8 border-[#22C55E] transition-transform hover:-translate-y-2">
            <TrendingUp className="text-[#22C55E] mb-4" />
            <p className="text-black text-[12px] font-bold tracking-[0.1em] mb-1 text-left">Pricing From</p>
            <h2 className="text-4xl font-black text-black leading-none tracking-tighter text-left">₹<AnimatedCounter value="15000" /></h2>
            <p className="text-slate-500 text-xs mt-2 font-bold text-left">Per Sq. Yard</p>
          </div>
          <div className="bg-white shadow-2xl rounded-3xl p-10 transition-transform hover:-translate-y-2">
            <CheckCircle className="text-[#22C55E] mb-4" />
            <p className="text-black text-[12px] font-bold tracking-[0.1em] mb-1 text-left">Live Status</p>
            <h2 className="text-4xl font-black text-black leading-none tracking-tighter text-left">100%</h2>
            <p className="text-slate-500 text-xs mt-2 font-bold text-left">Work Completed</p>
          </div>
          <div className="bg-white shadow-2xl rounded-3xl p-10 border-b-8 border-[#22C55E] transition-transform hover:-translate-y-2">
            <Landmark className="text-[#22C55E] mb-4" />
            <p className="text-black text-[12px] font-bold tracking-[0.1em] mb-1 text-left">Legal Status</p>
            <h2 className="text-3xl font-black text-black leading-none tracking-tighter text-left">VMRDA Approved</h2>
            <p className="text-slate-500 text-xs mt-2 font-bold text-left">LP: 82/2020/1167</p>
          </div>
        </div>
      </section>

      {/* 3. PREMIUM HIGHLIGHTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">Elite <span className="text-[#22C55E]">Infrastructure</span></h2>
          <div className="w-20 h-1.5 bg-[#22C55E] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "60ft Main Road", icon: <Layout />, desc: "Proposed 60ft wide access roads for effortless transit." },
            { title: "40ft Internal", icon: <Navigation />, desc: "Extensive 40ft wide internal blacktop road network." },
            { title: "Green Zones", icon: <TreePine />, desc: "Designated public open space spanning 670.48." },
            { title: "Legal Safety", icon: <ShieldCheck />, desc: "VMRDA Approved with spot registration available." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#22C55E]/30 transition-all group text-left">
              <div className="text-[#22C55E] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-xl font-bold uppercase mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. NEARBY LANDMARKS GRID (REFACTORED WITH REVEAL) */}
      <section className="py-24  bg-white px-6">
    <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
    <div className="text-left max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-none">
          The <span className="text-[#22C55E]">Connectivity</span> Hub
        </h2>
        <p className="text-black mt-6 text-lg">
          Surrounded by 12 major Engineering and Medical colleges, placing your investment at the core of Vizag's education corridor.
        </p>
      </div>
      <button 
        onClick={() => setShowMoreLandmarks(!showMoreLandmarks)}
        className={`flex items-center gap-3 px-8 py-4 font-bold shadow-xl  transform   origin-left duration-500 cursor-pointer ${
          showMoreLandmarks ? 'bg-green-600 text-white' : 'bg-green-600 text-white hover:bg-[#22C55E] group-hover:scale-x-100 transition-transform origin-left duration-500'
        }`}
      >
        <Plus className={`transition-transform duration-500 ${showMoreLandmarks ? 'rotate-45' : 'rotate-0'}`} />
        {showMoreLandmarks ? "Close Hub" : "Explore More"}
      </button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* 1. BHOGAPURAM AIRPORT (Large) */}
      <div className="md:col-span-2 h-[400px] relative rounded-[3rem] overflow-hidden group shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1592595894519-32219f2e6028?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
          alt="Bhogapuram Airport" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        <div className="absolute bottom-10 left-10 text-left">
          <span className="bg-[#22C55E] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">5 Minutes Drive</span>
          <h4 className="text-3xl font-black text-white uppercase ">Bhogapuram International Airport</h4>
        </div>
      </div>
      
      {/* 2. IT SEZ CORRIDOR */}
      <div className="h-[400px] relative rounded-[3rem] overflow-hidden group shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
          alt="IT SEZ" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A10] via-[#0A1A10]/40 to-transparent"></div>
        <div className="absolute bottom-10 left-10 text-left">
          <Building2 size={48} className="text-[#22C55E] mb-4 opacity-80" />
          <span className="text-[#22C55E] text-[10px] font-bold uppercase tracking-widest mb-2 block">10 Minutes Drive</span>
          <h4 className="text-3xl font-black text-white uppercase leading-none">IT SEZ <br /> Corridor</h4>
        </div>
      </div>

      {/* 3. EDUCATIONAL POWERHOUSE */}
      <div className="h-[350px] relative rounded-[3rem] overflow-hidden group shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=600" 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
          alt="Education Hub" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#22C55E] via-[#22C55E]/60 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-left text-white">
           <GraduationCap size={40} className="mb-4 opacity-60" />
           <h4 className="text-2xl font-black uppercase leading-tight mb-2 tracking-tighter">Educational <br /> Powerhouse</h4>
           <p className="text-white/90 text-xs font-medium">Just 5 km from Oakridge International.</p>
        </div>
      </div>

      {/* Hidden revealable boxes */}
      <AnimatePresence>
        {showMoreLandmarks && (
          <>
            {/* 4. HEALTH CITY */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="h-[350px] relative rounded-[3rem] overflow-hidden group shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                alt="Health City" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-left text-white">
                <Stethoscope size={40} className="mb-4 opacity-60 text-[#22C55E]" />
                <h4 className="text-2xl font-black uppercase leading-tight mb-2 tracking-tighter">Health <br /> City</h4>
                <p className="text-slate-300 text-xs font-medium">15 Minutes from super-specialty hospitals.</p>
              </div>
            </motion.div>

            {/* 5. RETAIL HUB */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="h-[350px] relative rounded-[3rem] overflow-hidden group shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                alt="Retail Hub" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-left text-white">
                <ShoppingBag size={40} className="mb-4 opacity-60 text-[#22C55E]" />
                <h4 className="text-2xl font-black uppercase leading-tight mb-2 tracking-tighter">Retail <br /> Hubs</h4>
                <p className="text-slate-300 text-xs font-medium">Nearby premium shopping & entertainment.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 6. STATS BOX */}
      <div className={`transition-all duration-700 h-[350px] bg-white border border-slate-100 p-12 rounded-[3rem] flex flex-col justify-center shadow-2xl text-left ${showMoreLandmarks ? 'md:col-span-1' : 'md:col-span-2'}`}>
        <div className={`grid gap-x-12 gap-y-6 w-full ${showMoreLandmarks ? 'grid-cols-1' : 'grid-cols-2'}`}>
          {[{l: "Vizag CMR", d: "35 Mins"}, {l: "Madhurawada", d: "20 Mins"}].map((item, i) => (
            <div key={i} className="flex flex-col border-l-4 border-[#22C55E] pl-6 py-2 bg-slate-50/50 rounded-r-xl">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{item.l}</span>
              <span className="text-2xl font-black">{item.d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* 5. INVESTMENT CHECKLIST */}
      <section className="py-24 bg-[#0A1A10] text-white rounded-[4rem] mx-6 lg:mx-12 mb-24 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10 text-left">
          <div className="w-full lg:w-3/5">
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12 leading-none">A Secure <br /> <span className="text-[#22C55E]">Investment</span> Hub</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                {[
                  { title: "VMRDA Approved", sub: "L.P.NO: 82/2020/1167" },
                  { title: "Bank Loans", sub: "Easy financing options available" },
                  { title: "Immediate Reg.", sub: "Spot registration for all plots" },
                  { title: "RERA Registered", sub: "AP RERA: P03270023332" }
                ].map((check, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle className="text-[#22C55E] shrink-0" size={24} />
                    <div>
                      <h5 className="font-bold uppercase tracking-tight">{check.title}</h5>
                      <p className="text-slate-400 text-xs mt-1">{check.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          <div className="w-full lg:w-2/5 flex flex-col gap-6">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl">
               <ShieldCheck className="text-[#22C55E] mb-6" size={48} />
               <p className="text-slate-400 text-sm leading-relaxed mb-8">
                 Smart City Dakamarri stands as a testament to Mangal Realty's commitment to quality and transparency.
               </p>
               <MangalButton text="Get Final Pricing" href="/quote" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl z-0"></div>
      </section>

      {/* 6. AUTOMATED TESTIMONIALS (REPLACED OLD SECTION) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <Quote className="absolute -top-10 -left-10 text-[#22C55E] opacity-10" size={200} />
              <div className="relative z-10 text-left">
                <h3 className="text-4xl md:text-7xl font-black uppercase leading-none mb-8">What Our <br /> <span className="text-[#22C55E]">Investors</span> Say</h3>
                
                <div className={`transition-all duration-500 min-h-[160px] transform ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  <p className="text-2xl font-medium text-slate-800 leading-relaxed mb-10">
                    "{testimonials[testimonialIndex].text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-slate-900 text-[#22C55E] rounded-full flex items-center justify-center font-black text-xl">
                      {testimonials[testimonialIndex].name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-xl uppercase tracking-tight">{testimonials[testimonialIndex].name}</p>
                      <div className="flex text-[#22C55E] mb-1">
                        <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
                      </div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{testimonials[testimonialIndex].role}</p>
                    </div>
                  </div>
                </div>

                {/* Dots */}
                <div className="flex gap-2 mt-8">
                  {testimonials.map((_, i) => (
                    <div key={i} className={`h-1.5 transition-all duration-300 rounded-full ${i === testimonialIndex ? 'w-10 bg-[#22C55E]' : 'w-2 bg-slate-200'}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="h-64 bg-slate-100 rounded-[2rem] overflow-hidden shadow-xl"><img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" /></div>
               <div className="h-64 bg-slate-100 rounded-[2rem] overflow-hidden shadow-xl mt-12"><img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 bg-[#0A1A10] px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-7xl font-black text-center text-white mb-16">Investor <span className="text-[#22C55E]">Knowledge</span></h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm transition-all">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 flex justify-between items-center text-left"
                >
                  <span className="font-bold text-black uppercase tracking-tight">{faq.q}</span>
                  <div className=" p-2 rounded-full text-[#22C55E]">
                    {activeFaq === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <p className="p-6 pt-0 text-slate-500 leading-relaxed text-left border-t border-slate-50">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT FOOTER */}
      <footer className="py-24 px-6 text-center bg-white border-t border-slate-100 relative">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none text-black">Invest in the <br /> <span className="text-[#22C55E]">Smart Future</span></h2>
            <div className="flex flex-col md:flex-row justify-center gap-12 items-center mb-16">
               <div className="flex items-center gap-3 font-bold text-black">
                 <Mail className="text-[#22C55E]" size={24} /> info@mangalreality.com
               </div>
               <div className="flex items-center gap-3 font-bold text-black">
                 <Phone className="text-[#22C55E]" size={24} /> +91 040-4400033
               </div>
            </div>
            <MangalButton text="Book Site Visit" href="/contact" />
         </div>
      </footer>
    </div>
  );
};

export default SmartCityPremium;