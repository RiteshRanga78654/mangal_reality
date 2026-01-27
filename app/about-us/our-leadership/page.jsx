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
  ArrowUpRight,Linkedin
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

// const leaders = [
//   {
//     name: 'Mr. Rajesh Mangal',
//     role: 'Founder & Chairman',
//     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
//     description: 'A visionary with over 30 years in the real estate sector, shaping the skyline with integrity and excellence.'
//   },
//   {
//     name: 'Sanjay Mangal',
//     role: 'Managing Director',
//     image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
//     description: 'Leading the digital transformation and sustainable development initiatives across our luxury portfolio.'
//   }
// ];
const strategicPartners = [
  {
    name: "Rajesh Mangal",
    role: "Founder & Chairman",
    description: [
      "Bhaswar Paul is a highly respected professional in the burgeoning Indian real estate sector. He is known for his strategic sales leadership, strong interpersonal skills, ability to build teams and nurture relationships with clients including banks, multinational corporations, diplomats, and NRI investors. His experience in the industry spans over two decades in business development, project planning, sales, marketing, customer hospitality, team building and sales training.",
      "Bhaswar has worked with leading Indian real estate developers including M3M India, Central Park Developers and IREO Branded Residences. His career includes senior leadership roles in domestic and international sales to establish a strong network of global clients across Middle East, South East Asia, UK and USA.",
      "As a strategic project head, he developed business strategies and managed high-net-worth individual (HNIs) portfolios. He is the Founder and CEO of IREED Academy India Private Limited, which focuses on real estate career program, corporate training, soft skill development and sales training. His founding of IREED Academy reflects his commitment to addressing the skill gap in the real estate workforce through comprehensive training programs.",
    ],
    image: "/assets/images/rajesh.jpg",
    href: "https://www.ireedindia.com/",
    linkedin: "https://www.linkedin.com/in/bhaswarpaul/",
    icon: GraduationCap,
  },
  {
    name: "Sanjay Mangal",
    role: "Managing Director",
    description: [
      "Kamaldeep Prajapati is a prolific business professional and trainer, helping various up and coming as well as invaluable brands with his expertise across luxury sales, high octane corporate event facilitation, and operations management. In his glorious 5-year stint, he has forged strategic partnerships with more than 50 institutions across India.",
      "He is determined to generate a skilled workforce contributing to India's real estate sector, which is evaluated to reach a staggering USD 1 Trillion mark by 2030. He has also trained 2000+ students across his domains of excellence, a testimony to his ability to engage with diverse audience groups.",
      "Currently, as a Business Head (Up-Country Expansions) and Trainer at IREED Academy, he is determined about shaping the future of Real Estate Education in India. He is passionate about driving magnificent career opportunities for younger generations.",
    ],
    image: "/assets/images/sanjay.jpg",
    href: "https://www.ireedindia.com/",
    linkedin: "https://www.linkedin.com/in/kamaldeep01/",
    icon: Briefcase,
  },
   {
    name: "Vebhore Bagria",
    role: "Chief Financial Officer",
    description: [
      "Bhaswar Paul is a highly respected professional in the burgeoning Indian real estate sector. He is known for his strategic sales leadership, strong interpersonal skills, ability to build teams and nurture relationships with clients including banks, multinational corporations, diplomats, and NRI investors. His experience in the industry spans over two decades in business development, project planning, sales, marketing, customer hospitality, team building and sales training.",
      "Bhaswar has worked with leading Indian real estate developers including M3M India, Central Park Developers and IREO Branded Residences. His career includes senior leadership roles in domestic and international sales to establish a strong network of global clients across Middle East, South East Asia, UK and USA.",
      "As a strategic project head, he developed business strategies and managed high-net-worth individual (HNIs) portfolios. He is the Founder and CEO of IREED Academy India Private Limited, which focuses on real estate career program, corporate training, soft skill development and sales training. His founding of IREED Academy reflects his commitment to addressing the skill gap in the real estate workforce through comprehensive training programs.",
    ],
    image: "/assets/images/vebhore.jpg",
    href: "https://www.ireedindia.com/",
    linkedin: "https://www.linkedin.com/in/bhaswarpaul/",
    icon: GraduationCap,
  },
];

const management = [
  {
    name: "Anita Desai",
    role: "Head of Architecture",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Vikram Mehta",
    role: "VP - Operations",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sneha Kapoor",
    role: "Chief Legal Officer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
  },
];

const stats = [
  { label: "Years of Legacy", value: "30+", icon: Award },
  { label: "Projects Delivered", value: "150+", icon: ShieldCheck },
  { label: "Happy Families", value: "5000+", icon: Users },
  { label: "Square Ft. Developed", value: "12M+", icon: Globe },
];

