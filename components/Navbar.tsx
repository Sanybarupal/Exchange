
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ICONS } from '../constants.tsx';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const NavItem = ({ title, path, children }: { title: string; path?: string; children?: React.ReactNode }) => (
    <div 
      className="relative group h-full flex items-center"
      onMouseEnter={() => setActiveMenu(title)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      {path ? (
        <Link to={path} className={`px-3 text-sm font-medium transition-colors ${isActive(path) ? 'text-[#f0b90b]' : 'text-[#eaecef] hover:text-[#f0b90b]'}`}>
          {title}
        </Link>
      ) : (
        <button className="px-3 text-sm font-medium text-[#eaecef] hover:text-[#f0b90b] flex items-center gap-1 transition-colors">
          {title} <span className="text-[8px] transition-transform group-hover:rotate-180">▼</span>
        </button>
      )}

      {children && activeMenu === title && (
        <div className="absolute top-full left-0 w-64 bg-[#1e2329] border border-[#2b3139] shadow-2xl rounded-b-lg py-2 z-[200]">
          {children}
        </div>
      )}
    </div>
  );

  const DropdownItem = ({ to, title, desc, icon }: any) => (
    <Link to={to} className="flex items-start gap-3 px-4 py-3 hover:bg-[#2b3139] transition-colors">
      <div className="text-[#f0b90b] mt-1">{icon}</div>
      <div>
        <div className="text-sm font-bold text-white">{title}</div>
        <div className="text-[10px] text-[#848e9c] leading-tight">{desc}</div>
      </div>
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-[#1e2329] border-b border-[#2b3139] px-4 md:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2 h-full">
        <Link to="/" className="flex items-center gap-2 mr-6">
          <div className="w-7 h-7 bg-[#f0b90b] rounded-sm flex items-center justify-center font-black text-[#0b0e11] text-lg">B</div>
          <span className="text-xl font-bold text-white hidden sm:block">BinEx</span>
        </Link>

        <div className="hidden lg:flex items-center h-full">
          <NavItem title="Buy Crypto">
            <DropdownItem to="/deposit" title="Bank Deposit" desc="Deposit EUR, GBP via SEPA/Faster Payments" icon="🏦" />
            <DropdownItem to="/p2p" title="P2P Trading" desc="Bank Transfer and 100+ options" icon="🤝" />
            <DropdownItem to="/buy-card" title="Credit/Debit Card" desc="Buy with Visa, Mastercard" icon="💳" />
          </NavItem>

          <NavItem title="Markets" path="/markets" />

          <NavItem title="Trade">
            <DropdownItem to="/trade" title="Spot" desc="Classic trading interface" icon="📊" />
            <DropdownItem to="/margin" title="Margin" desc="Increase your profits with leverage" icon="📈" />
            <DropdownItem to="/p2p" title="P2P" desc="Direct bank transfer trading" icon="👤" />
            <DropdownItem to="/convert" title="Convert" desc="Zero fees, instant swap" icon="🔄" />
          </NavItem>

          <NavItem title="Futures">
            <DropdownItem to="/futures" title="USDⓈ-M Futures" desc="Perpetual or Quarterly Contracts in USDT" icon="💎" />
            <DropdownItem to="/futures" title="COIN-M Futures" desc="Contracts settled in Cryptocurrency" icon="🪙" />
          </NavItem>

          <NavItem title="Earn">
            <DropdownItem to="/earn" title="Simple Earn" desc="Simple & safe. One-stop investment" icon="💰" />
            <DropdownItem to="/launchpad" title="Launchpad" desc="Token Launch Platform" icon="🚀" />
            <DropdownItem to="/staking" title="ETH Staking" desc="Stake ETH & earn rewards" icon="⟠" />
          </NavItem>
          
          <NavItem title="Square">
             <DropdownItem to="/blog" title="News" desc="Latest crypto updates" icon="📰" />
             <DropdownItem to="/academy" title="Academy" desc="Learn everything about crypto" icon="🎓" />
          </NavItem>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-4 mr-4">
          <Link to="/login" className="text-sm font-medium text-[#eaecef] hover:text-[#f0b90b]">Log In</Link>
          <Link to="/register" className="text-sm font-bold bg-[#f0b90b] text-[#0b0e11] px-4 py-1.5 rounded hover:bg-[#e2ad0a]">Register</Link>
        </div>
        
        <Link to="/wallet" className="p-2 hover:bg-[#2b3139] rounded transition-colors text-[#848e9c] hover:text-white">
          <ICONS.Wallet className="w-5 h-5" />
        </Link>
        
        <Link to="/dashboard" className="p-2 hover:bg-[#2b3139] rounded transition-colors text-[#848e9c] hover:text-white">
          <ICONS.User className="w-5 h-5" />
        </Link>

        <button className="lg:hidden p-2 text-[#848e9c]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
