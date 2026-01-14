
import React from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="bg-[#1e2329] p-8 rounded-2xl border border-[#2b3139] w-full max-w-md shadow-xl">
        <h1 className="text-3xl font-bold mb-2">Create BinEx Account</h1>
        <p className="text-[#848e9c] mb-8">Join the world's most trusted exchange.</p>
        
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#eaecef]">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-[#0b0e11] border border-[#474d57] rounded-lg px-4 py-3 text-sm outline-none focus:border-[#f0b90b] transition-colors"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#eaecef]">Password</label>
            <input 
              type="password" 
              className="w-full bg-[#0b0e11] border border-[#474d57] rounded-lg px-4 py-3 text-sm outline-none focus:border-[#f0b90b] transition-colors"
              placeholder="At least 8 characters"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#eaecef]">Referral ID (Optional)</label>
            <input 
              type="text" 
              className="w-full bg-[#0b0e11] border border-[#474d57] rounded-lg px-4 py-3 text-sm outline-none focus:border-[#f0b90b] transition-colors"
              placeholder="Enter referral ID"
            />
          </div>

          <div className="flex items-start gap-2 mt-4">
            <input type="checkbox" id="terms" className="mt-1 rounded bg-[#0b0e11] border-[#474d57] text-[#f0b90b] focus:ring-[#f0b90b]" />
            <label htmlFor="terms" className="text-xs text-[#848e9c]">
              I have read and agree to the <Link to="/terms" className="text-[#f0b90b] hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-[#f0b90b] hover:underline">Privacy Policy</Link>.
            </label>
          </div>

          <button className="w-full bg-[#f0b90b] text-[#0b0e11] font-bold py-3 rounded-lg hover:bg-[#e2ad0a] transition-all transform active:scale-[0.98]">
            Create Account
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#2b3139] text-center">
          <p className="text-sm text-[#848e9c]">
            Already have an account? <Link to="/login" className="text-[#f0b90b] font-bold hover:underline">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
