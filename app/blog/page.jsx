// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Play, Home, ChevronRight } from "lucide-react";
// import Header from "../layout/Header";
// import Footer from "../layout/Footer";

// const page = () => {
//   return (
//     <>
//     <Header />
//     <div>
//          <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920"
//             className="w-full h-full object-cover brightness-[0.7]"
//             alt="Hero Background"
//           />
//         </div>
//         <div className="relative z-10 text-center text-white px-6">
//           <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-sm font-medium tracking-[0.2em] uppercase">
//             <a
//               href="/"
//               className="hover:text-amber-200 flex items-center gap-1"
//             >
//               <Home size={12} /> Home
//             </a>
//             <ChevronRight size={12} className="opacity-50" />
//             <span className="text-amber-200">BLOGS</span>
//           </nav>
//           <h1 className="text-6xl md:text-9xl font-serif  leading-none">

//           </h1>
//           <h2 className="text-4xl md:text-8xl font-serif uppercase tracking-tight">
//            BLOGS
//           </h2>
//         </div>
//       </section>

//     </div>
//     <Footer />
//     </>
//   )
// }

// export default page

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight, ArrowRight, Play } from "lucide-react";

// const blogPosts = [
//   {
//     id: 1,
//     category: "Architecture",
//     title: "The Evolution of Sustainable Living",
//     excerpt: "Exploring how green roofs and solar glass are changing luxury real estate.",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200",
//     date: "JAN 2026",
//     span: "col-span-2 row-span-2" // Large feature card
//   },
//   {
//     id: 2,
//     category: "Interior",
//     title: "Minimalist Masterpieces",
//     excerpt: "Why 'less' is becoming the new standard for luxury interiors.",
//     image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800",
//     date: "DEC 2025",
//     span: "col-span-1 row-span-1"
//   },
//   {
//     id: 3,
//     category: "Investment",
//     title: "Kolkata's Rising Skyline",
//     excerpt: "A look at the upcoming high-rise developments in Kasba and beyond.",
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800",
//     date: "NOV 2025",
//     span: "col-span-1 row-span-1"
//   }
// ];

// export default function RealEstateBlog() {
//   return (
//     <div className="bg-[#0a0a0a] text-white min-h-screen">
//       <main className="max-w-[1400px] mx-auto px-6 py-24">

//         {/* Editorial Heading */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
//           <div className="space-y-4">
//             <h2 className="text-amber-400 font-mono tracking-tighter text-lg uppercase">/ Perspectives</h2>
//             <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tight">
//               Design <span className="italic text-neutral-500 text-5xl md:text-7xl">&</span> Lifestyle
//             </h1>
//           </div>
//           <p className="max-w-xs text-neutral-400 text-sm leading-relaxed border-l border-neutral-800 pl-6">
//             A curated collection of insights into the world of premium architecture and luxury investment.
//           </p>
//         </div>

//         {/* Modern Masonry Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
//           {blogPosts.map((post) => (
//             <motion.div
//               key={post.id}
//               whileHover={{ scale: 0.98 }}
//               className={`relative overflow-hidden group rounded-sm cursor-pointer ${post.span}`}
//             >
//               {/* Image with subtle zoom */}
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
//               />

//               {/* Overlay Content */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-8 flex flex-col justify-end">
//                 <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                   <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold mb-2 block">
//                     {post.category}
//                   </span>
//                   <h3 className="text-2xl md:text-3xl font-serif mb-4 leading-tight">
//                     {post.title}
//                   </h3>
//                   <p className="text-neutral-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-md">
//                     {post.excerpt}
//                   </p>
//                 </div>

