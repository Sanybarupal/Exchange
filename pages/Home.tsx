
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_COINS, ICONS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0e11]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4 md:px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#f0b90b]/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#f0b90b]/3 blur-[100px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0b90b]/10 border border-[#f0b90b]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f0b90b] animate-pulse"></span>
              <span className="text-[#f0b90b] text-xs font-bold uppercase tracking-wider">New Listing: SOL/USDT is now live</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8">
              Buy, Trade, and Hold <br />
              <span className="text-[#f0b90b]">Crypto with Confidence</span>
            </h1>
            <p className="text-xl text-[#848e9c] mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Join 150M+ users worldwide on the most trusted digital asset platform. 
              Start your journey with as little as $1.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/register" className="w-full sm:w-auto bg-[#f0b90b] text-[#0b0e11] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e2ad0a] transition-all shadow-lg shadow-[#f0b90b]/10">
                Get Started
              </Link>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-[#0b0e11]" src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#0b0e11] bg-[#1e2329] flex items-center justify-center text-[10px] font-bold">+150M</div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f0b90b]/20 to-transparent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-[#1e2329] border border-[#2b3139] rounded-2xl p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-4">
                    <button className="text-[#f0b90b] border-b-2 border-[#f0b90b] pb-2 font-bold text-sm">Spot</button>
                    <button className="text-[#848e9c] font-bold text-sm hover:text-white transition-colors">Futures</button>
                  </div>
                  <div className="text-[#848e9c] text-xs">24h Vol: $85.4B</div>
                </div>
                <div className="space-y-4">
                  {MOCK_COINS.slice(0, 4).map(coin => (
                    <div key={coin.symbol} className="flex items-center justify-between group/item cursor-pointer hover:bg-[#2b3139] -mx-2 px-2 py-2 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#2b3139] flex items-center justify-center font-bold text-[#f0b90b] text-xs border border-[#474d57]">
                          {coin.symbol[0]}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{coin.symbol}</div>
                          <div className="text-[10px] text-[#848e9c]">{coin.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-white">${coin.price.toLocaleString()}</div>
                        <div className={`text-[10px] font-medium ${coin.change24h >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d]'}`}>
                          {coin.change24h >= 0 ? '+' : ''}{coin.change24h}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/markets" className="block text-center text-[#f0b90b] text-sm font-bold mt-6 hover:underline">View All Markets</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="border-y border-[#2b3139] bg-[#1e2329]/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2b3139]">
          <div className="py-10 px-8 text-center">
            <div className="text-3xl font-extrabold text-white mb-1">$85B+</div>
            <div className="text-xs text-[#848e9c] uppercase tracking-widest font-bold">Trading Volume</div>
          </div>
          <div className="py-10 px-8 text-center">
            <div className="text-3xl font-extrabold text-white mb-1">600+</div>
            <div className="text-xs text-[#848e9c] uppercase tracking-widest font-bold">Assets Listed</div>
          </div>
          <div className="py-10 px-8 text-center">
            <div className="text-3xl font-extrabold text-white mb-1">150M+</div>
            <div className="text-xs text-[#848e9c] uppercase tracking-widest font-bold">Registered Users</div>
          </div>
          <div className="py-10 px-8 text-center">
            <div className="text-3xl font-extrabold text-white mb-1">&lt;0.1%</div>
            <div className="text-xs text-[#848e9c] uppercase tracking-widest font-bold">Lowest Fees</div>
          </div>
        </div>
      </section>

      {/* Why BinEx */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Your Trusted Crypto Exchange</h2>
          <p className="text-[#848e9c] max-w-2xl mx-auto">Security, stability, and speed are at the core of everything we do. We offer features tailored for every level of trader.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1e2329] p-8 rounded-2xl border border-[#2b3139] hover:border-[#f0b90b]/50 transition-all group">
            <div className="w-14 h-14 bg-[#f0b90b]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ICONS.Shield className="w-7 h-7 text-[#f0b90b]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Secure Asset Fund</h3>
            <p className="text-sm text-[#848e9c] leading-relaxed">Your funds are protected by our Secure Asset Fund for Users (SAFU), stored in industry-leading cold storage wallets.</p>
          </div>
          <div className="bg-[#1e2329] p-8 rounded-2xl border border-[#2b3139] hover:border-[#f0b90b]/50 transition-all group">
            <div className="w-14 h-14 bg-[#f0b90b]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ICONS.TrendingUp className="w-7 h-7 text-[#f0b90b]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Advanced Trading</h3>
            <p className="text-sm text-[#848e9c] leading-relaxed">Access deep liquidity and powerful tools for Spot, Margin, and Futures trading with up to 125x leverage.</p>
          </div>
          <div className="bg-[#1e2329] p-8 rounded-2xl border border-[#2b3139] hover:border-[#f0b90b]/50 transition-all group">
            <div className="w-14 h-14 bg-[#f0b90b]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ICONS.Download className="w-7 h-7 text-[#f0b90b]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Institutional Services</h3>
            <p className="text-sm text-[#848e9c] leading-relaxed">Tailored solutions for institutional investors including VIP trading, custody services, and API integration.</p>
          </div>
        </div>
      </section>

      {/* Earn Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-r from-[#1e2329] to-[#0b0e11] border-y border-[#2b3139]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <img src="https://picsum.photos/seed/earn/800/600" alt="Earn crypto" className="rounded-3xl shadow-2xl border border-[#474d57]" />
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-4xl font-bold mb-6">Earn Daily Rewards on Your Crypto</h2>
            <p className="text-[#848e9c] mb-8 leading-relaxed">
              Don't just hold your assets—make them work for you. Join BinEx Earn and choose from flexible savings, dual investment, or liquid swap options.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Earn up to 12% APR on stablecoins',
                'Flexible withdrawals anytime',
                'Auto-invest feature for recurring buys',
                'Institutional-grade staking security'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0ecb81]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#0ecb81]"></div>
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/wallet" className="inline-block bg-[#2b3139] text-white px-8 py-3 rounded-lg font-bold border border-[#474d57] hover:bg-[#363c44] transition-all">
              Start Earning
            </Link>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Trade Anywhere, Anytime</h2>
        <p className="text-[#848e9c] mb-12 max-w-xl mx-auto">The BinEx app is available on iOS, Android, and Desktop. Experience seamless trading with our powerful mobile interface.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="flex items-center gap-3 bg-[#1e2329] border border-[#474d57] px-6 py-3 rounded-xl hover:border-[#f0b90b] transition-all">
            <span className="text-2xl">🍏</span>
            <div className="text-left">
              <div className="text-[10px] text-[#848e9c] uppercase font-bold">Download on the</div>
              <div className="text-sm font-bold">App Store</div>
            </div>
          </button>
          <button className="flex items-center gap-3 bg-[#1e2329] border border-[#474d57] px-6 py-3 rounded-xl hover:border-[#f0b90b] transition-all">
            <span className="text-2xl">🤖</span>
            <div className="text-left">
              <div className="text-[10px] text-[#848e9c] uppercase font-bold">Get it on</div>
              <div className="text-sm font-bold">Google Play</div>
            </div>
          </button>
          <button className="flex items-center gap-3 bg-[#1e2329] border border-[#474d57] px-6 py-3 rounded-xl hover:border-[#f0b90b] transition-all">
            <span className="text-2xl">💻</span>
            <div className="text-left">
              <div className="text-[10px] text-[#848e9c] uppercase font-bold">Download for</div>
              <div className="text-sm font-bold">Desktop App</div>
            </div>
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 md:px-8 bg-[#f0b90b] text-[#0b0e11]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to Start Your Crypto Journey?</h2>
          <p className="text-lg font-medium mb-12 opacity-80">Join 150 million users and trade with the world's most trusted exchange.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-[#0b0e11] text-white px-12 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
              Register Now
            </Link>
            <Link to="/support" className="bg-transparent border-2 border-[#0b0e11] text-[#0b0e11] px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#0b0e11] hover:text-white transition-all">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