export default function MangalLeadership() {
  return (
    <main
      className="relative bg-white font-medium"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {/* SECTION 1: HERO */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          alt="Banner"
          className="absolute z-10 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 z-15 bg-black/30"></div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter">
              Our Leadership
            </h1>
            <div
              className="w-24 h-1 mx-auto mt-4"
              style={{ backgroundColor: brandGreen }}
            ></div>
            <p className="text-white text-base md:text-lg leading-relaxed mt-6 max-w-2xl mx-auto drop-shadow-md">
              Our leadership combines decades of traditional wisdom with a
              modern approach to urban living and commercial excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="relative z-30 -mt-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 shadow-2xl rounded-sm border-b-4 flex flex-col items-center text-center"
              style={{ borderBottomColor: brandGreen }}
            >
              <stat.icon size={28} className="mb-3 text-black" />
              <h4 className="text-3xl font-black text-stone-900">
                <Counter value={stat.value} />
              </h4>
              <p className="text-[10px] tracking-widest font-bold text-stone-500 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 2: FOUNDERS */}
      {/* <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-4/5 rounded-lg shadow-lg">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <div className="w-full">
                    <h3 className="text-white text-xl font-bold">{leader.name}</h3>
                    <p className="text-xs mt-1 tracking-widest" style={{ color: brandGreen }}>{leader.role}</p>
                    <p className="text-white/80 text-sm mt-4 leading-relaxed line-clamp-3">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
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
                      className="w-full h-full object-cover  transition-all duration-1000 transform group-hover:scale-110"
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

                  <div
                    className="absolute -bottom-6 -left-6 bg-stone-900 text-white p-6 rounded-lg hidden md:block shadow-2xl border-l-4"
                    style={{ borderColor: brandGreen }}
                  >
                    <partner.icon size={24} className="mb-2" />
                    <p className="text-[10px]  tracking-widest font-bold opacity-60">
                      Strategic Lead
                    </p>
                    <p className="text-sm font-bold">{partner.name}</p>
                  </div>
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
                  <h2 className="text-4xl md:text-7xl font-bold text-stone-900  tracking-tighter mb-2">
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

                  <div className="mt-12 pb-10 border-b border-stone-200 flex flex-wrap items-center gap-8">
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

      {/* SECTION: GOVERNANCE */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-stone-900 skew-y-3 origin-right translate-y-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-white text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              A Legacy Built on <br />
              <span style={{ color: brandGreen }}>Unwavering Trust</span>
            </h2>
            <p className="text-stone-400 text-lg mb-8">
              Under our management's guidance, Mangal Group follows a strict
              corporate governance framework that ensures transparency at every
              stage of construction and delivery.
            </p>
            <div className="space-y-4">
              {[
                "Ethical Sourcing",
                "Sustainable Engineering",
                "Timely Possession",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center text-white font-bold tracking-widest text-xs "
                >
                  <ChevronRight
                    size={16}
                    className="mr-2"
                    style={{ color: brandGreen }}
                  />{" "}
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
                  To redefine luxury through architectural innovation and
                  carbon-neutral construction practices by 2030.
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
                  Customer centricity isn't a department; it's the very
                  foundation of every brick we lay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY MANAGEMENT */}
      {/* <section className="py-24 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 text-center mx-auto md:text-center">
            <h2 className="text-black text-4xl md:text-7xl font-bold tracking-tighter ">Key Management</h2>
            <div className="w-32 h-1 mt-4 mx-auto " style={{ backgroundColor: brandGreen }}></div>
          </header>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {management.map((person, idx) => (
              <div key={idx} className="p-8 bg-white border border-stone-200 rounded-sm flex items-center space-x-6 group hover:shadow-xl transition-all duration-500">
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-stone-100 shadow-md">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-stone-800 text-[16px] tracking-widest leading-tight">{person.name}</p>
                  <p className="text-[12px] font-bold tracking-widest mt-1" style={{ color: brandGreen }}>{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* SECTION 4: PHILOSOPHY */}
      <section className="py-24 px-6 bg-white overflow-hidden border-t border-stone-100">
        <div className="max-w-5xl mx-auto text-center">
          <Leaf
            className="mx-auto mb-4"
            size={40}
            style={{ color: brandGreen }}
          />
          <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tighter">
            The Mangal Ethos
          </h2>

          <div className="mt-10">
            <p className="text-black text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto italic">
              "Real estate is not just about buildings; it is about building
              trust and creating spaces where life thrives."
            </p>
            <div className="flex flex-col items-center">
              <div
                className="w-8 h-1"
                style={{ backgroundColor: brandGreen }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
