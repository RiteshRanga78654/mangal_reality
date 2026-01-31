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

const StatCounter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const numericValue = parseInt(endValue.replace(/\D/g, ""));
  const suffix = endValue.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.5 },
    );

    if (countRef.current) observer.observe(countRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * numericValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, numericValue, duration]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

const Page = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const stats = [
    { number: "20+", label: "Years of Legacy" },
    { number: "10+", label: "Projects Completed" },
    { number: "50+", label: "Team" },
    { number: "500+", label: "Happy Families" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Abhishek Tripathi",
      role: "Client",
      image: "/assets/images/testi-1.jpg",
      text: "Working with Mangal Reality has been a transformative experience for our company. Their team has been instrumental in guiding our digital strategy and implementing innovative solutions.",
    },
    {
      id: 2,
      name: "Anil Mehta",
      role: "Client",
      image: "/assets/images/testi-2.jpg",
      text: "My efforts in app development have changed massively thanks to Mangal Reality. They have tremendously sophisticated technologies that I use to streamline campaigns and improve outcomes.",
    },
    {
      id: 3,
      name: "Tanu Aggarwal",
      role: "Marketing Director",
      image: "/assets/images/testi-3.jpg",
      text: "The strategic insights provided were invaluable. We saw a 200% increase in engagement within the first quarter. The team is professional, responsive, and truly cares.",
    },
    {
      id: 4,
      name: "Rohit Sharma",
      role: "Client",
      image: "/assets/images/testi-4.jpg",
      text: "Working with Mangal Reality has been a transformative experience for our company. Their team has been instrumental in guiding our digital strategy and implementing innovative solutions.",
    },
    {
      id: 5,
      name: "Sumit Nagar",
      role: "Client",
      image: "/assets/images/testi-5.jpg",
      text: "My efforts in app development have changed massively thanks to Mangal Reality. They have tremendously sophisticated technologies that I use to streamline campaigns and improve outcomes.",
    },
    {
      id: 6,
      name: "Tanu Aggarwal",
      role: "Marketing Director",
      image: "/assets/images/testi-6.jpg",
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

  const NavControls = ({ prev, next, brandGreen }) => (
    <div className="flex gap-4">
      <button
        onClick={prev}
        style={{ borderColor: brandGreen }}
        className="w-12 h-12 md:w-14 md:h-14 border flex items-center justify-center hover:bg-[#22c55e] group transition-colors duration-300 rounded-sm"
      >
        <ChevronLeft className="w-6 h-6 transition-colors" style={{ color: brandGreen }} />
      </button>
      <button
        onClick={next}
        style={{ borderColor: brandGreen }}
        className="w-12 h-12 md:w-14 md:h-14 border flex items-center justify-center hover:bg-[#22c55e] group transition-colors duration-300 rounded-sm"
      >
        <ChevronRight className="w-6 h-6 transition-colors" style={{ color: brandGreen }} />
      </button>
    </div>
  );

  const PROJECTS = [
    {
      id: 5,
      slug: "the-nature-city",
      title: "The Nature City",
      location: "Pisini, AP",
      status: "On Going",
      area: "100 Acres ",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200",
      link: "https://the-nature-city.vercel.app/"
    },
    {
      id: 1,
      slug: "the-nature-valley",
      title: "The Nature Valley (Phase 2)",
      location: "Pisini, AP",
      status: "On Going",
      area: "45 Acres ",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200",
      link: "/the-nature-valley-phase2"
    },
    {
      id: 4,
      slug: "nature-valley-phase-1",
      title: "The Nature Valley (Phase 1)",
      location: "Pisini, AP",
      status: "Completed",
      area: "25 Acres",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200",
      link: "/the-nature-valley-phase1"
    },

    {
      id: 2,
      slug: "smart-city",
      title: "The Smart City ",
      location: "Dakamari, AP",
      status: "Completed",
      area: "3 Acres",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800",
      link: "/the-smart-city"
    },
    {
      id: 3,
      slug: "green-meadows",
      title: "The Green Meadows",
      location: "Jonnada, AP",
      status: "Completed",
      area: "5 Acres",
      image: "/assets/images/jonnada-project.jpg",
      link: "/the-green-meadows"
    },
  ];

  // STICKY SECTION DATA
  const STICKY_CONTENT = [
    {
      label: "Nature Embrace",
      title: "Family's Grace",
      desc: "At Mangal Realty, we craft spaces where wellness isn't a program — it's a way of life.",
      img: "/assets/Reference images/2659.jpg"
    },
    {
      label: "Gather. Grow. Glow.",
      title: "Authentic Living",
      desc: "In the heart of Miyawaki Forest invite families to reconnect with what matters — simplicity, authenticity, laughter.",
      img: "/assets/Reference images/27.jpg"
    },
    {
      label: "Where Roots Grow Deep.",
      title: "Where Hearts Grow Strong.",
      desc: "Mangal Realty is creating spaces where health blooms, joy thrives, and legacies grow.",
      img: "/assets/Reference images/928.jpg"
    },
  ];

  return (
    <>
      <main className="relative bg-white">
        {/* SECTION 1: HERO */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
          <video autoPlay loop muted playsInline className="absolute z-10 w-full h-full object-cover opacity-60">
            <source src="/assets/Reference images/1761819_Panorama_Kartuzy_County_1920x1080.mp4" type="video/mp4" />
          </video>
        </section>

        {/* SECTION 2: STICKY IMAGES */}
        <section className="relative">
          {STICKY_CONTENT.map((item, i) => (
            <div key={i} className="sticky top-0 h-screen w-full overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 z-[11]"></div>

              {/* Overlay Content with exactly your code's font styles */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 text-white">
                <span className="text-xl leading-relaxed mb-4 font-medium uppercase tracking-widest">
                  {item.label}
                </span>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-4">
                  {item.title}
                </h2>
                <div className="w-20 h-1 bg-[#22C55E] mx-auto mb-6"></div>
                <p className="max-w-3xl text-lg md:text-xl font-medium leading-relaxed opacity-90">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* SECTION 3: Who We Are */}
        <section className="py-16 px-4 md:px-12 bg-stone-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Content */}
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-black">
                Who We Are
              </h2>
              <div className="w-20 h-1 bg-[#22C55E] mx-auto md:mx-0"></div>

              <p className="text-xl text-black leading-relaxed pt-4 font-medium">
                Where Roots Grow Deep. Where Hearts Grow Strong
              </p>

              <div className="space-y-4 text-lg text-black/70 leading-relaxed">
                <p>
                  At Mangal Realty, we heartily believe a home is more than just concrete walls,it's where
                  families' healthiest, happiest chapter begins.
                </p>
                <p>
                 We don't just build homes; we nurture environments where wellness is woven into everyday living.

                </p>
                <p>
                  We create  spaces where sustainable design supports families to grow healthy, happy,
                  and whole—together with nature.
                </p>
              </div>
            </div>

            {/* Right Side: Stats Counter Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-white border border-stone-200 rounded-sm flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500"
                >
                  <div
                    className="mb-2 text-4xl md:text-5xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:animate-bounce"
                    style={{ color: brandGreen }}
                  >
                    <StatCounter endValue={item.number} />
                  </div>
                  <p className="font-bold text-stone-800  text-xs tracking-widest leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: PROJECTS */}
        <section className="py-24 bg-white overflow-hidden ">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center mb-16 text-center mt-[-3rem]">
              <h2 className="text-4xl md:text-7xl font-bold leading-tight text-[#0a1a10]">Current Projects</h2>
              <div className="w-24 h-1 bg-[#22C55E] mx-auto mb-4"></div>
            </div>

            <div className="flex flex-col lg:flex-row h-auto lg:h-[700px] gap-4">
              {PROJECTS.map((project) => (
                <motion.div
                  key={project.id}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  animate={{ flex: hoveredId === project.id ? 2.5 : 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative group cursor-pointer overflow-hidden rounded-[1.5rem] bg-[#0a1a10] min-h-[400px] lg:min-h-0"
                >
                  <a href={project.link} className="absolute inset-0 z-0">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      style={{ filter: "brightness(0.8)" }}
                    />
                  </a>

                  <div className="absolute top-8 left-8 z-10 pointer-events-none">
                    <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-full text-xs font-bold tracking-widest ">
                      {project.status}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 pointer-events-none">
                    <motion.div
                      animate={{ y: hoveredId === project.id ? 0 : 20, opacity: hoveredId === project.id ? 1 : 0.8 }}
                      className="space-y-4 pointer-events-auto"
                    >
                      <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-[250px]">{project.title}</h3>
                      <AnimatePresence>
                        {hoveredId === project.id && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="space-y-6 overflow-hidden">
                            <div className="flex gap-8 text-white/70">
                              <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-[#22c55e]" />
                                <span className="text-sm font-medium">{project.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Maximize size={18} className="text-[#22c55e]" />
                                <span className="text-sm font-medium">{project.area}</span>
                              </div>
                            </div>
                            <a href={project.link} className="relative inline-flex items-center gap-3 px-12 py-5 text-white font-bold text-xs tracking-widest overflow-hidden group/btn">
                              <span className="relative z-10 flex items-center gap-2">
                                Explore Details <ArrowRight size={18} />
                              </span>
                              <div className="absolute inset-1 bg-[#22c55e] scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left" />
                              <div className="absolute inset-1 border border-[#22c55e]" />
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {hoveredId !== project.id && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap -rotate-90 pointer-events-none">
                        <p className="text-white/30 text-2xl font-bold tracking-[0.1em] ">{project.title.split(' ').slice(-1)}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Amenities />

        {/* SECTION 6: TESTIMONIALS */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="text-4xl md:text-7xl font-bold leading-tight text-[#0a1a10]">Testimonials</h2>
              <div className="w-24 h-1 bg-[#22C55E] mx-auto mb-4"></div>
            </div>
            <div className="relative w-full" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform"
                  style={{
                    transition: isTransitioning ? `transform ${transitionTime}ms ease-in-out` : "none",
                    transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                  }}
                >
                  <div className="flex w-full">
                    {extendedTestimonials.map((item, index) => (
                      <div key={`${item.id}-${index}`} className="flex-shrink-0 px-4" style={{ width: `${100 / itemsPerPage}%` }}>
                        <div className="bg-[#f3f4f6] p-8 rounded-lg shadow-xl border border-gray-100 h-full flex flex-col md:flex-row gap-6 items-center text-left relative group">
                          <Quote className="absolute top-4 right-4 w-10 h-10 text-gray-200 group-hover:text-[#22c55e]/20" />
                          <div className="relative flex-shrink-0">
                            <div className="w-24 h-24 md:w-28 md:h-28 bg-white overflow-hidden rounded-sm border-2 border-gray-200">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#22c55e] rounded-sm"></div>
                          </div>
                          <div className="flex-1 z-10">
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 italic">"{item.text}"</p>
                            <div>
                              <h4 className="text-[#0a1a10] font-bold text-lg tracking-wide">{item.name}</h4>
                              <p className="text-[#22c55e] text-sm font-medium">{item.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-end mt-8 pr-4">
                <NavControls prev={prevSlide} next={nextSlide} brandGreen={brandGreen} />
              </div>
            </div>
            <div className="flex md:hidden justify-center mt-8">
              <NavControls prev={prevSlide} next={nextSlide} brandGreen={brandGreen} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;