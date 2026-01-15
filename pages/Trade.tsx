
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_TRADE_HISTORY, MOCK_COINS } from '../constants.tsx';
import { getMarketAnalysis } from '../services/geminiService.ts';

const Trade: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'BUY' | 'SELL'>('BUY');
  const [aiAnalysis, setAiAnalysis] = useState<string>('Analyzing market...');
  const activeCoin = MOCK_COINS[0]; // BTC

  useEffect(() => {
    const fetchAi = async () => {
      const res = await getMarketAnalysis(activeCoin.symbol, activeCoin.price, activeCoin.change24h);
      setAiAnalysis(res || '');
    };
    fetchAi();
  }, [activeCoin]);

  // Simulated chart data
  const chartData = Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    price: activeCoin.price - 500 + Math.random() * 1000
  }));

  const orderBookLevels = 15;
  const sells = Array.from({ length: orderBookLevels }, (_, i) => ({
    price: activeCoin.price + (orderBookLevels - i) * 5,
    amount: Math.random() * 2,
    total: Math.random() * 10
  }));
  const buys = Array.from({ length: orderBookLevels }, (_, i) => ({
    price: activeCoin.price - (i + 1) * 5,
    amount: Math.random() * 2,
    total: Math.random() * 10
  }));

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden">
      {/* Left: Order Book */}
      <div className="w-full lg:w-72 bg-[#1e2329] border-r border-[#2b3139] flex flex-col">
        <div className="p-3 text-xs font-bold border-b border-[#2b3139]">Order Book</div>
        <div className="flex-1 overflow-y-auto text-[11px] font-medium p-2">
          <div className="flex justify-between text-[#848e9c] mb-2 px-1">
            <span>Price(USDT)</span>
            <span>Amount(BTC)</span>
            <span>Total</span>
          </div>
          {/* Sells */}
          <div className="flex flex-col-reverse">
            {sells.map((s, i) => (
              <div key={i} className="flex justify-between py-0.5 px-1 relative overflow-hidden group hover:bg-[#2b3139]">
                <div className="absolute right-0 top-0 bottom-0 bg-[#f6465d22]" style={{ width: `${(s.amount / 2) * 100}%` }}></div>
                <span className="text-[#f6465d] z-10">{s.price.toFixed(2)}</span>
                <span className="z-10">{s.amount.toFixed(5)}</span>
                <span className="z-10">{s.total.toFixed(2)}</span>
              </div>
            ))}
          </div>
          {/* Current Price */}
          <div className="my-2 py-2 border-y border-[#2b3139] px-1">
            <div className={`text-lg font-bold ${activeCoin.change24h >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d]'}`}>
              {activeCoin.price.toLocaleString()}
            </div>
            <div className="text-[10px] text-[#848e9c]">$68,432.50</div>
          </div>
          {/* Buys */}
          <div className="flex flex-col">
            {buys.map((b, i) => (
              <div key={i} className="flex justify-between py-0.5 px-1 relative overflow-hidden group hover:bg-[#2b3139]">
                <div className="absolute right-0 top-0 bottom-0 bg-[#0ecb8122]" style={{ width: `${(b.amount / 2) * 100}%` }}></div>
                <span className="text-[#0ecb81] z-10">{b.price.toFixed(2)}</span>
                <span className="z-10">{b.amount.toFixed(5)}</span>
                <span className="z-10">{b.total.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center: Chart & Forms */}
      <div className="flex-1 flex flex-col bg-[#0b0e11]">
        {/* Header/Pair Selector */}
        <div className="h-16 border-b border-[#2b3139] px-4 flex items-center gap-8 overflow-x-auto whitespace-nowrap">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">BTC/USDT</span>
            <span className="px-1 py-0.5 bg-[#2b3139] text-[10px] rounded">10x</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#848e9c]">Price</span>
            <span className="text-sm font-bold text-[#0ecb81]">{activeCoin.price.toLocaleString()}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#848e9c]">24h Change</span>
            <span className={`text-sm font-bold ${activeCoin.change24h >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d]'}`}>
              {activeCoin.change24h}%
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#848e9c]">24h High</span>
            <span className="text-sm font-bold">69,210.00</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#848e9c]">24h Low</span>
            <span className="text-sm font-bold">67,400.00</span>
          </div>
          <div className="flex-1"></div>
          <div className="bg-[#1e2329] px-3 py-2 rounded border border-[#2b3139] text-[10px] max-w-xs overflow-hidden">
            <span className="text-[#f0b90b] font-bold block">AI ANALYSIS:</span>
            <p className="truncate italic">{aiAnalysis}</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="flex-1 p-2 bg-[#1e2329] m-2 rounded border border-[#2b3139]">
           <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f0b90b" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f0b90b" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="time" hide />
              <YAxis domain={['auto', 'auto']} hide />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2b3139" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e2329', border: '1px solid #474d57' }}
                itemStyle={{ color: '#f0b90b' }}
              />
              <Area type="monotone" dataKey="price" stroke="#f0b90b" fillOpacity={1} fill="url(#colorPrice)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Order Forms */}
        <div className="h-72 border-t border-[#2b3139] flex flex-col lg:flex-row p-4 gap-6">
          {/* Buy Form */}
          <div className="flex-1">
            <div className="flex gap-4 mb-4">
              <button 
                onClick={() => setActiveTab('BUY')}
                className={`text-sm font-bold border-b-2 pb-1 ${activeTab === 'BUY' ? 'border-[#0ecb81] text-[#0ecb81]' : 'border-transparent'}`}
              >
                Buy
              </button>
              <button 
                onClick={() => setActiveTab('SELL')}
                className={`text-sm font-bold border-b-2 pb-1 ${activeTab === 'SELL' ? 'border-[#f6465d] text-[#f6465d]' : 'border-transparent'}`}
              >
                Sell
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center bg-[#2b3139] rounded px-3 py-2 group focus-within:ring-1 focus-within:ring-[#f0b90b]">
                <span className="text-xs text-[#848e9c] w-12">Price</span>
                <input type="text" defaultValue={activeCoin.price} className="bg-transparent flex-1 text-right text-sm outline-none" />
                <span className="text-xs ml-2">USDT</span>
              </div>
              <div className="flex items-center bg-[#2b3139] rounded px-3 py-2 group focus-within:ring-1 focus-within:ring-[#f0b90b]">
                <span className="text-xs text-[#848e9c] w-12">Amount</span>
                <input type="text" placeholder="0.00" className="bg-transparent flex-1 text-right text-sm outline-none" />
                <span className="text-xs ml-2">BTC</span>
              </div>
              <div className="flex justify-between py-1">
                {[25, 50, 75, 100].map(p => (
                  <button key={p} className="text-[10px] bg-[#2b3139] hover:bg-[#363c44] px-2 py-0.5 rounded border border-[#474d57]">{p}%</button>
                ))}
              </div>
              <button className={`w-full py-2.5 rounded font-bold text-sm text-[#0b0e11] transition-all ${activeTab === 'BUY' ? 'bg-[#0ecb81] hover:bg-[#0da66b]' : 'bg-[#f6465d] hover:bg-[#e03a4e]'}`}>
                {activeTab === 'BUY' ? 'Buy BTC' : 'Sell BTC'}
              </button>
            </div>
          </div>
          {/* Recent Trades */}
          <div className="w-full lg:w-64 flex flex-col border-l border-[#2b3139] pl-4 hidden md:flex">
             <div className="text-xs font-bold mb-3">Market Trades</div>
             <div className="flex-1 overflow-y-auto text-[10px]">
                <div className="flex justify-between text-[#848e9c] mb-1">
                  <span>Price(USDT)</span>
                  <span>Amount(BTC)</span>
                  <span>Time</span>
                </div>
                {MOCK_TRADE_HISTORY.slice(0, 15).map((t, i) => (
                  <div key={i} className="flex justify-between py-0.5">
                    <span className={t.side === 'buy' ? 'text-[#0ecb81]' : 'text-[#f6465d]'}>{t.price.toFixed(2)}</span>
                    <span>{t.amount.toFixed(5)}</span>
                    <span className="text-[#848e9c]">{t.time}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
