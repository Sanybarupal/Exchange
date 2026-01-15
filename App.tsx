
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Markets from './pages/Markets.tsx';
import Trade from './pages/Trade.tsx';
import Wallet from './pages/Wallet.tsx';
import KYC from './pages/KYC.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Support from './pages/Support.tsx';
import About from './pages/About.tsx';
import TermsPrivacy from './pages/TermsPrivacy.tsx';

// Professional Placeholder for Secondary Pages
const PlaceholderPage: React.FC<{ title: string; category: string }> = ({ title, category }) => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-[#0b0e11]">
    <div className="w-20 h-20 bg-[#f0b90b]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#f0b90b]/20">
      <span className="text-3xl text-[#f0b90b]">⚡</span>
    </div>
    <div className="text-xs uppercase tracking-widest text-[#848e9c] mb-2">{category}</div>
    <h1 className="text-3xl font-bold mb-4 text-white">{title}</h1>
    <p className="text-[#848e9c] max-w-md mx-auto mb-8">
      We are currently optimizing the {title} interface for a better trading experience. Stay tuned for the update!
    </p>
    <button onClick={() => window.history.back()} className="bg-[#2b3139] hover:bg-[#363c44] px-8 py-2.5 rounded font-bold text-sm transition-colors border border-[#474d57]">
      Return to previous page
    </button>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0b0e11] text-[#eaecef]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* PUBLIC & AUTH */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<PlaceholderPage title="Forgot Password" category="Auth" />} />
            <Route path="/2fa" element={<PlaceholderPage title="Two-Factor Authentication" category="Security" />} />
            
            {/* TRADING */}
            <Route path="/markets" element={<Markets />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/p2p" element={<PlaceholderPage title="P2P Trading" category="Trading" />} />
            <Route path="/futures" element={<PlaceholderPage title="Futures Trading" category="Trading" />} />
            <Route path="/margin" element={<PlaceholderPage title="Margin Trading" category="Trading" />} />
            <Route path="/convert" element={<PlaceholderPage title="Crypto Convert" category="Trading" />} />
            <Route path="/bots" element={<PlaceholderPage title="Trading Bots" category="Trading" />} />
            <Route path="/copy-trading" element={<PlaceholderPage title="Copy Trading" category="Trading" />} />
            
            {/* USER DASHBOARD & WALLET */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/wallet/spot" element={<Wallet />} />
            <Route path="/wallet/futures" element={<PlaceholderPage title="Futures Wallet" category="Wallet" />} />
            <Route path="/wallet/margin" element={<PlaceholderPage title="Margin Wallet" category="Wallet" />} />
            <Route path="/deposit" element={<PlaceholderPage title="Deposit Crypto" category="Finance" />} />
            <Route path="/withdraw" element={<PlaceholderPage title="Withdraw Crypto" category="Finance" />} />
            
            {/* EARN & INVESTMENT */}
            <Route path="/earn" element={<PlaceholderPage title="BinEx Earn" category="Investment" />} />
            <Route path="/launchpad" element={<PlaceholderPage title="Launchpad" category="Investment" />} />
            <Route path="/staking" element={<PlaceholderPage title="Staking" category="Investment" />} />
            
            {/* ACCOUNT & SECURITY */}
            <Route path="/kyc" element={<KYC />} />
            <Route path="/security" element={<PlaceholderPage title="Security Settings" category="Account" />} />
            <Route path="/api-management" element={<PlaceholderPage title="API Management" category="Account" />} />
            <Route path="/referral" element={<PlaceholderPage title="Referral Program" category="Account" />} />
            <Route path="/vip" element={<PlaceholderPage title="VIP Program" category="Account" />} />
            
            {/* INFO & SUPPORT */}
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/terms" element={<TermsPrivacy />} />
            <Route path="/privacy" element={<TermsPrivacy />} />
            <Route path="/blog" element={<PlaceholderPage title="BinEx Blog" category="Resources" />} />
            <Route path="/careers" element={<PlaceholderPage title="Careers" category="Company" />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Global Floating Chat */}
        <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#f0b90b] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-[100]">
          <span className="text-2xl">💬</span>
        </button>
      </div>
    </Router>
  );
};

export default App;
