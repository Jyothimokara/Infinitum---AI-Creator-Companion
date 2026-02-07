
import React, { useState } from 'react';
import { 
  CircleDollarSign, 
  Play, 
  Settings, 
  FileText, 
  Mail, 
  Linkedin, 
  Zap,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const RevenuePipeline: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    url: '',
    title: '',
    resource: '',
    cta: 'Join Free Community'
  });

  const steps = [
    { id: 1, name: 'Input Source', icon: Play },
    { id: 2, name: 'Configure Strategy', icon: Settings },
    { id: 3, name: 'Generate Assets', icon: Zap },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <CircleDollarSign className="text-emerald-500" />
          Revenue Pipeline
        </h2>
        <p className="text-slate-400 mt-1">Transform YouTube videos into high-converting marketing funnels.</p>
      </header>

      {/* Stepper */}
      <div className="flex items-center gap-4 max-w-2xl">
        {steps.map((s, i) => (
          <React.Fragment key={s.id}>
            <div 
              className={`flex items-center gap-3 px-4 py-2 rounded-xl border transition-all
                ${step === s.id ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/20' : 
                  step > s.id ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-slate-900 border-slate-800 text-slate-500'}
              `}
            >
              {step > s.id ? <CheckCircle2 size={16} /> : <s.icon size={16} />}
              <span className="text-sm font-bold whitespace-nowrap">{s.name}</span>
            </div>
            {i < steps.length - 1 && <div className="h-[1px] flex-1 bg-slate-800"></div>}
          </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {step === 1 && (
            <div className="glass p-8 rounded-3xl border border-slate-800/50 space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-xl font-bold text-white">1. Connect Your Video</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Video URL</label>
                  <input 
                    type="text" 
                    placeholder="https://youtube.com/watch?v=..."
                    className="w-full px-4 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100 focus:outline-none focus:border-indigo-500 transition-all"
                    value={formData.url}
                    onChange={(e) => setFormData({...formData, url: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Target Asset/Resource</label>
                  <input 
                    type="text" 
                    placeholder="e.g. My Productivity Template, Coding Checklist..."
                    className="w-full px-4 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100 focus:outline-none focus:border-indigo-500 transition-all"
                    value={formData.resource}
                    onChange={(e) => setFormData({...formData, resource: e.target.value})}
                  />
                </div>
              </div>
              <button 
                onClick={() => setStep(2)}
                disabled={!formData.url || !formData.resource}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
              >
                Continue to Strategy
                <ArrowRight size={18} />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="glass p-8 rounded-3xl border border-slate-800/50 space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-xl font-bold text-white">2. Conversion Strategy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-400">Campaign Goal</h4>
                  {['Free Community Join', 'Newsletter Signup', 'Direct Sale', 'Appointment Booked'].map((goal) => (
                    <div 
                      key={goal}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between
                        ${formData.cta === goal ? 'bg-indigo-600/10 border-indigo-500 text-indigo-300' : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700'}
                      `}
                      onClick={() => setFormData({...formData, cta: goal})}
                    >
                      <span className="text-sm font-bold">{goal}</span>
                      {formData.cta === goal && <CheckCircle2 size={16} />}
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-400">Tone of Voice</h4>
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
                    <p className="text-xs text-slate-500">The AI will adapt your video transcript into this tone for all outputs.</p>
                    <select className="w-full bg-slate-800 border-none rounded-xl text-sm py-2 px-3 text-slate-200">
                      <option>Professional & Authoritative</option>
                      <option>Casual & Friendly</option>
                      <option>High-Energy & Urgent</option>
                      <option>Scientific & Data-Driven</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-2xl font-bold transition-all"
                >
                  Back
                </button>
                <button 
                  onClick={() => setStep(3)}
                  className="flex-[2] py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20"
                >
                  <Zap size={18} />
                  GENERATE REVENUE ASSETS
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 group hover:border-emerald-500/40 transition-all cursor-pointer">
                  <Mail className="text-emerald-400 mb-4" size={24} />
                  <h4 className="font-bold text-white mb-1">Newsletter Blast</h4>
                  <p className="text-xs text-slate-500">Email ready to send to your list with a strategic hook.</p>
                  <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                    Preview Content <ChevronRight size={12} />
                  </div>
                </div>
                <div className="glass p-6 rounded-3xl border border-sky-500/20 bg-sky-500/5 group hover:border-sky-500/40 transition-all cursor-pointer">
                  <Linkedin className="text-sky-400 mb-4" size={24} />
                  <h4 className="font-bold text-white mb-1">LinkedIn Post</h4>
                  <p className="text-xs text-slate-500">Authority-building post derived from the video insights.</p>
                  <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-sky-400 uppercase tracking-widest">
                    Preview Content <ChevronRight size={12} />
                  </div>
                </div>
                <div className="glass p-6 rounded-3xl border border-indigo-500/20 bg-indigo-500/5 group hover:border-indigo-500/40 transition-all cursor-pointer">
                  <FileText className="text-indigo-400 mb-4" size={24} />
                  <h4 className="font-bold text-white mb-1">Skool Post</h4>
                  <p className="text-xs text-slate-500">Engagement-optimized post for your community.</p>
                  <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                    Preview Content <ChevronRight size={12} />
                  </div>
                </div>
                <div className="glass p-6 rounded-3xl border border-amber-500/20 bg-amber-500/5 group hover:border-amber-500/40 transition-all cursor-pointer">
                  <CircleDollarSign className="text-amber-500 mb-4" size={24} />
                  <h4 className="font-bold text-white mb-1">Sales CTA Script</h4>
                  <p className="text-xs text-slate-500">Direct-response script for the end of your next short.</p>
                  <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                    Preview Content <ChevronRight size={12} />
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setStep(1)}
                className="w-full py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 rounded-2xl font-bold transition-all"
              >
                Create New Pipeline
              </button>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="space-y-6">
          <div className="glass p-6 rounded-3xl border border-slate-800/50">
            <h3 className="font-bold text-white mb-4">Pipeline Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Avg. Generation Time</span>
                <span className="text-slate-200 font-bold">42s</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Assets Per Video</span>
                <span className="text-slate-200 font-bold">4-6</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Conversions Today</span>
                <span className="text-emerald-400 font-bold">+12</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20">
            <h4 className="text-emerald-400 font-bold text-sm mb-2">Pro Tip</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Batch your video processing once a week. Infinitum can generate a month's worth of revenue content in under 10 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenuePipeline;
