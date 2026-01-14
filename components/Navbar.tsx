
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ICONS } from '../constants';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#1e2329] border-b border-[#2b3139] px-4 md:px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#f0b90b] rounded-md flex items-center justify-center font-bold text-[#0b0e11]">B</div>
          <span className="text-xl font-bold text-white hidden md:block">BinEx</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/markets" className={`${isActive('/markets') ? 'text-[#f0b90b]' : 'hover:text-[#f0b90b] transition-colors'}`}>Markets</Link>
          <Link to="/trade" className={`${isActive('/trade') ? 'text-[#f0b90b]' : 'hover:text-[#f0b90b] transition-colors'}`}>Trade</Link>
          <Link to="/about" className={`${isActive('/about') ? 'text-[#f0b90b]' : 'hover:text-[#f0b90b] transition-colors'}`}>About</Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/dashboard" className="hidden md:flex items-center gap-2 text-sm hover:text-[#f0b90b]">
          <ICONS.User className="w-4 h-4" />
          <span>Dashboard</span>
        </Link>
        <Link to="/wallet" className="flex items-center gap-2 text-sm px-3 py-1.5 bg-[#2b3139] rounded hover:bg-[#363c44] transition-colors">
          <ICONS.Wallet className="w-4 h-4 text-[#f0b90b]" />
          <span className="hidden sm:inline">Wallet</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/login" className="text-sm px-4 py-1.5 border border-[#474d57] rounded hover:bg-[#2b3139] transition-colors">Log In</Link>
          <Link to="/register" className="text-sm px-4 py-1.5 bg-[#f0b90b] text-[#0b0e11] font-semibold rounded hover:bg-[#e2ad0a] transition-colors">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
