
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ICONS } from '../constants.tsx';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) => 
    `${isActive(path) ? 'text-[#f0b90b]' : 'text-[#eaecef] hover:text-[#f0b90b]'} transition-colors font-medium text-sm`;

  return (
    <nav className="sticky top-0 z-50 bg-[#1e2329] border-b border-[#2b3139] px-4 md:px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#f0b90b] rounded-md flex items-center justify-center font-bold text-[#0b0e11] group-hover:bg-[#e2ad0a] transition-colors">B</div>
          <span className="text-xl font-bold text-white hidden md:block">BinEx</span>
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/markets" className={navLinkClass('/markets')}>Markets</Link>
          <Link to="/trade" className={navLinkClass('/trade')}>Trade</Link>
          <Link to="/dashboard" className={navLinkClass('/dashboard')}>Dashboard</Link>
          <Link to="/support" className={navLinkClass('/support')}>Support</Link>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <Link to="/wallet" className="flex items-center gap-2 text-sm px-3 py-1.5 bg-[#2b3139] rounded hover:bg-[#363c44] transition-colors border border-transparent hover:border-[#474d57]">
          <ICONS.Wallet className="w-4 h-4 text-[#f0b90b]" />
          <span className="hidden sm:inline font-medium">Wallet</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/login" className="text-sm px-4 py-1.5 text-[#eaecef] hover:text-[#f0b90b] transition-colors hidden sm:block">Log In</Link>
          <Link to="/register" className="text-sm px-4 py-1.5 bg-[#f0b90b] text-[#0b0e11] font-bold rounded hover:bg-[#e2ad0a] transition-all">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
