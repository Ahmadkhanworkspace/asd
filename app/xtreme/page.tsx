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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <XtremeCard title="Active Positions" value="1,245" subValue="Across all levels" icon={Layers} color="orange" />
        <XtremeCard title="Total Matrix Payout" value="$42,500" subValue="Last 30 days" icon={TrendingUp} color="emerald" />
        <XtremeCard title="Global Spillover" value="124" subValue="Positions moved today" icon={RefreshCcw} color="blue" />
        <XtremeCard title="Matching Bonuses" value="$8,902" subValue="Generated today" icon={Coins} color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Matrix Growth Chart */}
        <div className="lg:col-span-2 bg-white border-2 border-slate-200 rounded-[40px] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.08)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-bl-full translate-x-12 -translate-y-12"></div>
          
          <div className="flex justify-between items-center mb-10 relative z-10">
            <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase">EarnX Xtreme Growth</h3>
            <div className="flex gap-2">
               <span className="flex items-center gap-1.5 text-[10px] font-black text-orange-600 uppercase tracking-widest px-4 py-2 bg-orange-100 rounded-full border-2 border-orange-200">
                 <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></div> New Positions
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
                    contentStyle={{ borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 20px 30px -5px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="payout" stroke="#f97316" fillOpacity={1} fill="url(#colorXtreme)" strokeWidth={4} />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Matrix Global Config */}
        <div className="bg-white border-2 border-slate-200 rounded-[40px] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.08)] space-y-8">
           <div className="flex items-center justify-between">
              <h3 className="text-xl font-black tracking-tight text-slate-900 uppercase tracking-widest">/ global_config</h3>
              <div className="p-3 bg-orange-50 text-orange-500 rounded-2xl border-2 border-orange-100"><Settings size={22} /></div>
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

              <div className="flex items-center justify-between p-6 bg-orange-50/50 border-2 border-orange-100 rounded-[32px]">
                 <div>
                    <p className="text-sm font-black text-orange-950">Auto-Reentry</p>
                    <p className="text-[10px] text-orange-700 font-bold uppercase tracking-widest mt-1">Automatic spot renewal</p>
                 </div>
                 <div className="w-14 h-7 bg-orange-500 rounded-full relative p-1 cursor-pointer">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-1 shadow-sm"></div>
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Official Payplan PDF/Link</label>
                 <div className="flex gap-4">
                    <input type="text" placeholder="https://earnx.com/payplan.pdf" className="flex-1 bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-sm font-medium outline-none focus:border-orange-500/20" />
                    <button className="px-6 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all">Browse</button>
                 </div>
              </div>
           </div>

           <button className="w-full py-5 bg-orange-500 text-white font-black rounded-3xl shadow-2xl shadow-orange-500/30 text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all">
              Update Matrix Config
           </button>
        </div>
      </div>

      {/* MATRIX LEVEL MANAGEMENT */}
      <div className="bg-white border-2 border-slate-200 rounded-[40px] p-10 shadow-[0_40px_80px_rgba(0,0,0,0.1)] relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-50/50 rounded-br-full -translate-x-12 -translate-y-12"></div>
        
        <div className="flex justify-between items-center mb-10 relative z-10">
           <div className="flex items-center gap-4 text-orange-500">
              <ShieldCheck size={28} />
              <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-widest">Matrix Level & Pricing</h3>
           </div>
           <button className="flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl">
              <Plus size={18} /> New Level
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
           <PackageItem name="Starter" price="25" cycleReward="100" />
           <PackageItem name="Advanced" price="100" cycleReward="450" />
           <PackageItem name="Elite" price="500" cycleReward="2,250" />
           <PackageItem name="Xtreme" price="2,500" cycleReward="12,000" />
        </div>
      </div>

      <div className="bg-white border-2 border-slate-200 rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
           <div className="p-10 border-b-2 border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                <h3 className="text-xl font-black tracking-tight text-slate-900 uppercase tracking-widest text-orange-500">Matrix Spillover Log</h3>
                <p className="text-slate-400 text-xs font-bold mt-1">Real-time global position tracking</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all">
                 <Plus size={18} /> PIF Position
              </button>
           </div>
           <table className="w-full text-left">
              <thead>
                 <tr className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest border-b-2 border-slate-100">
                    <th className="px-10 py-5">User</th>
                    <th className="px-10 py-5">Position ID</th>
                    <th className="px-10 py-5">Status</th>
                    <th className="px-10 py-5">Progress</th>
                    <th className="px-10 py-5 text-right">Time</th>
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
    orange: "text-orange-500 bg-orange-500/10 border-orange-100",
    emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-100",
    blue: "text-blue-500 bg-blue-500/10 border-blue-100",
    purple: "text-purple-500 bg-purple-500/10 border-purple-100",
  };

  return (
    <div className="bg-white border-2 border-slate-200 p-8 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] group hover:border-orange-500 transition-all hover:shadow-[0_40px_80px_rgba(249,115,22,0.15)] hover:-translate-y-2 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50/50 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-all duration-700"></div>
      
      <div className={cn("p-4 w-fit rounded-2xl mb-6 relative z-10 border-2", colorMap[color])}>
        <Icon size={24} />
      </div>
      <div className="relative z-10">
        <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-3xl font-black text-slate-900 tracking-tighter mb-2">{value}</p>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full w-fit">
           <span className="text-[10px] text-slate-500 font-bold uppercase">{subValue}</span>
           <ArrowUpRight size={10} className="text-orange-500" />
        </div>
      </div>
    </div>
  );
}

