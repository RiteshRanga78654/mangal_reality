"use client";

import React, { useState } from 'react';
import { 
  TreePine, Wifi, Globe, Car, Map, Wallet, 
  ShowerHead, Users, Stethoscope, Waves, Mountain, Wind, 
  Flame, Trash2, Gamepad2, Bath, Utensils, UserPlus 
} from 'lucide-react';

const amenities = [
  { icon: <TreePine />, title: 'Plantation Walks' },
  { icon: <Wifi />, title: 'Free Wifi' },
  { icon: <Globe />, title: 'Travel Desk' },
  { icon: <Car />, title: 'Car Parking' },
  { icon: <Map />, title: 'Local Tours' },
  { icon: <Wallet />, title: 'Guide on Demand' },
  { icon: <ShowerHead />, title: 'Premium bathroom' },
  { icon: <Users />, title: 'Conference Room' },
  { icon: <Stethoscope />, title: 'Doctor on Call', highlighted: true },
  { icon: <Waves />, title: 'Natural Rivulet' },
  { icon: <Mountain />, title: 'Trekking' },
  { icon: <Wind />, title: 'Hair Dryer' },
  { icon: <Flame />, title: 'Campfire' },
  { icon: <Trash2 />, title: 'Farm Animals' },
  { icon: <Gamepad2 />, title: 'Indoor Games' },
  { icon: <Bath />, title: '24hr Hot Water' },
  { icon: <Utensils />, title: 'BBQ' },
  { icon: <UserPlus />, title: 'Group Booking' },
  // Additional items for the "Show More" functionality
  { icon: <Flame />, title: 'Campfire 2' },
  { icon: <Trash2 />, title: 'Farm Animals 2' },
  { icon: <Gamepad2 />, title: 'Indoor Games 2' },
  { icon: <Bath />, title: '24hr Hot Water 2' },
  { icon: <Utensils />, title: 'BBQ 2' },
  { icon: <UserPlus />, title: 'Group Booking 2' },
];

export default function PremiumAmenities() {
  // Initial state: 18 items (6 columns * 3 rows)
  const [visibleCount, setVisibleCount] = useState(18);

  const showMore = () => {
    // Adds 6 more items (1 full row) on click
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="page-wrapper">
      <div className="fixed-bg"></div>
      
      <section className="content-layer">
        <div className="container">
          <header className="header">
            <h2 className="title">Explore Amenities</h2>
            <div className="underline"></div>
          </header>
          
          <div className="grid-container">
            {amenities.slice(0, visibleCount).map((item, index) => (
              <div key={index} className={`tile ${item.highlighted ? 'highlighted' : ''}`}>
                <div className="shutter"></div>
                <div className="content">
                  <div className="icon-wrapper">
                    {item.icon}
                  </div>
                  <span className="label">{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < amenities.length && (
            <button className="view-all-btn" onClick={showMore}>
              View All Facilities
            </button>
          )}
        </div>
      </section>

      <style jsx>{`
        .page-wrapper {
          position: relative;
          width: 100%;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .fixed-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                            url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=2000');
          background-size: cover;
          background-position: center;
          z-index: -1;
        }

        .content-layer {
          position: relative;
          z-index: 1;
          padding: 100px 20px;
          display: flex;
          justify-content: center;
        }

        .container {
          max-width: 1300px; /* Slightly wider for 6 cols */
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header {
          width: 100%;
          margin-bottom: 40px;
        }

        .title {
          color: #ffffff;
          font-size: 3rem;
          font-weight: 800;
          margin: 0;
        }

        .underline {
          width: 80px;
          height: 4px;
          background: #4ade80;
          margin-top: 10px;
        }

        .grid-container {
          display: grid;
          /* Force exactly 6 columns on desktop */
          grid-template-columns: repeat(6, 1fr);
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          
          backdrop-filter: blur(8px);
            gap: 15px;
        }

        .tile {
          position: relative;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 0.5px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          overflow: hidden;
        }

        .shutter {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #4ade80;
          transform: translateY(-101%);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        .tile:hover .shutter {
          transform: translateY(0);
        }

        .content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #4ade80;
          transition: color 0.3s ease;
        }

        .tile:hover .content {
          color: #ffffff;
        }

        .icon-wrapper {
          margin-bottom: 12px;
        }

        @keyframes customBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .tile:hover .icon-wrapper {
          animation: customBounce 0.6s ease-in-out infinite;
        }

        .label {
          font-size: 0.85rem;
          font-weight: 600;
          text-align: center;
          color: white;
        }

        .tile.highlighted .shutter {
          transform: translateY(0);
          background: #22c55e;
        }
        
        .tile.highlighted .content {
          color: white;
        }

        .view-all-btn {
          margin-top: 50px;
          padding: 12px 35px;
          background: #4ade80;
          color: #000;
          font-weight: 700;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-all-btn:hover {
          background: #22c55e;
          transform: scale(1.05);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .grid-container { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 640px) {
          .grid-container { grid-template-columns: repeat(2, 1fr); }
          .title { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
}