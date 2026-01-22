"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, MapPin, Building2, BarChart3, ArrowUpRight, CheckCircle2, Globe, Landmark } from 'lucide-react';

const brandGreen = "#22C55E";

const investmentReasons = [
    {
        title: "Projected $1 Trillion Market",
        description: "The Indian real estate sector is on a monumental trajectory, estimated to reach a USD 1 Trillion valuation by 2030, contributing 13% to the country's GDP.",
        icon: TrendingUp,
        image: "https://images.unsplash.com/photo-1460472178825-e5240623abe5?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Strategic Asset Selection",
        description: "We focus on high-yield up-country expansions and premium urban corridors that offer unmatched capital appreciation and rental demand.",
        icon: MapPin,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Uncompromising Integrity",
        description: "Our strategic alliances ensure a transparent legal framework and timely delivery, mitigating risk and maximizing investor confidence.",
        icon: ShieldCheck,
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
    }
];

export default function WhyInvest() {
    return (
        <main className="bg-white overflow-hidden"style={{fontFamily:"Arial, Helvetica, sans-serif"}}>

            {/* 1. HERO BANNER - CINEMATIC SCALE */}
            <section className="relative h-[84vh] w-full flex items-center justify-center overflow-hidden bg-black">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 z-10"
                >
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                        alt="Investment Banner"
                        className="w-full h-full object-cover opacity-50"
                    />
                </motion.div>
                <div className="absolute inset-0 z-15 bg-gradient-to-b from-black/70 via-transparent to-black"></div>

                <div className="relative z-20 text-center px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >

                        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-[0.8] mb-8">
                            Future Capital

                        </h1>
                        <div className="w-24 h-1 mx-auto" style={{ backgroundColor: brandGreen }}></div>
                        <p className="text-stone-300 text-base md:text-xl leading-relaxed mt-10 font-light max-w-2xl mx-auto">
                            Strategically navigating the $1 Trillion Indian Real Estate surge with precision and architectural excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. THE MARKET DYNAMICS (Enhanced Stats) */}
            <section className="py-24 bg-white relative z-20 -mt-20 px-6">
                <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-xl overflow-hidden">
                    {[
                        { label: "Market Size 2030", value: "$1 Trillion", icon: Globe },
                        { label: "GDP Contribution", value: "13%", icon: Landmark },
                        { label: "Developed Space", value: "12M+ Sqft", icon: Building2 }
                    ].map((stat, i) => (
                        <div key={i} className="p-12 bg-stone-900 border-r border-white/5 flex flex-col items-center text-center group hover:bg-[#0a1a10] transition-colors">
                            <stat.icon className="text-green-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
                            <h4 className="text-5xl font-bold text-white mb-2">{stat.value}</h4>
                            <p className="text-[10px]  tracking-[0.3em] font-bold text-white">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. INVESTMENT PILLARS (The Design) */}
            {/* Section pulled up using -mt-24 and reduced pt-8 */}
            <section className="relative z-30 pt-8 pb-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-24 flex flex-col items-center text-center">
                        <h2 className="text-5xl md:text-7xl font-bold  tracking-tighter text-black leading-none mb-6">
                            Investment <span className="text-black">Determinants</span>
                        </h2>
                        <div className="w-20 h-1 bg-green-500"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {investmentReasons.map((reason, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="group relative"
                            >
                                <div className="relative overflow-hidden aspect-[4/5] rounded-2xl mb-8 shadow-2xl">
                                    <img
                                        src={reason.image}
                                        alt={reason.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 transform -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <ArrowUpRight className="text-white" size={20} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white  tracking-tighter leading-none">{reason.title}</h3>
                                    </div>
                                </div>
                                <p className="text-black font-semi-bold leading-relaxed text-sm pr-4">
                                    {reason.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. MARKET POTENTIAL BAR (New Attractive Component) */}
            <section className="py-32 bg-stone-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold text-black  tracking-tighter mb-8 leading-none">
                                India's Real Estate <br /> <span className="text-green-500 underline decoration-stone-200 underline-offset-8">Supercycle</span>
                            </h2>
                            <p className="text-stone-600 text-lg mb-10 font-light">
                                We are currently entering the most aggressive growth phase in Indian economic history. Mangal Realty positions investors at the core of this transformation.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { year: '2023', val: 'Current $260B', w: '26%' },
                                    { year: '2030', val: 'Projected $1 Trillion', w: '100%' }
                                ].map((bar, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-black text-[10px]  font-bold tracking-widest mb-2">
                                            <span>{bar.year}</span>
                                            <span>{bar.val}</span>
                                        </div>
                                        <div className="w-full h-1 bg-stone-200">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: bar.w }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                                className="h-full bg-green-500"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 border border-stone-200 translate-x-8 translate-y-8"></div>
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                                className="relative z-10 w-full rounded-sm shadow-2xl"
                                alt="Modern Architecture"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. THE TRUST SEAL - BLACK THEME */}
            <section className="py-32 bg-black relative">
                <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-16 border border-white/10 rounded-3xl backdrop-blur-sm"
                    >
                        {/* <CheckCircle2 size={48} className="mx-auto mb-8 text-green-500" /> */}
                        <h2 className="text-white text-4xl md:text-6xl font-bold  tracking-tighter mb-8 leading-tight">
                            Institutional <span className="text-white ">Rigor</span> <br />
                            Private Equity Standards
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {["RERA Compliant", "Audit Transparent", "High ROI", "Zero Debt Path"].map((text, i) => (
                                <span key={i} className="px-6 py-2 rounded-full border border-white/20 text-[10px]  font-bold tracking-widest text-stone-400">
                                    {text}
                                </span>
                            ))}
                        </div>
                        <button
                            className="group relative cursor-pointer px-12 py-5 text-white font-bold  tracking-widest text-xs overflow-hidden"
                        >
                            <span className="relative z-10">Download Investor Deck</span>
                            <div className="absolute inset-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                            <div className="absolute inset-1 border border-green-600"></div>
                        </button>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}