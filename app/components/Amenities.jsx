"use client";
import React, { useState } from 'react';
import { 
  TreePine, Wifi, Globe, Car, Map, Wallet, 
  ShowerHead, Users, Stethoscope, Waves, 
  Mountain, Wind, Flame, Gamepad2, Bath, 
  Utensils, UserPlus, Trash2 
} from 'lucide-react';

export default function AmenitiesSection() {
  const brandGreen = "#22c55e";

  // State to track how many items to show for each side
  const [amenitiesCount, setAmenitiesCount] = useState(6);
  const [facilitiesCount, setFacilitiesCount] = useState(6);

  const amenities = [
    { icon: <TreePine />, title: "Plantation Walks" },
    { icon: <Waves />, title: "Natural Rivulet" },
    { icon: <Mountain />, title: "Trekking" },
    { icon: <Flame />, title: "Campfire" },
    { icon: <Gamepad2 />, title: "Indoor Games" },
    { icon: <Utensils />, title: "BBQ" },
    { icon: <Trash2 />, title: "Farm Animals" },
    { icon: <Map />, title: "Local Tours" },
    { icon: <Wallet />, title: "Guide on Demand" },
  ];

  const facilities = [
    { icon: <Wifi />, title: "Free Wifi" },
    { icon: <Globe />, title: "Travel Desk" },
    { icon: <Car />, title: "Car Parking" },
    { icon: <ShowerHead />, title: "Premium bathroom" },
    { icon: <Users />, title: "Conference Room" },
    { icon: <Stethoscope />, title: "Doctor on Call" },
    { icon: <Wind />, title: "Hair Dryer" },
    { icon: <Bath />, title: "24hr Hot Water" },
    { icon: <UserPlus />, title: "Group Booking" },
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

            {/* --- Left SIDE: FACILITIES --- */}
          <div className="flex flex-col">
            <header className="mb-10 text-center lg:text-left">
              <h2 className="text-white text-[32px] md:text-[50px] font-bold tracking-tighter uppercase">
                Facilities
              </h2>
              <div className="w-24 h-1 mt-2 mx-auto lg:mx-0" style={{ backgroundColor: brandGreen }}></div>
            </header>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {facilities.slice(0, facilitiesCount).map((item, i) => (
                <div key={i} className="group relative aspect-square border border-white/10 flex flex-col items-center justify-center overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" style={{ backgroundColor: brandGreen }}></div>
                  <div className="relative z-10 text-[#22c55e] group-hover:text-white transition-all duration-300 mb-4 group-hover:animate-bounce">
                    {React.cloneElement(item.icon, { size: 36, strokeWidth: 1.2 })}
                  </div>
                  <span className="relative z-10 text-white text-[11px] md:text-[13px] font-bold tracking-widest text-center px-2 uppercase">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Button for Facilities */}
            {facilitiesCount < facilities.length && (
              <div className="mt-10 text-center lg:text-left">
                <button 
                  onClick={() => setFacilitiesCount(facilities.length)}
                  className="group relative cursor-pointer px-8 py-4 text-white font-bold uppercase tracking-widest text-[10px] overflow-hidden"
                >
                  <span className="relative z-10">View All Facilities</span>
                  <div className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <div className="absolute inset-0 border border-green-600"></div>
                </button>
              </div>
            )}
          </div>

          {/* --- Right SIDE: AMENITIES --- */}
          <div className="flex flex-col">
            <header className="mb-10 text-center lg:text-left">
              <h2 className="text-white text-[32px] md:text-[50px] font-bold tracking-tighter uppercase">
                Amenities
              </h2>
              <div className="w-24 h-1 mt-2 mx-auto lg:mx-0" style={{ backgroundColor: brandGreen }}></div>
            </header>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {amenities.slice(0, amenitiesCount).map((item, i) => (
                <div key={i} className="group relative aspect-square border border-white/10 flex flex-col items-center justify-center overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" style={{ backgroundColor: brandGreen }}></div>
                  <div className="relative z-10 text-[#22c55e] group-hover:text-white transition-all duration-300 mb-4 group-hover:animate-bounce">
                    {React.cloneElement(item.icon, { size: 36, strokeWidth: 1.2 })}
                  </div>
                  <span className="relative z-10 text-white text-[11px] md:text-[13px] font-bold tracking-widest text-center px-2 uppercase">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Button for Amenities */}
            {amenitiesCount < amenities.length && (
              <div className="mt-10 text-center lg:text-left">
                <button 
                  onClick={() => setAmenitiesCount(amenities.length)}
                  className="group relative cursor-pointer px-8 py-4 text-white font-bold uppercase tracking-widest text-[10px] overflow-hidden"
                >
                  <span className="relative z-10">View All Amenities</span>
                  <div className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <div className="absolute inset-0 border border-green-600"></div>
                </button>
              </div>
            )}
          </div>

        

        </div>
      </div>
    </section>
  );
}