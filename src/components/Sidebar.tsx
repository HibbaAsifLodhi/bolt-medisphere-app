import React, { useState, useMemo } from 'react';
import {
  Activity,
  Search,
  ChevronRight,
  Shield,
  LayoutDashboard,
  User,
  Users,
  Settings,
  Lock,
  Key,
  Bell,
  HelpCircle,
  ShieldAlert,
  FileText,
  PhoneCall,
  AlertTriangle,
  Pill,
  History,
  ShieldCheck,
  ClipboardList,
  FileEdit,
  Receipt,
  TestTube2,
  UploadCloud,
  Bone,
  Layers,
  Scale,
  Calendar,
  Stethoscope,
  Building2,
  Building,
  FlaskConical,
  ShoppingBag,
  Home,
  Video,
  Workflow,
  Printer,
  HeartPulse,
  ClipboardCheck,
  Gauge,
  Frown,
  ListOrdered,
  Dumbbell,
  PlaySquare,
  CheckCircle2,
  LineChart,
  PersonStanding,
  MessageSquare,
  ShieldX,
  Apple,
  Utensils,
  Flame,
  Droplet,
  Footprints,
  Moon,
  Heart,
  BookOpen,
  Bot,
  FileSearch,
  Sparkles,
  CalendarCheck,
  GraduationCap,
  Languages,
  UserCheck,
  Share2,
  Compass,
  MapPin,
  Cast,
  Star,
  BadgeCheck,
  Package,
  Microscope,
  Megaphone,
  HeartHandshake,
  Eye,
  Download,
  Server,
  Map,
  FileCheck,
  Info
} from 'lucide-react';
import { ALL_80_ROUTES } from '../data/mockData.ts';
import { RouteMeta, PatientData } from '../types/index.ts';

// Dynamic icon mapper
const ICON_MAP: Record<string, React.ElementType> = {
  'layout-dashboard': LayoutDashboard,
  'user': User,
  'users': Users,
  'settings': Settings,
  'lock': Lock,
  'key': Key,
  'bell': Bell,
  'help-circle': HelpCircle,
  'shield-alert': ShieldAlert,
  'file-text': FileText,
  'phone-call': PhoneCall,
  'alert-triangle': AlertTriangle,
  'pill': Pill,
  'history': History,
  'shield-check': ShieldCheck,
  'clipboard-list': ClipboardList,
  'file-edit': FileEdit,
  'receipt': Receipt,
  'test-tube-2': TestTube2,
  'upload-cloud': UploadCloud,
  'bone': Bone,
  'layers': Layers,
  'scale': Scale,
  'calendar': Calendar,
  'stethoscope': Stethoscope,
  'activity': Activity,
  'building-2': Building2,
  'building': Building,
  'flask-conical': FlaskConical,
  'shopping-bag': ShoppingBag,
  'home': Home,
  'video': Video,
  'workflow': Workflow,
  'printer': Printer,
  'heart-pulse': HeartPulse,
  'clipboard-check': ClipboardCheck,
  'gauge': Gauge,
  'frown': Frown,
  'list-ordered': ListOrdered,
  'dumbbell': Dumbbell,
  'play-square': PlaySquare,
  'check-circle-2': CheckCircle2,
  'line-chart': LineChart,
  'person-standing': PersonStanding,
  'message-square': MessageSquare,
  'shield-x': ShieldX,
  'apple': Apple,
  'utensils': Utensils,
  'flame': Flame,
  'droplet': Droplet,
  'footprints': Footprints,
  'moon': Moon,
  'heart': Heart,
  'book-open': BookOpen,
  'bot': Bot,
  'file-search': FileSearch,
  'sparkles': Sparkles,
  'calendar-check': CalendarCheck,
  'graduation-cap': GraduationCap,
  'languages': Languages,
  'user-check': UserCheck,
  'share-2': Share2,
  'compass': Compass,
  'map-pin': MapPin,
  'cast': Cast,
  'star': Star,
  'badge-check': BadgeCheck,
  'package': Package,
  'microscope': Microscope,
  'megaphone': Megaphone,
  'heart-handshake': HeartHandshake,
  'eye': Eye,
  'download': Download,
  'server': Server,
  'map': Map,
  'file-check': FileCheck,
  'info': Info
};

