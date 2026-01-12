'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About Us', href: '#' },
    { name: 'Project Highlights', href: '#' },
    { name: 'Why Invest', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Awards', href: '#' },
    { name: 'Blogs', href: '#' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/50 backdrop-blur-md py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12"> 
              <Image
                src="/images/mangal-realty-logo.png"   
                alt="Mangal Realty"
                fill 
                priority 
                className="object-contain"
              />
            </div>
          </div>

          <button 
            onClick={() => setIsOpen(true)}
            className="flex flex-col justify-between w-7 h-5 focus:outline-none group"
          >
            <span className="block h-0.5 w-full bg-white shadow-sm transition-all group-hover:bg-green-400"></span>
            <span className="block h-0.5 w-full bg-white shadow-sm transition-all group-hover:bg-green-400"></span>
            <span className="block h-0.5 w-full bg-white shadow-sm transition-all group-hover:bg-green-400"></span>
          </button>
        </div>
      </header>

      {/* DRAWER OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop - Click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-[90] backdrop-blur-sm"
            />

            {/* The Half-Screen Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] md:w-[40%] bg-black z-[100] shadow-2xl p-10 flex flex-col"
            >
              {/* Close Button at top of drawer */}
              <div className="flex justify-end mb-12">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-green-400 transition-colors"
                >
                  <X size={32} />
                </button>
              </div>

              {/* Menu Links - Left aligned like a list */}
              <nav className="flex flex-col gap-6">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white text-xl md:text-2xl font-serif hover:text-green-400 transition-colors block border-b border-white/10 pb-2"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Optional: Footer info in drawer */}
              <div className="mt-auto text-gray-500 text-xs uppercase tracking-widest">
                Mangal Realty © 2026
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}