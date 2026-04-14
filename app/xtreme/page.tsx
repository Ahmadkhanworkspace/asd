"use client";

import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  RefreshCcw, 
  Users, 
  TrendingUp, 
  Coins, 
  Layers,
  Settings,
  Plus,
  ArrowRightCircle,
  Clock,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Cycle 1', positions: 400, payout: 2400 },
  { name: 'Cycle 2', positions: 300, payout: 1398 },
  { name: 'Cycle 3', positions: 900, payout: 9800 },
  { name: 'Cycle 4', positions: 278, payout: 3908 },
  { name: 'Cycle 5', positions: 189, payout: 4800 },
];

export default function XtremePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-10 pb-20">
      {/* Matrix Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <XtremeCard title="Active Positions" value="1,245" subValue="Across all levels" icon={Layers} color="orange" />
        <XtremeCard title="Total Matrix Payout" value="$42,500" subValue="Last 30 days" icon={TrendingUp} color="emerald" />
        <XtremeCard title="Global Spillover" value="124" subValue="Positions moved today" icon={RefreshCcw} color="blue" />
        <XtremeCard title="Matching Bonuses" value="$8,902" subValue="Generated today" icon={Coins} color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Matrix Growth Chart */}
        <div className="lg:col-span-2 bg-white border-2 border-slate-200 rounded-[48px] p-10 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.12)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-bl-full translate-x-12 -translate-y-12"></div>
          
          <div className="flex justify-between items-center mb-10 relative z-10">
            <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-widest leading-none">Matrix Performance</h3>
            <div className="flex gap-2">
               <span className="flex items-center gap-1.5 text-[10px] font-black text-orange-600 uppercase tracking-widest px-4 py-2 bg-orange-100 rounded-full border-2 border-orange-200">
                 <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></div> Network Growth
               </span>
            </div>
          </div>
          <div className="h-[350px] w-full relative z-10">
            {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorXtreme" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 30px 60px -10px rgb(0 0 0 / 0.15)' }}
                  />
                  <Area type="monotone" dataKey="payout" stroke="#f97316" fillOpacity={1} fill="url(#colorXtreme)" strokeWidth={5} />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Matrix Global Config */}
        <div className="bg-white border-2 border-slate-200 rounded-[48px] p-10 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.12)] space-y-8">
           <div className="flex items-center justify-between">
              <h3 className="text-xl font-black tracking-tight text-slate-900 uppercase tracking-widest">/ matrix_logic</h3>
              <div className="p-4 bg-orange-50 text-orange-500 rounded-2xl border-2 border-orange-100"><Settings size={24} /></div>
           </div>
           
           <div className="space-y-6">
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Company Force Mode</label>
                 <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold appearance-none outline-none focus:border-orange-500/20">
                    <option>Global Company Spillover (L/R)</option>
                    <option>Personal Frontline Priority</option>
                 </select>
              </div>

              <div className="grid grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Entry Price (Min)</label>
                    <input type="number" defaultValue="25" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold outline-none focus:border-orange-500/20" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Matching Bonus (%)</label>
                    <input type="number" defaultValue="10" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold outline-none focus:border-orange-500/20" />
                 </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-orange-50/50 border-2 border-orange-100 rounded-[36px]">
                 <div>
                    <p className="text-sm font-black text-orange-950">Auto-Reentry</p>
                    <p className="text-[10px] text-orange-700 font-bold uppercase tracking-widest mt-1 opacity-70">Automatic spot renewal</p>
                 </div>
                 <div className="w-14 h-7 bg-orange-500 rounded-full relative p-1 cursor-pointer">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-1 shadow-sm"></div>
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Official Payplan Template</label>
                 <div className="flex gap-4">
                    <input type="text" placeholder="https://earnx.com/payplan.pdf" className="flex-1 bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-medium outline-none focus:border-orange-500/20" />
                    <button className="px-6 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all">Browse</button>
                 </div>
              </div>
           </div>

           <button className="w-full py-5 bg-orange-500 text-white font-black rounded-[32px] shadow-2xl shadow-orange-500/30 text-[10px] uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all">
              Update Matrix Config
           </button>
        </div>
      </div>

      {/* MATRIX LEVEL MANAGEMENT */}
      <div className="bg-white border-2 border-slate-200 rounded-[52px] p-12 shadow-[0_60px_120px_-30px_rgba(15,23,42,0.15)] relative overflow-hidden group border-t-8 border-t-orange-500">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-bl-full translate-x-12 -translate-y-12 transition-transform duration-1000 group-hover:scale-110"></div>
        
        <div className="flex justify-between items-center mb-12 relative z-10">
           <div className="flex items-center gap-4 text-orange-500">
              <ShieldCheck size={32} />
              <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-widest">Level Configuration</h3>
           </div>
           <button className="flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-2xl shadow-slate-900/10">
              <Plus size={18} /> Add New Level
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
           <PackageItem name="Starter" price="25" cycleReward="100" />
           <PackageItem name="Advanced" price="100" cycleReward="450" />
           <PackageItem name="Elite" price="500" cycleReward="2,250" />
           <PackageItem name="Xtreme" price="2,500" cycleReward="12,000" />
        </div>
      </div>

      <div className="bg-white border-2 border-slate-200 rounded-[52px] overflow-hidden shadow-[0_60px_120px_-30px_rgba(15,23,42,0.15)]">
           <div className="p-12 border-b-2 border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                <h3 className="text-xl font-black tracking-tight text-slate-900 uppercase tracking-widest text-orange-500">Spillover Log</h3>
                <p className="text-slate-400 text-xs font-bold mt-1">Real-time global position tracking engine</p>
              </div>
              <button className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-2xl shadow-slate-900/10">
                 <Plus size={18} /> PIF New Position
              </button>
           </div>
           <table className="w-full text-left">
              <thead>
                 <tr className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-slate-100">
                    <th className="px-12 py-6">User Identity</th>
                    <th className="px-12 py-6">Position ID</th>
                    <th className="px-12 py-6">Account Status</th>
                    <th className="px-12 py-6">Cycling Progress</th>
                    <th className="px-12 py-6 text-right">Time Sync</th>
                 </tr>
              </thead>
              <tbody className="divide-y-2 divide-slate-100">
                 <XtremeLogRow user="crypto_king" id="#XT-921" status="Cycling" progress={85} time="2m ago" />
                 <XtremeLogRow user="ahmad_ws" id="#XT-918" status="Active" progress={42} time="14m ago" />
                 <XtremeLogRow user="sarah_pro" id="#XT-882" status="Completed" progress={100} time="1h ago" />
              </tbody>
           </table>
      </div>
    </div>
  );
}

