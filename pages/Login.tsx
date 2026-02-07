
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Infinity, Github, Mail, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { User } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate Auth
    setTimeout(() => {
      const user: User = {
        id: Math.random().toString(36).substring(7),
        email: email || 'creator@infinitum.ai',
        full_name: 'Alpha Creator'
      };
      localStorage.setItem('infinitum_user', JSON.stringify(user));
      onLogin(user);
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen -m-8 flex flex-col lg:flex-row bg-gray-950">
      {/* Visual Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900 border-r border-slate-800">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 blur-[128px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 blur-[128px] rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 w-full flex flex-col justify-center p-20">
          <div className="flex items-center gap-3 mb-12">
            <Infinity className="w-12 h-12 text-indigo-500 animate-float" />
            <h1 className="text-3xl font-bold tracking-tight text-white">INFINITUM</h1>
          </div>
          
          <h2 className="text-5xl font-bold text-white leading-tight mb-6">
            The Command Center for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Infinite</span> Growth.
          </h2>
          <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
            Stop guessing. Start building. Manage your pipeline, track your consistency, and leverage AI to scale your creative output.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-8">
            <div>
              <p className="text-3xl font-bold text-white mb-1">1.2k+</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Creators</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">14M+</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Views Generated</p>
            </div>
          </div>
        </div>

        {/* Decoration */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-950 to-transparent"></div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-20 relative">
        <div className="lg:hidden flex items-center gap-3 mb-12">
          <Infinity className="w-10 h-10 text-indigo-500 animate-float" />
          <h1 className="text-2xl font-bold tracking-tight text-white">INFINITUM</h1>
        </div>

        <div className="w-full max-w-md glass p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Animated accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">{isSignUp ? 'Create Account' : 'Welcome Back'}</h3>
            <p className="text-slate-400 text-sm">Enter your credentials to access the command center.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={20} />
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
                {!isSignUp && <button type="button" className="text-xs text-indigo-400 hover:text-indigo-300">Forgot Password?</button>}
              </div>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={20} />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-900 disabled:opacity-50 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  {isSignUp ? 'Sign Up' : 'Sign In'}
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest"><span className="bg-[#0f172a] px-2 text-slate-500">Or continue with</span></div>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="flex-1 py-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              <Github size={18} className="text-slate-300" />
            </button>
            <button className="flex-1 py-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              <Sparkles size={18} className="text-indigo-400" />
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="ml-2 text-indigo-400 hover:text-indigo-300 font-bold"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
        
        <p className="mt-8 text-xs text-slate-600">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
