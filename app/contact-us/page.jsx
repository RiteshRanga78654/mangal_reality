"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Globe,
  ArrowRight,
  Headphones
} from "lucide-react";
import Swal from "sweetalert2";
import { Home, ChevronRight } from "lucide-react";

const brandGreen = "#22C55E";

// --- MANGAL SIGNATURE BUTTON ---
const MangalButton = ({ text, type = "button", className = "" }) => (
  <button
    type={type}
    className={`group relative cursor-pointer px-10 py-5 text-black font-bold tracking-[0.2em] text-[10px] md:text-xs overflow-hidden  transition-all duration-300 w-full sm:w-auto ${className}`}
  >
    <span className="relative z-10 flex items-center justify-center gap-3 transition-colors duration-500 group-hover:text-white">
      {text} <Send size={16} />
    </span>
    <div className="absolute inset-1 bg-[#22C55E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-0"></div>
    <div className="absolute inset-1 border border-[#22C55E]"></div>
  </button>
);

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "Required Fields",
        text: "Please fill in all mandatory fields.",
        confirmButtonColor: "#0a1a10",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Message Received",
      text: "Our team will get back to you within 24 hours.",
      confirmButtonColor: "#22c55e",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main
      className="bg-[#FAF9F6] min-h-screen font-medium antialiased text-black"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {/* 1. HERO SECTION - Height 80vh & Opacity Removed */}
      <section className="relative h-[72vh] flex items-center bg-[#0a1a10] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920"
            className="w-full h-full object-cover"
            alt="Office"
          />
          {/* Dark gradient for text readability without white opacity */}
          <div className="absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
           <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                              >
           <div className="relative z-10 text-center text-white px-6">
          <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-sm font-medium tracking-[0.2em]">
            <a
              href="/"
              className="hover:text-[#22c55e] flex items-center gap-1"
            >
              <Home size={12} />
              Home
            </a>
            <ChevronRight size={12} className="opacity-50" />
            <span className="text-white">Contact Us</span>
          </nav>
          <h1 className="text-4xl md:text-7xl   leading-none" style={{fontFamily:"Arial, Helvetica, sans-serif"}}></h1>
          <h1 className="text-4xl md:text-7xl text-white mb-8 tracking-tighter  leading-none">
              Get In Touch.
            </h1>
            <div className="h-1 w-20 bg-[#22c55e] my-8 mx-auto" />
        </div>
        </motion.div>
        </div>
      </section>

      {/* 2. CONTACT CONTENT AREA - py-16 on Mobile */}
      <section className="relative z-30  py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* LEFT: CONTACT INFO - Text Black */}
          <div className="lg:col-span-5 space-y-12 text-left">
            <div>
              <h2 className="text-4xl md:text-7xl font-bold text-black">Corporate <br /> <span className="text-[#22C55E]">Headquarters</span></h2>
              <div className="w-16 h-1.5 bg-[#22C55E] mb-8"></div>
              <p className="text-black leading-relaxed max-w-sm">
                Have questions about our upcoming projects or investment opportunities? Reach out to our dedicated support team.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: <MapPin />,
                  title: "Address",
                  content: (
                    <>
                      D-No: 49, 24-26, Shankaramatam Road,<br />
                      Beside UK Parlour<br />
                      Visakhapatnam
                    </>
                  )
                },
                { icon: <Phone />, title: "Call Us", content: "+91 040-4400033" },
                { icon: <Mail />, title: "Email", content: "info@mangalreality.com" },
                // { icon: <Clock />, title: "Hours", content: "Mon - Sat: 9:00 AM - 7:00 PM" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-black group-hover:bg-[#22C55E] group-hover:text-white group-hover:border-[#22C55E] transition-all shrink-0">
                    {React.cloneElement(item.icon, { size: 20 })}
                  </div>
                  <div>
                    <h4 className="text-[12px] tracking-widest text-black mb-1">{item.title}</h4>
                    {/* Changed p to div to support the multi-line React Fragment */}
                    <div className="text-lg text-black leading-snug font-medium">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-stone-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-[#22C55E]"></div>

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold  tracking-widest text-black ml-1">Full Name </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-stone-50 p-4 rounded-xl outline-none border-b-2 border-transparent focus:border-[#22c55e] transition-all text-black"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold  tracking-widest text-black ml-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-stone-50 p-4 rounded-xl outline-none border-b-2 border-transparent focus:border-[#22c55e] transition-all text-black"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-bold  tracking-widest text-black ml-1">Email Address </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-stone-50 p-4 rounded-xl outline-none border-b-2 border-transparent focus:border-[#22c55e] transition-all text-black"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-bold  tracking-widest text-black ml-1">Your Query</label>
                  <textarea
                    rows="4"
                    placeholder="Your Query"
                    className="w-full bg-stone-50 p-4 rounded-xl outline-none border-b-2 border-transparent focus:border-[#22c55e] transition-all resize-none text-black"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <MangalButton text="Send Inquiry" type="submit" />
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MAP SECTION - Full Width */}
      <section className="h-[400px] w-full bg-stone-200">
        <iframe
          title="Mangal Realty Location"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.74550742133!2d83.3323!3d17.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQzJzQ4LjAiTiA4M8KwMTknNTYuMyJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* 4. GLOBAL SUPPORT FOOTER */}
      {/* <footer className="py-16 lg:py-24 bg-[#0a1a10] text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <Headphones size={48} className="text-[#22C55E] mx-auto mb-8" />
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6">Expert <br /> <span className="text-[#22C55E]">Consultation</span></h2>
          <p className="text-stone-400 mb-12  tracking-[0.3em] text-[10px] font-bold">Available for NRIs and International Stakeholders</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="px-10 py-5 border border-white/20 rounded-sm hover:bg-white hover:text-black transition-all cursor-pointer font-bold  text-[10px] tracking-widest flex items-center justify-center gap-2">
              <Globe size={14} /> WhatsApp Support
            </div>
            <div className="px-10 py-5 border border-white/20 rounded-sm hover:bg-white hover:text-black transition-all cursor-pointer font-bold text-[10px] tracking-widest flex items-center justify-center gap-2">
              <MessageSquare size={14} /> Request Callback
            </div>
          </div>
        </div>
      </footer> */}
    </main>
  );
}