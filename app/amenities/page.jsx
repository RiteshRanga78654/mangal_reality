"use client";
import React from 'react';
import { 
  Users, Trophy, Activity, Landmark, Dumbbell, Leaf, 
  Flower2, Home, Ship, Footprints, Sun, Music, BookOpen, 
  Waves as Pool, Heart, Coffee, Camera, ChevronRight, 
  Home as HomeIcon, Tent, Zap, Baby, Gamepad2, Bike
} from 'lucide-react';

export default function AmenitiesPage() {
  const brandGreen = "#22c55e";

  // ALL 188 AMENITIES ORGANIZED BY ZONE
  const amenityZones = [
    {
      name: "Adventure & Thrill Zone",
      icon: <Activity />,
      items: [
        "Go-Karting", "Burma Bridge", "Zipline Adventure", "Tire Bridge", "Swinging Planks", 
        "Paintball Arena", "Double Tandem", "Baby Wagon", "Rope Challenge", "ATV Riding", 
        "Mountain Biking", "Sky Cycling", "Wall Climbing", "Trampoline Park", "Kids Jungle", 
        "Skating Rink", "Box Cricket", "Futsal Court", "Air Hockey", "Punching Bag"
      ]
    },
    {
      name: "Agro & Farming Excellence",
      icon: <Leaf />,
      items: [
        "Hydroponic Farm", "Polyhouse Farm", "Net House", "Goat Walking", "Aeroponic Farm", 
        "Aquaponic Farm", "Farm Nursery", "Farm Plantation", "Farming Amenities", "Lease Farmers", 
        "Expert Farmers", "Agro Activities", "Topsoil Utilization", "Millet Garden", "Spice Garden", 
        "Herbal Garden", "Pulses Garden", "Agro Garden", "Vegetable Garden", "Flower Garden", 
        "Organic Fruits", "Neem Garden", "Bamboo Garden", "Orchid Park", "Butterfly Garden", 
        "Palm Garden", "Rock Garden", "Coconut Garden", "Green Park"
      ]
    },
    {
      name: "Wellness & Spiritual Life",
      icon: <Heart />,
      items: [
        "Cow Hugging", "Cow Meditation", "Sage Way", "Temple", "Goshala", "O3 Zone", 
        "Reflexology Pathway", "Laughing Park", "Vitamin Zone", "Aroma Garden", "Meditation Lawn", 
        "Outdoor Meditation", "Massage Centre", "Yoga Area", "Meditation Room", "Massage Chair", 
        "Zumba Room", "Relaxation Zone", "Puja Garden", "Traditional Zone", "Traditional Living"
      ]
    },
    {
      name: "Stay & Outdoor Life",
      icon: <Tent />,
      items: [
        "Luxury Farmhouse", "Luxury Tents", "Forest Cottage", "Bubble Tent", "Night Camping", 
        "Campfire Area", "Fire Pit", "Camp House", "Sky Gazing", "Sunrise Point", "Buggy Ride", 
        "Picnic Zones", "Plug Cook", "Hammock Garden", "Tree House", "Tree Gazebo", "Stone Chair", 
        "Bean Bags", "Lazy Deck", "Tulip Seating", "Landscape Seating", "Pergola Seating"
      ]
    },
    {
      name: "Water & Aqua Sports",
      icon: <Pool />,
      items: [
        "Boating Lake", "Aqua Gym", "Aqua Volleyball", "Water Falls", "Pool Swing", 
        "SPA Seaters", "Sunken Seating", "Toddler Pool", "Pool Party", "Pool Viewing", 
        "Pool Basketball", "Swimming Pool", "Kids Pool", "Bath Area", "Dressing Room", "Outdoor Showers"
      ]
    },
    {
      name: "Sports & Professional Fitness",
      icon: <Trophy />,
      items: [
        "Interactive Gym", "Indoor Gym", "Outdoor Gym", "Digital Workout", "Functional Training", 
        "HIIT Area", "Senior Gym", "Aerobic Area", "Walking Track", "Walking Pathway", "Cycle Track", 
        "Complimentary Bikes", "Kabaddi Court", "Kho-Kho Court", "Volleyball Court", "Basketball Court", 
        "Badminton Court", "Tennis Court", "Throw Ball", "Interactive Squash", "Kids Squash"
      ]
    },
    {
      name: "Kids & Social Play",
      icon: <Baby />,
      items: [
        "Tot Lot", "Kids PSP", "Ball Pit", "Kids Play", "Kids Lounge", "Slides", "Swing Areas", 
        "Hopscotch Ground", "Lawn Mound", "Pottery Art", "Blackboard Wall", "Painting Wall", 
        "Art Craft", "Sand Castle", "Cognitive Play", "Floor Games", "Chime Garden", "Tic-Tac-Toe", 
        "Ludo Game", "Dart Game"
      ]
    },
    {
      name: "Club & Community",
      icon: <Users />,
      items: [
        "Club House", "Cafeteria", "Amphitheatre Projector", "Digital Library", "Reading Zone", 
        "Reading Lounge", "Video Games", "Virtual Gaming", "Snooker Table", "Table Tennis", 
        "Carrom Board", "Chess Board", "Foosball Table", "TV Lounge", "Party Hall", "Dance Floor", 
        "Association Room", "Convino Store", "Mobile Charging", "Accessible Facilities", "Demo Villas", 
        "Selfie Point", "Celebrity Wishes", "Panchayat Lawn", "Festival Lawn", "Activity Lawn", 
        "Party Lawn", "Family Lawn", "Open Play", "Senior Park"
      ]
    }
  ];

  const ItemCard = ({ icon, title }) => (
    <div className="group relative border border-white/5 flex items-center gap-3 p-3 cursor-pointer bg-white/5 hover:bg-[#22c55e] transition-all duration-300">
      <div className="text-[#22c55e] group-hover:text-black transition-colors">
        {React.cloneElement(icon, { size: 16 })}
      </div>
      <span className="text-white group-hover:text-black text-[10px] md:text-[11px] font-bold tracking-wider  leading-tight truncate">
        {title}
      </span>
    </div>
  );

  return (
    <main className="bg-[#0a0a0a] min-h-screen pb-20 font-sans">
      {/* Header */}
      <header className="relative h-[72vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000')" }} />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 text-center px-4">
          <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] font-bold tracking-[0.3em] text-white/40 ">
            <a href="/" className="hover:text-white transition-colors flex items-center gap-1"><HomeIcon size={12}/> Home</a>
            <ChevronRight size={12} />
            <span className="text-[#22c55e]">Amenities</span>
          </nav>
          <h1 className="text-white text-4xl md:text-6xl font-black tracking-tighter">
            188 <span style={{ color: brandGreen }}>Elite</span> Amenities
          </h1>
          {/* <p className="text-white/40 mt-4 tracking-[0.4em] text-[10px]  font-bold">Unrivaled Excellence in Every Detail</p> */}
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        {amenityZones.map((zone, idx) => (
          <section key={idx} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-[#22c55e]">{zone.icon}</div>
              <h2 className="text-white text-xl md:text-2xl font-black  tracking-widest">{zone.name}</h2>
              <div className="h-[1px] flex-1 bg-white/10"></div>
              <span className="text-white/20 text-[10px] font-bold ">{zone.items.length} Items</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {zone.items.map((item, itemIdx) => (
                <ItemCard key={itemIdx} icon={zone.icon} title={item} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      {/* <footer className="max-w-7xl mx-auto px-4 mt-20">
        <div className="border-t border-white/10 pt-10 text-center">
          <p className="text-white/30 text-[9px]  tracking-[0.5em] font-bold mb-4">
            Mangal Realty • Green Meadows Jonnada
          </p>
        </div>
      </footer> */}
    </main>
  );
}