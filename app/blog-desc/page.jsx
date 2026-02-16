"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  User, 
  Clock, 
  ChevronRight
} from "lucide-react";

const BLOG_DATA = {
  "vizag-2026": {
    id: 1,
    category: "Investment",
    title: "Visakhapatnam Real Estate Is the Smart Investment Choice in 2026",
    author: "Real Estate Analyst",
    date: "Feb 10, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1590001158193-790130009581?auto=format&fit=crop&w=1200",
    tags: ["Visakhapatnam", "Coastal Living", "Smart Investment"],
    quote: "Imagine waking up to the sound of waves and commuting to work without spending two hours in traffic. This is the new reality of Vizag.",
    content: `
      <p>Are you looking for the next big smart investment opportunity? The coastal city of Visakhapatnam is your call now to the next big opportunity to invest in. The Indian real estate landscape is shifting, and coastal cities are emerging as the new growth centers.Imagine waking up to the sound of waves, breathing fresh sea air, and commuting to work without spending two hours in traffic. Sounds like a dream? Welcome to Visakhapatnam, where this dream is your everyday reality.</p>
      <p>This port city in Andhra Pradesh isn't just about beautiful beaches anymore. Visakhapatnam real estate has evolved significantly over the past decade. What was once primarily a market driven by local demand is now attracting investors and homebuyers from across India. This guide will walk you through everything you need to know about finding your perfect home in the City of Destiny. </p>
      
      <h3 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Why Visakhapatnam Is Catching Investor Attention</h3>
      
      <h4 style="font-size: 20px; font-weight: bold; color: #22c55e;">The Infrastructure Story</h4>
      <p>Let's talk about what really drives property values: infrastructure. The city is witnessing unprecedented development with the expansion of the Visakhapatnam Port, one of India's busiest cargo-handling ports. The proposed Visakhapatnam Metro is a potential game-changer. Properties along the planned metro corridor are already seeing speculative demand.</p>
      <p>The upcoming greenfield airport, just 60 kilometers away, is set to revolutionize connectivity. Areas between Visakhapatnam and Bhogapuram are witnessing increased investor interest in land and development projects. When infrastructure improves, property values follow—that simple.</p>

      <h4 style="font-size: 20px; font-weight: bold; color: #22c55e; margin-top: 20px;">Industrial Growth Equals Housing Demand</h4>
      <p>Visakhapatnam also houses key industries such as the Hindustan shipyard, Visakhapatnam Steel Plant, and the HPCL refinery. The new Brandix SEZ and Atchutapuram Special Economic Zone are providing jobs to thousands of people across the region. More people imply that there will be more jobs, and that means more people will come and look for new homes. This is basically an economic theory that makes investing in Visakhapatnam real estate a wise idea.</p>

      <h4 style="font-size: 20px; font-weight: bold; color: #22c55e; margin-top: 20px;">Quality of Life</h4>
      <p>The major difference that Visakhapatnam has to offer in comparison with all the overcrowded metros is that in this city, a person can experience what is priceless: quality of life. The quality of air, quality of beaches, rates of pollution, and quality of living are fast becoming major attractions for individuals who have had enough of metro life. This dimension can be witnessed in terms of sustained real estate demands from NRIs looking for a return haven.</p>

      <h3 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Understanding the Market Dynamics</h3>
      <p><strong>Price Points That Make Sense:</strong> Now, that’s the fun part! You know that your money is ₹8,000 to ₹15,000 every square foot in a tier-1 city, and here, in Visakhapatnam, you can enjoy the best properties with a budget of ₹3,500 to ₹7,000 every square foot. You could own a lavish 3-bedroom home with a view of the sea instead of a 2-bedroom home in a suburb in Mumbai.</p>
      <p><strong>Rental Yields:</strong> Places like Madhurawada, Rushikonda, and Gajuwaka offer a rental yield of 3.5 to 5 percent, which is above normally offered in a saturated market.</p>

      <h4 style="font-size: 20px; font-weight: bold; margin-top: 20px;">Property Types: What Can You Expect?</h4>
      <ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 20px;">
        <li><strong>Apartment Complexes:</strong> Gated communities dominate the landscape in Vizag, offering 2BHK to 4BHK units with swimming pools, gyms, and clubhouses.</li>
        <li><strong>Villas and Row Houses:</strong> The villa market is growing, especially in coastal areas like Rushikonda and Madhurawada for those seeking private living space.</li>
        <li><strong>Affordable Entry Points:</strong> 2 BHK Flats starting at 30 Lacs in developing areas make the scene very accommodative for new investors.</li>
      </ul>

      <h3 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">How to Choose the Right Project</h3>
      <ol style="list-style-type: decimal; margin-left: 20px; margin-bottom: 20px;">
        <li>Confirm RERA Approval</li>
        <li>Check sustainability (IGBC-certified)</li>
        <li>Assess Location Connectivity (NH 45, Airport, IT SEZ)</li>
        <li>Examine Completed Projects by the developer</li>
        <li>Review Legal Documentation and clear titles</li>
      </ol>

      <p><strong>The Verdict: Why Now?</strong> For buyers, it offers affordability and lifestyle. For investors, it presents growth potential without excessive risk. The sweet spot in the market cycle makes 2026 an opportune time to enter this market.</p>
    `
  },
  // "future-real-estate": {
  //   id: 2,
  //   category: "Market Trends",
  //   title: "The Future of Real Estate Business: Opportunities You Can't Afford to Miss",
  //   author: "Marketing Desk",
  //   date: "Jan 12, 2026",
  //   readTime: "6 min read",
  //   image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200",
  //   tags: ["Technology", "Sustainability", "Trends"],
  //   quote: "Luxury is no longer about the gold on the walls; it is about the air you breathe and the silence of your surroundings.",
  //   content: `
  //     <p>The property market is moving at a pace never before witnessed. The reality is that technology, demographics, and economies are creating unparalleled opportunities for anyone with eyes to see. Let's look into what's hot into the future and how you can surge ahead.</p>
      
  //     <h3 style="font-size: 22px; font-weight: bold; margin-top: 24px;">The Digital Revolution Continues</h3>
  //     <p>Just five years ago, virtual tours of properties were the stuff of science fiction. Today they are mundane. Potential buyers can tour homes from their desks, never having to step foot on a plane. Artificial intelligence helps analyze market information within seconds. Chatbots give basic information at any time of day. Those technology masters, while maintaining a personal touch, are the masters who'll be on top.</p>

  //     <h3 style="font-size: 22px; font-weight: bold; margin-top: 24px;">Sustainability Sells</h3>
  //     <p>The category of eco-conscious buyers is not a niche market anymore but a mainstream market. Prominent influences include energy-efficient houses, solar power, and smart thermostats. Buildings with smaller carbon footprints fetch a higher price and sell faster. The real estate industry today rewards professionals who can talk intelligently about the green movement and its associated savings.</p>

  //     <h3 style="font-size: 22px; font-weight: bold; margin-top: 24px;">Remote Work Reshapes Demand</h3>
  //     <p>The 'work from anywhere' movement has fundamentally changed what we all want. Home offices are no longer a bonus, they’re a requirement. This presents opportunities for untapped markets in secondary cities with cheaper options and better standards of living.</p>

  //     <h3 style="font-size: 22px; font-weight: bold; margin-top: 24px;">Blockchain and Tokenization</h3>
  //     <p>New technologies offer hope with the promise of a sea change in transaction execution. Blockchain promises an open, secure process, while tokenization allows people to own real estate at various scales. Understanding this now puts you in the innovative leadership arena.</p>

  //     <h3 style="font-size: 22px; font-weight: bold; margin-top: 24px;">Experience over Square Footage</h3>
  //     <p>Today's generational buyer has different priorities. They would take a walkable community with amenities and flexibility over a formal dining room they never use. It's about understanding the psyche of the buyers beyond the 'price per square footage'.</p>

  //     <p><strong>Seize the Moment:</strong> The next decade shall see more wealth created in real estate than possibly ever in history. Stay curious, embrace change, and find one trend to excel at. The future belongs to those making it happen now.</p>
  //   `
  // },
  // "smart-solutions": {
  //   id: 3,
  //   category: "Investment",
  //   title: "Smart Investment Solutions: Real Estate and Strategic Planning",
  //   author: "Financial Strategy Team",
  //   date: "Feb 05, 2026",
  //   readTime: "10 min read",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200",
  //   tags: ["Wealth", "Tax Planning", "REITs"],
  //   quote: "Consistency is more important than cleverness. The mathematical fact of compounding rewards those who start today, not tomorrow.",
  //   content: `
  //     <p>All investors face challenges: scarcity of capital, overwhelming choices, tax uncertainties, and market volatility. This guide presents effective solutions for these hurdles.</p>
      
  //     <h3 style="font-size: 22px; font-weight: bold; margin-top: 24px;">Problem 1: I Don't Have Enough Money to Start</h3>
  //     <p>Millions believe investing needs lakhs, delaying the process indefinitely. The mathematical fact is that a 25-year-old investing ₹2,000 every month creates more wealth than a 35-year-old investing ₹10,000 every month.</p>
  //     <p><strong>Solution:</strong> Micro-investing. Mutual Fund SIPs (minimum ₹500), Micro REIT Units (₹10,000 range), or PPF Accounts (minimum ₹500). Saving ₹3,000/month from age 25 at 12% return results in ₹1.76 crores by age 60.</p>

  //     <h3 style="font-size: 22px; font-weight: bold; margin-top: 24px;">Problem 2: Real Estate Requires Too Much Capital</h3>
  //     <p><strong>Solution:</strong> 
  //       <br/>1. <strong>REITs:</strong> (₹10,000 entry) Invest in Grade A office spaces like Embassy or Mindspace. Target 12-15% total returns.
  //       <br/>2. <strong>Crowdfunding:</strong> (₹5-10L) Pool funds for commercial ventures.
  //       <br/>3. <strong>Leverage:</strong> Use Home Loans at 8-9% to leverage bank money.
  //     </p>

  //     <h3 style="font-size: 22px; font-weight: bold; margin-top: 24px;">Problem 3: I Don't Understand Stock Markets</h3>
  //     <p><strong>Solution:</strong> Simple index funds (Nifty 50) - "Set it and Forget it". Or use Robo-advisory platforms like Smallcase. Consistency is more important than cleverness. A target allocation of 40% Index Funds, 30% PPF, 15% Balanced funds, and 10% REITs works for most knowledge-limited investors.</p>

  //     <h3 style="font-size: 22px; font-weight: bold; margin-top: 24px;">Problem 4: How Do I Save Tax While Building Wealth?</h3>
  //     <p>Strategic tax-efficient investing offers a two-fold benefit. Utilize Section 80C (ELSS/PPF), Section 80CCD (NPS), and Section 24 (Home Loan interest). 
  //     An investor in the 30% bracket can save up to ₹1.54 lakhs per year in taxes. Investing that tax saving alone adds up to ₹96 lakhs over 20 years at 10% returns.</p>

  //     <p><strong>The Journey:</strong> Financial success is determined by applying tried-and-true strategies. Start working on one issue this week. The best way to deal with investment issues? Invest now.</p>
  //   `
  }


