
import React, { useState } from 'react';
import { 
  Linkedin, 
  Newspaper, 
  Lightbulb, 
  Sparkles, 
  ArrowRight, 
  Plus, 
  Search,
  ExternalLink,
  Share2,
  Zap
} from 'lucide-react';

const LinkedInSystems: React.FC = () => {
  const [news] = useState([
    { id: '1', title: 'Gemini 2.5 Pro Ultra Released', summary: 'New multimodal capabilities disrupt coding workflows.', source: 'TechCrunch', date: 'Today' },
    { id: '2', title: 'LinkedIn Algo Update: March 2024', summary: 'Engagement pods are being de-prioritized in feeds.', source: 'SocialMediaToday', date: 'Yesterday' },
    { id: '3', title: 'The Rise of AI Agents', summary: 'How autonomous agents are handling creator tasks.', source: 'Wired', date: '2 days ago' },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <Linkedin className="text-sky-500" />
            LinkedIn Systems
          </h2>
          <p className="text-slate-400 mt-1">Scale your professional authority with AI-driven news and ideas.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold shadow-lg shadow-sky-600/20 transition-all">
          <Plus size={18} />
          Add News Source
        </button>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* News Feed */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Newspaper size={20} className="text-sky-400" />
              AI & Tech News
            </h3>
            <div className="flex gap-2">
              <button className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-sky-400 transition-all">
                <Search size={16} />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {news.map((item) => (
              <div key={item.id} className="glass p-6 rounded-3xl border border-slate-800/50 group hover:border-sky-500/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-2 py-1 rounded">
                    {item.source}
                  </span>
                  <span className="text-xs text-slate-500">{item.date}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{item.summary}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 transition-all">
                    <Sparkles size={14} />
                    GENERATE IDEAS
                  </button>
                  <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-300 transition-all ml-auto">
                    <ExternalLink size={14} />
                    READ FULL
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Idea Dashboard */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Lightbulb size={20} className="text-amber-500" />
              Strategic Ideas
            </h3>
          </div>

          <div className="glass rounded-3xl border border-slate-800/50 overflow-hidden divide-y divide-slate-800/30">
            {[
              { title: 'The Gemini Paradigm Shift', type: 'Thought Leadership', posts: 3, status: 'Ready' },
              { title: 'Why Creators Fail in 2024', type: 'Contrarian', posts: 1, status: 'Drafting' },
              { title: 'My Daily Creator Workflow', type: 'educational', posts: 5, status: 'Ready' },
            ].map((idea, i) => (
              <div key={i} className="p-6 flex items-center justify-between group hover:bg-slate-800/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-amber-500 transition-all">
                    <Share2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{idea.title}</h4>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{idea.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-xs font-bold text-white">{idea.posts} Posts</p>
                    <p className="text-[10px] text-slate-500 uppercase">{idea.status}</p>
                  </div>
                  <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-500 hover:text-white transition-all">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State / CTA */}
          <div className="p-8 border-2 border-dashed border-slate-800 rounded-3xl flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-slate-700 mb-4">
              {/* Added Zap to the imports above */}
              <Zap size={32} />
            </div>
            <h4 className="text-slate-200 font-bold mb-2">Build a Strategy</h4>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Use the AI to analyze your recent news sources and generate a 14-day LinkedIn content strategy.
            </p>
            <button className="mt-6 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all">
              START BATCH GENERATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInSystems;