//                 {/* Floating Icon */}
//                 <div className="absolute top-8 right-8 bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -rotate-45 group-hover:rotate-0">
//                   <ArrowUpRight size={20} />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* The "Marquee" or Featured List */}
//         <div className="mt-32 border-t border-neutral-800">
//           <h2 className="py-8 text-neutral-500 uppercase text-xs tracking-widest font-bold">More Stories</h2>
//           {[1, 2, 3].map((item) => (
//             <div key={item} className="group flex items-center justify-between py-10 border-b border-neutral-800 hover:bg-white/5 px-4 transition-all">
//               <div className="flex items-center gap-8">
//                 <span className="text-neutral-600 font-mono text-xl">0{item}</span>
//                 <div>
//                   <h4 className="text-2xl font-serif group-hover:translate-x-4 transition-transform duration-300">Sustainable Materials in Urban Sprawl</h4>
//                   <span className="text-xs text-neutral-500 uppercase tracking-widest mt-2 block">Nov 12, 2025</span>
//                 </div>
//               </div>
//               <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="w-40 h-24 overflow-hidden rounded-md border border-neutral-700">
//                    <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//               <ArrowRight className="text-neutral-600 group-hover:text-amber-400 transition-colors" />
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

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
} from "lucide-react";

// Professional Categories
const CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
  "Investment",
  "Industry News",
];

const BLOG_POSTS = [
  {
    id: 1,
    category: "Residential",
    title: "The Future of Luxury Living in Suburban Landscapes",
    excerpt:
      "Exploring the rise of 'Boutique Residences' and why modern families are prioritizing open spaces over city centers.",
    author: "Marketing Desk",
    date: "Jan 12, 2026",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200",
    link: "/blog-desc",
  },
  {
    id: 2,
    category: "Investment",
    title: "Real Estate ROI: Predicting the 2026 Growth Corridors",
    excerpt:
      "A data-driven look at infrastructure developments and their direct impact on property valuation.",
    author: "Finance Team",
    date: "Jan 08, 2026",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800",
  },
  {
    id: 3,
    category: "Commercial",
    title: "Sustainable Workspaces: The New Corporate Standard",
    excerpt:
      "How green building certifications are becoming a non-negotiable for high-end corporate clients.",
    author: "Project Lead",
    date: "Jan 05, 2026",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800",
  },
];

