
import React from 'react';
import { MOCK_WALLET } from '../constants';
import { ICONS } from '../constants';

const Wallet: React.FC = () => {
  const totalBalanceUsd = MOCK_WALLET.reduce((acc, curr) => acc + curr.valueUsd, 0);

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Wallet Overview</h1>
        <div className="flex gap-3">
          <button className="bg-[#f0b90b] text-[#0b0e11] px-6 py-2 rounded font-bold hover:bg-[#e2ad0a]">Deposit</button>
          <button className="bg-[#2b3139] text-white border border-[#474d57] px-6 py-2 rounded font-bold hover:bg-[#363c44]">Withdraw</button>
          <button className="bg-[#2b3139] text-white border border-[#474d57] px-6 py-2 rounded font-bold hover:bg-[#363c44]">Transfer</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-[#1e2329] p-8 rounded-2xl border border-[#2b3139] lg:col-span-1">
          <div className="text-sm text-[#848e9c] mb-2">Estimated Balance</div>
          <div className="text-3xl font-bold mb-1">≈ ${totalBalanceUsd.toLocaleString()}</div>
          <div className="text-[#848e9c] text-sm mb-6">≈ 0.542319 BTC</div>
          <div className="flex items-center gap-2 text-[#0ecb81] text-sm font-bold">
            <ICONS.TrendingUp className="w-4 h-4" />
            +$245.12 (2.1%) today
          </div>
        </div>

        <div className="bg-[#1e2329] p-8 rounded-2xl border border-[#2b3139] lg:col-span-2 flex items-center justify-around">
           <div className="text-center">
             <div className="text-xs text-[#848e9c] mb-1">Spot Account</div>
             <div className="font-bold">$42,120.00</div>
           </div>
           <div className="w-px h-12 bg-[#2b3139]"></div>
           <div className="text-center">
             <div className="text-xs text-[#848e9c] mb-1">Futures Account</div>
             <div className="font-bold">$12,450.00</div>
           </div>
           <div className="w-px h-12 bg-[#2b3139]"></div>
           <div className="text-center">
             <div className="text-xs text-[#848e9c] mb-1">Earn / Savings</div>
             <div className="font-bold">$34,228.00</div>
           </div>
        </div>
      </div>

      <div className="bg-[#1e2329] rounded-2xl border border-[#2b3139] overflow-hidden">
        <div className="p-6 border-b border-[#2b3139] flex justify-between items-center">
          <h2 className="text-xl font-bold">Assets</h2>
          <div className="flex items-center gap-2 text-sm text-[#848e9c]">
            <input type="checkbox" className="rounded bg-[#2b3139] border-[#474d57]" />
            <span>Hide 0 balance</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-[#848e9c] text-xs uppercase border-b border-[#2b3139]">
              <tr>
                <th className="px-6 py-4 font-medium">Asset</th>
                <th className="px-6 py-4 font-medium text-right">Total Balance</th>
                <th className="px-6 py-4 font-medium text-right">Available</th>
                <th className="px-6 py-4 font-medium text-right">Locked</th>
                <th className="px-6 py-4 font-medium text-right">Value (USD)</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2b3139]">
              {MOCK_WALLET.map(w => (
                <tr key={w.asset} className="hover:bg-[#2b3139]">
                  <td className="px-6 py-4 font-bold">{w.asset}</td>
                  <td className="px-6 py-4 text-right">{(w.balance + w.locked).toLocaleString()}</td>
                  <td className="px-6 py-4 text-right">{w.balance.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right text-[#848e9c]">{w.locked.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right">${w.valueUsd.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 text-sm text-[#f0b90b]">
                      <button className="hover:underline">Trade</button>
                      <button className="hover:underline">Deposit</button>
                      <button className="hover:underline">Withdraw</button>
                    </div>
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

export default Wallet;
