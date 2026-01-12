// import React from 'react';

// const Page = () => {
//   return (
//     <main className="min-h-screen bg-white">
//       {/* HERO SECTION 
//           - Mobile: h-[40vh] (Shows at top without gaps)
//           - Desktop: md:h-screen (Full screen)
//       */}
//       <section className="relative h-[40vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        
//         {/* 1. Video Background */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute z-10 w-full h-full object-cover"
//         >
//           <source src="/assets/videos/slider-video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* 2. Overlay */}
//         <div className="absolute z-20 w-full h-full bg-black/10"></div>

//         {/* 3. Center Logo/Text */}
//         {/* <div className="relative z-30 flex flex-col items-center justify-center text-center px-4">
//           <img 
//             src="/assets/images/logo.png" 
//             alt="Planet Green" 
//             className="w-32 md:w-56 mb-2 drop-shadow-md"
//           />
//           <p className="text-white text-[10px] md:text-sm tracking-[0.3em] uppercase font-light">
//             Come, Join the Revolution
//           </p>
//         </div> */}
//       </section>

//       {/* CONTENT SECTION (As per your second screenshot)
//       */}
//       {/* <section className="py-12 px-6 md:py-24 md:px-20 max-w-7xl mx-auto">
       
//         <h2 className="text-green-700 text-lg md:text-2xl font-semibold mb-1">
//           We are Planet Green
//         </h2>
        
        
//         <h3 className="text-4xl md:text-7xl font-serif italic text-gray-900 mb-8">
//           Move to Nature
//         </h3>

        
//         <h4 className="text-xl md:text-4xl font-bold text-green-900 leading-tight mb-8">
//           From the time earth was born to now, <br className="hidden md:block" /> 
//           a lot has changed about nature.
//         </h4>

       
//         <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-4xl">
//           We are proud to present Planet Green, a stunning new precinct that is 
//           destined to be the residential and commercial hub of the future. 
//           Experience a life where luxury meets sustainability.
//         </p>
//       </section> */}

//       {/* Floating Call Button (Mobile bottom right) */}
//       <div className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10">
//         <div className="bg-green-700 p-4 rounded-full shadow-lg cursor-pointer">
//            {/* Phone Icon Placeholder */}
//            <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
//         </div>
//       </div>
//     </main>



//   );
// };

// export default Page;
"use client";

import React from 'react';

