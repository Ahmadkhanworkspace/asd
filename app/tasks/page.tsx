"use client";

import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  Plus, 
  Filter, 
  Clock, 
  CheckCircle2, 
  XCircle,
  Eye,
  FileText,
  User,
  Coins
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TasksPage() {
  const [activeTab, setActiveTab] = useState('manager'); // 'manager' or 'approval'

  return (
    <div className="space-y-10 pb-20">
      {/* Tab Navigation */}
      <div className="flex gap-6 p-4 bg-white border-2 border-slate-200 rounded-[36px] w-fit shadow-[0_40px_80px_-15px_rgba(15,23,42,0.12)] border-t-4 border-t-orange-500">
        <button 
          onClick={() => setActiveTab('manager')}
          className={cn(
            "px-10 py-4.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all",
            activeTab === 'manager' ? "bg-slate-900 text-white shadow-2xl translate-y-[-2px]" : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"
          )}
        >
          Task Distribution
        </button>
        <button 
          onClick={() => setActiveTab('approval')}
          className={cn(
            "px-10 py-4.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-3",
            activeTab === 'approval' ? "bg-slate-900 text-white shadow-2xl translate-y-[-2px]" : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"
          )}
        >
          Review Station
          <span className="flex items-center justify-center w-6 h-6 bg-orange-500 text-white rounded-lg text-[10px] font-black shadow-lg shadow-orange-500/30">12</span>
        </button>
      </div>

      {activeTab === 'manager' ? <TaskManager /> : <ApprovalQueue />}
    </div>
  );
}

