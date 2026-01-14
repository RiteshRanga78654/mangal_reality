"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Leaf, ShieldCheck, Globe, Users, Award, ChevronRight } from 'lucide-react';

const brandGreen = "#22C55E";

// --- NEW COUNTER COMPONENT ---
const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);
  
  // Clean the string (e.g., "150+" -> 150)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000; // 2 seconds
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

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const leaders = [
  {
    name: 'Mr. Rajesh Mangal',
    role: 'Founder & Chairman',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    description: 'A visionary with over 30 years in the real estate sector, shaping the skyline with integrity and excellence.'
  },
  {
    name: 'Sanjay Mangal',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    description: 'Leading the digital transformation and sustainable development initiatives across our luxury portfolio.'
  }
];

const management = [
  { name: 'Anita Desai', role: 'Head of Architecture', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Vikram Mehta', role: 'VP - Operations', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Sneha Kapoor', role: 'Chief Legal Officer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
];

const stats = [
  { label: 'Years of Legacy', value: '30+', icon: Award },
  { label: 'Projects Delivered', value: '150+', icon: ShieldCheck },
  { label: 'Happy Families', value: '5000+', icon: Users },
  { label: 'Square Ft. Developed', value: '12M+', icon: Globe },
];

export default function MangalLeadership() {
  return (
    <main className="relative bg-white font-sans">
      
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
            <h1 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-tighter">
              Our Leadership
            </h1>
            <div className="w-24 h-1 mx-auto mt-4" style={{ backgroundColor: brandGreen }}></div>
            <p className="text-white text-base md:text-lg leading-relaxed mt-6 font-medium max-w-2xl mx-auto drop-shadow-md">
               Our leadership combines decades of traditional wisdom with a modern approach to urban living and commercial excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* UPDATED SECTION: IMPACT NUMBERS WITH COUNTER & BLACK ICONS */}
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
              {/* Icon color changed to Black */}
              <stat.icon size={28} className="mb-3 text-black" />
              <h4 className="text-3xl font-black text-stone-900">
                <Counter value={stat.value} />
              </h4>
              <p className="text-[10px] uppercase tracking-widest font-bold text-stone-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 2: FOUNDERS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5] rounded-lg shadow-lg">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <div className="w-full">
                    <h3 className="text-white text-xl font-bold">{leader.name}</h3>
                    <p className="text-white/70 text-xs mt-1 uppercase tracking-widest" style={{ color: brandGreen }}>{leader.role}</p>
                    <p className="text-white/80 text-sm mt-4 leading-relaxed font-light line-clamp-3">
                      {leader.description}
                    </p>
                  </div>
                </div>
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
            <h2 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-6">
              A Legacy Built on <br /><span style={{ color: brandGreen }}>Unwavering Trust</span>
            </h2>
            <p className="text-stone-400 text-lg mb-8">
              Under our management's guidance, Mangal Group follows a strict corporate governance framework that ensures transparency at every stage of construction and delivery.
            </p>
            <div className="space-y-4">
              {['Ethical Sourcing', 'Sustainable Engineering', 'Timely Possession'].map((item, i) => (
                <div key={i} className="flex items-center text-white font-bold tracking-widest text-xs uppercase">
                  <ChevronRight size={16} className="mr-2" style={{ color: brandGreen }} /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10">
             <div className="grid grid-cols-1 gap-8">
                <div className="border-l-2 pl-6" style={{ borderColor: brandGreen }}>
                   <h4 className="text-white font-bold uppercase tracking-widest text-sm">Our Mission</h4>
                   <p className="text-stone-300 text-sm mt-2">To redefine luxury through architectural innovation and carbon-neutral construction practices by 2030.</p>
                </div>
                <div className="border-l-2 pl-6" style={{ borderColor: brandGreen }}>
                   <h4 className="text-white font-bold uppercase tracking-widest text-sm">Our Philosophy</h4>
                   <p className="text-stone-300 text-sm mt-2">Customer centricity isn't a department; it's the very foundation of every brick we lay.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY MANAGEMENT */}
      <section className="py-24 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 text-center md:text-left">
            <h2 className="text-black text-4xl md:text-6xl font-bold tracking-tighter uppercase">Key Management</h2>
            <div className="w-32 h-1 mt-4 mx-auto md:mx-0" style={{ backgroundColor: brandGreen }}></div>
          </header>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {management.map((person, idx) => (
              <div key={idx} className="p-8 bg-white border border-stone-200 rounded-sm flex items-center space-x-6 group hover:shadow-xl transition-all duration-500">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-stone-100 shadow-md">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-stone-800 uppercase text-xs tracking-widest leading-tight">{person.name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest mt-1" style={{ color: brandGreen }}>{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PHILOSOPHY */}
      <section className="py-24 px-6 bg-white overflow-hidden border-t border-stone-100">
        <div className="max-w-5xl mx-auto text-center">
          <Leaf className="mx-auto mb-4" size={40} style={{ color: brandGreen }} />
          <h2 className="text-4xl md:text-6xl font-bold text-black uppercase tracking-tighter">The Mangal Ethos</h2>
          
          <div className="mt-10">
            <p className="text-black text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-3xl mx-auto italic">
              "Real estate is not just about buildings; it is about building trust and creating spaces where life thrives."
            </p>
            <div className="flex flex-col items-center">
               <div className="w-8 h-1" style={{ backgroundColor: brandGreen }}></div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}