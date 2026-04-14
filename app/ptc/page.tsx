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
  Globe,
  TrendingUp
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
      {/* PTC Membership Tiers */}
      <div className="bg-white border-2 border-slate-200 rounded-[52px] p-12 shadow-[0_60px_120px_-30px_rgba(15,23,42,0.15)] relative overflow-hidden border-t-8 border-t-emerald-500">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/30 rounded-bl-full translate-x-12 -translate-y-12"></div>
        
        <div className="flex justify-between items-center mb-12 relative z-10">
           <div className="flex items-center gap-5 text-emerald-500">
              <div className="p-4 bg-emerald-50 rounded-2xl border-2 border-emerald-100 shadow-lg shadow-emerald-500/5"><CheckCircle2 size={32} /></div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-widest">Membership Tiers</h3>
           </div>
           <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-emerald-600 transition-all">
              <Plus size={18} /> New Tier
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
           <TierCard name="Free" price="0" multiplier="1.0x" color="slate" />
           <TierCard name="Silver" price="25" multiplier="2.5x" color="orange" />
           <TierCard name="Gold" price="100" multiplier="5.0x" color="blue" />
           <TierCard name="Diamond" price="500" multiplier="12.0x" color="purple" />
        </div>
      </div>

      {/* Global PTC Settings */}
      <div className="bg-white border-2 border-slate-200 rounded-[48px] p-12 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.12)]">
        <div className="flex items-center gap-5 text-orange-500 mb-12">
           <div className="p-4 bg-orange-50 rounded-2xl border-2 border-orange-100 shadow-lg shadow-orange-500/5"><Settings size={32} /></div>
           <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-widest">Engine Config</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Default Countdown</label>
              <div className="relative">
                 <input type="number" defaultValue="20" className="w-full bg-slate-50 border-2 border-slate-100 rounded-[28px] px-8 py-5 text-sm font-black outline-none focus:border-orange-500 transition-all" />
                 <span className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-300 font-black text-[10px] uppercase tracking-widest">Seconds</span>
              </div>
           </div>
           <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Standard Payout</label>
              <div className="relative">
                 <input type="number" defaultValue="50" className="w-full bg-slate-50 border-2 border-slate-100 rounded-[28px] px-8 py-5 text-sm font-black outline-none focus:border-orange-500 transition-all" />
                 <span className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-300 font-black text-[10px] uppercase tracking-widest">Coins</span>
              </div>
           </div>
           <div className="flex items-end">
              <button className="w-full py-5 bg-orange-500 text-white font-black rounded-[28px] text-[10px] uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-2xl shadow-orange-500/30">
                 Sync Global Params
              </button>
           </div>
        </div>
      </div>

      {/* Ad Inventory */}
      <div className="bg-white border-2 border-slate-200 rounded-[52px] shadow-[0_60px_120px_-30px_rgba(15,23,42,0.15)] overflow-hidden">
        <div className="p-12 border-b-2 border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-slate-50/50">
          <div>
            <h3 className="text-xl font-black tracking-tight text-slate-900 uppercase tracking-widest text-orange-500">Inventory Management</h3>
            <p className="text-slate-400 text-xs font-bold mt-1 uppercase tracking-widest opacity-80">Pay-To-Click live campaign tracking</p>
          </div>
          <div className="flex gap-6 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input type="text" placeholder="Search live inventory..." className="w-full pl-16 pr-6 py-5 bg-white border-2 border-slate-100 rounded-[28px] text-sm font-bold outline-none focus:border-orange-500 shadow-inner" />
            </div>
            <button className="flex items-center gap-3 px-10 py-5 bg-orange-500 text-white rounded-[28px] text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all">
              <Plus size={20} /> Create Ad
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-slate-100">
                <th className="px-12 py-6">Campaign Info</th>
                <th className="px-12 py-6">Payout Params</th>
                <th className="px-12 py-6">Engagement</th>
                <th className="px-12 py-6">Lifecycle</th>
                <th className="px-12 py-6 text-right">Terminal</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-100">
              {ads.map((ad) => (
                <tr key={ad.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-12 py-8">
                    <div className="flex items-center gap-6">
                       <div className="w-14 h-14 rounded-[22px] bg-white border-2 border-slate-100 flex items-center justify-center text-orange-500 shadow-sm transition-transform group-hover:rotate-6">
                          <Globe size={24} />
                       </div>
                       <div>
                          <p className="font-black text-slate-900 text-lg leading-none">{ad.title}</p>
                          <a href={ad.url} target="_blank" className="text-[10px] text-orange-500 font-black uppercase tracking-widest hover:underline flex items-center gap-1.5 mt-2">
                             {ad.url} <ExternalLink size={12} />
                          </a>
                       </div>
                    </div>
                  </td>
                  <td className="px-12 py-8">
                    <div className="flex flex-col gap-2">
                       <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                          <Coins size={16} className="text-orange-500" /> {ad.reward} Coins
                       </div>
                       <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <Clock size={14} /> {ad.duration} Seconds
                       </div>
                    </div>
                  </td>
                  <td className="px-12 py-8">
                    <p className="font-black text-slate-900 text-xl tracking-tighter">{ad.views.toLocaleString()}</p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Unique Imps</p>
                  </td>
                  <td className="px-12 py-8">
                    <span className={cn(
                      "px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border-2 shadow-sm",
                      ad.status === 'active' ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-orange-50 text-orange-600 border-orange-100"
                    )}>{ad.status}</span>
                  </td>
                  <td className="px-12 py-8 text-right">
                    <div className="flex justify-end gap-3 transition-all">
                       <button className="p-4 bg-white border-2 border-slate-100 text-slate-400 hover:text-slate-900 hover:border-slate-300 rounded-2xl transition-all shadow-sm">
                          <Edit2 size={20} />
                       </button>
                       <button className="p-4 bg-red-50 border-2 border-red-100 text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600 rounded-2xl transition-all shadow-xl shadow-red-500/10">
                          <Trash2 size={20} />
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

function TierCard({ name, price, multiplier, color }: any) {
   const colorMap: any = {
      slate: "bg-slate-50 border-slate-100 text-slate-400 group-hover:border-slate-300",
      orange: "bg-orange-50 border-orange-100 text-orange-500 group-hover:border-orange-300",
      blue: "bg-blue-50 border-blue-100 text-blue-500 group-hover:border-blue-300",
      purple: "bg-purple-50 border-purple-100 text-purple-500 group-hover:border-purple-300",
   };

   return (
      <div className="bg-white border-2 border-slate-200 p-10 rounded-[44px] group transition-all duration-700 hover:border-orange-500 shadow-[0_40px_80px_-15px_rgba(15,23,42,0.1)] hover:shadow-[0_50px_90px_-15px_rgba(249,115,22,0.2)] hover:-translate-y-3 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50/50 rounded-bl-full translate-x-12 -translate-y-12 transition-transform duration-1000 group-hover:translate-x-8 group-hover:-translate-y-8"></div>
         
         <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 group-hover:text-slate-900 transition-colors uppercase">{name} Membership</p>
            <div className="flex items-baseline gap-1 mb-8">
               <span className="text-4xl font-black text-slate-900 tracking-tighter leading-none">${price}</span>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">/LIFETIME</span>
            </div>
            
            <div className={cn("inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] mb-10 transition-all border-2", colorMap[color])}>
               <TrendingUp size={16} /> {multiplier} Dynamic Multi
            </div>

            <button className="w-full py-4.5 bg-slate-50 border-2 border-slate-100 text-slate-900 font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all shadow-inner">
               Update Level
            </button>
         </div>
      </div>
   )
}
