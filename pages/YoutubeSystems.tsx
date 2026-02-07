
import React, { useState } from 'react';
import { 
  Youtube, 
  Search, 
  Zap, 
  Layers, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  Play,
  Copy,
  Check
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const YoutubeSystems: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleAnalyze = async () => {
    if (!videoUrl) return;
    setIsAnalyzing(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: (process.env as any).API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analyze this YouTube video concept/url: ${videoUrl}. 
        Provide a strategic breakdown including: 
        1. Retention Hooks
        2. Content Structure
        3. Viral Potential Rating (1-10)
        4. Optimization Tips for CTR.
        Format as clear Markdown.`,
      });
      setAnalysisResult(response.text || "Analysis failed to generate.");
    } catch (error) {
      console.error(error);
      setAnalysisResult("Error connecting to AI. Please verify the URL and try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleCopy = () => {
    if (analysisResult) {
      navigator.clipboard.writeText(analysisResult);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <Youtube className="text-rose-500" />
          YouTube Systems
        </h2>
        <p className="text-slate-400 mt-1">AI-powered tools for video strategy and community management.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Analyzer */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass p-8 rounded-3xl border border-slate-800/50 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500/20 via-indigo-500 to-rose-500/20"></div>
            <h3 className="text-xl font-bold text-white mb-6">Video Intelligence Analyzer</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                <input 
                  type="text" 
                  placeholder="Paste YouTube Video URL or Topic..." 
                  className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100 focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 transition-all"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                />
              </div>
              <button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="px-8 py-4 bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-rose-600/20"
              >
                {isAnalyzing ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Zap size={18} />
                    Analyze
                  </>
                )}
              </button>
            </div>
            
            {!analysisResult && !isAnalyzing && (
              <div className="mt-12 flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-600 mb-4">
                  <Play size={40} />
                </div>
                <p className="text-slate-500 text-sm max-w-xs">Enter a video URL above to get an AI breakdown of its viral components.</p>
              </div>
            )}

            {analysisResult && (
              <div className="mt-8 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl relative">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xs font-bold text-rose-400 uppercase tracking-widest flex items-center gap-2">
                    <Sparkles size={14} />
                    AI Intelligence Report
                  </h4>
                  <button onClick={handleCopy} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-all">
                    {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>
                <div className="prose prose-invert prose-rose max-w-none text-sm text-slate-300 whitespace-pre-wrap">
                  {analysisResult}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-3xl border border-slate-800/50 group hover:border-emerald-500/30 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <Layers size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Chapter Generator</h4>
              <p className="text-sm text-slate-400">Automate timestamps and chapter descriptions for your uploads.</p>
              <ArrowRight className="mt-6 text-slate-600 group-hover:text-emerald-400 transition-colors" />
            </div>
            <div className="glass p-6 rounded-3xl border border-slate-800/50 group hover:border-sky-500/30 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Comment Scraper</h4>
              <p className="text-sm text-slate-400">Identify pain points and content ideas from your audience.</p>
              <ArrowRight className="mt-6 text-slate-600 group-hover:text-sky-400 transition-colors" />
            </div>
          </div>
        </div>

        {/* Sidebar: History/Stats */}
        <div className="space-y-6">
          <div className="glass p-6 rounded-3xl border border-slate-800/50">
            <h3 className="text-lg font-bold text-white mb-6">Recent Reports</h3>
            <div className="space-y-4">
              {[
                { title: 'The Future of AI Coding', date: '2h ago', score: '9.2' },
                { title: '10x Your Productivity', date: '1d ago', score: '7.5' },
                { title: 'Desk Setup Tour', date: '3d ago', score: '6.8' },
              ].map((report, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer">
                  <div>
                    <p className="text-sm font-bold text-slate-200">{report.title}</p>
                    <p className="text-[10px] text-slate-500">{report.date}</p>
                  </div>
                  <div className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">
                    {report.score}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-900/30 border border-indigo-500/20">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <Zap size={16} className="text-indigo-400" />
              Creator Advice
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed italic">
              "Your retention typically drops at the 2:15 mark. Try adding a pattern interrupt or a visual reveal at that moment in your next video."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeSystems;
