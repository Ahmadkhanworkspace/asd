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
  Coins
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
  Bar
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

const installsData = [
  { name: 'Jan', installs: 400 },
  { name: 'Feb', installs: 600 },
  { name: 'Mar', installs: 800 },
  { name: 'Apr', installs: 1200 },
  { name: 'May', installs: 1500 },
];

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-12 pb-20">
      {/* Primary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard title="Total Users" value="24,562" icon={Users} color="orange" trend="+12%" isPositive={true} />
        <StatCard title="App Installs" value="12,802" icon={Smartphone} color="blue" trend="+18%" isPositive={true} />
        <StatCard title="Total Revenue" value="$42,500.20" icon={TrendingUp} color="emerald" trend="+5.4%" isPositive={true} />
        <StatCard title="Total Payouts" value="$18,902.10" icon={Banknote} color="red" trend="-2.1%" isPositive={false} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Revenue Chart */}
        <div className="lg:col-span-2 bg-white border-2 border-slate-300 rounded-[48px] p-12 shadow-[0_60px_100px_-20px_rgba(15,23,42,0.25)] border-t-[8px] border-t-orange-500">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-widest">Platform Analytics</h3>
              <p className="text-slate-500 text-sm font-bold mt-1">Revenue vs payouts performance across 7 days</p>
            </div>
            <div className="flex gap-4">
               <div className="px-6 py-3 bg-slate-100 border-2 border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-900">
                  Last 7 Days
               </div>
            </div>
          </div>
          <div className="h-[400px] w-full">
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

        {/* Small Data Cards */}
        <div className="space-y-8">
           <MiniDataCard title="Ad Clicks" value="142,402" icon={MousePointer2} color="orange" />
           <MiniDataCard title="Game Tokens" value="89,120" icon={Coins} color="blue" />
           <MiniDataCard title="Deposits" value="$5,240.00" icon={Wallet} color="emerald" />
           
           <div className="bg-orange-500 rounded-[48px] p-10 text-white shadow-[0_60px_100px_rgba(249,115,22,0.4)] relative overflow-hidden group border-4 border-white/30">
              <div className="absolute -right-8 -top-8 w-48 h-48 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative z-10">
                <p className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-4 bg-black/20 px-4 py-1.5 rounded-full w-fit border border-white/20">Production Node v2</p>
                <h4 className="text-4xl font-black mb-10 leading-none tracking-tighter">Blazing Fast<br/>Real-time Core</h4>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/30 rounded-full w-fit border border-white/40 backdrop-blur-xl">
                   <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-[0_0_15px_white]"></div>
                   <span className="text-[10px] font-black tracking-widest uppercase text-white">System Operational</span>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* Bottom Grid: Earning Breakdown & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         <div className="bg-white border-2 border-slate-300 rounded-[52px] p-12 shadow-[0_60px_120px_-20px_rgba(15,23,42,0.25)] border-t-[8px] border-t-slate-900">
            <h3 className="text-xl font-black tracking-tight text-slate-900 mb-12 uppercase tracking-[0.2em] flex items-center gap-3">
               <div className="w-2 h-8 bg-orange-500 rounded-full"></div> Earning Composition
            </h3>
            <div className="space-y-12">
               <BreakdownItem label="PTC Ads" percentage={45} color="bg-orange-500" />
               <BreakdownItem label="EarnX Xtreme" percentage={30} color="bg-blue-500" />
               <BreakdownItem label="Spin Wheel & Games" percentage={15} color="bg-emerald-500" />
               <BreakdownItem label="Micro Tasks" percentage={10} color="bg-purple-500" />
            </div>
         </div>

         <div className="bg-white border-2 border-slate-300 rounded-[52px] p-12 shadow-[0_60px_120px_-20px_rgba(15,23,42,0.25)] border-t-[8px] border-t-orange-500">
            <h3 className="text-xl font-black tracking-tight text-slate-900 mb-12 uppercase tracking-[0.2em] flex items-center gap-3">
               <div className="w-2 h-8 bg-slate-900 rounded-full"></div> Installation Growth
            </h3>
            <div className="h-[280px] w-full">
               {mounted && (
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={installsData}>
                       <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e2e8f0" />
                       <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12, fontWeight: 'black'}} />
                       <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }} />
                       <Bar dataKey="installs" fill="#f97316" radius={[16, 16, 0, 0]} barSize={50} />
                    </BarChart>
                 </ResponsiveContainer>
               )}
            </div>
         </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color, trend, isPositive }: any) {
  const colorMap: any = {
    orange: "text-orange-500 bg-orange-50 border-orange-200",
    blue: "text-blue-500 bg-blue-50 border-blue-200",
    emerald: "text-emerald-500 bg-emerald-50 border-emerald-200",
    red: "text-red-500 bg-red-50 border-red-200",
  };

  const borderMap: any = {
    orange: "border-t-orange-500",
    blue: "border-t-blue-500",
    emerald: "border-t-emerald-500",
    red: "border-t-red-500",
  }

  return (
    <div className={cn("bg-white border-2 border-slate-300 p-10 rounded-[48px] group transition-all duration-700 hover:border-orange-500 shadow-[0_40px_80px_-15px_rgba(15,23,42,0.2)] hover:shadow-[0_60px_120px_-15px_rgba(249,115,22,0.35)] hover:-translate-y-4 relative overflow-hidden border-t-[10px]", borderMap[color])}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-1000 opacity-50"></div>
      
      <div className="flex justify-between items-start mb-10 relative z-10">
        <div className={cn("p-6 rounded-[24px] border-2 shadow-sm", colorMap[color])}>
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

function BreakdownItem({ label, percentage, color }: any) {
   return (
      <div className="space-y-6">
         <div className="flex justify-between items-end px-2">
            <p className="text-base font-black text-slate-900 uppercase tracking-widest leading-none">{label}</p>
            <p className="text-[12px] font-black text-orange-500 uppercase tracking-[0.3em]">{percentage}% SHARE</p>
         </div>
         <div className="w-full h-8 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-200 p-1.5 shadow-inner">
            <div className={cn("h-full rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(0,0,0,0.1)]", color)} style={{ width: `${percentage}%` }}></div>
         </div>
      </div>
   )
}
