
import React from 'react';

const TermsPrivacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Terms & Privacy</h1>
        <p className="text-[#848e9c]">Last updated: May 2024</p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-[#f0b90b] mb-4">1. Agreement to Terms</h2>
          <div className="space-y-4 text-[#848e9c] leading-relaxed">
            <p>By accessing or using BinEx (the "Platform"), you agree to be bound by these Terms of Service. If you do not agree, you must not access the Platform.</p>
            <p>BinEx provides a platform for trading digital assets. Trading involves significant risk. You are responsible for any losses incurred while trading on the platform.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#f0b90b] mb-4">2. Privacy Policy</h2>
          <div className="space-y-4 text-[#848e9c] leading-relaxed">
            <p>We value your privacy. We collect personal information only to provide the services you request and to comply with regulatory requirements (KYC/AML).</p>
            <p>Your data is encrypted and stored securely. We do not sell your personal data to third parties. We may share data with law enforcement agencies if required by valid legal process.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#f0b90b] mb-4">3. Prohibited Activities</h2>
          <div className="space-y-4 text-[#848e9c] leading-relaxed">
            <p>Users are strictly prohibited from using the platform for money laundering, terrorist financing, or any other illegal activities.</p>
            <p>Multiple accounts, market manipulation, and the use of unauthorized bots are grounds for immediate account suspension.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#f0b90b] mb-4">4. Limitation of Liability</h2>
          <div className="space-y-4 text-[#848e9c] leading-relaxed">
            <p>BinEx shall not be liable for any damages arising from market volatility, platform downtime, or unauthorized access to your account due to your failure to secure your login credentials.</p>
          </div>
        </section>
      </div>
      
      <div className="mt-20 pt-10 border-t border-[#2b3139] text-center">
        <p className="text-sm text-[#848e9c]">Have questions? <a href="#/support" className="text-[#f0b90b] hover:underline">Contact our legal team</a></p>
      </div>
    </div>
  );
};

export default TermsPrivacy;
