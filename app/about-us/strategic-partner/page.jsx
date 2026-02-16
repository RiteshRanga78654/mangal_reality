"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Briefcase, Linkedin, Home, ChevronRight } from "lucide-react";

const brandGreen = "#22C55E";

const strategicPartners = [
  {
    name: "Bhaswar Paul",
    role: "Founder & CEO, IREED India",
    description: [
      "Bhaswar Paul is a highly respected professional in the burgeoning Indian real estate sector. He is known for his strategic sales leadership, strong interpersonal skills, ability to build teams and nurture relationships with clients including banks, multinational corporations, diplomats, and NRI investors. His experience in the industry spans over two decades in business development, project planning, sales, marketing, customer hospitality, team building and sales training.",
      "Bhaswar has worked with leading Indian real estate developers including M3M India, Central Park Developers and IREO Branded Residences. His career includes senior leadership roles in domestic and international sales to establish a strong network of global clients across Middle East, South East Asia, UK and USA.",
      "As a strategic project head, he developed business strategies and managed high-net-worth individual (HNIs) portfolios. He is the Founder and CEO of IREED India India Private Limited, which focuses on real estate career program, corporate training, soft skill development and sales training.",
    ],
    image: "/assets/images/paul-img.webp",
    href: "https://www.ireedindia.com/",
    linkedin: "https://www.linkedin.com/in/bhaswarpaul/",
    icon: GraduationCap,
  },
  {
    name: "Kamaldeep Prajapati",
    role: "Business Head, IREED India",
    description: [
      "Kamaldeep Prajapati is a prolific business professional and trainer, helping various up and coming as well as invaluable brands with his expertise across luxury sales, high octane corporate event facilitation, and operations management. In his glorious 5-year stint, he has forged strategic partnerships with more than 50 institutions across India.",
      "He is determined to generate a skilled workforce contributing to India's real estate sector, which is evaluated to reach a staggering USD 1 Trillion mark by 2030. He has also trained 2000+ students across his domains of excellence, a testimony to his ability to engage with diverse audience groups.",
      "Currently, as a Business Head (Up-Country Expansions) and Trainer at IREED India, he is determined about shaping the future of Real Estate Education in India. He is passionate about driving magnificent career opportunities for younger generations.",
    ],
    image: "/assets/images/kamaldeep-profile.webp",
    href: "https://www.ireedindia.com/",
    linkedin: "https://www.linkedin.com/in/kamaldeep01/",
    icon: Briefcase,
  },
];

