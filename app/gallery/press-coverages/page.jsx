"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, ArrowUpRight, Calendar, Share2, ExternalLink, Filter,Home,ChevronRight } from 'lucide-react';

const brandGreen = "#22C55E";

const newsArticles = [
  {
    id: 1,
    category: "Corporate",
    title: "Mangal Realty Announces Strategic Expansion into Tier-2 Cities",
    source: "The Economic Times",
    date: "Oct 12, 2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    excerpt: "Redefining urban living, Mangal Realty sets its sights on burgeoning markets with a $500M investment plan...",
    link: "#"
  },
  {
    id: 2,
    category: "Award",
    title: "Recognized as 'Luxury Developer of the Year' at Global Real Estate Summit",
    source: "Financial Express",
    date: "Sept 28, 2025",
    image: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?auto=format&fit=crop&q=80&w=1000",
    excerpt: "Excellence in design and timely delivery earns Mangal Realty top honors among international competitors...",
    link: "#"
  },
  {
    id: 3,
    category: "Sustainability",
    title: "Green Building Initiatives: How Mangal is Reducing Carbon Footprints",
    source: "Forbes India",
    date: "Aug 15, 2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    excerpt: "Integrating solar-active facades and rainwater harvesting in all upcoming premium luxury projects...",
    link: "#"
  },
  {
    id: 4,
    category: "Corporate",
    title: "Strategic Alliance with IREED Academy to Bridge Skill Gap",
    source: "Business Standard",
    date: "July 05, 2025",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
    excerpt: "A pioneering move to train over 2000 professionals for the $1 Trillion real estate economy...",
    link: "#"
  }
];

export default function PressCoverages() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Corporate', 'Award', 'Sustainability'];

  const filteredNews = filter === 'All' 
    ? newsArticles 
    : newsArticles.filter(item => item.category === filter);

  return (
    <main className="bg-white font-sans overflow-hidden">
      
      {/* 1. HERO SECTION - NEWSROOM STYLE */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1504711432869-efd597cdd0ef?auto=format&fit=crop&q=80&w=2000"
          alt="Press Banner"
          className="absolute z-10 w-full h-full object-cover opacity-40"
        />
        <div className="absolute "></div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className=""
          >
            {/* <span className="text-[10px] uppercase tracking-[0.5em] text-green-500 font-bold mb-6 block">Visual Assets & Media</span> */}
            {/* Standardized Heading: text-4xl to 7xl */}
            <div className="relative z-10 text-center text-white px-6">
            <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-sm font-bold tracking-[0.2em] ">
              <a href="/" className="hover:text-green-400 flex items-center gap-1 transition-colors">
                <Home size={12} /> Home
              </a>
              <ChevronRight size={12} className="opacity-50" />
              <span className="text-white">Gallery</span>
            </nav>
            {/* Standardized Heading: 4xl to 7xl */}
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter  leading-none">
               Press Coverages
            </h2>
            <div className="h-1 w-20 bg-[#22c55e] my-8 mx-auto" />
          </div>
          </motion.div>
        </div>

      </section>

      {/* 2. FILTER & NEWS GRID */}
      <section className="relative z-30 -mt-20 pt-8 pb-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-20 bg-stone-50 p-4 rounded-full border border-stone-100 shadow-sm w-fit mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat ? 'bg-black text-white' : 'text-stone-400 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ARTICLES GRID */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            <AnimatePresence mode='popLayout'>
              {filteredNews.map((article) => (
                <motion.article
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-pointer flex flex-col md:flex-row gap-8 bg-stone-50/50 p-6 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-stone-100"
                >
                  {/* Thumbnail */}
                  <div className="w-full md:w-2/5 aspect-square overflow-hidden rounded-xl">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-3/5 flex flex-col justify-between py-2">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white border border-stone-200 rounded-md" style={{ color: brandGreen }}>
                          {article.category}
                        </span>
                        <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest flex items-center gap-1">
                          <Calendar size={12} /> {article.date}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-black leading-tight mb-4 group-hover:text-green-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-stone-500 text-sm font-light line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-tighter text-stone-900 italic">
                        {article.source}
                      </span>
                      <div className="flex gap-4">
                         <Share2 size={18} className="text-stone-300 hover:text-black transition-colors" />
                         <ExternalLink size={18} className="text-stone-300 hover:text-green-600 transition-colors" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 3. MEDIA KIT SECTION */}
      <section className="py-24 bg-black text-white border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          <Newspaper size={48} className="mb-8" style={{ color: brandGreen }} />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Media & Press <span className="text-white ">Resources</span>
          </h2>
          <p className="text-stone-400 mb-12 font-light max-w-xl leading-relaxed">
            Download our official media kit including high-resolution logos, executive headshots, and project renders for press usage.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
             <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-stone-200 transition-all">
                Download Media Kit
             </button>
             <button className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-all">
                Contact PR Office
             </button>
          </div>
        </div>
      </section>

    </main>
  );
}