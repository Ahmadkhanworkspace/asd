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
  MessageSquare
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
           <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.06)]">
              <div className="flex justify-between items-center mb-10">
                 <div className="flex items-center gap-4">
                    <div className="p-4 bg-orange-500 rounded-2xl text-white">
                       <ImageIcon size={24} />
                    </div>
                    <div>
                       <h3 className="text-2xl font-black tracking-tight text-slate-900">Banner Campaigns</h3>
                       <p className="text-slate-500 text-sm font-medium">Manage top slider images in mobile app</p>
                    </div>
                 </div>
                 <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg">
                    <Plus size={18} /> Add Banner
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {banners.map((banner) => (
                    <div key={banner.id} className="bg-slate-50 rounded-[32px] p-6 border border-slate-100 group relative">
                       <div className="aspect-[2/1] bg-slate-200 rounded-2xl mb-4 overflow-hidden relative">
                          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-xs italic">
                             Banner Preview
                          </div>
                          <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-600 border border-emerald-100">
                             Active
                          </div>
                       </div>
                       <h4 className="font-bold text-slate-900 mb-1">{banner.title}</h4>
                       <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-4 truncate">{banner.link}</p>
                       <div className="flex gap-2">
                          <button className="flex-1 py-2.5 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all">Edit</button>
                          <button className="p-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={16} /></button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* News & Updates */}
           <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-4 mb-10 text-orange-500">
                 <MessageSquare size={28} />
                 <div>
                    <h3 className="text-2xl font-black tracking-tight text-slate-900">Platform News</h3>
                    <p className="text-slate-500 text-sm font-medium">Push global updates to user dashboards</p>
                 </div>
              </div>
              
              <div className="space-y-4">
                 <textarea placeholder="Type your announcement here..." className="w-full h-32 bg-slate-50 border border-slate-100 rounded-3xl p-6 outline-none focus:border-orange-500/20 text-sm font-medium" />
                 <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                       <div className="w-10 h-6 bg-orange-500 rounded-full relative p-1">
                          <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Push to all devices</span>
                    </div>
                    <button className="px-10 py-4 bg-orange-500 text-white font-black rounded-2xl text-xs uppercase tracking-widest shadow-lg shadow-orange-500/20">Publish Now</button>
                 </div>
              </div>
           </div>
        </div>

        {/* Affiliate Config */}
        <div className="space-y-8">
           <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.06)] space-y-10">
              <div className="flex items-center gap-4 text-blue-500">
                 <Layers size={28} />
                 <h3 className="text-2xl font-black tracking-tight text-slate-900">Affiliate Levels</h3>
              </div>

              <div className="space-y-6">
                 <LevelItem level={1} percentage={10} color="bg-orange-500" />
                 <LevelItem level={2} percentage={5} color="bg-orange-400" />
                 <LevelItem level={3} percentage={3} color="bg-orange-300" />
                 <LevelItem level={4} percentage={2} color="bg-orange-200" />
                 <LevelItem level={5} percentage={1} color="bg-orange-100" />
              </div>

              <button className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2">
                 <Settings size={18} /> Update Commissions
              </button>
           </div>

           <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.06)] flex items-center justify-between group cursor-pointer hover:border-orange-500/20 transition-all">
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-orange-500 transition-colors">
                    <Share2 size={32} />
                 </div>
                 <div>
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">Referral Links</h4>
                    <p className="text-xs text-slate-500 font-medium">Manage default ref templates</p>
                 </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-all">
                 <ExternalLink size={20} />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function LevelItem({ level, percentage, color }: any) {
   return (
      <div className="p-6 bg-slate-50 border border-slate-100 rounded-[32px] group hover:bg-white hover:border-orange-500/20 transition-all">
         <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Level {level} Direct</span>
            <span className="text-sm font-black text-orange-500">{percentage}%</span>
         </div>
         <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className={cn("h-full transition-all duration-1000", color)} style={{ width: `${percentage * 5}%` }}></div>
         </div>
      </div>
   )
}
