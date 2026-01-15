
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_TRADE_HISTORY, MOCK_COINS } from '../constants.tsx';
import { getMarketAnalysis } from '../services/geminiService.ts';

const Trade: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'BUY' | 'SELL'>('BUY');
  const [aiAnalysis, setAiAnalysis] = useState<string>('Analyzing sentiment...');
  const [orderType, setOrderType] = useState<'Limit' | 'Market' | 'Stop'>('Limit');
  const activeCoin = MOCK_COINS[0]; // BTC

  useEffect(() => {
    const fetchAi = async () => {
      const res = await getMarketAnalysis(activeCoin.symbol, activeCoin.price, activeCoin.change24h);
      setAiAnalysis(res || '');
    };
    fetchAi();
  }, [activeCoin]);

  const chartData = Array.from({ length: 48 }, (_, i) => ({
    time: `${Math.floor(i/2)}:${i%2 === 0 ? '00' : '30'}`,
    price: activeCoin.price - 400 + Math.random() * 800
  }));

  const levels = 18;
  const sells = Array.from({ length: levels }, (_, i) => ({
    price: activeCoin.price + (levels - i) * 8.5,
    amount: Math.random() * 1.5,
    total: Math.random() * 12
  }));
  const buys = Array.from({ length: levels }, (_, i) => ({
    price: activeCoin.price - (i + 1) * 8.5,
    amount: Math.random() * 1.5,
    total: Math.random() * 12
  }));

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden bg-[#0b0e11]">
      
      {/* 1. Left Sidebar: Order Book (High Density) */}
      <div className="w-full lg:w-[280px] bg-[#161a1e] border-r border-[#2b3139] flex flex-col">
        <div className="p-3 flex justify-between items-center border-b border-[#2b3139]">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#848e9c]">Order Book</span>
          <div className="flex gap-1.5">
             <button className="w-4 h-4 bg-[#2b3139] rounded-sm text-[8px] flex items-center justify-center">🟢</button>
             <button className="w-4 h-4 bg-[#2b3139] rounded-sm text-[8px] flex items-center justify-center">🔴</button>
             <button className="w-4 h-4 bg-[#f0b90b] rounded-sm text-[8px] flex items-center justify-center">🌓</button>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="grid grid-cols-3 text-[10px] font-bold text-[#474d57] px-3 py-2 border-b border-[#2b3139]/50 uppercase tracking-tighter">
            <span>Price(USDT)</span>
            <span className="text-right">Amount(BTC)</span>
            <span className="text-right">Total</span>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {/* Sells */}
            <div className="flex flex-col-reverse">
              {sells.map((s, i) => (
                <div key={i} className="grid grid-cols-3 text-[11px] py-0.5 px-3 relative group cursor-pointer hover:bg-[#2b3139]/30">
                  <div className="absolute right-0 top-0 bottom-0 bg-[#f6465d]/10 transition-all duration-300" style={{ width: `${(s.amount / 1.5) * 100}%` }}></div>
                  <span className="text-[#f6465d] font-bold tabular-nums z-10">{s.price.toFixed(1)}</span>
                  <span className="text-right tabular-nums text-[#eaecef] z-10">{s.amount.toFixed(4)}</span>
                  <span className="text-right tabular-nums text-[#848e9c] z-10">{s.total.toFixed(1)}</span>
                </div>
              ))}
            </div>

            {/* Current Price Ticker */}
            <div className="my-1.5 py-3 px-3 bg-[#1e2329]/50 border-y border-[#2b3139] flex items-center justify-between">
              <div>
                <div className={`text-lg font-black tabular-nums ${activeCoin.change24h >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d]'}`}>
                  {activeCoin.price.toLocaleString()} {activeCoin.change24h >= 0 ? '▲' : '▼'}
                </div>
                <div className="text-[10px] font-bold text-[#848e9c]">$68,432.50</div>
              </div>
              <div className="text-[10px] text-[#0ecb81] font-bold">More &gt;</div>
            </div>

            {/* Buys */}
            <div className="flex flex-col">
              {buys.map((b, i) => (
                <div key={i} className="grid grid-cols-3 text-[11px] py-0.5 px-3 relative group cursor-pointer hover:bg-[#2b3139]/30">
                  <div className="absolute right-0 top-0 bottom-0 bg-[#0ecb81]/10 transition-all duration-300" style={{ width: `${(b.amount / 1.5) * 100}%` }}></div>
                  <span className="text-[#0ecb81] font-bold tabular-nums z-10">{b.price.toFixed(1)}</span>
                  <span className="text-right tabular-nums text-[#eaecef] z-10">{b.amount.toFixed(4)}</span>
                  <span className="text-right tabular-nums text-[#848e9c] z-10">{b.total.toFixed(1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Area: Chart & Trading Forms */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Market Stats Bar */}
        <div className="h-16 bg-[#161a1e] border-b border-[#2b3139] flex items-center px-6 gap-10 overflow-x-auto whitespace-nowrap">
          <div className="flex items-center gap-3 pr-8 border-r border-[#2b3139]">
            <span className="text-xl font-black text-white italic tracking-tighter">BTC/USDT</span>
            <div className="px-1.5 py-0.5 bg-[#f0b90b]/10 text-[#f0b90b] text-[9px] font-black rounded border border-[#f0b90b]/20">10x</div>
          </div>
          
          <div className="flex gap-10">
            {[
              { label: 'Mark Price', val: activeCoin.price.toLocaleString(), color: '#0ecb81' },
              { label: '24h Change', val: `${activeCoin.change24h}%`, color: activeCoin.change24h >= 0 ? '#0ecb81' : '#f6465d' },
              { label: '24h High', val: '69,210.00', color: 'white' },
              { label: '24h Low', val: '67,400.00', color: 'white' },
              { label: '24h Volume(BTC)', val: '14,231.54', color: 'white' },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-[10px] font-bold text-[#474d57] uppercase tracking-wider">{stat.label}</span>
                <span className="text-sm font-black tabular-nums" style={{ color: stat.color }}>{stat.val}</span>
              </div>
            ))}
          </div>

          <div className="flex-1"></div>
          
          <div className="bg-[#1e2329] px-4 py-2 rounded-xl border border-[#2b3139] flex items-center gap-3 max-w-[320px] group cursor-help">
            <div className="w-8 h-8 rounded-full bg-[#f0b90b]/20 flex items-center justify-center text-xs animate-pulse">🤖</div>
            <div className="overflow-hidden">
               <span className="text-[9px] font-black text-[#f0b90b] uppercase tracking-widest block mb-0.5">Gemini AI Insights</span>
               <p className="text-[11px] text-[#848e9c] italic truncate leading-none">{aiAnalysis}</p>
            </div>
          </div>
        </div>

        {/* Professional Charting Surface */}
        <div className="flex-1 bg-[#0b0e11] relative">
          <div className="absolute inset-0 p-4">
             <div className="w-full h-full bg-[#161a1e] rounded-2xl border border-[#2b3139] overflow-hidden">
                <div className="h-10 bg-[#1e2329] border-b border-[#2b3139] flex items-center px-4 gap-4">
                   {['Time', '15m', '1h', '4h', '1D', '1W'].map(t => (
                     <button key={t} className={`text-[10px] font-bold px-2 py-1 rounded transition-colors ${t === '1h' ? 'bg-[#2b3139] text-[#f0b90b]' : 'text-[#848e9c] hover:bg-[#2b3139]'}`}>{t}</button>
                   ))}
                   <div className="w-px h-4 bg-[#2b3139]"></div>
                   <button className="text-[10px] font-bold text-[#848e9c]">Indicators</button>
                </div>
                <div className="h-[calc(100%-40px)] w-full">
                   <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f0b90b" stopOpacity={0.15}/>
                          <stop offset="95%" stopColor="#f0b90b" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e2329" />
                      <XAxis dataKey="time" hide />
                      <YAxis domain={['auto', 'auto']} orientation="right" tick={{ fontSize: 9, fill: '#474d57' }} stroke="#2b3139" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e2329', border: '1px solid #2b3139', borderRadius: '8px' }}
                        itemStyle={{ color: '#f0b90b', fontWeight: 'bold', fontSize: '11px' }}
                      />
                      <Area type="monotone" dataKey="price" stroke="#f0b90b" fillOpacity={1} fill="url(#colorPrice)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
             </div>
          </div>
        </div>

        {/* High-Performance Execution Forms */}
        <div className="h-[280px] bg-[#161a1e] border-t border-[#2b3139] flex">
          <div className="flex-1 p-6 flex flex-col">
            <div className="flex gap-6 mb-6">
               {['Limit', 'Market', 'Stop-Limit'].map(t => (
                 <button 
                  key={t} 
                  onClick={() => setOrderType(t as any)}
                  className={`text-[11px] font-black uppercase tracking-widest pb-1 transition-all ${orderType === t ? 'text-white border-b-2 border-[#f0b90b]' : 'text-[#848e9c]'}`}
                 >
                   {t}
                 </button>
               ))}
            </div>
            
            <div className="flex gap-10">
               {/* Buy Panel */}
               <div className="flex-1 space-y-3">
                  <div className="flex items-center bg-[#2b3139]/40 border border-[#2b3139] rounded-xl px-4 py-2.5 group focus-within:border-[#0ecb81]">
                    <span className="text-[10px] font-black text-[#848e9c] w-14">Price</span>
                    <input type="text" defaultValue={activeCoin.price} className="bg-transparent flex-1 text-right text-sm font-bold outline-none tabular-nums" />
                    <span className="text-[10px] font-black ml-3 text-[#eaecef]">USDT</span>
                  </div>
                  <div className="flex items-center bg-[#2b3139]/40 border border-[#2b3139] rounded-xl px-4 py-2.5 group focus-within:border-[#0ecb81]">
                    <span className="text-[10px] font-black text-[#848e9c] w-14">Amount</span>
                    <input type="text" placeholder="0.00" className="bg-transparent flex-1 text-right text-sm font-bold outline-none tabular-nums" />
                    <span className="text-[10px] font-black ml-3 text-[#eaecef]">BTC</span>
                  </div>
                  <div className="flex justify-between py-1 px-1">
                    {[25, 50, 75, 100].map(p => (
                      <button key={p} className="w-10 h-1.5 bg-[#2b3139] rounded-full hover:bg-[#f0b90b] transition-colors"></button>
                    ))}
                  </div>
                  <button className="w-full py-4 rounded-xl font-black text-sm text-[#0b0e11] bg-[#0ecb81] hover:bg-[#0da66b] transition-all transform active:scale-95 shadow-lg shadow-[#0ecb81]/10">
                    Buy BTC
                  </button>
               </div>
               
               {/* Sell Panel */}
               <div className="flex-1 space-y-3">
                  <div className="flex items-center bg-[#2b3139]/40 border border-[#2b3139] rounded-xl px-4 py-2.5 group focus-within:border-[#f6465d]">
                    <span className="text-[10px] font-black text-[#848e9c] w-14">Price</span>
                    <input type="text" defaultValue={activeCoin.price} className="bg-transparent flex-1 text-right text-sm font-bold outline-none tabular-nums" />
                    <span className="text-[10px] font-black ml-3 text-[#eaecef]">USDT</span>
                  </div>
                  <div className="flex items-center bg-[#2b3139]/40 border border-[#2b3139] rounded-xl px-4 py-2.5 group focus-within:border-[#f6465d]">
                    <span className="text-[10px] font-black text-[#848e9c] w-14">Amount</span>
                    <input type="text" placeholder="0.00" className="bg-transparent flex-1 text-right text-sm font-bold outline-none tabular-nums" />
                    <span className="text-[10px] font-black ml-3 text-[#eaecef]">BTC</span>
                  </div>
                  <div className="flex justify-between py-1 px-1">
                    {[25, 50, 75, 100].map(p => (
                      <button key={p} className="w-10 h-1.5 bg-[#2b3139] rounded-full hover:bg-[#f6465d] transition-colors"></button>
                    ))}
                  </div>
                  <button className="w-full py-4 rounded-xl font-black text-sm text-[#eaecef] bg-[#f6465d] hover:bg-[#e03a4e] transition-all transform active:scale-95 shadow-lg shadow-[#f6465d]/10">
                    Sell BTC
                  </button>
               </div>
            </div>
          </div>
          
          {/* History Widget */}
          <div className="w-[320px] border-l border-[#2b3139] p-4 flex flex-col hidden xl:flex">
             <div className="text-[10px] font-black uppercase tracking-widest text-[#848e9c] mb-3">Market Trades</div>
             <div className="flex-1 overflow-y-auto text-[11px] tabular-nums custom-scrollbar">
                {MOCK_TRADE_HISTORY.slice(0, 12).map((t, i) => (
                  <div key={i} className="flex justify-between py-0.5 hover:bg-[#2b3139]/20">
                    <span className={t.side === 'buy' ? 'text-[#0ecb81]' : 'text-[#f6465d]'}>{t.price.toFixed(2)}</span>
                    <span className="text-right text-white">{t.amount.toFixed(4)}</span>
                    <span className="text-right text-[#474d57]">{t.time}</span>
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