export default function BlogPortal() {
  const [activeSlug, setActiveSlug] = useState("vizag-2026");
  const post = BLOG_DATA[activeSlug];

  const arialSans = { fontFamily: "Arial, Helvetica, sans-serif" };

  return (
    <div style={arialSans} className="bg-white min-h-screen text-[#0a1a10]">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={`cat-${post.id}`}
            className="bg-[#22c55e]/10 text-[#22c55e] px-4 py-1.5 rounded-lg text-[10px] font-black tracking-widest mb-6 inline-block uppercase"
          >
            {post.category}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={`title-${post.id}`}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.1]"
          >
            {post.title}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold tracking-widest text-gray-400 mb-12 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2">
              <User size={14} className="text-[#22c55e]" />
              <span className="text-[#0a1a10]">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-[#22c55e]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#22c55e]" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          key={`img-${post.id}`}
          className="w-full h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <img src={post.image} alt="Blog Banner" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-8">
            
            <article className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6">
              <div 
                className="content-render"
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
              
              <div className="my-12 p-8 md:p-10 bg-gray-50 rounded-[2rem] md:rounded-[2.5rem] border-l-[8px] border-[#22c55e] italic">
                <p className="text-xl md:text-2xl text-[#0a1a10] font-normal leading-relaxed opacity-80">
                  "{post.quote}"
                </p>
              </div>
            </article>

            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-3">
              {post.tags.map(tag => (
                <span key={tag} className="px-5 py-2 bg-gray-50 text-[11px] font-bold tracking-widest rounded-full text-gray-600">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 lg:sticky lg:top-12 space-y-8">
            
            <div className="bg-[#0a1a10] p-8 rounded-[2.5rem] text-white">
              <h4 className="text-[10px] font-black text-[#22c55e] tracking-[0.2em] mb-6 uppercase">Continue Reading</h4>
              <div className="space-y-4">
                {Object.entries(BLOG_DATA).map(([slug, data]) => (
                  <button 
                    key={slug}
                    onClick={() => {
                        setActiveSlug(slug);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full text-left p-5 rounded-2xl transition-all border flex items-center justify-between group ${
                      activeSlug === slug 
                        ? "bg-[#22c55e] border-[#22c55e] text-[#0a1a10]" 
                        : "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                    }`}
                  >
                    <div className="max-w-[85%]">
                      <p className={`text-[9px] uppercase font-black tracking-widest mb-1 ${activeSlug === slug ? "text-[#0a1a10]/60" : "text-[#22c55e]"}`}>
                        {data.category}
                      </p>
                      <p className="text-sm font-bold leading-tight">{data.title}</p>
                    </div>
                    <ChevronRight size={18} className={`transition-transform group-hover:translate-x-1 ${activeSlug === slug ? "text-[#0a1a10]" : "text-gray-500"}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
              <h4 className="font-bold text-[#0a1a10] mb-2 text-xl">Market Intelligence</h4>
              <p className="text-sm text-gray-500 mb-6">Join 5,000+ investors receiving weekly strategy updates.</p>
              <div className="space-y-3">
                <input 
                  className="w-full px-5 py-4 bg-white rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-[#22c55e]/50" 
                  placeholder="Email Address" 
                />
                <button className="w-full bg-[#0a1a10] text-white py-4 rounded-xl font-bold text-[10px] tracking-widest hover:bg-[#22c55e] hover:text-[#0a1a10] transition-all uppercase">
                  Subscribe Now
                </button>
              </div>
            </div>

          </aside>
        </div>
      </main>
    </div>
  );
}