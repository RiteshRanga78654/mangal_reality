"use client";
import React, { useState, useRef, useEffect } from "react"; // Added useRef
import { motion, AnimatePresence, useInView } from "framer-motion";
import Swal from "sweetalert2"; // Added SweetAlert2
import {
  MapPin,
  Clock,
  ArrowRight,
  X,Home,
  Upload,
  Send,
  Heart,
  Coffee,
  GraduationCap,
  ShieldCheck,
  Building2,
  Users,
  Rocket,
  Sparkles,
  Search,
  FileText,
  UserCheck,
  Briefcase,
} from "lucide-react";
import { Leaf, Globe, Award, ChevronRight } from "lucide-react";
const brandGreen = "#22C55E";

// --- DATA ---
const JOBS = [
  {
    id: 1,
    title: "Property Consultant",
    department: "Sales",
    location: "Visakhapatnam, AP",
    type: "Full-Time",
  },
  {
    id: 2,
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "Hyderabad, TS",
    type: "Hybrid",
  },
  {
    id: 3,
    title: "Site Supervisor",
    department: "Operations",
    location: "Visakhapatnam, AP",
    type: "On-Site",
  },
];

const BENEFITS = [
  {
    icon: <Heart size={24} />,
    title: "Health First",
    desc: "Comprehensive medical insurance for you .",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600",
  },
  {
    icon: <Coffee size={24} />,
    title: "Work Culture",
    desc: "A vibrant office environment with a focus on harmony.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600",
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Learning Lab",
    desc: "Access to workshops and certifications to scale.",
    img: "https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&w=600",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Security",
    desc: "Competitive packages with performance incentives.",
    img: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=600",
  },
];

const STEPS = [
  {
    icon: <Search size={24} />,
    title: "Application",
    desc: "Submit your CV through our portal for the role that fits you.",
  },
  {
    icon: <FileText size={24} />,
    title: "Shortlisting",
    desc: "Our HR team reviews your profile against our core requirements.",
  },
  {
    icon: <UserCheck size={24} />,
    title: "Interview",
    desc: "A face-to-face or virtual discussion about your vision and skills.",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Joining",
    desc: "Welcome to the family! We start your onboarding journey.",
  },
];

const stats = [
  { label: "Years of Legacy", value: "30+", icon: Award },
  { label: "Projects Delivered", value: "150+", icon: ShieldCheck },
  { label: "Happy Families", value: "5000+", icon: Users },
  { label: "Square Ft. Developed", value: "12M+", icon: Globe },
];

