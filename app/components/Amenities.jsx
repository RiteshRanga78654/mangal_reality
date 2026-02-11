"use client";
import React from 'react';
import { 
  Wifi, Globe, Car, ShieldCheck, 
  Droplets, BatteryCharging, AlertCircle, SunMedium,
  Users, Trophy, Activity, Landmark, Dumbbell, Leaf
} from 'lucide-react';

export default function AmenitiesSection() {
  const brandGreen = "#22c55e";

  // Displaying only the first 6 for the grid
  const amenities = [
    { icon: <Users />, title: "Club House" },
    { icon: <Trophy />, title: "Multiple Sports Courts" },
    { icon: <Activity />, title: "Adventure Zone" },
    { icon: <Landmark />, title: "Temple & Goshala" },
    { icon: <Dumbbell />, title: "Premium Fitness Facilities" },
    { icon: <Leaf />, title: "Organic Gardens" },
  ];

  const facilities = [
    { icon: <AlertCircle />, title: "Emergency Room" },
    { icon: <Wifi />, title: "24/7 Free Wifi" },
    { icon: <BatteryCharging />, title: "EV Charging Stations" },
    { icon: <ShieldCheck />, title: "24/7 CCTV Security" },
    { icon: <SunMedium />, title: "Solar Energy System" },
    { icon: <Droplets />, title: "Water Treatment Plant" },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden min-h-screen flex items-center">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2000')",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

          {/* --- LEFT SIDE: FACILITIES --- */}
          <div className="flex flex-col">
            <header className="mb-10 text-center lg:text-left">
              <h2 className="text-white text-4xl md:text-6xl font-bold  tracking-tighter  ">
                Facilities
              </h2>
              <div className="w-24 h-1 mt-2 mx-auto lg:mx-0" style={{ backgroundColor: brandGreen }}></div>
            </header>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {facilities.map((item, i) => (
                <div key={i} className="group relative aspect-square border border-white/10 flex flex-col items-center justify-center overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" style={{ backgroundColor: brandGreen }}></div>
                  <div className="relative z-10 text-[#22c55e] group-hover:text-white transition-all duration-300 mb-4 group-hover:animate-bounce">
                    {React.cloneElement(item.icon, { size: 36, strokeWidth: 1.2 })}
                  </div>
                  <span className="relative z-10 text-white text-[11px] md:text-[13px] font-bold tracking-widest text-center px-2 ">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center lg:text-left">
              <a 
                href="/amenities" 
                className="inline-block group relative cursor-pointer px-8 py-4 text-white font-bold tracking-widest text-[12px] overflow-hidden"
              >
                <span className="relative z-10">View All Facilites</span>
                <div className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <div className="absolute inset-0 border border-green-600"></div>
              </a>
            </div>
          </div>

          {/* --- RIGHT SIDE: AMENITIES --- */}
          <div className="flex flex-col">
            <header className="mb-10 text-center lg:text-left">
              <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tighter">
                Amenities
              </h2>
              <div className="w-24 h-1 mt-2 mx-auto lg:mx-0" style={{ backgroundColor: brandGreen }}></div>
            </header>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {amenities.map((item, i) => (
                <div key={i} className="group relative aspect-square border border-white/10 flex flex-col items-center justify-center overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" style={{ backgroundColor: brandGreen }}></div>
                  <div className="relative z-10 text-[#22c55e] group-hover:text-white transition-all duration-300 mb-4 group-hover:animate-bounce">
                    {React.cloneElement(item.icon, { size: 36, strokeWidth: 1.2 })}
                  </div>
                  <span className="relative z-10 text-white text-[11px] md:text-[13px] font-bold tracking-widest text-center px-2 ">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center lg:text-left">
              <a 
                href="/amenities" 
                className="inline-block group relative cursor-pointer px-8 py-4 text-white font-bold tracking-widest text-[12px] overflow-hidden"
              >
                <span className="relative z-10">View All Amenities</span>
                <div className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <div className="absolute inset-0 border border-green-600"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}