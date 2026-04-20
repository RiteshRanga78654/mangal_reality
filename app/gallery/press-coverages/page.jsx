"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, ChevronRight, MapPin, Calendar, ArrowLeft,
  ArrowUpRight, Play, Users, Clock, Image as ImageIcon
} from 'lucide-react';
import Footer from "../../layout/Footer";

const brandGreen = "#22C55E";
const darkBg = "#0A1A10";

// ─── EVENT DATA ───────────────────────────────────────────────────────────────
const events = [
  // ─── EXISTING EVENTS (KEEP SAME) ───
  // (your old 3 events stay here unchanged)

  // ─── NEW EVENTS (2026) ───

  {
    id: 4,
    category: "Community Event",
    title: "Cancer Awareness Drive & Rángéela Cultural Carnival",
    subtitle: "Health Awareness & Cultural Celebration",
    date: "1st",
    month: "Feb",
    location: "Visakhapatnam, Andhra Pradesh",
    heroImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
    thumbnailImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600",
    collageImages: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    ],
    excerpt: "A powerful blend of health awareness and vibrant cultural celebration in Visakhapatnam.",
    about: `Mangal Realty actively participated in two impactful community events on 1st February 2026 - a Cancer Awareness Drive presented by Terapanth Mahila Mandal, Visakhapatnam, and Rángéela - A Cultural Carnival, hosted at the iconic INS Submarine Lawns, Visakhapatnam.

Both events reflected Mangal Realty's ongoing commitment to community engagement, social responsibility, and cultural celebration.

The Cancer Awareness Drive was organized in observance of World Cancer Day, creating meaningful awareness ahead of an upcoming Pap Smear Test Camp. The initiative brought together local women, health advocates, and community leaders - building a platform where awareness meets action. Mangal Realty's participation underscored its belief that a responsible brand extends its presence beyond real estate into the health and well-being of the communities it serves.

Later on the same day, the energy shifted to the vibrant Rángéela - A Cultural Carnival, a grand celebration of Rajasthani roots, rhythm, and royal traditions. The carnival featured a stunning lineup of cultural performances including Kalbelia Dance, Folk Singing, Matka Dance, Kachhi Ghodi, and several other captivating showcases - each bringing alive the spirit and color of Rajasthan in the heart of Visakhapatnam.

On behalf of Mangal Realty, Kamaldeep Prajapati represented the brand at Rángéela, engaging with attendees and showcasing the upcoming landmark project The Nature City, a 90+ acre township designed for modern, nature-inspired living in Vizianagaram, Andhra Pradesh.

The day concluded on a high note - blending social awareness with cultural vibrancy while strengthening Mangal Realty's presence as a brand deeply rooted in community values, health consciousness, and the celebration of India's rich cultural heritage.`,
    fullDate: "February 1st, 2026",
    tags: ["Community", "Health", "Culture"],
  },

  {
    id: 5,
    category: "Workshop",
    title: "AP RERA Awareness Program",
    subtitle: "Regulatory Compliance & Real Estate Insights",
    date: "11th",
    month: "March",
    location: "Visakhapatnam, Andhra Pradesh",
    heroImage: "/assetss/images/nature-city-img/event-2.webp",
    thumbnailImage: "/assetss/images/nature-city-img/event-2.webp",
    collageImages: [
      "/assetss/images/nature-city-img/event-2.webp",
      "/assetss/images/nature-city-img/event-2.webp",
      "/assetss/images/nature-city-img/event-2.webp"
    ],
    excerpt: "A knowledge-driven session on real estate compliance and regulatory frameworks.",
    about: `The AP RERA Awareness Program was held on 11th March 2026 at Hotel SVN Lake Palace, Visakhapatnam - bringing together key stakeholders from across the real estate ecosystem for an insightful and highly informative session on regulatory compliance and industry best practices.

The program was led by the Chairman & Director of Andhra Pradesh Real Estate Regulatory Authority (AP RERA), who offered in-depth guidance on regulatory frameworks, compliance standards, and the evolving landscape of the real estate sector in Andhra Pradesh.

The session served as a critical knowledge-sharing platform - bridging the gap between regulatory bodies and industry professionals in a structured, transparent, and engaging format.

The event witnessed strong participation from developers, architects, freelancers, and industry leaders - creating an open forum for dialogue, clarification, and collaboration. Discussions were rooted in practical on-ground realities of the sector, making the session both relevant and impactful for all attendees.

Mangal Realty and its team actively participated in the program, extending full support to the awareness initiative and embracing the guidelines outlined by AP RERA. Their presence at the event reflected the brand's unwavering commitment to transparency, regulatory compliance, and responsible real estate development.

The program concluded on a highly productive note - reinforcing industry alignment with RERA norms, promoting ethical practices, and building long-term trust across the real estate ecosystem of Andhra Pradesh.`,
    fullDate: "March 11th, 2026",
    tags: ["RERA", "Workshop", "Compliance"],
  },

  {
    id: 6,
    category: "Business Event",
    title: "JITO Market Gyan Event",
    subtitle: "Financial & Investment Knowledge Session",
    date: "21st",
    month: "March",
    location: "Visakhapatnam, Andhra Pradesh",
    heroImage: "/assetss/images/nature-city-img/event-3.webp",
    thumbnailImage: "/assetss/images/nature-city-img/event-3.webp",
    collageImages: [
      "/assetss/images/nature-city-img/event-3.webp",
      "/assetss/images/nature-city-img/event-3.webp",
      "/assetss/images/nature-city-img/event-3.webp"
    ],
    excerpt: "An insightful financial session led by renowned market expert Anil Singhvi.",
    about: `The JITO Market Gyan Event was organized on 21st March 2026 in Visakhapatnam, marking the Foundation Day of Jain International Trade Organization (JITO) - a global platform of Jain entrepreneurs and professionals dedicated to business networking, economic empowerment, and community development.

The event was proudly sponsored by Mangal Realty, reflecting its continued commitment to knowledge-driven community engagement beyond the boundaries of real estate.

The session was headlined by renowned market expert Anil Singhvi - Chartered Accountant and Managing Editor of Zee Business - one of India's most respected voices in financial journalism and market analysis.

His address drew an engaged audience of investors, industry professionals, and business leaders, creating an atmosphere of focused learning and sharp financial dialogue.

Anil Singhvi shared powerful, practical insights across key areas including Stock Market Trends, Investment Strategies, Global Economic Outlook, and Financial Discipline & Wealth Creation - offering attendees a clear, grounded perspective on navigating today's complex financial landscape.

The session was dynamic, data-forward, and deeply relevant to the current economic climate, making it one of the most impactful editions of the JITO knowledge series in Visakhapatnam.

Mangal Realty as the proud title sponsor of the event, reinforced its positioning as a brand that invests in people - not just projects.

The event concluded on a highly insightful and energising note - equipping attendees with practical market knowledge, strengthening business networks, and fostering a community of informed, empowered investors committed to long-term wealth creation.`,
    fullDate: "March 21st, 2026",
    tags: ["Finance", "Investment", "Networking"],
  },

  {
    id: 7,
    category: "Networking Event",
    title: "Big Business Day - H2H Networking",
    subtitle: "Entrepreneurship & Business Collaboration",
    date: "28th",
    month: "March",
    location: "Visakhapatnam, Andhra Pradesh",
    heroImage: "/assetss/images/nature-city-img/event-4 .webp",
    thumbnailImage: "/assetss/images/nature-city-img/event-4 .webp",
    collageImages: [
      "/assetss/images/nature-city-img/event-4 .webp",
      "/assetss/images/nature-city-img/event-4 .webp",
      "/assetss/images/nature-city-img/event-4 .webp"
    ],
    excerpt: "A powerful networking platform connecting entrepreneurs and investors.",
    about: `The Big Business Day was presented by Mangal Realty as part of the Hindu 2 Hindu (H2H) Business Networking initiative on 28th March 2026 at ITC, Visakhapatnam.

This event marked a significant milestone in building a trusted community of entrepreneurs through meaningful connections, commerce, and collaboration.

The gathering was conceptualized to bridge the gap between like-minded business professionals - creating a platform where community values and commercial ambitions come together.

Core focus areas included peer-to-peer networking, real estate investment awareness, and fostering relationships built on shared trust and purpose.

The event was organized under the leadership of Team Pragati and the Central Team, bringing together industry leaders, business owners, and investors across Visakhapatnam and Andhra Pradesh.

Big Business Day offered active participation, open interactions, and a shared sense of purpose - creating an environment where attendees could exchange ideas, explore opportunities, and learn from peers.

The event concluded as a landmark networking success - strengthening business relationships, enhancing market understanding, and showcasing The Nature City as a key investment opportunity.`,
    fullDate: "March 28th, 2026",
    tags: ["Business", "Networking", "Investment"],
  },
];

