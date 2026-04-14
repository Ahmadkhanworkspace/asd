"use client";

import React from 'react';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  if (isLoginPage) return <>{children}</>;

  return (
    <div className="flex min-h-screen bg-[#06080D] text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white">
              {pathname === '/dashboard' ? 'Overview' : (pathname?.split('/')[1]?.charAt(0).toUpperCase() || '') + (pathname?.split('/')[1]?.slice(1) || '')}
            </h2>
            <p className="text-gray-400 mt-1">Welcome back, Admin</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/5 rounded-full transition-all duration-200 relative text-gray-400">
              <span className="absolute top-2 right-2 w-2 h-2 bg-yellow-500 rounded-full border-2 border-[#06080D]"></span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </button>
            <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold">
              A
            </div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
