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
    <div className="flex flex-col h-screen w-72 bg-white border-r border-slate-200 text-slate-900 shadow-sm">
      <div className="p-8">
        <h1 className="text-2xl font-black tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white italic">E</div>
          <span>EarnX <span className="text-orange-500">Admin</span></span>
        </h1>
      </div>
      
      <nav className="flex-1 px-6 space-y-1.5 mt-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group",
                isActive 
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20 translate-x-1" 
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              <Icon size={20} className={cn(isActive ? "text-white" : "text-slate-400 group-hover:text-orange-500 transition-colors")} />
              <span className="font-bold text-sm tracking-tight">{item.name}</span>
              {isActive && <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full"></div>}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-slate-100">
        <button className="flex items-center gap-3 px-4 py-4 w-full text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all duration-300 group">
          <LogOut size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="font-bold text-sm">Sign Out</span>
        </button>
      </div>
    </div>
  );
}
