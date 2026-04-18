"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { Home, ChevronRight } from "lucide-react";
import Footer from "../layout/Footer";
const brandGreen = "#22C55E";


const MangalButton = ({ text, type = "button", className = "", loading = false }) => (
  <button
    type={type}
    disabled={loading}
    className={`group relative cursor-pointer px-10 py-5 text-black font-bold tracking-[0.2em] text-[10px] md:text-xs overflow-hidden transition-all duration-300 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
  >
    <span className="relative z-10 flex items-center justify-center gap-3 transition-colors duration-500 group-hover:text-white">
      {loading ? "Submitting..." : text} {!loading && <Send size={16} />}
    </span>
    <div className="absolute inset-1 bg-[#22C55E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-0"></div>
    <div className="absolute inset-1 border border-[#22C55E]"></div>
  </button>
);

const defaultForm = {
  name: "",
  mobile: "",
  email: "",
  city: "",
  message: "",
  url: "https://www.mangalrealty.com/contact-us",
  toEmail: "info@mangalrealty.com",
};

export default function ContactUs() {
  const [formData, setFormData] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile || !formData.email) {
      setStatus("validation");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // Same two API calls as ContactPopup
      await fetch("https://crm-service.mangalrealty.com/v1/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      await fetch("https://crm-service.mangalrealty.com/v1/create-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          emailId: formData.email,
          leadSourceId: "69d9f5c336de56402f1aeb83",
          url: formData.url,
          message: formData.message,
          toEmail: formData.toEmail,
        }),
      });

      setStatus("success");
      setFormData(defaultForm);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="bg-[#FAF9F6] min-h-screen font-medium antialiased text-black"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {/* 1. HERO SECTION */}
      <section className="relative h-[72vh] flex items-center bg-[#0a1a10] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920"
            className="w-full h-full object-cover"
            alt="Office"
          />
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
                <a href="/" className="hover:text-[#22c55e] flex items-center gap-1">
                  <Home size={12} />
                  Home
                </a>
                <ChevronRight size={12} className="opacity-50" />
                <span className="text-emerald-400">Contact Us</span>
              </nav>
              <h1 className="text-4xl md:text-6xl text-white mb-8 tracking-tighter font-bold leading-none">
                Get In Touch.
              </h1>
              <div className="h-1 w-20 bg-[#22c55e] my-8 mx-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT CONTENT AREA */}
      <section className="relative z-30 py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* LEFT: CONTACT INFO */}
          <div className="lg:col-span-5 space-y-12 text-left">
            <div>
              <h2 className="text-4xl md:text-7xl font-bold text-black">
                Corporate <br /> <span className="text-[#22C55E]">Headquarters</span>
              </h2>
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
                      D-No: 49-24-66, 1st Floor,<br /> Shankaramatam Road,<br />
                      Beside UK Parlour<br />
                      Visakhapatnam – 530020
                    </>
                  )
                },
                { icon: <Phone />, title: "Call Us", content: "+91 69000-48000" },
                { icon: <Mail />, title: "Email", content: "info@mangalrealty.com" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-black group-hover:bg-[#22C55E] group-hover:text-white group-hover:border-[#22C55E] transition-all shrink-0">
                    {React.cloneElement(item.icon, { size: 20 })}
                  </div>
                  <div>
                    <h4 className="text-[12px] tracking-widest text-black mb-1">{item.title}</h4>
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

              {/* SUCCESS STATE */}
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <div className="w-16 h-16 border-2 border-[#22C55E] flex items-center justify-center text-[#22C55E] text-3xl rounded-full">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a1a10]">Thank You!</h3>
                  <p className="text-stone-500 text-sm max-w-xs">
                    Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus(null)}
                    className="group relative cursor-pointer mt-2 px-10 py-4 text-white font-bold tracking-[0.2em] text-[10px] overflow-hidden"
                  >
                    <span className="relative z-10">SEND ANOTHER</span>
                    <div className="absolute inset-0 bg-[#0A1A10]" />
                    <div className="absolute inset-0 bg-[#22C55E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">

                  {/* Validation / Error banners */}
                  {status === "validation" && (
                    <div className="border border-yellow-300 bg-yellow-50 px-4 py-2.5 text-[11px] text-yellow-800 rounded">
                      Please fill in all mandatory fields (Name, Mobile, Email).
                    </div>
                  )}
                  {status === "error" && (
                    <div className="border border-red-200 bg-red-50 px-4 py-2.5 text-[11px] text-red-700 rounded">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  {/* Row 1: Name + Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold tracking-widest text-black ml-1">
                        Full Name <span className="text-[#22C55E]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="w-full bg-stone-50 p-4 rounded-xl outline-none border-b-2 border-transparent focus:border-[#22c55e] transition-all text-black"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold tracking-widest text-black ml-1">
                        Mobile No <span className="text-[#22C55E]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="10-digit number"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        className="w-full bg-stone-50 p-4 rounded-xl outline-none border-b-2 border-transparent focus:border-[#22c55e] transition-all text-black"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2: Email + City */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold tracking-widest text-black ml-1">
                        Email Address <span className="text-[#22C55E]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full bg-stone-50 p-4 rounded-xl outline-none border-b-2 border-transparent focus:border-[#22c55e] transition-all text-black"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold tracking-widest text-black ml-1">City</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Your City"
                        className="w-full bg-stone-50 p-4 rounded-xl outline-none border-b-2 border-transparent focus:border-[#22c55e] transition-all text-black"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold tracking-widest text-black ml-1">Your Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Any specific requirement..."
                      className="w-full bg-stone-50 p-4 rounded-xl outline-none border-b-2 border-transparent focus:border-[#22c55e] transition-all resize-none text-black"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <MangalButton text="Send Inquiry" type="submit" loading={loading} />
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MAP SECTION */}
      <section className="h-[400px] w-full bg-stone-200">
        <iframe
          title="Mangal Realty Location"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.74550742133!2d83.3323!3d17.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQzJzQ4LjAiTiA4M8KwMTknNTYuMyJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
      <Footer />
    </main>
  );
}