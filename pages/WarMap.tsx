
import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Plus, 
  Flame, 
  Clock,
  Target,
  Zap
} from 'lucide-react';

const WarMap: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Film 10 Hook Variations', category: 'Content', completed: true },
    { id: '2', title: 'Supabase Schema Design', category: 'Dev', completed: false },
    { id: '3', title: 'Revenue Pipeline Review', category: 'Planning', completed: false },
  ]);

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  const hours = Array.from({ length: 15 }, (_, i) => i + 5); // 5 AM to 7 PM

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white">War Map</h2>
          <p className="text-slate-400 mt-1">Daily tactical planning and execution command.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2">
            <CalendarIcon size={16} className="text-indigo-400" />
            <span className="text-sm font-medium text-slate-200">{currentDate.toLocaleDateString()}</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 transition-all">
            <Plus size={18} />
            Add Task
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Daily Schedule */}
        <div className="xl:col-span-2 glass rounded-3xl border border-slate-800/50 overflow-hidden">
          <div className="p-6 border-b border-slate-800/50 flex items-center justify-between">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Clock className="text-indigo-400" size={18} />
              Daily Schedule
            </h3>
            <span className="text-xs text-slate-500 font-medium">15 Hours Available</span>
          </div>
          <div className="divide-y divide-slate-800/30">
            {hours.map((hour) => (
              <div key={hour} className="group flex hover:bg-indigo-500/5 transition-colors">
                <div className="w-20 p-4 border-r border-slate-800/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-500">{hour % 12 || 12}:00 {hour < 12 ? 'AM' : 'PM'}</span>
                </div>
                <div className="flex-1 p-4 relative min-h-[60px]">
                  {hour === 9 && (
                    <div className="absolute inset-2 bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-3 flex items-center gap-3">
                      <Zap size={14} className="text-indigo-400" />
                      <span className="text-sm font-medium text-indigo-200">Deep Work: Content Scripting</span>
                    </div>
                  )}
                  {hour === 14 && (
                    <div className="absolute inset-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 flex items-center gap-3">
                      <Target size={14} className="text-emerald-400" />
                      <span className="text-sm font-medium text-emerald-200">Strategy Session: Growth</span>
                    </div>
                  )}
                  <div className="opacity-0 group-hover:opacity-100 absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 uppercase font-bold tracking-widest cursor-pointer hover:text-indigo-400 transition-all">
                    + Log Activity
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Tasks & Goals */}
        <div className="space-y-8">
          {/* Main Focus */}
          <div className="glass p-6 rounded-3xl border border-slate-800/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/20 transition-all"></div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Flame className="text-amber-500" size={20} />
              Today's Main Focus
            </h3>
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <p className="text-sm text-slate-300 leading-relaxed font-medium italic">
                "Complete the Revenue Pipeline engine and verify data flow from YouTube analyzer."
              </p>
            </div>
          </div>

          {/* Quick Tasks */}
          <div className="glass p-6 rounded-3xl border border-slate-800/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Tactical Tasks</h3>
              <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-bold">3 REMAINING</span>
            </div>
            <div className="space-y-3">
              {tasks.map((task) => (
                <div 
                  key={task.id} 
                  className={`flex items-center gap-3 p-3 rounded-2xl border transition-all cursor-pointer
                    ${task.completed ? 'bg-slate-900/30 border-slate-800/30 opacity-60' : 'bg-slate-800/30 border-slate-700/30 hover:border-indigo-500/30'}
                  `}
                  onClick={() => {
                    setTasks(tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t));
                  }}
                >
                  {task.completed ? (
                    <CheckCircle2 size={20} className="text-indigo-400" />
                  ) : (
                    <Circle size={20} className="text-slate-600" />
                  )}
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${task.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}>{task.title}</p>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">{task.category}</span>
                  </div>
                </div>
              ))}
              <button className="w-full py-3 border-2 border-dashed border-slate-800 hover:border-indigo-500/30 rounded-2xl text-slate-500 text-xs font-bold uppercase tracking-widest transition-all">
                + New Quick Task
              </button>
            </div>
          </div>

          {/* Daily Rating */}
          <div className="glass p-6 rounded-3xl border border-slate-800/50">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Day Performance</h3>
            <div className="flex justify-between items-center gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button 
                  key={num}
                  className="flex-1 aspect-square rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-500 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all"
                >
                  {num}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 text-center mt-4 italic">Rate your focus and output today.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarMap;
