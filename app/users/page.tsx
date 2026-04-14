"use client";

import React, { useState } from 'react';
import { 
  Users as UsersIcon, 
  Search, 
  Filter, 
  MoreVertical, 
  UserPlus, 
  Ban, 
  Wallet, 
  History,
  TrendingUp,
  ShieldAlert,
  Edit2,
  Trash2,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function UsersPage() {
  const [users] = useState([
    { id: 1, name: 'Ahmad Khan', email: 'ahmad@extra.com', balance: '1,250', earnings: '5,400', status: 'active', joined: 'Oct 12, 2023' },
    { id: 2, name: 'Sara Smith', email: 'sara.s@gmail.com', balance: '420', earnings: '1,200', status: 'active', joined: 'Oct 15, 2023' },
    { id: 3, name: 'John Doe', email: 'john@doe.io', balance: '12', earnings: '45', status: 'restricted', joined: 'Nov 01, 2023' },
  ]);

  return (
    <div className="space-y-12 pb-20">
      {/* Header Actions */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-12 p-10 bg-white border-2 border-slate-300 rounded-[64px] shadow-[0_80px_160px_-40px_rgba(15,23,42,0.2)] border-t-[12px] border-t-orange-500">
        <div className="bg-slate-100 border-2 border-slate-200 rounded-[36px] flex items-center px-10 py-6 w-full xl:w-[650px] focus-within:border-orange-500 transition-all shadow-inner">
          <Search className="text-slate-400" size={32} />
          <input 
            type="text" 
            placeholder="Identity scan: User name, email, or digital signature node..." 
            className="bg-transparent border-none outline-none ml-6 text-sm font-black text-slate-900 w-full placeholder:text-slate-400 placeholder:font-black placeholder:uppercase placeholder:tracking-[0.4em] placeholder:text-[10px]"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6 w-full xl:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-4 px-12 py-6 bg-white border-2 border-slate-200 rounded-[28px] text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-orange-600 hover:border-orange-500 transition-all shadow-lg">
            <Filter size={24} /> Param Filters
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-4 px-16 py-6 bg-orange-500 text-white rounded-[28px] text-[11px] font-black uppercase tracking-[0.3em] shadow-[0_30px_60px_rgba(249,115,22,0.4)] hover:scale-[1.05] active:scale-95 transition-all">
            <UserPlus size={24} /> Deploy Resident
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <StatsSummaryCard title="Resident Registry" value="24,562" icon={UsersIcon} color="orange" />
        <StatsSummaryCard title="Active Flux" value="1,890" icon={TrendingUp} color="blue" />
        <StatsSummaryCard title="Platform Liquid" value="$128,402" icon={CheckCircle2} color="emerald" />
      </div>

      {/* Users Table */}
      <div className="bg-white border-2 border-slate-300 rounded-[72px] shadow-[0_100px_200px_-50px_rgba(15,23,42,0.25)] overflow-hidden border-t-[16px] border-t-slate-900">
        <div className="p-16 border-b-2 border-slate-200 bg-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
           <div className="flex items-center gap-8">
              <div className="w-4 h-16 bg-orange-500 rounded-full"></div>
              <div>
                <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em] leading-none">Global Citizen Directory</h3>
                <p className="text-slate-500 text-xs font-black mt-3 uppercase tracking-[0.3em] opacity-80">Full administrative access to resident profiles and yield nodes</p>
              </div>
           </div>
           <div className="flex gap-6 text-[11px] items-center text-slate-600 font-black bg-white border-2 border-slate-200 px-8 py-3 rounded-full shadow-2xl">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse ring-[8px] ring-emerald-50"></div>
              DIRECTORY SYNC OPTIMAL
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-100 text-slate-500 text-[11px] font-black uppercase tracking-[0.4em] border-b-2 border-slate-200">
                <th className="px-16 py-8">Resident Profile</th>
                <th className="px-16 py-8">Wallet protocol</th>
                <th className="px-16 py-8">Yield analytics</th>
                <th className="px-16 py-8">Account node Status</th>
                <th className="px-16 py-8 text-right">Ops Terminal</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-100 bg-white">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 transition-all duration-700 group">
                  <td className="px-16 py-12">
                    <div className="flex items-center gap-10">
                      <div className="w-24 h-24 rounded-[36px] bg-white border-4 border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-orange-500 group-hover:text-orange-500 transition-all duration-700 shadow-2xl group-hover:rotate-12 group-hover:scale-110">
                        <UsersIcon size={44} />
                      </div>
                      <div>
                        <p className="font-black text-slate-900 text-3xl tracking-tighter leading-none mb-3">{user.name}</p>
                        <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.3em] opacity-80 bg-slate-100 px-4 py-1.5 rounded-lg w-fit">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-16 py-12">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-orange-50 rounded-2xl border-2 border-orange-100"><Wallet size={24} className="text-orange-500" /></div>
                      <span className="font-black text-slate-900 text-2xl tracking-tighter leading-none">{user.balance} <span className="text-xs text-slate-300 ml-1 uppercase">Coins</span></span>
                    </div>
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mt-3 ml-1">Withdrawal active</p>
                  </td>
                  <td className="px-16 py-12">
                     <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-black text-slate-900 tracking-tighter leading-none font-mono">$ {user.earnings}</span>
                        <div className="px-3 py-1 bg-emerald-50 border-2 border-emerald-100 rounded-lg"><ArrowUpRight size={20} className="text-emerald-500" /></div>
                     </div>
                  </td>
                  <td className="px-16 py-12">
                    <span className={cn(
                      "px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.3em] inline-flex items-center gap-4 border-4 shadow-2xl transition-all duration-700",
                      user.status === 'active' ? "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600" : "bg-red-50 text-red-600 border-red-100 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600"
                    )}>
                      <div className={cn("w-3 h-3 rounded-full", user.status === 'active' ? "bg-emerald-500 group-hover:bg-white animate-pulse shadow-[0_0_15px_white]" : "bg-red-500 group-hover:bg-white")}></div>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-16 py-12 text-right">
                    <div className="flex justify-end gap-6 transition-all">
                      <button className="p-6 bg-white border-2 border-slate-200 rounded-[28px] text-slate-400 hover:text-slate-900 hover:border-slate-500 transition-all shadow-2xl hover:-translate-y-2">
                        <Edit2 size={28} />
                      </button>
                      <button className="p-6 bg-red-50 border-2 border-red-50 rounded-[28px] text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-2xl shadow-red-500/10 hover:-translate-y-2">
                        <Ban size={28} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatsSummaryCard({ title, value, icon: Icon, color }: any) {
  const colorMap: any = {
    orange: "bg-orange-500 text-white shadow-[0_30px_60px_rgba(249,115,22,0.4)] ring-[16px] ring-orange-50",
    blue: "bg-blue-500 text-white shadow-[0_30px_60px_rgba(59,130,246,0.4)] ring-[16px] ring-blue-50",
    emerald: "bg-emerald-500 text-white shadow-[0_30px_60px_rgba(16,185,129,0.4)] ring-[16px] ring-emerald-50",
  };

  return (
    <div className="bg-white border-2 border-slate-300 p-16 rounded-[64px] shadow-[0_70px_140px_-30px_rgba(15,23,42,0.2)] flex items-center gap-12 group hover:border-orange-500 transition-all duration-1000 hover:shadow-[0_80px_160px_-20px_rgba(249,115,22,0.3)] hover:-translate-y-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-44 h-44 bg-slate-50 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-1000 opacity-60"></div>
      
      <div className={cn("w-32 h-32 rounded-[40px] flex items-center justify-center shadow-2xl relative z-10 transition-all duration-700 group-hover:rotate-12 group-hover:scale-110", colorMap[color])}>
        <Icon size={56} />
      </div>
      <div className="relative z-10">
        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-4 group-hover:text-slate-900 transition-colors leading-none">{title} LOG</p>
        <p className="text-7xl font-black text-slate-900 tracking-tighter leading-none">{value}</p>
      </div>
    </div>
  )
}
