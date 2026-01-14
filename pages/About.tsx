
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Vision Header */}
      <section className="bg-[#1e2329] py-24 px-8 text-center border-b border-[#2b3139]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-8 leading-tight">Empowering the World with <span className="text-[#f0b90b]">Financial Freedom</span></h1>
          <p className="text-xl text-[#848e9c]">BinEx is the world's leading cryptocurrency exchange, serving users across 180+ countries with robust infrastructure and innovative financial products.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-8 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-[#f0b90b] mb-2">$85B+</div>
          <div className="text-sm text-[#848e9c]">24h Trading Volume</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-[#f0b90b] mb-2">600+</div>
          <div className="text-sm text-[#848e9c]">Assets Listed</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-[#f0b90b] mb-2">150M+</div>
          <div className="text-sm text-[#848e9c]">Registered Users</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-[#f0b90b] mb-2">&lt;0.1%</div>
          <div className="text-sm text-[#848e9c]">Lowest Transaction Fees</div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="bg-[#1e2329] py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Building the Crypto Ecosystem</h2>
            <p className="text-[#848e9c]">We go beyond being an exchange. We are the gateway to Web3.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'BinEx Exchange', desc: 'The largest crypto exchange by trade volume and trust.', icon: '🏦' },
              { title: 'BinEx Academy', desc: 'Free crypto education for everyone to learn blockchain.', icon: '🎓' },
              { title: 'BinEx Charity', desc: 'Using blockchain technology for the benefit of humanity.', icon: '❤️' },
            ].map(item => (
              <div key={item.title} className="text-center p-8 bg-[#0b0e11] rounded-2xl border border-[#2b3139]">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-[#848e9c] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Our Commitment to Security</h2>
        <div className="bg-[#1e2329] p-12 rounded-3xl border border-[#f0b90b]/30">
          <p className="text-lg text-[#eaecef] italic mb-8 max-w-4xl mx-auto">"User protection is our first priority. We invest hundreds of millions into security, compliance, and insurance to ensure your funds are always SAFU."</p>
          <div className="font-bold text-[#f0b90b]">Security Team at BinEx</div>
        </div>
      </section>
    </div>
  );
};

export default About;
