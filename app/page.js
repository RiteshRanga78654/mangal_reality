

"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize,
  TreePine,
  Wifi,
  Globe,
  Car,
  Map,
  Wallet,
  ShowerHead,
  Users,
  Stethoscope,
  Waves,
  Mountain,
  Wind,
  Flame,
  Trash2,
  Gamepad2,
  Bath,
  Utensils,
  UserPlus,
  MapPin,
  Trees,
  Leaf,
  Home,
  Landmark,
  Palmtree,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import Amenities from "./components/Amenities";


const Page = () => {
  // --- TESTIMONIAL DATA ---
  const testimonials = [
    {
      id: 1,
      name: "Abhishek Tripathi",
      role: "Client",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop",
      text: "Working with Mangal Reality has been a transformative experience for our company. Their team has been instrumental in guiding our digital strategy and implementing innovative solutions.",
    },
    {
      id: 2,
      name: "Anil Mehta",
      role: "Client",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop",
      text: "My efforts in app development have changed massively thanks to Mangal Reality. They have tremendously sophisticated technologies that I use to streamline campaigns and improve outcomes.",
    },
    {
      id: 3,
      name: "Sarah Jenkins",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop",
      text: "The strategic insights provided were invaluable. We saw a 200% increase in engagement within the first quarter. The team is professional, responsive, and truly cares.",
    },
  ];

  const extendedTestimonials = [...testimonials, ...testimonials];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);
  const transitionTime = 500;
  const brandGreen = "#22C55E";

  // --- SLIDER LOGIC ---
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    if (isTransitioning) setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = () => {
    if (isTransitioning) setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  useEffect(() => {
    if (currentIndex === testimonials.length) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, transitionTime);
    }
  }, [currentIndex, testimonials.length]);

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitioning(true));
      });
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => nextSlide(), 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  // --- REUSABLE COMPONENTS ---
  const NavControls = ({ prev, next, brandGreen }) => (
    <div className="flex gap-4">
      <button
        onClick={prev}
        style={{ borderColor: brandGreen }}
        className="w-12 h-12 md:w-14 md:h-14 border flex items-center justify-center hover:bg-[#22c55e] group transition-colors duration-300 rounded-sm"
      >
        <ChevronLeft
          className="w-6 h-6 transition-colors"
          style={{ color: brandGreen }}
        />
        <style jsx>{`
          .group:hover :global(svg) {
            color: white !important;
          }
        `}</style>
      </button>
      <button
        onClick={next}
        style={{ borderColor: brandGreen }}
        className="w-12 h-12 md:w-14 md:h-14 border flex items-center justify-center hover:bg-[#22c55e] group transition-colors duration-300 rounded-sm"
      >
        <ChevronRight
          className="w-6 h-6 transition-colors"
          style={{ color: brandGreen }}
        />
        <style jsx>{`
          .group:hover :global(svg) {
            color: white !important;
          }
        `}</style>
      </button>
    </div>
  );

  // --- AMENITIES DATA ---
  const [visibleCount, setVisibleCount] = useState(18);
  const amenities = [
    { icon: <TreePine />, title: "Plantation Walks" },
    { icon: <Wifi />, title: "Free Wifi" },
    { icon: <Globe />, title: "Travel Desk" },
    { icon: <Car />, title: "Car Parking" },
    { icon: <Map />, title: "Local Tours" },
    { icon: <Wallet />, title: "Guide on Demand" },
    { icon: <ShowerHead />, title: "Premium bathroom" },
    { icon: <Users />, title: "Conference Room" },
    { icon: <Stethoscope />, title: "Doctor on Call" },
    { icon: <Waves />, title: "Natural Rivulet" },
    { icon: <Mountain />, title: "Trekking" },
    { icon: <Wind />, title: "Hair Dryer" },
    { icon: <Flame />, title: "Campfire" },
    { icon: <Trash2 />, title: "Farm Animals" },
    { icon: <Gamepad2 />, title: "Indoor Games" },
    { icon: <Bath />, title: "24hr Hot Water" },
    { icon: <Utensils />, title: "BBQ" },
    { icon: <UserPlus />, title: "Group Booking" },
    { icon: <Flame />, title: "Campfire 2" },
    { icon: <Trash2 />, title: "Farm Animals 2" },
  ];

  const features = [
    { icon: <MapPin />, title: "3000 Villa Plots" },
    { icon: <Trees />, title: "Natural Stream" },
    { icon: <Leaf />, title: "Eco-Friendly Living" },
    { icon: <Home />, title: "Clubhouse" },
    { icon: <Landmark />, title: "Green Parks" },
    { icon: <Palmtree />, title: "Luxury Resorts" },
  ];


  const PROJECTS = [
    {
      id: 1,
      slug: "eco-vista-residences",
      title: "Eco-Vista Residences",
      location: "Visakhapatnam, AP",
      status: "Ongoing",
      area: "2400 - 4500 Sq.Ft",
      type: "Premium Villa Plots",
      description:
        "Eco-Vista represents a new era of sustainable luxury. Nestled in a prime location, it offers wide roads, lush green spaces, and state-of-the-art security for your dream home.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200",
      features: [
        "Vastu Compliant",
        "Solar Lighting",
        "24/7 Security",
        "Parks & Play Areas",
      ],
    },
    {
      id: 2,
      title: "Green-Leaf County",
      location: "Hyderabad, TS",
      status: "Completed",
      area: "1800 - 3200 Sq.Ft",
      type: "Sustainable Living",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800",
      category: "Investment",
    },
    {
      id: 3,
      title: "The Corporate Square",
      location: "Visakhapatnam, AP",
      status: "Upcoming",
      area: "5000+ Sq.Ft",
      type: "Commercial Hub",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800",
      category: "Commercial",
    },
  ];

  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <>
      <main className="relative bg-white">
        {/* SECTION 1: HERO */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-10 w-full h-full object-cover opacity-60"
          >
            <source src="/assets/Reference images/1761819_Panorama_Kartuzy_County_1920x1080.mp4" type="video/mp4" />
          </video>
        </section>

        {/* SECTION 2: STICKY IMAGES */}
        <section className="relative">
          {[
            {
              title: "Pure Nature",
              img: "/assets/Reference images/2659.jpg",
            },
            
            {
              title: "Sustainable Life",
              img: "/assets/Reference images/27.jpg",
            },
            {
              title: "Green Future",
              img: "/assets/Reference images/928.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="sticky top-0 h-screen w-full overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center"></div>
            </div>
          ))}
        </section>

        {/* SECTION 3: OVERVIEW */}
        <section className="py-16 px-4 md:px-12 bg-stone-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-[32px] md:text-[60px] font-bold tracking text-black">
                Project Overview
              </h2>
              <div className="w-20 h-1 bg-[#22C55E] mx-auto md:mx-0"></div>
              <p className="text-xl text-black leading-relaxed pt-4 font-medium">
                Nature, Curated with Luxury
              </p>
              <p className="text-lg text-black leading-relaxed">
                At Mangal Realty, we craft spaces where refined living exists in effortless harmony with nature - spaces designed to nurture both the body and the mind. Inspired by biophilic design principles, our developments thoughtfully integrate natural light, open air, water elements, and abundant greenery to create environments that feel calm, balanced, and deeply restorative.

              </p>
              <p className="text-lg text-black leading-relaxed">
                Every detail is intentionally curated to elevate everyday living - from breathable layouts and serene landscapes to sustainable materials and mindful architecture.
              </p>
              <p className="text-lg text-black leading-relaxed">
                We go beyond conventional luxury to create living experiences rooted in wellness, sustainability, and timeless elegance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-white border border-stone-200 rounded-sm flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500"
                >
                  <div
                    className="mb-4 group-hover:scale-110 transition-transform duration-300  group-hover:animate-bounce"
                    style={{ color: brandGreen }}
                  >
                    {React.cloneElement(item.icon, {
                      size: 36,
                      strokeWidth: 1.5,
                    })}
                  </div>
                  <p className="font-bold text-stone-800 uppercase text-xs tracking-widest leading-tight">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: PROJECTS */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="space-y-2">
              <h2 className="text-[32px] md:text-[60px] font-bold leading-tight text-[#0a1a10]">
                Current Projects
              </h2>
              <div className="w-24 h-1 bg-[#22C55E] mx-auto mb-4"></div>
              {/* <p className="text-gray-400 text-sm">See what our partners have to say</p> */}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <a href={`/projects/completed-projects/${item.slug}`}>
                    <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Status Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="bg-[#22c55e] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                          {item.status}
                        </span>
                      </div>

                      {/* Overlay Info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a10] via-[#0a1a10]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-0 p-8 w-full">
                          <p className="text-green-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                            {item.type}
                          </p>
                          <h3 className="text-white text-2xl md:text-3xl  mb-4 leading-tight" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                            {item.title}
                          </h3>

                          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 mb-6">
                            <div className="flex items-center gap-2 text-white/80">
                              <MapPin size={14} className="text-green-400" />
                              <span className="text-xs">{item.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/80">
                              <Maximize size={14} className="text-green-400" />
                              <span className="text-xs">{item.area}</span>
                            </div>
                          </div>

                          <button className="flex items-center gap-2 text-white font-bold text-[10px]  tracking-widest group/btn">
                            View Project Details
                            <ArrowRight
                              size={14}
                              className="group-hover/btn:translate-x-2 transition-transform text-green-400"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* SECTION 5: AMENITIES */}
        {/* <section className="relative py-16 px-4 overflow-hidden min-h-screen flex items-center">
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2000')",
              backgroundAttachment: "fixed",
            }}
          ></div>
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <header className="mb-12 text-center md:text-left">
              <h2 className="text-white text-[32px] md:text-[60px] font-bold tracking-tighter">
                Explore Amenities
              </h2>
              <div
                className="w-32 h-1 mt-4 mx-auto md:mx-0"
                style={{ backgroundColor: brandGreen }}
              ></div>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              {amenities.slice(0, visibleCount).map((item, i) => (
                <div
                  key={i}
                  className="group relative aspect-square border border-white/10 flex flex-col items-center justify-center overflow-hidden cursor-pointer m-2"
                >
                  <div
                    className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                    style={{ backgroundColor: brandGreen }}
                  ></div>
                  <div className="relative z-10 text-[green] group-hover:text-white transition-all duration-300 scale-175 mb-6 group-hover:animate-bounce">
                    {React.cloneElement(item.icon, { strokeWidth: 1.2 })}
                  </div>
                  <span className="relative z-10 text-white group-hover:text-white text-[14px] font-bold tracking-widest text-center px-2">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
            {visibleCount < amenities.length && (
              <div className="mt-16 text-center">
                <button className="group relative cursor-pointer px-12 py-5 text-white font-bold uppercase tracking-widest text-xs overflow-hidden">
                  <span className="relative z-10">View All Facilities</span>
                  <div className="absolute inset-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <div className="absolute inset-1 border border-green-600"></div>
                </button>
              </div>
            )}
          </div>
        </section> */}

        <Amenities />

        {/* SECTION 6: TESTIMONIALS */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Header Section: Now centered for Laptop (60px) and Mobile */}
            <div className="flex flex-col items-center mb-12 text-center">
              <div className="space-y-2">
                <h2 className="text-[32px] md:text-[60px] font-bold leading-tight text-[#0a1a10]">
                  Testimonials
                </h2>
                <div className="w-24 h-1 bg-[#22C55E] mx-auto mb-4"></div>
                {/* <p className="text-gray-400 text-sm">See what our partners have to say</p> */}
              </div>
            </div>

            {/* Slider Track Container */}
            <div
              className="relative w-full"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform"
                  style={{
                    transition: isTransitioning
                      ? `transform ${transitionTime}ms ease-in-out`
                      : "none",
                    transform: `translateX(-${currentIndex * (100 / itemsPerPage)
                      }%)`,
                  }}
                >
                  <div className="flex w-full">
                    {extendedTestimonials.map((item, index) => (
                      <div
                        key={`${item.id}-${index}`}
                        className="flex-shrink-0 px-4"
                        style={{ width: `${100 / itemsPerPage}%` }}
                      >
                        <div className="bg-[#f3f4f6] p-8 rounded-lg shadow-xl border border-gray-100 h-full flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left relative group">
                          <Quote className="absolute top-4 right-4 w-10 h-10 text-gray-200 group-hover:text-[#22c55e]/20 transition-colors" />

                          <div className="relative flex-shrink-0">
                            <div className="w-24 h-24 md:w-28 md:h-28 bg-white overflow-hidden rounded-sm border-2 border-gray-200">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                              />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#22c55e] rounded-sm"></div>
                          </div>

                          <div className="flex-1 z-10">
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 italic">
                              "{item.text}"
                            </p>
                            <div>
                              <h4 className="text-[#0a1a10] font-bold text-lg tracking-wide">
                                {item.name}
                              </h4>
                              <p className="text-[#22c55e] text-sm font-medium">
                                {item.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Buttons: Bottom Right for Laptop, Hidden on Mobile here */}
              <div className="hidden md:flex justify-end mt-8 pr-4">
                <NavControls
                  prev={prevSlide}
                  next={nextSlide}
                  brandGreen={brandGreen}
                />
              </div>
            </div>

            {/* Mobile Navigation Buttons: Remains centered under slider */}
            <div className="flex md:hidden justify-center mt-8">
              <NavControls
                prev={prevSlide}
                next={nextSlide}
                brandGreen={brandGreen}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
