// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Home,
//   ChevronRight,
//   MapPin,
//   Mail,
//   Phone,
//   Clock,
// } from "lucide-react";

// const Page = () => {
//   return (
//     <>
//       <div className="bg-white">
//         {/* Hero Section with Dark Theme #0a1a10 Overlay */}
//         <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
//           <div className="absolute inset-0 z-0">
//             <img
//               src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920"
//               className="w-full h-full object-cover"
//               alt="Hero Background"
//             />
//             {/* Custom Dark Overlay */}
//             <div className="absolute inset-0 "></div>
//           </div>
          
//           <div className="relative z-10 text-center text-white px-6">
//             <nav className="flex items-center justify-center gap-2 mb-6 text-[10px] md:text-sm font-medium tracking-[0.2em] uppercase">
//               <a
//                 href="/"
//                 className="hover:text-green-400 flex items-center gap-1 transition-colors"
//               >
//                 <Home size={12} /> Home
//               </a>
//               <ChevronRight size={12} className="opacity-50" />
//               <span className="text-green-500">CONTACT US</span>
//             </nav>
//             <h2 className="text-4xl md:text-8xl font-serif tracking-tight">
//               Contact Us
//             </h2>
//           </div>
//         </section>

//         <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
//           <div className="max-w-6xl mx-auto">
//             {/* Header */}
//             <div className="mb-12">
//               <h2 className="text-2xl md:text-3xl font-bold text-[#0a1a10] leading-tight">
//                 For more information about our services, get in touch with our
//                 expert consultants.
//               </h2>
//               <p className="text-xl text-gray-600 mt-2 font-medium">
//                 We're always eager to hear from you!
//               </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-8">
//               {/* Left Side: Contact Info */}
//               <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-start gap-y-10">
//                 <div className="flex items-start space-x-5">
//                   <div className="bg-green-50 p-3 rounded-full shrink-0">
//                     <MapPin className="w-6 h-6 text-[#22c55e]" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg text-[#0a1a10]">
//                       Visit our office
//                     </h3>
//                     <p className="text-gray-600 mt-1 leading-relaxed">
//                       D-No: 49, 24-26, Shankaramatam Road, beside UK Parlour
//                       <br />
//                       Visakhapatnam
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-5">
//                   <div className="bg-green-50 p-3 rounded-full shrink-0">
//                     <Mail className="w-6 h-6 text-[#22c55e]" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg text-[#0a1a10]">Email</h3>
//                     <a
//                       href="mailto:info@mangalrealty.com"
//                       className="text-gray-600 hover:text-green-600 transition-colors"
//                     >
//                       info@mangalrealty.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-5">
//                   <div className="bg-green-50 p-3 rounded-full shrink-0">
//                     <Phone className="w-6 h-6 text-[#22c55e]" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg text-[#0a1a10]">Phone</h3>
//                     <a
//                       href="tel:+910404400033"
//                       className="text-gray-600 hover:text-green-600 transition-colors"
//                     >
//                       +91 040-4400033
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-5">
//                   <div className="bg-green-50 p-3 rounded-full shrink-0">
//                     <Clock className="w-6 h-6 text-[#22c55e]" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg text-[#0a1a10]">
//                       Hours of operation
//                     </h3>
//                     <p className="text-gray-600 mt-1">
//                       Monday – Friday: 10:00 – 18:00
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Side: Form */}
//               <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-50">
//                 <h3 className="text-2xl font-bold text-[#0a1a10] mb-8">
//                   Enquire Here
//                 </h3>
//                 <form className="space-y-5">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-1">
//                       Email<span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
//                       placeholder="your@email.com"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-1">
//                       Phone<span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="tel"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
//                       placeholder="+91"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-1">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
//                       placeholder="Full Name"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-1">
//                       Message
//                     </label>
//                     <textarea
//                       rows="4"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all resize-none"
//                       placeholder="How can we help you?"
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full sm:w-auto px-12 py-4 bg-[#0a1a10] hover:bg-[#1ca850] text-white font-bold rounded-lg transition-all duration-200 uppercase tracking-wider text-sm shadow-md active:scale-95"
//                   >
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             </div>

//             {/* Map Section */}
//             <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.6725453005513!2d83.301306!3d17.717614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQzJzAzLjQiTiA4M8KwMTgnMDQuNyJF!5e0!3m2!1sen!2sin!4v1625648590000!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Office Location"
//               ></iframe>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Page;



"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2"; // Import SweetAlert2
import { 
  Home, 
  ChevronRight, 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  Plus, 
  User, 
  ArrowUpRight,
  Loader2
} from "lucide-react";

const ContactPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // SweetAlert2 Success Message
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for reaching out. Our consultants will contact you shortly.",
        icon: "success",
        confirmButtonColor: "#22c55e",
        background: "#0a1a10",
        color: "#fff",
        customClass: {
          popup: 'rounded-[2rem]',
          confirmButton: 'rounded-xl px-10 py-3 uppercase tracking-widest font-bold text-xs'
        }
      });

      // Reset Form
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  const faqs = [
    { q: "What is your project turnaround time?", a: "Typically, initial conceptual designs are ready within 2-3 weeks depending on complexity." },
    { q: "Do you handle residential and commercial?", a: "Yes, we have specialized teams for luxury housing and urban workspaces." },
    { q: "Where can I see your ongoing projects?", a: "You can visit our Portfolio page or schedule a site visit through our consultants." }
  ];

  return (
    <div className=" selection:bg-[#22c55e]/30">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 10 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920"
            className="w-full h-full object-cover "
            alt="Hero Background"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a10]/60 via-transparent to-[#0a1a10] z-0" />

        <div className="relative z-10 text-center text-white px-6">
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-8 text-[10px] font-bold tracking-[0.4em] uppercase"
          >
            <a href="/" className="hover:text-[#22c55e] transition-colors">HOME</a>
            <ChevronRight size={10} className="text-[#22c55e]" />
            <span className="opacity-50">CONTACT</span>
          </motion.nav>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[6rem] font-serif tracking-tighter leading-none"
          >
            Get In <span className=" text-[#22c55e]/80">Touch.</span>
          </motion.h1>
        </div>
      </section>

      {/* --- INFO & FORM SECTION --- */}
      <section className="relative z-20 -mt-24 pb-25 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              {[
                { icon: <MapPin />, title: "Location", content: "D-No: 49, Shankaramatam Road, Visakhapatnam", link: "https://maps.google.com" },
                { icon: <Mail />, title: "Email Us", content: "info@mangalrealty.com", link: "mailto:info@mangalrealty.com" },
                { icon: <Phone />, title: "Call Support", content: "+91 040-4400033", link: "tel:+910404400033" }
              ].map((item, idx) => (
                <motion.a 
                  href={item.link}
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-sm border-b-2 border-[#22c55e] flex gap-6 group hover:shadow-xl transition-all duration-500 block"
                >
                  <div className="w-14 h-14 bg-[#FAF9F6] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#22c55e] transition-colors duration-500">
                    {React.cloneElement(item.icon, { className: "text-[#0a1a10] group-hover:text-white transition-colors", size: 24 })}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] mb-2">{item.title}</h4>
                    <p className="text-xl font-serif text-[#0a1a10] leading-tight">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Right Form */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-[#0a1a10] p-8 md:p-20 rounded-[3.5rem] text-white shadow-2xl relative border "
            >
              <h3 className="text-4xl md:text-5xl font-serif mb-12">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="text-[10px] font-bold tracking-[0.3em] text-[#22c55e] block mb-3">FULL NAME</label>
                    <input 
                      required name="name" value={formData.name} onChange={handleInputChange}
                      type="text" placeholder="Your Name"
                      className="w-full bg-transparent border-b border-[#22c55e] py-3 outline-none focus:border-[#22c55e] transition-colors placeholder:text-white text-xl font-serif"
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-bold tracking-[0.3em] text-[#22c55e] block mb-3">EMAIL ADDRESS</label>
                    <input 
                      required name="email" value={formData.email} onChange={handleInputChange}
                      type="email" placeholder="hello@company.com"
                      className="w-full bg-transparent border-b border-[#22c55e] py-3 outline-none focus:border-[#22c55e] transition-colors placeholder:text-white text-xl font-serif"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-[10px] font-bold tracking-[0.3em] text-[#22c55e] block mb-3">PHONE NUMBER</label>
                  <input 
                    required name="phone" value={formData.phone} onChange={handleInputChange}
                    type="tel" placeholder="+91"
                    className="w-full bg-transparent border-b border-[#22c55e] py-3 outline-none focus:border-[#22c55e] transition-colors placeholder:text-white text-xl font-serif"
                  />
                </div>

                <div className="relative group">
                  <label className="text-[10px] font-bold tracking-[0.3em] text-[#22c55e] block mb-4">MESSAGE</label>
                  <textarea 
                    name="message" value={formData.message} onChange={handleInputChange}
                    rows="3" placeholder="Project details..."
                    className="w-full bg-transparent border-b border-[#22c55e] py-3 outline-none focus:border-[#22c55e] transition-colors resize-none placeholder:text-white text-xl font-serif"
                  />
                </div>

                <motion.button
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full md:w-auto group bg-[#22c55e] text-[#0a1a10] px-12 py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit Inquiry"}
                  {!isSubmitting && <Send size={14} />}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-25 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-[#22c55e] font-black uppercase text-[10px] tracking-[0.5em] mb-6 block">Support</span>
          <h2 className="text-5xl font-serif text-[#0a1a10] mb-12">General Queries</h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="border-b border-gray-100 pb-6">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left text-xl font-serif text-[#0a1a10] hover:text-[#22c55e] transition-all"
                >
                  {item.q}
                  <Plus className={`transition-transform duration-500 ${activeFaq === i ? 'rotate-45' : ''}`} size={20} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.p 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pt-4 text-gray-500 text-sm italic"
                    >
                      {item.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Team Card */}
        <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-serif text-[#0a1a10] mb-10">Direct Connections</h3>
          <div className="space-y-10">
            {[
              { name: "Arjun Mehta", role: "Design Lead", phone: "tel:+919988776655" },
              { name: "Sara Khan", role: "Sales Head", phone: "tel:+918877665544" }
            ].map((member, i) => (
              <a href={member.phone} key={i} className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-[#FAF9F6] flex items-center justify-center group-hover:bg-[#22c55e] transition-all duration-500">
                  <User size={24} className="text-[#0a1a10] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#22c55e] uppercase tracking-widest">{member.role}</p>
                  <h4 className="text-xl font-serif text-[#0a1a10]">{member.name}</h4>
                </div>
                <ArrowUpRight className="ml-auto text-gray-200 group-hover:text-[#22c55e] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

     
        {/* Map Section */}
           <div className="max-w-7xl mx-auto h-[400px] mb-25 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
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
  );
};

export default ContactPage;




// // "use client";
// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Swal from "sweetalert2"; // Import SweetAlert2
// // import { 
// //   Home, 
// //   ChevronRight, 
// //   MapPin, 
// //   Mail, 
// //   Phone, 
// //   Send, 
// //   Plus, 
// //   User, 
// //   ArrowUpRight,
// //   Loader2
// // } from "lucide-react";

// // const ContactPage = () => {
// //   const [activeFaq, setActiveFaq] = useState(null);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
  
// //   // Form State
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     message: ""
// //   });

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);

// //     // Simulate API Call
// //     setTimeout(() => {
// //       setIsSubmitting(false);
      
// //       // SweetAlert2 Success Message
// //       Swal.fire({
// //         title: "Message Sent!",
// //         text: "Thank you for reaching out. Our consultants will contact you shortly.",
// //         icon: "success",
// //         confirmButtonColor: "#22c55e",
// //         background: "#0a1a10",
// //         color: "#fff",
// //         customClass: {
// //           popup: 'rounded-[2rem]',
// //           confirmButton: 'rounded-xl px-10 py-3 uppercase tracking-widest font-bold text-xs'
// //         }
// //       });

// //       // Reset Form
// //       setFormData({ name: "", email: "", phone: "", message: "" });
// //     }, 2000);
// //   };

// //   const faqs = [
// //     { q: "What is your project turnaround time?", a: "Typically, initial conceptual designs are ready within 2-3 weeks depending on complexity." },
// //     { q: "Do you handle residential and commercial?", a: "Yes, we have specialized teams for luxury housing and urban workspaces." },
// //     { q: "Where can I see your ongoing projects?", a: "You can visit our Portfolio page or schedule a site visit through our consultants." }
// //   ];

// //   return (
// //     <div className=" selection:bg-[#22c55e]/30">
      
// //       {/* --- HERO SECTION --- */}
// //       <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
// //         <motion.div 
// //           initial={{ scale: 1.1, opacity: 0 }}
// //           animate={{ scale: 1, opacity: 10 }}
// //           transition={{ duration: 2 }}
// //           className="absolute inset-0 z-0"
// //         >
// //           <img
// //             src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920"
// //             className="w-full h-full object-cover "
// //             alt="Hero Background"
// //           />
// //         </motion.div>
        
// //         <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a10]/60 via-transparent to-[#0a1a10] z-0" />

// //         <div className="relative z-10 text-center text-white px-6">
// //           <motion.nav 
// //             initial={{ opacity: 0, y: -10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             className="flex items-center justify-center gap-3 mb-8 text-[10px] font-bold tracking-[0.4em] uppercase"
// //           >
// //             <a href="/" className="hover:text-[#22c55e] transition-colors">HOME</a>
// //             <ChevronRight size={10} className="text-[#22c55e]" />
// //             <span className="opacity-50">CONTACT</span>
// //           </motion.nav>
          
// //           <motion.h1 
// //             initial={{ opacity: 0, y: 40 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
// //             className="text-6xl md:text-[6rem]  tracking-tighter leading-none"style={{fontFamily:"Arial, Helvetica, sans-serif"}}
// //           >
// //             Get In <span className=" text-[#22c55e]/80">Touch.</span>
// //           </motion.h1>
// //         </div>
// //       </section>

// //       {/* --- INFO & FORM SECTION --- */}
// //       <section className="relative z-20 -mt-24 pb-25 px-6">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
// //             {/* Left Info Cards */}
// //             <div className="lg:col-span-5 space-y-6">
// //               {[
// //                 { icon: <MapPin />, title: "Location", content: "D-No: 49, Shankaramatam Road, Visakhapatnam", link: "https://maps.google.com" },
// //                 { icon: <Mail />, title: "Email Us", content: "info@mangalrealty.com", link: "mailto:info@mangalrealty.com" },
// //                 { icon: <Phone />, title: "Call Support", content: "+91 040-4400033", link: "tel:+910404400033" }
// //               ].map((item, idx) => (
// //                 <motion.a 
// //                   href={item.link}
// //                   key={idx} 
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: idx * 0.1 }}
// //                   className="bg-white p-10 rounded-[2.5rem] shadow-sm border-b-2 border-[#22c55e] flex gap-6 group hover:shadow-xl transition-all duration-500 block"
// //                 >
// //                   <div className="w-14 h-14 bg-[#FAF9F6] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#22c55e] transition-colors duration-500">
// //                     {React.cloneElement(item.icon, { className: "text-[#0a1a10] group-hover:text-white transition-colors", size: 24 })}
// //                   </div>
// //                   <div>
// //                     <h4 className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] mb-2">{item.title}</h4>
// //                     <p className="text-xl  text-[#0a1a10] leading-tight" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>{item.content}</p>
// //                   </div>
// //                 </motion.a>
// //               ))}
// //             </div>

// //             {/* Right Form */}
// //             <motion.div 
// //               initial={{ opacity: 0, x: 40 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //               className="lg:col-span-7 bg-[#0a1a10] p-8 md:p-20 rounded-[3.5rem] text-white shadow-2xl relative border "
// //             >
// //               <h3 className="text-4xl md:text-5xl mb-12"style={{fontFamily:"Arial, Helvetica, sans-serif"}}>Send a Message</h3>

// //               <form onSubmit={handleSubmit} className="space-y-10">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
// //                   <div className="relative group">
// //                     <label className="text-[10px] font-bold tracking-[0.3em] text-[#22c55e] block mb-3">FULL NAME</label>
// //                     <input 
// //                       required name="name" value={formData.name} onChange={handleInputChange}
// //                       type="text" placeholder="Your Name"
// //                       className="w-full bg-transparent border-b border-[#22c55e] py-3 outline-none focus:border-[#22c55e] transition-colors placeholder:text-white text-xl"style={{fontFamily:"Arial, Helvetica, sans-serif"}}
// //                     />
// //                   </div>
// //                   <div className="relative group">
// //                     <label className="text-[10px] font-bold tracking-[0.3em] text-[#22c55e] block mb-3">EMAIL ADDRESS</label>
// //                     <input 
// //                       required name="email" value={formData.email} onChange={handleInputChange}
// //                       type="email" placeholder="hello@company.com"
// //                       className="w-full bg-transparent border-b border-[#22c55e] py-3 outline-none focus:border-[#22c55e] transition-colors placeholder:text-white text-xl "style={{fontFamily:"Arial, Helvetica, sans-serif"}}
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="relative group">
// //                   <label className="text-[10px] font-bold tracking-[0.3em] text-[#22c55e] block mb-3">PHONE NUMBER</label>
// //                   <input 
// //                     required name="phone" value={formData.phone} onChange={handleInputChange}
// //                     type="tel" placeholder="+91"
// //                     className="w-full bg-transparent border-b border-[#22c55e] py-3 outline-none focus:border-[#22c55e] transition-colors placeholder:text-white text-xl "style={{fontFamily:"Arial, Helvetica, sans-serif"}}
// //                   />
// //                 </div>

// //                 <div className="relative group">
// //                   <label className="text-[10px] font-bold tracking-[0.3em] text-[#22c55e] block mb-4">MESSAGE</label>
// //                   <textarea 
// //                     name="message" value={formData.message} onChange={handleInputChange}
// //                     rows="3" placeholder="Project details..."
// //                     className="w-full bg-transparent border-b border-[#22c55e] py-3 outline-none focus:border-[#22c55e] transition-colors resize-none placeholder:text-white text-xl"style={{fontFamily:"Arial, Helvetica, sans-serif"}}
// //                   />
// //                 </div>

// //                 <motion.button
// //                   disabled={isSubmitting}
// //                   whileHover={{ scale: 1.02 }}
// //                   whileTap={{ scale: 0.98 }}
// //                   type="submit"
// //                   className="w-full md:w-auto group bg-[#22c55e] text-[#0a1a10] px-12 py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all disabled:opacity-50"
// //                 >
// //                   {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit Inquiry"}
// //                   {!isSubmitting && <Send size={14} />}
// //                 </motion.button>
// //               </form>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- FAQ SECTION --- */}
// //       <section className="max-w-7xl mx-auto px-6 mb-25 grid grid-cols-1 lg:grid-cols-2 gap-20">
// //         <div>
// //           <span className="text-[#22c55e] font-black uppercase text-[10px] tracking-[0.5em] mb-6 block">Support</span>
// //           <h2 className="text-5xl  text-[#0a1a10] mb-12"style={{fontFamily:"Arial, Helvetica, sans-serif"}}>General Queries</h2>
// //           <div className="space-y-4">
// //             {faqs.map((item, i) => (
// //               <div key={i} className="border-b border-gray-100 pb-6">
// //                 <button 
// //                   onClick={() => setActiveFaq(activeFaq === i ? null : i)}
// //                   className="w-full flex items-center justify-between text-left text-xl  text-[#0a1a10] hover:text-[#22c55e] transition-all"style={{fontFamily:"Arial, Helvetica, sans-serif"}}
// //                 >
// //                   {item.q}
// //                   <Plus className={`transition-transform duration-500 ${activeFaq === i ? 'rotate-45' : ''}`} size={20} />
// //                 </button>
// //                 <AnimatePresence>
// //                   {activeFaq === i && (
// //                     <motion.p 
// //                       initial={{ height: 0, opacity: 0 }}
// //                       animate={{ height: "auto", opacity: 1 }}
// //                       exit={{ height: 0, opacity: 0 }}
// //                       className="pt-4 text-gray-500 text-sm italic"
// //                     >
// //                       {item.a}
// //                     </motion.p>
// //                   )}
// //                 </AnimatePresence>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Team Card */}
// //         <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-sm">
// //           <h3 className="text-2xl  text-[#0a1a10] mb-10"style={{fontFamily:"Arial, Helvetica, sans-serif"}}>Direct Connections</h3>
// //           <div className="space-y-10">
// //             {[
// //               { name: "Arjun Mehta", role: "Design Lead", phone: "tel:+919988776655" },
// //               { name: "Sara Khan", role: "Sales Head", phone: "tel:+918877665544" }
// //             ].map((member, i) => (
// //               <a href={member.phone} key={i} className="flex items-center gap-6 group">
// //                 <div className="w-16 h-16 rounded-2xl bg-[#FAF9F6] flex items-center justify-center group-hover:bg-[#22c55e] transition-all duration-500">
// //                   <User size={24} className="text-[#0a1a10] group-hover:text-white" />
// //                 </div>
// //                 <div>
// //                   <p className="text-[10px] font-black text-[#22c55e] uppercase tracking-widest">{member.role}</p>
// //                   <h4 className="text-xl  text-[#0a1a10]"style={{fontFamily:"Arial, Helvetica, sans-serif"}}>{member.name}</h4>
// //                 </div>
// //                 <ArrowUpRight className="ml-auto text-gray-200 group-hover:text-[#22c55e] transition-colors" />
// //               </a>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

     
// //         {/* Map Section */}
// //            <div className="max-w-7xl mx-auto h-[400px] mb-25 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
// //              <iframe
// //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.6725453005513!2d83.301306!3d17.717614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQzJzAzLjQiTiA4M8KwMTgnMDQuNyJF!5e0!3m2!1sen!2sin!4v1625648590000!5m2!1sen!2sin"
// //                 width="100%"
// //                 height="100%"
// //                 style={{ border: 0 }}
// //                 allowFullScreen=""
// //                 loading="lazy"
// //                 referrerPolicy="no-referrer-when-downgrade"
// //                 title="Office Location"
// //               ></iframe>
// //             </div>
// //     </div>
// //   );
// // };

// // export default ContactPage;




