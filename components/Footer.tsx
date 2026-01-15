
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const FooterSection = ({ title, links }: { title: string; links: { name: string; path: string }[] }) => (
    <div className="mb-8 lg:mb-0">
      <h3 className="text-white font-bold mb-4 text-sm md:text-base">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link to={link.path} className="text-[#848e9c] hover:text-[#f0b90b] text-xs transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-[#1e2329] pt-20 pb-12 px-4 md:px-8 border-t border-[#2b3139]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 mb-16">
        {/* Community Block */}
        <div className="lg:w-1/4">
          <h3 className="text-white font-bold mb-6 text-sm">Community</h3>
          <div className="grid grid-cols-4 gap-6 text-[#848e9c]">
            <a href="#" className="hover:text-white text-xl">📱</a>
            <a href="#" className="hover:text-white text-xl">🐦</a>
            <a href="#" className="hover:text-white text-xl">💬</a>
            <a href="#" className="hover:text-white text-xl">📘</a>
            <a href="#" className="hover:text-white text-xl">📷</a>
            <a href="#" className="hover:text-white text-xl">👾</a>
            <a href="#" className="hover:text-white text-xl">👽</a>
            <a href="#" className="hover:text-white text-xl">🎬</a>
          </div>
          
          <div className="mt-12 space-y-4">
             <div className="flex items-center gap-2 text-xs text-[#848e9c] cursor-pointer hover:text-white transition-colors">
               <span>🌐 English</span>
             </div>
             <div className="flex items-center gap-2 text-xs text-[#848e9c] cursor-pointer hover:text-white transition-colors">
               <span>💰 USD - $</span>
             </div>
             <div className="flex items-center gap-2 text-xs text-[#848e9c] cursor-pointer hover:text-white transition-colors">
               <span>🌗 Theme</span>
             </div>
          </div>
        </div>

        {/* Link Columns */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <FooterSection title="About Us" links={[
            { name: 'About', path: '/about' },
            { name: 'Careers', path: '/careers' },
            { name: 'Announcements', path: '/blog' },
            { name: 'News', path: '/blog' },
            { name: 'Press', path: '/about' },
            { name: 'Legal', path: '/terms' },
            { name: 'Terms', path: '/terms' },
            { name: 'Privacy', path: '/privacy' },
            { name: 'Building Trust', path: '/about' },
            { name: 'Blog', path: '/blog' },
            { name: 'Community', path: '/about' },
            { name: 'Risk Warning', path: '/terms' },
            { name: 'Notices', path: '/blog' },
            { name: 'Downloads', path: '/download' },
            { name: 'Desktop Application', path: '/download' },
          ]} />

          <FooterSection title="Products" links={[
            { name: 'Exchange', path: '/trade' },
            { name: 'Buy Crypto', path: '/deposit' },
            { name: 'Pay', path: '/pay' },
            { name: 'Crypto Payments', path: '/pay' },
            { name: 'BinEx Junior', path: '/about' },
            { name: 'Academy', path: '/academy' },
            { name: 'Gift Card', path: '/gift-card' },
            { name: 'Launchpad', path: '/launchpad' },
            { name: 'Auto-Invest', path: '/earn' },
            { name: 'ETH Staking', path: '/staking' },
            { name: 'NFT', path: '/nft' },
            { name: 'BABT', path: '/about' },
            { name: 'Research', path: '/about' },
            { name: 'Charity', path: '/charity' },
          ]} />

          <FooterSection title="Business" links={[
            { name: 'P2P Merchant Application', path: '/p2p' },
            { name: 'P2P Pro Merchant Application', path: '/p2p' },
            { name: 'Listing Application', path: '/support' },
            { name: 'Institutional & VIP Services', path: '/vip' },
            { name: 'Labs', path: '/about' },
            { name: 'BinEx Connect', path: '/about' },
          ]} />

          <FooterSection title="Learn" links={[
            { name: 'Learn & Earn', path: '/earn' },
            { name: 'Browse Crypto Prices', path: '/markets' },
            { name: 'Bitcoin Price', path: '/trade' },
            { name: 'Ethereum Price', path: '/trade' },
            { name: 'Browse Crypto Price Predictions', path: '/markets' },
            { name: 'Bitcoin Price Prediction', path: '/markets' },
            { name: 'Ethereum Price Prediction', path: '/markets' },
            { name: 'Ethereum Upgrade (Pectra)', path: '/blog' },
            { name: 'Buy Bitcoin', path: '/deposit' },
            { name: 'Buy BNB', path: '/deposit' },
            { name: 'Buy XRP', path: '/deposit' },
            { name: 'Buy Dogecoin', path: '/deposit' },
            { name: 'Buy Ethereum', path: '/deposit' },
            { name: 'Buy Tradable Altcoins', path: '/deposit' },
          ]} />

          <FooterSection title="Support" links={[
            { name: '24/7 Chat Support', path: '/support' },
            { name: 'Support Center', path: '/support' },
            { name: 'Product Feedback & Suggestions', path: '/support' },
            { name: 'Fees', path: '/fees' },
            { name: 'APIs', path: '/api-management' },
            { name: 'BinEx Verify', path: '/about' },
            { name: 'Trading Rules', path: '/trade' },
            { name: 'BinEx Airdrop Portal', path: '/launchpad' },
            { name: 'Law Enforcement Requests', path: '/support' },
            { name: 'How to Raise a Complaint', path: '/support' },
          ]} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-[#2b3139] text-center lg:text-left">
        <p className="text-[10px] text-[#848e9c] leading-relaxed mb-4">
          BinEx entities are regulated by the Financial Services Regulatory Authority (FSRA) of the Abu Dhabi Global Markets (ADGM) as follows: (1) BinEx Exchange Limited is recognized as a Recognized Investment Exchange (Derivatives), with a permission to Operate a Multilateral Trading Facility; (2) BinEx Clearing and Custody Limited is recognized as a Recognized Clearing House, with a permission to Provide Custody and operating a Central Securities Depository; (3) BinEx Trading Limited is authorized to carry out the following Regulated Activities: (i) Dealing in Investments as Principal; (ii) Dealing in Investments as Agent; (iii) Arranging Deals in Investments; (iv) Managing Assets; (v) Providing Money Services; and (vi) Arranging Custody.
        </p>
        <p className="text-[10px] text-[#848e9c] mb-6">
          Risk Warning: Digital asset prices can be volatile. The value of your investment may go down or up and you may not get back the amount invested. You are solely responsible for your investment decisions and BinEx is not liable for any trading losses you may incur.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#848e9c]">
          <span>BinEx © 2024</span>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-white">Cookie Preferences</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
