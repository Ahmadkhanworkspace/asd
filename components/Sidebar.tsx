"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  Banknote, 
  CheckSquare, 
  Settings, 
  LogOut,
  Bell,
  Zap,
  Gamepad2,
  Megaphone,
  Briefcase
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'EarnX Xtreme', href: '/xtreme', icon: Zap },
  { name: 'PTC Ads', href: '/ptc', icon: Megaphone },
  { name: 'Micro Tasks', href: '/tasks', icon: Briefcase },
  { name: 'Games Config', href: '/games', icon: Gamepad2 },
  { name: 'Deposits', href: '/deposits', icon: Banknote },
  { name: 'Withdrawals', href: '/withdrawals', icon: LogOut },
  { name: 'Ledger', href: '/ledger', icon: LayoutDashboard },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen w-72 bg-white border-r-2 border-slate-200 text-slate-900 shadow-[10px_0_40px_rgba(0,0,0,0.03)] relative z-50">
      <div className="p-8 pb-12">
        <h1 className="text-2xl font-black tracking-tighter flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center text-white italic shadow-lg shadow-orange-500/30 transform -rotate-6 group-hover:rotate-0 transition-transform">E</div>
          <div className="flex flex-col leading-none">
             <span className="text-xl">EarnX</span>
             <span className="text-[10px] text-orange-500 font-black uppercase tracking-[0.2em] mt-1">Admin Central</span>
          </div>
        </h1>
      </div>
      
      <nav className="flex-1 px-6 space-y-2 mt-2 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-500 group relative",
                isActive 
                  ? "bg-slate-900 text-white shadow-2xl shadow-slate-900/20 translate-x-2" 
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50 hover:translate-x-1"
              )}
            >
              <Icon size={20} className={cn(isActive ? "text-orange-500" : "text-slate-400 group-hover:text-orange-500 transition-all")} />
              <span className="font-black text-sm tracking-tight">{item.name}</span>
              {isActive && (
                 <div className="ml-auto w-1.5 h-6 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t-2 border-slate-100 bg-slate-50/50">
        <button className="flex items-center gap-4 px-5 py-4 w-full text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-all duration-300 group font-black text-sm uppercase tracking-widest border-2 border-transparent hover:border-red-100">
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Exit Panel</span>
        </button>
      </div>
    </div>
  );
}