interface SidebarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  patient: PatientData;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentRoute,
  onNavigate,
  isOpenMobile,
  onCloseMobile,
  patient
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Group routes
  const filteredRoutes = useMemo(() => {
    if (!searchQuery.trim()) return ALL_80_ROUTES;
    const q = searchQuery.toLowerCase();
    return ALL_80_ROUTES.filter(
      r => r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q) || r.group.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Unique groups from the filtered list
  const groups = useMemo((): [string, RouteMeta[]][] => {
    const acc: Record<string, RouteMeta[]> = {};
    for (const r of filteredRoutes) {
      if (!acc[r.group]) acc[r.group] = [];
      acc[r.group].push(r);
    }
    return Object.entries(acc);
  }, [filteredRoutes]);

  const handleSelectRoute = (route: string) => {
    onNavigate(route);
    if (window.innerWidth < 768) {
      onCloseMobile();
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-slate-900/60 z-30 md:hidden backdrop-blur-xs transition-opacity"
        />
      )}

      <aside
        id="mainSidebar"
        className={`fixed md:static inset-y-0 left-0 w-72 bg-brand-navy text-slate-300 flex flex-col z-40 transition-transform duration-200 ease-in-out border-r border-brand-navyLight ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="p-4 border-b border-brand-navyLight flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black shadow-md">
              <Activity className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h1 className="font-black text-white text-base tracking-tight leading-none flex items-center gap-1.5">
                <span>MEDISPHERE</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  PK-OS
                </span>
              </h1>
              <p className="text-[10px] text-teal-300/80 font-medium tracking-wide mt-1">
                Clinical Health & Rescue 1122
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-3 border-b border-brand-navyLight">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              id="navSearchInput"
              aria-label="Search 79 clinical pages"
              placeholder="Search 79 clinical pages..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/80 text-xs text-white placeholder-slate-400 pl-8 pr-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus:border-teal-500 transition"
            />
          </div>
          {searchQuery && (
            <div className="mt-1 flex items-center justify-between text-[10px] text-teal-300/70 px-1">
              <span>Found: {filteredRoutes.length} pages</span>
              <button onClick={() => setSearchQuery('')} className="underline hover:text-white">Clear</button>
            </div>
          )}
        </div>

        {/* Scrollable Navigation Sections */}
        <nav
          id="sidebarNavContent"
          className="flex-1 overflow-y-auto p-2 space-y-4 text-xs select-none"
        >
          {groups.map(([groupName, routes]) => (
            <div key={groupName} className="space-y-1">
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-400/90 flex items-center justify-between">
                <span>{groupName}</span>
                <span className="text-[9px] text-slate-500 font-mono">{routes.length}</span>
              </div>
              <div className="space-y-0.5">
                {routes.map(item => {
                  const IconComponent = ICON_MAP[item.icon] || Shield;
                  const isActive = currentRoute === item.route;
                  return (
                    <button
                      key={item.route}
                      data-route={item.route}
                      onClick={() => handleSelectRoute(item.route)}
                      className={`nav-btn w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg transition text-left text-xs ${
                        isActive
                          ? 'nav-active'
                          : 'text-slate-300 hover:bg-brand-navyLight hover:text-white'
                      }`}
                    >
                      <IconComponent className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-teal-400' : 'text-slate-400'}`} />
                      <span className="truncate flex-1">{item.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Sidebar Bottom User Snapshot */}
        <div className="p-3 bg-brand-navy border-t border-brand-navyLight flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2.5 truncate">
            <div className="w-8 h-8 rounded-full bg-teal-700 text-white font-bold flex items-center justify-center text-xs flex-shrink-0">
              ZA
            </div>
            <div className="truncate leading-tight">
              <p className="font-semibold text-white truncate">{patient.name}</p>
              <p className="text-[10px] text-teal-300/80">Demo Patient • {patient.bloodGroup}</p>
            </div>
          </div>
          <button
            onClick={() => handleSelectRoute('patient-profile')}
            title="View Profile"
            aria-label="View Patient Profile"
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-brand-navyLight transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </aside>
    </>
  );
};
