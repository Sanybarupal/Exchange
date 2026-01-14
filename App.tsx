
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Markets from './pages/Markets';
import Trade from './pages/Trade';
import Wallet from './pages/Wallet';
import KYC from './pages/KYC';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import About from './pages/About';
import TermsPrivacy from './pages/TermsPrivacy';

const ComingSoon: React.FC<{ title: string }> = ({ title }) => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center">
    <div className="w-24 h-24 bg-[#f0b90b]/10 rounded-full flex items-center justify-center mb-6">
      <span className="text-4xl">🏗️</span>
    </div>
    <h1 className="text-3xl font-bold mb-2">{title}</h1>
    <p className="text-[#848e9c]">This feature is currently under development.</p>
    <button onClick={() => window.history.back()} className="mt-8 text-[#f0b90b] hover:underline">Go Back</button>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0b0e11] text-[#eaecef]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/terms" element={<TermsPrivacy />} />
            <Route path="/privacy" element={<TermsPrivacy />} />

            {/* User Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/kyc" element={<KYC />} />
            
            {/* Placedholders for more advanced sections */}
            <Route path="/orders" element={<ComingSoon title="Open Orders" />} />
            <Route path="/order-history" element={<ComingSoon title="Order History" />} />
            <Route path="/profile" element={<ComingSoon title="User Profile" />} />
            <Route path="/security" element={<ComingSoon title="Security Settings" />} />
            <Route path="/api-keys" element={<ComingSoon title="API Management" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
