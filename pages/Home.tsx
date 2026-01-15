
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_COINS } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0e11] text-[#eaecef] selection:bg-[#f0b90b]/30">
      {/* Dynamic Announcement Ticker */}
      <div className="bg-[#1e2329] py-2 px-8 overflow-hidden whitespace-nowrap border-b border-[#2b3139]">
        <div className="animate-marquee inline-block text-[11px] font-medium text-[#f0b90b] tracking-wider uppercase">
          🔥 NEW LISTING: PEPE/USDT trading starts in 2h! &nbsp;&nbsp; | &nbsp;&nbsp; 🚀 BinEx Earn: Up to 12% APR on USDC Staking! &nbsp;&nbsp; | &nbsp;&nbsp; 🛡️ SAFU: 100% of user funds are backed 1:1.
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 overflow-hidden">
        {/* Decorative Background Blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f0b90b]/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        
        {/* Hero Left: Text & CTA */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-4">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-4">
              <span className="text-[#f0b90b]">304,546,789</span><br />
              USERS TRUST US
            </h1>
            <p className="text-xl text-[#848e9c] font-medium max-w-lg leading-relaxed">
              Experience the world's leading crypto ecosystem with the lowest fees and industry-best security.
            </p>
          </div>
          
          <div className="flex gap-10 mb-12 py-4 border-y border-[#2b3139]/50 max-w-fit px-2">
            <div className="flex flex-col gap-1">
              <div className="text-xs font-bold text-[#848e9c] uppercase tracking-[0.2em]">Customer Assets</div>
              <div className="text-2xl font-black text-white">No.1</div>
            </div>
            <div className="w-px bg-[#2b3139]"></div>
            <div className="flex flex-col gap-1">
              <div className="text-xs font-bold text-[#848e9c] uppercase tracking-[0.2em]">Trading Volume</div>
              <div className="text-2xl font-black text-white">No.1</div>
            </div>
          </div>

          <div className="max-w-md w-full">
            <div className="flex p-1.5 bg-[#1e2329] border border-[#2b3139] rounded-xl mb-6 shadow-2xl focus-within:border-[#f0b90b] transition-all duration-300 group">
              <input 
                type="text" 
                placeholder="Email/Phone number" 
                className="bg-transparent flex-1 px-5 py-3 outline-none text-sm placeholder:text-[#474d57]"
              />
              <button className="bg-[#f0b90b] text-[#0b0e11] px-10 py-3 rounded-lg font-extrabold text-sm hover:bg-[#FCD535] transition-all whitespace-nowrap shadow-lg shadow-[#f0b90b]/10 active:scale-95">
                Sign Up
              </button>
            </div>
            
            <div className="flex items-center gap-4 text-[#848e9c]">
              <span className="text-[10px] font-bold uppercase tracking-widest">Or continue with</span>
              <div className="flex gap-2">
                {['Google', 'Apple'].map(brand => (
                  <button key={brand} className="px-4 py-2 rounded-lg bg-[#1e2329] border border-[#2b3139] text-[11px] font-bold hover:bg-[#2b3139] transition-colors flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-white/10"></span> {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Right: Market Sidebar */}
        <div className="flex-1 w-full max-w-xl flex flex-col gap-6">
          <div className="bg-[#1e2329]/80 backdrop-blur-xl rounded-3xl border border-[#2b3139] p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-widest mb-1">Live Markets</h3>
                <p className="text-[10px] text-[#848e9c]">Real-time price feed</p>
              </div>
              <Link to="/markets" className="text-[10px] font-bold text-[#f0b90b] hover:bg-[#f0b90b]/10 px-3 py-1 rounded-full transition-all">View All Markets &gt;</Link>
            </div>
            
            <div className="space-y-6">
              {MOCK_COINS.slice(0, 5).map(coin => (
                <div key={coin.symbol} className="flex justify-between items-center group cursor-pointer hover:translate-x-1 transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#2b3139] rounded-xl flex items-center justify-center font-black text-sm text-[#f0b90b] group-hover:bg-[#f0b90b] group-hover:text-[#0b0e11] transition-all">
                      {coin.symbol[0]}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white group-hover:text-[#f0b90b] transition-colors">{coin.symbol}<span className="text-[#474d57] ml-2 text-xs">/USDT</span></div>
                      <div className="text-[10px] text-[#848e9c]">{coin.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black text-white">${coin.price.toLocaleString()}</div>
                    <div className={`text-[11px] font-bold ${coin.change24h >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d]'}`}>
                      {coin.change24h >= 0 ? '+' : ''}{coin.change24h}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1e2329] to-[#0b0e11] rounded-3xl border border-[#2b3139] p-8">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f0b90b]/10 flex items-center justify-center text-2xl">🎁</div>
                <div>
                   <h4 className="font-black text-white text-sm">Welcome Reward</h4>
                   <p className="text-xs text-[#848e9c]">Complete tasks and win up to 100 USDT</p>
                </div>
                <button className="ml-auto text-[#f0b90b] text-xs font-bold">Claim Now</button>
             </div>
          </div>
        </div>
      </section>

      {/* 2. SAFU Transparency Section */}
      <section className="py-32 bg-[#0b0e11] border-y border-[#2b3139]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
             <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tight">FUNDS ARE <span className="text-[#f0b90b]">SAFU</span></h2>
             <p className="text-[#848e9c] max-w-2xl mx-auto text-lg leading-relaxed">
               The Secure Asset Fund for Users (SAFU) is an emergency insurance fund that was established by BinEx in 2018 to protect users' funds in extreme situations.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
             {[
               { label: "Reserve Fund Value", val: "$1,000,000,000", color: "#f0b90b" },
               { label: "Users Protected", val: "150,000,000+", color: "white" },
               { label: "Assets Recovered", val: "$229,433,449", color: "#f0b90b" }
             ].map((stat, i) => (
               <div key={i} className="bg-[#1e2329] p-10 rounded-[40px] border border-[#2b3139] flex flex-col items-center text-center hover:border-[#f0b90b]/30 transition-all duration-500">
                  <div className="text-[11px] font-bold text-[#848e9c] uppercase tracking-[0.3em] mb-4">{stat.label}</div>
                  <div className="text-3xl font-black" style={{ color: stat.color }}>{stat.val}</div>
               </div>
             ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer border border-[#2b3139] bg-[#1e2329]">
                <img src={`https://picsum.photos/seed/safu${i}/800/450`} alt="Community" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                   <div className="w-12 h-12 bg-[#f0b90b] rounded-full flex items-center justify-center text-black text-xl mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">▶</div>
                   <h4 className="text-white font-bold text-lg leading-tight">Watch how we secure your assets 24/7</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mobile Ecosystem */}
      <section className="py-32 bg-gradient-to-b from-[#0b0e11] to-[#1e2329]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 order-2 lg:order-1 relative group">
             {/* Mock Mobile App with improved visuals */}
             <div className="relative z-10 mx-auto w-[310px] h-[640px] bg-[#0b0e11] rounded-[4rem] border-[12px] border-[#2b3139] shadow-[0_0_120px_rgba(240,185,11,0.1)] overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2b3139] rounded-b-2xl z-20"></div>
                <div className="p-8 pt-12">
                   <div className="flex justify-between items-center mb-8">
                      <div>
                        <div className="text-[10px] text-[#848e9c] uppercase font-bold tracking-widest">Balance</div>
                        <div className="text-2xl font-black text-white">$12,450.00</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#f0b90b]/10 border border-[#f0b90b]/20"></div>
                   </div>
                   <div className="space-y-6">
                     {[1,2,3,4,5].map(i => (
                        <div key={i} className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-[#1e2329]"></div>
                           <div className="flex-1 h-3 bg-[#1e2329] rounded-full"></div>
                           <div className="w-16 h-3 bg-[#1e2329] rounded-full"></div>
                        </div>
                     ))}
                   </div>
                </div>
                {/* Bottom nav mockup */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#1e2329]/95 backdrop-blur border-t border-[#2b3139] flex justify-around items-center px-6">
                   <div className="w-6 h-6 rounded bg-[#f0b90b]"></div>
                   <div className="w-6 h-6 rounded bg-[#848e9c]/20"></div>
                   <div className="w-12 h-12 bg-[#f0b90b] rounded-2xl border-4 border-[#0b0e11] -mt-10 flex items-center justify-center text-black font-black">+</div>
                   <div className="w-6 h-6 rounded bg-[#848e9c]/20"></div>
                   <div className="w-6 h-6 rounded bg-[#848e9c]/20"></div>
                </div>
             </div>
             {/* Dynamic Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#f0b90b]/10 rounded-full blur-[100px] -z-10 group-hover:bg-[#f0b90b]/20 transition-all duration-1000"></div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-5xl font-black text-white mb-8 leading-[1.1] tracking-tight">Trade on the go.<br />Anywhere, anytime.</h2>
            <p className="text-[#848e9c] text-lg mb-12 leading-relaxed">
              Stay ahead of the market with our professional mobile app. Real-time alerts, advanced charting, and instant order execution in the palm of your hand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center mb-16">
               <div className="bg-white p-3 rounded-2xl shadow-2xl">
                  <div className="w-32 h-32 bg-[#0b0e11] flex flex-col items-center justify-center font-black text-[#f0b90b] text-sm">
                     <span className="text-3xl mb-1">📱</span>
                     SCAN QR
                  </div>
               </div>
               <div>
                  <div className="text-xs text-[#848e9c] font-bold uppercase tracking-[0.2em] mb-3">Download for</div>
                  <div className="text-2xl font-black text-white mb-3 italic">iOS and Android</div>
                  <Link to="/download" className="text-sm font-bold text-[#f0b90b] hover:underline flex items-center gap-2">View All Platforms <span className="text-lg">→</span></Link>
               </div>
            </div>
            
            <div className="grid grid-cols-3 gap-12 pt-12 border-t border-[#2b3139]">
               {['MacOS', 'Windows', 'Linux'].map((sys, idx) => (
                 <div key={sys} className="flex flex-col items-center gap-3 group cursor-pointer">
                    <div className="text-4xl text-white opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                       {idx === 0 ? '🍎' : idx === 1 ? '🪟' : '🐧'}
                    </div>
                    <span className="text-[10px] font-black text-[#848e9c] uppercase tracking-widest">{sys}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Support CTA */}
      <section className="py-24 bg-[#0b0e11] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#f0b90b]/10 border border-[#f0b90b]/20 text-[#f0b90b] text-[10px] font-black uppercase tracking-[0.3em] mb-10">
            Start Your Journey
          </div>
          <h2 className="text-5xl font-black text-white mb-12 tracking-tighter">Ready to trade crypto like a pro?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/register" className="bg-[#f0b90b] text-[#0b0e11] px-14 py-5 rounded-2xl font-black text-lg hover:bg-[#FCD535] transition-all transform hover:scale-105 shadow-xl shadow-[#f0b90b]/10">
              Sign Up Now
            </Link>
            <Link to="/trade" className="bg-[#1e2329] text-white px-14 py-5 rounded-2xl font-black text-lg border border-[#2b3139] hover:bg-[#2b3139] transition-all transform hover:scale-105">
              Explore Markets
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
