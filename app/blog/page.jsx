"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronRight,
  Calendar,
  User,
  ArrowUpRight,
  Share2,
  Home,
  Clock,
} from "lucide-react";

// 1. DATA DEFINITIONS (Slug-based mapping)
const BLOG_CONTENT = {
  "vizag-2026": {
    id: 1,
    category: "Investment",
    title: "Visakhapatnam Real Estate Is the Smart Investment Choice in 2026",
    author: "Archita",
    date: "Jan 13, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1590001158193-790130009581?auto=format&fit=crop&w=1200",
    tags: ["Visakhapatnam", "Coastal Living", "Smart Investment"],
    quote: "Imagine waking up to the sound of waves and commuting to work without spending two hours in traffic. This is the new reality of Vizag.",
    content: `
      <p>Are you looking for the next big smart investment opportunity? The coastal city of Visakhapatnam is your call now to the next big opportunity to invest in...</p>
      <h3 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">The Infrastructure Story</h3>
      <p>The city is witnessing unprecedented development with the expansion of the Visakhapatnam Port...</p>
    `,
  },
  "future-real-estate": {
    id: 2,
    category: "Market Trends",
    title: "The Future of Real Estate Business: Opportunities You Can't Afford to Miss",
    author: "Archita",
    date: "Jan 13, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200",
    tags: ["Technology", "Sustainability", "Trends"],
    quote: "Luxury is no longer about the gold on the walls; it is about the air you breathe and the silence of your surroundings.",
    content: `
      <p>The property market is moving at a pace never before witnessed. Technology, demographics, and economies are creating unparalleled opportunities...</p>
      <h3 style="font-size: 22px; font-weight: bold; margin-top: 24px;">The Digital Revolution</h3>
      <p>Just five years ago, virtual tours of properties were the stuff of science fiction...</p>
    `,
  },
  "smart-solutions": {
    id: 3,
    category: "Investment",
    title: "Smart Investment Solutions: Real Estate and Strategic Planning",
    author: "Archita",
    date: "Jan 13, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200",
    tags: ["Wealth", "Tax Planning", "REITs"],
    quote: "Consistency is more important than cleverness. The mathematical fact of compounding rewards those who start today, not tomorrow.",
    content: `
      <p>All investors face challenges: scarcity of capital, overwhelming choices, and market volatility...</p>
      <h3 style="font-size: 22px; font-weight: bold; margin-top: 24px;">Micro-investing Solutions</h3>
      <p>Millions believe investing needs lakhs, delaying the process indefinitely...</p>
    `,
  },
};

const CATEGORIES = ["All", "Residential", "Commercial", "Investment", "Industry News"];

