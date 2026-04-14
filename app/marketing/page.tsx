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
    <div className="space-y-10 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Ad Banners */}
        <div className="lg:col-span-2 space-y-10">
           <div className="bg-white border-2 border-slate-200 rounded-[52px] p-12 shadow-[0_60px_120px_-30px_rgba(15,23,42,0.15)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50/50 rounded-bl-full translate-x-12 -translate-y-12 transition-all duration-1000 group-hover:scale-110"></div>
              
              <div className="flex justify-between items-center mb-12 relative z-10">
                 <div className="flex items-center gap-5">
                    <div className="p-5 bg-orange-500 rounded-2xl text-white shadow-2xl shadow-orange-500/30">
                       <ImageIcon size={32} />
                    </div>
                    <div>
                       <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-widest leading-none">Banner Campaigns</h3>
                       <p className="text-slate-400 text-xs font-bold mt-2 uppercase tracking-widest opacity-80">Orchestrate mobile app slider visuals</p>
                    </div>
                 </div>
                 <button className="flex items-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-[24px] text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-slate-900/10 hover:bg-orange-600 transition-all">
                    <Plus size={20} /> New Campaign
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                 {banners.map((banner) => (
                    <div key={banner.id} className="bg-slate-50 border-2 border-slate-100 rounded-[44px] p-8 group/item relative hover:bg-white hover:border-orange-500/30 transition-all duration-700 shadow-[0_25px_50px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_45px_90px_-15px_rgba(249,115,22,0.15)]">
                       <div className="aspect-[2/1] bg-slate-200 rounded-[32px] mb-8 overflow-hidden relative border-2 border-white shadow-xl">
                          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-black text-xs uppercase italic tracking-widest">
                             Pre-flight Review
                          </div>
                          <div className="absolute top-5 right-5 px-5 py-2 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-600 border-2 border-emerald-100 shadow-2xl shadow-emerald-500/10">
                             Status: Online
                          </div>
                       </div>
                       <h4 className="font-black text-slate-900 text-xl mb-1.5 px-2">{banner.title}</h4>
                       <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-8 truncate px-2 opacity-60">{banner.link}</p>
                       <div className="flex gap-4">
                          <button className="flex-1 py-4 bg-white border-2 border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm">Modify</button>
                          <button className="p-4 text-red-500 bg-red-50/50 border-2 border-red-50 rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-xl shadow-red-500/10"><Trash2 size={20} /></button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* News & Updates */}
           <div className="bg-white border-2 border-slate-200 rounded-[52px] p-12 shadow-[0_60px_120px_-30px_rgba(15,23,42,0.15)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/10 rounded-br-full -translate-x-12 -translate-y-12"></div>
              
              <div className="flex items-center gap-5 mb-10 text-orange-500 relative z-10">
                 <div className="p-5 bg-orange-50 rounded-2xl border-2 border-orange-100 shadow-xl shadow-orange-500/5"><MessageSquare size={32} /></div>
                 <div>
                    <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-widest leading-none">Global Broadcast</h3>
                    <p className="text-slate-400 text-xs font-bold mt-2 uppercase tracking-widest opacity-80">Push real-time news to dashboard nodes</p>
                 </div>
              </div>
              
              <div className="space-y-8 relative z-10">
                 <textarea placeholder="Type your announcement content here..." className="w-full h-44 bg-slate-50 border-2 border-slate-100 rounded-[40px] p-10 outline-none focus:border-orange-500/20 text-sm font-bold resize-none shadow-inner" />
                 <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-slate-50 border-2 border-slate-100 rounded-[36px] gap-6">
                    <div className="flex items-center gap-4 px-4 py-2 bg-white rounded-full border-2 border-slate-100 shadow-sm">
                       <div className="w-14 h-7 bg-orange-500 rounded-full relative p-1 cursor-pointer">
                          <div className="w-5 h-5 bg-white rounded-full absolute right-1 shadow-inner"></div>
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Device Push Trigger</span>
                    </div>
                    <button className="w-full md:w-auto px-16 py-5 bg-orange-500 text-white font-black rounded-[28px] text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-orange-500/40 hover:scale-[1.05] active:scale-95 transition-all">Publish Satellite Update</button>
                 </div>
              </div>
           </div>
        </div>

        {/* Affiliate Config */}
        <div className="space-y-10">
           <div className="bg-white border-2 border-slate-200 rounded-[52px] p-12 shadow-[0_60px_120px_-30px_rgba(15,23,42,0.15)] space-y-10 relative overflow-hidden border-t-8 border-t-blue-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full translate-x-12 -translate-y-12"></div>
              
              <div className="flex items-center gap-5 text-blue-500 relative z-10">
                 <div className="p-4 bg-blue-50 rounded-2xl border-2 border-blue-100 shadow-xl shadow-blue-500/5 items-center justify-center flex"><Layers size={32} /></div>
                 <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-widest leading-none">Referral Levels</h3>
              </div>

              <div className="space-y-6 relative z-10">
                 <LevelItem level={1} percentage={10} color="bg-orange-500" />
                 <LevelItem level={2} percentage={5} color="bg-orange-400" />
                 <LevelItem level={3} percentage={3} color="bg-orange-300" />
                 <LevelItem level={4} percentage={2} color="bg-orange-200" />
                 <LevelItem level={5} percentage={1} color="bg-orange-100" />
              </div>

              <button className="w-full py-5 bg-slate-900 text-white font-black rounded-[32px] text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-3 hover:bg-blue-600 transition-all">
                 <Settings size={20} /> Re-Calculate Revenue Share
              </button>
           </div>

           <div className="bg-white border-2 border-slate-200 rounded-[52px] p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] flex items-center justify-between group cursor-pointer hover:border-orange-500 transition-all relative overflow-hidden">
              <div className="absolute -left-16 -bottom-16 w-44 h-44 bg-slate-50 rounded-full group-hover:bg-orange-50 transition-all duration-1000"></div>
              
              <div className="flex items-center gap-8 relative z-10">
                 <div className="w-16 h-16 rounded-[22px] bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-orange-500 group-hover:border-orange-100 transition-all shadow-sm">
                    <Share2 size={32} />
                 </div>
                 <div>
                    <h4 className="text-xl font-black text-slate-900 tracking-tight uppercase tracking-widest">Share Engine</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1 opacity-70">Manage deep-link templates</p>
                 </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-2xl group-hover:shadow-orange-500/40 transition-all border-2 border-transparent">
                 <ArrowRight size={22} />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function LevelItem({ level, percentage, color }: any) {
   return (
      <div className="p-8 bg-slate-50 border-2 border-slate-100 rounded-[40px] group hover:bg-white hover:border-orange-500/20 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_-15px_rgba(249,115,22,0.1)]">
         <div className="flex justify-between items-center mb-5">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors">Level {level} Yield</span>
            <span className="text-xs font-black text-orange-500 bg-orange-50 px-4 py-2 rounded-xl border-2 border-orange-100 shadow-sm">{percentage}% SHA</span>
         </div>
         <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden p-1 border-2 border-slate-200 shadow-inner">
            <div className={cn("h-full rounded-full transition-all duration-1000 shadow-sm", color)} style={{ width: `${percentage * 5}%` }}></div>
         </div>
      </div>
   )
}
