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
    <div className="space-y-10 pb-20">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-6 bg-white border-2 border-slate-200 rounded-[44px] shadow-[0_45px_90px_-20px_rgba(15,23,42,0.12)]">
        <div className="bg-slate-50 border-2 border-slate-100 rounded-[28px] flex items-center px-8 py-5 w-full md:w-[550px] focus-within:border-orange-500/30 transition-all shadow-inner">
          <Search className="text-slate-400" size={24} />
          <input 
            type="text" 
            placeholder="Identity scan: User name, email, or digital signature..." 
            className="bg-transparent border-none outline-none ml-5 text-sm font-black text-slate-900 w-full placeholder:text-slate-400 placeholder:font-bold placeholder:uppercase placeholder:tracking-widest placeholder:text-[10px]"
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-10 py-5 bg-white border-2 border-slate-200 rounded-[24px] text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-orange-600 hover:border-orange-500/20 transition-all shadow-sm">
            <Filter size={20} /> Param Filters
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-12 py-5 bg-orange-500 text-white rounded-[24px] text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-orange-500/40 hover:scale-[1.05] active:scale-95 transition-all">
            <UserPlus size={20} /> Register Account
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <StatsSummaryCard title="Platform Residents" value="24,562" icon={UsersIcon} color="orange" />
        <StatsSummaryCard title="Active Protocols" value="1,890" icon={TrendingUp} color="blue" />
        <StatsSummaryCard title="Global Liquidity" value="$128,402" icon={CheckCircle2} color="emerald" />
      </div>

      {/* Users Table */}
      <div className="bg-white border-2 border-slate-200 rounded-[56px] shadow-[0_80px_160px_-40px_rgba(15,23,42,0.18)] overflow-hidden">
        <div className="p-12 border-b-2 border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
           <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-widest leading-none">Global Directory</h3>
              <p className="text-slate-400 text-xs font-bold mt-2 uppercase tracking-widest opacity-80">Full administrative access to resident profiles</p>
           </div>
           <div className="flex gap-4 text-[10px] items-center text-slate-500 font-black bg-white border-2 border-slate-100 px-6 py-2.5 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-100"></div>
              NETWORK SYNC STABLE
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-slate-100">
                <th className="px-12 py-7">Resident Profile</th>
                <th className="px-12 py-7">Wallet Protocol</th>
                <th className="px-12 py-7">Yield Stats</th>
                <th className="px-12 py-7">Status Node</th>
                <th className="px-12 py-7 text-right">Ops Terminal</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 transition-all duration-500 group">
                  <td className="px-12 py-8">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-[24px] bg-white border-2 border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-orange-500 group-hover:text-orange-500 transition-all duration-700 shadow-sm group-hover:shadow-2xl group-hover:shadow-orange-500/10 group-hover:rotate-6">
                        <UsersIcon size={28} />
                      </div>
                      <div>
                        <p className="font-black text-slate-900 text-xl tracking-tight leading-none mb-1.5">{user.name}</p>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest opacity-70">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-12 py-8">
                    <div className="flex items-center gap-2.5">
                      <Wallet size={18} className="text-orange-500" />
                      <span className="font-black text-slate-900 text-lg tracking-tight">{user.balance} <span className="text-xs text-slate-300 font-bold uppercase tracking-widest ml-1">Coins</span></span>
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1.5 opacity-60">Withdrawal ValidATED</p>
                  </td>
                  <td className="px-12 py-8">
                     <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-slate-900 tracking-tighter leading-none">$ {user.earnings}</span>
                        <ArrowUpRight size={16} className="text-emerald-500" />
                     </div>
                  </td>
                  <td className="px-12 py-8">
                    <span className={cn(
                      "px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] inline-flex items-center gap-3 border-2 shadow-sm transition-all",
                      user.status === 'active' ? "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500" : "bg-red-50 text-red-600 border-red-100 group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500"
                    )}>
                      <div className={cn("w-2.5 h-2.5 rounded-full", user.status === 'active' ? "bg-emerald-500 group-hover:bg-white animate-pulse" : "bg-red-500 group-hover:bg-white")}></div>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-12 py-8 text-right">
                    <div className="flex justify-end gap-4">
                      <button className="p-4.5 bg-white border-2 border-slate-100 rounded-[22px] text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm">
                        <Edit2 size={22} />
                      </button>
                      <button className="p-4.5 bg-red-50 border-2 border-red-50 rounded-[22px] text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-2xl shadow-red-500/10">
                        <Ban size={22} />
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
    orange: "bg-orange-500 text-white shadow-orange-500/30 ring-8 ring-orange-50",
    blue: "bg-blue-500 text-white shadow-blue-500/30 ring-8 ring-blue-50",
    emerald: "bg-emerald-500 text-white shadow-emerald-500/30 ring-8 ring-emerald-50",
  };

  return (
    <div className="bg-white border-2 border-slate-200 p-12 rounded-[52px] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.12)] flex items-center gap-10 group hover:border-orange-500 transition-all duration-700 hover:shadow-[0_60px_120px_-20px_rgba(249,115,22,0.2)] hover:-translate-y-3 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50/50 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-1000"></div>
      
      <div className={cn("w-24 h-24 rounded-[32px] flex items-center justify-center shadow-2xl relative z-10 transition-all duration-700 group-hover:rotate-12 group-hover:scale-110", colorMap[color])}>
        <Icon size={44} />
      </div>
      <div className="relative z-10">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 group-hover:text-slate-900 transition-colors">{title}</p>
        <p className="text-5xl font-black text-slate-900 tracking-tighter leading-none">{value}</p>
      </div>
    </div>
  )
}