export default function MangalRealtyBlog() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter(
      (p) =>
        (activeTab === "All" || p.category === activeTab) &&
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeTab, searchQuery]);

  return (
    <>
      <section className="relative h-[72vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920"
            className="w-full h-full object-cover "
            alt="Hero Background"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6">
           <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
          <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-sm font-medium tracking-[0.2em] ">
            <a
              href="/"
              className="hover:text-[#22C55E] flex items-center gap-1"
            >
              <Home size={12} />
              Home
            </a>
            <ChevronRight size={12} className="opacity-50" />
            <span className="text-emerald-400">The Blogs</span>
          </nav>
          {/* <h1 className="text-6xl md:text-9xl   leading-none" style={{fontFamily:"Arial, Helvetica, sans-serif"}}></h1> */}
          <h2 className="text-4xl md:text-7xl   tracking-tight" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
            Blogs
          </h2>
          <div className="h-1 w-20 bg-[#22c55e] mx-auto my-8" />
          </motion.div>
        </div>
      </section>
      <div className="bg-[#FFFFFF] text-[#0a1a10] min-h-screen font-sans">
        {/* 1. SECTION HEADER */}
        <section className="bg-gray-50 border-b border-gray-100 pt-28 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
              <div className="max-w-3xl">
                <h4 className="text-[#22c55e] font-bold text-xs  tracking-[0.1em] mb-4">
                  Insights & Updates
                </h4>
                <h1 className="text-[32px] md:text-[60px] font-bold text-[#0a1a10] leading-tight" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
                  Corporate <span className=" font-bold">Journal.</span>
                </h1>
                <div className="w-25 h-1.5 bg-[#22C55E] mt-4 mb-4"></div>
                <p className="text-gray-500 text-lg mt-4 max-w-xl font-light">
                  Stay informed with the latest market trends, project updates,
                  and investment strategies from the desk of Mangal Realty.
                </p>
              </div>

              {/* Functional Search */}
              <div className="relative group w-full md:w-80">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#22c55e] transition-colors"
                  size={18}
                />
                <input
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search the archive..."
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-[#22c55e]/10 focus:border-[#22c55e] transition-all text-sm"
                />
              </div>
            </div>

            {/* Category Navigation */}
            <div className="flex gap-10 mt-16 overflow-x-auto no-scrollbar border-b border-gray-100">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`pb-5 text-[11px] font-bold  tracking-[0.1em] transition-all relative ${
                    activeTab === cat
                      ? "text-[#22c55e]"
                      : "text-gray-400 hover:text-[#0a1a10]"
                  }`}
                >
                  {cat}
                  {activeTab === cat && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.75 bg-[#22c55e] rounded-t-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 2. ARTICLE LISTING */}
        <main className="max-w-7xl mx-auto px-6 py-20">
          <div className="space-y-24">
            <AnimatePresence mode="wait">
              {filtered.map((post) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
                >
                  {/* Image Container */}
                  <div className="lg:col-span-5 relative overflow-hidden rounded-2xl aspect-4/3 shadow-md">
                    <img
                      src={post.image}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      alt={post.title}
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/95 backdrop-blur px-4 py-1.5 rounded-lg text-[10px] font-bold text-[#0a1a10]  tracking-widest shadow-sm border border-gray-100">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-6 text-[11px] font-bold text-gray-400  tracking-widest">
                      <span className="flex items-center gap-2">
                        <Calendar size={14} className="text-[#22c55e]" />{" "}
                        {post.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <User size={14} className="text-[#22c55e]" />{" "}
                        {post.author}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-Arial, Helvetica, sans-serif leading-tight group-hover:text-[#22c55e] transition-colors cursor-pointer text-[#0a1a10]">
                      {post.title}
                    </h3>

                    <p className="text-gray-500 text-lg leading-relaxed font-light">
                      {post.excerpt}
                    </p>
                    <a href={`${post.link}`}>
                      <div className="flex items-center gap-8 pt-4 cursor-pointer">
                        <button className="flex items-center gap-3 text-sm font-bold  tracking-widest group/btn text-[#0a1a10]">
                          Read Full Article
                          <div className="p-2.5 bg-gray-100 rounded-full group-hover/btn:bg-[#22c55e] group-hover/btn:text-white transition-all shadow-sm">
                            <ArrowUpRight size={18} />
                          </div>
                        </button>
                        <button className="text-gray-300 hover:text-[#22c55e] transition-colors">
                          <Share2 size={18} />
                        </button>
                      </div>
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="text-center py-40 border-2 border-dashed border-gray-100 rounded-3xl">
              <h3 className="text-2xl font-Arial, Helvetica, sans-serif text-gray-400">
                No matching insights found.
              </h3>
            </div>
          )}
        </main>

        {/* 3. NEWSLETTER CTA */}
        <div className="pb-20">
        <section className="bg-[#0a1a10] text-white py-24 px-6 rounded-[2rem] max-w-7xl mx-auto shadow-2xl overflow-hidden relative">
          {/* Thematic Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#22c55e] blur-[150px] opacity-20" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-Arial, Helvetica, sans-serif mb-6 leading-tight">
              Subscribe for Exclusive Market{" "}
              <span className="text-[#22c55e]">Intelligence.</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg font-light max-w-2xl mx-auto">
              Join our private mailing list for early access to project launches
              and detailed sector reports.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                required
                className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#22c55e] transition-all"
                placeholder="Corporate Email Address"
              />
              <button className="group relative px-10 py-4 rounded-xl border border-[#22c55e] text-white font-bold  tracking-widest overflow-hidden active:scale-95 transition-all">
                <span className="relative z-10">Subscribe</span>
                {/* Slides in the Main Green Color */}
                <div className="absolute inset-0 bg-[#22c55e] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
              </button>
            </form>
          </div>
        </section>
      </div>
      </div>
    </>
  );
}