function XtremeCard({ title, value, subValue, icon: Icon, color }: any) {
  const colorMap: any = {
    orange: "text-orange-500 bg-orange-50 border-orange-100",
    emerald: "text-emerald-500 bg-emerald-50 border-emerald-100",
    blue: "text-blue-500 bg-blue-50 border-blue-100",
    purple: "text-purple-500 bg-purple-50 border-purple-100",
  };

  return (
    <div className="bg-white border-2 border-slate-200 p-10 rounded-[44px] shadow-[0_45px_90px_-20px_rgba(15,23,42,0.12)] group hover:border-orange-500 transition-all duration-700 hover:shadow-[0_60px_100px_-15px_rgba(249,115,22,0.2)] hover:-translate-y-3 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-28 h-28 bg-slate-50/50 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-1000"></div>
      
      <div className={cn("p-5 rounded-[22px] mb-8 relative z-10 border-2", colorMap[color])}>
        <Icon size={28} />
      </div>
      <div className="relative z-10">
        <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{title}</h4>
        <p className="text-4xl font-black text-slate-900 tracking-tighter mb-4 leading-none">{value}</p>
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border-2 border-slate-100 rounded-full w-fit group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors">
           <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{subValue}</span>
           <ArrowUpRight size={12} className="text-orange-500" />
        </div>
      </div>
    </div>
  );
}

function XtremeLogRow({ user, id, status, progress, time }: any) {
   return (
      <tr className="hover:bg-slate-50 transition-colors group">
         <td className="px-12 py-8">
            <p className="font-black text-slate-900 text-lg">@{user}</p>
         </td>
         <td className="px-12 py-8">
            <span className="font-mono text-xs text-slate-400 font-black bg-slate-50 px-4 py-2 rounded-xl border-2 border-slate-100">{id}</span>
         </td>
         <td className="px-12 py-8">
            <span className={cn(
               "px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm border-2",
               status === 'Completed' ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-orange-50 text-orange-600 border-orange-100"
            )}>{status}</span>
         </td>
         <td className="px-12 py-8">
            <div className="flex items-center gap-6">
               <div className="w-40 h-3.5 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-200 p-1">
                  <div 
                    className={cn("h-full rounded-full transition-all duration-1000", status === 'Completed' ? "bg-emerald-500" : "bg-orange-500")} 
                    style={{ width: `${progress}%` }}
                  ></div>
               </div>
               <span className="text-[10px] font-black text-white bg-slate-900 px-3 py-1.5 rounded-lg shadow-xl">{progress}%</span>
            </div>
         </td>
         <td className="px-12 py-8 text-right">
            <p className="text-xs text-slate-400 font-black uppercase tracking-widest whitespace-nowrap">{time} Sync</p>
         </td>
      </tr>
   )
}

function PackageItem({ name, price, cycleReward }: any) {
   return (
      <div className="bg-white border-2 border-slate-200 p-10 rounded-[36px] group transition-all duration-700 hover:border-orange-500 shadow-[0_30px_60px_-10px_rgba(15,23,42,0.1)] hover:shadow-[0_50px_90px_-15px_rgba(249,115,22,0.2)] hover:-translate-y-3 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50/50 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-all duration-1000"></div>
         
         <div className="relative z-10">
            <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-[22px] bg-orange-50 border-2 border-orange-100 flex items-center justify-center text-orange-500 transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-orange-500/10">
                   <Zap size={32} />
                </div>
                <div>
                   <p className="font-black text-slate-900 text-xl">{name}</p>
                   <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest leading-none mt-1">Tier-Config</p>
                </div>
            </div>

            <div className="flex items-baseline gap-1 mb-10">
               <span className="text-5xl font-black text-slate-900 tracking-tighter leading-none">${price}</span>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">/pos</span>
            </div>
            
            <div className="p-6 bg-slate-50 border-2 border-slate-100 rounded-[28px] mb-10 group-hover:bg-orange-50/50 group-hover:border-orange-200 transition-all shadow-inner">
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Cycle Reward</p>
               <p className="text-2xl font-black text-slate-900 tracking-tight">{cycleReward} Coins</p>
            </div>

            <button className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-2xl shadow-slate-900/10">
               Configure Plan
            </button>
         </div>
      </div>
   )
}
