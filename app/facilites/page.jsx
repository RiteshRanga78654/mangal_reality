"use client";
import React from 'react';
import { 
  AlertCircle, Wifi, BatteryCharging, ShieldCheck, SunMedium, Droplets, 
  Stethoscope, FastForward, Flame, Heart, Footprints, Trees, 
  Activity, Wind, Users, Car, Globe, Bath, ChevronRight, 
  Home as HomeIcon, Zap, Map, Trash2, Construction, Gavel, Radio
} from 'lucide-react';

export default function FacilitiesPage() {
  const brandGreen = "#22c55e";

  // ALL 97 FACILITIES ORGANIZED BY ZONE
  const facilityZones = [
    {
      name: "Security & Smart Tech",
      icon: <ShieldCheck />,
      items: [
        "CCTV Surveillance", "RFID Gate", "Society Software", "Solar Fencing", "Round-Clock Security", 
        "EPABX Line", "Walkie-Talkie", "Public Address", "Optical Fibre", "Common WiFi", 
        "Digital Meters", "Geo Tagging", "Compound Wall", "Wall Height"
      ]
    },
    {
      name: "Water & Eco Management",
      icon: <Droplets />,
      items: [
        "Water Quality", "Rainwater Harvesting", "Water Treatment", "Overhead Tank", "Water Distribution", 
        "Pond Development", "Borewells", "Plot Irrigation", "Common Irrigation", "Drain Waste", 
        "Sludge Management", "Bio-Waste", "Agro Waste", "Kitchen Waste", "E-Waste", "Waste Grading"
      ]
    },
    {
      name: "Infrastructure & Roads",
      icon: <Construction />,
      items: [
        "Grand Entrance", "Skid-Free Roads", "Designer Pavements", "Road Reflectors", "Zebra Crossings", 
        "Street Lighting", "Light Intervals", "Emergency Lighting", "Feeder Pillars", "Power Backup", 
        "Pavement Dustbins", "Street Cleaning", "Plot Ramp", "Designer Landscaping", "Themed Landscapes"
      ]
    },
    {
      name: "Greenery & Environment",
      icon: <Trees />,
      items: [
        "Tree Plantation", "Avenue Plantation", "Plantation Adoption", "Free Plantation", "Tree Grills", 
        "Tree Paintings", "Greenery Islands", "Air Quality", "Mosquito Trap", "Bird Houses", "Forest Trail"
      ]
    },
    {
      name: "Emergency & Healthcare",
      icon: <Stethoscope />,
      items: [
        "Emergency Care", "Emergency Room", "Ambulance Service", "First Aid", "Society Clinic", 
        "Special Care Centre", "First Aid Centre", "On-Call Maintenance"
      ]
    },
    {
      name: "Transport & Energy",
      icon: <Zap />,
      items: [
        "EV Charging", "Solar Energy System", "Fuel Station", "Golf Cart", "Car Parking", 
        "Car Washing", "Travel Desk", "Cycle Track", "Buggy Ride", "24hr Hot Water"
      ]
    },
    {
      name: "Signage & Navigation",
      icon: <Map />,
      items: [
        "Street Names", "Direction Signages", "Location Maps", "Junction Signboards", "Digital Map", 
        "Plot Identifiers", "Musical Pathways", "Pathway Water", "Post Box"
      ]
    },
    {
      name: "Management & Legal",
      icon: <Gavel />,
      items: [
        "Clear Titles", "RERA Approvals", "Easy Documentation", "Quality Standards", "Property Tax", 
        "Legal Assistance", "Architecture Services", "Construction Services", "Property Maintenance", 
        "Property Valuation", "Resale Services", "Complimentary Maintenance", "Material Quality", 
        "Admin Office", "Staff Quarters", "Staff Rooms", "Driver Toilets", "Maintenance Lounge", 
        "Flag Hoisting", "Eco Market", "Conference Room"
      ]
    }
  ];

  const ItemCard = ({ icon, title }) => (
    <div className="group relative border border-white/5 flex items-center gap-3 p-3 cursor-pointer bg-white/5 hover:bg-[#22c55e] transition-all duration-300">
      <div className="text-[#22c55e] group-hover:text-black transition-colors">
        {React.cloneElement(icon, { size: 16 })}
      </div>
      <span className="text-white group-hover:text-black text-[10px] md:text-[11px] font-bold tracking-wider uppercase leading-tight truncate">
        {title}
      </span>
    </div>
  );

  return (
    <main className="bg-[#0a0a0a] min-h-screen pb-20 font-sans">
      {/* Header */}
      <header className="relative h-[72vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2000')" }} />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
            <a href="/" className="hover:text-white transition-colors flex items-center gap-1"><HomeIcon size={12}/> Home</a>
            <ChevronRight size={12} />
            <span className="text-[#22c55e]">Facilities</span>
          </nav>
          <h1 className="text-white text-4xl md:text-6xl font-black tracking-tighter ">
            97 <span style={{ color: brandGreen }}>Essential</span> Facilities
          </h1>
          {/* <p className="text-white/40 mt-4 tracking-[0.4em] text-[10px] uppercase font-bold">Foundation of a Future-Ready Community</p> */}
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        {facilityZones.map((zone, idx) => (
          <section key={idx} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-[#22c55e]">{zone.icon}</div>
              <h2 className="text-white text-xl md:text-2xl font-black uppercase tracking-widest">{zone.name}</h2>
              <div className="h-[1px] flex-1 bg-white/10"></div>
              <span className="text-white/20 text-[10px] font-bold uppercase">{zone.items.length} Items</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {zone.items.map((item, itemIdx) => (
                <ItemCard key={itemIdx} icon={zone.icon} title={item} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer Branding */}
      {/* <footer className="max-w-7xl mx-auto px-4 mt-20">
        <div className="border-t border-white/10 pt-10 text-center">
          <p className="text-white/30 text-[9px] uppercase tracking-[0.5em] font-bold mb-4">
            Mangal Realty • Superior Infrastructure Standards
          </p>
        </div>
      </footer> */}
    </main>
  );
}