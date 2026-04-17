"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Leaf,
  ShieldCheck,
  Globe,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Home,
  ArrowUpRight,
  Linkedin,
} from "lucide-react";

const brandGreen = "#22C55E";

// --- COUNTER COMPONENT ---
const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const strategicPartners = [
  {
    name: "Hemang Choudhary",
    role: "Managing Director",
    description: [
      "Hemang Choudhary is currently positioned as the Managing Director of Mangal Realty, India's No. 1 real estate developer that is totally redefining plotted developments across India. Guided by a strong sense of the ethos of sustainable life, the vision of mangal realty under the leadership of Hemang has a futuristic outlook.",
      "With over five years of experience in the plywood industry and real estate sector, Hemang brings a combination of experience and enthusiasm to any business that he chooses to venture into. His guidance and leadership, Mangal Realty has created a voice for itself in the competitive business landscape of India.",
      "Education & Journey",
      "BBA from GITAM University (2024). Currently pursuing an MBA in Family Business Management at SP Jain School of Global Management (expected 2026).",
      "**Creating innovation with eco-conscious thinking to shape the future of sustainable luxury real estate.**",
      "Managing Director, Mangal Realty  fueling its growth as India's No.1 eco-luxury real estate.",
      "Director, Pando Ply (since 2023)  managing operations in many sectors, including manufacturing and realty.",
      "Currently, pursuing a futuristic program in Family Business Management at SP Jain School of Global Management, one of Asia's premier programs.",
      "Established Mangal Realty as a market benchmark in sustainable, eco-friendly plotted developments in India.",
    ],
    href: "https://mangalrealty.com/",
    linkedin: "https://www.linkedin.com/in/hemang-choudhary/",
    icon: Briefcase,
  },
];

export default function MangalLeadership() {
  return (
    <main
      className="relative bg-white font-medium"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {/* SECTION 1: HERO */}
      <section className="relative h-[72vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          alt="Banner"
          className="absolute z-10 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 z-15 bg-black/30"></div>
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative z-10 text-center text-white px-6">
              <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-sm font-bold tracking-[0.2em]">
                <a
                  href="/"
                  className="hover:text-green-400 flex items-center gap-1 transition-colors"
                >
                  <Home size={12} /> Home
                </a>
                <ChevronRight size={12} className="opacity-50" />
                <span className="text-[#22c55e]">About Us</span>
              </nav>
              <h2 className="text-4xl md:text-6xl mb-10 font-bold tracking-tighter leading-none">
                Our Leadership
              </h2>
            </div>
            <div className="h-1 w-20 bg-[#22c55e] mx-auto mb-8" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: STRATEGIC PARTNERS — TEXT ONLY */}
      <section className="py-24 mt-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-40">
          {strategicPartners.map((partner, index) => (
            <div key={index} className="flex flex-col gap-16 items-start">

              {/* DESCRIPTION COLUMN ONLY */}
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter mb-2">
                    {partner.name}
                  </h2>
                  <p
                    className="text-lg md:text-xl font-bold tracking-widest mb-10"
                    style={{ color: brandGreen }}
                  >
                    {partner.role}
                  </p>

                  <div className="space-y-4 text-stone-600">
                    {partner.description.map((para, pIdx) => {
                      if (para.startsWith("**")) {
                        return (
                          <p
                            key={pIdx}
                            className="text-xl md:text-2xl font-bold text-stone-900 pt-6 pb-2 leading-tight"
                          >
                            {para.replace(/\*\*/g, "")}
                          </p>
                        );
                      }
                      return (
                        <p key={pIdx} className="text-lg leading-relaxed pl-2">
                          {para}
                        </p>
                      );
                    })}
                  </div>

                  <div className="mt-12 pb-10 border-b border-stone-200 flex flex-wrap items-center gap-8">
                    <a
                      href={partner.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#0A66C2] font-bold tracking-widest text-[10px] border border-[#0A66C2]/20 px-4 py-2 rounded-md hover:bg-[#0A66C2] hover:text-white transition-all"
                    >
                      <Linkedin size={14} fill="currentColor" /> Connect on LinkedIn
                    </a>
                  </div>
                </motion.div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* SECTION: GOVERNANCE */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-stone-900 skew-y-3 origin-right translate-y-20"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tighter leading-none mb-6">
              Built on Values <br />
              <span style={{ color: brandGreen }}>Handed Over with Pride</span>
            </h2>
            <p className="text-stone-400 text-lg mb-8">
              At Mangal Realty, integrity is a practice. Mangal Realty, we make
              sure that faith is never misplaced. From the first blueprint to
              the final handover, we operate with a governance-first mindset
              that keeps our homebuyers informed, involved, and confident at
              every step of their journey.
            </p>
            <div className="space-y-4">
              {[
                "Sourced with Integrity",
                "Future-Ready Construction",
                "No Delays in Possession",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center text-white font-bold tracking-widest text-xs"
                >
                  <ChevronRight
                    size={16}
                    className="mr-2"
                    style={{ color: brandGreen }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10">
            <div className="grid grid-cols-1 gap-8">
              <div
                className="border-l-2 pl-6"
                style={{ borderColor: brandGreen }}
              >
                <h4 className="text-white font-bold tracking-widest text-sm">
                  Our Mission
                </h4>
                <p className="text-stone-300 text-sm mt-2">
                  To transform communities where every family thrives, where
                  children grow surrounded by nature's healing embrace.
                </p>
              </div>
              <div
                className="border-l-2 pl-6"
                style={{ borderColor: brandGreen }}
              >
                <h4 className="text-white font-bold tracking-widest text-sm">
                  Our Philosophy
                </h4>
                <p className="text-stone-300 text-sm mt-2">
                  A home is the most personal investment you'll ever make. We
                  don't measure success in units sold. We measure it in families
                  settled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PHILOSOPHY */}
      <section className="py-24 px-6 bg-white overflow-hidden border-t border-stone-100">
        <div className="max-w-5xl mx-auto text-center">
          <Leaf
            className="mx-auto mb-4"
            size={40}
            style={{ color: brandGreen }}
          />
          <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tighter">
            The Mangal Realty Belief
          </h2>
          <div className="mt-10">
            <p className="text-black text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto">
              "Build right. Deliver on time. Treat people well. That's not our
              tagline, it's how we show up, every single day."
            </p>
            <div className="flex flex-col items-center">
              <div className="h-1 w-20 bg-[#22c55e] mx-auto rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}