"use client";

import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Ban, 
  Globe, 
  Plus, 
  Trash2, 
  AlertOctagon,
  Unlock
} from 'lucide-react';
import { cn } from '@/lib/utils';

const blacklistedIPs = [
  { ip: '192.168.1.52', reason: 'Brute Force Attempt', date: '2026-04-14 08:30', blocks: 12 },
  { ip: '45.12.98.2', reason: 'Multi-Account Abuse', date: '2026-04-13 22:15', blocks: 45 },
  { ip: '103.4.12.231', reason: 'Proxy/VPN Detection', date: '2026-04-13 14:00', blocks: 8 },
];

export default function SecurityPage() {
  return (
    <div className="space-y-8">
      {/* Security Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SecurityStatCard title="Active Bans" value="124" icon={Ban} color="red" />
        <SecurityStatCard title="Blocked IPs" value="42" icon={Globe} color="yellow" />
        <SecurityStatCard title="Risk Level" value="Low" icon={ShieldAlert} color="emerald" />
        <SecurityStatCard title="Threats Prevented" value="1,240" icon={AlertOctagon} color="blue" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* IP Blacklist Table */}
        <div className="lg:col-span-2 bg-[#0A0D14] border border-white/5 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
            <h3 className="text-xl font-bold">IP Blacklist</h3>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
              <Plus size={18} />
              Block New IP
            </button>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-gray-400 text-xs font-bold uppercase">
                <th className="px-8 py-4">IP Address</th>
                <th className="px-8 py-4">Reason</th>
                <th className="px-8 py-4">Total Blocks</th>
                <th className="px-8 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {blacklistedIPs.map((item) => (
                <tr key={item.ip} className="hover:bg-red-500/[0.02] transition-colors group">
                  <td className="px-8 py-5">
                    <p className="font-mono text-white font-bold">{item.ip}</p>
                    <p className="text-[10px] text-gray-500 uppercase">{item.date}</p>
                  </td>
                  <td className="px-8 py-5 text-sm text-gray-400">{item.reason}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-red-400" style={{ width: `${Math.min(item.blocks * 2, 100)}%` }}></div>
                      </div>
                      <span className="text-xs font-bold text-gray-500">{item.blocks}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 text-gray-500 hover:text-emerald-400 transition-all" title="Unblock">
                      <Unlock size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Multi-Account Detection */}
        <div className="bg-[#0A0D14] border border-white/5 rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-6">Multi-Account Alerts</h3>
          <div className="space-y-6">
            <RiskItem user="jdoe" device="iPhone 13" match="95% Match" level="High" />
            <RiskItem user="mross" device="Windows Chrome" match="80% Match" level="Medium" />
            <RiskItem user="sarah_w" device="Samsung S22" match="99% Match" level="Critical" />
          </div>
          <button className="w-full mt-8 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-400/20 rounded-xl transition-all font-bold text-sm">
            Run Security Audit
          </button>
        </div>
      </div>
    </div>
  );
}

function SecurityStatCard({ title, value, icon: Icon, color }: any) {
  const colorMap: any = {
    red: "text-red-400 bg-red-400/10",
    yellow: "text-yellow-400 bg-yellow-400/10",
    emerald: "text-emerald-400 bg-emerald-400/10",
    blue: "text-blue-400 bg-blue-400/10",
  };

  return (
    <div className="bg-[#0A0D14] border border-white/5 p-6 rounded-3xl">
      <div className={cn("p-3 w-fit rounded-2xl mb-4", colorMap[color])}>
        <Icon size={24} />
      </div>
      <h4 className="text-gray-500 text-sm font-medium mb-1">{title}</h4>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  );
}

function RiskItem({ user, device, match, level }: any) {
  return (
    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-white">@{user}</span>
        <span className={cn(
          "text-[10px] font-black uppercase px-2 py-0.5 rounded",
          level === 'Critical' ? "bg-red-500 text-white" : "bg-yellow-500/20 text-yellow-500"
        )}>{level} Risk</span>
      </div>
      <p className="text-xs text-gray-500">{device} • {match}</p>
    </div>
  );
}
