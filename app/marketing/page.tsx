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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ad Banners */}
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white border-2 border-slate-200 rounded-[40px] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.08)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-bl-full translate-x-12 -translate-y-12"></div>
              
              <div className="flex justify-between items-center mb-10 relative z-10">
                 <div className="flex items-center gap-4">
                    <div className="p-4 bg-orange-500 rounded-2xl text-white shadow-lg shadow-orange-500/20">
                       <ImageIcon size={24} />
                    </div>
                    <div>
                       <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-widest">Banner Campaigns</h3>
                       <p className="text-slate-500 text-sm font-medium">Manage top slider images in mobile app</p>
                    </div>
                 </div>
                 <button className="flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-orange-600 transition-all">
                    <Plus size={18} /> New Banner
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                 {banners.map((banner) => (
                    <div key={banner.id} className="bg-slate-50 rounded-[32px] p-8 border-2 border-slate-100 group/item relative hover:bg-white hover:border-orange-500/30 hover:shadow-xl transition-all duration-500">
                       <div className="aspect-[2/1] bg-slate-200 rounded-3xl mb-6 overflow-hidden relative border-2 border-white shadow-sm transition-transform group-hover/item:scale-[1.02]">
                          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-black text-xs uppercase italic">
                             Banner Preview
                          </div>
                          <div className="absolute top-4 right-4 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-600 border-2 border-emerald-100 shadow-sm">
                             Active Now
                          </div>
                       </div>
                       <h4 className="font-black text-slate-900 text-lg mb-1">{banner.title}</h4>
                       <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-6 truncate">{banner.link}</p>
                       <div className="flex gap-4">
                          <button className="flex-1 py-3 bg-white border-2 border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">Modify</button>
                          <button className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all border-2 border-transparent hover:border-red-100"><Trash2 size={18} /></button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* News & Updates */}
           <div className="bg-white border-2 border-slate-200 rounded-[40px] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.08)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-bl-full translate-x-12 -translate-y-12"></div>
              
              <div className="flex items-center gap-4 mb-10 text-orange-500 relative z-10">
                 <div className="p-4 bg-orange-50 rounded-2xl border-2 border-orange-100"><MessageSquare size={28} /></div>
                 <div>
                    <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-widest">Global News</h3>
                    <p className="text-slate-500 text-sm font-medium">Push real-time updates to all user devices</p>
                 </div>
              </div>
              
              <div className="space-y-6 relative z-10">
                 <textarea placeholder="Type your announcement content here..." className="w-full h-40 bg-slate-50 border-2 border-slate-100 rounded-[32px] p-8 outline-none focus:border-orange-500/20 text-sm font-bold resize-none" />
                 <div className="flex justify-between items-center p-4 bg-slate-50 border-2 border-slate-100 rounded-3xl">
                    <div className="flex items-center gap-3 px-2">
                       <div className="w-12 h-6 bg-orange-500 rounded-full relative p-1 cursor-pointer">
                          <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Push Notification Triggered</span>
                    </div>
                    <button className="px-12 py-4 bg-orange-500 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-2xl shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all">Broadcast Update</button>
                 </div>
              </div>
           </div>
        </div>

        {/* Affiliate Config */}
        <div className="space-y-8">
           <div className="bg-white border-2 border-slate-200 rounded-[40px] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.08)] space-y-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full translate-x-8 -translate-y-8"></div>
              
              <div className="flex items-center gap-4 text-blue-500 relative z-10">
                 <div className="p-3 bg-blue-50 rounded-2xl border-2 border-blue-100 items-center justify-center flex"><Layers size={28} /></div>
                 <h3 className="text-xl font-black tracking-tight text-slate-900 uppercase tracking-widest line-clamp-1">Referral Matrix</h3>
              </div>

              <div className="space-y-5 relative z-10">
                 <LevelItem level={1} percentage={10} color="bg-orange-500" />
                 <LevelItem level={2} percentage={5} color="bg-orange-400" />
                 <LevelItem level={3} percentage={3} color="bg-orange-300" />
                 <LevelItem level={4} percentage={2} color="bg-orange-200" />
                 <LevelItem level={5} percentage={1} color="bg-orange-100" />
              </div>

              <button className="w-full py-5 bg-slate-900 text-white font-black rounded-[24px] text-[10px] uppercase tracking-widest shadow-2xl shadow-slate-900/10 flex items-center justify-center gap-3 hover:bg-blue-600 transition-all">
                 <Settings size={18} /> Reconfigure Percentages
              </button>
           </div>

           <div className="bg-white border-2 border-slate-200 rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-center justify-between group cursor-pointer hover:border-orange-500 transition-all relative overflow-hidden">
              <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-orange-50 transition-colors duration-700"></div>
              
              <div className="flex items-center gap-6 relative z-10">
                 <div className="w-14 h-14 rounded-2xl bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-orange-500 transition-colors">
                    <Share2 size={28} />
                 </div>
                 <div>
                    <h4 className="text-lg font-black text-slate-900 tracking-tight">Direct Referrals</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Manage templates</p>
                 </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                 <ArrowRight size={18} />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function LevelItem({ level, percentage, color }: any) {
   return (
      <div className="p-6 bg-slate-50 border-2 border-slate-100 rounded-[32px] group hover:bg-white hover:border-orange-500 transition-all duration-300">
         <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">Level {level} Direct</span>
            <span className="text-sm font-black text-orange-500 bg-orange-50 px-3 py-1 rounded-lg border border-orange-100">{percentage}%</span>
         </div>
         <div className="w-full h-2 bg-slate-200/50 rounded-full overflow-hidden p-0.5 border border-slate-100">
            <div className={cn("h-full rounded-full transition-all duration-1000", color)} style={{ width: `${percentage * 5}%` }}></div>
         </div>
      </div>
   )
}