function XtremeLogRow({ user, id, status, progress, time }: any) {
   return (
      <tr className="hover:bg-slate-50 transition-colors group">
         <td className="px-10 py-6">
            <p className="font-black text-slate-900 text-lg">@{user}</p>
         </td>
         <td className="px-10 py-6">
            <span className="font-mono text-xs text-slate-400 font-black bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">{id}</span>
         </td>
         <td className="px-10 py-6">
            <span className={cn(
               "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm border-2",
               status === 'Completed' ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-orange-50 text-orange-600 border-orange-100"
            )}>{status}</span>
         </td>
         <td className="px-10 py-6">
            <div className="flex items-center gap-4">
               <div className="w-32 h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                  <div 
                    className={cn("h-full transition-all duration-1000", status === 'Completed' ? "bg-emerald-500" : "bg-orange-500")} 
                    style={{ width: `${progress}%` }}
                  ></div>
               </div>
               <span className="text-[10px] font-black text-slate-900 bg-slate-100 px-2 py-1 rounded-md">{progress}%</span>
            </div>
         </td>
         <td className="px-10 py-6 text-right">
            <p className="text-xs text-slate-400 font-black uppercase tracking-widest">{time}</p>
         </td>
      </tr>
   )
}

function PackageItem({ name, price, cycleReward }: any) {
   return (
      <div className="bg-white border-2 border-slate-200 p-8 rounded-[32px] group transition-all duration-500 hover:border-orange-500 shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_40px_80px_rgba(249,115,22,0.15)] hover:-translate-y-2 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-20 h-20 bg-slate-50/50 rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-700"></div>
         
         <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border-2 border-orange-100 flex items-center justify-center text-orange-500 transition-transform group-hover:rotate-12">
                   <Zap size={28} />
                </div>
                <div>
                   <p className="font-black text-slate-900 text-xl">{name}</p>
                   <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Pricing Plan</p>
                </div>
            </div>

            <div className="flex items-baseline gap-1 mb-8">
               <span className="text-4xl font-black text-slate-900 tracking-tighter">${price}</span>
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">/position</span>
            </div>
            
            <div className="p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl mb-8 group-hover:bg-orange-50/50 group-hover:border-orange-100 transition-colors">
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Cycle Reward</p>
               <p className="text-xl font-black text-slate-900">{cycleReward} Coins</p>
            </div>

            <button className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10">
               Configure Plan
            </button>
         </div>
      </div>
   )
}
