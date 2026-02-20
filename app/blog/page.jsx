"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronRight,
  Calendar,
  User,
  ArrowUpRight,
  Share2,
  Home,
  Clock,
} from "lucide-react";

// 1. DATA DEFINITIONS (Slug-based mapping)
const BLOG_CONTENT = {
  "future-real-estate": {
    id: 2,
    category: "Market Trends",
    title: "The Future of Real Estate Business: Opportunities You Can't Afford to Miss",
    author: "Archita",
    date: "Feb 20, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200",
    tags: ["Technology", "Sustainability", "Trends"],
    quote: "Luxury is no longer about the gold on the walls; it is about the air you breathe and the silence of your surroundings.",
    content: `
      <p>The property market is moving at a pace never before witnessed. The reality is that technology, demographics, and economies are creating unparalleled opportunities for anyone with eyes to see. Let's look into what's hot into the future and how you can surge ahead.</p>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">The Digital Revolution Continues</h2>
      <p>Just five years ago, virtual tours of properties were the stuff of science fiction. Today they are mundane. Potential buyers can tour homes from their desks, never having to step foot on a plane across the country or even from across the globe.</p>
      <p>While the fact is that the real estate market nowadays is driven by technology, this does not rest the value of human expertise. While computers and technology process and facilitate transactions and tasks in this industry, I provide emotional support and human understanding to life-changing transactions and deals.</p>
      <p>Artificial intelligence helps analyze market information within seconds. Chatbots give basic information at any time of day. Websites that allow digital signing make deals anywhere. Those technology masters, while maintaining a personal touch, are the masters who'll be on top.</p>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Sustainability Sells</h2>
      <p>Now, the category of eco-conscious buyers is not a niche market anymore but a mainstream market. Some of the prominent influences on decision-making include energy-efficient houses, solar power, and smart thermostat devices, among others.</p>
      <p>Knowing and getting familiar with the green building certifications, ratings, and the overall green effect on the environment would undoubtedly give you a competitive advantage in the real estate industry. Yes, the real estate industry today rewards professionals who can talk intelligently about the green movement and its associated savings. Those with smaller carbon footprints fetch a higher price and sell faster. Now, you will be your own expert and tout your ability to make informed and environmentally conscious decisions to save money.</p>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">The Rental Economy Expands</h2>
      <p>Although the demand level for homeownership may change, quality demand for rentals always exists. The demand for apartments exists among young professionals, retirees, and even working individuals.</p>
      <p>Another money-making avenue in the real estate investment is property management, in addition to investment consultancy. Helping a client accumulate their rental portfolio, evaluating their cash flow forecasts, etc., are profitable avenues. Yet, there still lies the factor of short-term rentals through mediums like Airbnb, especially in a business or tourism hub, which can turn out to be more profitable compared to the former.</p>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Remote Work Reshapes Demand</h2>
      <p>The work from anywhere movement has fundamentally changed what we all want. Home offices are no longer a bonus, they’re a requirement. Being close to our employers may not be that important, but having high speed internet access and a viable community are much more so.</p>
      <p>This, in turn, presents opportunities for new, untapped markets. The availability of cheaper options and better standards of living in secondary cities is a great advantage for those looking for an alternative to living in cities and paying high living expenses; and for rural areas with good connectivity, it is an unprecedented demand. This also gives input in the real estate Investment business on where potential spots are located before they become apparent to all.</p>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Data Becomes Your Superpower</h2>
      <p>Information advantages once lay with industry insiders. Data is now democratized, though interpretation still requires expertise. Immediately, buyers can see information, price history, and neighborhood statistics. You, the professional, put context around the various pieces. What does the information really mean? What neighborhoods are trending up? When does a buyer wait, and when does a buyer need to react rapidly?</p>
      <p>Predictive analytics tools forecast market movement. Comparative market analysis software gives immediate valuation. Real estate Investment business appears to create two kinds of professionals: those who use the data and those drowned by it.</p>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Experience over Square Footage</h2>
      <p>More State-of-the-Art: Today's generational buyer, at least the young ones, has different priorities. They would take a walkable community, with community amenities, entertainment access, and flexibility in their space over a formal dining room that they will never use. It's about understanding the psyche of the buyers, the buying factors that go beyond 'price per square footage'; it enables you to match clients with properties they will love, not properties that meet their specification checkboxes. A person in the business of real estate needs emotional and cultural intelligence just as much as market intelligence.</p>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">International investment opportunities</h2>
      <p>Therefore, global wealth is being invested in solid real estate destinations. Investment properties, vacation homes, and residence are being purchased by investors from all over the world. The knowledge concerning the motive of the investor, handling different currencies, and possessing proper communication skills in spite of zones in the world need to be acquired in order to gain expertise. All these can prove to be an opportunity for profitability. The real estate industry is not confined any longer by boundaries. The digital age makes the possibility of international transactions a reality if the individual is willing to accept the challenge.</p>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Blockchain and Tokenization</h2>
      <p>Now, new technologies offer hope with the promise of a sea change in the way transactions involving property will be executed in the near future. For example, the use of the blockchain technology system promises an open and secure process that is efficiency-enhanced. Tokenization will allow people who own real estate to do so at large scales. While it may be several years before the masses fully embrace the innovation, your understanding at this stage puts you in the innovative leadership arena of the real estate business, where clients admire the experts who can clearly explain their understanding of the new concepts.</p>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">The Aging of the Population Creates Needs</h2>
      <p>Those huge market segments are the baby boomers who are downsizing, seeking accessible homes, or moving into retirement communities. Understanding what is top of mind for them; single-level living, proximity to health care and community activities—is key to serving them best. Reverse mortgages, estate planning considerations, and senior housing options all require expertise. Developing one's real estate business serving the aging population with dignity and understanding rewards this trend.</p>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Developing Your Future-Proof Career</h2>
      <p>Opportunities abound for professionals willing to make adaptations, to learn, and to embrace change. At a very basic level, change is impossible because we will always require shelter and a place to work. The manner by which you manage to acquire those things is constantly changing. Stay curious. Go to conferences in your industry. Get new technologies. Make friends with different generations and cultures. The real estate business is inhospitable to complacent behavior, and it feeds on constant self-improvement. Your clients are not just in need of a hand opening doors and filling out forms; they are also in need of a colleague who can help them utilize strategy, capitalize on technology, and make strategic business decisions that are well-aligned with their interests and values.</p>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Seize the Moment</h2>
      <p>But the next decade shall see more wealth created in real estate than possibly ever in all of history. Demographics, technology, and economics shall combine to create tremendous opportunity. The question is not whether or not the real estate business has prospects for expansion, since it does, but whether or not you can capitalize on it. Start today. Find one trend to which you relate. Excel at it. Make your reputation by it. The future belongs to those making it happen now, not waiting on it to come to them.</p>
    `,
},
 "vizag-2026": {
    id: 1,
    category: "Investment",
    title: "Visakhapatnam Real Estate Is the Smart Investment Choice in 2026",
    author: "Archita",
    date: "Feb 16, 2026",
    readTime: "8 min read",
    image: "/assets/images/blog-image.jpg",
    tags: ["Visakhapatnam", "Coastal Living", "Smart Investment"],
    quote: "Imagine waking up to the sound of waves and commuting to work without spending two hours in traffic. This is the new reality of Vizag.",
    content: `
      <p>Are you looking for the next big smart investment opportunity? The coastal city of Visakhapatnam is your call now to the next big opportunity to invest in. The Indian real estate landscape is shifting, and coastal cities are emerging as the new growth centers. Imagine waking up to the sound of waves, breathing fresh sea air, and commuting to work without spending two hours in traffic. Sounds like a dream? Welcome to Visakhapatnam, where this dream is your everyday reality.</p>

      <p>This port city in Andhra Pradesh isn't just about beautiful beaches anymore. Visakhapatnam real estate has evolved significantly over the past decade. What was once primarily a market driven by local demand is now attracting investors and homebuyers from across India. This guide will walk you through everything you need to know about finding your perfect home in the City of Destiny.</p>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Why Visakhapatnam Is Catching Investor Attention</h2>

      <h3 style="font-size: 20px; font-weight: bold; margin: 24px 0 12px;">The Infrastructure Story</h3>
      <p>Let's talk about what really drives property values: infrastructure. The city is witnessing unprecedented development with the expansion of the Visakhapatnam Port, one of India's busiest cargo-handling ports. The proposed Visakhapatnam Metro is a potential game-changer. Properties along the planned metro corridor are already seeing speculative demand.</p>
      
      <p>The upcoming greenfield airport, just 60 kilometers away, is set to revolutionize connectivity. Areas between Visakhapatnam and Bhogapuram are witnessing increased investor interest in land and development projects. When infrastructure improves, property values follow—it’s that simple.</p>

      <h3 style="font-size: 20px; font-weight: bold; margin: 24px 0 12px;">Industrial Growth Equals Housing Demand</h3>
      <p>Visakhapatnam also houses key industries such as the Hindustan shipyard, Visakhapatnam Steel Plant, and the HPCL refinery. The new Brandix SEZ and Atchutapuram Special Economic Zone are providing jobs to thousands of people across the region.</p>
      <p>More people imply that there will be more jobs, and that means more people will come and look for new homes within that place. More people imply that there is going to be an increased demand for houses. This is basically an economic theory that makes investing in Visakhapatnam real estate a wise idea.</p>

      <h3 style="font-size: 20px; font-weight: bold; margin: 24px 0 12px;">Quality of Life</h3>
      <p>The major difference that Visakhapatnam has to offer in comparison with all the overcrowded metros is that in this city, a person can experience what is priceless: quality of life. The quality of air, quality of beaches, rates of pollution, and quality of living are fast becoming major attractions for individuals who have had enough of metro life. The quality of living dimension can be witnessed in terms of sustained real estate demands that exist in Visakhapatnam as a place that can serve as a return haven for NRIs.</p>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Understanding the Market Dynamics</h2>

      <p><strong>Price Points That Make Sense:</strong> Now, that’s the fun part! You know that your money is ₹8,000 to ₹15,000 every square foot in a tier-1 city, and here, in Visakhapatnam, you can enjoy the best properties with a budget of ₹3,500 to ₹7,000 every square foot. You could own a lavish property, say a 3-bedroom home with a view of the sea instead of a 2-bedroom home in a suburb in Mumbai.</p>

      <p><strong>Rental Yields Worth Noting:</strong> Though investors prefer investing in real estate with rental yields, Visakhapatnam has its own place. Places like Madhurawada, Rushikonda, and Gajuwaka offer a rental yield of 3.5 to 5 percent, which is above what is normally offered in similar markets.</p>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Property Types: What Can You Expect?</h2>
      <p><strong>Apartment complexes in Gated communities:</strong> These dominate the landscape in Vizag. Many are apt to opt for apartment living in a safe, secure, and gated community with configurations ranging from 2BHK to 4BHK. Common amenities include swimming pools, gyms, club houses, and kids play areas.</p>
      
      <p><strong>Villas and Row Houses:</strong> Are you looking for some private living space? The villa market is growing, especially in the coastal and premium suburban areas. From beachfront properties to exclusive villa plots, locations like Rushikonda and Madhurawada are in demand for their private living space and future appreciation as smart investment options.</p>
      
      <p><strong>Affordable Entry Points:</strong> What makes the Visakhapatnam real estate scene very accommodative and friendly for entry points into the industry lies in the range itself. Visakhapatnam's real estate diversity affords accessibility across various price points, with 2 BHK Flats starting at 30 Lacs in developing areas.</p>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">How to Choose the Right Visakhapatnam Real Estate Project</h2>
      <ol>
        <li><strong>Confirm RERA Approval:</strong> One ought to make sure that one chooses a project that has been approved by RERA (Real Estate Regulatory Authority) to be on the safe side.</li>
        <li><strong>Check sustainability certifications:</strong> You can also try to find IGBC-certified projects. Such projects are green in their design and are intended to minimize your footprint on the environment and your expenses.</li>
        <li><strong>Assess Location Connectivity:</strong> Evaluate proximity to major highways (NH 16, coastal corridor), Bhogapuram International Airport, IT SEZ and employment centers, educational institutions, healthcare facilities, and shopping centers.</li>
        <li><strong>Examine Completed Projects:</strong> You can also view other completed projects undertaken by the developer and use them to gauge the level of quality they deliver.</li>
        <li><strong>Understand Amenity Scale:</strong> Generally speaking, larger projects with areas exceeding 40 acres can provide numerous facilities including a water body, green space, and sports facilities within their campuses.</li>
        <li><strong>Review Legal Documentation:</strong> Provide clear titles, approvals, and documentation. Legitimate developers provide clear legal clarifications prior to registration.</li>
      </ol>

      <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">The Verdict: Why Now Is the Right Time</h2>
      <p>For buyers, it offers affordability and lifestyle. For investors, it presents growth potential without excessive risk. The sweet spot in the market cycle makes 2026 an opportune time to enter this market.</p>
      <p>Whether you're buying your first home, investing for rental income, or looking for long-term capital appreciation, Visakhapatnam deserves serious consideration. The numbers support the narrative—this coastal city is set for sustained real estate growth.</p>
    `,
  },
  
//   "smart-solutions": {
//     id: 3,
//     category: "Investment",
//     title: "Smart Investment Solutions: Real Estate Investment and Strategic Planning",
//     author: "Archita",
//     date: "Feb 10, 2026",
//     readTime: "10 min read",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200",
//     tags: ["Wealth", "Tax Planning", "REITs"],
//     quote: "Consistency is more important than cleverness. The mathematical fact of compounding rewards those who start today, not tomorrow.",
//     content: `
//       <p>All investors face investment challenges, such as a scarcity of capital, an overwhelming number of investment choices, uncertainties related to taxes, and market volatility. Therefore, the guide offers information on the prevailing investment challenges while presenting effective solutions to various investment challenges, including real estate investment challenges as well as all investment challenges.</p>

//       <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Problem 1: I Don't Have Enough Money to Start Investing</h2>
//       <p><strong>The Challenge:</strong> Millions of people believe that investing needs lakhs of rupees, and hence, they delay the wealth-creation process indefinitely. Inflation, on the other hand, eats into their savings account balance, and the financial goals recede further. This begets an expensive delusion. The man who waits for ₹1 lakh to start investing loses valuable years of compounding. The mathematical fact of compounding is that a 25-year-old investing ₹2,000 every month creates more wealth than a 35-year-old investing ₹10,000 every month.</p>

//       <h3 style="font-size: 20px; font-weight: bold; margin: 24px 0 12px;">The Smart Investment Solution:</h3>
//       <p>Micro-investing can be done immediately, as many platforms offer investment opportunities with as little as ₹100-500.</p>
//       <ul>
//         <li><strong>Mutual Fund SIP:</strong> Websites such as Groww, Zerodha Coin, and Paytm Money allow a minimum of Rs. 500 per month investment in Index Mutual Funds. A monthly investment of Rs. 2,000 for 3 funds of Rs. 700 each, comprising equity and ELSS.</li>
//         <li><strong>Micro REIT Units:</strong> With the price of Full REIT units ranging between Rs. 10,000 and 15,000, investing brokers also provide fractional investments. Exposure to Real Estate investment assets can be achieved without involving huge capital.</li>
//         <li><strong>PPF Account:</strong> Start with a minimum amount of ₹500, increase it as the income increases. Even ₹5,000 invested every year adds up to ₹1.5 lakhs at a 7.1% return after 15 years.</li>
//         <li><strong>Digital Gold:</strong> Park your money in ₹100 units of Sovereign Bonds during RBI windows.</li>
//       </ul>

//       <h3 style="font-size: 20px; font-weight: bold; margin: 24px 0 12px;">The Three Tier Start Strategy:</h3>
//       <ul>
//         <li><strong>Tier 1 (₹500-2,000/month):</strong> 50% equity index fund, 30% debt.</li>
//         <li><strong>Tier 2 (₹5,000-10,000/month):</strong> Add PPF, balanced funds.</li>
//         <li><strong>Tier 3 (₹15,000+/month):</strong> Implement the NPS plan, carry out direct real estate investment, and asset class diversification.</li>
//       </ul>
//       <p><strong>Results:</strong> Saving ₹3,000/month from age 25 at 12% results in ₹1.76 crores by age 60. Saving ₹5,000/month from age 35 results in only ₹1.18 crores—a cost of ₹58 lakhs to delay a boon!</p>

//       <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Problem 2: Real Estate Investment Requires Too Much Capital</h2>
//       <p><strong>The Challenge:</strong> Aspiring property investors feel that they will have to pool in a certain minimum of ₹25-50 lakhs for a down payment, making property investment a distant dream. "Conventional wisdom dictates: Save for 10 years, then invest in property - but property rates appreciate by 8-10% a year!"</p>

//       <h3 style="font-size: 20px; font-weight: bold; margin: 24px 0 12px;">The Smart Investment Solution:</h3>
//       <p><strong>Option 1: REITs (₹10,000-15,000 entry)</strong><br/>Embassy Office Parks, Mindspace, and Brookfield offer professionally managed Grade A office spaces. Earn quarterly dividends and benefit from appreciation. Returns: 7-8% yield + 5-8% appreciation = 12-15% total returns.</p>
//       <p><strong>Option 2: Real Estate Crowdfunding (₹5-10 Lakhs entry)</strong><br/>Strata, PropShare, and RealX allow pooling funds for commercial ventures like warehouses and premium offices with a target IRR of 12-18%.</p>
//       <p><strong>Option 3: Intelligent Home Loan Strategy (₹10-15 Lakhs down payment)</strong><br/>Leverage bank money. For a ₹50L house: ₹15L down payment + ₹35L loan. Rental income covers a huge portion of the EMI, and tax benefits reduce the cost further. Your ₹15L investment grows as the property appreciates to roughly ₹73.5L in 5 years.</p>
//       <p><strong>Option 4: Partnership Investment</strong><br/>Share resources with trusted family/friends to pool capital and split the loan burden.</p>

//       <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Problem 3: I Don't Understand Stock Markets or Complex Investments</h2>
//       <p><strong>The Challenge:</strong> Successful professionals often fear the unknown. This knowledge gap is costing lakhs; bank interest is 3-4% while equity appreciates 12-15%.</p>
//       <h3 style="font-size: 20px; font-weight: bold; margin: 24px 0 12px;">The Smart Investment Solution:</h3>
//       <ul>
//         <li><strong>Index Funds:</strong> An automated bet on India's top companies (Reliance, TCS, HDFC). Past performance: 11-13% returns with the lowest fees.</li>
//         <li><strong>PPF:</strong> Wealth building without complexity. No need to monitor markets. 7-7.5% tax-free interest.</li>
//         <li><strong>Robo Advisory:</strong> Platforms like Smallcase or Scripbox create and rebalance portfolios for you based on a 5-minute questionnaire.</li>
//       </ul>
//       <p><strong>Target Allocation for Knowledge-Limited Investors:</strong> 40% Nifty 50 Index Fund, 30% PPF, 15% Balanced advantage fund, 10% REIT units, 5% Sovereign Gold Bonds.</p>

//       <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Problem 4: How Do I Save Tax While Building Wealth?</h2>
//       <p><strong>The Challenge:</strong> 30% Tax Bracket investors lose substantial money. A ₹10L salary becomes ₹7L after taxes, constraining investment capacity.</p>
//       <h3 style="font-size: 20px; font-weight: bold; margin: 24px 0 12px;">Maximum Tax Optimization Framework:</h3>
//       <ul>
//         <li><strong>Sec 80C (₹1.5L):</strong> ELSS Mutual Funds (₹75k) + PPF (₹75k).</li>
//         <li><strong>Sec 80CCD(1B) (Additional ₹50k):</strong> NPS contribution beyond 80C.</li>
//         <li><strong>Section 24 (₹2L):</strong> Deduct home loan interest. Savings on taxes can reach ₹62,400 in the 30% bracket.</li>
//         <li><strong>Section 80D (₹75k):</strong> Health insurance for self and parents.</li>
//       </ul>
//       <p><strong>Real-World Illustration:</strong> On a ₹12L income, wise planning reduces tax from ₹2.1L to just ₹56k. Saving ₹1.54L per year and investing it at 10% creates ₹96L over 20 years.</p>

//       <h2 style="font-size: 24px; font-weight: bold; margin: 32px 0 16px;">Your Smart Investment Journey: From Problems to Solutions</h2>
//       <p>Financial success and stagnation are not determined by intelligence or luck. It involves applying tried-and-true investment strategies to solve problems methodically. Not enough money? Make a small investment. Inexperienced? Use index funds and PPF. tax burden? Take full advantage of the deductions under Sections 24, 80C, and 80CCD.</p>
//       <p>Every problem has a prudent investment solution. The key is to put progress ahead of perfection, consistency ahead of timing, and action ahead of analysis. Start working on one issue this week. For your financial transformation, it's not necessary to resolve every problem at once; instead, you should start with one and work your way up to the next. The best way to deal with issues related to investments? Invest now.</p>
//     `,
// },
};

