
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e2329] border-t border-[#2b3139] py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm text-[#848e9c]">
            <li><Link to="/about" className="hover:text-white">About BinEx</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-[#848e9c]">
            <li><Link to="/support" className="hover:text-white">Help Center</Link></li>
            <li><Link to="/support" className="hover:text-white">Submit a Request</Link></li>
            <li><Link to="/support" className="hover:text-white">API Documentation</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Community</h3>
          <ul className="space-y-2 text-sm text-[#848e9c]">
            <li><a href="#" className="hover:text-white">Telegram</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">Discord</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#f0b90b] font-bold mb-4">Join Us</h3>
          <p className="text-sm text-[#848e9c] mb-4">Get the latest updates and market news.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Your email" className="bg-[#2b3139] border border-[#474d57] rounded px-3 py-1.5 text-sm flex-1 outline-none focus:border-[#f0b90b]" />
            <button className="bg-[#f0b90b] text-[#0b0e11] text-xs font-bold px-4 py-1.5 rounded">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#2b3139] text-center text-xs text-[#848e9c]">
        © 2024 BinEx.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
