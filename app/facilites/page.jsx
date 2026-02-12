"use client";
import React from 'react';
import { 
  AlertCircle, Wifi, BatteryCharging, ShieldCheck, SunMedium, Droplets, 
  Stethoscope, FastForward, Flame, Heart, Footprints, Trees, 
  Activity, Wind, Users, Car, Globe, Bath, ChevronRight, Home as HomeIcon 
} from 'lucide-react';

export default function FacilitiesPage() {
  const brandGreen = "#22c55e";

  const facilities = [
    { icon: <AlertCircle />, title: "Emergency Room" },
    { icon: <Wifi />, title: "24/7 Free Wifi" },
    { icon: <BatteryCharging />, title: "EV Charging Stations" },
    { icon: <ShieldCheck />, title: "24/7 CCTV Security" },
    { icon: <SunMedium />, title: "Solar Energy System" },
    { icon: <Droplets />, title: "Water Treatment Plant" },
    { icon: <Stethoscope />, title: "Society Clinic" },
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
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2000')" }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 mb-6 text-xs font-bold tracking-widest text-white/60">
            <a href="/" className="hover:text-white transition-colors flex items-center gap-1"><HomeIcon size={14}/> Home</a>
            <ChevronRight size={14} />
            <span className="text-[#22c55e]">Facilities</span>
          </nav>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter ">
           Facilities<span style={{ color: brandGreen }}></span>
          </h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {facilities.map((item, idx) => (
            <ItemCard key={idx} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </main>
  );
}