const CATEGORIES = ["All", "Residential", "Commercial", "Investment", "Industry News"];

export default function MangalRealtyBlog() {
  const [activeSlug, setActiveSlug] = useState(null); 
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Logic to handle "Back" without leaving the page
  const handleBackToList = (e) => {
    if (e) e.preventDefault();
    setActiveSlug(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleOpenBlog = (slug) => {
    setActiveSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredPosts = useMemo(() => {
    return Object.entries(BLOG_CONTENT).filter(([slug, post]) => {
      const matchesTab = activeTab === "All" || post.category === activeTab;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // Handler to open a blog post
  // const handleOpenBlog = (slug) => {
  //   setActiveSlug(slug);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // --- DETAIL PAGE VIEW ---
  if (activeSlug && BLOG_CONTENT[activeSlug]) {
    const post = BLOG_CONTENT[activeSlug];
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 pt-12">
          {/* FIXED BUTTON: Now correctly resets state instead of navigating away */}
          <button 
            onClick={handleBackToList}
            className="flex items-center gap-2 text-[#22c55e] font-bold text-sm mb-8 hover:opacity-70 cursor-pointer transition-opacity mt-10"
          >
            <Home size={16} /> Back to Corporate Journal
          </button>
          
          <div className="max-w-4xl">
            <span className="bg-[#22c55e]/10 text-[#22c55e] px-4 py-1.5 rounded-lg text-[10px] font-black tracking-widest mb-6 inline-block ">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl text-[#22c55e] font-bold mb-8 tracking-tight leading-[1.1]">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold tracking-widest text-gray-400 mb-12 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-2">
                <User size={14} className="text-[#22c55e]" /> <span className="text-[#0a1a10]">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#22c55e]" /> <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#22c55e]" /> <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Image */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            <img src={post.image} alt="Banner" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Article Body */}
        <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-600 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
                <div className="my-12 p-8 md:p-10 bg-gray-50 rounded-[2rem] border-l-[8px] border-[#22c55e] italic">
                  <p className="text-xl md:text-2xl text-[#0a1a10] opacity-80">"{post.quote}"</p>
                </div>
              </article>
              <div className="mt-12 flex flex-wrap gap-3">
                {post.tags.map(tag => (
                  <span key={tag} className="px-5 py-2 bg-gray-50 text-[11px] font-bold tracking-widest rounded-full text-gray-400">#{tag}</span>
                ))}
              </div>
            </div>
            
            {/* Sidebar with Suggestions */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="bg-[#0a1a10] p-8 rounded-[2.5rem] text-white">
                <h4 className="text-[10px] font-black text-[#22c55e] tracking-widest mb-6 ">Continue Reading</h4>
                <div className="space-y-4">
                  {Object.entries(BLOG_CONTENT).filter(([s]) => s !== activeSlug).map(([slug, data]) => (
                    <button 
                      key={slug}
                      onClick={() => handleOpenBlog(slug)}
                      className="w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-between group"
                    >
                      <span className="text-sm font-bold max-w-[80%]">{data.title}</span>
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </main>
      </motion.div>
    );
  }

  // --- LISTING PAGE VIEW ---
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920" className="w-full h-full object-cover" alt="Hero" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <nav className="flex items-center justify-center gap-2 mb-6 text-sm font-bold tracking-widest ">
            <a href="/" className="hover:text-[#22C55E]">Home</a>
            <ChevronRight size={12} className="opacity-50" />
            <span className="text-emerald-400">The Blogs</span>
          </nav>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Journal</h2>
          <div className="h-1.5 w-24 bg-[#22c55e] mx-auto my-8" />
        </div>
      </section>

      <div className="bg-white text-[#0a1a10] min-h-screen">
        {/* Filter & Search */}
        <section className="bg-gray-50 border-b border-gray-100 pt-20 pb-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
            <div>
              <h4 className="text-[#22c55e] font-bold text-xs tracking-widest mb-4 ">Insights & Updates</h4>
              <h1 className="text-4xl md:text-6xl font-bold">Corporate <span className="text-[#22c55e]">Journal.</span></h1>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search archive..." 
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-[#22c55e]/10 transition-all"
              />
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto flex gap-10 mt-16 overflow-x-auto no-scrollbar">
            {CATEGORIES.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveTab(cat)}
                className={`pb-5 text-[11px] font-bold tracking-widest  transition-all relative ${activeTab === cat ? "text-[#22c55e]" : "text-gray-400 hover:text-black"}`}
              >
                {cat}
                {activeTab === cat && <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-1 bg-[#22c55e]" />}
              </button>
            ))}
          </div>
        </section>

        {/* Listing Articles */}
        <main className="max-w-7xl mx-auto px-6 py-20">
          <div className="space-y-24">
            <AnimatePresence mode="wait">
              {filteredPosts.map(([slug, post]) => (
                <motion.article 
                  key={slug} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
                >
                  <div 
                    onClick={() => handleOpenBlog(slug)} 
                    className="lg:col-span-5 cursor-pointer relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg"
                  >
                    <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                  </div>
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex gap-6 text-[11px] font-bold text-gray-400 tracking-widest">
                      <span className="flex items-center gap-2"><Calendar size={14} className="text-[#22c55e]" /> {post.date}</span>
                      <span className="flex items-center gap-2"><User size={14} className="text-[#22c55e]" /> {post.author}</span>
                    </div>
                    <h3 
                      onClick={() => handleOpenBlog(slug)}
                      className="text-3xl md:text-4xl font-bold cursor-pointer hover:text-[#22c55e] transition-colors leading-tight"
                    >
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed">
                      {post.quote.substring(0, 150)}...
                    </p>
                    <button 
                      onClick={() => handleOpenBlog(slug)}
                      className="flex items-center gap-3 text-sm font-bold tracking-widest  group/btn cursor-pointer"
                    >
                      Read Full Article 
                      <div className="p-2 bg-gray-100 rounded-full group-hover/btn:bg-[#22c55e] group-hover/btn:text-white transition-all">
                        <ArrowUpRight size={18} />
                      </div>
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </>
  );
}