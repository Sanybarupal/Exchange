
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_COINS } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0e11] text-[#eaecef]">
      {/* 1. Hero Section */}
      <section className="pt-20 pb-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Hero Left: Text & CTA */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-2">
            <span className="text-5xl md:text-7xl font-black text-[#f0b90b] tracking-tight block">304,546,789</span>
            <span className="text-4xl md:text-6xl font-black text-white tracking-tight block">USERS TRUST US</span>
          </div>
          <p className="text-lg text-[#848e9c] font-medium mb-8">The World's Leading Cryptocurrency Exchange</p>
          
          <div className="flex gap-8 mb-10">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-[#f0b90b]/30 flex items-center justify-center text-[#f0b90b] text-xl">🏆</div>
              <div className="text-center">
                <div className="text-xs font-bold text-white uppercase tracking-wider">No.1</div>
                <div className="text-[10px] text-[#848e9c] uppercase">Customer Assets</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border border-[#f0b90b]/30 flex items-center justify-center text-[#f0b90b] text-xl">📈</div>
              <div className="text-center">
                <div className="text-xs font-bold text-white uppercase tracking-wider">No.1</div>
                <div className="text-[10px] text-[#848e9c] uppercase">Trading Volume</div>
              </div>
            </div>
          </div>

          <div className="max-w-md">
            <div className="flex p-1 bg-[#1e2329] border border-[#2b3139] rounded-lg mb-6 focus-within:border-[#f0b90b] transition-colors">
              <input 
                type="text" 
                placeholder="Email/Phone number" 
                className="bg-transparent flex-1 px-4 py-3 outline-none text-sm"
              />
              <button className="bg-[#f0b90b] text-[#0b0e11] px-8 py-3 rounded-md font-bold text-sm hover:bg-[#e2ad0a] transition-all whitespace-nowrap">
                Sign Up
              </button>
            </div>
            
            <div className="flex items-center gap-4 text-[#848e9c]">
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded bg-[#2b3139] flex items-center justify-center hover:bg-[#363c44] transition-colors">G</button>
                <button className="w-10 h-10 rounded bg-[#2b3139] flex items-center justify-center hover:bg-[#363c44] transition-colors">A</button>
                <button className="w-10 h-10 rounded bg-[#2b3139] flex items-center justify-center hover:bg-[#363c44] transition-colors">QR</button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Right: Market & News Widgets */}
        <div className="flex-1 w-full max-w-xl flex flex-col gap-6">
          {/* Market Widget */}
          <div className="bg-[#1e2329] rounded-2xl border border-[#2b3139] p-6 shadow-xl">
            <div className="flex gap-4 mb-4 border-b border-[#2b3139] pb-2">
              <button className="text-sm font-bold text-white border-b-2 border-[#f0b90b] pb-2">Popular</button>
              <button className="text-sm font-bold text-[#848e9c] pb-2">New Listing</button>
              <div className="flex-1"></div>
              <Link to="/markets" className="text-[10px] text-[#848e9c] hover:text-[#f0b90b]">View All 350+ Coins &gt;</Link>
            </div>
            <div className="space-y-4">
              {MOCK_COINS.slice(0, 5).map(coin => (
                <div key={coin.symbol} className="flex justify-between items-center group cursor-pointer hover:bg-[#2b3139]">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#2b3139] rounded-full flex items-center justify-center font-bold text-[10px] text-[#f0b90b] group-hover:scale-110 transition-transform">
                      {coin.symbol[0]}
                    </div>
                    <span className="font-bold text-xs text-white">{coin.symbol} <span className="text-[#848e9c] font-normal">{coin.name}</span></span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-white">${coin.price.toLocaleString()}</span>
                    <span className={`text-[10px] ml-2 font-medium ${coin.change24h >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d]'}`}>
                      {coin.change24h >= 0 ? '+' : ''}{coin.change24h}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* News Widget */}
          <div className="bg-[#1e2329] rounded-2xl border border-[#2b3139] p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-white">News</h3>
              <Link to="/blog" className="text-[10px] text-[#848e9c] hover:text-[#f0b90b]">View All News &gt;</Link>
            </div>
            <div className="space-y-4">
              {[
                "U.S. Stock Market Declines as Crypto Stocks Rise",
                "BinEx Foundation Unveils New White Paper to Boost Internet Computer Adoption",
                "Sui Network Resumes Normal Operations After Temporary Disruption",
                "Federal Reserve Beige Book Indicates Modest Economic Growth Across U.S."
              ].map((news, i) => (
                <p key={i} className="text-[11px] text-[#848e9c] hover:text-[#f0b90b] cursor-pointer transition-colors leading-relaxed line-clamp-1">
                  • {news}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SAFU Section */}
      <section className="py-24 bg-[#0b0e11] border-t border-[#2b3139]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-md">
              <h2 className="text-4xl font-black text-white mb-4 uppercase italic">Funds are <span className="text-[#f0b90b]">SAFU</span></h2>
              <p className="text-[#848e9c] text-sm leading-relaxed">
                The Secure Asset Fund for Users (SAFU) was established in 2018 to protect your funds in case of emergency. Your security is our priority.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div>
                  <div className="text-[10px] text-[#848e9c] uppercase font-bold mb-1">Total Balance as of May 2024</div>
                  <div className="text-2xl font-bold text-[#f0b90b]">1,000,000,000 USDC</div>
               </div>
               <div>
                  <div className="text-[10px] text-[#848e9c] uppercase font-bold mb-1">Users Helped</div>
                  <div className="text-2xl font-bold text-white">7,488,223</div>
               </div>
               <div>
                  <div className="text-[10px] text-[#848e9c] uppercase font-bold mb-1">Funds Recovered</div>
                  <div className="text-2xl font-bold text-[#f0b90b]">$229,433,449</div>
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer border border-[#2b3139]">
                <img src={`https://picsum.photos/seed/safu${i}/800/450`} alt="Community" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white text-2xl group-hover:bg-[#f0b90b] group-hover:text-black transition-all">▶</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Download Section */}
      <section className="py-24 bg-[#1e2329]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative order-2 lg:order-1">
             <div className="relative z-10 mx-auto w-[280px] h-[580px] bg-[#0b0e11] rounded-[3rem] border-8 border-black shadow-[0_0_100px_rgba(240,185,11,0.15)] overflow-hidden">
                <div className="p-6">
                   <div className="flex justify-between items-center mb-6">
                      <div className="font-bold text-white">$7,115.28</div>
                      <div className="text-xs text-[#0ecb81]">▲ 2.4%</div>
                   </div>
                   <div className="space-y-4">
                     {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="h-10 bg-[#2b3139] rounded animate-pulse"></div>
                     ))}
                   </div>
                </div>
                {/* Bottom nav mockup */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1e2329] border-t border-[#2b3139] flex justify-around items-center px-4">
                   <div className="w-6 h-6 bg-[#f0b90b] rounded-sm"></div>
                   <div className="w-6 h-6 bg-[#474d57] rounded-sm"></div>
                   <div className="w-10 h-10 bg-[#f0b90b] rounded-full border-4 border-[#1e2329] -mt-8"></div>
                   <div className="w-6 h-6 bg-[#474d57] rounded-sm"></div>
                   <div className="w-6 h-6 bg-[#474d57] rounded-sm"></div>
                </div>
             </div>
             {/* Decorative circles */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#f0b90b]/5 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#f0b90b]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-white mb-6">Trade on the go. <br />Anywhere, anytime.</h2>
            <div className="bg-[#0b0e11] p-6 rounded-2xl border border-[#2b3139] inline-flex items-center gap-6 mb-12">
               <div className="w-32 h-32 bg-white p-2 rounded-lg">
                  <div className="w-full h-full bg-[#0b0e11] flex items-center justify-center font-black text-[#f0b90b] text-4xl">QR</div>
               </div>
               <div>
                  <div className="text-xs text-[#848e9c] mb-1">Scan to Download App</div>
                  <div className="text-xl font-bold text-white mb-2 italic">iOS and Android</div>
                  <Link to="/download" className="text-xs text-[#f0b90b] hover:underline">View More Download Options &gt;</Link>
               </div>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
               <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 cursor-pointer transition-all">
                  <div className="text-3xl text-white">🍎</div>
                  <span className="text-[10px] text-[#848e9c]">MacOS</span>
               </div>
               <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 cursor-pointer transition-all">
                  <div className="text-3xl text-white">🪟</div>
                  <span className="text-[10px] text-[#848e9c]">Windows</span>
               </div>
               <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 cursor-pointer transition-all">
                  <div className="text-3xl text-white">🐧</div>
                  <span className="text-[10px] text-[#848e9c]">Linux</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            "Why is BinEx the best exchange for crypto traders?",
            "What products does BinEx provide?",
            "How to buy Bitcoin and other cryptocurrencies on BinEx",
            "How to track cryptocurrency prices",
            "How to trade cryptocurrencies on BinEx",
            "How to earn from crypto on BinEx"
          ].map((q, i) => (
            <div key={i} className="group border-b border-[#2b3139] pb-6 cursor-pointer">
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <span className="text-[#848e9c] font-bold">{i + 1}</span>
                  <span className="text-sm font-medium text-white group-hover:text-[#f0b90b] transition-colors">{q}</span>
                </div>
                <span className="text-[#848e9c]">+</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bottom CTA Banner */}
      <section className="py-24 bg-gradient-to-b from-[#1e2329] to-[#0b0e11] text-center border-t border-[#2b3139]">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-10">Secure, Low-Fee Trading on BinEx</h2>
          <Link to="/register" className="bg-[#f0b90b] text-[#0b0e11] px-12 py-4 rounded-lg font-bold text-lg hover:bg-[#e2ad0a] transition-all inline-block shadow-[0_0_50px_rgba(240,185,11,0.2)]">
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
