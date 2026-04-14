"use client";

import React, { useState } from 'react';
import { 
  Gamepad2, 
  Settings, 
  RefreshCcw, 
  Coins, 
  Clock, 
  Zap,
  Save,
  Trophy,
  AlertTriangle,
  Flame
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GamesPage() {
  const [spinValues, setSpinValues] = useState([
    { id: 1, label: '0.1 Coins', weight: 40, color: 'bg-slate-100' },
    { id: 2, label: '0.5 Coins', weight: 30, color: 'bg-orange-100' },
    { id: 3, label: '1.0 Coins', weight: 15, color: 'bg-orange-200' },
    { id: 4, label: '5.0 Coins', weight: 10, color: 'bg-orange-300' },
    { id: 5, label: '10 Coins', weight: 4, color: 'bg-orange-400' },
    { id: 6, label: 'JACKPOT', weight: 1, color: 'bg-orange-500' },
  ]);

  return (
    <div className="space-y-10 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Spin Wheel Configuration */}
        <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-sm space-y-8">
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-4">
                <div className="p-4 bg-orange-500 rounded-2xl text-white shadow-lg shadow-orange-500/20">
                   <RefreshCcw size={24} />
                </div>
                <div>
                   <h3 className="text-2xl font-black tracking-tight text-slate-900">Spin Wheel Pro</h3>
                   <p className="text-slate-500 text-sm font-medium">Control reward frequency & weights</p>
                </div>
             </div>
             <button className="p-3 hover:bg-slate-50 border border-slate-100 rounded-2xl transition-all">
                <Settings size={20} className="text-slate-400" />
             </button>
          </div>

          <div className="space-y-6">
            {spinValues.map((segment) => (
              <div key={segment.id} className="flex items-center gap-6 p-4 rounded-[24px] bg-slate-50/50 border border-slate-100 group transition-all hover:bg-white hover:border-orange-500/20 hover:shadow-md">
                 <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xs", segment.color)}>
                    {segment.id}
                 </div>
                 <div className="flex-1">
                    <p className="font-bold text-slate-900">{segment.label}</p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-0.5">Segment Prize</p>
                 </div>
                 <div className="w-32">
                    <div className="flex justify-between items-center mb-1.5">
                       <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Weight</span>
                       <span className="text-xs font-black text-orange-500">{segment.weight}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                       <div className="h-full bg-orange-500 rounded-full" style={{ width: `${segment.weight}%` }}></div>
                    </div>
                 </div>
              </div>
            ))}
          </div>

          <button className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors">
             <Save size={18} /> Sync Weights to Database
          </button>
        </div>

        {/* Game Global Settings */}
        <div className="space-y-8">
           <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-sm space-y-8">
              <div className="flex items-center gap-4 text-orange-500">
                 <Zap size={28} />
                 <h3 className="text-2xl font-black tracking-tight text-slate-900">Global Game Logic</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Daily Spin Limit</label>
                    <input type="number" defaultValue="25" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold outline-none focus:border-orange-500/20" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Scratch Limit (Entry)</label>
                    <input type="number" defaultValue="15" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold outline-none focus:border-orange-500/20" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Cooldown (Mins)</label>
                    <input type="number" defaultValue="60" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold outline-none focus:border-orange-500/20" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">XP Multiplier</label>
                    <input type="number" step="0.1" defaultValue="1.5" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold outline-none focus:border-orange-500/20" />
                 </div>
              </div>
           </div>

           <div className="bg-orange-50 border border-orange-100 rounded-[40px] p-8 flex items-start gap-6">
              <div className="p-3 bg-orange-500 rounded-2xl text-white">
                 <AlertTriangle size={24} />
              </div>
              <div>
                 <h4 className="font-black text-orange-950 uppercase tracking-tight mb-2">Jackpot Warning</h4>
                 <p className="text-sm text-orange-800 font-medium leading-relaxed">
                    Setting the Jackpot weight above 5% can significantly impact your total coin economy. We recommend keeping it at 1-2%.
                 </p>
              </div>
           </div>

           <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-sm flex items-center justify-between group cursor-pointer hover:border-orange-500/20 transition-all">
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-orange-500 transition-colors">
                    <Trophy size={32} />
                 </div>
                 <div>
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">Leaderboard Settings</h4>
                    <p className="text-xs text-slate-500 font-medium">Manage top winners and prizes</p>
                 </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-all">
                 <Flame size={20} />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
