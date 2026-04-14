"use client";

import React from 'react';
import { 
  History, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Play, 
  Gift, 
  Search,
  Filter
} from 'lucide-react';
import { cn } from '@/lib/utils';

const transactions = [
  { id: 'TX-1001', user: 'ahmad_k', type: 'ad_reward', amount: '+10 Coins', date: '2026-04-14 14:05', status: 'success' },
  { id: 'TX-1002', user: 'jdoe', type: 'withdrawal', amount: '-$5.00', date: '2026-04-14 13:50', status: 'pending' },
  { id: 'TX-1003', user: 'mross', type: 'game_win', amount: '+50 Coins', date: '2026-04-14 13:30', status: 'success' },
  { id: 'TX-1004', user: 'sarah_w', type: 'referral_bonus', amount: '+100 Coins', date: '2026-04-14 12:15', status: 'success' },
  { id: 'TX-1005', user: 'harvey_s', type: 'deposit', amount: '+$50.00', date: '2026-04-14 11:45', status: 'success' },
];

export default function LedgerPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4 text-white">
          <History size={28} className="text-blue-400" />
          <h3 className="text-2xl font-bold">Transaction Ledger</h3>
        </div>
        <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-white/10">
          Export CSV
        </button>
      </div>

      <div className="bg-[#0A0D14] border border-white/5 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-white/5 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input type="text" placeholder="Search by User or TXID..." className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm outline-none focus:border-yellow-500/50" />
          </div>
          <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-gray-400 outline-none">
            <option>All Transaction Types</option>
            <option>Ad Rewards</option>
            <option>Withdrawals</option>
            <option>Deposits</option>
            <option>Game Wins</option>
          </select>
          <div className="flex gap-2">
            <input type="date" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-gray-400 outline-none" />
          </div>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="bg-white/5 text-gray-400 text-xs font-bold uppercase">
              <th className="px-8 py-4">TXID / User</th>
              <th className="px-8 py-4">Activity Type</th>
              <th className="px-8 py-4">Impact</th>
              <th className="px-8 py-4">Timestamp</th>
              <th className="px-8 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-8 py-5">
                  <p className="font-mono text-sm text-white">{tx.id}</p>
                  <p className="text-xs text-gray-500">@{tx.user}</p>
                </td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    {_getTypeIcon(tx.type)}
                    <span className="capitalize text-sm font-medium">{tx.type.replace('_', ' ')}</span>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className={cn(
                    "font-bold",
                    tx.amount.startsWith('+') ? "text-emerald-400" : "text-red-400"
                  )}>
                    {tx.amount}
                  </span>
                </td>
                <td className="px-8 py-5 text-gray-500 text-xs">
                  {tx.date}
                </td>
                <td className="px-8 py-5">
                  <span className={cn(
                    "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                    tx.status === 'success' ? "bg-emerald-400/10 text-emerald-400" : "bg-yellow-400/10 text-yellow-400"
                  )}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function _getTypeIcon(type: string) {
  switch (type) {
    case 'ad_reward': return <Play size={16} className="text-blue-400" />;
    case 'withdrawal': return <ArrowUpRight size={16} className="text-red-400" />;
    case 'deposit': return <ArrowDownLeft size={16} className="text-emerald-400" />;
    case 'game_win': return <Gift size={16} className="text-purple-400" />;
    default: return <History size={16} className="text-gray-400" />;
  }
}
