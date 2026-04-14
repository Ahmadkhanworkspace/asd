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
    <div className="space-y-12 pb-20">
      {/* Tab Navigation */}
      <div className="flex gap-8 p-6 bg-white border-2 border-slate-300 rounded-[44px] w-fit shadow-[0_60px_120px_-30px_rgba(15,23,42,0.25)] border-t-[10px] border-t-orange-500">
        <button 
          onClick={() => setActiveTab('manager')}
          className={cn(
            "px-12 py-5 rounded-[24px] text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500",
            activeTab === 'manager' ? "bg-slate-900 text-white shadow-2xl translate-y-[-4px]" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
          )}
        >
          Mission Distribution
        </button>
        <button 
          onClick={() => setActiveTab('approval')}
          className={cn(
            "px-12 py-5 rounded-[24px] text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 flex items-center gap-4",
            activeTab === 'approval' ? "bg-slate-900 text-white shadow-2xl translate-y-[-4px]" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
          )}
        >
          Validator Station
          <span className="flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-xl text-[12px] font-black shadow-[0_5px_15px_rgba(249,115,22,0.4)] ring-4 ring-orange-100 transition-transform hover:scale-110">12</span>
        </button>
      </div>

      <div className="animate-in fade-in duration-1000">
         {activeTab === 'manager' ? <TaskManager /> : <ApprovalQueue />}
      </div>
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
    <div className="space-y-10">
      <div className="bg-white border-2 border-slate-300 rounded-[64px] shadow-[0_80px_160px_-40px_rgba(15,23,42,0.3)] overflow-hidden border-t-[12px] border-t-slate-900">
        <div className="p-16 border-b-2 border-slate-200 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-12 relative overflow-hidden bg-slate-100/50">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full translate-x-32 -translate-y-32"></div>
          
          <div className="relative z-10 flex items-center gap-8">
            <div className="w-20 h-20 bg-orange-500 rounded-[32px] border-4 border-white flex items-center justify-center text-white shadow-2xl shadow-orange-500/20 rotate-6"><Briefcase size={36} /></div>
            <div>
              <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em] leading-none">Task Core Directory</h3>
              <p className="text-slate-500 text-xs font-black mt-3 uppercase tracking-[0.3em] opacity-80">Orchestrate micro-earning campaigns</p>
            </div>
          </div>
          <button className="relative z-10 flex items-center gap-4 px-12 py-6 bg-slate-900 text-white rounded-[28px] text-[11px] font-black uppercase tracking-[0.3em] shadow-[0_30px_60px_rgba(15,23,42,0.4)] hover:bg-orange-600 transition-all">
            <Plus size={24} /> New Campaign Protocol
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-100 text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] border-b-2 border-slate-200">
                <th className="px-16 py-8">Mission Identity</th>
                <th className="px-16 py-8">Yield Params</th>
                <th className="px-16 py-8">conversion rate</th>
                <th className="px-16 py-8">Node status</th>
                <th className="px-16 py-8 text-right">Ops Terminal</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-100">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-slate-50 transition-all duration-500 group">
                  <td className="px-16 py-10">
                    <div className="flex items-center gap-8">
                       <div className="w-20 h-20 rounded-[28px] bg-white border-4 border-slate-100 flex items-center justify-center text-slate-400 shadow-2xl transition-all duration-700 group-hover:rotate-12 group-hover:scale-110">
                          <FileText size={32} />
                       </div>
                       <div>
                          <p className="font-black text-slate-900 text-2xl tracking-tighter leading-none mb-3">{task.title}</p>
                          <p className="text-[10px] text-orange-600 font-black uppercase tracking-[0.3em] bg-orange-50 px-5 py-2 rounded-2xl w-fit border-2 border-orange-100 shadow-sm">{task.category}</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-16 py-10">
                    <div className="flex items-center gap-3 text-lg font-black text-slate-900 bg-slate-100 px-6 py-3 rounded-2xl border-2 border-slate-200 w-fit shadow-inner">
                        <Coins size={22} className="text-orange-500" /> {task.reward} <span className="text-xs text-slate-400 ml-1">COINS</span>
                    </div>
                  </td>
                  <td className="px-16 py-10 font-black">
                    <p className="text-4xl text-slate-900 tracking-tighter mb-1 leading-none">{task.completions.toLocaleString()}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] opacity-80">Verified Subs</p>
                  </td>
                  <td className="px-16 py-10">
                    <span className={cn(
                      "px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.3em] border-2 shadow-2xl transition-all",
                      task.status === 'active' ? "bg-emerald-50 text-emerald-600 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600" : "bg-orange-50 text-orange-600 border-orange-200 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600"
                    )}>{task.status}</span>
                  </td>
                  <td className="px-16 py-10 text-right">
                    <button className="px-10 py-5 bg-white text-slate-900 hover:bg-slate-900 hover:text-white rounded-[24px] transition-all font-black text-[11px] uppercase tracking-[0.3em] border-2 border-slate-200 shadow-lg shadow-slate-900/5">
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
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <QueueStatCard title="Awaiting Validation" value="12" color="slate" />
        <QueueStatCard title="Approved (24h Window)" value="245" color="emerald" />
        <QueueStatCard title="Protocol Violations" value="14" color="red" />
      </div>

      <div className="bg-white border-2 border-slate-300 rounded-[64px] shadow-[0_80px_160px_-40px_rgba(15,23,42,0.35)] overflow-hidden border-t-[12px] border-t-orange-500">
        <div className="p-16 border-b-2 border-slate-200 bg-slate-100/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-900/5 rounded-full translate-x-32 -translate-y-32"></div>
          <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase tracking-[0.3em] flex items-center gap-4">
             <div className="w-4 h-12 bg-orange-500 rounded-full"></div> Validation Terminal
          </h3>
          <p className="text-slate-500 text-sm font-black mt-4 uppercase tracking-[0.3em] opacity-80">Authenticate user-submitted proof nodes for coin release</p>
        </div>

        <div className="divide-y-2 divide-slate-100 bg-white">
          {submissions.map((sub) => (
            <div key={sub.id} className="p-12 hover:bg-slate-50 transition-all duration-700 flex flex-col xl:flex-row items-center justify-between gap-12 group">
              <div className="flex items-center gap-10">
                 <div className="w-24 h-24 rounded-full bg-white border-4 border-white ring-[10px] ring-orange-50 flex items-center justify-center text-orange-600 transition-all duration-700 group-hover:scale-110 shadow-2xl relative overflow-hidden group-hover:ring-orange-200">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-50 to-white"></div>
                    <User size={44} className="relative z-10" />
                 </div>
                 <div>
                    <div className="flex items-center gap-4">
                       <span className="font-black text-slate-900 text-3xl tracking-tighter leading-none">@{sub.user}</span>
                       <span className="text-[11px] font-black text-white bg-slate-900 px-5 py-2 rounded-2xl border-2 border-slate-800 shadow-2xl uppercase tracking-[0.3em]">{sub.time} NODE SYNC</span>
                    </div>
                    <p className="text-sm font-bold text-slate-500 mt-4 uppercase tracking-[0.4em]">Validation Target: <span className="text-orange-600 font-black underline decoration-4 decoration-orange-200">{sub.task}</span></p>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 w-full xl:w-auto">
                 <button className="w-full md:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-slate-900 text-white rounded-[32px] text-[11px] font-black uppercase tracking-[0.3em] hover:bg-orange-600 transition-all shadow-2xl shadow-slate-900/30">
                    <Eye size={24} /> Review Proof Node
                 </button>
                 <div className="flex gap-6 w-full md:w-auto">
                    <button className="flex-1 p-6 bg-white border-2 border-slate-200 text-emerald-500 rounded-[32px] hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-2xl shadow-emerald-500/10 active:scale-90">
                       <CheckCircle2 size={36} />
                    </button>
                    <button className="flex-1 p-6 bg-white border-2 border-slate-200 text-red-500 rounded-[32px] hover:bg-red-500 hover:text-white hover:border-red-500 transition-all shadow-2xl shadow-red-500/10 active:scale-90">
                       <XCircle size={36} />
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
        slate: "text-slate-900 border-t-slate-900 shadow-[0_45px_100px_rgba(15,23,42,0.15)]",
        emerald: "text-emerald-500 border-t-emerald-500 shadow-[0_45px_100px_rgba(16,185,129,0.15)]",
        red: "text-red-500 border-t-red-500 shadow-[0_45px_100px_rgba(239,68,68,0.15)]"
    }
    return (
        <div className={cn("bg-white border-2 border-slate-300 p-12 rounded-[52px] border-t-[12px] group transition-all duration-700 hover:-translate-y-4", colors[color])}>
           <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-3 group-hover:text-slate-900 transition-colors">{title} Protocol</h4>
           <p className="text-6xl font-black tracking-tighter leading-none">{value}</p>
        </div>
    )
}
