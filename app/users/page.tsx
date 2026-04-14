"use client";

import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Ban, 
  CheckCircle2, 
  Edit3,
  Mail,
  ShieldCheck,
  XCircle,
  Banknote
} from 'lucide-react';
import { cn } from '@/lib/utils';

const users = [
  { id: '1', name: 'Ahmad Khan', username: 'ahmad_k', email: 'ahmad@example.com', balance: '$124.50', status: 'active', joins: '2026-04-12' },
  { id: '2', name: 'John Doe', username: 'jdoe', email: 'john@example.com', balance: '$12.00', status: 'active', joins: '2026-04-10' },
  { id: '3', name: 'Sarah Wilson', username: 'sarah_w', email: 'sarah@example.com', balance: '$0.50', status: 'banned', joins: '2026-04-09' },
  { id: '4', name: 'Mike Ross', username: 'mross', email: 'mike@example.com', balance: '$52.10', status: 'active', joins: '2026-04-08' },
  { id: '5', name: 'Harvey Specter', username: 'harvey_s', email: 'harvey@example.com', balance: '$1,200.00', status: 'active', joins: '2026-04-05' },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<any>(null);

  return (
    <div className="space-y-6">
      {/* Selected User Quick Actions Modal/Overlay Placeholder */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0A0D14] border border-white/10 p-8 rounded-[40px] w-full max-w-lg space-y-8 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Manage @{selectedUser.username}</h3>
              <button onClick={() => setSelectedUser(null)} className="p-2 hover:bg-white/5 rounded-full"><XCircle size={24} /></button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-xs text-gray-500 mb-1">Current Balance</p>
                  <p className="text-xl font-bold text-yellow-500">{selectedUser.balance}</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-xs text-gray-500 mb-1">Status</p>
                  <p className={cn("text-xl font-bold", selectedUser.status === 'active' ? "text-emerald-400" : "text-red-400")}>{selectedUser.status}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-sm text-gray-400">Balance Adjuster</h4>
                <div className="flex gap-2">
                  <input type="number" placeholder="Enter amount..." className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm" />
                  <button className="px-6 py-3 bg-emerald-500 text-black font-bold rounded-xl text-sm">+ Credit</button>
                  <button className="px-6 py-3 bg-red-500 text-white font-bold rounded-xl text-sm">- Debit</button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="w-full py-4 rounded-2xl border border-red-500/30 text-red-500 font-bold text-sm hover:bg-red-500/10 transition-all">
                  {selectedUser.status === 'active' ? 'Ban Account' : 'Unban Account'}
                </button>
                <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 font-bold text-sm hover:bg-white/10 transition-all">
                  Clear Devices
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-[#0A0D14] p-4 rounded-2xl border border-white/5">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-yellow-500/50 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-[#06080D] px-6 py-2.5 rounded-xl text-sm font-bold transition-all">
          Force Export (SQL)
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-[#0A0D14] border border-white/5 rounded-3xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-wider">
              <th className="px-8 py-4">User</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4">Balance</th>
              <th className="px-8 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white group-hover:text-yellow-500 transition-colors">{user.name}</p>
                      <p className="text-xs text-gray-500">@{user.username}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                    user.status === 'active' ? "bg-emerald-400/10 text-emerald-400" : "bg-red-400/10 text-red-400"
                  )}>
                    {user.status}
                  </span>
                </td>
                <td className="px-8 py-5">
                  <p className="font-mono text-white font-bold">{user.balance}</p>
                </td>
                <td className="px-8 py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => setSelectedUser(user)}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 transition-all text-gray-400 hover:text-white"
                    >
                      Manage
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Placeholder */}
      <div className="flex items-center justify-between px-2 py-4">
        <p className="text-sm text-gray-500">Showing 5 of 24,562 users</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white/5 rounded-xl text-sm font-medium hover:bg-white/10 transition-all disabled:opacity-50" disabled>Previous</button>
          <button className="px-4 py-2 bg-white/5 rounded-xl text-sm font-medium hover:bg-white/10 transition-all">Next</button>
        </div>
      </div>
    </div>
  );
}
