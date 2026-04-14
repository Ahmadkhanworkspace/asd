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
  ArrowUpRight,
  X,
  Network,
  Share2
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openConfig = (tier: any) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  }

  return (
    <div className="space-y-12 pb-20">
      {/* Matrix Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <XtremeCard title="Active Positions" value="1,245" subValue="Across all levels" icon={Layers} color="orange" />
        <XtremeCard title="Total Matrix Payout" value="$42,500" subValue="Last 30 days" icon={TrendingUp} color="emerald" />
        <XtremeCard title="Global Spillover" value="124" subValue="Positions moved today" icon={RefreshCcw} color="blue" />
        <XtremeCard title="Matching Bonuses" value="$8,902" subValue="Generated today" icon={Coins} color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 bg-white border-2 border-slate-300 rounded-[56px] p-12 shadow-[0_60px_120px_-30px_rgba(15,23,42,0.2)] relative overflow-hidden group border-t-[8px] border-t-orange-500">
          <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50 rounded-bl-full translate-x-12 -translate-y-12"></div>
          <div className="flex justify-between items-center mb-12 relative z-10">
            <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em] leading-none">Matrix Performance</h3>
            <span className="flex items-center gap-2 text-[10px] font-black text-white px-5 py-2.5 bg-orange-500 rounded-full shadow-lg shadow-orange-500/20">
               <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div> REAL-TIME GROWTH
            </span>
          </div>
          <div className="h-[380px] w-full relative z-10">
            {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorXtreme" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12, fontWeight: 'black'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12, fontWeight: 'black'}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 40px 80px -10px rgb(0 0 0 / 0.3)' }}
                  />
                  <Area type="monotone" dataKey="payout" stroke="#f97316" fillOpacity={1} fill="url(#colorXtreme)" strokeWidth={6} />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        <div className="bg-white border-2 border-slate-300 rounded-[56px] p-12 shadow-[0_60px_120px_-30px_rgba(15,23,42,0.2)] space-y-10 border-t-[8px] border-t-slate-900">
           <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em]">/ global_ops</h3>
              <div className="p-5 bg-slate-900 text-white rounded-[24px] shadow-2xl shadow-slate-900/20 rotate-3"><Settings size={28} /></div>
           </div>
           
           <div className="space-y-8">
              <div className="space-y-3 px-2">
                 <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Global Matching Override</label>
                 <div className="relative">
                    <input type="number" defaultValue="15" className="w-full bg-slate-100 border-2 border-slate-200 rounded-[28px] px-8 py-5 text-sm font-black outline-none focus:border-orange-500 shadow-inner" />
                    <span className="absolute right-8 top-1/2 -translate-y-1/2 font-black text-slate-400">%</span>
                 </div>
              </div>
              <div className="space-y-3 px-2">
                 <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Ref Commission Level 1</label>
                 <div className="relative">
                    <input type="number" defaultValue="20" className="w-full bg-slate-100 border-2 border-slate-200 rounded-[28px] px-8 py-5 text-sm font-black outline-none focus:border-orange-500 shadow-inner" />
                    <span className="absolute right-8 top-1/2 -translate-y-1/2 font-black text-slate-400">%</span>
                 </div>
              </div>

              <div className="flex items-center justify-between p-8 bg-orange-50 border-2 border-orange-200 rounded-[44px] shadow-sm">
                 <div>
                    <p className="text-lg font-black text-orange-950 tracking-tight">Global Spillover</p>
                    <p className="text-[10px] text-orange-600 font-black uppercase tracking-[0.2em] mt-1 opacity-80">COMPANY-FORCED</p>
                 </div>
                 <div className="w-16 h-8 bg-orange-500 rounded-full relative p-1 cursor-pointer shadow-inner">
                    <div className="w-6 h-6 bg-white rounded-full absolute right-1 shadow-2xl"></div>
                 </div>
              </div>
           </div>
           <button onClick={() => setIsModalOpen(true)} className="w-full py-6 bg-orange-500 text-white font-black rounded-[32px] shadow-[0_30px_60px_rgba(249,115,22,0.4)] text-[11px] uppercase tracking-[0.3em] hover:scale-[1.05] active:scale-95 transition-all">
              Update Logic Core
           </button>
        </div>
      </div>

      {/* MATRIX LEVEL MANAGEMENT */}
      <div className="bg-white border-2 border-slate-300 rounded-[64px] p-16 shadow-[0_80px_160px_-40px_rgba(15,23,42,0.25)] relative overflow-hidden group border-t-[12px] border-t-orange-500">
        <div className="absolute top-0 right-0 w-44 h-44 bg-orange-50/50 rounded-bl-full translate-x-12 -translate-y-12 transition-all duration-1000 group-hover:scale-125"></div>
        <div className="flex justify-between items-center mb-16 relative z-10">
           <div className="flex items-center gap-6 text-orange-500">
              <div className="w-20 h-20 bg-orange-50 rounded-[32px] border-2 border-orange-200 flex items-center justify-center shadow-xl shadow-orange-500/5"><ShieldCheck size={40} /></div>
              <div>
                 <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em] leading-none">Level Architect</h3>
                 <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">Manage Matrix tiers and yield configuration</p>
              </div>
           </div>
           <button onClick={() => openConfig({name: 'New Tier', price: 0, reward: 0})} className="flex items-center gap-3 px-12 py-5 bg-slate-900 text-white rounded-[24px] text-[11px] font-black uppercase tracking-[0.3em] hover:bg-orange-600 transition-all shadow-2xl shadow-slate-900/30">
              <Plus size={20} /> Deploy New Level
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
           <PackageItem name="Starter" price="25" cycleReward="100" onConfigure={() => openConfig({name: 'Starter', price: 25, reward: 100, matching: 10, ref: 15, rentry: 'Advanced'})} />
           <PackageItem name="Advanced" price="100" cycleReward="450" onConfigure={() => openConfig({name: 'Advanced', price: 100, reward: 450, matching: 15, ref: 20, rentry: 'Elite'})} />
           <PackageItem name="Elite" price="500" cycleReward="2,250" onConfigure={() => openConfig({name: 'Elite', price: 500, reward: 2,250, matching: 20, ref: 25, rentry: 'Xtreme'})} />
           <PackageItem name="Xtreme" price="2,500" cycleReward="12,000" onConfigure={() => openConfig({name: 'Xtreme', price: 2,500, reward: 12,000, matching: 30, ref: 50, rentry: 'Xtreme x2'})} />
        </div>
      </div>

      {/* MODAL */}
      <ConfigModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={selectedTier} />
    </div>
  );
}

