"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Home, ChevronRight, Scale, Info } from "lucide-react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: "collection",
      title: "Data Collection",
      icon: <Eye size={24} />,
      content: "We collect information that identifies, relates to, or could reasonably be linked with you. This includes identifiers such as your real name, alias, postal address, unique personal identifier, online identifier, and Internet Protocol address."
    },
    {
      id: "usage",
      title: "Strategic Usage",
      icon: <FileText size={24} />,
      content: "At Mangal Realty, we use your data to personalize your property search experience, process your inquiries efficiently, and keep you informed about the sustainable architectural developments within our portfolio."
    },
    {
      id: "security",
      title: "Security Protocols",
      icon: <Lock size={24} />,
      content: "Your privacy is our legacy. We employ enterprise-grade encryption and secure socket layer technology (SSL) to ensure that your personal information is protected from unauthorized access or disclosure."
    },
    {
      id: "rights",
      title: "User Rights",
      icon: <Scale size={24} />,
      content: "You maintain the absolute right to access, rectify, or request the deletion of your personal data. Our team is committed to responding to transparency requests within 30 days of receipt."
    }
  ];

  return (
    <main className="bg-[#FAF9F6] min-h-screen text-[#0a1a10] selection:bg-[#22C55E]/30">
      
      {/* 80VH CINEMATIC HERO */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920" 
            className="w-full h-full object-cover"
            alt="Nature Background"
          />
        </motion.div>
        
        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 from-black/70 via-black/20 to-[#FAF9F6]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="flex items-center justify-center gap-3 mb-8 text-xs font-bold tracking-[0.3em] uppercase opacity-80">
              <a href="/" className="hover:text-[#22C55E] flex items-center gap-1 transition-colors">
                <Home size={14} /> Home
              </a>
              <ChevronRight size={14} />
              <span>Legal Commitment</span>
            </nav>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6" style={{ fontFamily: "Arial, sans-serif" }}>
              Privacy Policy
            </h1>
            <div className="h-1 w-32 bg-[#22C55E] mx-auto mb-8" />
            <p className="max-w-xl mx-auto text-lg md:text-xl font-light opacity-90 leading-relaxed">
              Preserving your trust with the same care we use to preserve nature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTERACTIVE CONTENT AREA */}
      <section className="max-w-7xl mx-auto px-6 pb-32 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* STICKY LEFT NAVIGATION */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#22C55E] mb-6">Contents</h4>
              {sections.map((sec, i) => (
                <button
                  key={sec.id}
                  onClick={() => setActiveSection(i)}
                  className={`w-full text-left p-4 flex items-center gap-4 border-l-2 transition-all duration-500 ${
                    activeSection === i 
                    ? "border-[#22C55E] bg-white shadow-xl text-[#0a1a10] translate-x-2" 
                    : "border-stone-200 text-stone-400 hover:border-[#22C55E]/50"
                  }`}
                >
                  <span className={`text-sm font-bold ${activeSection === i ? "text-[#22C55E]" : ""}`}>0{i + 1}</span>
                  <span className="uppercase text-[11px] font-black tracking-widest">{sec.title}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* CONTENT CARDS */}
          <div className="lg:col-span-8 space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white p-10 md:p-16 border border-stone-100 shadow-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black italic">
                  0{index + 1}
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#22C55E] text-white flex items-center justify-center mb-8 shadow-lg shadow-[#22C55E]/20">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-stone-500 text-lg leading-relaxed font-light">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CONTACT FOOTER CARD */}
            <motion.div 
              className="bg-[#0a1a10] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">Have further questions?</h3>
                <p className="text-stone-400">Our privacy officers are available to help you.</p>
              </div>
              
              <button className="group relative cursor-pointer px-10 py-5 text-[#22C55E] hover:text-[#0a1a10] font-bold uppercase tracking-widest text-xs overflow-hidden transition-all duration-500">
                <span className="relative z-10 flex items-center gap-2">Contact DPO <ChevronRight size={16} /></span>
                <div className="absolute inset-1 border border-[#22C55E]" />
                <div className="absolute inset-1 bg-[#22C55E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </button>
            </motion.div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default PrivacyPolicy;