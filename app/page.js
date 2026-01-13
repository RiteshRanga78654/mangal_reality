"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { TreePine, Wifi, Globe, Car, Map, Wallet, ShowerHead, Users, Stethoscope, Waves, Mountain, Wind, Flame, Trash2, Gamepad2, Bath, Utensils, UserPlus, MapPin, Trees, Leaf, Home, Landmark, Palmtree, ArrowRight } from 'lucide-react';


const Page = () => {
  const [visibleCount, setVisibleCount] = useState(18);
  const [index, setIndex] = useState(0);

  // Custom Brand Color: #71b256
  const brandGreen = "#22C55E";

  const showMore = () => setVisibleCount(prev => prev + 6);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const amenities = [
    { icon: <TreePine />, title: 'Plantation Walks' },
    { icon: <Wifi />, title: 'Free Wifi' },
    { icon: <Globe />, title: 'Travel Desk' },
    { icon: <Car />, title: 'Car Parking' },
    { icon: <Map />, title: 'Local Tours' },
    { icon: <Wallet />, title: 'Guide on Demand' },
    { icon: <ShowerHead />, title: 'Premium bathroom' },
    { icon: <Users />, title: 'Conference Room' },
    { icon: <Stethoscope />, title: 'Doctor on Call' },
    { icon: <Waves />, title: 'Natural Rivulet' },
    { icon: <Mountain />, title: 'Trekking' },
    { icon: <Wind />, title: 'Hair Dryer' },
    { icon: <Flame />, title: 'Campfire' },
    { icon: <Trash2 />, title: 'Farm Animals' },
    { icon: <Gamepad2 />, title: 'Indoor Games' },
    { icon: <Bath />, title: '24hr Hot Water' },
    { icon: <Utensils />, title: 'BBQ' },
    { icon: <UserPlus />, title: 'Group Booking' },
    { icon: <Flame />, title: 'Campfire 2' },
    { icon: <Trash2 />, title: 'Farm Animals 2' },
  ];

  const testimonials = [
    {
      name: "PANKAJ SHARMA",
      text: "The property is under development but has tremendous potential; has a lot of green cover and the staff is excellent.",
      image: "https://i.pravatar.cc/150?u=pankaj",
    },
    {
      name: "ANJALI RAO",
      text: "Beautifully designed green spaces. It feels like a retreat away from the city noise. Highly recommend for families.",
      image: "https://i.pravatar.cc/150?u=anjali",
    },
    {
      name: "VIKRAM SINGH",
      text: "Excellent customer service and transparent dealings. The progress on site is quite impressive.",
      image: "https://i.pravatar.cc/150?u=vikram",
    }
  ];

  const features = [
    { icon: <MapPin />, title: "3000 Villa Plots" },
    { icon: <Trees />, title: "Natural Stream" },
    { icon: <Leaf />, title: "Eco-Friendly Living" },
    { icon: <Home />, title: "Clubhouse" },
    { icon: <Landmark />, title: "Green Parks" },
    { icon: <Palmtree />, title: "Luxury Resorts" },
  ];

  const projects = [
    {
      src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000",
      title: "THE NATURE VALLEY",
      location: "Visakhapatnam, Andhra Pradesh",
    },
    {
      src: "/assets/images/top-view-5-scaled.jpg",
      title: "GREEN MEADOWS",
      location: "Jonnada, Visakhapatnam",
    },
    {
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000",
      title: "SMART CITY",
      location: "Bondapalli, Vizianagaram",
    },
  ];

  return (

    <>
    
    <main className="relative bg-white">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <video autoPlay loop muted playsInline className="absolute z-10 w-full h-full object-cover opacity-60">
          <source src="/assets/videos/slider-video.mp4" type="video/mp4" />
        </video>
       
      </section>

      {/* SECTION 2: STICKY IMAGES */}
      <section className="relative">
        {[
          { title: "Pure Nature", img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074" },
          { title: "Sustainable Life", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070" },
          { title: "Green Future", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071" }
        ].map((item, i) => (
          <div key={i} className="sticky top-0 h-screen w-full overflow-hidden">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
               {/* <span className="text-white/70 text-lg mb-2 tracking-widest uppercase">Chapter</span> */}
               {/* <h2 className="text-white text-5xl md:text-8xl font-bold uppercase italic">0{i+1}. {item.title}</h2> */}
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 3: OVERVIEW */}
      <section className="py-24 px-6 md:px-12 bg-stone-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold  " style={{ color: brandGreen }}>Project</h1>
            <h2 className="text-4xl md:text-7xl font-bold text-stone-800 leading-none">Overview</h2>
            <div className="w-20 h-1" style={{ backgroundColor: brandGreen }}></div>
            <p className="text-xl text-black leading-relaxed pt-4 font-medium ">
              Ever wondered what it would be like to live by the Eco & the Luxury Villa?
            </p>
            <p className="text-lg text-black leading-relaxed">
              Own your slice of serenity at Dates County - an eco-luxury villa plot community offering 
              residential plots for sale in Hyderabad. Nestled in Kandukur - Srisailam Highway, this 
              self-sufficient community offers every necessity within its vast landscape.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {features.map((item, i) => (
              <div key={i} className="p-8 bg-white border border-stone-200 rounded-sm flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300" style={{ color: brandGreen }}>
                  {React.cloneElement(item.icon, { size: 36, strokeWidth: 1.5 })}
                </div>
                <p className="font-bold text-stone-800 uppercase text-xs tracking-widest leading-tight">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PROJECTS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking text-black">Current Projects</h2>
          <div className="w-24 h-1 mx-auto mt-4" style={{ backgroundColor: brandGreen }}></div>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5] rounded-lg shadow-lg">
                <img src={project.src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                   <div className="w-full flex justify-between items-center">
                      <div>
                        <h3 className="text-white text-xl font-bold ">{project.title}</h3>
                        <p className="text-white/70 text-xs mt-1  ">{project.location}</p>
                      </div>
                      <div className="p-3 rounded-full bg-white/20 backdrop-blur-md">
                        <ArrowRight className="text-white" size={20} />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: AMENITIES */}
      <section className="relative py-24 px-6 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2000')",
          backgroundAttachment: 'fixed'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <header className="mb-16 text-center md:text-left">
            <h2 className="text-white text-5xl md:text-6xl font-bold  tracking-tighter">Explore Amenities</h2>
            <div className="w-32 h-1 mt-4 mx-auto md:mx-0" style={{ backgroundColor: brandGreen }}></div>
          </header>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {amenities.slice(0, visibleCount).map((item, i) => (
              <div key={i} className="group relative aspect-square border border-white/10 flex flex-col items-center justify-center overflow-hidden cursor-pointer">
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" style={{ backgroundColor: brandGreen }}></div>
                
                <div className="relative z-10 text-white group-hover:text-white transition-colors duration-300 mb-4 scale-125 group-hover:scale-110">
                  {React.cloneElement(item.icon, { strokeWidth: 1.2 })}
                </div>
                <span className="relative z-10 text-white group-hover:text-white text-[10px] font-bold uppercase tracking-widest text-center px-2">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {visibleCount < amenities.length && (
            <div className="mt-16 text-center">
              <button 
                onClick={showMore} 
                className="hover:bg-white cursor-pointer border-2 px-12 py-4 font-bold tracking-widest transition-all duration-300"
                style={{ borderColor: brandGreen, color: 'white', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = brandGreen;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                View All Facilities
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Leaf className="mx-auto mb-4" size={48} style={{ color: brandGreen }} />
            <h2 className="text-5xl md:text-6xl font-bold text-black uppercase tracking-tighter">Community Voice</h2>
          </div>

          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                   <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-24 h-24 rounded-full grayscale hover:grayscale-0 transition-all duration-500 object-cover border-4 border-stone-100"
                  />
                  <div className="absolute -bottom-2 -right-2 p-2 rounded-full bg-stone-100">
                    <Users size={16} style={{ color: brandGreen }} />
                  </div>
                </div>
                
                <p className="text-black text-2xl md:text-3xl font-light leading-relaxed mb-10 max-w-3xl">
                  "{testimonials[index].text}"
                </p>
                
                <div className="flex flex-col items-center">
                   <h3 className="font-bold text-stone-800 tracking-[0.3em] text-lg uppercase">{testimonials[index].name}</h3>
                   <div className="w-8 h-1 mt-2" style={{ backgroundColor: brandGreen }}></div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center space-x-6 mt-16">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="h-1 transition-all duration-500 ease-in-out"
                  style={{ 
                    width: index === i ? '40px' : '20px', 
                    backgroundColor: index === i ? brandGreen : '#e5e7eb' 
                  }}
                />
              ))}
            </div>
          </div>
        </div>

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
     
    </main>
     
  </>
);

};

export default Page;
