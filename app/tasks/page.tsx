"use client";

import React, { useState } from 'react';
import { 
  Plus, 
  Settings2, 
  Smartphone, 
  ExternalLink, 
  Trash2, 
  Edit2,
  Tv,
  Gamepad
} from 'lucide-react';
import { cn } from '@/lib/utils';

const tasks = [
  { id: '1', title: 'Follow on Twitter', type: 'social', reward: '10 Coins', rewardUsd: '$0.01', status: 'active' },
  { id: '2', title: 'Join Telegram Channel', type: 'social', reward: '15 Coins', rewardUsd: '$0.015', status: 'active' },
  { id: '3', title: 'Install VPN App', type: 'app_install', reward: '150 Coins', rewardUsd: '$0.15', status: 'paused' },
];

export default function TasksAdsPage() {
  const [activeTab, setActiveTab] = useState('tasks');

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-4 border-b border-white/5 pb-4">
        <button 
          onClick={() => setActiveTab('tasks')}
          className={cn(
            "px-6 py-2 rounded-xl text-sm font-bold transition-all",
            activeTab === 'tasks' ? "bg-yellow-500 text-[#06080D]" : "text-gray-400 hover:text-white"
          )}
        >
          Manage Tasks
        </button>
        <button 
          onClick={() => setActiveTab('ads')}
          className={cn(
            "px-6 py-2 rounded-xl text-sm font-bold transition-all",
            activeTab === 'ads' ? "bg-yellow-500 text-[#06080D]" : "text-gray-400 hover:text-white"
          )}
        >
          Ad Configuration
        </button>
      </div>

      {activeTab === 'tasks' ? (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">In-App Tasks</h3>
            <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-[#06080D] px-4 py-2 rounded-xl text-sm font-bold transition-all">
              <Plus size={18} />
              Add Task
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <div key={task.id} className="bg-[#0A0D14] border border-white/5 p-6 rounded-3xl relative group hover:border-yellow-500/20 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className={cn(
                    "p-3 rounded-2xl",
                    task.type === 'social' ? "bg-blue-400/10 text-blue-400" : "bg-purple-400/10 text-purple-400"
                  )}>
                    {task.type === 'social' ? <Settings2 size={24} /> : <Smartphone size={24} />}
                  </div>
                  <span className={cn(
                    "px-2 py-0.5 rounded-md text-[10px] font-bold uppercase",
                    task.status === 'active' ? "bg-emerald-400/10 text-emerald-400" : "bg-red-400/10 text-red-400"
                  )}>
                    {task.status}
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-1">{task.title}</h4>
                <p className="text-sm text-gray-500 mb-4">{task.reward} / {task.rewardUsd}</p>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2">
                    <Edit2 size={14} /> Edit
                  </button>
                  <button className="p-2 bg-red-400/10 hover:bg-red-400/20 text-red-400 rounded-xl transition-all">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AdMob Settings */}
          <div className="bg-[#0A0D14] border border-white/5 p-8 rounded-3xl space-y-6">
            <div className="flex items-center gap-4 text-yellow-500 mb-2">
              <Tv size={24} />
              <h3 className="text-xl font-bold">Google AdMob Configuration</h3>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-500">Rewarded Ad Unit ID</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-yellow-500/50 outline-none" defaultValue="ca-app-pub-3940.../12345" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-500">Reward per Ad (Coins)</label>
                  <input type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-yellow-500/50 outline-none" defaultValue="10" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-500">Daily Max Ads</label>
                  <input type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-yellow-500/50 outline-none" defaultValue="10" />
                </div>
              </div>
            </div>
            <button className="w-full bg-yellow-500 text-[#06080D] font-bold py-3 rounded-xl hover:bg-yellow-600 transition-all">Update Ad Settings</button>
          </div>

          {/* Game Rewards */}
          <div className="bg-[#0A0D14] border border-white/5 p-8 rounded-3xl space-y-6">
            <div className="flex items-center gap-4 text-purple-500 mb-2">
              <Gamepad size={24} />
              <h3 className="text-xl font-bold">Game Rewards Control</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-500">Spin & Win Max Reward (Coins)</label>
                <input type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-yellow-500/50 outline-none" defaultValue="100" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-500">Scratch Card Avg. Reward</label>
                <input type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-yellow-500/50 outline-none" defaultValue="25" />
              </div>
            </div>
            <button className="w-full bg-white/5 border border-white/10 text-white font-bold py-3 rounded-xl hover:bg-white/10 transition-all">Save Game Settings</button>
          </div>
        </div>
      )}
    </div>
  );
}
