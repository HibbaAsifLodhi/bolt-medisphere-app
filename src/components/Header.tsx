import React from 'react';
import { Menu, Languages, ShieldAlert, ExternalLink, Bell } from 'lucide-react';
import { ROUTE_MAP } from '../data/mockData.ts';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onToggleSidebar: () => void;
  onToggleViewMode: () => void;
  unreadCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onToggleSidebar,
  onToggleViewMode,
  unreadCount = 2
}) => {
  const currentMeta = ROUTE_MAP.get(currentRoute);
  const currentTitle = currentMeta ? currentMeta.title : 'Home Dashboard';

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 flex-shrink-0 z-20">
      <div className="flex items-center space-x-3">
        <button
          onClick={onToggleSidebar}
          aria-label="Toggle navigation menu"
          className="md:hidden text-slate-600 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-slate-400 font-bold tracking-wider hidden sm:inline text-xs">MEDISPHERE</span>
          <span className="text-slate-300 hidden sm:inline">/</span>
          <span className="font-extrabold text-slate-900 truncate max-w-[200px] sm:max-w-xs">{currentTitle}</span>
        </div>
      </div>

      {/* Right Quick Controls */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Urdu Quick Toggle */}
        <button
          onClick={() => onNavigate('multilingual-urdu')}
          aria-label="Urdu and English language toggle"
          className="px-2.5 py-1 text-xs font-urdu font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg hover:bg-emerald-100 flex items-center space-x-1.5 transition"
        >
          <Languages className="w-3.5 h-3.5" />
          <span>اردو / EN</span>
        </button>

        {/* Fast SOS Launcher */}
        <button
          onClick={() => onNavigate('emergency-sos')}
          aria-label="Rescue 1122 emergency SOS launcher"
          className="bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center space-x-1.5 transition shadow-xs"
        >
          <ShieldAlert className="w-4 h-4 text-red-600 animate-pulse" />
          <span className="hidden sm:inline font-black">1122 SOS</span>
        </button>

        {/* Public Portal Switcher */}
        <button
          onClick={onToggleViewMode}
          aria-label="Switch between app and public portal"
          className="text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Public Portal</span>
        </button>

        {/* Notification Bell */}
        <button
          onClick={() => onNavigate('notifications-reminders')}
          aria-label="Notifications"
          className="relative p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition"
        >
          <Bell className="w-4 h-4" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-600 ring-2 ring-white"></span>
          )}
        </button>
      </div>
    </header>
  );
};
