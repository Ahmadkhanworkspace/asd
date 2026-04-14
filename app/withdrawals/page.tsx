"use client";

import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ExternalLink,
  Wallet,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const withdrawals = [
  { id: 'W-9842', user: 'ahmad_k', amount: '$5.00', currency: 'USDT (TRC20)', address: 'TRX777...', status: 'pending', date: '2026-04-14 10:24' },
  { id: 'W-9841', user: 'jdoe', amount: '$12.00', currency: 'BTC', address: 'bc1q...', status: 'processing', date: '2026-04-14 09:15' },
  { id: 'W-9840', user: 'sarah_w', amount: '$2.00', currency: 'LTC', address: 'Lp7...', status: 'completed', date: '2026-04-13 18:30' },
  { id: 'W-9839', user: 'mross', amount: '$15.00', currency: 'ETH', address: '0xabc...', status: 'failed', date: '2026-04-13 14:10' },
];

export default function WithdrawalsPage() {
  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0A0D14] border border-white/5 p-6 rounded-3xl">
          <div className="flex items-center gap-4 mb-4 text-yellow-500">
            <Clock size={24} />
            <h4 className="font-bold">Pending Requests</h4>
          </div>
          <p className="text-3xl font-bold">$128.00</p>
          <p className="text-xs text-gray-500 mt-1">12 requests waiting for review</p>
        </div>
        <div className="bg-[#0A0D14] border border-white/5 p-6 rounded-3xl">
          <div className="flex items-center gap-4 mb-4 text-emerald-500">
            <CheckCircle2 size={24} />
            <h4 className="font-bold">Processed Today</h4>
          </div>
          <p className="text-3xl font-bold">$450.00</p>
          <p className="text-xs text-gray-500 mt-1">84 withdrawals completed</p>
        </div>
        <div className="bg-[#0A0D14] border border-white/5 p-6 rounded-3xl">
          <div className="flex items-center gap-4 mb-4 text-red-500">
            <AlertCircle size={24} />
            <h4 className="font-bold">Failed/Flagged</h4>
          </div>
          <p className="text-3xl font-bold">3</p>
          <p className="text-xs text-gray-500 mt-1">Requires manual investigation</p>
        </div>
      </div>

      {/* Requests Table */}
      <div className="bg-[#0A0D14] border border-white/5 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
          <h3 className="text-xl font-bold">Withdrawal Requests</h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-yellow-500 text-[#06080D] rounded-xl text-sm font-bold hover:bg-yellow-600 transition-all">Process All Pending</button>
          </div>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-wider">
              <th className="px-8 py-4">ID / User</th>
              <th className="px-8 py-4">Amount / Currency</th>
              <th className="px-8 py-4">Wallet Address</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {withdrawals.map((req) => (
              <tr key={req.id} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-8 py-5">
                  <div>
                    <p className="font-bold text-white group-hover:text-yellow-500 transition-colors">{req.id}</p>
                    <p className="text-xs text-gray-500">@{req.user}</p>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <div>
                    <p className="font-bold text-white">{req.amount}</p>
                    <p className="text-xs text-blue-400 font-medium">{req.currency}</p>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors cursor-pointer">
                    <span className="text-sm font-mono">{req.address}</span>
                    <ExternalLink size={14} />
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                    req.status === 'completed' ? "bg-emerald-400/10 text-emerald-400" :
                    req.status === 'pending' ? "bg-yellow-400/10 text-yellow-400" :
                    req.status === 'processing' ? "bg-blue-400/10 text-blue-400" :
                    "bg-red-400/10 text-red-400"
                  )}>
                    {req.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <div className="flex items-center justify-end gap-2 text-gray-400">
                    <button className="p-2 hover:bg-emerald-400/10 hover:text-emerald-400 rounded-lg transition-all" title="Approve">
                      <CheckCircle2 size={18} />
                    </button>
                    <button className="p-2 hover:bg-red-400/10 hover:text-red-400 rounded-lg transition-all" title="Reject">
                      <XCircle size={18} />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