export default function MangalRealtyBlog() {
  const [activeSlug, setActiveSlug] = useState(null); // null = List view, "slug" = Detail view
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return Object.entries(BLOG_CONTENT).filter(([slug, post]) => {
      const matchesTab = activeTab === "All" || post.category === activeTab;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // Handler to open a blog post
  const handleOpenBlog = (slug) => {
    setActiveSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- DETAIL PAGE VIEW ---
  if (activeSlug && BLOG_CONTENT[activeSlug]) {
    const post = BLOG_CONTENT[activeSlug];
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white min-h-screen">
        {/* Header Navigation */}
        <div className="max-w-7xl mx-auto px-6 pt-12">
          <button 
            onClick={() => setActiveSlug(null)}
            className="flex items-center gap-2 text-[#22c55e] font-bold text-sm mb-8 hover:opacity-70 transition-opacity"
          >
            <Home size={16} /> Back to Corporate Journal
          </button>
          
          <div className="max-w-4xl">
            <span className="bg-[#22c55e]/10 text-[#22c55e] px-4 py-1.5 rounded-lg text-[10px] font-black tracking-widest mb-6 inline-block uppercase">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl text-[#22c55e] font-bold mb-8 tracking-tight leading-[1.1]">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold tracking-widest text-gray-400 mb-12 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-2">
                <User size={14} className="text-[#22c55e]" /> <span className="text-[#0a1a10]">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#22c55e]" /> <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#22c55e]" /> <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Image */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            <img src={post.image} alt="Banner" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Article Body */}
        <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-600 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
                <div className="my-12 p-8 md:p-10 bg-gray-50 rounded-[2rem] border-l-[8px] border-[#22c55e] italic">
                  <p className="text-xl md:text-2xl text-[#0a1a10] opacity-80">"{post.quote}"</p>
                </div>
              </article>
              <div className="mt-12 flex flex-wrap gap-3">
                {post.tags.map(tag => (
                  <span key={tag} className="px-5 py-2 bg-gray-50 text-[11px] font-bold tracking-widest rounded-full text-gray-400">#{tag}</span>
                ))}
              </div>
            </div>
            
            {/* Sidebar with Suggestions */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="bg-[#0a1a10] p-8 rounded-[2.5rem] text-white">
                <h4 className="text-[10px] font-black text-[#22c55e] tracking-widest mb-6 uppercase">Continue Reading</h4>
                <div className="space-y-4">
                  {Object.entries(BLOG_CONTENT).filter(([s]) => s !== activeSlug).map(([slug, data]) => (
                    <button 
                      key={slug}
                      onClick={() => handleOpenBlog(slug)}
                      className="w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-between group"
                    >
                      <span className="text-sm font-bold max-w-[80%]">{data.title}</span>
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </main>
      </motion.div>
    );
  }

  // --- LISTING PAGE VIEW ---
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920" className="w-full h-full object-cover" alt="Hero" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <nav className="flex items-center justify-center gap-2 mb-6 text-sm font-bold tracking-widest uppercase">
            <a href="/" className="hover:text-[#22C55E]">Home</a>
            <ChevronRight size={12} className="opacity-50" />
            <span className="text-emerald-400">The Blogs</span>
          </nav>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Journal</h2>
          <div className="h-1.5 w-24 bg-[#22c55e] mx-auto my-8" />
        </div>
      </section>

      <div className="bg-white text-[#0a1a10] min-h-screen">
        {/* Filter & Search */}
        <section className="bg-gray-50 border-b border-gray-100 pt-20 pb-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
            <div>
              <h4 className="text-[#22c55e] font-bold text-xs tracking-widest mb-4 uppercase">Insights & Updates</h4>
              <h1 className="text-4xl md:text-6xl font-bold">Corporate <span className="text-[#22c55e]">Journal.</span></h1>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search archive..." 
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-[#22c55e]/10 transition-all"
              />
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto flex gap-10 mt-16 overflow-x-auto no-scrollbar">
            {CATEGORIES.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveTab(cat)}
                className={`pb-5 text-[11px] font-bold tracking-widest uppercase transition-all relative ${activeTab === cat ? "text-[#22c55e]" : "text-gray-400 hover:text-black"}`}
              >
                {cat}
                {activeTab === cat && <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-1 bg-[#22c55e]" />}
              </button>
            ))}
          </div>
        </section>

        {/* Listing Articles */}
        <main className="max-w-7xl mx-auto px-6 py-20">
          <div className="space-y-24">
            <AnimatePresence mode="wait">
              {filteredPosts.map(([slug, post]) => (
                <motion.article 
                  key={slug} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
                >
                  <div 
                    onClick={() => handleOpenBlog(slug)} 
                    className="lg:col-span-5 cursor-pointer relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg"
                  >
                    <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                  </div>
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex gap-6 text-[11px] font-bold text-gray-400 tracking-widest">
                      <span className="flex items-center gap-2"><Calendar size={14} className="text-[#22c55e]" /> {post.date}</span>
                      <span className="flex items-center gap-2"><User size={14} className="text-[#22c55e]" /> {post.author}</span>
                    </div>
                    <h3 
                      onClick={() => handleOpenBlog(slug)}
                      className="text-3xl md:text-4xl font-bold cursor-pointer hover:text-[#22c55e] transition-colors leading-tight"
                    >
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed">
                      {post.quote.substring(0, 150)}...
                    </p>
                    <button 
                      onClick={() => handleOpenBlog(slug)}
                      className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase group/btn"
                    >
                      Read Full Article 
                      <div className="p-2 bg-gray-100 rounded-full group-hover/btn:bg-[#22c55e] group-hover/btn:text-white transition-all">
                        <ArrowUpRight size={18} />
                      </div>
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </>
  );
}