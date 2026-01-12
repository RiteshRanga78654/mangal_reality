// // "use client";

// // import React, { useState } from 'react';
// // import { 
// //   TreePine, Wifi, Globe, Car, Map, Wallet, 
// //   ShowerHead, Users, Stethoscope, Waves, Mountain, Wind, 
// //   Flame, Trash2, Gamepad2, Bath, Utensils, UserPlus 
// // } from 'lucide-react';

// // const amenities = [
// //   { icon: <TreePine />, title: 'Plantation Walks' },
// //   { icon: <Wifi />, title: 'Free Wifi' },
// //   { icon: <Globe />, title: 'Travel Desk' },
// //   { icon: <Car />, title: 'Car Parking' },
// //   { icon: <Map />, title: 'Local Tours' },
// //   { icon: <Wallet />, title: 'Guide on Demand' },
// //   { icon: <ShowerHead />, title: 'Premium bathroom' },
// //   { icon: <Users />, title: 'Conference Room' },
// //   { icon: <Stethoscope />, title: 'Doctor on Call', highlighted: true },
// //   { icon: <Waves />, title: 'Natural Rivulet' },
// //   { icon: <Mountain />, title: 'Trekking' },
// //   { icon: <Wind />, title: 'Hair Dryer' },
// //   { icon: <Flame />, title: 'Campfire' },
// //   { icon: <Trash2 />, title: 'Farm Animals' },
// //   { icon: <Gamepad2 />, title: 'Indoor Games' },
// //   { icon: <Bath />, title: '24hr Hot Water' },
// //   { icon: <Utensils />, title: 'BBQ' },
// //   { icon: <UserPlus />, title: 'Group Booking' },
// //   // Additional items for the "Show More" functionality
// //   { icon: <Flame />, title: 'Campfire 2' },
// //   { icon: <Trash2 />, title: 'Farm Animals 2' },
// //   { icon: <Gamepad2 />, title: 'Indoor Games 2' },
// //   { icon: <Bath />, title: '24hr Hot Water 2' },
// //   { icon: <Utensils />, title: 'BBQ 2' },
// //   { icon: <UserPlus />, title: 'Group Booking 2' },
// // ];

// // export default function PremiumAmenities() {
// //   // Initial state: 18 items (6 columns * 3 rows)
// //   const [visibleCount, setVisibleCount] = useState(18);

// //   const showMore = () => {
// //     // Adds 6 more items (1 full row) on click
// //     setVisibleCount(prev => prev + 6);
// //   };

// //   return (
// //     <div className="page-wrapper">
// //       <div className="fixed-bg"></div>
      
// //       <section className="content-layer">
// //         <div className="container">
// //           <header className="header">
// //             <h2 className="title">Explore Amenities</h2>
// //             <div className="underline"></div>
// //           </header>
          
// //           <div className="grid-container">
// //             {amenities.slice(0, visibleCount).map((item, index) => (
// //               <div key={index} className={`tile ${item.highlighted ? 'highlighted' : ''}`}>
// //                 <div className="shutter"></div>
// //                 <div className="content">
// //                   <div className="icon-wrapper">
// //                     {item.icon}
// //                   </div>
// //                   <span className="label">{item.title}</span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {visibleCount < amenities.length && (
// //             <button className="view-all-btn" onClick={showMore}>
// //               View All Facilities
// //             </button>
// //           )}
// //         </div>
// //       </section>

// //       <style jsx>{`
// //         .page-wrapper {
// //           position: relative;
// //           width: 100%;
// //           min-height: 100vh;
// //           font-family: 'Inter', sans-serif;
// //         }

// //         .fixed-bg {
// //           position: fixed;
// //           top: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 100%;
// //           background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
// //                             url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=2000');
// //           background-size: cover;
// //           background-position: center;
// //           z-index: -1;
// //         }

// //         .content-layer {
// //           position: relative;
// //           z-index: 1;
// //           padding: 100px 20px;
// //           display: flex;
// //           justify-content: center;
// //         }

// //         .container {
// //           max-width: 1300px; /* Slightly wider for 6 cols */
// //           width: 100%;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //         }

// //         .header {
// //           width: 100%;
// //           margin-bottom: 40px;
// //         }

// //         .title {
// //           color: #ffffff;
// //           font-size: 3rem;
// //           font-weight: 800;
// //           margin: 0;
// //         }