import { MapPin, Trees, Leaf, Home, Landmark, Palmtree } from 'lucide-react';
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Page = () => {

  const [index, setIndex] = useState(0);

  // Auto-play logic: Changes slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

const testimonials = [
  {
    name: "Pankaj Sharma",
    text: "The property is under development but has tremendous potential; has a lot of green cover and the staff is excellent...",
    image: "https://via.placeholder.com/150", // Replace with actual image
  },
  {
    name: "Anjali Rao",
    text: "Beautifully designed green spaces. It feels like a retreat away from the city noise. Highly recommend for families.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Vikram Singh",
    text: "Excellent customer service and transparent dealings. The progress on site is quite impressive.",
    image: "https://via.placeholder.com/150",
  }
];

  const features = [
    { icon: <MapPin className="w-8 h-8" />, title: "3000 Villa Plots" },
    { icon: <Trees className="w-8 h-8" />, title: "Natural Stream" },
    { icon: <Leaf className="w-8 h-8" />, title: "Eco-Friendly Living" },
    { icon: <Home className="w-8 h-8" />, title: "Clubhouse" },
    { icon: <Landmark className="w-8 h-8" />, title: "Green Parks" },
    { icon: <Palmtree className="w-8 h-8" />, title: "Luxury Resorts" },
  ];

  const amenities = [
  { icon: '🌱', title: 'Plantation Walks' },
  { icon: '📶', title: 'Free Wifi' },
  { icon: '🌍', title: 'Travel Desk' },
  { icon: '🚗', title: 'Car Parking' },
  { icon: '🗺️', title: 'Local Tours' },
  { icon: '💼', title: 'Guide on Demand' },
  { icon: '🚿', title: 'Premium bathroom' },
  { icon: '👥', title: 'Conference Room' },
  { icon: '🩺', title: 'Doctor on Call', highlighted: true },
  { icon: '🏞️', title: 'Natural Rivulet' },
  { icon: '⛰️', title: 'Trekking' },
  { icon: '💨', title: 'Hair Dryer' },
  { icon: '🔥', title: 'Campfire' },
  { icon: '🦌', title: 'Farm Animals' },
  { icon: '🎲', title: 'Indoor Games' },
  { icon: '🛁', title: '24hr Hot Water' },
  { icon: '🍖', title: 'BBQ' },
  { icon: '👨‍👩‍👧‍👦', title: 'Group Booking' },
];

      // Project Cards Component

    const projects = [
      {
        src: "/assets/images/top-view-5-scaled.jpg",
        title: "THE NATURE VALLEY",
        location: "Visakhapatnam, ANDHRA PRADESH",
      },
      {
        src: "/assets/images/top-view-5-scaled.jpg",
        title: "GREEN MEADOWS",
        location: "Jonnada between Visakhapatnam and Vizianagaram ANDHRA PRADESH",
      },
      {
        src: "/assets/images/top-view-5-scaled.jpg",
        title: "SMART CITY",
        location: "Bondapalli, Vizianagaram District",
      },
    ];

  return (

    <>
    <main className="relative bg-white">
      
      {/* SECTION 1: HERO VIDEO */}
      <section className="relative h-[40vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-10 w-full h-full object-cover"
        >
          <source src="/assets/videos/slider-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to make text readable */}
        <div className="absolute z-20 w-full h-full bg-black/30"></div>

        {/* Content */}
        {/* <div className="relative z-30 flex flex-col items-center text-center">
          <h1 className="text-white text-4xl md:text-7xl font-bold uppercase tracking-widest">
            Planet <span className="text-green-500">Green</span>
          </h1>
          <p className="text-white/80 text-[10px] md:text-sm tracking-[0.4em] uppercase mt-4">
            Come, Join the Revolution
          </p>
        </div> */}
      </section>

      {/* SECTION 2: STICKY IMAGE STACKING */}
      {/* This container holds the images that will "stuck" and overlay */}
      <section className="relative">
        
        {/* First Sticky Image */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074" 
            alt="Image 1" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold">01. Pure Nature</h2>
          </div>
        </div>

        {/* Second Sticky Image - Slides over the first */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070" 
            alt="Image 2" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold">02. Sustainable Life</h2>
          </div>
        </div>

        {/* Third Sticky Image - Slides over the second */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071" 
            alt="Image 3" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold">03. Green Future</h2>
          </div>
        </div>
      </section>

      

    </main>

    {/* SECTION 2.5: PROJECT OVERVIEW (NEW) */}
     <section className="relative w-full bg-stone-50 py-16 px-6 md:px-12 lg:px-[10%] overflow-hidden">
      {/* Container to match your inspector: flex-col with lg:items-start */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
        
        {/* Header Section */}
        <h1 className="text-2xl md:text-3xl text-gray-500 font-light mb-1">Project</h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#4A4A4A] mb-6">
          Overview
        </h2>
        
        <div className="max-w-3xl space-y-4 mb-12">
          <p className="text-lg md:text-xl text-[#727272] leading-relaxed font-medium">
            Ever wondered what it would be like to live by the Eco & the Luxury Villa?
          </p>
          <p className="text-base md:text-lg text-[#727272] leading-relaxed">
            Own your slice of serenity at Dates County - an eco-luxury villa plot community offering 
            residential plots for sale in Hyderabad. Nestled in Kandukur - Srisailam Highway, this 
            self-sufficient community offers every necessity within its vast landscape.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 w-full">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center lg:items-start group">
              <div className="w-20 h-20 rounded-full bg-white shadow-sm border border-stone-100 flex items-center justify-center mb-4 text-stone-600 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="text-lg font-semibold text-[#4A4A4A] tracking-tight">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>




        {/* Heading */}
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "600",
            marginBottom: "40px",
            color: "#222",
            fontFamily: "Optima, sans-serif",
            textAlign: "center",

          }}
        >
          PROJECT
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
          maxWidth: "1200px",
          margin: "50px auto",
        }}
      >
       
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              borderBottom: "2px solid #e0e0e0",
              cursor: "pointer",
              overflow: "hidden",
              transition: "all 0.3s ease",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottom = "2px solid #2a3290";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottom = "2px solid #e0e0e0";
            }}
          >
            {/* Image */}
            <div
              style={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                height: "320px",
              }}
            >
              <img
                src={project.src}
                alt={project.title}
                width={500}
                height={400}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                className="card-img"
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>

            {/* Content */}
            <div style={{ padding: "15px" }}>
              <h3 style={{ margin: "10px 0 5px", fontSize: "18px", fontWeight: "600", fontFamily: "Optima, sans-serif" }}>
                {project.title}
              </h3>
              <p style={{ margin: 0, fontSize: "14px", color: "#555", fontFamily: "'Open Sans', sans-serif" }}>
                {project.location}
              </p>
            </div>

            {/* Arrow Icon */}
            <FaArrowRight
              style={{
                position: "absolute",
                bottom: "15px",
                right: "15px",
                fontSize: "18px",
                color: "#666",
                transition: "color 0.3s ease",
                '&:hover': { color: '#2a3290' }
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Top Decoration & Heading */}
      <div className="text-center mb-12 relative">
        <img src="/tree-icon.png" alt="Tree" className="w-24 mx-auto mb-4" />
        <h2 className="text-4xl font-serif text-slate-800 max-w-md leading-tight">
          Dedicated open, green spaces for relaxation and rejuvenation.
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="relative w-full max-w-2xl h-64">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="bg-black text-white p-10 rounded-xl flex flex-col items-center text-center shadow-2xl"
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-16 h-16 rounded-full border-2 border-gray-600 mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg mb-4">{testimonials[index].name}</h3>
            <p className="text-gray-300 italic text-sm md:text-base leading-relaxed">
              "{testimonials[index].text}"
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Indicators */}
      <div className="flex space-x-3 mt-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full border border-gray-400 transition-all duration-300 ${
              index === i ? "bg-black scale-110" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>


    <section className="container">
      <h2 className="title">Explore Amenities</h2>
      
      <div className="grid-container">
        {amenities.map((item, index) => (
          <div key={index} className={`tile ${item.highlighted ? 'highlighted' : ''}`}>
            <div className="shutter"></div>
            <div className="content">
              <span className="icon">{item.icon}</span>
              <span className="label">{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="view-all">View All Facilities</button>

      <style jsx>{`
        .container {
          background-color: #121212;
          padding: 80px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
        }

        .title {
          color: white;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 40px;
        }

        .grid-container {
          display: grid;
          grid-template-cols: repeat(2, 1fr);
          max-width: 1100px;
          width: 100%;
          border: 0.5px solid rgba(255, 255, 255, 0.1);
        }

        @media (min-width: 768px) { .grid-container { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1024px) { .grid-container { grid-template-columns: repeat(6, 1fr); } }

        .tile {
          position: relative;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 0.5px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          overflow: hidden;
        }

        /* The Shutter Effect */
        .shutter {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #4ade80; /* Green-400 */
          transform: translateY(-100%);
          transition: transform 0.4s ease-in-out;
          z-index: 1;
        }

        .tile:hover .shutter, .tile.highlighted .shutter {
          transform: translateY(0);
        }

        .tile.highlighted .shutter {
          background-color: #22c55e; /* Green-600 */
        }

        /* Content Styles */
        .content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: white;
        }

        .icon {
          font-size: 2rem;
          margin-bottom: 8px;
          transition: transform 0.3s ease;
        }

        /* The Bounce Effect */
        .tile:hover .icon {
          animation: bounce 0.6s infinite;
        }

        .label {
          font-size: 0.85rem;
          font-weight: 500;
          padding: 0 10px;
        }

        .view-all {
          margin-top: 40px;
          padding: 12px 30px;
          background-color: #65a30d;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
 
</>
    
  );
};

// 2. Ensure you have this default export
export default Page;