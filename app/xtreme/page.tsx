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
  ShieldCheck
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <XtremeCard title="Active Positions" value="1,245" subValue="Across all levels" icon={Layers} color="orange" />
        <XtremeCard title="Total Matrix Payout" value="$42,500" subValue="Last 30 days" icon={TrendingUp} color="emerald" />
        <XtremeCard title="Global Spillover" value="124" subValue="Positions moved today" icon={RefreshCcw} color="blue" />
        <XtremeCard title="Matching Bonuses" value="$8,902" subValue="Generated today" icon={Coins} color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Matrix Growth Chart */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-black tracking-tight text-slate-900">EarnX Xtreme Growth</h3>
            <div className="flex gap-2">
               <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                 <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> New Positions
               </span>
            </div>
          </div>
          <div className="h-[350px] w-full">
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
                    contentStyle={{ borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="payout" stroke="#f97316" fillOpacity={1} fill="url(#colorXtreme)" strokeWidth={4} />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Matrix Global Config */}
        <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)] space-y-8">
           <div className="flex items-center justify-between">
              <h3 className="text-xl font-black tracking-tight text-slate-900 uppercase">/ global_config</h3>
              <div className="p-2 bg-orange-50 text-orange-500 rounded-lg"><Settings size={20} /></div>
           </div>
           
           <div className="space-y-6">
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Company Force Mode</label>
                 <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold appearance-none outline-none focus:border-orange-500/30">
                    <option>Global Company Spillover (L/R)</option>
                    <option>Personal Frontline Priority</option>
                 </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Entry Price (Min)</label>
                    <input type="number" defaultValue="25" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-orange-500/30" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Matching Bonus (%)</label>
                    <input type="number" defaultValue="10" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-orange-500/30" />
                 </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-orange-50 border border-orange-100 rounded-2xl">
                 <div>
                    <p className="text-xs font-bold text-orange-950">Auto-Reentry</p>
                    <p className="text-[10px] text-orange-700 font-medium">Auto-renew spot upon cycle</p>
                 </div>
                 <div className="w-12 h-6 bg-orange-500 rounded-full relative p-1">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Official Payplan PDF/Link</label>
                 <div className="flex gap-2">
                    <input type="text" placeholder="https://earnx.com/payplan.pdf" className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-orange-500/30" />
                    <button className="px-4 bg-slate-100 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-200 transition-all font-bold text-xs uppercase">Browse</button>
                 </div>
              </div>
           </div>

           <button className="w-full py-4 bg-orange-500 text-white font-black rounded-2xl shadow-lg shadow-orange-500/30 text-sm hover:scale-[1.02] transition-all">
              Update Matrix Config
           </button>
        </div>
      </div>

      {/* MATRIX LEVEL MANAGEMENT */}
      <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.06)]">
        <div className="flex justify-between items-center mb-10">
           <div className="flex items-center gap-4 text-orange-500">
              <ShieldCheck size={28} />
              <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase">Matrix Level & Pricing Manager</h3>
           </div>
           <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-colors">
              <Plus size={14} /> Add New Level
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <PackageItem name="Starter" price="25" cycleReward="100" />
           <PackageItem name="Advanced" price="100" cycleReward="450" />
           <PackageItem name="Elite" price="500" cycleReward="2,250" />
           <PackageItem name="Xtreme" price="2,500" cycleReward="12,000" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        {/* Global PIF Queue (Pay It Forward) */}
        <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
           <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-black tracking-tight text-slate-900 uppercase">Real-time Matrix Spillover Log</h3>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold">
                 <Plus size={16} /> Purchase Position for User (PIF)
              </button>
           </div>
           <table className="w-full text-left">
              <thead>
                 <tr className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                    <th className="px-8 py-4">User</th>
                    <th className="px-8 py-4">Position ID</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4">Progress</th>
                    <th className="px-8 py-4 text-right">Time</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                 <XtremeLogRow user="crypto_king" id="#XT-921" status="Cycling" progress={85} time="2m ago" />
                 <XtremeLogRow user="ahmad_ws" id="#XT-918" status="Active" progress={42} time="14m ago" />
                 <XtremeLogRow user="sarah_pro" id="#XT-882" status="Completed" progress={100} time="1h ago" />
              </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}

function XtremeCard({ title, value, subValue, icon: Icon, color }: any) {
  const colorMap: any = {
    orange: "text-orange-500 bg-orange-500/10",
    emerald: "text-emerald-500 bg-emerald-500/10",
    blue: "text-blue-500 bg-blue-500/10",
    purple: "text-purple-500 bg-purple-500/10",
  };

  return (
    <div className="bg-white border border-slate-200 p-8 rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.04)] group hover:border-orange-500/20 transition-all hover:shadow-[0_30px_60px_rgba(249,115,22,0.08)]">
      <div className={cn("p-4 w-fit rounded-2xl mb-6", colorMap[color])}>
        <Icon size={24} />
      </div>
      <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{title}</h4>
      <p className="text-3xl font-black text-slate-900 tracking-tighter mb-1">{value}</p>
      <p className="text-xs text-slate-400 font-medium">{subValue}</p>
    </div>
  );
}

function XtremeLogRow({ user, id, status, progress, time }: any) {
   return (
      <tr className="hover:bg-slate-50/50 transition-colors group">
         <td className="px-8 py-6">
            <p className="font-bold text-slate-900">@{user}</p>
         </td>
         <td className="px-8 py-6">
            <span className="font-mono text-xs text-slate-500 font-bold">{id}</span>
         </td>
         <td className="px-8 py-6">
            <span className={cn(
               "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
               status === 'Completed' ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-600"
            )}>{status}</span>
         </td>
         <td className="px-8 py-6">
            <div className="flex items-center gap-3">
               <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={cn("h-full transition-all duration-1000", status === 'Completed' ? "bg-emerald-500" : "bg-orange-500")} 
                    style={{ width: `${progress}%` }}
                  ></div>
               </div>
               <span className="text-[10px] font-black text-slate-400">{progress}%</span>
            </div>
         </td>
         <td className="px-8 py-6 text-right">
            <p className="text-xs text-slate-400 font-medium">{time}</p>
         </td>
      </tr>
   )
}

function PackageItem({ name, price, cycleReward }: any) {
   return (
      <div className="flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-3xl group hover:bg-white hover:border-orange-500/20 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(249,115,22,0.05)]">
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-orange-500 transition-colors">
               <Zap size={20} />
            </div>
            <div>
               <p className="font-black text-slate-900">{name} Pack</p>
               <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">$ {price} Entry</span>
               </div>
            </div>
         </div>
         <div className="text-right">
            <p className="text-sm font-black text-slate-900">{cycleReward} Coins</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cycle Reward</p>
         </div>
         <button className="ml-4 p-2 text-slate-300 hover:text-slate-900 transition-colors">
            <ArrowRightCircle size={20} />
         </button>
      </div>
   )
}