// //         .underline {
// //           width: 80px;
// //           height: 4px;
// //           background: #4ade80;
// //           margin-top: 10px;
// //         }

// //         .grid-container {
// //           display: grid;
// //           /* Force exactly 6 columns on desktop */
// //           grid-template-columns: repeat(6, 1fr);
// //           width: 100%;
// //           border: 1px solid rgba(255, 255, 255, 0.1);
// //           background: rgba(0, 0, 0, 0.3);
// //           border-radius: 8px;
// //           backdrop-filter: blur(8px);
// //             gap: 15px;
// //         }

// //         .tile {
// //           position: relative;
// //           height: 180px;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           border: 0.5px solid rgba(255, 255, 255, 0.1);
// //           cursor: pointer;
// //           overflow: hidden;
// //         }

// //         .shutter {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 100%;
// //           background: #4ade80;
// //           transform: translateY(-101%);
// //           transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
// //           z-index: 1;
// //         }

// //         .tile:hover .shutter {
// //           transform: translateY(0);
// //         }

// //         .content {
// //           position: relative;
// //           z-index: 2;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           color: #4ade80;
// //           transition: color 0.3s ease;
// //         }

// //         .tile:hover .content {
// //           color: #ffffff;
// //         }

// //         .icon-wrapper {
// //           margin-bottom: 12px;
// //         }

// //         @keyframes customBounce {
// //           0%, 100% { transform: translateY(0); }
// //           50% { transform: translateY(-12px); }
// //         }

// //         .tile:hover .icon-wrapper {
// //           animation: customBounce 0.6s ease-in-out infinite;
// //         }

// //         .label {
// //           font-size: 0.85rem;
// //           font-weight: 600;
// //           text-align: center;
// //           color: white;
// //         }

// //         .tile.highlighted .shutter {
// //           transform: translateY(0);
// //           background: #22c55e;
// //         }
        
// //         .tile.highlighted .content {
// //           color: white;
// //         }

// //         .view-all-btn {
// //           margin-top: 50px;
// //           padding: 12px 35px;
// //           background: #4ade80;
// //           color: #000;
// //           font-weight: 700;
// //           border: none;
// //           border-radius: 2px;
// //           cursor: pointer;
// //           transition: all 0.3s ease;
// //         }

// //         .view-all-btn:hover {
// //           background: #22c55e;
// //           transform: scale(1.05);
// //         }

// //         /* Responsive Breakpoints */
// //         @media (max-width: 1100px) {
// //           .grid-container { grid-template-columns: repeat(3, 1fr); }
// //         }

// //         @media (max-width: 640px) {
// //           .grid-container { grid-template-columns: repeat(2, 1fr); }
// //           .title { font-size: 2rem; }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }



// "use client";

// import React, { useState, useEffect } from 'react';
// import { 
//   MapPin, Trees, Leaf, Home, Landmark, Palmtree, 
//   TreePine, Wifi, Globe, Car, Map, Wallet, 
//   ShowerHead, Users, Stethoscope, Waves, Mountain, Wind, 
//   Flame, Trash2, Gamepad2, Bath, Utensils, UserPlus 
// } from 'lucide-react';
// import { FaArrowRight } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const Page = () => {
//   // --- States ---
//   const [visibleCount, setVisibleCount] = useState(18);
//   const [index, setIndex] = useState(0);

//   // --- Data ---
//   const amenities = [
//     { icon: <TreePine />, title: 'Plantation Walks' },
//     { icon: <Wifi />, title: 'Free Wifi' },
//     { icon: <Globe />, title: 'Travel Desk' },
//     { icon: <Car />, title: 'Car Parking' },
//     { icon: <Map />, title: 'Local Tours' },
//     { icon: <Wallet />, title: 'Guide on Demand' },
//     { icon: <ShowerHead />, title: 'Premium bathroom' },
//     { icon: <Users />, title: 'Conference Room' },
//     { icon: <Stethoscope />, title: 'Doctor on Call' },
//     { icon: <Waves />, title: 'Natural Rivulet' },
//     { icon: <Mountain />, title: 'Trekking' },
//     { icon: <Wind />, title: 'Hair Dryer' },
//     { icon: <Flame />, title: 'Campfire' },
//     { icon: <Trash2 />, title: 'Farm Animals' },
//     { icon: <Gamepad2 />, title: 'Indoor Games' },
//     { icon: <Bath />, title: '24hr Hot Water' },
//     { icon: <Utensils />, title: 'BBQ' },
//     { icon: <UserPlus />, title: 'Group Booking' },
//     { icon: <Flame />, title: 'Campfire 2' },
//     { icon: <Trash2 />, title: 'Farm Animals 2' },
//   ];

