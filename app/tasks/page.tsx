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
      <div className="flex gap-4 p-3 bg-white border-2 border-slate-200 rounded-[32px] w-fit shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
        <button 
          onClick={() => setActiveTab('manager')}
          className={cn(
            "px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all",
            activeTab === 'manager' ? "bg-orange-500 text-white shadow-xl shadow-orange-500/20" : "text-slate-400 hover:text-slate-900"
          )}
        >
          Task Manager
        </button>
        <button 
          onClick={() => setActiveTab('approval')}
          className={cn(
            "px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2",
            activeTab === 'approval' ? "bg-orange-500 text-white shadow-xl shadow-orange-500/20" : "text-slate-400 hover:text-slate-900"
          )}
        >
          Approval Queue
          <span className="flex items-center justify-center w-5 h-5 bg-orange-100 text-orange-600 rounded-full text-[10px]">12</span>
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
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-white border-2 border-slate-200 rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="p-10 border-b-2 border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-bl-full translate-x-12 -translate-y-12"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-black tracking-tight text-slate-900">Campaign Manager</h3>
            <p className="text-slate-500 text-sm font-medium">Create and manage micro-earning tasks</p>
          </div>
          <button className="relative z-10 flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl">
            <Plus size={18} /> New Task
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                <th className="px-10 py-5">Task Details</th>
                <th className="px-10 py-5">Reward</th>
                <th className="px-10 py-5">Performance</th>
                <th className="px-10 py-5">Status</th>
                <th className="px-10 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-100">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-2xl bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-slate-400">
                          <FileText size={22} />
                       </div>
                       <div>
                          <p className="font-bold text-slate-900">{task.title}</p>
                          <p className="text-[10px] text-orange-500 font-black uppercase tracking-widest mt-0.5">{task.category}</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                        <Coins size={16} className="text-orange-500" /> {task.reward} Coins
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                        {task.completions.toLocaleString()} <span className="text-slate-400 text-[10px] font-black uppercase">Users</span>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                      task.status === 'active' ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-600"
                    )}>{task.status}</span>
                  </td>
                  <td className="px-10 py-6 text-right">
                    <button className="px-6 py-2.5 bg-slate-50 text-slate-900 hover:bg-slate-900 hover:text-white rounded-xl transition-all font-black text-[10px] uppercase tracking-widest border-2 border-slate-100">
                       Manage
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
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-slate-200 p-8 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
           <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Pending Review</h4>
           <p className="text-4xl font-black text-slate-900 tracking-tighter">12</p>
        </div>
        <div className="bg-white border-2 border-slate-200 p-8 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
           <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Approved Today</h4>
           <p className="text-4xl font-black text-emerald-500 tracking-tighter">245</p>
        </div>
        <div className="bg-white border-2 border-slate-200 p-8 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
           <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Rejected (24h)</h4>
           <p className="text-4xl font-black text-red-500 tracking-tighter">14</p>
        </div>
      </div>

      <div className="bg-white border-2 border-slate-200 rounded-[40px] shadow-[0_50px_100px_rgba(0,0,0,0.12)] overflow-hidden">
        <div className="p-10 border-b-2 border-slate-100">
          <h3 className="text-xl font-black tracking-tight text-slate-900 uppercase tracking-widest">Verification Terminal</h3>
          <p className="text-slate-500 text-sm font-medium">Approve or reject user-submitted evidence</p>
        </div>

        <div className="divide-y-2 divide-slate-100">
          {submissions.map((sub) => (
            <div key={sub.id} className="p-8 hover:bg-slate-50/50 transition-all flex flex-col md:flex-row items-center justify-between gap-8 group">
              <div className="flex items-center gap-6">
                 <div className="w-14 h-14 rounded-full bg-orange-100 border-4 border-white ring-4 ring-orange-50 flex items-center justify-center text-orange-600 transition-transform group-hover:scale-110">
                    <User size={24} />
                 </div>
                 <div>
                    <div className="flex items-center gap-2">
                       <span className="font-black text-slate-900 text-lg">@{sub.user}</span>
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded-md">{sub.time}</span>
                    </div>
                    <p className="text-sm font-medium text-slate-500 mt-1">Submitting for: <span className="font-black text-orange-600">{sub.task}</span></p>
                 </div>
              </div>

              <div className="flex items-center gap-6 w-full md:w-auto">
                 <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10">
                    <Eye size={18} /> View Screenshot
                 </button>
                 <div className="flex gap-4">
                    <button className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl hover:bg-emerald-500 hover:text-white transition-all shadow-xl shadow-emerald-500/20 border-2 border-white">
                       <CheckCircle2 size={24} />
                    </button>
                    <button className="p-4 bg-red-100 text-red-600 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-xl shadow-red-500/20 border-2 border-white">
                       <XCircle size={24} />
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
