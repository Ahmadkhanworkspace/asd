"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart3, 
  MousePointer2, 
  Zap, 
  CheckCircle2, 
  Share2, 
  Users, 
  Settings,
  ShoppingBag,
  Trophy,
  LayoutDashboard
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: MousePointer2, label: 'PTC Master', href: '/ptc' },
  { icon: Zap, label: 'EarnX Xtreme', href: '/xtreme' },
  { icon: CheckCircle2, label: 'Validator', href: '/tasks' },
  { icon: ShoppingBag, label: 'Marketplace', href: '/marketplace' },
  { icon: Trophy, label: 'Seasons', href: '/marketplace?tab=seasons' },
  { icon: Share2, label: 'Marketing', href: '/marketing' },
  { icon: Users, label: 'Users', href: '/users' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[340px] bg-white border-r-2 border-slate-300 flex flex-col h-screen sticky top-0 shadow-[40px_0_100px_-20px_rgba(15,23,42,0.15)] z-50 overflow-hidden">
      <div className="p-12">
        <div className="flex items-center gap-4 mb-16 relative group cursor-pointer">
           <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-orange-500/40 rotate-6 transition-all group-hover:rotate-0">
             <Zap size={32} fill="white" />
           </div>
           <div>
              <h1 className="text-3xl font-black tracking-tighter text-slate-900 leading-none">EarnX</h1>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mt-1">Admin v2.5</p>
           </div>
        </div>

        <nav className="space-y-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-5 px-8 py-5 rounded-[24px] transition-all duration-500 group relative overflow-hidden",
                  isActive 
                    ? "bg-slate-900 text-white shadow-2xl shadow-slate-900/30 translate-x-3" 
                    : "text-slate-400 hover:text-slate-900 hover:bg-slate-100"
                )}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 w-1.5 h-full bg-orange-500"></div>
                )}
                <item.icon size={26} className={cn(
                  "transition-all duration-500",
                  isActive ? "text-orange-500 rotate-12" : "group-hover:rotate-12"
                )} />
                <span className="font-black text-xs uppercase tracking-[0.3em]">{item.label}</span>
                {!isActive && (
                  <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  </div>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-10">
        <div className="p-8 bg-slate-50 border-2 border-slate-200 rounded-[36px] relative overflow-hidden group">
           <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-orange-500/5 rounded-full transition-all group-hover:scale-150"></div>
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Server Load</p>
           <div className="flex justify-between items-end mb-3">
              <p className="text-2xl font-black text-slate-900 tracking-tighter">14.2ms</p>
              <div className="flex gap-1.5 mb-2">
                 {[1,2,3,4,5].map(i => (
                    <div key={i} className={cn("w-1.5 h-4 rounded-full", i < 4 ? "bg-orange-500" : "bg-slate-200")}></div>
                 ))}
              </div>
           </div>
           <div className="w-full h-2.5 bg-white border-2 border-slate-200 rounded-full overflow-hidden p-0.5">
              <div className="w-3/4 h-full bg-orange-500 rounded-full transition-all duration-1000"></div>
           </div>
        </div>
      </div>
    </aside>
  );
}
