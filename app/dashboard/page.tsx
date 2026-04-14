"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  Users, 
  TrendingUp, 
  Banknote, 
  MousePointer2,
  Smartphone,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Wallet,
  Coins,
  Activity,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';

const earningsData = [
  { name: 'Mon', revenue: 4200, profit: 2400 },
  { name: 'Tue', revenue: 3800, profit: 1398 },
  { name: 'Wed', revenue: 5100, profit: 3200 },
  { name: 'Thu', revenue: 4780, profit: 3908 },
  { name: 'Fri', revenue: 5890, profit: 4800 },
  { name: 'Sat', revenue: 6390, profit: 3800 },
  { name: 'Sun', revenue: 7490, profit: 5300 },
];

const healthData = [
  { subject: 'Engagement', A: 120, B: 110, fullMark: 150 },
  { subject: 'Retention', A: 98, B: 130, fullMark: 150 },
  { subject: 'Earning', A: 86, B: 130, fullMark: 150 },
  { subject: 'Referral', A: 99, B: 100, fullMark: 150 },
  { subject: 'Uptime', A: 85, B: 90, fullMark: 150 },
  { subject: 'Liquidity', A: 65, B: 85, fullMark: 150 },
];

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-12 pb-20">
      {/* Live Activity Pulse Bar */}
      <div className="bg-slate-900 border-2 border-slate-800 rounded-[32px] p-6 flex items-center justify-between shadow-2xl relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent animate-pulse"></div>
         <div className="flex items-center gap-6 relative z-10">
            <div className="w-4 h-4 rounded-full bg-emerald-500 animate-ping"></div>
            <p className="text-[11px] font-black text-white uppercase tracking-[0.4em]">Live Global Pulse: <span className="text-orange-500">1,242</span> operations/sec across <span className="text-orange-500">14</span> nodes</p>
         </div>
         <div className="flex gap-4 relative z-10">
            <div className="px-5 py-2 bg-white/10 rounded-full border border-white/10 text-[10px] font-black text-white uppercase tracking-widest">Master Node: SEOUL-01</div>
            <div className="px-5 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-widest">Health: 99.9%</div>
         </div>
      </div>

      {/* Primary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard title="Total Users" value="24,562" icon={Users} color="orange" trend="+12%" isPositive={true} />
        <StatCard title="App Installs" value="12,802" icon={Smartphone} color="blue" trend="+18%" isPositive={true} />
        <StatCard title="Total Revenue" value="$42,500.20" icon={TrendingUp} color="emerald" trend="+5.4%" isPositive={true} />
        <StatCard title="Total Payouts" value="$18,902.10" icon={Banknote} color="red" trend="-2.1%" isPositive={false} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Revenue Chart */}
        <div className="lg:col-span-2 bg-white border-2 border-slate-300 rounded-[48px] p-12 shadow-[0_60px_100px_-20px_rgba(15,23,42,0.25)] border-t-[8px] border-t-orange-500 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50/50 rounded-bl-full translate-x-32 -translate-y-32"></div>
          <div className="flex justify-between items-center mb-10 relative z-10">
            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-widest">Platform Analytics</h3>
              <p className="text-slate-500 text-sm font-bold mt-1">Revenue vs payouts performance across 7 days</p>
            </div>
            <div className="flex gap-4">
               <div className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                  Last 7 Days
               </div>
            </div>
          </div>
          <div className="h-[400px] w-full relative z-10">
            {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={earningsData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12, fontWeight: 'bold'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12, fontWeight: 'bold'}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 40px 80px -10px rgb(0 0 0 / 0.3)' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#f97316" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={6} dot={{ r: 8, fill: '#f97316', strokeWidth: 4, stroke: '#fff' }} />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Platform Health Visualizer */}
        <div className="bg-white border-2 border-slate-300 rounded-[48px] p-12 shadow-[0_60px_100px_-20px_rgba(15,23,42,0.25)] border-t-[8px] border-t-slate-900 flex flex-col items-center group">
           <h3 className="text-xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em] mb-10 w-full text-center">Protocol Integrity</h3>
           <div className="h-[320px] w-full flex items-center justify-center">
              {mounted && (
                 <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={healthData}>
                       <PolarGrid stroke="#e2e8f0" />
                       <PolarAngleAxis dataKey="subject" tick={{fill: '#64748b', fontSize: 10, fontWeight: 'black', textAnchor: 'middle'}} />
                       <PolarRadiusAxis axisLine={false} tick={false} />
                       <Radar name="Platform" dataKey="A" stroke="#f97316" fill="#f97316" fillOpacity={0.4} strokeWidth={4} />
                    </RadarChart>
                 </ResponsiveContainer>
              )}
           </div>
           
           <div className="mt-8 p-6 bg-slate-50 border-2 border-slate-100 rounded-[32px] w-full shadow-inner flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-xl shadow-orange-500/20"><ShieldCheck size={24} /></div>
                 <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Status</p>
                    <p className="text-base font-black text-slate-900 tracking-tight">OPTIMAL</p>
                 </div>
              </div>
              <div className="text-right">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Efficiency</p>
                 <p className="text-base font-black text-emerald-600 tracking-tight">94.2%</p>
              </div>
           </div>
        </div>
      </div>

      {/* Mini Data Section */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           <MiniDataCard title="Ad Clicks" value="142,402" icon={MousePointer2} color="orange" />
           <MiniDataCard title="Game Tokens" value="89,120" icon={Coins} color="blue" />
           <MiniDataCard title="Live Sessions" value="1,245" icon={Activity} color="emerald" />
       </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color, trend, isPositive }: any) {
  const borderMap: any = {
    orange: "border-t-orange-500",
    blue: "border-t-blue-500",
    emerald: "border-t-emerald-500",
    red: "border-t-red-500",
  }

  const iconMap: any = {
    orange: "bg-orange-50 text-orange-500 border-orange-200",
    blue: "bg-blue-50 text-blue-500 border-blue-200",
    emerald: "bg-emerald-50 text-emerald-500 border-emerald-200",
    red: "bg-red-50 text-red-500 border-red-200",
  }

  return (
    <div className={cn("bg-white border-2 border-slate-300 p-10 rounded-[48px] group transition-all duration-700 hover:border-orange-500 shadow-[0_40px_80px_-15px_rgba(15,23,42,0.2)] hover:shadow-[0_60px_120px_-15px_rgba(249,115,22,0.35)] hover:-translate-y-4 relative overflow-hidden border-t-[10px]", borderMap[color])}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-1000 opacity-50"></div>
      
      <div className="flex justify-between items-start mb-10 relative z-10">
        <div className={cn("p-6 rounded-[24px] border-2 shadow-sm", iconMap[color])}>
          <Icon size={32} />
        </div>
        <div className={cn(
          "flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[12px] font-black tracking-widest border-2 shadow-sm",
          isPositive ? "bg-emerald-50 text-emerald-600 border-emerald-200" : "bg-red-50 text-red-600 border-red-200"
        )}>
          {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {trend}
        </div>
      </div>
      <div className="relative z-10">
        <h4 className="text-slate-500 font-black text-xs uppercase tracking-[0.3em] mb-3">{title}</h4>
        <p className="text-5xl font-black text-slate-900 tracking-tighter leading-none">{value}</p>
      </div>
    </div>
  );
}

function MiniDataCard({ title, value, icon: Icon, color }: any) {
   return (
      <div className="bg-white border-2 border-slate-300 p-10 rounded-[40px] flex items-center justify-between shadow-[0_30px_60px_-10px_rgba(15,23,42,0.15)] group hover:border-orange-500 transition-all duration-500 hover:shadow-[0_50px_100px_-15px_rgba(249,115,22,0.25)] hover:translate-x-3 border-l-[10px] border-l-slate-900">
         <div className="flex items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-orange-200 group-hover:text-orange-500 transition-all shadow-sm">
               <Icon size={28} />
            </div>
            <div>
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">{title}</p>
               <p className="text-3xl font-black text-slate-900 leading-none">{value}</p>
            </div>
         </div>
         <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm border-2 border-slate-100">
            <ArrowUpRight size={24} />
         </div>
      </div>
   )
}
