
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e2329] border-t border-[#2b3139] pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        {/* About Column */}
        <div>
          <h3 className="text-white font-bold mb-6 text-base">About Us</h3>
          <ul className="space-y-3 text-sm text-[#848e9c]">
            <li><Link to="/about" className="hover:text-[#f0b90b] transition-colors">About BinEx</Link></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Business Contacts</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">BinEx Blog</a></li>
            <li><Link to="/terms" className="hover:text-[#f0b90b] transition-colors">Terms</Link></li>
            <li><Link to="/privacy" className="hover:text-[#f0b90b] transition-colors">Privacy</Link></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Announcements</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">News</a></li>
          </ul>
        </div>

        {/* Products Column */}
        <div>
          <h3 className="text-white font-bold mb-6 text-base">Products</h3>
          <ul className="space-y-3 text-sm text-[#848e9c]">
            <li><Link to="/trade" className="hover:text-[#f0b90b] transition-colors">Exchange</Link></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Academy</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Charity</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Card</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Labs</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Launchpad</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Research</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">NFT</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">BinEx Pay</a></li>
          </ul>
        </div>

        {/* Service Column */}
        <div>
          <h3 className="text-white font-bold mb-6 text-base">Service</h3>
          <ul className="space-y-3 text-sm text-[#848e9c]">
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Buy Crypto</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Institutional & VIP Services</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">OTC Trading</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Referral</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Affiliate</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">BNB</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Listing Application</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">P2P Merchant Application</a></li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h3 className="text-white font-bold mb-6 text-base">Support</h3>
          <ul className="space-y-3 text-sm text-[#848e9c]">
            <li><Link to="/support" className="hover:text-[#f0b90b] transition-colors">Support Center</Link></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">24/7 Chat Support</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Submit a request</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Fees</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Trading Rules</a></li>
            <li><Link to="/kyc" className="hover:text-[#f0b90b] transition-colors">Identity Verification</Link></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">BinEx Verify</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Law Enforcement Requests</a></li>
          </ul>
        </div>

        {/* Learn Column */}
        <div>
          <h3 className="text-white font-bold mb-6 text-base">Learn</h3>
          <ul className="space-y-3 text-sm text-[#848e9c]">
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Learn & Earn</a></li>
            <li><Link to="/markets" className="hover:text-[#f0b90b] transition-colors">Browse Crypto Prices</Link></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Bitcoin Price</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Ethereum Price</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Buy Bitcoin</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Buy Ethereum</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Buy Blue Chips</a></li>
            <li><a href="#" className="hover:text-[#f0b90b] transition-colors">Buy Altcoins</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-[#2b3139] flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4 text-[#848e9c]">
            <a href="#" className="hover:text-white"><span className="text-xl">Telegram</span></a>
            <a href="#" className="hover:text-white"><span className="text-xl">Twitter</span></a>
            <a href="#" className="hover:text-white"><span className="text-xl">Discord</span></a>
            <a href="#" className="hover:text-white"><span className="text-xl">Facebook</span></a>
            <a href="#" className="hover:text-white"><span className="text-xl">Instagram</span></a>
          </div>
          <div className="text-xs text-[#848e9c]">
            © 2024 BinEx.com. All rights reserved.
          </div>
        </div>
        
        <div className="flex items-center gap-6 text-xs text-[#848e9c]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0ecb81]"></span>
            System Status: Normal
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-white">Cookie Preferences</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
