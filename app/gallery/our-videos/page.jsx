"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  X, 
  Home, 
  ChevronRight, 
  ArrowUpRight, 
  Clapperboard, 
  Plus
} from 'lucide-react';

const AlternativeVideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4); 

  const videos = [
    {
      id: 1,
      title: "The Nature City",
      subtitle: "Cinematic Walkthrough",
      category: "Masterpiece",
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      span: "row-span-2 col-span-1 md:col-span-2"
    },
    {
      id: 2,
      title: "Smart City Life",
      subtitle: "Urban Innovation",
      category: "Innovation",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      span: "col-span-1"
    },
    {
      id: 3,
      title: "Green Meadows",
      subtitle: "Legacy Living",
      category: "Completed",
      thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      span: "col-span-1"
    },
    {
      id: 4,
      title: "Customer Voices",
      subtitle: "Happy Families",
      category: "Stories",
      thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      span: "col-span-1 md:col-span-2"
    },
    {
      id: 5,
      title: "Sustainable Architecture",
      subtitle: "Building the Future",
      category: "Design",
      thumbnail: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      span: "col-span-1"
    }
  ];

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 2);
  };

  return (
    <div className="bg-white min-h-screen font-medium text-slate-900 overflow-x-hidden rounded-none">
      
      {/* 1. CINEMATIC BANNER - CENTERED ALIGNMENT */}
      <section className="relative h-[72vh] flex items-center justify-center bg-[#0a1a10] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src={videos[0].thumbnail} 
            className="w-full h-full object-cover scale-105"
            alt="Hero Background"
          />
          {/* Symmetrical Gradient for centering */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a10]/60 via-transparent to-[#0a1a10]/60" />
        </div>

        <div className="relative z-10 px-6 text-center text-white max-w-5xl">
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-8 text-[10px] md:text-xs font-bold tracking-[0.2em] opacity-80"
          >
            <Home size={14} /><span className="text-white"> Home</span> 
            <ChevronRight size={12} /> 
            <span className="text-emerald-400">Videos</span>
          </motion.nav>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold tracking-tighter leading-none  mb-8"
          >
            Our  Videos
          </motion.h1>

          <div className="h-1 w-20 bg-[#22c55e] mx-auto mb-8" />
        </div>
      </section>

      {/* 2. MASONRY REEL SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 border-b border-slate-100 pb-12 gap-6 text-center md:text-left">
            <div>
              {/* <p className="text-[#22C55E] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Gallery Grid</p> */}
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter  text-slate-900 leading-none">Featured <br className="hidden md:block"/> Walkthroughs</h2>
            </div>
            <div className="max-w-xs text-slate-400 text-[10px] md:text-xs tracking-widest leading-loose  md:text-right">
                Explore our high-definition architectural tours and community stories.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            <AnimatePresence mode='popLayout'>
              {videos.slice(0, visibleCount).map((vid) => (
                <motion.div 
                  key={vid.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`${vid.span} group relative bg-slate-900 overflow-hidden cursor-pointer h-[400px] md:h-auto border border-slate-100`}
                  onClick={() => setSelectedVideo(vid)}
                >
                  <img 
                    src={vid.thumbnail} 
                    className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-30 group-hover:blur-sm"
                    alt={vid.title}
                  />
                  <div className="absolute top-0 right-0 p-6 z-20 overflow-hidden">
                      <div className="flex items-center gap-2 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-[#22C55E] text-white px-4 py-2 font-bold text-[10px] tracking-widest uppercase">
                          Play Video <ArrowUpRight size={14} />
                      </div>
                  </div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 text-left">
                    <div className="space-y-1 transform transition-all duration-500 group-hover:-translate-y-4">
                      <span className="text-[#22C55E] text-[9px] font-bold tracking-[0.2em] uppercase">{vid.category}</span>
                      <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tighter leading-tight">{vid.title}</h3>
                      <p className="text-gray-400 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-widest">{vid.subtitle}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-16 h-16 border-2 border-[#22C55E] rounded-none flex items-center justify-center">
                          <Play fill="#22C55E" className="text-[#22C55E]" size={24} />
                      </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {visibleCount < videos.length && (
            <div className="mt-20 flex justify-center">
              <button 
                onClick={handleLoadMore}
                className="group relative px-12 py-5 border border-[#22C55E] text-[#22C55E] cursor-pointer font-bold tracking-widest text-[10px] uppercase overflow-hidden transition-all duration-500 hover:text-white"
              >
                <span className="relative z-10 flex items-center gap-2">Load More <Plus size={14} /></span>
                <div className="absolute inset-0 bg-[#22C55E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. BEYOND THE LENS */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
             <div className="relative p-1 border border-slate-200 bg-white shadow-xl">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000" className="w-full grayscale hover:grayscale-0 transition-all duration-1000" alt="Archives"/>
                <div className="absolute -bottom-8 -right-8 bg-[#22C55E] p-10 text-white hidden lg:block shadow-2xl">
                    <Clapperboard size={40} />
                </div>
             </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-slate-900">Beyond the <br/> <span className="text-[#22C55E]">Lens</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              We capture more than just layouts; we record the soul of the community. From the first tree planted at The Nature City to the final brick at Green Meadows.
            </p>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            <button className="absolute top-8 right-8 text-white/30 hover:text-white transition-all z-[110]" onClick={() => setSelectedVideo(null)}><X size={48} /></button>
            <div className="w-full max-w-[1400px] aspect-video bg-black border border-white/10 shadow-2xl">
              <iframe src={`${selectedVideo.videoUrl}?autoplay=1`} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen title="Playback"></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AlternativeVideoGallery;