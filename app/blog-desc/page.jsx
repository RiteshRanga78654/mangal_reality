"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Tag, 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Facebook,
  Instagram,
  Share2,
  Clock
} from "lucide-react";

// Mock data for current static use (Structure matches your listing page)
const CURRENT_POST = {
  id: 1,
  category: "Residential",
  title: "The Future of Luxury Living in Suburban Landscapes",
  content: `
    <p>The landscape of luxury real estate is undergoing a seismic shift. No longer is prestige defined solely by a zip code in the heart of a concrete jungle. Instead, 2026 is seeing the rise of the 'Boutique Residence'—estates that prioritize ecological integration and personal space over proximity to city centers.</p>
    <br/>
    <h2 style="font-size: 24px; font-weight: bold; color: #0a1a10;">The Shift Toward 'Quiet Luxury'</h2>
    <p>Modern families are seeking sanctuaries. We are seeing a 40% increase in inquiries for properties that feature private wellness wings, high-acreage gardens, and sustainable energy grids. This isn't just a trend; it's a permanent relocation of the corporate elite toward suburban corridors that offer both connectivity and tranquility.</p>
  `,
  author: "Marketing Desk",
  date: "Jan 12, 2026",
  readTime: "6 min read",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200",
  tags: ["Luxury", "Lifestyle", "2026 Trends"]
};

export default function SingleBlogPage() {
  const arialSans = { fontFamily: "Arial, Helvetica, sans-serif" };

  return (
    <div style={arialSans} className="bg-white min-h-screen text-[#0a1a10]">
      {/* --- TOP NAVIGATION BAR --- */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <button className="group flex items-center gap-2 text-[10px] text-gray-400 hover:text-[#22c55e] transition-colors mb-8 uppercase tracking-[0.3em] font-black">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
        </button>

        {/* TITLE & META */}
        <div className="max-w-4xl">
          <span className="bg-[#22c55e]/10 text-[#22c55e] px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
            {CURRENT_POST.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.1]">
            {CURRENT_POST.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-12 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2">
              <User size={14} className="text-[#22c55e]" />
              <span className="text-[#0a1a10]">{CURRENT_POST.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-[#22c55e]" />
              <span>{CURRENT_POST.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#22c55e]" />
              <span>{CURRENT_POST.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- HERO IMAGE --- */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
          <img 
            src={CURRENT_POST.image} 
            alt="Article Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* --- CONTENT GRID --- */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: MAIN ARTICLE */}
          <div className="lg:col-span-8">
            <article className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-[#0a1a10]">
              <div dangerouslySetInnerHTML={{ __html: CURRENT_POST.content }} />
              
              {/* QUOTE STYLING */}
              <div className="my-12 p-10 bg-gray-50 rounded-[2.5rem] border-l-[8px] border-[#22c55e] italic">
                <p className="text-2xl text-[#0a1a10] font-normal leading-relaxed opacity-80">
                  "Luxury is no longer about the gold on the walls; it is about the air you breathe and the silence of your surroundings."
                </p>
              </div>
            </article>

            {/* TAGS AREA */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-3">
              {CURRENT_POST.tags.map(tag => (
                <span key={tag} className="px-5 py-2 bg-gray-50 text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-[#22c55e] hover:text-white transition-all cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: STICKY SIDEBAR */}
          <aside className="lg:col-span-4 sticky top-12 space-y-8">
            
            {/* SOCIAL SHARE */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Share Perspective</h4>
              <div className="flex gap-3">
                {[<Linkedin />, <Twitter />, <Facebook />, <Instagram />].map((icon, idx) => (
                  <button key={idx} className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#22c55e] hover:text-white transition-all shadow-sm">
                    {React.cloneElement(icon, { size: 18 })}
                  </button>
                ))}
              </div>
            </div>

            {/* AUTHOR PROMO */}
            <div className="bg-[#0a1a10] p-8 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e] blur-[80px] opacity-20" />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto mb-4 border-2 border-[#22c55e] p-1 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200" alt="Author" className="w-full h-full object-cover rounded-full" />
                </div>
                <h4 className="text-white font-bold text-lg">Marketing Desk</h4>
                <p className="text-[#22c55e] text-[10px] font-black uppercase tracking-widest mb-6">Strategic Updates</p>
                <button className="w-full bg-[#22c55e] text-[#0a1a10] py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all">
                  Follow Insights
                </button>
              </div>
            </div>

            {/* NEWSLETTER MINI */}
            <div className="bg-gray-50 p-8 rounded-[2.5rem]">
              <h4 className="font-bold text-[#0a1a10] mb-2">Market Intelligence</h4>
              <p className="text-sm text-gray-500 mb-6">Get the next journal entry directly in your inbox.</p>
              <div className="space-y-3">
                <input className="w-full px-5 py-4 bg-white rounded-xl border-none text-sm outline-none focus:ring-2 focus:ring-[#22c55e]/50" placeholder="Email Address" />
                <button className="w-full bg-[#0a1a10] text-white py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#22c55e] transition-all">
                  Subscribe
                </button>
              </div>
            </div>

          </aside>
        </div>
      </main>
    </div>
  );
}