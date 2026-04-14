"use client";

import React from 'react';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';
import { Bell } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  if (isLoginPage) return <>{children}</>;

  return (
    <div className="flex min-h-screen bg-slate-200 text-slate-900 font-sans">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-6 py-10 lg:px-12">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900">
              {pathname === '/dashboard' ? 'Overview' : (pathname?.split('/')[1]?.replace('-', ' ').charAt(0).toUpperCase() || '') + (pathname?.split('/')[1]?.replace('-', ' ').slice(1) || '')}
            </h2>
            <p className="text-slate-500 mt-2 font-medium">Hello Admin, manage your platform 🚀</p>
          </div>
          <div className="flex items-center gap-6">
            <button className="p-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all relative group">
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white ring-4 ring-orange-500/10"></span>
              <Bell size={22} className="text-slate-400 group-hover:text-slate-900" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-orange-500 shadow-lg shadow-orange-500/20 flex items-center justify-center text-white font-black text-xl">
                A
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-slate-900">Ahmad Khan</p>
                <p className="text-[10px] font-black uppercase tracking-tighter text-orange-500">Super Admin</p>
              </div>
            </div>
          </div>
        </header>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}
