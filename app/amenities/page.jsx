"use client";
import React from 'react';
import { 
  TreePine, Wifi, Globe, Car, Map, Wallet, 
  ShowerHead, Users, Stethoscope, Waves, 
  Mountain, Wind, Flame, Gamepad2, Bath, 
  Utensils, UserPlus, Trash2,
  Bike, Zap, Tent, Heart, Landmark, Ship, 
  Binoculars, Palette, ShieldCheck, Camera, 
  Activity, Music, Trophy, BatteryCharging, Droplets,
  Dumbbell, Leaf, Flower2, Home, Footprints, 
  Sun, BookOpen, Coffee, Waves as Pool, 
  AlertCircle, SunMedium, Construction, 
  Stethoscope as Clinic, FastForward, 
  Users2, Radiation, Trees, ChevronRight
} from 'lucide-react';

export default function AllAmenitiesPage() {
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

  const facilities = [
    { icon: <AlertCircle />, title: "Emergency Room" },
    { icon: <Wifi />, title: "24/7 Free Wifi" },
    { icon: <BatteryCharging />, title: "EV Charging Stations" },
    { icon: <ShieldCheck />, title: "24/7 CCTV Security" },
    { icon: <SunMedium />, title: "Solar Energy System" },
    { icon: <Droplets />, title: "Water Treatment Plant" },
    { icon: <Clinic />, title: "Society Clinic" },
    { icon: <FastForward />, title: "Skating Rink" },
    { icon: <Flame />, title: "Camp Fire Zone" },
    { icon: <Heart />, title: "Special Care Centre" },
    { icon: <Footprints />, title: "Walking Track" },
    { icon: <Trees />, title: "Forest Trail" },
    { icon: <Activity />, title: "Zumba Room" },
    { icon: <Wind />, title: "Aerobic Area" },
    { icon: <Users />, title: "Conference Room" },
    { icon: <Droplets />, title: "Borewells" },
    { icon: <Car />, title: "Car Parking" },
    { icon: <Globe />, title: "Travel Desk" },
    { icon: <Bath />, title: "24hr Hot Water" },
    { icon: <Stethoscope />, title: "First Aid Centre" },
  ];

  // This component now uses the exact same logic as your AmenitiesSection
  const ItemCard = ({ icon, title }) => (
    <div className="group relative aspect-square border border-white/10 flex flex-col items-center justify-center overflow-hidden cursor-pointer">
      {/* Sliding Green Background */}
      <div 
        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" 
        style={{ backgroundColor: brandGreen }}
      ></div>
      
      {/* Icon with Bounce Animation */}
      <div className="relative z-10 text-[#22c55e] group-hover:text-white transition-all duration-300 mb-4 group-hover:animate-bounce">
        {React.cloneElement(icon, { size: 36, strokeWidth: 1.2 })}
      </div>
      
      {/* Text Label */}
      <span className="relative z-10 text-white text-[10px] md:text-[12px] font-bold tracking-widest text-center px-4 ">
        {title}
      </span>
    </div>
  );

  return (
    <main className="bg-[#0a0a0a] min-h-screen pb-20">
      {/* Header Section */}
      <header className="relative h-[72vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2000')" }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 mb-8 text-[10px] md:text-xs font-bold tracking-[0.1em] text-white">
            <a href="/" className="hover:text-[#22c55e] flex items-center gap-1 transition-colors">
              <Home size={12} /> Home
            </a>
            <ChevronRight size={12} className="opacity-40" />
            <span className="text-[#22c55e]">All Features</span>
          </nav>
          <h1 className="text-white text-4xl md:text-7xl font-bold tracking-tighter  mb-4">
            World-Class <span style={{ color: brandGreen }}>Living</span>
          </h1>
          <div className="w-24 h-1 bg-[#22c55e] mx-auto"></div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 mt-20">
        {/* --- AMENITIES SECTION --- */}
        <section className="mb-24">
          <header className="mb-12 flex flex-col items-center lg:items-start">
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tighter ">
              Amenities
            </h2>
            <div className="w-20 h-1 mt-2" style={{ backgroundColor: brandGreen }}></div>
          </header>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {amenities.map((item, idx) => (
              <ItemCard key={idx} icon={item.icon} title={item.title} />
            ))}
          </div>
        </section>

        {/* --- FACILITIES SECTION --- */}
        <section>
          <header className="mb-12 flex flex-col items-center lg:items-start">
            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tighter ">
              Facilities
            </h2>
            <div className="w-20 h-1 mt-2" style={{ backgroundColor: brandGreen }}></div>
          </header>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {facilities.map((item, idx) => (
              <ItemCard key={idx} icon={item.icon} title={item.title} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}