function TaskManager() {
  const [tasks] = useState([
    { id: 1, title: 'Follow on X (Twitter)', category: 'Social', reward: 150, completions: 420, status: 'active' },
    { id: 2, title: 'Download Mobile App', category: 'Mobile', reward: 500, completions: 125, status: 'active' },
    { id: 3, title: 'Join Telegram Channel', category: 'Social', reward: 100, completions: 890, status: 'paused' },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="bg-white border-2 border-slate-200 rounded-[52px] shadow-[0_60px_120px_-30px_rgba(15,23,42,0.15)] overflow-hidden">
        <div className="p-12 border-b-2 border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden bg-slate-50/50">
          <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-bl-full translate-x-16 -translate-y-16"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-widest text-orange-500">Task Directory</h3>
            <p className="text-slate-400 text-xs font-bold mt-1 uppercase tracking-widest opacity-80">Orchestrate micro-earning campaigns</p>
          </div>
          <button className="relative z-10 flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-[24px] text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-slate-900/40 hover:bg-orange-600 transition-all">
            <Plus size={20} /> Create Campaign
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-slate-100">
                <th className="px-12 py-6">Mission Details</th>
                <th className="px-12 py-6">Yield Params</th>
                <th className="px-12 py-6">Performance</th>
                <th className="px-12 py-6">Lifecycle</th>
                <th className="px-12 py-6 text-right">Ops</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-100">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-12 py-8">
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 rounded-[24px] bg-white border-2 border-slate-100 flex items-center justify-center text-slate-400 shadow-sm transition-transform group-hover:rotate-6">
                          <FileText size={28} />
                       </div>
                       <div>
                          <p className="font-black text-slate-900 text-lg leading-none">{task.title}</p>
                          <p className="text-[10px] text-orange-600 font-black uppercase tracking-[0.2em] mt-2.5 bg-orange-50 px-3 py-1 rounded-full w-fit border border-orange-100">{task.category}</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-12 py-8">
                    <div className="flex items-center gap-3 text-sm font-black text-slate-900 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200 w-fit shadow-inner">
                        <Coins size={18} className="text-orange-500" /> {task.reward} Coins
                    </div>
                  </td>
                  <td className="px-12 py-8 font-black">
                    <p className="text-xl text-slate-900 tracking-tighter">{task.completions.toLocaleString()}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Conversions</p>
                  </td>
                  <td className="px-12 py-8">
                    <span className={cn(
                      "px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm border-2",
                      task.status === 'active' ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-orange-50 text-orange-600 border-orange-100"
                    )}>{task.status}</span>
                  </td>
                  <td className="px-12 py-8 text-right">
                    <button className="px-8 py-3.5 bg-white text-slate-900 hover:bg-slate-900 hover:text-white rounded-[18px] transition-all font-black text-[10px] uppercase tracking-widest border-2 border-slate-100 shadow-sm">
                       Configure
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ApprovalQueue() {
  const [submissions] = useState([
    { id: 1, user: 'ahmad_khan', task: 'Follow on X', time: '2 mins ago', proof: 'screenshot1.png' },
    { id: 2, user: 'crypto_king', task: 'App Download', time: '14 mins ago', proof: 'screenshot2.png' },
    { id: 3, user: 'jane_doe', task: 'Telegram Join', time: '1 hour ago', proof: 'screenshot3.png' },
  ]);

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <QueueStatCard title="Pending Review" value="12" color="slate" />
        <QueueStatCard title="Approved (24h)" value="245" color="emerald" />
        <QueueStatCard title="Rejected (24h)" value="14" color="red" />
      </div>

      <div className="bg-white border-2 border-slate-200 rounded-[52px] shadow-[0_80px_160px_-40px_rgba(15,23,42,0.2)] overflow-hidden">
        <div className="p-12 border-b-2 border-slate-100 bg-slate-50/50">
          <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em] text-orange-500">Validator Terminal</h3>
          <p className="text-slate-400 text-sm font-bold mt-1 uppercase tracking-widest opacity-80">Authenticate user-submitted proof of execution</p>
        </div>

        <div className="divide-y-2 divide-slate-100">
          {submissions.map((sub) => (
            <div key={sub.id} className="p-10 hover:bg-slate-50 transition-all flex flex-col md:flex-row items-center justify-between gap-10 group">
              <div className="flex items-center gap-8">
                 <div className="w-20 h-20 rounded-full bg-white border-4 border-white ring-4 ring-orange-100 flex items-center justify-center text-orange-600 transition-all group-hover:scale-110 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-orange-50 opacity-50"></div>
                    <User size={36} className="relative z-10" />
                 </div>
                 <div>
                    <div className="flex items-center gap-3">
                       <span className="font-black text-slate-900 text-2xl tracking-tight">@{sub.user}</span>
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">{sub.time} Sync</span>
                    </div>
                    <p className="text-sm font-bold text-slate-400 mt-2 uppercase tracking-widest">Awaiting Verification for: <span className="text-orange-600 font-black">{sub.task}</span></p>
                 </div>
              </div>

              <div className="flex items-center gap-6 w-full md:w-auto">
                 <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-[24px] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-2xl shadow-slate-900/20">
                    <Eye size={20} /> Inspect Payload
                 </button>
                 <div className="flex gap-5">
                    <button className="p-5 bg-white border-2 border-slate-100 text-emerald-500 rounded-[28px] hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-2xl shadow-emerald-500/10">
                       <CheckCircle2 size={28} />
                    </button>
                    <button className="p-5 bg-white border-2 border-slate-100 text-red-500 rounded-[28px] hover:bg-red-500 hover:text-white hover:border-red-500 transition-all shadow-2xl shadow-red-500/10">
                       <XCircle size={28} />
                    </button>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QueueStatCard({ title, value, color }: any) {
    const colors: any = {
        slate: "text-slate-900 border-t-slate-900 shadow-slate-900/5",
        emerald: "text-emerald-500 border-t-emerald-500 shadow-emerald-500/5",
        red: "text-red-500 border-t-red-500 shadow-red-500/5"
    }
    return (
        <div className={cn("bg-white border-2 border-slate-200 p-10 rounded-[44px] shadow-[0_45px_90px_-20px_rgba(15,23,42,0.12)] border-t-8", colors[color])}>
           <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{title}</h4>
           <p className="text-5xl font-black tracking-tighter leading-none">{value}</p>
        </div>
    )
}
