"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Desktop dropdown state
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Mobile accordion state
  const [mobileMenus, setMobileMenus] = useState({
    about: false,
    projects: false,
    gallery: false,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "About Us",
      href: "#",
      id: "about",
      subLinks: [
        { name: "Vision & Mission", href: "/about-us/vision-mission" },
        { name: "Our Leadership", href: "/about-us/our-leadership" },
        { name: "Strategic Partner", href: "/about-us/strategic-partner" },
      ],
    },
    {
      name: "Projects",
      href: "#",
      id: "projects",
      subLinks: [
        { name: "Ongoing ", href: "https://the-nature-valley.vercel.app/" },
        { name: "Completed", href: "/projects/completed-projects" },
      ],
    },
    {
      name: "Gallery",
      href: "#",
      id: "gallery",
      subLinks: [
        { name: 'Our Videos', href: '/gallery/our-videos' },
        { name: 'Our Creatives', href: '/gallery/our-creatives' },
        { name: 'Press Coverage', href: '/gallery/press-coverages' },
      ]
    },
    { name: "Career", href: "/career" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const toggleMobileMenu = (id) => {
    setMobileMenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A1A10]/95 backdrop-blur-md py-4 shadow-lg"
            : "bg-transparent py-6 lg:py-8"
        }`}
      >
        {/* Container: px-6 for mobile left-alignment, lg:pl-20 for desktop */}
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:pl-20 lg:pr-10">
          
          {/* LOGO - Left aligned */}
          <div className="flex items-center">
            <Link href="/" className="relative block w-28 md:w-36 h-10 md:h-12">
              <img
                src="/mangal-realty-logo.png"
                alt="Mangal Realty"
                className="object-contain w-full h-full"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.subLinks && setActiveDropdown(item.name)}
                onMouseLeave={() => item.subLinks && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-white text-[12px] xl:text-[13px] font-medium hover:text-green-400 transition-colors flex items-center gap-1 uppercase tracking-widest py-2"
                >
                  {item.name}
                  {item.subLinks && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.subLinks && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-[#0A1A10] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="flex flex-col py-3">
                        {item.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="px-6 py-3 text-white hover:bg-white/5 hover:text-green-400 transition-colors font-medium text-sm"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* MOBILE HAMBURGER - Visible on small/med screens */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex flex-col justify-between w-6 h-4.5 focus:outline-none group cursor-pointer"
          >
            <span className="block h-0.5 w-full bg-white transition-all group-hover:bg-green-400"></span>
            <span className="block h-0.5 w-full bg-white transition-all group-hover:bg-green-400 my-1"></span>
            <span className="block h-0.5 w-full bg-white transition-all group-hover:bg-green-400"></span>
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/90 z-[90] backdrop-blur-sm"
            />

            {/* Content Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-[#0A1A10] z-[100] shadow-2xl flex flex-col"
            >
              {/* Close Button Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/5">
                <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-green-400 p-2 border border-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto py-8 px-6 no-scrollbar">
                <div className="flex flex-col gap-6">
                  {menuItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      {item.subLinks ? (
                        <div className="flex flex-col">
                          <button
                            onClick={() => toggleMobileMenu(item.id)}
                            className="flex items-center justify-between text-white text-lg font-medium py-2 w-full text-left group"
                          >
                            <span className="group-hover:text-green-400 transition-colors uppercase tracking-wider">{item.name}</span>
                            <ChevronDown
                              size={18}
                              className={`text-white/40 transition-transform duration-300 ${
                                mobileMenus[item.id] ? "rotate-180 text-green-400" : ""
                              }`}
                            />
                          </button>
                          
                          <AnimatePresence>
                            {mobileMenus[item.id] && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-white/5 rounded-xl mt-2"
                              >
                                <div className="flex flex-col py-2">
                                  {item.subLinks.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      href={sub.href}
                                      onClick={() => setIsOpen(false)}
                                      className="block px-6 py-4 text-gray-400 hover:text-green-400 hover:bg-white/5 text-sm font-medium transition-all"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-white text-lg font-medium block py-2 hover:text-green-400 transition-colors uppercase tracking-wider"
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}