//   const testimonials = [
//     { name: "Pankaj Sharma", text: "The property is under development but has tremendous potential; has a lot of green cover and the staff is excellent...", image: "https://via.placeholder.com/150" },
//     { name: "Anjali Rao", text: "Beautifully designed green spaces. It feels like a retreat away from the city noise. Highly recommend for families.", image: "https://via.placeholder.com/150" },
//     { name: "Vikram Singh", text: "Excellent customer service and transparent dealings. The progress on site is quite impressive.", image: "https://via.placeholder.com/150" }
//   ];

//   const features = [
//     { icon: <MapPin className="w-8 h-8" />, title: "3000 Villa Plots" },
//     { icon: <Trees className="w-8 h-8" />, title: "Natural Stream" },
//     { icon: <Leaf className="w-8 h-8" />, title: "Eco-Friendly Living" },
//     { icon: <Home className="w-8 h-8" />, title: "Clubhouse" },
//     { icon: <Landmark className="w-8 h-8" />, title: "Green Parks" },
//     { icon: <Palmtree className="w-8 h-8" />, title: "Luxury Resorts" },
//   ];

//   const projects = [
//     { src: "/assets/images/top-view-5-scaled.jpg", title: "THE NATURE VALLEY", location: "Visakhapatnam, ANDHRA PRADESH" },
//     { src: "/assets/images/top-view-5-scaled.jpg", title: "GREEN MEADOWS", location: "Jonnada, ANDHRA PRADESH" },
//     { src: "/assets/images/top-view-5-scaled.jpg", title: "SMART CITY", location: "Bondapalli, Vizianagaram" },
//   ];

//   // --- Effects ---
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [testimonials.length]);

//   const showMore = () => setVisibleCount(prev => prev + 6);

//   return (
//     <main className="relative bg-white w-full overflow-x-hidden">
      
//       {/* SECTION 1: HERO VIDEO */}
//       <section className="relative h-[40vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-black">
//         <video autoPlay loop muted playsInline className="absolute z-10 w-full h-full object-cover opacity-70">
//           <source src="/assets/videos/slider-video.mp4" type="video/mp4" />
//         </video>
        
//       </section>

//       {/* SECTION 2: STICKY STACKING */}
//       <section className="relative">
//         {[
//           { id: "01", title: "Pure Nature", img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074" },
//           { id: "02", title: "Sustainable Life", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070" },
//           { id: "03", title: "Green Future", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071" }
//         ].map((item, idx) => (
//           <div key={idx} className="sticky top-0 h-screen w-full overflow-hidden">
//             <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//               <h2 className="text-white text-3xl md:text-5xl font-bold">{item.id}. {item.title}</h2>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* SECTION 3: PROJECT OVERVIEW */}
//       <section className="relative w-full bg-stone-50 py-16 px-6 md:px-12 lg:px-[10%]">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-2xl text-gray-400 font-light">Project</h1>
//           <h2 className="text-4xl md:text-6xl font-serif font-bold text-zinc-800 mb-8">Overview</h2>
//           <div className="max-w-3xl mb-12">
//             <p className="text-lg md:text-xl text-zinc-600 mb-4 font-medium">Ever wondered what it would be like to live by the Eco & Luxury Villa?</p>
//             <p className="text-zinc-500 leading-relaxed">Own your slice of serenity at Dates County - an eco-luxury villa plot community offering residential plots for sale.</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//             {features.map((item, i) => (
//               <div key={i} className="flex flex-col items-center lg:items-start">
//                 <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-green-600 transition-transform hover:scale-110">
//                   {item.icon}
//                 </div>
//                 <p className="text-lg font-semibold text-zinc-800">{item.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SECTION 4: PROJECTS GRID */}
//       <section className="py-20 px-6 bg-white">
//         <h2 className="text-center text-3xl font-bold tracking-widest mb-12">PROJECTS</h2>
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
//           {projects.map((project, i) => (
//             <div key={i} className="group cursor-pointer border-b-2 border-gray-200 hover:border-blue-900 transition-all duration-300 pb-4">
//               <div className="overflow-hidden h-[320px] mb-4">
//                 <img src={project.src} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//               </div>
//               <h3 className="text-lg font-bold">{project.title}</h3>
//               <p className="text-sm text-gray-500">{project.location}</p>
//               <div className="flex justify-end mt-2">
//                 <FaArrowRight className="text-gray-400 group-hover:text-blue-900" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SECTION 5: AMENITIES (FIXED BACKGROUND HERE ONLY) */}
//       <div className="amenities-wrapper">
//         <div className="amenities-bg"></div>
//         <section className="relative z-10 py-24 px-6">
//           <div className="max-w-7xl mx-auto flex flex-col items-center">
//             <header className="w-full mb-12">
//               <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-2">Explore Amenities</h2>
//               <div className="w-20 h-1 bg-green-400"></div>
//             </header>
            
