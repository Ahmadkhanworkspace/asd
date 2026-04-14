"use client";

import React, { useState } from 'react';
import { 
  Megaphone, 
  Plus, 
  Image as ImageIcon, 
  ExternalLink, 
  Trash2, 
  Share2, 
  Users, 
  Layers,
  Settings,
  Globe,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MarketingPage() {
  const [banners] = useState([
    { id: 1, title: 'Welcome Special', image: 'banner1.jpg', link: 'https://earnx.com/promo', active: true },
    { id: 2, title: 'Xtreme Matrix Launch', image: 'banner2.jpg', link: 'https://earnx.com/xtreme', active: true },
  ]);

  return (
    <div className="space-y-12 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Ad Banners */}
        <div className="lg:col-span-2 space-y-12">
           <div className="bg-white border-2 border-slate-300 rounded-[64px] p-16 shadow-[0_80px_160px_-40px_rgba(15,23,42,0.25)] relative overflow-hidden group border-t-[12px] border-t-orange-500">
              <div className="absolute top-0 right-0 w-44 h-44 bg-orange-50 rounded-bl-full translate-x-12 -translate-y-12 transition-all duration-1000 group-hover:scale-125"></div>
              
              <div className="flex justify-between items-center mb-16 relative z-10">
                 <div className="flex items-center gap-6">
                    <div className="p-6 bg-orange-500 rounded-[28px] text-white shadow-2xl shadow-orange-500/30">
                       <ImageIcon size={40} />
                    </div>
                    <div>
                       <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em] leading-none">Banner campaigns</h3>
                       <p className="text-slate-500 text-sm font-black mt-3 uppercase tracking-[0.3em] opacity-80">Orchestrate mobile app slider visuals</p>
                    </div>
                 </div>
                 <button className="flex items-center gap-4 px-12 py-6 bg-slate-900 text-white rounded-[28px] text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-slate-900/40 hover:bg-orange-600 transition-all">
                    <Plus size={24} /> Register Asset
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                 {banners.map((banner) => (
                    <div key={banner.id} className="bg-slate-50 border-2 border-slate-200 rounded-[52px] p-10 group/item relative hover:bg-white hover:border-orange-500/30 transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_60px_100px_-20px_rgba(249,115,22,0.2)]">
                       <div className="aspect-[2/1] bg-slate-200 rounded-[40px] mb-10 overflow-hidden relative border-4 border-white shadow-2xl">
                          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-black text-xs uppercase italic tracking-[0.4em] opacity-50">
                             Visual Node
                          </div>
                          <div className="absolute top-6 right-6 px-6 py-2.5 bg-white/95 backdrop-blur-xl rounded-full text-[11px] font-black uppercase tracking-[0.3em] text-emerald-600 border-2 border-emerald-100 shadow-2xl">
                             LIVE_BROADCAST
                          </div>
                       </div>
                       <h4 className="font-black text-slate-900 text-2xl mb-2 px-3 tracking-tighter">{banner.title}</h4>
                       <p className="text-[11px] text-orange-600 font-black uppercase tracking-[0.3em] mb-10 truncate px-3 opacity-80 bg-orange-50 w-fit rounded-lg py-1">{banner.link}</p>
                       <div className="flex gap-4">
                          <button className="flex-1 py-5 bg-white border-2 border-slate-200 rounded-[22px] text-[11px] font-black uppercase tracking-[0.3em] hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm">Edit node</button>
                          <button className="p-5 text-red-500 bg-red-50 border-2 border-red-50 rounded-[22px] hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-xl shadow-red-500/10"><Trash2 size={24} /></button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* News & Updates */}
           <div className="bg-white border-2 border-slate-300 rounded-[64px] p-16 shadow-[0_80px_160px_-40px_rgba(15,23,42,0.25)] relative overflow-hidden group border-t-[12px] border-t-slate-900">
              <div className="absolute top-0 right-0 w-44 h-44 bg-slate-100/50 rounded-bl-full translate-x-12 -translate-y-12"></div>
              
              <div className="flex items-center gap-6 mb-12 text-slate-900 relative z-10">
                 <div className="p-6 bg-slate-900 text-white rounded-[28px] shadow-2xl shadow-slate-900/20"><MessageSquare size={40} /></div>
                 <div>
                    <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em] leading-none">News Protocol</h3>
                    <p className="text-slate-500 text-sm font-black mt-3 uppercase tracking-[0.3em] opacity-80">Broadcast real-time intelligence to dashboard nodes</p>
                 </div>
              </div>
              
              <div className="space-y-10 relative z-10">
                 <textarea placeholder="Identify message parameters..." className="w-full h-52 bg-slate-100 border-2 border-slate-200 rounded-[48px] p-12 outline-none focus:border-orange-500 transition-all text-sm font-black shadow-inner" />
                 <div className="flex flex-col xl:flex-row justify-between items-center p-8 bg-slate-100 border-2 border-slate-200 rounded-[44px] gap-8 shadow-sm">
                    <div className="flex items-center gap-6 px-6 py-4 bg-white rounded-full border-2 border-slate-200 shadow-inner">
                       <div className="w-16 h-8 bg-orange-500 rounded-full relative p-1 cursor-pointer">
                          <div className="w-6 h-6 bg-white rounded-full absolute right-1 shadow-2xl"></div>
                       </div>
                       <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-600">Global Push Trigger</span>
                    </div>
                    <button className="w-full xl:w-auto px-20 py-6 bg-orange-500 text-white font-black rounded-[32px] text-[11px] uppercase tracking-[0.4em] shadow-[0_30px_60px_rgba(249,115,22,0.4)] hover:scale-[1.05] transition-all">Publish Core update</button>
                 </div>
              </div>
           </div>
        </div>

        {/* Affiliate Config */}
        <div className="space-y-12">
           <div className="bg-white border-2 border-slate-300 rounded-[64px] p-16 shadow-[0_80px_160px_-40px_rgba(15,23,42,0.25)] space-y-12 relative overflow-hidden border-t-[12px] border-t-blue-500">
              <div className="absolute top-0 right-0 w-44 h-44 bg-blue-50 rounded-bl-full translate-x-12 -translate-y-12"></div>
              
              <div className="flex items-center gap-6 text-blue-500 relative z-10">
                 <div className="p-6 bg-blue-50 rounded-[28px] border-2 border-blue-200 shadow-2xl shadow-blue-500/10 items-center justify-center flex"><Layers size={40} /></div>
                 <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em] leading-none">Yield Matrix</h3>
              </div>

              <div className="space-y-8 relative z-10">
                 <LevelItem level={1} percentage={10} color="bg-orange-500" />
                 <LevelItem level={2} percentage={5} color="bg-orange-400" />
                 <LevelItem level={3} percentage={3} color="bg-orange-300" />
                 <LevelItem level={4} percentage={2} color="bg-orange-200" />
                 <LevelItem level={5} percentage={1} color="bg-orange-100" />
              </div>

              <button className="w-full py-6 bg-slate-900 text-white font-black rounded-[32px] text-[11px] uppercase tracking-[0.4em] shadow-[0_30px_60px_rgba(15,23,42,0.5)] flex items-center justify-center gap-4 hover:bg-blue-600 transition-all">
                 <Settings size={28} /> Re-Calculate Revenue Node
              </button>
           </div>

           <div className="bg-white border-2 border-slate-300 rounded-[64px] p-12 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.15)] flex items-center justify-between group cursor-pointer hover:border-orange-500 transition-all duration-700 relative overflow-hidden border-l-[12px] border-l-orange-500">
              <div className="absolute -left-20 -bottom-20 w-56 h-56 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-all duration-1000"></div>
              
              <div className="flex items-center gap-10 relative z-10">
                 <div className="w-20 h-20 rounded-[32px] bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-orange-500 group-hover:border-orange-200 transition-all shadow-2xl">
                    <Share2 size={40} />
                 </div>
                 <div>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase tracking-[0.2em]">Share Portal</h4>
                    <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.3em] mt-2 opacity-80">Access referral assets</p>
                 </div>
              </div>
              <div className="w-14 h-14 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-2xl group-hover:shadow-orange-500/30 transition-all border-2 border-slate-200 group-hover:border-orange-500">
                 <ArrowRight size={28} />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function LevelItem({ level, percentage, color }: any) {
   return (
      <div className="p-10 bg-slate-100 border-2 border-slate-200 rounded-[48px] group hover:bg-white hover:border-orange-500/20 transition-all duration-700 shadow-inner hover:shadow-2xl">
         <div className="flex justify-between items-center mb-6">
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-slate-900 transition-colors">Depth_Level_{level}</span>
            <span className="text-sm font-black text-orange-600 bg-white px-5 py-2.5 rounded-2xl border-2 border-orange-100 shadow-2xl">{percentage}% Yield</span>
         </div>
         <div className="w-full h-4 bg-white rounded-full overflow-hidden p-1.5 border-2 border-slate-200 shadow-inner">
            <div className={cn("h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(0,0,0,0.1)]", color)} style={{ width: `${percentage * 5}%` }}></div>
         </div>
      </div>
   )
}
