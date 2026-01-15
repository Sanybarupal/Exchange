
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_COINS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-8 py-20 bg-gradient-to-b from-[#1e2329] to-[#0b0e11] text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Buy, trade, and hold <br />
              <span className="text-[#f0b90b]">600+ cryptocurrencies</span> on BinEx
            </h1>
            <p className="text-lg text-[#848e9c] mb-8 max-w-xl">
              Join the world's most trusted and secure cryptocurrency exchange. 
              High liquidity, low fees, and advanced trading features for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="bg-[#f0b90b] text-[#0b0e11] px-8 py-3 rounded font-bold text-center hover:bg-[#e2ad0a] transition-all">
                Sign Up Now
              </Link>
              <Link to="/trade" className="bg-[#2b3139] text-white px-8 py-3 rounded font-bold text-center border border-[#474d57] hover:bg-[#363c44] transition-all">
                Start Trading
              </Link>
            </div>
          </div>
          <div className="flex-1 hidden md:block">
            <img src="https://picsum.photos/seed/crypto/600/400" alt="Crypto dashboard" className="rounded-xl shadow-2xl border border-[#2b3139]" />
          </div>
        </div>
      </section>

      {/* Top Assets */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold">Market Trends</h2>
          <Link to="/markets" className="text-[#f0b90b] text-sm hover:underline">View More Markets &gt;</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_COINS.slice(0, 3).map(coin => (
            <Link key={coin.symbol} to="/trade" className="bg-[#1e2329] p-6 rounded-xl border border-[#2b3139] hover:border-[#f0b90b] transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#2b3139] rounded-full flex items-center justify-center font-bold text-[#f0b90b] group-hover:scale-110 transition-transform">
                  {coin.symbol[0]}
                </div>
                <div>
                  <h3 className="font-bold">{coin.name}</h3>
                  <span className="text-xs text-[#848e9c]">{coin.symbol}/USDT</span>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-xl font-bold">${coin.price.toLocaleString()}</span>
                <span className={`text-sm font-medium ${coin.change24h >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d]'}`}>
                  {coin.change24h >= 0 ? '+' : ''}{coin.change24h}%
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-20 bg-[#1e2329]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Your trusted crypto exchange</h2>
          <p className="text-[#848e9c]">Security, stability, and speed are at the core of BinEx.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { title: 'Secure Storage', desc: 'Industry-leading safety protocols and cold storage.', icon: '🛡️' },
            { title: 'Speed', desc: 'Order matching engine capable of 1.4M orders/second.', icon: '⚡' },
            { title: '24/7 Support', desc: 'Get support in your local language anytime.', icon: '🎧' },
            { title: 'AI Insights', desc: 'Real-time AI-powered market analysis and signals.', icon: '🧠' },
          ].map(f => (
            <div key={f.title} className="text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-[#848e9c]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
