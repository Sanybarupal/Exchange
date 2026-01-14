
import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="bg-[#1e2329] p-8 rounded-2xl border border-[#2b3139] w-full max-w-md shadow-xl">
        <h1 className="text-3xl font-bold mb-2">BinEx Login</h1>
        <p className="text-[#848e9c] mb-8">Welcome back! Please enter your details.</p>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#eaecef]">Email / Phone</label>
            <input 
              type="text" 
              className="w-full bg-[#0b0e11] border border-[#474d57] rounded-lg px-4 py-3 text-sm outline-none focus:border-[#f0b90b] transition-colors"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-[#eaecef]">Password</label>
              <Link to="/support" className="text-xs text-[#f0b90b] hover:underline">Forgot password?</Link>
            </div>
            <input 
              type="password" 
              className="w-full bg-[#0b0e11] border border-[#474d57] rounded-lg px-4 py-3 text-sm outline-none focus:border-[#f0b90b] transition-colors"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="rounded bg-[#0b0e11] border-[#474d57] text-[#f0b90b] focus:ring-[#f0b90b]" />
            <label htmlFor="remember" className="text-xs text-[#848e9c]">Remember me</label>
          </div>

          <button className="w-full bg-[#f0b90b] text-[#0b0e11] font-bold py-3 rounded-lg hover:bg-[#e2ad0a] transition-all transform active:scale-[0.98]">
            Log In
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#2b3139] text-center">
          <p className="text-sm text-[#848e9c]">
            Don't have an account? <Link to="/register" className="text-[#f0b90b] font-bold hover:underline">Register Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
