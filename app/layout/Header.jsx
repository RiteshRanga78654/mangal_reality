'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Desktop dropdown state
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Mobile accordion state
  const [mobileMenus, setMobileMenus] = useState({
    about: false,
    projects: false,
    gallery: false // Added gallery tracking
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      name: 'About Us', 
      href: '#',
      id: 'about',
      subLinks: [
        { name: 'Vision & Mission', href: '/about-us/vision-mission' },
        { name: 'Our Leadership', href: '/about-us/our-leadership' },
        { name: 'Strategic Partner', href: '/about-us/strategic-partner' },
      ]
    },
    { 
      name: 'Projects', 
      href: '#',
      id: 'projects',
      subLinks: [
        { name: 'Ongoing ', href: '/projects/ongoing' },
        { name: 'Completed', href: '/projects/completed-projects' },
      ]
    },
    { name: 'Why Invest', href: '/why-invest' },
    { 
      name: 'Gallery', 
      href: '#',
      id: 'gallery',
      subLinks: [
        { name: 'Our Videos', href: '/gallery/our-videos' },
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        { name: 'Our Creatives', href: '/gallery/creatives' },
        { name: 'Press Coverage', href: '/gallery/press-coverages' },
=======
=======
>>>>>>> Stashed changes
        { name: 'Our Creatives', href: '/gallery/our-creatives' },
        { name: 'Press Coverage', href: '/gallery/press' },
>>>>>>> Stashed changes
      ]
    },
    { name: 'Career', href: '/career' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const toggleMobileMenu = (id) => {
    setMobileMenus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-[#0A1A10]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between pl-20 pr-10">
          
          {/* LOGO */}
          <div className="flex items-center">
            <Link href="/" className="relative block w-36 h-12"> 
              <img
                src="/mangal-realty-logo.png"   
                alt="Mangal Realty"
                className="object-contain w-full h-full"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.subLinks && setActiveDropdown(item.name)}
                onMouseLeave={() => item.subLinks && setActiveDropdown(null)}
              >
                <Link 
                  href={item.href}
                  className="text-white text-[13px] font-medium hover:text-green-400 transition-colors flex items-center gap-1 uppercase tracking-widest py-2"
                >
                  {item.name}
                  {item.subLinks && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                </Link>

                <AnimatePresence>
                  {item.subLinks && activeDropdown === item.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-[#2b6642]/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/10 overflow-hidden"
                    >
                      <div className="flex flex-col py-2">
                        {item.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="px-6 py-3 text-white hover:bg-white/10 transition-colors font-medium text-sm"
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

          {/* MOBILE HAMBURGER */}
          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex flex-col justify-between w-7 h-5 focus:outline-none group cursor-pointer"
          >
            <span className="block h-0.5 w-full bg-white transition-all group-hover:bg-green-400"></span>
            <span className="block h-0.5 w-full bg-white transition-all group-hover:bg-green-400"></span>
            <span className="block h-0.5 w-full bg-white transition-all group-hover:bg-green-400"></span>
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 z-[90] backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] bg-[#0A1A10] z-[100] shadow-2xl p-10 flex flex-col"
            >
              <div className="flex justify-end mb-12">
                <button onClick={() => setIsOpen(false)} className="text-white hover:text-green-400 p-2 border border-white/10 rounded-full">
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-4 overflow-y-auto no-scrollbar">
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
                          className="flex items-center justify-between text-white text-2xl font-serif border-b border-white/10 pb-4 w-full text-left"
                        >
                          {item.name}
                          <ChevronDown className={`transition-transform duration-300 ${mobileMenus[item.id] ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileMenus[item.id] && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }} 
                              animate={{ height: 'auto', opacity: 1 }} 
                              exit={{ height: 0, opacity: 0 }} 
                              className="overflow-hidden bg-white/5 rounded-lg mt-2"
                            >
                              {item.subLinks.map((sub) => (
                                <Link 
                                  key={sub.name} 
                                  href={sub.href} 
                                  onClick={() => setIsOpen(false)} 
                                  className="block px-6 py-4 text-gray-300 hover:text-green-400 border-b border-white/5 last:border-0"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link 
                        href={item.href} 
                        onClick={() => setIsOpen(false)} 
                        className="text-white text-2xl font-serif block border-b border-white/10 pb-4"
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto text-gray-500 text-[10px] uppercase tracking-[0.3em] pt-8">
                Mangal Realty Group © 2026
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}