// --- NEW COUNTER COMPONENT ---
const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  // Clean the string (e.g., "150+" -> 150)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Form States
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle File Selection & Validation
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB Limit
        Swal.fire({
          icon: "error",
          title: "File too large",
          text: "Please upload a CV smaller than 5MB",
          confirmButtonColor: "#22c55e",
        });
        e.target.value = null;
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
    }
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !selectedFile) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill all details and upload your CV.",
        confirmButtonColor: "#0a1a10",
      });
      return;
    }

    // Success Message
    Swal.fire({
      icon: "success",
      title: "Application Sent!",
      text: `Your application for ${selectedJob.title} has been received.`,
      confirmButtonColor: "#22c55e",
      timer: 3000,
    });

    // Clear Fields
    setFormData({ name: "", phone: "", email: "" });
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setIsFormOpen(false);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#0a1a10]">
      {/* --- DARK HERO SECTION --- */}
      <section className="relative min-h-[75vh] flex items-center bg-[#0a1a10] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920"
            className="w-full h-full object-cover"
            alt="Architecture"
          />
          <div className="absolute " />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-sm font-medium tracking-[0.1em] uppercase">
            <a
              href="/"
              className="hover:text-[#22c55e]  text-white flex items-center gap-1"
            >
              <Home size={12} />
              Home
            </a>
            <ChevronRight size={12} className="text-white " />
            <span className="text-white">Career</span>
          </nav>
            <h1 className="text-6xl md:text-7xl  text-white mb-8 tracking-tighter leading-[0.85]"style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
              Build Your <span className=" text-white">Legacy.</span>
            </h1>
            <div className="h-1 w-20 bg-[#22c55e] mx-auto mb-8" />
            {/* <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
              We don't just build homes; we build careers. Join a team dedicated
              to excellence and sustainable innovation.
            </p> */}
            
            <button
             onClick={() =>
                document
                  .getElementById("jobs")
                  .scrollIntoView({ behavior: "smooth" })}
                            className="group relative cursor-pointer px-8 py-5 text-[#22c55e]  hover:text-white font-bold uppercase tracking-widest text-xs overflow-hidden"
                        >
                            <span className="relative z-10">Explore Openings</span>
                            <div className="absolute inset-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                            <div className="absolute inset-1 border border-green-600"></div>
                        </button>
          </motion.div>
        </div>
      </section>

      {/* UPDATED SECTION: IMPACT NUMBERS WITH COUNTER & BLACK ICONS */}
      <section className="relative z-30 -mt-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 shadow-2xl rounded-sm border-b-4 flex flex-col items-center text-center"
              style={{ borderBottomColor: brandGreen }}
            >
              {/* Icon color changed to Black */}
              <stat.icon size={28} className="mb-3 text-black" />
              <h4 className="text-3xl font-black text-stone-900">
                <Counter value={stat.value} />
              </h4>
              <p className="text-[10px] uppercase tracking-widest font-bold text-stone-500 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- INTERACTIVE SECTION: WHY JOIN US --- */}
      <section className="pt-35 pb-25 px-6 max-w-7xl mx-auto relative -mt-20 z-20">
        <div className="text-center mb-20">
          <h2 className="text-[32px] md:text-[60px] font-bold mb-4 tracking-tight"style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
            Why Join Us?
          </h2>
          <div className="h-1 w-20 bg-[#22c55e] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl bg-[#0a1a10]"
            >
              <img
                src={b.img}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                alt={b.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a10] via-[#0a1a10]/40 to-transparent" />

              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="w-12 h-12 bg-[#22c55e] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#22c55e]/20 group-hover:rotate-12 transition-transform">
                  {b.icon}
                </div>
                <h4 className="text-2xl font-Arial, Helvetica, sans-serif mb-3 ">{b.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- HIRING PROCESS SECTION --- */}
      <section className=" px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-[32px] md:text-[50px] font-bold  mb-4"style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
              Our Hiring Process
            </h2>
            <p className="text-gray-500 mb-8">
              We’ve designed a simple, transparent process to get you from
              applicant to team member as smoothly as possible.
            </p>
            <div className="flex items-center gap-2 text-[#22c55e] font-bold text-xs uppercase tracking-widest">
              Ready to start? <ArrowRight size={16} />
            </div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
            {STEPS.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-3xl font-Arial, Helvetica, sans-serif text-gray-200">{i + 1}</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <span className="text-[#22c55e]">{step.icon}</span>{" "}
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ALIGNED JOB BOARD --- */}
      <section id="jobs" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-[32px] md:text-[60px] font-bold  mb-4"style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
              Current Openings
            </h2>
          <div className="h-[1px] flex-1 bg-[#22c55e] mx-10 hidden md:block"></div>
        </div>

        <div className="space-y-6">
          {JOBS.map((job) => (
            <motion.div
              key={job.id}
              className="group bg-white p-10 rounded-[2.5rem] flex flex-col md:flex-row md:items-center justify-between border border-gray-100 hover:border-[#22c55e]/30 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black text-[#22c55e] uppercase tracking-[0.2em]">
                    {job.department}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                    <MapPin size={12} /> {job.location}
                  </span>
                </div>
                <h3 className="text-3xl  mb-2 group-hover:text-[#22c55e] transition-colors">
                  {job.title}
                </h3>
                <p className="text-gray-400 text-sm ">
                  {job.type} Opportunity
                </p>
              </div>

              <button
              onClick={() => {
                  setSelectedJob(job);
                  setIsFormOpen(true);
                }}
                            className="group relative cursor-pointer px-12 py-5 text-[#22c55e]  group-hover:text-white font-bold uppercase tracking-widest text-xs overflow-hidden"
                        >
                            <span className="relative z-10">Apply Position</span>
                            <div className="absolute inset-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                            <div className="absolute inset-1 border border-green-600"></div>
                        </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SOPHISTICATED POPUP --- */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-[#0a1a10]/95 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <div className="bg-[#22c55e] p-12 text-white relative">
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-8 right-8 text-white hover:text-[red] transition-colors"
                >
                  <X size={24} />
                </button>
                <p className="text-[#0a1a10] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                  Joining our team
                </p>
                <h3 className="text-4xl font-Arial, Helvetica, sans-serif ">{selectedJob?.title}</h3>
                <div className="flex gap-4 text-xs text-white mt-4">
                  <span className="flex items-center gap-1">
                    <Building2 size={14} /> {selectedJob?.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {selectedJob?.location}
                  </span>
                </div>
              </div>

              <form className="p-12 space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#FAF9F6] border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#22c55e]/20 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#FAF9F6] border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#22c55e]/20 transition-all"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Professional Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#FAF9F6] border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#22c55e]/20 transition-all"
                />

                {/* Hidden File Input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />

                {/* Visible Upload Box */}
                <div
                  onClick={() => fileInputRef.current.click()}
                  className="border-2 border-dashed border-gray-100 rounded-[2.5rem] p-10 text-center hover:border-[#22c55e] transition-all cursor-pointer group"
                >
                  <Upload
                    className={`mx-auto mb-4 ${
                      selectedFile ? "text-[#22c55e]" : "text-gray-300"
                    } group-hover:text-[#22c55e]`}
                    size={32}
                  />
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                    {selectedFile
                      ? `Selected: ${selectedFile.name}`
                      : "Upload CV (PDF Format - Max 5MB)"}
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0a1a10] text-white py-6 rounded-2xl font-black uppercase text-xs tracking-[0.4em] flex items-center justify-center gap-3 hover:bg-[#22c55e] hover:text-[#0a1a10] transition-all shadow-xl"
                >
                  Submit Application <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
