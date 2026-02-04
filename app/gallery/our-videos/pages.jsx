"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Home, ChevronRight, Video, Clapperboard, MonitorPlay } from 'lucide-react';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ["All Videos", "Project Walkthroughs", "Customer Stories", "Corporate"];

  const videos = [
    {
      id: 1,
      title: "The Nature City - Virtual Tour",
      category: "Project Walkthroughs",
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your links
      duration: "3:45"
    },
    {
      id: 2,
      title: "Green Meadows Completion Ceremony",
      category: "Corporate",
      thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "2:15"
    },
    {
      id: 3,
      title: "Why Families Choose Mangal Realty",
      category: "Customer Stories",
      thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "4:20"
    },
    {
      id: 4,
      title: "The Smart City Lifestyle",
      category: "Project Walkthroughs",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "1:50"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-medium text-slate-900 rounded-none overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden rounded-none">
        <div className="absolute inset-0 z-0 opacity-40">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
            <a href="/" className="hover:text-emerald-400 flex items-center gap-1 transition-colors">
              <Home size={12} /> Home
            </a>
            <ChevronRight size={12} className="opacity-50" />
            <span className="text-emerald-400">Cinematic Gallery</span>
          </nav>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none uppercase mb-6">
            Our <span className="text-[#22C55E]">Legacy</span> <br /> In Motion
          </h1>
          <div className="h-2 w-24 bg-[#22C55E] mx-auto rounded-none"></div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER */}
      <section className="py-12 border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map((cat, i) => (
            <button key={i} className="text-[10px] md:text-xs font-bold tracking-widest uppercase pb-2 border-b-2 border-transparent hover:border-[#22C55E] transition-all cursor-pointer">
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. VIDEO GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {videos.map((vid) => (
            <motion.div 
              key={vid.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer rounded-none border border-slate-100 bg-white p-4 transition-all duration-500 hover:bg-[#15803d]"
              onClick={() => setSelectedVideo(vid)}
            >
              <div className="relative aspect-video overflow-hidden rounded-none bg-slate-200">
                <img 
                  src={vid.thumbnail} 
                  alt={vid.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-all">
                  <div className="w-16 h-16 bg-[#22C55E] text-white flex items-center justify-center rounded-none shadow-xl transform group-hover:scale-110 transition-transform">
                    <Play fill="white" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-[10px] px-2 py-1 font-bold tracking-widest">
                  {vid.duration}
                </div>
              </div>

              <div className="mt-8 mb-4 px-2">
                <p className="text-[#22C55E] group-hover:text-emerald-50 text-[10px] font-bold tracking-widest uppercase mb-2">
                  {vid.category}
                </p>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors leading-tight uppercase tracking-tighter">
                  {vid.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. VIDEO MODAL (POPUP) */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-[#22C55E] transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={40} />
            </button>
            <div className="w-full max-w-6xl aspect-video bg-black shadow-2xl rounded-none border border-white/10">
              <iframe 
                src={selectedVideo.videoUrl} 
                className="w-full h-full" 
                allowFullScreen 
                title="Video Player"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Clapperboard className="mx-auto text-[#22C55E] mb-6" size={48} />
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-10 text-slate-900">
            Experience Our <span className="text-[#22C55E]">Projects</span> Firsthand
          </h2>
          <button className="group relative inline-block cursor-pointer px-12 py-6 text-[#22C55E] hover:text-white font-bold tracking-[0.3em] text-xs overflow-hidden transition-all duration-300 rounded-none border border-[#22C55E]">
            <span className="relative z-10">BOOK A PHYSICAL TOUR</span>
            <div className="absolute inset-0 bg-[#22C55E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default VideoGallery;