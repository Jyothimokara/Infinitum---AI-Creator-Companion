
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Kanban, 
  TrendingUp, 
  Map, 
  Youtube, 
  Linkedin, 
  CircleDollarSign,
  LogOut, 
  Menu, 
  X,
  Infinity,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { User } from '../types';

interface SidebarProps {
  user: User;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const groups = [
    {
      title: 'CORE',
      items: [
        { name: 'Dashboard', path: '/', icon: LayoutDashboard },
        { name: 'Command Center', path: '/command-center', icon: Kanban },
      ]
    },
    {
      title: 'GROWTH',
      items: [
        { name: 'Project 1460', path: '/project-1460', icon: TrendingUp },
        { name: 'War Map', path: '/war-map', icon: Map },
      ]
    },
    {
      title: 'ENGINES',
      items: [
        { name: 'YouTube Systems', path: '/youtube-systems', icon: Youtube },
        { name: 'LinkedIn Systems', path: '/linkedin-systems', icon: Linkedin },
        { name: 'Revenue Pipeline', path: '/revenue-pipeline', icon: CircleDollarSign },
      ]
    }
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) => `
    flex items-center justify-between px-3 py-2 rounded-xl transition-all duration-200 group
    ${isActive 
      ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.05)]' 
      : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}
  `;

  return (
    <>
      <button 
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 glass border-r border-slate-800/50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-indigo-500 rounded-full blur opacity-25 animate-pulse"></div>
                <Infinity className="w-10 h-10 text-indigo-500 relative animate-float" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white leading-tight">INFINITUM</h1>
                <p className="text-[10px] uppercase tracking-widest text-indigo-400/80 font-semibold">AI Companion</p>
              </div>
            </div>

            <nav className="space-y-6">
              {groups.map((group) => (
                <div key={group.title} className="space-y-1">
                  <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">{group.title}</h3>
                  {group.items.map((item) => (
                    <NavLink 
                      key={item.path} 
                      to={item.path} 
                      className={navLinkClass}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={18} className="group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </NavLink>
                  ))}
                </div>
              ))}
            </nav>
          </div>

          <div className="mt-auto p-4 space-y-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-900/40 to-violet-900/40 border border-indigo-500/20">
              <div className="flex items-center gap-2 mb-2 text-indigo-300 text-sm font-medium">
                <Sparkles size={14} />
                <span>Infinity Pro</span>
              </div>
              <button className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-xs font-bold transition-all shadow-lg shadow-indigo-500/20">
                UPGRADE
              </button>
            </div>

            <div className="pt-4 border-t border-slate-800/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-xs">
                  {user.email.charAt(0).toUpperCase()}
                </div>
                <div className="max-w-[110px]">
                  <p className="text-xs font-medium text-slate-200 truncate">{user.email.split('@')[0]}</p>
                  <p className="text-[10px] text-slate-500 truncate">Creator Tier</p>
                </div>
              </div>
              <button 
                onClick={handleLogoutClick}
                className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
              >
                <LogOut size={16} />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
