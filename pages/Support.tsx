
import React from 'react';

const Support: React.FC = () => {
  const categories = [
    { title: 'Account Issues', icon: '👤', count: 124 },
    { title: 'Crypto Deposit/Withdrawal', icon: '💰', count: 85 },
    { title: 'Trading FAQ', icon: '📈', count: 210 },
    { title: 'Security & Verification', icon: '🛡️', count: 64 },
    { title: 'BinEx Earn', icon: '💎', count: 42 },
    { title: 'API Support', icon: '⚙️', count: 31 },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-[#1e2329] py-16 px-8 text-center border-b border-[#2b3139]">
        <h1 className="text-4xl font-bold mb-6">How can we help you?</h1>
        <div className="max-w-2xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Search for articles, guides..." 
            className="w-full bg-[#0b0e11] border border-[#474d57] rounded-full py-4 px-12 text-sm outline-none focus:border-[#f0b90b] transition-all shadow-xl"
          />
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl">🔍</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">Popular Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => (
            <div key={cat.title} className="bg-[#1e2329] p-6 rounded-xl border border-[#2b3139] hover:border-[#f0b90b] transition-all cursor-pointer group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{cat.icon}</div>
              <h3 className="font-bold mb-2">{cat.title}</h3>
              <p className="text-sm text-[#848e9c] mb-4">View {cat.count} related articles</p>
              <span className="text-xs text-[#f0b90b] font-bold">Explore &gt;</span>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#1e2329] to-[#2b3139] p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#474d57]">
          <div>
            <h2 className="text-2xl font-bold mb-2">Still need help?</h2>
            <p className="text-[#848e9c]">Our support agents are available 24/7 to assist you.</p>
          </div>
          <button className="bg-[#f0b90b] text-[#0b0e11] font-bold px-10 py-3 rounded-lg hover:bg-[#e2ad0a] transition-all">
            Chat with Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
