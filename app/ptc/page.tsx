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
  TrendingUp,
  X,
  Share2,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PTCPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [ads, setAds] = useState([
    { id: 1, title: 'Visit EarnX Main Site', url: 'https://earnx.com', reward: 50, duration: 15, views: 1240, status: 'active' },
    { id: 2, title: 'Check out Our Partners', url: 'https://partner.com', reward: 30, duration: 10, views: 890, status: 'active' },
    { id: 3, title: 'Claim Daily Bonus', url: 'https://bonus.com', reward: 100, duration: 30, views: 2450, status: 'paused' },
  ]);

  const openConfig = (item: any) => {
     setSelectedItem(item);
     setIsModalOpen(true);
  }

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
           <button onClick={() => openConfig({name: 'New Tier'})} className="flex items-center gap-4 px-12 py-5 bg-slate-900 text-white rounded-[24px] text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl hover:bg-emerald-600 transition-all">
              <Plus size={22} /> Deploy Tier Node
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
           <TierCard name="Free" price="0" multiplier="1.0x" color="slate" onConfigure={() => openConfig({name: 'Free', price: 0, mult: '1.0x', ref: 5, matching: 0})} />
           <TierCard name="Silver" price="25" multiplier="2.5x" color="orange" onConfigure={() => openConfig({name: 'Silver', price: 25, mult: '2.5x', ref: 10, matching: 5})} />
           <TierCard name="Gold" price="100" multiplier="5.0x" color="blue" onConfigure={() => openConfig({name: 'Gold', price: 100, mult: '5.0x', ref: 15, matching: 10})} />
           <TierCard name="Diamond" price="500" multiplier="12.0x" color="purple" onConfigure={() => openConfig({name: 'Diamond', price: 500, mult: '12.0x', ref: 25, matching: 20})} />
        </div>
      </div>

      {/* Ad Inventory */}
      <div className="bg-white border-2 border-slate-300 rounded-[64px] shadow-[0_80px_160px_-40px_rgba(15,23,42,0.3)] overflow-hidden border-t-[12px] border-t-slate-900">
        <div className="p-16 border-b-2 border-slate-200 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-12 bg-slate-100/50 relative overflow-hidden">
          <div className="relative z-10 flex items-center gap-8">
            <div className="w-4 h-16 bg-orange-500 rounded-full"></div>
            <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em]">Campaign Inventory</h3>
          </div>
          <button onClick={() => openConfig({name: 'New Campaign'})} className="relative z-10 flex items-center justify-center gap-4 px-12 py-6 bg-orange-500 text-white rounded-[32px] text-[11px] font-black uppercase tracking-[0.3em] shadow-[0_30px_60px_rgba(249,115,22,0.4)] hover:scale-[1.05] transition-all">
            <Plus size={24} /> New Campaign Protocol
          </button>
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
                       <div className="w-20 h-20 rounded-[28px] bg-white border-4 border-slate-100 flex items-center justify-center text-orange-500 shadow-2xl transition-all duration-700 group-hover:rotate-12 group-hover:scale-110"><Globe size={32} /></div>
                       <p className="font-black text-slate-900 text-2xl tracking-tighter leading-none">{ad.title}</p>
                    </div>
                  </td>
                  <td className="px-16 py-10">
                    <div className="flex items-center gap-3 text-lg font-black text-slate-900 bg-slate-100 px-6 py-3 rounded-2xl border-2 border-slate-200 w-fit">
                        <Coins size={22} className="text-orange-500" /> {ad.reward} <span className="text-xs text-slate-400">Coins</span>
                    </div>
                  </td>
                  <td className="px-16 py-10">
                    <p className="font-black text-slate-900 text-4xl tracking-tighter leading-none">{ad.views.toLocaleString()}</p>
                  </td>
                  <td className="px-16 py-10">
                    <span className="px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.3em] border-2 shadow-2xl bg-emerald-50 text-emerald-600 border-emerald-200">{ad.status}</span>
                  </td>
                  <td className="px-16 py-10 text-right">
                    <button onClick={() => openConfig(ad)} className="p-5 bg-white border-2 border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-400 rounded-3xl transition-all shadow-2xl shadow-slate-900/5">
                       <Edit2 size={24} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      <ConfigModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={selectedItem} />
    </div>
  );
}

