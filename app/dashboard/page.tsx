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
    <div className="space-y-10 pb-20">
      {/* Primary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard title="Total Users" value="24,562" icon={Users} color="orange" trend="+12%" isPositive={true} />
        <StatCard title="App Installs" value="12,802" icon={Smartphone} color="blue" trend="+18%" isPositive={true} />
        <StatCard title="Total Revenue" value="$42,500.20" icon={TrendingUp} color="emerald" trend="+5.4%" isPositive={true} />
        <StatCard title="Total Payouts" value="$18,902.10" icon={Banknote} color="red" trend="-2.1%" isPositive={false} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Revenue Chart */}
        <div className="lg:col-span-2 bg-white border-2 border-slate-200 rounded-[48px] p-10 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.12)]">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-widest">Platform Analytics</h3>
              <p className="text-slate-400 text-sm font-bold mt-1">Revenue vs payouts performance across 7 days</p>
            </div>
            <div className="flex gap-4">
               <div className="px-6 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400">
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
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 30px 60px -10px rgb(0 0 0 / 0.15)' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#f97316" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={5} dot={{ r: 6, fill: '#f97316', strokeWidth: 3, stroke: '#fff' }} />
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
           
           <div className="bg-orange-500 rounded-[44px] p-10 text-white shadow-[0_40px_80px_rgba(249,115,22,0.3)] relative overflow-hidden group border-2 border-orange-400/50">
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
              <div className="relative z-10">
                <p className="text-orange-100 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Production Node v2</p>
                <h4 className="text-3xl font-black mb-10 leading-none">Blazing Fast<br/>Real-time Core</h4>
                <div className="flex items-center gap-3 px-5 py-2.5 bg-white/20 rounded-full w-fit border border-white/30 backdrop-blur-md">
                   <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                   <span className="text-[10px] font-black tracking-widest uppercase">System Operational</span>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* Bottom Grid: Earning Breakdown & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-white border-2 border-slate-200 rounded-[48px] p-12 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.12)]">
            <h3 className="text-xl font-black tracking-tight text-slate-900 mb-10 uppercase tracking-[0.2em]">/ earning_composition</h3>
            <div className="space-y-10">
               <BreakdownItem label="PTC Ads" percentage={45} color="bg-orange-500" />
               <BreakdownItem label="EarnX Xtreme" percentage={30} color="bg-blue-500" />
               <BreakdownItem label="Spin Wheel & Games" percentage={15} color="bg-emerald-500" />
               <BreakdownItem label="Micro Tasks" percentage={10} color="bg-purple-500" />
            </div>
         </div>

         <div className="bg-white border-2 border-slate-200 rounded-[48px] p-12 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.12)]">
            <h3 className="text-xl font-black tracking-tight text-slate-900 mb-10 uppercase tracking-[0.2em]">/ installation_growth</h3>
            <div className="h-[250px] w-full">
               {mounted && (
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={installsData}>
                       <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f1f5f9" />
                       <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'black'}} />
                       <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                       <Bar dataKey="installs" fill="#f97316" radius={[14, 14, 0, 0]} barSize={40} />
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
    orange: "text-orange-500 bg-orange-50 border-orange-100",
    blue: "text-blue-500 bg-blue-50 border-blue-100",
    emerald: "text-emerald-500 bg-emerald-50 border-emerald-100",
    red: "text-red-500 bg-red-50 border-red-100",
  };

  return (
    <div className="bg-white border-2 border-slate-200 p-10 rounded-[44px] group transition-all duration-700 hover:border-orange-500 shadow-[0_40px_80px_-15px_rgba(15,23,42,0.1)] hover:shadow-[0_50px_100px_-15px_rgba(249,115,22,0.2)] hover:-translate-y-3 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-28 h-28 bg-orange-50/50 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-1000"></div>
      
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div className={cn("p-5 rounded-[22px] border-2", colorMap[color])}>
          <Icon size={28} />
        </div>
        <div className={cn(
          "flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black tracking-widest border-2",
          isPositive ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-red-50 text-red-600 border-red-100"
        )}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {trend}
        </div>
      </div>
      <div className="relative z-10">
        <h4 className="text-slate-400 font-black text-xs uppercase tracking-[0.2em] mb-2">{title}</h4>
        <p className="text-4xl font-black text-slate-900 tracking-tighter leading-none">{value}</p>
      </div>
    </div>
  );
}

function MiniDataCard({ title, value, icon: Icon, color }: any) {
   return (
      <div className="bg-white border-2 border-slate-200 p-8 rounded-[36px] flex items-center justify-between shadow-[0_25px_50px_-10px_rgba(0,0,0,0.06)] group hover:border-orange-500 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(249,115,22,0.12)] hover:translate-x-2">
         <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-orange-100 group-hover:bg-orange-50 group-hover:text-orange-500 transition-all">
               <Icon size={24} />
            </div>
            <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{title}</p>
               <p className="text-2xl font-black text-slate-900 leading-none">{value}</p>
            </div>
         </div>
         <ArrowUpRight size={20} className="text-slate-200 group-hover:text-orange-500 transition-all" />
      </div>
   )
}

function BreakdownItem({ label, percentage, color }: any) {
   return (
      <div className="space-y-4">
         <div className="flex justify-between items-end">
            <p className="text-sm font-black text-slate-900 uppercase tracking-widest">{label}</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{percentage}% RELEVANCE</p>
         </div>
         <div className="w-full h-4 bg-slate-50 rounded-full overflow-hidden border-2 border-slate-100 p-1">
            <div className={cn("h-full rounded-full transition-all duration-1000 shadow-sm", color)} style={{ width: `${percentage}%` }}></div>
         </div>
      </div>
   )
}
