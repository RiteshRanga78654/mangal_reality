"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Clock,
} from "lucide-react";

const Page = () => {
  return (
    <>
      <div className="bg-white">
        {/* Hero Section with Dark Theme #0a1a10 Overlay */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920"
              className="w-full h-full object-cover"
              alt="Hero Background"
            />
            {/* Custom Dark Overlay */}
            <div className="absolute inset-0 "></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-6">
            <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-sm font-medium tracking-[0.2em] uppercase">
              <a
                href="/"
                className="hover:text-green-400 flex items-center gap-1 transition-colors"
              >
                <Home size={12} /> Home
              </a>
              <ChevronRight size={12} className="opacity-50" />
              <span className="text-green-500">CONTACT US</span>
            </nav>
            <h2 className="text-4xl md:text-8xl font-serif tracking-tight">
              Contact Us
            </h2>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1a10] leading-tight">
                For more information about our services, get in touch with our
                expert consultants.
              </h2>
              <p className="text-xl text-gray-600 mt-2 font-medium">
                We're always eager to hear from you!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-8">
              {/* Left Side: Contact Info */}
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-start gap-y-10">
                <div className="flex items-start space-x-5">
                  <div className="bg-green-50 p-3 rounded-full shrink-0">
                    <MapPin className="w-6 h-6 text-[#22c55e]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0a1a10]">
                      Visit our office
                    </h3>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      D-No: 49, 24-26, Shankaramatam Road, beside UK Parlour
                      <br />
                      Visakhapatnam
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="bg-green-50 p-3 rounded-full shrink-0">
                    <Mail className="w-6 h-6 text-[#22c55e]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0a1a10]">Email</h3>
                    <a
                      href="mailto:info@mangalrealty.com"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      info@mangalrealty.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="bg-green-50 p-3 rounded-full shrink-0">
                    <Phone className="w-6 h-6 text-[#22c55e]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0a1a10]">Phone</h3>
                    <a
                      href="tel:+910404400033"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      +91 040-4400033
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="bg-green-50 p-3 rounded-full shrink-0">
                    <Clock className="w-6 h-6 text-[#22c55e]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0a1a10]">
                      Hours of operation
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Monday – Friday: 10:00 – 18:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-50">
                <h3 className="text-2xl font-bold text-[#0a1a10] mb-8">
                  Enquire Here
                </h3>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Phone<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                      placeholder="+91"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                      placeholder="Full Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-12 py-4 bg-[#0a1a10] hover:bg-[#1ca850] text-white font-bold rounded-lg transition-all duration-200 uppercase tracking-wider text-sm shadow-md active:scale-95"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.6725453005513!2d83.301306!3d17.717614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQzJzAzLjQiTiA4M8KwMTgnMDQuNyJF!5e0!3m2!1sen!2sin!4v1625648590000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;

