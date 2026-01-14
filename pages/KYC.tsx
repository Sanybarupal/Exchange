
import React, { useState } from 'react';
import { KYCStep } from '../types';
import { ICONS } from '../constants';

const KYC: React.FC = () => {
  const [step, setStep] = useState<KYCStep>(KYCStep.INFO);

  const handleNext = () => {
    if (step === KYCStep.INFO) setStep(KYCStep.DOCUMENT);
    else if (step === KYCStep.DOCUMENT) setStep(KYCStep.STATUS);
  };

  return (
    <div className="max-w-2xl mx-auto px-8 py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Identity Verification</h1>
        <p className="text-[#848e9c]">Complete the steps below to unlock all trading features and higher limits.</p>
      </div>

      {/* Stepper */}
      <div className="flex items-center mb-12">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${step === KYCStep.INFO ? 'bg-[#f0b90b] text-[#0b0e11]' : 'bg-[#2b3139] text-[#848e9c]'}`}>1</div>
        <div className="flex-1 h-1 bg-[#2b3139] mx-4">
          <div className={`h-full bg-[#f0b90b] transition-all duration-300 ${step !== KYCStep.INFO ? 'w-full' : 'w-0'}`}></div>
        </div>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${step === KYCStep.DOCUMENT ? 'bg-[#f0b90b] text-[#0b0e11]' : step === KYCStep.STATUS ? 'bg-[#f0b90b] text-[#0b0e11]' : 'bg-[#2b3139] text-[#848e9c]'}`}>2</div>
        <div className="flex-1 h-1 bg-[#2b3139] mx-4">
          <div className={`h-full bg-[#f0b90b] transition-all duration-300 ${step === KYCStep.STATUS ? 'w-full' : 'w-0'}`}></div>
        </div>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${step === KYCStep.STATUS ? 'bg-[#f0b90b] text-[#0b0e11]' : 'bg-[#2b3139] text-[#848e9c]'}`}>3</div>
      </div>

      <div className="bg-[#1e2329] p-8 rounded-2xl border border-[#2b3139]">
        {step === KYCStep.INFO && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-[#848e9c]">First Name</label>
                <input type="text" className="w-full bg-[#2b3139] border border-[#474d57] rounded px-4 py-2 text-sm outline-none focus:border-[#f0b90b]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-[#848e9c]">Last Name</label>
                <input type="text" className="w-full bg-[#2b3139] border border-[#474d57] rounded px-4 py-2 text-sm outline-none focus:border-[#f0b90b]" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[#848e9c]">Date of Birth</label>
              <input type="date" className="w-full bg-[#2b3139] border border-[#474d57] rounded px-4 py-2 text-sm outline-none focus:border-[#f0b90b]" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[#848e9c]">Address</label>
              <input type="text" className="w-full bg-[#2b3139] border border-[#474d57] rounded px-4 py-2 text-sm outline-none focus:border-[#f0b90b]" />
            </div>
            <button onClick={handleNext} className="w-full bg-[#f0b90b] text-[#0b0e11] font-bold py-3 rounded hover:bg-[#e2ad0a] transition-all">
              Continue
            </button>
          </div>
        )}

        {step === KYCStep.DOCUMENT && (
          <div className="space-y-6 text-center">
            <h2 className="text-xl font-bold">Document Upload</h2>
            <p className="text-sm text-[#848e9c]">Please upload a clear photo of your Passport or National ID card.</p>
            <div className="border-2 border-dashed border-[#474d57] rounded-xl py-12 flex flex-col items-center justify-center gap-4 bg-[#2b3139]/30">
               <ICONS.Upload className="w-12 h-12 text-[#848e9c]" />
               <div className="text-sm">Drag and drop or <span className="text-[#f0b90b] cursor-pointer">browse</span></div>
               <input type="file" className="hidden" />
               <p className="text-xs text-[#848e9c]">Supported formats: JPG, PNG (Max 5MB)</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => setStep(KYCStep.INFO)} className="flex-1 bg-transparent border border-[#474d57] py-3 rounded font-bold">Back</button>
              <button onClick={handleNext} className="flex-1 bg-[#f0b90b] text-[#0b0e11] font-bold py-3 rounded">Submit for Review</button>
            </div>
          </div>
        )}

        {step === KYCStep.STATUS && (
          <div className="text-center py-8 space-y-6">
            <div className="w-20 h-20 bg-[#f0b90b]/10 rounded-full flex items-center justify-center mx-auto">
              <ICONS.Shield className="w-10 h-10 text-[#f0b90b]" />
            </div>
            <h2 className="text-2xl font-bold">In Review</h2>
            <p className="text-[#848e9c]">Our team is currently verifying your documents. This process usually takes 24-48 hours. We'll notify you via email once completed.</p>
            <button onClick={() => window.location.hash = '#/dashboard'} className="bg-[#f0b90b] text-[#0b0e11] font-bold px-8 py-3 rounded">Go to Dashboard</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default KYC;
