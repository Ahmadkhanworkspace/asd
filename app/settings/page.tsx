"use client";

import React from 'react';
import { 
  Shield, 
  Settings, 
  Database, 
  Globe, 
  Key,
  Smartphone,
  CheckCircle2
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      {/* General Settings */}
      <section className="bg-[#0A0D14] border border-white/5 rounded-[32px] p-8 space-y-8">
        <div className="flex items-center gap-4 text-emerald-400">
          <Settings size={28} />
          <h3 className="text-2xl font-bold text-white">Platform Settings</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Platform Name</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-yellow-500/50 outline-none transition-all" defaultValue="EarnX PTC" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Currency Symbol</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-yellow-500/50 outline-none transition-all" defaultValue="USD ($)" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-4">
              <Globe className="text-gray-400" />
              <div>
                <p className="font-bold text-sm">Public Registration</p>
                <p className="text-xs text-gray-500">Allow new users to sign up via mobile app</p>
              </div>
            </div>
            <div className="w-12 h-6 bg-emerald-500 rounded-full relative p-1 cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 opacity-50">
            <div className="flex items-center gap-4">
              <Shield className="text-gray-400" />
              <div>
                <p className="font-bold text-sm">Maintenance Mode</p>
                <p className="text-xs text-gray-500">Temporarily disable app access</p>
              </div>
            </div>
            <div className="w-12 h-6 bg-gray-700 rounded-full relative p-1 cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full absolute left-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Settings */}
      <section className="bg-[#0A0D14] border border-white/5 rounded-[32px] p-8 space-y-8">
        <div className="flex items-center gap-4 text-yellow-500">
          <Key size={28} />
          <h3 className="text-2xl font-bold text-white">API & Integrations</h3>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Database className="text-yellow-500" />
                <span className="font-bold">NOWPayments API</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md uppercase">Connected</span>
            </div>
            <input type="password" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-gray-400 font-mono" value="••••••••••••••••••••••••••••••••" readOnly />
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smartphone className="text-blue-400" />
                <span className="font-bold">Firebase FCM Key</span>
              </div>
              <span className="text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-1 rounded-md uppercase">Pending</span>
            </div>
            <input type="password" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-gray-400 font-mono" placeholder="Enter Server Key..." />
          </div>
        </div>
      </section>

      <div className="flex justify-end gap-4 pb-12">
        <button className="px-8 py-4 text-gray-400 hover:text-white font-bold transition-all">Cancel Changes</button>
        <button className="px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-[#06080D] font-bold rounded-2xl shadow-lg shadow-yellow-500/10 transition-all flex items-center gap-3">
          <CheckCircle2 size={20} />
          Save Global Configuration
        </button>
      </div>
    </div>
  );
}
