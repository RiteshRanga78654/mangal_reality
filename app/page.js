"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  MapPin,
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
      role: "Happy Resident & Investor, Smart City, Dakamarri",
      image: "/assets/images/testi-1.jpg",
      text: "After research for two years, we were very clear that Smart City Dakamarri is the true winner. We need infrastructure, connectivity to NH-45, an airport nearby, and speedy registration. We required all these facilities, and our children are playing safely. Our investment is growing gradually. This is what makes Smart City a true winner!",
    },
    {
      id: 2,
      name: "Anil Mehta",
      role: "Smart Investor & Plot Owner, Smart City, Dakamarri",
      image: "/assets/images/testi-2.jpg",
      text: "After scrutinizing various investment opportunities in the Vizag corridor, Smart City Dakamarri ticked all our boxes  just 600 meters away from NH-45 and merely 5 minutes away from Bhogapuram Airport. The transparency of Mangal Reality and the accessibility of the plot to IT SEZ did the trick. This is not merely a plot of land - this is our family’s future in Vizag's fastest growth area!",
    },
    {
      id: 3,
      name: "Ashish Aggarwal",
      role: "Marketing Director",
      image: "/assets/images/testi-3.jpg",
      text: "Just 250 meters away from the highway, and I must say, the location of Green Meadows is just perfect! Plus, with the airport already up and running, not to mention the coastal corridor project, we can say that the property we own in this 6-acre gated community is already worth a smart investment!",
    },
    {
      id: 4,
      name: "Rohit Sharma",
      role: "Long-term Investor & Resident, The Nature Valley, Pisini",
      image: "/assets/images/testi-4.jpg",
      text: "The value of the 47 acres of property at Nature Valley, unmatched in the world: 61+ amenities not to be found elsewhere. This location is the hub of the industrial triangle of Vizag, Vizianagaram, and Srikakulam districts. Well, well, well, now this is called legacy planning. This is progressive planning, and we are proud to be a part of this!",
    },
    {
      id: 5,
      name: "Sumit Nagar",
      role: "Satisfied Investor, Green Meadows, Jonnada",
      image: "/assets/images/testi-5.jpg",
      text: "We have visited and seen Mangal Reality's Smart City project completed and were impressed  they indeed deliver what they promise! Our investment in Green Meadows also appreciated by 18% in the first year itself. It is just 250 meters away from the highway with great connectivity at no premium cost!",
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
      location: "Vizianagaram, AP",
      status: "On Going",
      area: "90+ Acres",
      image: "/assets/images/WhatsApp Image 2026-01-29 at 11.12.55 AM (1).jpeg",
      link: "https://the-nature-city.vercel.app/"
    },
    {
      id: 1,
      slug: "the-nature-valley",
      title: "The Nature Valley (Phase 2)",
      location: "Pisini, AP",
      status: "On Going",
      area: "30 Acres ",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200",
      link: "/the-nature-valley-phase2"
    },
    {
      id: 4,
      slug: "nature-valley-phase-1",
      title: "The Nature Valley (Phase 1)",
      location: "Pisini, AP",
      status: "Completed",
      area: "17 Acres",
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

  // CAROUSEL LOGIC FOR PROJECTS
  const [projectIndex, setProjectIndex] = useState(0);
  const [projectsVisible, setProjectsVisible] = useState(3);
  const [isProjectPaused, setIsProjectPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setProjectsVisible(1);
      else if (window.innerWidth < 1024) setProjectsVisible(2);
      else setProjectsVisible(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextProject = useCallback(() => {
    setProjectIndex((prev) => (prev + 1 >= PROJECTS.length - (projectsVisible - 1) ? 0 : prev + 1));
  }, [projectsVisible]);

  const prevProject = () => {
    setProjectIndex((prev) => (prev === 0 ? PROJECTS.length - projectsVisible : prev - 1));
  };

  useEffect(() => {
    if (!isProjectPaused) {
      const interval = setInterval(nextProject, 4000);
      return () => clearInterval(interval);
    }
  }, [isProjectPaused, nextProject]);

  const STICKY_CONTENT = [
    {
      label: "Gather. Grow. Glow",
      title: "Nature Embrace Family's Grace",
      desc: "In the heart of Miyawaki Forest invites families to reconnect with what matters is simplicity, authenticity and laughter around the dinner table.",
      img: "/assets/images/banner-1.jpeg"
    },
    {
      label: "Roots. Breathes. Blooms.",
      title: "Authentic Living",
      desc: "Harvest from 100+ native varieties, enjoy fresh Gaushala milk daily, and pluck-and-cook vegetables in fully-equipped kitchens. IGBC-certified green living with nature.",
      img: "/assets/images/banner-2.jpeg"
    },
    {
      label: "Rise. Run. Win.",
      title: "Where Every Game Counts.",
      desc: "Mangal Reality is engineering spaces where sport and adventurers go farther every single day.",
      img: "/assets/images/banner-3.jpeg"
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
                  Mangal Realty, India's No.1 Eco-Luxury Real Estate Developer in Vizag, Andhra Pradesh. We create future-ready plotted developments and premium villas across prime Visakhapatnam locations. Our RERA-approved, IGBC Platinum-certified projects feature sustainable design, modern sports amenities, and adventure zones perfect for families seeking elevated lifestyles.
                </p>
                {/* <p>
                  We don't just build homes; we nurture environments where wellness is woven into everyday living.
                </p> */}
                <p>
                 With a customer-first approach, Mangal Realty delivers sustainable communities where families enjoy elevated living and investors benefit from high-growth real estate opportunities in Vizag.

                </p>
              </div>
            </div>
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
                  <p className="font-bold text-stone-800 text-xs tracking-widest leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: PROJECTS CAROUSEL */}
        <section className="py-24 bg-white overflow-hidden ">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center mb-16 text-center mt-[-3rem]">
              <h2 className="text-4xl md:text-7xl font-bold leading-tight text-[#0a1a10]">Current Projects</h2>
              <div className="w-24 h-1 bg-[#22C55E] mx-auto mb-4"></div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setIsProjectPaused(true)}
              onMouseLeave={() => setIsProjectPaused(false)}
            >
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${projectIndex * (100 / projectsVisible)}%)` }}
                >
                  {PROJECTS.map((project) => (
                    <div
                      key={project.id}
                      className="px-2 flex-shrink-0"
                      style={{ width: `${100 / projectsVisible}%` }}
                    >
                      <motion.div
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="relative group cursor-pointer overflow-hidden rounded-[1.5rem] bg-[#0a1a10] h-[450px]"
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

                        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 pointer-events-none">
                          <motion.div
                            animate={{ y: hoveredId === project.id ? 0 : 20, opacity: 1 }}
                            className="space-y-4 pointer-events-auto"
                          >
                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{project.title}</h3>
                            <AnimatePresence>
                              {hoveredId === project.id && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="space-y-6 overflow-hidden">
                                  <div className="flex gap-4 text-white">
                                    <div className="flex items-center gap-2">
                                      <MapPin size={16} className="text-[#22c55e]" />
                                      <span className="text-xs font-medium">{project.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Maximize size={16} className="text-[#22c55e]" />
                                      <span className="text-xs font-medium">{project.area}</span>
                                    </div>
                                  </div>
                                  <a href={project.link} className="relative inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-[10px] tracking-widest overflow-hidden group/btn">
                                    <span className="relative z-10 flex items-center gap-2">
                                      Explore Details <ArrowRight size={14} />
                                    </span>
                                    <div className="absolute inset-0 bg-[#22c55e] scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left" />
                                    <div className="absolute inset-0 border border-[#22c55e]" />
                                  </a>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PROJECT NAVIGATION */}
              <div className="flex justify-center gap-4 mt-12">
                <button
                  onClick={prevProject}
                  style={{ borderColor: brandGreen }}
                  className="w-12 h-12 border flex items-center justify-center hover:bg-[#22c55e] transition-colors rounded-sm group"
                >
                  <ChevronLeft className="w-6 h-6 text-[#22c55e] group-hover:text-white" />
                </button>
                <button
                  onClick={nextProject}
                  style={{ borderColor: brandGreen }}
                  className="w-12 h-12 border flex items-center justify-center hover:bg-[#22c55e] transition-colors rounded-sm group"
                >
                  <ChevronRight className="w-6 h-6 text-[#22c55e] group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <Amenities />

        {/* SECTION 6: TESTIMONIALS */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="text-4xl md:text-7xl font-bold leading-tight text-[#0a1a10] tracking-tighter uppercase">Testimonials</h2>
              <div className="w-24 h-1.5 bg-[#22C55E] mx-auto mb-4 rounded-none"></div>
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
                        {/* Fixed Height Card: Added h-[320px] and flex-col justify-between */}
                        <div className="bg-[#f8fafc] p-6 h-[320px] rounded-none border border-slate-200 flex flex-col justify-between text-left relative group hover:border-[#22C55E]/50 transition-all">

                          <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-200 group-hover:text-[#22c55e]/20" />

                          {/* Scrollable Text Area: Added overflow-y-auto to keep box size static */}
                          <div className="z-10 mt-4 overflow-y-auto pr-2 custom-scrollbar">
                            <p className="text-black text-sm md:text-base leading-relaxed">
                              "{item.text}"
                            </p>
                          </div>

                          {/* Bottom Row: Always sticks to the bottom because of justify-between */}
                          <div className="flex items-center gap-4 pt-4 border-t border-slate-100 flex-shrink-0">
                            <div className="relative flex-shrink-0">
                              <div className="w-12 h-12 md:w-14 md:h-14 bg-white overflow-hidden rounded-none border border-slate-200">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                              </div>
                            </div>

                            <div className="flex-1">
                              <h4 className="text-[#0a1a10] font-bold text-sm md:text-base tracking-tight uppercase leading-none">
                                {item.name}
                              </h4>
                              <p className="text-[#22c55e] text-[10px] font-bold tracking-widest uppercase mt-1">
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

              <div className="hidden md:flex justify-center mt-8 pr-4 text-[#22c55e]">
                <NavControls prev={prevSlide} next={nextSlide} />
              </div>
            </div>

            <div className="flex md:hidden justify-center mt-8 text-black">
              <NavControls prev={prevSlide} next={nextSlide} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;