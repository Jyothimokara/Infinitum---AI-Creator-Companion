
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import CommandCenter from './pages/CommandCenter';
import Project1460 from './pages/Project1460';
import WarMap from './pages/WarMap';
import YoutubeSystems from './pages/YoutubeSystems';
import LinkedInSystems from './pages/LinkedInSystems';
import RevenuePipeline from './pages/RevenuePipeline';
import Login from './pages/Login';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const mockUser = localStorage.getItem('infinitum_user');
    if (mockUser) {
      setUser(JSON.parse(mockUser));
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('infinitum_user');
    setUser(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-indigo-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!user && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-gray-950 text-slate-100 selection:bg-indigo-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-900/10 blur-[120px] rounded-full animate-pulse delay-700"></div>
      </div>

      {user && <Sidebar user={user} onLogout={handleLogout} />}
      
      <main className={`flex-1 overflow-auto transition-all duration-300 ${user ? 'lg:pl-64' : ''}`}>
        <div className="p-4 lg:p-8 max-w-7xl mx-auto min-h-screen relative z-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/command-center" element={<CommandCenter />} />
            <Route path="/project-1460" element={<Project1460 />} />
            <Route path="/war-map" element={<WarMap />} />
            <Route path="/youtube-systems" element={<YoutubeSystems />} />
            <Route path="/linkedin-systems" element={<LinkedInSystems />} />
            <Route path="/revenue-pipeline" element={<RevenuePipeline />} />
            <Route path="/login" element={<Login onLogin={(u) => setUser(u)} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
