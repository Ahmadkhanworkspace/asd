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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="bg-white border-2 border-slate-200 rounded-[32px] flex items-center px-8 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.06)] w-full md:w-[450px] focus-within:border-orange-500/50 transition-all">
          <Search className="text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search users by name, email, or UID..." 
            className="bg-transparent border-none outline-none ml-4 text-sm font-bold text-slate-900 w-full placeholder:text-slate-400 placeholder:font-medium"
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-600 hover:border-orange-500/20 transition-all">
            <Filter size={18} /> Filters
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-10 py-4 bg-orange-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all">
            <UserPlus size={18} /> New User
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatsSummaryCard title="Total Verified" value="24,562" icon={UsersIcon} color="orange" />
        <StatsSummaryCard title="Active Today" value="1,890" icon={TrendingUp} color="blue" />
        <StatsSummaryCard title="Total Payouts" value="$128,402" icon={CheckCircle2} color="emerald" />
      </div>

      {/* Users Table */}
      <div className="bg-white border-2 border-slate-200 rounded-[40px] shadow-[0_50px_100px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="p-10 border-b-2 border-slate-100 bg-slate-50/50 flex justify-between items-center">
           <h3 className="text-xl font-black tracking-tight text-slate-900 uppercase tracking-widest">Global Directory</h3>
           <div className="flex gap-2 text-[10px] items-center text-slate-400 font-bold bg-white border-2 border-slate-100 px-4 py-1.5 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              REAL-TIME SYNC ACTIVE
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest border-b-2 border-slate-100">
                <th className="px-10 py-6">User Identity</th>
                <th className="px-10 py-6">Wallet Balance</th>
                <th className="px-10 py-6">Lifetime Earnings</th>
                <th className="px-10 py-6">Account Status</th>
                <th className="px-10 py-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 transition-all group">
                  <td className="px-10 py-7">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-orange-500 group-hover:text-orange-500 transition-all duration-500">
                        <UsersIcon size={24} />
                      </div>
                      <div>
                        <p className="font-black text-slate-900 text-lg">{user.name}</p>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-7">
                    <div className="flex items-center gap-2">
                      <Wallet size={16} className="text-orange-500" />
                      <span className="font-black text-slate-900 text-base">{user.balance} Coins</span>
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1 opacity-60">Ready for withdraw</p>
                  </td>
                  <td className="px-10 py-7">
                     <div className="flex items-baseline gap-1">
                        <span className="text-lg font-black text-slate-900 tracking-tighter">$ {user.earnings}</span>
                        <ArrowUpRight size={14} className="text-emerald-500" />
                     </div>
                  </td>
                  <td className="px-10 py-7">
                    <span className={cn(
                      "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2 border-2",
                      user.status === 'active' ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-red-50 text-red-600 border-red-100"
                    )}>
                      <div className={cn("w-2 h-2 rounded-full", user.status === 'active' ? "bg-emerald-500" : "bg-red-500")}></div>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-10 py-7 text-right">
                    <div className="flex justify-end gap-3 transition-all">
                      <button className="p-3.5 bg-white border-2 border-slate-100 rounded-2xl text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-3.5 bg-red-50 border-2 border-red-100 rounded-2xl text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-xl shadow-red-500/10">
                        <Ban size={18} />
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
    orange: "bg-orange-500 text-white shadow-orange-500/20",
    blue: "bg-blue-500 text-white shadow-blue-500/20",
    emerald: "bg-emerald-500 text-white shadow-emerald-500/20",
  };

  return (
    <div className="bg-white border-2 border-slate-200 p-10 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] flex items-center gap-8 group hover:border-orange-500/30 transition-all hover:shadow-[0_40px_80px_rgba(249,115,22,0.1)] hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50/50 rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700"></div>
      
      <div className={cn("w-20 h-20 rounded-[28px] flex items-center justify-center shadow-2xl relative z-10 group-hover:rotate-12 transition-transform", colorMap[color])}>
        <Icon size={36} />
      </div>
      <div className="relative z-10">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 group-hover:text-slate-900 transition-colors">{title}</p>
        <p className="text-4xl font-black text-slate-900 tracking-tighter">{value}</p>
      </div>
    </div>
  )
}
