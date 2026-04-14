import React from 'react';
import { 
  Users, 
  TrendingUp, 
  Banknote, 
  MousePointer2 
} from 'lucide-react';
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
  { name: 'Mon', earnings: 4000, users: 2400 },
  { name: 'Tue', earnings: 3000, users: 1398 },
  { name: 'Wed', earnings: 2000, users: 9800 },
  { name: 'Thu', earnings: 2780, users: 3908 },
  { name: 'Fri', earnings: 1890, users: 4800 },
  { name: 'Sat', earnings: 2390, users: 3800 },
  { name: 'Sun', earnings: 3490, users: 4300 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="24,562" icon={Users} color="blue" trend="+12% from last week" />
        <StatCard title="Total Earnings" value="$1,245.50" icon={TrendingUp} color="emerald" trend="+8.2% from last month" />
        <StatCard title="Ad Clicks" value="142,402" icon={MousePointer2} color="yellow" trend="+24% from yesterday" />
        <StatCard title="Pending Payouts" value="$128.00" icon={Banknote} color="red" trend="5 requests waiting" />
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#0A0D14] border border-white/5 rounded-3xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold">Earnings Overview</h3>
            <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-yellow-500/30">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EAB308" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#EAB308" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0A0D14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#EAB308' }}
                />
                <Area type="monotone" dataKey="earnings" stroke="#EAB308" fillOpacity={1} fill="url(#colorEarnings)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-[#0A0D14] border border-white/5 rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-8">Recent Activity</h3>
          <div className="space-y-6">
            <ActivityItem title="New User Signup" time="2 minutes ago" user="ahmad_khan" color="blue" />
            <ActivityItem title="Withdrawal Request" time="14 minutes ago" user="john_doe" color="red" amount="$5.00" />
            <ActivityItem title="Ad Pack Purchased" time="1 hour ago" user="crypto_king" color="emerald" amount="$10.00" />
            <ActivityItem title="New User Signup" time="3 hours ago" user="alice_w" color="blue" />
          </div>
          <button className="w-full mt-8 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-200 text-gray-400 font-medium text-sm">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color, trend }: any) {
  const colorMap: any = {
    blue: "text-blue-400 bg-blue-400/10",
    emerald: "text-emerald-400 bg-emerald-400/10",
    yellow: "text-yellow-400 bg-yellow-400/10",
    red: "text-red-400 bg-red-400/10",
  };

  return (
    <div className="bg-[#0A0D14] border border-white/5 p-6 rounded-3xl group hover:border-white/10 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className={cn("p-3 rounded-2xl", colorMap[color])}>
          <Icon size={24} />
        </div>
        <span className="text-xs text-gray-500 font-medium">{trend}</span>
      </div>
      <div>
        <h4 className="text-gray-400 font-medium text-sm mb-1">{title}</h4>
        <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
      </div>
    </div>
  );
}

function ActivityItem({ title, time, user, color, amount }: any) {
  const colorMap: any = {
    blue: "bg-blue-400",
    emerald: "bg-emerald-400",
    red: "bg-red-400",
  };

  return (
    <div className="flex gap-4">
      <div className={cn("mt-1.5 w-2 h-2 rounded-full", colorMap[color])}></div>
      <div className="flex-1">
        <p className="text-sm font-medium text-white">{title}</p>
        <div className="flex justify-between items-center mt-1">
          <p className="text-xs text-gray-500">@{user} • {time}</p>
          {amount && <span className="text-xs font-bold text-yellow-500">{amount}</span>}
        </div>
      </div>
    </div>
  );
}

import { cn } from '@/lib/utils';
