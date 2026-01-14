"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Clock, ArrowRight, X, Upload, Send, 
  Heart, Coffee, Target, GraduationCap, Laptop, ShieldCheck
} from "lucide-react";

// --- DATA ---
const JOBS = [
  { id: 1, title: "Property Consultant", department: "Sales", location: "Visakhapatnam, AP", type: "Full-Time" },
  { id: 2, title: "Digital Marketing Manager", department: "Marketing", location: "Hyderabad, TS", type: "Hybrid" },
  { id: 3, title: "Site Supervisor", department: "Operations", location: "Visakhapatnam, AP", type: "On-Site" }
];

const BENEFITS = [
  { icon: <Heart className="text-red-500" />, title: "Health Insurance", desc: "Comprehensive coverage for you and your family." },
  { icon: <Coffee className="text-orange-500" />, title: "Great Culture", desc: "Collaborative environment with regular team outings." },
  { icon: <GraduationCap className="text-blue-500" />, title: "Learning", desc: "Subsidized courses and professional development." },
  { icon: <ShieldCheck className="text-green-500" />, title: "Job Security", desc: "Competitive pay with transparent growth paths." }
];

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#0a1a10]">
      
      {/* --- SECTION 1: DYNAMIC HERO --- */}
      <section className="relative h-[80vh] flex items-center justify-center bg-[#0a1a10] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920" className="w-full h-full object-cover" alt="Office" />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="relative z-10 text-center text-white px-6"
        >
          <span className="text-[#22c55e] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Work With Us</span>
          <h1 className="text-6xl md:text-9xl font-serif mb-6 tracking-tighter">
            Think <span className="italic">Bigger</span>.
          </h1>
          <p className="text-gray-300 max-w-lg mx-auto text-lg">We’re looking for innovators, dreamers, and doers to help us shape the skyline of tomorrow.</p>
        </motion.div>
      </section>

      {/* --- SECTION 2: LIFE AT MANGAL REALTY (Gallery) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px]">
          <div className="md:col-span-8 relative overflow-hidden rounded-[2rem] group">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Team" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
              <h3 className="text-white text-3xl font-serif">Collaborative Environment</h3>
            </div>
          </div>
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <div className="relative overflow-hidden rounded-[2rem] group">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Culture" />
            </div>
            <div className="bg-[#22c55e] rounded-[2rem] p-10 flex flex-col justify-center text-[#0a1a10]">
              <h4 className="text-4xl font-serif mb-2 italic">100+</h4>
              <p className="font-bold uppercase tracking-widest text-sm">Passionate Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: BENEFITS (Grid) --- */}
      <section className="py-24 bg-[#0a1a10] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-16">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {BENEFITS.map((b, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="bg-white/5 p-8 rounded-3xl border border-white/10 text-left hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-2xl">
                  {b.icon}
                </div>
                <h4 className="text-xl font-serif mb-2">{b.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: OPEN ROLES --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="text-5xl font-serif tracking-tight">Open Positions</h2>
          <p className="text-gray-500 font-medium">Find your place in our growing family.</p>
        </div>

        <div className="space-y-4">
          {JOBS.map((job) => (
            <div key={job.id} className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between hover:shadow-xl transition-all">
              <div>
                <span className="text-[10px] font-bold text-[#22c55e] uppercase tracking-widest mb-1 block">{job.department}</span>
                <h3 className="text-2xl font-serif">{job.title}</h3>
                <div className="flex gap-4 text-xs text-gray-400 mt-2">
                  <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14}/> {job.type}</span>
                </div>
              </div>
               <button
                            className="group relative cursor-pointer px-12 py-5 text-black font-bold uppercase tracking-widest text-xs overflow-hidden"
                        >
                            <span className="relative z-10">Apply Now</span>
                            <div className="absolute inset-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                            <div className="absolute inset-1 border border-green-600"></div>
                        </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- POPUP FORM --- */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsFormOpen(false)} className="absolute inset-0 bg-[#0a1a10]/90 backdrop-blur-sm" />
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-xl rounded-[2.5rem] p-10 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-serif italic text-[#0a1a10]">Application for {selectedJob?.title}</h3>
                <button onClick={() => setIsFormOpen(false)} className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"><X size={20}/></button>
              </div>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full bg-gray-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#22c55e]" />
                <input type="email" placeholder="Email Address" className="w-full bg-gray-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#22c55e]" />
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center group cursor-pointer hover:border-[#22c55e]">
                  <Upload className="mx-auto text-gray-300 group-hover:text-[#22c55e] mb-2" />
                  <p className="text-sm text-gray-500">Upload CV (PDF)</p>
                </div>
                <button className="w-full bg-[#22c55e] py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                  Submit <Send size={14}/>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}