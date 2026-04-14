"use client";

import React, { useState } from 'react';
import { 
  Users, 
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
  CheckCircle2
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
        <div className="bg-white border border-slate-200 rounded-3xl flex items-center px-6 py-3 shadow-sm w-full md:w-96">
          <Search className="text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search by name, email, or UID..." 
            className="bg-transparent border-none outline-none ml-4 text-sm font-medium text-slate-900 w-full"
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-all shadow-sm">
            <Filter size={18} /> Filters
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-orange-500/20">
            <UserPlus size={18} /> New User
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white border border-slate-200 p-8 rounded-[40px] shadow-sm flex items-center gap-6">
           <div className="w-16 h-16 rounded-3xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Users size={32} />
           </div>
           <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Verified</p>
              <p className="text-3xl font-black text-slate-900 tracking-tighter">24,562</p>
           </div>
        </div>
        <div className="bg-white border border-slate-200 p-8 rounded-[40px] shadow-sm flex items-center gap-6">
           <div className="w-16 h-16 rounded-3xl bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
              <TrendingUp size={32} />
           </div>
           <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Active Today</p>
              <p className="text-3xl font-black text-slate-900 tracking-tighter">1,890</p>
           </div>
        </div>
        <div className="bg-white border border-slate-200 p-8 rounded-[40px] shadow-sm flex items-center gap-6">
           <div className="w-16 h-16 rounded-3xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <CheckCircle2 size={32} />
           </div>
           <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Payouts</p>
              <p className="text-3xl font-black text-slate-900 tracking-tighter">$128,402</p>
           </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white border border-slate-200 rounded-[40px] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                <th className="px-10 py-6">User Identity</th>
                <th className="px-10 py-6">Wallet Balance</th>
                <th className="px-10 py-6">Lifetime Earnings</th>
                <th className="px-10 py-6">Account Status</th>
                <th className="px-10 py-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/30 transition-all group">
                  <td className="px-10 py-7">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
                        <UserPlus size={24} />
                      </div>
                      <div>
                        <p className="font-black text-slate-900 text-base">{user.name}</p>
                        <p className="text-xs text-slate-400 font-medium">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-7">
                    <div className="flex items-center gap-2">
                      <Wallet size={16} className="text-orange-500" />
                      <span className="font-black text-slate-900">{user.balance} Coins</span>
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Ready for withdraw</p>
                  </td>
                  <td className="px-10 py-7 font-black text-slate-900 uppercase text-xs tracking-tight">
                     $ {user.earnings}
                  </td>
                  <td className="px-10 py-7">
                    <span className={cn(
                      "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2",
                      user.status === 'active' ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
                    )}>
                      <div className={cn("w-1.5 h-1.5 rounded-full", user.status === 'active' ? "bg-emerald-500" : "bg-red-500")}></div>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-10 py-7 text-right">
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all">
                      <button className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 transition-all">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-all">
                        <Ban size={16} />
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
