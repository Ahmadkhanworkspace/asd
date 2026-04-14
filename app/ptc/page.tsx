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
    <div className="space-y-12 pb-20">
      {/* PTC Membership Tiers */}
      <div className="bg-white border-2 border-slate-300 rounded-[64px] p-16 shadow-[0_80px_160px_-40px_rgba(15,23,42,0.25)] relative overflow-hidden group border-t-[12px] border-t-emerald-500">
        <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-50 rounded-bl-full translate-x-12 -translate-y-12 transition-all duration-1000 group-hover:scale-125"></div>
        
        <div className="flex justify-between items-center mb-16 relative z-10">
           <div className="flex items-center gap-6 text-emerald-500">
              <div className="w-20 h-20 bg-emerald-50 rounded-[32px] border-2 border-emerald-200 flex items-center justify-center shadow-2xl shadow-emerald-500/10"><CheckCircle2 size={40} /></div>
              <div>
                 <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em] leading-none">Membership Protocol</h3>
                 <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">Scale user earning power via life-time multipliers</p>
              </div>
           </div>
           <button className="flex items-center gap-4 px-12 py-5 bg-slate-900 text-white rounded-[24px] text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl hover:bg-emerald-600 transition-all shadow-slate-900/30">
              <Plus size={22} /> Deploy Tier Node
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
           <TierCard name="Free" price="0" multiplier="1.0x" color="slate" />
           <TierCard name="Silver" price="25" multiplier="2.5x" color="orange" />
           <TierCard name="Gold" price="100" multiplier="5.0x" color="blue" />
           <TierCard name="Diamond" price="500" multiplier="12.0x" color="purple" />
        </div>
      </div>

      {/* Global PTC Settings */}
      <div className="bg-white border-2 border-slate-300 rounded-[56px] p-16 shadow-[0_60px_120px_-30px_rgba(15,23,42,0.2)] border-l-[12px] border-l-orange-500">
        <div className="flex items-center gap-6 text-orange-500 mb-16">
           <div className="w-20 h-20 bg-orange-50 rounded-[32px] border-2 border-orange-200 flex items-center justify-center shadow-2xl shadow-orange-500/10"><Settings size={40} /></div>
           <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em] leading-none">PTC Engine Engine</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           <div className="space-y-4 px-2">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Universal Countdown</label>
              <div className="relative">
                 <input type="number" defaultValue="20" className="w-full bg-slate-100 border-2 border-slate-200 rounded-[32px] px-10 py-6 text-lg font-black outline-none focus:border-orange-500 transition-all shadow-inner" />
                 <span className="absolute right-10 top-1/2 -translate-y-1/2 text-slate-400 font-black text-[11px] uppercase tracking-widest bg-white px-3 py-1 rounded-lg border border-slate-200">SECONDS</span>
              </div>
           </div>
           <div className="space-y-4 px-2">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Baseline Reward</label>
              <div className="relative">
                 <input type="number" defaultValue="50" className="w-full bg-slate-100 border-2 border-slate-200 rounded-[32px] px-10 py-6 text-lg font-black outline-none focus:border-orange-500 transition-all shadow-inner" />
                 <span className="absolute right-10 top-1/2 -translate-y-1/2 text-slate-400 font-black text-[11px] uppercase tracking-widest bg-white px-3 py-1 rounded-lg border border-slate-200">COINS</span>
              </div>
           </div>
           <div className="flex items-end px-2">
              <button className="w-full py-6 bg-orange-500 text-white font-black rounded-[32px] text-[11px] uppercase tracking-[0.3em] hover:bg-slate-900 transition-all shadow-[0_30px_60px_rgba(249,115,22,0.4)]">
                 Synchronize Engine
              </button>
           </div>
        </div>
      </div>

      {/* Ad Inventory */}
      <div className="bg-white border-2 border-slate-300 rounded-[64px] shadow-[0_80px_160px_-40px_rgba(15,23,42,0.3)] overflow-hidden border-t-[12px] border-t-slate-900">
        <div className="p-16 border-b-2 border-slate-200 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-12 bg-slate-100/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-900/5 rounded-full translate-x-32 -translate-y-32"></div>
          
          <div className="relative z-10 flex items-center gap-8">
            <div className="w-4 h-16 bg-orange-500 rounded-full"></div>
            <div>
               <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em] leading-none">Campaign Inventory</h3>
               <p className="text-slate-500 text-xs font-black mt-3 uppercase tracking-[0.3em] opacity-80">Orchestrate live PTC advertising nodes</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full xl:w-auto relative z-10">
            <div className="relative flex-1 md:w-96 shadow-lg rounded-[32px]">
              <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
              <input type="text" placeholder="Identity Scan: Inventory..." className="w-full pl-20 pr-8 py-6 bg-white border-2 border-slate-200 rounded-[32px] text-sm font-black outline-none focus:border-orange-500 transition-all" />
            </div>
            <button className="flex items-center justify-center gap-4 px-12 py-6 bg-orange-500 text-white rounded-[32px] text-[11px] font-black uppercase tracking-[0.3em] shadow-[0_30px_60px_rgba(249,115,22,0.4)] hover:scale-[1.05] active:scale-95 transition-all">
              <Plus size={24} /> New Campaign
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-100 text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] border-b-2 border-slate-200">
                <th className="px-16 py-8">Network Node</th>
                <th className="px-16 py-8">Yield Params</th>
                <th className="px-16 py-8">Impression Load</th>
                <th className="px-16 py-8">Node Lifecycle</th>
                <th className="px-16 py-8 text-right">Ops Terminal</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-100">
              {ads.map((ad) => (
                <tr key={ad.id} className="hover:bg-slate-50 transition-all duration-500 group">
                  <td className="px-16 py-10">
                    <div className="flex items-center gap-8">
                       <div className="w-20 h-20 rounded-[28px] bg-white border-4 border-slate-100 flex items-center justify-center text-orange-500 shadow-2xl transition-all duration-700 group-hover:rotate-12 group-hover:scale-110">
                          <Globe size={32} />
                       </div>
                       <div>
                          <p className="font-black text-slate-900 text-2xl tracking-tighter leading-none mb-2.5">{ad.title}</p>
                          <a href={ad.url} target="_blank" className="text-[10px] text-white font-black uppercase tracking-[0.2em] bg-slate-900 px-4 py-2 rounded-xl flex items-center gap-2.5 hover:bg-orange-600 transition-all shadow-lg shadow-slate-900/10">
                             {ad.url} <ExternalLink size={14} />
                          </a>
                       </div>
                    </div>
                  </td>
                  <td className="px-16 py-10">
                    <div className="flex flex-col gap-3">
                       <div className="flex items-center gap-2.5 text-lg font-black text-slate-900">
                          <div className="p-2 bg-orange-50 rounded-lg text-orange-500 border border-orange-100 shadow-sm"><Coins size={20} /></div> {ad.reward} <span className="text-xs text-slate-400 uppercase">Coins</span>
                       </div>
                       <div className="flex items-center gap-2.5 text-[11px] font-black text-slate-500 uppercase tracking-widest bg-slate-100 px-4 py-2 rounded-xl border border-slate-200 shadow-inner w-fit">
                          <Clock size={16} /> {ad.duration} Seconds
                       </div>
                    </div>
                  </td>
                  <td className="px-16 py-10">
                    <p className="font-black text-slate-900 text-4xl tracking-tighter leading-none mb-2">{ad.views.toLocaleString()}</p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] opacity-60">Verified Conversions</p>
                  </td>
                  <td className="px-16 py-10">
                    <span className={cn(
                      "px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.3em] border-2 shadow-2xl transition-all",
                      ad.status === 'active' ? "bg-emerald-50 text-emerald-600 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600" : "bg-orange-50 text-orange-600 border-orange-200 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600"
                    )}>{ad.status}</span>
                  </td>
                  <td className="px-16 py-10 text-right">
                    <div className="flex justify-end gap-5">
                       <button className="p-5 bg-white border-2 border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-400 rounded-3xl transition-all shadow-2xl shadow-slate-900/5">
                          <Edit2 size={24} />
                       </button>
                       <button className="p-5 bg-red-50 border-2 border-red-100 text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600 rounded-3xl transition-all shadow-2xl shadow-red-500/20">
                          <Trash2 size={24} />
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
      slate: "bg-slate-100 border-slate-200 text-slate-500 group-hover:border-slate-400",
      orange: "bg-orange-50 border-orange-200 text-orange-600 group-hover:border-orange-400",
      blue: "bg-blue-50 border-blue-200 text-blue-600 group-hover:border-blue-400",
      purple: "bg-purple-50 border-purple-200 text-purple-600 group-hover:border-purple-400",
   };

   const iconMap: any = {
      slate: "border-slate-900 text-slate-900",
      orange: "border-orange-500 text-orange-500 shadow-orange-500/10",
      blue: "border-blue-500 text-blue-500 shadow-blue-500/10",
      purple: "border-purple-500 text-purple-500 shadow-purple-500/10",
   }

   return (
      <div className="bg-white border-2 border-slate-300 p-12 rounded-[52px] group transition-all duration-700 hover:border-orange-500 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.2)] hover:shadow-[0_80px_120px_-20px_rgba(249,115,22,0.35)] hover:-translate-y-4 relative overflow-hidden border-t-[10px] border-t-slate-100 hover:border-t-orange-500">
         <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-full translate-x-12 -translate-y-12 transition-transform duration-1000 group-hover:translate-x-6 group-hover:-translate-y-6 opacity-60"></div>
         
         <div className="relative z-10">
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-3 group-hover:text-slate-900 transition-colors">{name}_PROTOCOL</p>
            <div className="flex items-baseline gap-2 mb-10 px-1">
               <span className="text-6xl font-black text-slate-900 tracking-tighter leading-none">${price}</span>
               <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">/Life-time</span>
            </div>
            
            <div className={cn("inline-flex items-center gap-4 px-8 py-4 rounded-[28px] font-black text-[12px] uppercase tracking-[0.3em] mb-12 transition-all border-2 shadow-2xl", colorMap[color])}>
               <TrendingUp size={20} /> {multiplier} Multiplier
            </div>

            <button className="w-full py-6 bg-slate-100 border-2 border-slate-200 text-slate-900 font-black rounded-3xl text-[11px] uppercase tracking-[0.3em] group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all shadow-inner">
               Update Protocol
            </button>
         </div>
      </div>
   )
}
