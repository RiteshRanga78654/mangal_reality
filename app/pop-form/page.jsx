"use client";
import { useState } from "react";
import Image from "next/image";

const defaultForm = {
  name: "",
  mobile: "",
  email: "",
  city: "",
  message: "",
  url: "https://www.mangalrealty.com/",
  toEmail: "aniket.thakur@ireedindia.com",
};

export default function ContactPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
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

  const handleClose = () => {
    setFormData(defaultForm);
    setStatus(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/60 px-4 pb-[12vh] sm:items-center sm:pb-0 sm:pt-[12vh]"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="relative w-full max-w-[600px] bg-white shadow-2xl overflow-hidden animate-popIn flex flex-row">

        {/* ── LEFT — FORM PANEL ── */}
        <div className="flex flex-col w-[300px] shrink-0">

          {/* Accent line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-[#22C55E] via-[#22C55E] to-[#0a1a10]" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-2.5 right-2.5 z-10 w-6 h-6 rounded-full border border-stone-300 bg-white flex items-center justify-center text-stone-400 hover:border-[#0a1a10] hover:text-[#0a1a10] transition text-[10px] cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Header */}
          <div className="text-center border-b border-stone-100">
            <div className="flex justify-center px-3">
              <Image
                src="/assets/images/mangal-realty-logo-black.png"
                alt="Mangal Realty"
                width={300}
                height={90}
                className="object-contain w-full h-auto max-h-24"
              />
            </div>
            <div className="w-6 h-[1.5px] bg-[#22C55E] mx-auto mt-0.5" />
            <div className="pt-1 pb-2">
              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-[13px] font-bold tracking-wider text-[#22C55E] leading-none"
              >
                GET IN TOUCH WITH US
              </h2>
            </div>
          </div>

          {/* ── SUCCESS STATE ── */}
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center gap-2 px-5 py-7 text-center">
              <div className="w-9 h-9 border-2 border-[#22C55E] flex items-center justify-center text-[#22C55E] text-lg">
                ✓
              </div>
              <h3
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-[17px] font-bold text-[#0a1a10]"
              >
                Thank You!
              </h3>
              <p className="text-[9px] text-stone-400 max-w-[150px]">
                Our team will contact you shortly.
              </p>
              <button
                onClick={handleClose}
                className="group relative cursor-pointer mt-1 px-8 py-2 text-white font-bold tracking-widest text-[8px] uppercase overflow-hidden"
              >
                <span className="relative z-10">CLOSE</span>
                <div className="absolute inset-0 bg-black" />
                <div className="absolute inset-0 bg-[#22C55E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </button>
            </div>
          ) : (

            /* ── FORM ── */
            <form onSubmit={handleSubmit} className="flex flex-col gap-1.5 px-4 py-2.5">

              {status === "error" && (
                <div className="border border-red-200 bg-red-50 px-2.5 py-1 text-[9px] text-red-700">
                  Something went wrong. Please try again.
                </div>
              )}

              {/* Full Name */}
              <div className="flex flex-col gap-0.5">
                <label className="text-[7.5px] font-semibold tracking-[0.15em] uppercase text-stone-400">
                  Full Name <span className="text-[#22C55E]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="border border-stone-200 px-2.5 py-1.5 text-[11px] text-stone-800 outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/10 placeholder:text-stone-300 transition"
                />
              </div>

              {/* Mobile */}
              <div className="flex flex-col gap-0.5">
                <label className="text-[7.5px] font-semibold tracking-[0.15em] uppercase text-stone-400">
                  Mobile No <span className="text-[#22C55E]">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="border border-stone-200 px-2.5 py-1.5 text-[11px] text-stone-800 outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/10 placeholder:text-stone-300 transition"
                />
              </div>

              {/* Email + City */}
              <div className="grid grid-cols-2 gap-1.5">
                <div className="flex flex-col gap-0.5">
                  <label className="text-[7.5px] font-semibold tracking-[0.15em] uppercase text-stone-400">
                    Email ID
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border border-stone-200 px-2.5 py-1.5 text-[11px] text-stone-800 outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/10 placeholder:text-stone-300 transition"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <label className="text-[7.5px] font-semibold tracking-[0.15em] uppercase text-stone-400">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="border border-stone-200 px-2.5 py-1.5 text-[11px] text-stone-800 outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/10 placeholder:text-stone-300 transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-0.5">
                <label className="text-[7.5px] font-semibold tracking-[0.15em] uppercase text-stone-400">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific requirement..."
                  rows={2}
                  className="resize-none border border-stone-200 px-2.5 py-1.5 text-[11px] text-stone-800 outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/10 placeholder:text-stone-300 transition"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group relative cursor-pointer w-full py-2.5 text-white font-bold tracking-[0.22em] text-[8.5px] uppercase overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed mt-0.5"
              >
                <span className="relative z-10">
                  {loading ? "Submitting..." : "SUBMIT QUERY →"}
                </span>
                <div className="absolute inset-0 bg-[#0A1A10]" />
                <div className="absolute inset-0 bg-[#22C55E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </button>

              {/* <div className="text-[9px] text-stone-400 mt-1 text-center">
                We respect your privacy. Your information is safe with us.
              </div> */}
            </form>
          )}
        </div>

        {/* ── RIGHT — FAMILY IMAGE PANEL (hidden on mobile) ── */}
        <div className="hidden sm:flex relative w-[300px] shrink-0 flex-col overflow-hidden">

          {/* Accent line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-[#22C55E] via-[#22C55E] to-[#0a1a10]" />

          {/* Full-height image */}
          <div className="relative flex-1">
            <Image
              src="/assets/images/famili-img1.jpeg"
              alt="Happy family in their new home"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Dark gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a10]/70 via-transparent to-transparent" />

            {/* Tagline */}
            <div className="absolute bottom-4 left-0 right-0 px-4 text-center">
              <p
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-white text-[13px] font-semibold leading-snug drop-shadow"
              >
                Creating Value, Realizing Dreams
              </p>
              <div className="w-5 h-[1.5px] bg-[#22C55E] mx-auto mt-1" />
              <p className="text-white/70 text-[8px] tracking-widest uppercase mt-1">
               India's No.1 Eco-Luxury Real Estate Developer
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}