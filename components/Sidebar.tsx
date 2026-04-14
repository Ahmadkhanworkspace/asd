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
  ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Deposits', href: '/deposits', icon: Banknote },
  { name: 'Withdrawals', href: '/withdrawals', icon: LogOut },
  { name: 'Ledger', href: '/ledger', icon: LayoutDashboard },
  { name: 'Tasks & Ads', href: '/tasks', icon: CheckSquare },
  { name: 'Security', href: '/security', icon: ShieldCheck },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen w-64 bg-[#0A0D14] border-r border-white/5 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          EarnX Admin
        </h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon size={20} className={cn(isActive ? "text-yellow-500" : "text-gray-400 group-hover:text-white")} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-400 hover:text-red-400 hover:bg-red-400/5 rounded-xl transition-all duration-200">
          <LogOut size={20} />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
}
