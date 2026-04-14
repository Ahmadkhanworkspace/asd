"use client";

import React, { useState } from 'react';
import { 
  Send, 
  Users, 
  Target, 
  Smartphone, 
  Bell,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function NotificationsPage() {
  const [target, setTarget] = useState('all');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Push Notification Form */}
      <div className="bg-[#0A0D14] border border-white/5 p-8 rounded-[32px] space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Send Push Notification</h3>
          <p className="text-sm text-gray-500">Broadcast messages to your users via FCM</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Target Audience</label>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setTarget('all')}
                className={cn(
                  "flex items-center justify-center gap-2 py-3 rounded-2xl border transition-all text-sm font-bold",
                  target === 'all' ? "bg-yellow-500 border-yellow-500 text-[#06080D]" : "bg-white/5 border-white/10 text-gray-400 hover:text-white"
                )}
              >
                <Users size={18} /> All Users
              </button>
              <button 
                onClick={() => setTarget('specific')}
                className={cn(
                  "flex items-center justify-center gap-2 py-3 rounded-2xl border transition-all text-sm font-bold",
                  target === 'specific' ? "bg-yellow-500 border-yellow-500 text-[#06080D]" : "bg-white/5 border-white/10 text-gray-400 hover:text-white"
                )}
              >
                <Target size={18} /> Specific ID
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Notification Title</label>
            <input 
              type="text" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-yellow-500/50 outline-none transition-all"
              placeholder="e.g., New Reward Available! 🎁"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Main Message</label>
            <textarea 
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-yellow-500/50 outline-none transition-all resize-none"
              placeholder="Write your broadcast message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-[#06080D] font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/10 transition-all transform active:scale-[0.98]">
            <Send size={20} />
            Send Notification Now
          </button>
        </div>
      </div>

      {/* History & Stats */}
      <div className="space-y-8">
        <div className="bg-[#0A0D14] border border-white/5 p-8 rounded-[32px]">
          <h3 className="text-xl font-bold mb-6">Recent Broadcasts</h3>
          <div className="space-y-6">
            <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="p-3 rounded-xl bg-emerald-400/10 text-emerald-400 h-fit">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Update Version 1.2.0</h4>
                <p className="text-xs text-gray-500 mt-1">Sent to 4,250 users • 2 hours ago</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="p-3 rounded-xl bg-yellow-400/10 text-yellow-400 h-fit">
                <Bell size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">New Social Task Added</h4>
                <p className="text-xs text-gray-500 mt-1">Sent to All Users • 1 day ago</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="p-3 rounded-xl bg-red-400/10 text-red-400 h-fit">
                <AlertTriangle size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Scheduled Maintenance</h4>
                <p className="text-xs text-gray-500 mt-1">Sent to All Users • 3 days ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/5 border border-yellow-500/10 p-8 rounded-[32px]">
          <div className="flex items-center gap-3 text-yellow-500 mb-4">
            <Smartphone size={24} />
            <h3 className="text-lg font-bold">App Presence</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Ensure your Firebase Server Key is correctly configured in settings for push notifications to reach final users.
          </p>
        </div>
      </div>
    </div>
  );
}