//             <div className="grid-container">
//               {amenities.slice(0, visibleCount).map((item, i) => (
//                 <div key={i} className={`tile ${item.highlighted ? 'highlighted' : ''}`}>
//                   <div className="shutter"></div>
//                   <div className="content">
//                     <div className="icon-wrapper">{item.icon}</div>
//                     <span className="label">{item.title}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {visibleCount < amenities.length && (
//               <button className="view-all-btn" onClick={showMore}>View All Facilities</button>
//             )}
//           </div>
//         </section>
//       </div>

//       {/* SECTION 6: TESTIMONIALS */}
//       <section className="py-24 px-6 bg-white flex flex-col items-center">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-serif text-zinc-800 max-w-2xl">
//             Dedicated open, green spaces for relaxation and rejuvenation.
//           </h2>
//         </div>

//         <div className="relative w-full max-w-2xl">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 1.05 }}
//               className="bg-zinc-900 text-white p-10 rounded-2xl flex flex-col items-center text-center shadow-xl"
//             >
//               <img src={testimonials[index].image} alt={testimonials[index].name} className="w-20 h-20 rounded-full border-4 border-zinc-700 mb-4 object-cover" />
//               <h3 className="font-bold text-xl mb-4">{testimonials[index].name}</h3>
//               <p className="text-zinc-300 italic leading-relaxed">"{testimonials[index].text}"</p>
//             </motion.div>
//           </AnimatePresence>
          
//           <div className="flex justify-center space-x-3 mt-8">
//             {testimonials.map((_, i) => (
//               <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full transition-all ${index === i ? "bg-black w-8" : "bg-gray-300"}`} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         .amenities-wrapper {
//           position: relative;
//           width: 100%;
//           overflow: hidden; /* This keeps the background inside this section only */
//           background-color: #1a1a1a;
//         }

//         .amenities-bg {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
//                             url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=2000');
//           background-size: cover;
//           background-position: center;
//           background-attachment: fixed; /* Creates the parallax effect */
//           z-index: 1;
//         }

//         .grid-container {
//           display: grid;
//           grid-template-columns: repeat(6, 1fr);
//           width: 100%;
//          margin: 10px
//           background: rgba(255, 255, 255, 0.1);
//           // border: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .tile {
//           position: relative;
//           height: 160px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           overflow: hidden;
//           background: rgba(0, 0, 0, 0.2);
//           backdrop-filter: blur(8px);
//           border-radius: 8px;
//           margin : 10px;
//           border: 2px solid rgba(255, 255, 255, 0.1);
//         }

//         .shutter {
//           position: absolute;
//           inset: 0;
//           background: #4ade80;
//           transform: translateY(-101%);
//           transition: transform 0.4s ease;
//           z-index: 1;
//         }

//         .tile:hover .shutter { transform: translateY(0); }

//         .content {
//           position: relative;
//           z-index: 2;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           color: white;
//         }

//         .icon-wrapper { margin-bottom: 10px; transition: transform 0.3s ease; }
//         .tile:hover .icon-wrapper { transform: translateY(-5px); }
//         .label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }

//         .tile.highlighted { background: #22c55e; }

//         .view-all-btn {
//           margin-top: 40px;
//           padding: 12px 30px;
//           background: #4ade80;
//           color: black;
//           font-weight: bold;
//           border-radius: 4px;
//           transition: 0.3s;
//         }
//         .view-all-btn:hover { background: #22c55e; transform: translateY(-2px); }

//         @media (max-width: 1024px) { .grid-container { grid-template-columns: repeat(3, 1fr); } }
//         @media (max-width: 640px) { .grid-container { grid-template-columns: repeat(2, 1fr); } }
//       `}</style>
//     </main>
//   );
// };

// export default Page;