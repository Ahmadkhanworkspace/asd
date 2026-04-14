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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="24,562" icon={Users} color="orange" trend="+12%" isPositive={true} />
        <StatCard title="App Installs" value="12,802" icon={Smartphone} color="blue" trend="+18%" isPositive={true} />
        <StatCard title="Total Revenue" value="$42,500.20" icon={TrendingUp} color="emerald" trend="+5.4%" isPositive={true} />
        <StatCard title="Total Payouts" value="$18,902.10" icon={Banknote} color="red" trend="-2.1%" isPositive={false} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Revenue Chart */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-[40px] p-10 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900">Revenue Breakdown</h3>
              <p className="text-slate-500 text-sm font-medium mt-1">Daily platform earnings vs user payouts</p>
            </div>
            <div className="flex gap-4">
              <select className="bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 text-xs font-bold outline-none focus:border-orange-500/20 appearance-none cursor-pointer">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
          </div>
          <div className="h-[400px] w-full">
            {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={earningsData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#f97316" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={4} dot={{ r: 4, fill: '#f97316', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6, strokeWidth: 0 }} />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Small Data Cards */}
        <div className="space-y-6">
           <MiniDataCard title="Ad Clicks" value="142,402" icon={MousePointer2} color="orange" />
           <MiniDataCard title="Game Tokens Used" value="89,120" icon={Coins} color="blue" />
           <MiniDataCard title="Total Deposits" value="$5,240.00" icon={Wallet} color="emerald" />
           
           <div className="bg-orange-500 rounded-[40px] p-8 text-white shadow-xl shadow-orange-500/20 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <p className="text-orange-100 font-black uppercase tracking-widest text-[10px] mb-2">Current System Status</p>
                <h4 className="text-2xl font-black mb-6">Blazing Fast Production</h4>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full w-fit">
                   <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                   <span className="text-[10px] font-bold">ALL MODULES ACTIVE</span>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* Bottom Grid: Earning Breakdown & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-sm">
            <h3 className="text-xl font-black tracking-tight text-slate-900 mb-8 lowercase">/ earning_breakdown</h3>
            <div className="space-y-8">
               <BreakdownItem label="PTC Ads" percentage={45} color="bg-orange-500" />
               <BreakdownItem label="EarnX Xtreme" percentage={30} color="bg-blue-500" />
               <BreakdownItem label="Spin Wheel & Games" percentage={15} color="bg-emerald-500" />
               <BreakdownItem label="Micro Tasks" percentage={10} color="bg-purple-500" />
            </div>
         </div>

         <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-sm">
            <h3 className="text-xl font-black tracking-tight text-slate-900 mb-8 lowercase">/ top_growth_areas</h3>
            <div className="h-[250px] w-full">
               {mounted && (
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={installsData}>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                       <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} />
                       <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '20px', border: '1px solid #f1f5f9' }} />
                       <Bar dataKey="installs" fill="#f97316" radius={[10, 10, 0, 0]} />
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
    orange: "text-orange-500 bg-orange-500/10",
    blue: "text-blue-500 bg-blue-500/10",
    emerald: "text-emerald-500 bg-emerald-500/10",
    red: "text-red-500 bg-red-500/10",
  };

  return (
    <div className="bg-white border border-slate-200 p-8 rounded-[40px] group transition-all duration-300 hover:border-orange-500/20 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div className={cn("p-4 rounded-2xl", colorMap[color])}>
          <Icon size={24} />
        </div>
        <div className={cn(
          "flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest",
          isPositive ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
        )}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {trend}
        </div>
      </div>
      <div>
        <h4 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-3xl font-black text-slate-900 tracking-tighter">{value}</p>
      </div>
    </div>
  );
}

function MiniDataCard({ title, value, icon: Icon, color }: any) {
   const colorMap: any = {
      orange: "text-orange-500",
      blue: "text-blue-500",
      emerald: "text-emerald-500",
   };
   
   return (
      <div className="bg-white border border-slate-200 p-6 rounded-[32px] flex items-center justify-between shadow-sm group hover:border-slate-300 transition-all">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-slate-900 transition-colors">
               <Icon size={20} />
            </div>
            <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{title}</p>
               <p className="text-lg font-black text-slate-900 -mt-0.5">{value}</p>
            </div>
         </div>
         <ArrowUpRight size={18} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-all" />
      </div>
   )
}

function BreakdownItem({ label, percentage, color }: any) {
   return (
      <div className="space-y-3">
         <div className="flex justify-between items-end">
            <p className="text-sm font-bold text-slate-900">{label}</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{percentage}% OF TOTAL</p>
         </div>
         <div className="w-full h-3 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
            <div className={cn("h-full rounded-full transition-all duration-1000", color)} style={{ width: `${percentage}%` }}></div>
         </div>
      </div>
   )
}
