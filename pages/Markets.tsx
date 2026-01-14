
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_COINS } from '../constants';

const Markets: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCoins = MOCK_COINS.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Markets</h1>
      
      <div className="bg-[#1e2329] rounded-xl border border-[#2b3139] overflow-hidden">
        <div className="p-4 border-b border-[#2b3139] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <button className="text-sm font-bold text-[#f0b90b] border-b-2 border-[#f0b90b] pb-2">All Crypto</button>
            <button className="text-sm font-bold text-[#848e9c] pb-2">Spot</button>
            <button className="text-sm font-bold text-[#848e9c] pb-2">Futures</button>
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search coin..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#2b3139] border border-[#474d57] rounded-full px-4 py-1.5 text-sm outline-none focus:border-[#f0b90b]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-[#848e9c] text-xs uppercase border-b border-[#2b3139]">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium text-right">Price</th>
                <th className="px-6 py-4 font-medium text-right">24h Change</th>
                <th className="px-6 py-4 font-medium text-right">24h Volume</th>
                <th className="px-6 py-4 font-medium text-right">Market Cap</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2b3139]">
              {filteredCoins.map(coin => (
                <tr key={coin.symbol} className="hover:bg-[#2b3139] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center font-bold text-[#f0b90b]">
                        {coin.symbol[0]}
                      </div>
                      <div>
                        <div className="font-bold">{coin.name}</div>
                        <div className="text-xs text-[#848e9c]">{coin.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    ${coin.price.toLocaleString()}
                  </td>
                  <td className={`px-6 py-4 text-right font-medium ${coin.change24h >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d]'}`}>
                    {coin.change24h >= 0 ? '+' : ''}{coin.change24h}%
                  </td>
                  <td className="px-6 py-4 text-right text-[#848e9c]">
                    {coin.volume}
                  </td>
                  <td className="px-6 py-4 text-right text-[#848e9c]">
                    {coin.marketCap}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link to="/trade" className="text-[#f0b90b] text-sm hover:underline font-medium">Trade</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Markets;
