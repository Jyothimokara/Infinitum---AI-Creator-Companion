
import React from 'react';
import { 
  Users, 
  Eye, 
  DollarSign, 
  Clock, 
  ArrowUpRight, 
  Calendar as CalendarIcon,
  Zap
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';

const growthData = [
  { name: 'Mon', views: 4000, subs: 240 },
  { name: 'Tue', views: 3000, subs: 198 },
  { name: 'Wed', views: 5000, subs: 450 },
  { name: 'Thu', views: 7800, subs: 1200 },
  { name: 'Fri', views: 4800, subs: 890 },
  { name: 'Sat', views: 6000, subs: 1100 },
  { name: 'Sun', views: 9000, subs: 1500 },
];

const platformData = [
  { name: 'YouTube', value: 45, color: '#f43f5e' },
  { name: 'TikTok', value: 30, color: '#2dd4bf' },
  { name: 'Twitter', value: 15, color: '#38bdf8' },
  { name: 'LinkedIn', value: 10, color: '#818cf8' },
];

const contentStageData = [
  { name: 'Idea', count: 12 },
  { name: 'Writing', count: 8 },
  { name: 'Design', count: 4 },
  { name: 'Film', count: 6 },
  { name: 'Edit', count: 9 },
  { name: 'Publish', count: 34 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white">Creator Dashboard</h2>
          <p className="text-slate-400 mt-1">Welcome back. Here's your channel overview for the last 7 days.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 text-sm font-medium hover:bg-slate-800 transition-colors">
            <CalendarIcon size={16} />
            Last 7 Days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 transition-all">
            <Zap size={16} />
            Generate Strategy
          </button>
        </div>
      </header>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Views', value: '42.8K', icon: Eye, change: '+12.5%', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
          { label: 'Subscribers', value: '1.2K', icon: Users, change: '+5.2%', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          { label: 'Est. Revenue', value: '$840.00', icon: DollarSign, change: '+8.1%', color: 'text-amber-400', bg: 'bg-amber-500/10' },
          { label: 'Avg. Retention', value: '4:12', icon: Clock, change: '-2.4%', color: 'text-rose-400', bg: 'bg-rose-500/10' },
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-2xl border border-slate-800/50 hover:border-slate-700/50 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                {stat.change}
                <ArrowUpRight size={12} className={stat.change.startsWith('+') ? '' : 'rotate-90'} />
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
            <h3 className="text-2xl font-bold text-white group-hover:scale-105 transition-transform origin-left">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass p-6 rounded-2xl border border-slate-800/50">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-white">Views Growth</h3>
            <div className="flex gap-2">
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                Views
              </span>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                  itemStyle={{ color: '#818cf8' }}
                />
                <Area type="monotone" dataKey="views" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass p-6 rounded-2xl border border-slate-800/50">
          <h3 className="text-lg font-bold text-white mb-8">Platform Distribution</h3>
          <div className="h-[240px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {platformData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-2xl border border-slate-800/50">
          <h3 className="text-lg font-bold text-white mb-6">Content Funnel</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={contentStageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                />
                <Bar dataKey="count" fill="#818cf8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass p-6 rounded-2xl border border-slate-800/50">
          <h3 className="text-lg font-bold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { type: 'content', title: 'Viral Hook Ideas', time: '2 hours ago', status: 'Draft' },
              { type: 'metric', title: 'Subscriber Milestone: 1K', time: '5 hours ago', status: 'Goal' },
              { type: 'content', title: 'Why I left my Job', time: '1 day ago', status: 'Published' },
              { type: 'strategy', title: 'TikTok Revamp Strategy', time: '2 days ago', status: 'New' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-200">{activity.title}</h4>
                    <p className="text-xs text-slate-500">{activity.time}</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