export default function StrategicPartners() {
  return (
    <main
      className="bg-white font-medium overflow-hidden"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {/* HERO SECTION */}
      <section className="relative h-[72vh] w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          alt="Strategic Alliances Banner"
          className="absolute z-10 w-full h-full object-cover opacity-50"
        />

        {/* Gradient for text pop */}
        <div className="absolute inset-0 z-15 bg-linear-to-t from-black via-black/20 to-transparent"></div>

        {/* <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mt-32 md:mt-48"
          >
            {/* Heading updated to text-4xl md:text-7xl */}
        {/* <h1 className="text-white text-4xl md:text-7xl font-bold  tracking-tighter leading-[0.85]">
              Strategic <br />
              <span className="text-stone-400">Collaborations</span>
            </h1>

            <div
              className="w-24 h-1.5 mx-auto mt-10"
              style={{ backgroundColor: brandGreen }}
            ></div>

            <p className="text-stone-200 text-base md:text-xl leading-relaxed mt-10 max-w-3xl mx-auto drop-shadow-2xl">
              Partnering with distinguished leaders to cultivate a $1 Trillion
              real estate ecosystem through academic rigor and professional
              excellence.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex flex-col items-center gap-4"
            >
              <div className="text-[10px]  tracking-[0.5em] text-white/40 font-bold">
                Scroll to explore
              </div>
              <div className="w-px h-12 bg-linear-to-b from-green-500 to-transparent opacity-50"></div>
            </motion.div>
          </motion.div>
        </div>  */}
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className=""
          >
            <div className="relative z-10 text-center text-white px-6">
              <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-sm font-bold tracking-[0.2em] ">
                <a
                  href="/"
                  className="hover:text-green-400 flex items-center gap-1 transition-colors"
                >
                  <Home size={12} /> Home
                </a>
                <ChevronRight size={12} className="opacity-50" />
               <span className="text-emerald-400">About Us</span>
              </nav>
              {/* Standardized Heading: 4xl to 7xl */}
              <h2 className="text-4xl md:text-6xl mb-10 font-bold tracking-tighter  leading-none">
                Strategic Partners
              </h2>
            </div>
             <div className="h-1 w-20 bg-[#22c55e] mx-auto mb-8" />
          </motion.div>
        </div>
      </section>

      {/* DETAILED PARTNERS SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-40">
          {strategicPartners.map((partner, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-start`}
            >
              {/* IMAGE COLUMN */}
              <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-xl shadow-2xl aspect-4/5"
                  >
                    <div className="absolute inset-0 z-20 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="bg-white p-5 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <ArrowUpRight size={28} style={{ color: brandGreen }} />
                      </div>
                    </div>
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                    />
                  </a>

                  <a
                    href={partner.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 z-30 bg-white p-2 rounded-lg shadow-lg text-[#0A66C2] hover:scale-110 transition-transform"
                  >
                    <Linkedin size={20} fill="currentColor" />
                  </a>

                  {/* <div
                    className="absolute -bottom-6 -left-6 bg-stone-900 text-white p-6 rounded-lg hidden md:block shadow-2xl border-l-4"
                    style={{ borderColor: brandGreen }}
                  >
                    <partner.icon size={24} className="mb-2" />
                    <p className="text-[10px]  tracking-widest font-bold opacity-60">
                      Strategic Lead
                    </p>
                    <p className="text-sm font-bold">{partner.name}</p>
                  </div> */}
                </motion.div>
              </div>

              {/* DESCRIPTION COLUMN */}
              <div className="w-full lg:w-7/12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Partner Name Heading updated to text-4xl md:text-7xl */}
                  <h2 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter mb-2">
                    {partner.name}
                  </h2>
                  <p
                    className="text-lg md:text-xl font-bold  tracking-widest mb-10"
                    style={{ color: brandGreen }}
                  >
                    {partner.role}
                  </p>

                  <div className="space-y-6 text-stone-600">
                    {partner.description.map((para, pIdx) => (
                      <p key={pIdx} className="text-lg leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="mb-12 pt-5 pb-10 border-b border-stone-200 flex flex-wrap items-center gap-8">
                    <a
                      href={partner.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#0A66C2] font-bold  tracking-widest text-[10px] border border-[#0A66C2]/20 px-4 py-2 rounded-md hover:bg-[#0A66C2] hover:text-white transition-all"
                    >
                      <Linkedin size={14} fill="currentColor" /> Connect on
                      LinkedIn
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-500/5 -skew-x-12 translate-x-32"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          {/* Final Heading updated to text-4xl md:text-7xl */}
          <h2 className="text-4xl md:text-6xl font-bold  tracking-tighter mb-8 leading-none">
            Driving the <span style={{ color: brandGreen }}>Future</span> of{" "}
            <br />
            Indian Real Estate
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* <button className="group relative cursor-pointer px-12 py-5 text-white font-bold  tracking-widest text-xs overflow-hidden">
              <span className="relative z-10">Our Methodology</span>
              <div className="absolute inset-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <div className="absolute inset-1 border border-green-600"></div>
            </button> */}
            <a
              href="https://www.ireedindia.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group relative cursor-pointer px-12 py-5 text-white font-bold  tracking-widest text-xs overflow-hidden">
                <span className="relative z-10">Contact Strategic Office</span>

                <div className="absolute inset-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>

                <div className="absolute inset-1 border border-green-600"></div>
              </button>
            </a>

          </div>
        </div>
      </section>
    </main>
  );
}