function XtremeCard({ title, value, subValue, icon: Icon, color }: any) {
  const borderMap: any = {
    orange: "border-l-orange-500",
    emerald: "border-l-emerald-500",
    blue: "border-l-blue-500",
    purple: "border-l-purple-500",
  }
  return (
    <div className={cn("bg-white border-2 border-slate-300 p-12 rounded-[52px] shadow-[0_50px_100px_-15px_rgba(15,23,42,0.2)] group hover:border-orange-500 transition-all duration-700 hover:shadow-[0_60px_120px_-15px_rgba(249,115,22,0.3)] hover:-translate-y-4 relative overflow-hidden border-l-[12px]", borderMap[color])}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full translate-x-12 -translate-y-12 opacity-60"></div>
      <div className={cn("p-6 rounded-[28px] mb-10 relative z-10 border-2 shadow-sm inline-flex", color === 'orange' ? "bg-orange-50 text-orange-500 border-orange-200" : "")}>
        <Icon size={32} />
      </div>
      <div className="relative z-10">
        <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3">{title}</h4>
        <p className="text-5xl font-black text-slate-900 tracking-tighter mb-6 leading-none">{value}</p>
        <div className="flex items-center gap-3 px-5 py-3 bg-slate-100 border-2 border-slate-200 rounded-full w-fit">
           <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">{subValue}</span>
           <ArrowUpRight size={14} className="text-orange-500" />
        </div>
      </div>
    </div>
  );
}

function PackageItem({ name, price, cycleReward, onConfigure }: any) {
   return (
      <div className="bg-white border-2 border-slate-300 p-12 rounded-[48px] group transition-all duration-700 hover:border-orange-500 shadow-[0_40px_80px_-15px_rgba(15,23,42,0.15)] hover:shadow-[0_60px_100px_-15px_rgba(249,115,22,0.3)] hover:-translate-y-4 relative overflow-hidden border-t-[10px] border-t-slate-100 hover:border-t-orange-500">
         <div className="relative z-10">
            <div className="flex items-center gap-6 mb-10">
                <div className="w-20 h-20 rounded-[28px] bg-orange-50 border-2 border-orange-200 flex items-center justify-center text-orange-500 transition-all group-hover:rotate-12 group-hover:scale-110 shadow-2xl shadow-orange-500/10">
                   <Zap size={36} />
                </div>
                <div>
                   <p className="font-black text-slate-900 text-2xl tracking-tighter leading-none">{name}</p>
                   <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em] leading-none mt-2 bg-orange-50 px-3 py-1 rounded-full w-fit">ADMIN_CONFIGURED</p>
                </div>
            </div>
            <div className="flex items-baseline gap-2 mb-12 px-2">
               <span className="text-6xl font-black text-slate-900 tracking-tighter leading-none">${price}</span>
            </div>
            <div className="p-8 bg-slate-100 border-2 border-slate-200 rounded-[36px] mb-12 shadow-inner">
               <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 mb-3">Cycle Reward Pool</p>
               <p className="text-3xl font-black text-slate-900 tracking-tighter">{cycleReward} <span className="text-sm text-slate-400 font-bold ml-1 uppercase">Coins</span></p>
            </div>
            <button onClick={onConfigure} className="w-full py-6 bg-slate-900 text-white font-black rounded-[24px] text-[11px] uppercase tracking-[0.3em] hover:bg-orange-600 transition-all shadow-2xl shadow-slate-900/40">Re-Configure Tier</button>
         </div>
      </div>
   )
}

