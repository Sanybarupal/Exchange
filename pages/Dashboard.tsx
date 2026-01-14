
import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS, MOCK_WALLET } from '../constants';

const Dashboard: React.FC = () => {
  const totalValue = MOCK_WALLET.reduce((acc, curr) => acc + curr.valueUsd, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-sm text-[#848e9c]">Welcome back, User_7823</p>
        </div>
        <div className="flex gap-3">
          <Link to="/wallet" className="bg-[#f0b90b] text-[#0b0e11] px-6 py-2 rounded font-bold hover:bg-[#e2ad0a] transition-colors">Deposit</Link>
          <Link to="/trade" className="bg-[#2b3139] border border-[#474d57] text-white px-6 py-2 rounded font-bold hover:bg-[#363c44] transition-colors">Trade Now</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Balance */}
        <div className="bg-[#1e2329] p-6 rounded-xl border border-[#2b3139]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-[#848e9c]">Total Estimated Balance</span>
            <ICONS.Wallet className="w-5 h-5 text-[#f0b90b]" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">≈ ${totalValue.toLocaleString()}</div>
          <div className="text-xs text-[#0ecb81] font-medium">+2.14% ($1,842.00) 24h</div>
        </div>

        {/* Security Status */}
        <div className="bg-[#1e2329] p-6 rounded-xl border border-[#2b3139]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-[#848e9c]">Security Level</span>
            <ICONS.Shield className="w-5 h-5 text-[#f0b90b]" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="h-2 flex-1 bg-[#2b3139] rounded-full overflow-hidden">
              <div className="h-full bg-[#f0b90b] w-2/3"></div>
            </div>
            <span className="text-sm font-bold">Medium</span>
          </div>
          <Link to="/kyc" className="text-xs text-[#f0b90b] hover:underline">Verify Identity to increase security</Link>
        </div>

        {/* Account Type */}
        <div className="bg-[#1e2329] p-6 rounded-xl border border-[#2b3139]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-[#848e9c]">VIP Level</span>
            <ICONS.TrendingUp className="w-5 h-5 text-[#f0b90b]" />
          </div>
          <div className="text-xl font-bold text-white mb-2">Regular User (VIP 0)</div>
          <p className="text-xs text-[#848e9c]">Trade $100k+ to reach VIP 1</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Asset Distribution */}
        <div className="bg-[#1e2329] p-6 rounded-xl border border-[#2b3139]">
          <h2 className="text-lg font-bold mb-6">Top Assets</h2>
          <div className="space-y-4">
            {MOCK_WALLET.slice(0, 4).map(asset => (
              <div key={asset.asset} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2b3139] flex items-center justify-center font-bold text-xs">
                    {asset.asset[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{asset.asset}</div>
                    <div className="text-[10px] text-[#848e9c]">{asset.balance} available</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold">${asset.valueUsd.toLocaleString()}</div>
                  <div className="text-[10px] text-[#848e9c]">{(asset.valueUsd / totalValue * 100).toFixed(1)}%</div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/wallet" className="block text-center text-sm text-[#f0b90b] font-bold mt-8 hover:underline">View All Assets</Link>
        </div>

        {/* Recent Activities */}
        <div className="bg-[#1e2329] p-6 rounded-xl border border-[#2b3139]">
          <h2 className="text-lg font-bold mb-6">Recent Activities</h2>
          <div className="space-y-4">
            {[
              { type: 'Login', desc: 'Successful login from London, UK', date: '2024-05-12 14:22' },
              { type: 'Trade', desc: 'Buy BTC 0.05 at 68,432.50 USDT', date: '2024-05-11 09:15' },
              { type: 'Deposit', desc: 'Deposit 1,000 USDT successful', date: '2024-05-10 18:30' },
              { type: 'Security', desc: 'Password changed successfully', date: '2024-05-08 12:05' },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-4 pb-4 border-b border-[#2b3139] last:border-0">
                <div className="bg-[#2b3139] p-2 rounded-lg">
                  <ICONS.Clock className="w-4 h-4 text-[#848e9c]" />
                </div>
                <div>
                  <div className="text-sm font-bold">{activity.type}</div>
                  <p className="text-xs text-[#848e9c] mb-1">{activity.desc}</p>
                  <span className="text-[10px] text-[#474d57]">{activity.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
