"use client";
import React from 'react';
import { 
  Users, Users2, Trophy, Activity, Landmark, Dumbbell, Leaf, 
  Flower2, Home, Ship, Footprints, Sun, Music, BookOpen, 
  Waves as Pool, Heart, Coffee, Camera, ChevronRight, Home as HomeIcon 
} from 'lucide-react';

export default function AmenitiesPage() {
  const brandGreen = "#22c55e";

  const amenities = [
    { icon: <Users />, title: "Club House" },
    { icon: <Users2 />, title: "Senior Citizen Park" },
    { icon: <Trophy />, title: "Multiple Sports Courts" },
    { icon: <Activity />, title: "Adventure Zone" },
    { icon: <Landmark />, title: "Temple & Goshala" },
    { icon: <Dumbbell />, title: "Premium Fitness Facilities" },
    { icon: <Leaf />, title: "Organic Gardens" },
    { icon: <Flower2 />, title: "Cultural & Activity Lawns" },
    { icon: <Home />, title: "Luxury Farm House" },
    { icon: <Ship />, title: "Boating Facility" },
    { icon: <Footprints />, title: "Wellness Pathways" },
    { icon: <Sun />, title: "Vitamin-D Zone" },
    { icon: <Music />, title: "Amphitheatre" },
    { icon: <BookOpen />, title: "Reading Lounge" },
    { icon: <Pool />, title: "Aqua Gym" },
    { icon: <Activity />, title: "Meditation Room" },
    { icon: <Heart />, title: "Massage Centre" },
    { icon: <Coffee />, title: "Cafeteria" },
    { icon: <Pool />, title: "Kids Play Pool" },
    { icon: <Camera />, title: "Selfie Point" },
  ];

  const ItemCard = ({ icon, title }) => (
    <div className="group relative aspect-square border border-white/10 flex flex-col items-center justify-center overflow-hidden cursor-pointer bg-white/5">
      <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" style={{ backgroundColor: brandGreen }}></div>
      <div className="relative z-10 text-[#22c55e] group-hover:text-white transition-all duration-300 mb-4 group-hover:animate-bounce">
        {React.cloneElement(icon, { size: 40, strokeWidth: 1.2 })}
      </div>
      <span className="relative z-10 text-white text-[11px] md:text-[13px] font-bold tracking-widest text-center px-4 ">
        {title}
      </span>
    </div>
  );

  return (
    <main className="bg-[#0a0a0a] min-h-screen pb-20">
      <header className="relative h-[72vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000')" }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 mb-6 text-xs font-bold tracking-widest text-white/60">
            <a href="/" className="hover:text-white transition-colors flex items-center gap-1"><HomeIcon size={14}/> Home</a>
            <ChevronRight size={14} />
            <span className="text-[#22c55e]">Amenities</span>
          </nav>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter ">
            Amenities <span style={{ color: brandGreen }}></span>
          </h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {amenities.map((item, idx) => (
            <ItemCard key={idx} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </main>
  );
}