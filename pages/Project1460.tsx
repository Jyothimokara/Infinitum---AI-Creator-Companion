
import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  CheckCircle2, 
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const dummyGrowthData = [
  { day: '01', subs: 120 }, { day: '02', subs: 140 }, { day: '03', subs: 180 },
  { day: '04', subs: 250 }, { day: '05', subs: 320 }, { day: '06', subs: 450 },
  { day: '07', subs: 480 }, { day: '08', subs: 510 }, { day: '09', subs: 590 },
  { day: '10', subs: 700 }, { day: '11', subs: 820 }, { day: '12', subs: 950 },
  { day: '13', subs: 1100 }, { day: '14', subs: 1200 },
];

const Project1460: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const days = Array.from({ length: daysInMonth(year, month) }, (_, i) => i + 1);
  const padding = Array.from({ length: firstDayOfMonth(year, month) }, (_, i) => i);

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 text-[10px] font-bold rounded uppercase tracking-wider border border-indigo-500/20">4-Year Challenge</span>
            <span className="text-slate-500 text-xs font-medium">Day 142 of 1460</span>
          </div>
          <h2 className="text-3xl font-bold text-white">Project 1460</h2>
          <p className="text-slate-400 mt-1">Track your consistency and watch the compound effect in action.</p>
        </div>
        <div className="flex items-center gap-4 bg-slate-900/50 p-2 rounded-2xl border border-slate-800">
          <div className="text-right px-4">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Global Rank</p>
            <p className="text-xl font-bold text-white">#1,240</p>
          </div>
          <div className="h-10 w-[1px] bg-slate-800"></div>
          <div className="text-right px-4">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Consistency</p>
            <p className="text-xl font-bold text-emerald-400">98%</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar View */}
        <div className="lg:col-span-2 glass p-8 rounded-3xl border border-slate-800/50 shadow-2xl">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <CalendarIcon className="text-indigo-500" />
              {monthName} {year}
            </h3>
            <div className="flex gap-2">
              <button onClick={prevMonth} className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-slate-400 hover:text-white">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextMonth} className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-slate-400 hover:text-white">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-4 mb-4">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => (
              <div key={d} className="text-[10px] text-center font-bold text-slate-500 tracking-widest">{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-4">
            {padding.map(i => <div key={`p-${i}`} className="h-20 lg:h-24"></div>)}
            {days.map(d => {
              const isToday = d === new Date().getDate() && month === new Date().getMonth();
              const hasActivity = d % 3 === 0 || d % 5 === 0;
              return (
                <div 
                  key={d} 
                  className={`relative group h-20 lg:h-24 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-center gap-1
                  ${isToday ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30' : 'bg-slate-900/30 border-slate-800/50 hover:border-indigo-500/30 text-slate-400 hover:text-slate-200'}`}
                >
                  <span className={`text-sm font-bold ${isToday ? 'text-white' : ''}`}>{d}</span>
                  {hasActivity && !isToday && (
                    <div className="flex gap-1 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                    </div>
                  )}
                  {isToday && <div className="text-[8px] font-bold uppercase tracking-widest mt-1 opacity-80">TODAY</div>}
                  
                  {/* Tooltip on hover */}
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-slate-800 rounded-lg text-[10px] whitespace-nowrap border border-slate-700 shadow-xl">
                      3 Videos Posted • 4.2k Views
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Side Progress */}
        <div className="space-y-6">
          <div className="glass p-6 rounded-2xl border border-slate-800/50">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Target className="text-amber-500" size={20} />
              Current Milestone
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-end mb-2">
                <p className="text-sm text-slate-400">Road to 10k Subs</p>
                <p className="text-sm font-bold text-white">1,200 / 10,000</p>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-right from-indigo-500 to-violet-500 w-[12%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
              </div>
              <p className="text-[10px] text-slate-500 italic text-center">Estimated completion: December 2024</p>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-slate-800/50">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="text-emerald-500" size={20} />
              Growth Curve
            </h3>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dummyGrowthData}>
                  <Line 
                    type="monotone" 
                    dataKey="subs" 
                    stroke="#10b981" 
                    strokeWidth={2} 
                    dot={false}
                    animationDuration={2000}
                  />
                  <XAxis hide />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '10px' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-slate-500">Day 1</span>
              <span className="text-emerald-400 font-bold">+916% growth</span>
              <span className="text-slate-500">Day 14</span>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-slate-800/50 bg-rose-500/5 border-rose-500/20">
            <h3 className="text-sm font-bold text-rose-400 mb-2 flex items-center gap-2">
              <AlertCircle size={16} />
              Missing Entry
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              You haven't logged metrics for yesterday. Consistency is the secret sauce of Infinite creators.
            </p>
            <button className="mt-4 w-full py-2 bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white border border-rose-500/30 rounded-lg text-xs font-bold transition-all">
              LOG YESTERDAY'S DATA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1460;
