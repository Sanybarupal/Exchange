
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
    <footer className="bg-[#1e2329] border-t border-[#2b3139] pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
        <FooterSection title="About Us" links={[
          { name: 'About BinEx', path: '/about' },
          { name: 'Careers', path: '/careers' },
          { name: 'Business Contacts', path: '/support' },
          { name: 'Community', path: '/about' },
          { name: 'BinEx Blog', path: '/blog' },
          { name: 'Terms', path: '/terms' },
          { name: 'Privacy', path: '/privacy' },
          { name: 'Announcements', path: '/blog' },
          { name: 'News', path: '/blog' },
        ]} />

        <FooterSection title="Products" links={[
          { name: 'Exchange', path: '/trade' },
          { name: 'Academy', path: '/academy' },
          { name: 'Charity', path: '/charity' },
          { name: 'Card', path: '/buy-card' },
          { name: 'Labs', path: '/about' },
          { name: 'Launchpad', path: '/launchpad' },
          { name: 'Research', path: '/about' },
          { name: 'NFT Marketplace', path: '/nft' },
          { name: 'BinEx Pay', path: '/pay' },
        ]} />

        <FooterSection title="Services" links={[
          { name: 'Buy Crypto', path: '/deposit' },
          { name: 'Institutional Services', path: '/vip' },
          { name: 'OTC Trading', path: '/p2p' },
          { name: 'Referral Program', path: '/referral' },
          { name: 'Affiliate', path: '/referral' },
          { name: 'Listing Application', path: '/support' },
          { name: 'P2P Merchant', path: '/p2p' },
        ]} />

        <FooterSection title="Support" links={[
          { name: 'Help Center', path: '/support' },
          { name: '24/7 Chat Support', path: '/support' },
          { name: 'Submit Request', path: '/support' },
          { name: 'Fees Page', path: '/fees' },
          { name: 'Trading Rules', path: '/trade' },
          { name: 'KYC Verification', path: '/kyc' },
          { name: 'Security Settings', path: '/security' },
        ]} />

        <FooterSection title="Learn" links={[
          { name: 'Learn & Earn', path: '/earn' },
          { name: 'Browse Prices', path: '/markets' },
          { name: 'Bitcoin Price', path: '/trade' },
          { name: 'Ethereum Price', path: '/trade' },
          { name: 'Buy Bitcoin', path: '/deposit' },
          { name: 'Buy Ethereum', path: '/deposit' },
        ]} />

        <div>
          <h3 className="text-white font-bold mb-4 text-sm">Community</h3>
          <div className="flex flex-wrap gap-4 text-[#848e9c]">
            {['Telegram', 'Twitter', 'Facebook', 'Instagram', 'Discord', 'Reddit'].map(social => (
              <a key={social} href="#" className="hover:text-white transition-colors">
                <span className="text-lg">📱</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-[#2b3139] flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[10px] text-[#848e9c]">
          © 2024 BinEx.com. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-[10px] text-[#848e9c]">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#0ecb81] rounded-full"></span>
            System Status: Normal
          </span>
          <Link to="/terms" className="hover:text-white">Cookie Preferences</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
