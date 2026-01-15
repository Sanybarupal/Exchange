
import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS, MOCK_WALLET } from '../constants.tsx';

const Dashboard: React.FC = () => {
  const totalValue = MOCK_WALLET.reduce((acc, curr) => acc + curr.valueUsd, 0);

  return (
    <div className="bg-[#0b0e11] min-h-screen">
      {/* Sub-Nav / Breadcrumb */}
      <div className="bg-[#1e2329] px-8 py-3 border-b border-[#2b3139]">
        <div className="max-w-7xl mx-auto flex items-center gap-6 text-sm font-medium">
          <Link to="/dashboard" className="text-[#f0b90b]">Account</Link>
          <Link to="/security" className="text-[#848e9c] hover:text-[#f0b90b]">Security</Link>
          <Link to="/kyc" className="text-[#848e9c] hover:text-[#f0b90b]">Identification</Link>
          <Link to="/api-management" className="text-[#848e9c] hover:text-[#f0b90b]">API Management</Link>
          <Link to="/referral" className="text-[#848e9c] hover:text-[#f0b90b]">Referral</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold text-white">User_7823</h1>
              <span className="bg-[#2b3139] px-2 py-0.5 rounded text-[10px] font-bold text-[#f0b90b]">VIP 0</span>
              <span className="bg-[#0ecb8122] text-[#0ecb81] px-2 py-0.5 rounded text-[10px] font-bold">Verified</span>
            </div>
            <p className="text-xs text-[#848e9c]">User ID: 524910283 &nbsp; | &nbsp; Last Login: 2024-05-14 10:12:05</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Link to="/deposit" className="flex-1 md:flex-none text-center bg-[#f0b90b] text-[#0b0e11] px-8 py-2.5 rounded font-bold hover:bg-[#e2ad0a] transition-all">Deposit</Link>
            <Link to="/withdraw" className="flex-1 md:flex-none text-center bg-[#2b3139] border border-[#474d57] text-white px-8 py-2.5 rounded font-bold hover:bg-[#363c44] transition-all">Withdraw</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Estimated Balance Card */}
          <div className="lg:col-span-2 bg-[#1e2329] p-8 rounded-2xl border border-[#2b3139] shadow-xl">
             <div className="flex justify-between items-start mb-6">
                <div>
                   <div className="flex items-center gap-2 text-sm text-[#848e9c] mb-2">
                     Estimated Balance <span className="text-xs">👁️</span>
                   </div>
                   <div className="flex items-baseline gap-3">
                     <span className="text-4xl font-bold text-white">${totalValue.toLocaleString()}</span>
                     <span className="text-[#848e9c] font-medium">≈ 0.542319 BTC</span>
                   </div>
                </div>
                <div className="text-right">
                   <div className="text-xs text-[#848e9c] mb-1">Today's PNL</div>
                   <div className="text-lg font-bold text-[#0ecb81]">+$2,142.00 (+2.4%)</div>
                </div>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#2b3139]">
                <div>
                  <div className="text-xs text-[#848e9c] mb-1">Spot Account</div>
                  <div className="font-bold text-white">$42,120.00</div>
                </div>
                <div>
                  <div className="text-xs text-[#848e9c] mb-1">Earn</div>
                  <div className="font-bold text-white">$34,228.00</div>
                </div>
                <div>
                  <div className="text-xs text-[#848e9c] mb-1">Futures</div>
                  <div className="font-bold text-white">$12,450.00</div>
                </div>
                <div>
                  <Link to="/wallet" className="text-xs text-[#f0b90b] hover:underline flex items-center gap-1">Wallet Overview &gt;</Link>
                </div>
             </div>
          </div>

          {/* Security Summary */}
          <div className="bg-[#1e2329] p-8 rounded-2xl border border-[#2b3139] shadow-xl">
            <h3 className="font-bold text-white mb-6">Security</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0ecb8122] rounded-full flex items-center justify-center">✅</div>
                    <span className="text-sm">2FA Enabled</span>
                 </div>
                 <button className="text-[10px] text-[#f0b90b] font-bold">Manage</button>
              </div>
              <div className="flex justify-between items-center">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0ecb8122] rounded-full flex items-center justify-center">✅</div>
                    <span className="text-sm">Identity Verified</span>
                 </div>
                 <button className="text-[10px] text-[#f0b90b] font-bold">View</button>
              </div>
              <div className="pt-4 mt-4 border-t border-[#2b3139]">
                <p className="text-xs text-[#848e9c] mb-3">Increase your account security level</p>
                <Link to="/security" className="block text-center bg-[#2b3139] py-2 rounded text-xs font-bold border border-[#474d57]">Settings</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Assets & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="bg-[#1e2329] rounded-2xl border border-[#2b3139] overflow-hidden">
              <div className="p-6 border-b border-[#2b3139] flex justify-between items-center">
                <h3 className="font-bold text-white">Assets</h3>
                <Link to="/wallet" className="text-xs text-[#f0b90b] hover:underline">View All</Link>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {MOCK_WALLET.slice(0, 4).map(asset => (
                    <div key={asset.asset} className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#2b3139] flex items-center justify-center font-bold text-xs">
                          {asset.asset[0]}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{asset.asset}</div>
                          <div className="text-[10px] text-[#848e9c]">{asset.balance} Available</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-white">${asset.valueUsd.toLocaleString()}</div>
                        <div className="text-[10px] text-[#848e9c]">≈ { (asset.valueUsd/68000).toFixed(4) } BTC</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
           </div>

           <div className="bg-[#1e2329] rounded-2xl border border-[#2b3139] overflow-hidden">
              <div className="p-6 border-b border-[#2b3139]">
                <h3 className="font-bold text-white">Latest Announcements</h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { title: "BinEx Launches SOL Liquid Staking", date: "May 14" },
                  { title: "Wallet Maintenance for ETH Network", date: "May 13" },
                  { title: "New Trading Pair: NOT/USDT", date: "May 12" },
                  { title: "Community Feedback Session Q2", date: "May 10" },
                ].map((news, i) => (
                  <div key={i} className="flex justify-between items-center group cursor-pointer border-b border-[#2b3139] pb-3 last:border-0">
                    <p className="text-sm text-[#848e9c] group-hover:text-[#f0b90b] transition-colors line-clamp-1 pr-4">{news.title}</p>
                    <span className="text-[10px] text-[#474d57] whitespace-nowrap">{news.date}</span>
                  </div>
                ))}
                <Link to="/blog" className="block text-center text-xs text-[#848e9c] mt-4 hover:text-[#f0b90b]">View More</Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