// ─── DETAIL PAGE ──────────────────────────────────────────────────────────────
const EventDetail = ({ event, onBack }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen bg-white"
    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
  >

    {/* HERO IMAGE COLLAGE — like Image 2 top */}
    <div className="w-full bg-stone-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-6">
        {/* Top row: wide image */}
        <div className="w-full h-[220px] md:h-[280px] overflow-hidden rounded-xl mb-2">
          <img src={event.heroImage} alt={event.title} className="w-full h-full object-cover" />
        </div>
        {/* Bottom row: 3 images */}
        <div className="grid grid-cols-3 gap-2">
          {event.collageImages.slice(0, 3).map((img, i) => (
            <div key={i} className="h-[90px] md:h-[120px] overflow-hidden rounded-xl">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* MAIN CONTENT */}
    <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

      {/* LEFT: About + Gallery */}
      <div className="lg:col-span-2 space-y-12">
        {/* Category tag + Title */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[10px] font-bold tracking-widest px-3 py-1 rounded border"
              style={{ color: brandGreen, borderColor: brandGreen }}>
              {event.category}
            </span>
            {event.tags.map(t => (
              <span key={t} className="text-[10px] font-bold tracking-widest px-3 py-1 rounded border border-stone-200 text-stone-400">
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight tracking-tighter">
            {event.title}
          </h1>
          <div className="flex flex-wrap gap-6 mt-4">
            <span className="flex items-center gap-2 text-xs text-stone-500 font-bold">
              <Calendar size={13} style={{ color: brandGreen }} /> {event.fullDate}
            </span>
            <span className="flex items-center gap-2 text-xs text-stone-500 font-bold">
              <MapPin size={13} style={{ color: brandGreen }} /> {event.location}
            </span>
          </div>
        </div>

        {/* About */}
        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-black mb-4 pb-3 border-b border-stone-100">
            About the Event
          </h2>

          <p className="text-stone-600 leading-relaxed text-sm md:text-base font-light whitespace-pre-line">
            {event.about}
          </p>

          <p className="text-stone-500 text-sm font-bold mt-2">
            Date: <span className="text-black">{event.fullDate}</span>
          </p>
        </div>

        {/* Event Gallery */}
        <div>
          <h2 className="text-xl font-bold text-black mb-6 pb-3 border-b border-stone-100 flex items-center gap-2">
            <ImageIcon size={18} style={{ color: brandGreen }} /> Event Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {event.collageImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="aspect-square overflow-hidden rounded-xl shadow-sm"
              >
                <img src={img} alt="" className="w-full h-full object-cover hover:brightness-110 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Location placeholder */}
        <div>
          <h2 className="text-xl font-bold text-black mb-4 pb-3 border-b border-stone-100">Location</h2>
          <div className="w-full h-[200px] bg-stone-100 rounded-xl flex items-center justify-center border border-stone-200">
            <div className="text-center">
              <MapPin size={32} className="mx-auto mb-2" style={{ color: brandGreen }} />
              <p className="text-sm font-bold text-stone-600">{event.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="space-y-8">
        {/* Event Glimpses / YouTube placeholders */}
        <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
          <h3 className="text-sm font-bold tracking-widest text-black mb-5">Event Glimpses</h3>
          <div className="space-y-4">
            {[1, 2].map((_, i) => (
              <div key={i} className="relative aspect-video bg-stone-200 rounded-xl overflow-hidden group cursor-pointer">
                <img src={event.collageImages[i] || event.heroImage} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <Play size={18} fill="white" className="text-white ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={onBack}
            className="w-full mt-5 py-3 text-xs font-bold cursor-pointer tracking-widest text-white rounded-xl transition-all"
            style={{ backgroundColor: darkBg }}
          >
            ← Back to Events
          </button>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm space-y-4">
          <h3 className="text-sm font-bold tracking-widest text-black">Event Details</h3>
          <div className="flex items-center gap-3 text-sm text-stone-500">
            <Calendar size={16} style={{ color: brandGreen }} />
            <span>{event.fullDate}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-stone-500">
            <MapPin size={16} style={{ color: brandGreen }} />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-stone-500">
            <Users size={16} style={{ color: brandGreen }} />
            <span>Team & Stakeholders</span>
          </div>
          <div className="h-px bg-stone-100 my-2" />
          <div className="flex flex-wrap gap-2">
            {event.tags.map(t => (
              <span key={t} className="text-[10px] font-bold px-3 py-1 rounded-full bg-green-50 text-green-700">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// ─── EVENTS LISTING PAGE ──────────────────────────────────────────────────────
export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Corporate Training & Workshop', 'Award', 'Community Event'];

  const filtered = filter === 'All' ? events : events.filter(e => e.category === filter);

  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <AnimatePresence mode="wait">
        {selectedEvent ? (
          <EventDetail
            key="detail"
            event={selectedEvent}
            onBack={() => setSelectedEvent(null)}
          />
        ) : (
          <motion.main
            key="listing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white overflow-hidden"
          >
            {/* HERO */}
            <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-black">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000"
                alt="Events Banner"
                className="absolute inset-0 w-full h-full object-cover opacity-40 z-10"
              />
              <div className="relative z-20 text-center px-6 max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-sm font-bold tracking-[0.2em] text-white">
                    <a href="/" className="hover:text-green-400 flex items-center gap-1 transition-colors">
                      <Home size={12} /> Home
                    </a>
                    <ChevronRight size={12} className="opacity-50" />
                    <span style={{ color: brandGreen }}>Events</span>
                  </nav>
                  <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none text-white">
                    Our Creative<br /><span style={{ color: brandGreen }}></span>
                  </h2>
                  <div className="h-1 w-20 my-8 mx-auto" style={{ backgroundColor: brandGreen }} />
                  {/* <p className="text-stone-300 text-sm md:text-base font-light max-w-xl mx-auto">
                    Milestones, workshops, and community moments that define the Mangal Realty journey.
                  </p> */}
                </motion.div>
              </div>
            </section>

            {/* FILTER + GRID */}
            <section className="relative z-30 -mt-20 pt-8 pb-32 px-6 bg-white">
              <div className="max-w-7xl mx-auto">

                {/* FILTER PILLS */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-16 bg-stone-50 p-3 rounded-full border border-stone-100 shadow-sm w-fit mx-auto">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-5 py-2 rounded-full cursor-pointer text-[10px] font-bold tracking-widest transition-all duration-300 ${filter === cat ? 'bg-black text-white' : 'text-stone-400 hover:text-black'
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* CARDS GRID */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence mode="popLayout">
                    {filtered.map((event) => (
                      <motion.div
                        key={event.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setSelectedEvent(event)}
                        className="group cursor-pointer bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
                      >
                        {/* Card Top: category + subtitle */}
                        <div className="px-5 pt-5 pb-3 bg-green-50">
                          <p className="text-[10px] font-bold tracking-widest text-green-600">{event.category}</p>
                          <p className="text-xs font-bold text-stone-700 mt-1">{event.subtitle}</p>
                          <div className="mt-2 inline-block bg-green-700 text-white text-[9px] font-bold tracking-widest px-3 py-1 rounded">
                            {event.subtitle}
                          </div>
                        </div>

                        {/* IMAGE with date badge */}
                        <div className="relative w-full h-[200px] overflow-hidden">
                          <img
                            src={event.thumbnailImage}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          {/* Collage effect: 4 small images in a 2x2 grid overlay */}
                          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {event.collageImages.slice(0, 4).map((img, i) => (
                              <div key={i} className="overflow-hidden">
                                <img src={img} alt="" className="w-full h-full object-cover" />
                              </div>
                            ))}
                          </div>
                          {/* Title overlay */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <p className="text-white text-xs font-bold leading-tight">{event.title}</p>
                          </div>
                          {/* Date badge */}
                          <div
                            className="absolute bottom-4 right-4 w-14 h-14 rounded-full flex flex-col items-center justify-center text-white shadow-lg"
                            style={{ backgroundColor: "#3730a3" }}
                          >
                            <span className="text-sm font-black leading-none">{event.date}</span>
                            <span className="text-[8px] font-bold tracking-wide">{event.month}</span>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5">
                          <h3 className="text-base font-bold text-black leading-tight mb-2 group-hover:text-green-600 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-stone-500 text-xs font-light line-clamp-2 mb-4">
                            {event.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1 text-[10px] text-stone-400 font-bold">
                              <MapPin size={10} style={{ color: brandGreen }} /> {event.location}
                            </span>
                            <button
                              className="flex items-center gap-1 cursor-pointer text-[10px] font-bold text-white px-4 py-2 rounded-lg transition-all"
                              style={{ backgroundColor: darkBg }}
                            >
                              Learn More <ArrowUpRight size={12} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="py-24 text-white border-t border-white/5" style={{ backgroundColor: darkBg }}>
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
                  Be Part of Our <span style={{ color: brandGreen }}>Next Story</span>
                </h2>
                <p className="text-stone-400 mb-12 font-light max-w-xl mx-auto leading-relaxed">
                  Stay connected for upcoming events, launch ceremonies, and community workshops by Mangal Realty.
                </p>
                <a href="/contact-us">
                  <button
                    className="px-10 py-4 font-bold tracking-widest text-xs rounded-full transition-all text-white"
                    style={{ backgroundColor: brandGreen }}
                  >
                    Get in Touch
                  </button>
                </a>
              </div>
            </section>

            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}