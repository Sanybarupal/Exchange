
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_COINS } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0e11]">
      {/* Dynamic Announcement Ticker */}
      <div className="bg-[#1e2329] py-2 px-8 overflow-hidden whitespace-nowrap border-b border-[#2b3139]">
        <div className="animate-marquee inline-block text-xs font-medium text-[#f0b90b]">
          🔥 NEW LISTING: PEPE/USDT trading starts in 2h! &nbsp;&nbsp; | &nbsp;&nbsp; 🚀 BinEx Earn: Up to 12% APR on USDC Staking! &nbsp;&nbsp; | &nbsp;&nbsp; 🛡️ SAFU: 100% of user funds are backed 1:1.
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-8 py-20 bg-gradient-to-b from-[#1e2329] to-[#0b0e11]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Buy, trade, and hold <br />
              <span className="text-[#f0b90b]">600+ cryptocurrencies</span> <br />
              on BinEx
            </h1>
            <p className="text-lg text-[#848e9c] mb-10 max-w-xl">
              Join 150 million+ users worldwide. Experience the power of the world's leading ecosystem with the lowest fees.
            </p>
            
            <div className="bg-[#1e2329] p-1 rounded-lg border border-[#2b3139] flex max-w-md shadow-2xl mb-12">
              <input 
                type="text" 
                placeholder="Email / Phone number" 
                className="bg-transparent flex-1 px-4 py-3 outline-none text-sm text-white"
              />
              <button className="bg-[#f0b90b] text-[#0b0e11] px-8 py-3 rounded font-bold hover:bg-[#e2ad0a] transition-all">
                Sign Up
              </button>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-[#0b0e11]" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold text-white">150M+</span> <span className="text-[#848e9c]">Users trust us</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl">
            <div className="bg-[#1e2329] rounded-2xl border border-[#2b3139] p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-white">Market Overview</h3>
                <Link to="/markets" className="text-[#f0b90b] text-xs hover:underline">All Markets</Link>
              </div>
              <div className="space-y-4">
                {MOCK_COINS.slice(0, 5).map(coin => (
                  <div key={coin.symbol} className="flex justify-between items-center group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center font-bold text-xs text-[#f0b90b]">
                        {coin.symbol[0]}
                      </div>
                      <span className="font-medium text-sm text-white">{coin.symbol}/USDT</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-white">${coin.price.toLocaleString()}</div>
                      <div className={`text-[10px] ${coin.change24h >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d]'}`}>
                        {coin.change24h >= 0 ? '+' : ''}{coin.change24h}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/trade" className="block w-full text-center mt-8 bg-[#2b3139] py-3 rounded-lg text-sm font-bold border border-[#474d57] hover:bg-[#363c44] transition-colors">
                Trade BTC Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-8 py-16 max-w-7xl mx-auto border-t border-[#2b3139]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="text-center">
             <div className="text-3xl font-bold text-white mb-1">$76B+</div>
             <div className="text-xs text-[#848e9c]">24h trading volume</div>
           </div>
           <div className="text-center">
             <div className="text-3xl font-bold text-white mb-1">600+</div>
             <div className="text-xs text-[#848e9c]">Cryptocurrencies listed</div>
           </div>
           <div className="text-center">
             <div className="text-3xl font-bold text-white mb-1">150M+</div>
             <div className="text-xs text-[#848e9c]">Registered users</div>
           </div>
           <div className="text-center">
             <div className="text-3xl font-bold text-white mb-1">&lt;0.10%</div>
             <div className="text-xs text-[#848e9c]">Lowest transaction fees</div>
           </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="px-8 py-20 bg-[#1e2329]">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="text-4xl">🏦</div>
              <h3 className="text-xl font-bold text-white">Secure Storage</h3>
              <p className="text-[#848e9c] text-sm">We store the vast majority of digital assets in secure offline storage.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">🛡️</div>
              <h3 className="text-xl font-bold text-white">Safety First</h3>
              <p className="text-[#848e9c] text-sm">BinEx supports 2FA and has an industry-leading security infrastructure.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">🎧</div>
              <h3 className="text-xl font-bold text-white">24/7 Support</h3>
              <p className="text-[#848e9c] text-sm">Get answers in real-time from our dedicated support specialists.</p>
            </div>
         </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
