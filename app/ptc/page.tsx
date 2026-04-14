"use client";

import React, { useState } from 'react';
import { 
  Megaphone, 
  Settings, 
  Plus, 
  Search, 
  ExternalLink,
  Clock,
  Coins,
  Trash2,
  Edit2,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PTCPage() {
  const [ads, setAds] = useState([
    { id: 1, title: 'Visit EarnX Main Site', url: 'https://earnx.com', reward: 50, duration: 15, views: 1240, status: 'active' },
    { id: 2, title: 'Check out Our Partners', url: 'https://partner.com', reward: 30, duration: 10, views: 890, status: 'active' },
    { id: 3, title: 'Claim Daily Bonus', url: 'https://bonus.com', reward: 100, duration: 30, views: 2450, status: 'paused' },
  ]);

  return (
    <div className="space-y-10 pb-20">
      {/* Global PTC Settings */}
      <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-4 text-orange-500 mb-8">
           <Settings size={28} />
           <h3 className="text-2xl font-black tracking-tight text-slate-900">Global PTC Configuration</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Default Ad Timer</label>
              <div className="relative">
                 <input type="number" defaultValue="20" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold outline-none focus:border-orange-500/20" />
                 <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs uppercase">Seconds</span>
              </div>
           </div>
           <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Standard Reward</label>
              <div className="relative">
                 <input type="number" defaultValue="50" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold outline-none focus:border-orange-500/20" />
                 <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs uppercase">Coins</span>
              </div>
           </div>
           <div className="flex items-end">
              <button className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/10">
                 Save Global Settings
              </button>
           </div>
        </div>
      </div>

      {/* Ad Inventory */}
      <div className="bg-white border border-slate-200 rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.08)] overflow-hidden">
        <div className="p-10 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-xl font-black tracking-tight text-slate-900">Active Ad Inventory</h3>
            <p className="text-slate-500 text-sm font-medium">Manage and monitor Pay-To-Click campaigns</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="Search ads..." className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium outline-none focus:border-orange-500/20" />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-orange-500/20">
              <Plus size={18} /> Create Ad
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                <th className="px-10 py-5">Campaign Name</th>
                <th className="px-10 py-5">Earnings / Duration</th>
                <th className="px-10 py-5">Total Views</th>
                <th className="px-10 py-5">Status</th>
                <th className="px-10 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ads.map((ad) => (
                <tr key={ad.id} className="hover:bg-slate-50/30 transition-colors">
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                          <Globe size={20} />
                       </div>
                       <div>
                          <p className="font-bold text-slate-900">{ad.title}</p>
                          <a href={ad.url} target="_blank" className="text-xs text-orange-500 font-bold hover:underline flex items-center gap-1 mt-0.5">
                             {ad.url} <ExternalLink size={10} />
                          </a>
                       </div>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex flex-col gap-1">
                       <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                          <Coins size={14} className="text-orange-500" /> {ad.reward} Coins
                       </div>
                       <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          <Clock size={12} /> {ad.duration} Seconds
                       </div>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <p className="font-bold text-slate-900">{ad.views.toLocaleString()}</p>
                    <p className="text-[10px] text-slate-400 font-black uppercase mt-0.5">Impressions</p>
                  </td>
                  <td className="px-10 py-6">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                      ad.status === 'active' ? "bg-emerald-50 text-emerald-600" : "bg-orange-50 text-orange-600"
                    )}>{ad.status}</span>
                  </td>
                  <td className="px-10 py-6 text-right">
                    <div className="flex justify-end gap-2">
                       <button className="p-2.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all">
                          <Edit2 size={16} />
                       </button>
                       <button className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                          <Trash2 size={16} />
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
