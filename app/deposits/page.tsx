"use client";

import React from 'react';
import { 
  ArrowDownCircle, 
  ArrowUpCircle, 
  Clock, 
  Search,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const deposits = [
  { id: 'DEP-7721', user: 'ahmad_k', amount: '$50.00', method: 'NOWPayments (USDT)', status: 'completed', date: '2026-04-14 12:30' },
  { id: 'DEP-7720', user: 'jdoe', amount: '$10.00', method: 'Manual Bank', status: 'pending', date: '2026-04-14 11:15' },
  { id: 'DEP-7719', user: 'crypto_king', amount: '$100.00', method: 'NOWPayments (BTC)', status: 'processing', date: '2026-04-14 10:00' },
];

export default function DepositsPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0A0D14] border border-white/5 p-6 rounded-3xl">
          <div className="flex items-center gap-4 mb-4 text-emerald-400">
            <ArrowDownCircle size={24} />
            <h4 className="font-bold">Total Deposits</h4>
          </div>
          <p className="text-3xl font-bold">$12,450.00</p>
          <p className="text-xs text-gray-500 mt-1">+15% from last month</p>
        </div>
        <div className="bg-[#0A0D14] border border-white/5 p-6 rounded-3xl text-yellow-500">
          <div className="flex items-center gap-4 mb-4">
            <Clock size={24} />
            <h4 className="font-bold">Pending Approval</h4>
          </div>
          <p className="text-3xl font-bold">5</p>
          <p className="text-xs text-gray-500 mt-1">Require manual verification</p>
        </div>
        <div className="bg-[#0A0D14] border border-white/5 p-6 rounded-3xl text-blue-400">
          <div className="flex items-center gap-4 mb-4">
            <ArrowUpCircle size={24} />
            <h4 className="font-bold">Conversion Rate</h4>
          </div>
          <p className="text-3xl font-bold">68%</p>
          <p className="text-xs text-gray-500 mt-1">Signup to Deposit ratio</p>
        </div>
      </div>

      <div className="bg-[#0A0D14] border border-white/5 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-xl font-bold">Deposit Logs</h3>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input type="text" placeholder="Search deposits..." className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm outline-none focus:border-yellow-500/50" />
          </div>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-white/5 text-gray-400 text-xs font-bold uppercase">
              <th className="px-8 py-4">ID / User</th>
              <th className="px-8 py-4">Amount</th>
              <th className="px-8 py-4">Method</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {deposits.map((dep) => (
              <tr key={dep.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-8 py-5">
                  <p className="font-bold text-white">{dep.id}</p>
                  <p className="text-xs text-gray-500">@{dep.user}</p>
                </td>
                <td className="px-8 py-5 text-white font-bold">{dep.amount}</td>
                <td className="px-8 py-5 text-gray-400 text-sm">{dep.method}</td>
                <td className="px-8 py-5">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                    dep.status === 'completed' ? "bg-emerald-400/10 text-emerald-400" :
                    dep.status === 'pending' ? "bg-yellow-400/10 text-yellow-400" : "bg-blue-400/10 text-blue-400"
                  )}>
                    {dep.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  {dep.status === 'pending' && (
                    <div className="flex justify-end gap-2">
                      <button className="p-2 bg-emerald-400/10 text-emerald-400 rounded-lg hover:bg-emerald-400/20" title="Approve">
                        <CheckCircle2 size={16} />
                      </button>
                      <button className="p-2 bg-red-400/10 text-red-400 rounded-lg hover:bg-red-400/20" title="Reject">
                        <XCircle size={16} />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
