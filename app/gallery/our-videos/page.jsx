"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Home, ChevronRight } from "lucide-react";


// --- DUMMY DATA ---
const galleryPhotos = [
  { id: 1, type: "image", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200" },
  { id: 2, type: "image", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200" },
  { id: 3, type: "image", url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200" },
  { id: 4, type: "image", url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200" },
  { id: 5, type: "image", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200" },
  { id: 6, type: "image", url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200" },
];

const videoItems = [
  { id: 101, title: "Invest in Dates County – A Future Built on Nature", id_yt: "dQw4w9WgXcQ", thumb: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600" },
  { id: 102, title: "Dates County: Your Sustainable Haven", id_yt: "dQw4w9WgXcQ", thumb: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?auto=format&fit=crop&w=600" },
  { id: 103, title: "Welcome to Dates County: Eco-Friendly Living", id_yt: "dQw4w9WgXcQ", thumb: "https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&w=600" },
  { id: 104, title: "Customer Experience in Planet Green", id_yt: "dQw4w9WgXcQ", thumb: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=600" },
  { id: 105, title: "Walk Through Video of Planet Green Layout", id_yt: "dQw4w9WgXcQ", thumb: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600" },
  { id: 106, title: "Dates County Hyderabad | Villa Plots", id_yt: "dQw4w9WgXcQ", thumb: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600" },
];

const MarqueeColumn = ({ items, reverse = false, onSelect }) => (
  <div className="flex flex-col h-[600px] md:h-[1000px] overflow-hidden gap-4 md:gap-8">
    <motion.div
      animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ ease: "linear", duration: 40, repeat: Infinity }}
      className="flex flex-col gap-4 md:gap-8"
    >
      {[...items, ...items].map((img, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 0.98 }}
          className="relative aspect-square w-full rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer shadow-xl border-2 md:border-[6px] border-white"
          onClick={() => onSelect(img)}
        >
          <img src={img.url} alt="Gallery" className="object-cover w-full h-full" />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default function LuxuryGalleryPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      
      <div className="bg-[#FAF9F6] min-h-screen">
        {/* --- HERO SECTION --- */}
        <section className="relative  h-[80vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920"
              className="w-full h-full object-cover"
              alt="Hero Background"
            />
            {/* Custom Theme Overlay */}
            <div className="absolute inset-0 "></div>
          </div>
          <div className="relative z-10 text-center text-white px-6">
            <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-sm font-medium tracking-[0.2em] uppercase">
              <a href="/" className="hover:text-green-400 flex items-center gap-1 transition-colors">
                <Home size={12} /> Home
              </a>
              <ChevronRight size={12} className="opacity-50" />
              <span className="text-green-400">The Gallery</span>
            </nav>
            <h2 className="text-4xl md:text-8xl font-serif  tracking-tight">
              The Gallery
            </h2>
          </div>
        </section>

       

        {/* --- PHOTO MARQUEE SECTION --- */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-5xl font-serif text-[#0a1a10] tracking-tight">
              Our Photo Gallery
            </h3>
            <div className="w-20 h-1 bg-[#22c55e] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12">
            <MarqueeColumn items={galleryPhotos} onSelect={setSelectedItem} />
            <MarqueeColumn items={galleryPhotos} reverse={true} onSelect={setSelectedItem} />
            <div className="hidden md:block">
              <MarqueeColumn items={galleryPhotos} onSelect={setSelectedItem} />
            </div>
          </div>
        </section>

         {/* --- VIDEO SECTION --- */}
        <section className="bg-white py-16 md:py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl md:text-5xl font-serif text-center text-[#0a1a10] mb-12 md:mb-16 tracking-tight">
              Our Video Gallery
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {videoItems.map((video) => (
                <motion.div
                  key={video.id}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem({ ...video, type: "video" })}
                >
                  <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-xl mb-4">
                    <img
                      src={video.thumb}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      alt={video.title}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0a1a10]/20 group-hover:bg-[#0a1a10]/40 transition-all">
                      <div className="w-12 h-8 md:w-14 md:h-10 lg:w-16 lg:h-11 bg-[red] rounded-xl flex items-center justify-center text-white shadow-xl transform transition group-hover:scale-110">
                        <Play fill="white" className="size-5 md:size-5 lg:size-6" />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-md md:text-lg font-semibold text-[#0a1a10] group-hover:text-green-700 transition-colors px-1 line-clamp-2">
                    {video.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- LIGHTBOX MODAL --- */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a1a10]/95 backdrop-blur-md p-4"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full z-10"
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black"
              >
                {selectedItem.type === "image" ? (
                  <img src={selectedItem.url} className="w-full h-full object-contain" alt="View" />
                ) : (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedItem.id_yt}?autoplay=1&rel=0`}
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
    </>
  );
}