function TierCard({ name, price, multiplier, color, onConfigure }: any) {
   return (
      <div className="bg-white border-2 border-slate-300 p-12 rounded-[52px] group transition-all duration-700 hover:border-orange-500 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.2)] hover:shadow-[0_80px_120px_-20px_rgba(249,115,22,0.35)] hover:-translate-y-4 relative overflow-hidden border-t-[10px] border-t-slate-100 hover:border-t-orange-500">
         <div className="relative z-10">
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-3">{name}_PROTOCOL</p>
            <div className="flex items-baseline gap-2 mb-10 px-1">
               <span className="text-6xl font-black text-slate-900 tracking-tighter leading-none">${price}</span>
            </div>
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-slate-100 rounded-[28px] font-black text-[12px] uppercase tracking-[0.3em] mb-12 border-2 shadow-inner">
               <TrendingUp size={20} className="text-orange-500" /> {multiplier} Multiplier
            </div>
            <button onClick={onConfigure} className="w-full py-6 bg-slate-100 border-2 border-slate-200 text-slate-900 font-black rounded-3xl text-[11px] uppercase tracking-[0.3em] group-hover:bg-slate-900 group-hover:text-white transition-all shadow-inner">Update Protocol</button>
         </div>
      </div>
   )
}

function ConfigModal({ isOpen, onClose, data }: any) {
   if (!isOpen) return null;
   const isTier = data?.name !== undefined && data?.title === undefined;
   return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-12 animate-in fade-in duration-300">
         <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl" onClick={onClose}></div>
         <div className="bg-white w-full max-w-5xl border-2 border-slate-300 rounded-[64px] shadow-[0_100px_200px_-50px_rgba(0,0,0,0.5)] relative z-10 overflow-hidden border-t-[20px] border-t-emerald-500 p-16">
            <button onClick={onClose} className="absolute top-12 right-12 w-16 h-16 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
               <X size={32} />
            </button>
            <div className="mb-14">
               <h3 className="text-4xl font-black tracking-tighter text-slate-900 uppercase">PTC Configuration</h3>
               <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-xs mt-4">Adjusting: {data?.name || data?.title || 'Network Node'}</p>
            </div>
            <div className="grid grid-cols-2 gap-12 mb-16 overflow-y-auto max-h-[60vh] pr-4 scrollbar-hide">
               {/* Core Parameters */}
               <div className="space-y-8">
                  <div className="p-10 bg-slate-50 border-2 border-slate-100 rounded-[44px] space-y-8">
                     <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 flex items-center gap-3"><Zap size={16} /> Operational Nodes</h4>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">{isTier ? 'Tier Activation Price ($)' : 'Reward Pool (Coins)'}</label>
                        <input type="number" defaultValue={data?.price || data?.reward} className="w-full bg-white border-2 border-slate-200 rounded-[28px] px-8 py-5 text-lg font-black outline-none focus:border-emerald-500 shadow-sm" />
                     </div>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">{isTier ? 'Earning Multiplier (x)' : 'Ad Duration (Sec)'}</label>
                        <input type="text" defaultValue={data?.mult || data?.duration} className="w-full bg-white border-2 border-slate-200 rounded-[28px] px-8 py-5 text-lg font-black outline-none focus:border-emerald-500 shadow-sm" />
                     </div>
                  </div>
               </div>

               {/* MLM/Referral Logic (Visible only for Tiers or everywhere as basic) */}
               <div className="space-y-8">
                  <div className="p-10 bg-emerald-50 border-2 border-emerald-100 rounded-[44px] space-y-8">
                     <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-400 flex items-center gap-3"><Share2 size={16} /> Affiliate Protocol</h4>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900 ml-4">Referral Commission (%)</label>
                        <input type="number" defaultValue={data?.ref || 10} className="w-full bg-white border-2 border-emerald-200 rounded-[28px] px-8 py-5 text-lg font-black outline-none focus:border-emerald-500 shadow-sm" />
                     </div>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900 ml-4">Ad View Matching (%)</label>
                        <input type="number" defaultValue={data?.matching || 5} className="w-full bg-white border-2 border-emerald-200 rounded-[28px] px-8 py-5 text-lg font-black outline-none focus:border-emerald-500 shadow-sm" />
                     </div>
                  </div>
               </div>
            </div>
            <button onClick={onClose} className="w-full py-8 bg-slate-900 text-white rounded-[32px] font-black text-[11px] uppercase tracking-[0.5em] shadow-2xl hover:bg-emerald-600 transition-all">Synchronize Network Rules</button>
         </div>
      </div>
   )
}