function ConfigModal({ isOpen, onClose, data }: any) {
   if (!isOpen) return null;
   return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-12 animate-in fade-in duration-300">
         <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl" onClick={onClose}></div>
         <div className="bg-white w-full max-w-5xl border-2 border-slate-300 rounded-[64px] shadow-[0_100px_200px_-50px_rgba(0,0,0,0.5)] relative z-10 overflow-hidden border-t-[20px] border-t-orange-500 p-16">
            <button onClick={onClose} className="absolute top-12 right-12 w-16 h-16 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
               <X size={32} />
            </button>
            <div className="mb-14">
               <h3 className="text-4xl font-black tracking-tighter text-slate-900 uppercase">Tier Configuration</h3>
               <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-xs mt-4">Adjusting: {data?.name || 'Matrix Cluster'}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 mb-16 overflow-y-auto max-h-[60vh] pr-4 scrollbar-hide">
               {/* Primary Reward Logic */}
               <div className="space-y-8">
                  <div className="p-10 bg-slate-50 border-2 border-slate-100 rounded-[44px] space-y-8">
                     <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 flex items-center gap-3"><Coins size={16} /> Yield Protocol</h4>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Entry Price ($)</label>
                        <input type="number" defaultValue={data?.price} className="w-full bg-white border-2 border-slate-200 rounded-[28px] px-8 py-5 text-lg font-black outline-none focus:border-orange-500 shadow-sm" />
                     </div>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Cycle Reward (Coins)</label>
                        <input type="number" defaultValue={data?.reward} className="w-full bg-white border-2 border-slate-200 rounded-[28px] px-8 py-5 text-lg font-black outline-none focus:border-orange-500 shadow-sm" />
                     </div>
                  </div>
               </div>

               {/* Bonus & MLM Logic */}
               <div className="space-y-8">
                  <div className="p-10 bg-orange-50 border-2 border-orange-100 rounded-[44px] space-y-8">
                     <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-orange-400 flex items-center gap-3"><TrendingUp size={16} /> Affiliate Logic</h4>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-orange-900 ml-4">Matching Bonus (%)</label>
                        <input type="number" defaultValue={data?.matching || 10} className="w-full bg-white border-2 border-orange-200 rounded-[28px] px-8 py-5 text-lg font-black outline-none focus:border-orange-500 shadow-sm" />
                     </div>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-orange-900 ml-4">Referral Commission (%)</label>
                        <input type="number" defaultValue={data?.ref || 15} className="w-full bg-white border-2 border-orange-200 rounded-[28px] px-8 py-5 text-lg font-black outline-none focus:border-orange-500 shadow-sm" />
                     </div>
                  </div>

                  <div className="p-10 bg-slate-900 border-2 border-slate-800 rounded-[44px] space-y-6">
                     <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 flex items-center gap-3"><RefreshCcw size={16} /> Re-entry Protocol</h4>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Target Re-entry Level</label>
                        <select className="w-full bg-slate-800 border-2 border-slate-700 rounded-[28px] px-8 py-5 text-sm font-black text-white outline-none focus:border-orange-500 appearance-none">
                           <option selected={data?.name === 'Starter'}>Starter (Same Level)</option>
                           <option selected={data?.rentry === 'Advanced'}>Advanced (Next Tier)</option>
                           <option selected={data?.rentry === 'Elite'}>Elite (Next Tier)</option>
                           <option selected={data?.rentry === 'Xtreme'}>Xtreme (Ultimate)</option>
                           <option>Xtreme Multiplier (x2)</option>
                        </select>
                     </div>
                  </div>
               </div>
            </div>
            <button onClick={onClose} className="w-full py-8 bg-slate-900 text-white rounded-[32px] font-black text-[11px] uppercase tracking-[0.5em] shadow-2xl hover:bg-orange-600 transition-all">Synchronize compensation logic</button>
         </div>
      </div>
   )
}
