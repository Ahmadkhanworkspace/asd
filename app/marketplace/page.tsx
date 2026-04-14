"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { 
  ShoppingBag, 
  Trophy, 
  Plus, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Clock, 
  Flame,
  Star,
  Gift,
  Key,
  TrendingUp,
  Settings,
  ArrowRight,
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';

export default function MarketplacePage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <MarketplaceContent />
    </Suspense>
  );
}

function MarketplaceContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'boosters';
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setActiveTab(searchParams.get('tab') || 'boosters');
  }, [searchParams]);

  return (
    <div className="space-y-12 pb-20">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-8 p-6 bg-white border-2 border-slate-300 rounded-[44px] shadow-[0_60px_120px_-30px_rgba(15,23,42,0.25)] border-t-[10px] border-t-orange-500 w-fit">
        <TabButton label="Item Boosters" id="boosters" active={activeTab === 'boosters'} onClick={() => setActiveTab('boosters')} icon={Flame} />
        <TabButton label="Digital Access" id="access" active={activeTab === 'access'} onClick={() => setActiveTab('access')} icon={Key} />
        <TabButton label="Seasons & XP" id="seasons" active={activeTab === 'seasons'} onClick={() => setActiveTab('seasons')} icon={Trophy} />
        <TabButton label="Reward Packs" id="rewards" active={activeTab === 'rewards'} onClick={() => setActiveTab('rewards')} icon={Gift} />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
         {activeTab === 'boosters' && <BoostersGrid />}
         {activeTab === 'access' && <AccessControl />}
         {activeTab === 'seasons' && <SeasonsManager />}
         {activeTab === 'rewards' && <RewardBundles />}
      </div>
      
      {/* Global Config Modal Placeholder (Self-Contained for now) */}
      <ConfigModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

function TabButton({ label, id, active, onClick, icon: Icon }: any) {
   return (
      <button 
        onClick={onClick}
        className={cn(
          "px-10 py-5 rounded-[24px] text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 flex items-center gap-4",
          active ? "bg-slate-900 text-white shadow-2xl translate-y-[-4px]" : "text-slate-400 hover:text-slate-900 hover:bg-slate-100"
        )}
      >
        <Icon size={18} className={active ? "text-orange-500" : ""} />
        {label}
      </button>
   )
}

function BoostersGrid() {
  const items = [
    { id: 1, name: '2x PTC Turbo', duration: '1 Hour', price: '500', type: 'Earning', activeUsers: 142 },
    { id: 2, name: 'Matrix Speedup', duration: '24 Hours', price: '2500', type: 'Speed', activeUsers: 85 },
    { id: 3, name: 'Xtreme Flux', duration: 'Permanent', price: '5000', type: 'Multiplier', activeUsers: 12 },
  ];

  return (
    <div className="space-y-12">
      <div className="bg-white border-2 border-slate-300 rounded-[64px] p-16 shadow-[0_80px_160px_-40px_rgba(15,23,42,0.25)] relative overflow-hidden border-t-[12px] border-t-orange-500">
         <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50/50 rounded-bl-full translate-x-32 -translate-y-32"></div>
         
         <div className="flex justify-between items-center mb-16 relative z-10">
            <div className="flex items-center gap-8">
               <div className="w-20 h-20 bg-orange-50 rounded-[32px] border-2 border-orange-200 flex items-center justify-center text-orange-500 shadow-xl shadow-orange-500/10 rotate-6"><Flame size={40} /></div>
               <div>
                  <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em] leading-none">Booster Logistics</h3>
                  <p className="text-slate-500 text-xs font-black mt-3 uppercase tracking-[0.3em] opacity-80">Configure value-added earning overrides</p>
               </div>
            </div>
            <button className="flex items-center gap-4 px-12 py-6 bg-slate-900 text-white rounded-[28px] text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl hover:bg-orange-600 transition-all">
               <Plus size={24} /> Deploy New Booster
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
            {items.map(item => (
               <MarketItemCard key={item.id} {...item} />
            ))}
         </div>
      </div>
    </div>
  )
}

function AccessControl() {
   return (
      <div className="bg-white border-2 border-slate-300 rounded-[64px] p-16 shadow-[0_80px_160px_-40px_rgba(15,23,42,0.25)] border-t-[12px] border-t-blue-500">
         <div className="flex items-center gap-8 mb-16">
            <div className="p-6 bg-blue-50 text-blue-500 rounded-[28px] border-2 border-blue-100 shadow-2xl shadow-blue-500/10"><Key size={40} /></div>
            <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em]">Digital Access Hub</h3>
         </div>
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AccessItem title="Premium PDF Payplan" price="Free" downloads="14,202" status="LIVE" />
            <AccessItem title="Vip Discord Access" price="5,000 Coins" downloads="840" status="PAID" />
            <AccessItem title="Marketplace Vendor License" price="50,000 Coins" downloads="12" status="PRO" />
            <AccessItem title="Custom Referral Links" price="2,000 Coins" downloads="5,120" status="PAID" />
         </div>
      </div>
   )
}

function SeasonsManager() {
   return (
      <div className="space-y-12">
         {/* Live Season */}
         <div className="bg-slate-900 border-4 border-slate-800 rounded-[64px] p-20 shadow-[0_100px_200px_-50px_rgba(15,23,42,0.4)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -translate-x-32 -translate-y-32 animate-pulse"></div>
            <div className="relative z-10">
               <div className="flex items-center gap-6 mb-12">
                  <div className="px-8 py-3 bg-orange-500 text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-full shadow-2xl shadow-orange-500/40">Active Phase</div>
                  <div className="text-slate-400 font-black text-xs uppercase tracking-[0.3em]">Season 1: The Awakening</div>
               </div>
               
               <h3 className="text-8xl font-black text-white tracking-tighter mb-12 leading-none">24 DAYS<br/><span className="text-orange-500">REMAINING</span></h3>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                  <SeasonStat label="Global Pool" value="$125,000" />
                  <SeasonStat label="XP Burn Rate" value="1.2x" />
                  <SeasonStat label="Participants" value="14,202" />
               </div>

               <div className="flex gap-8">
                  <button className="px-16 py-6 bg-white text-slate-900 rounded-[32px] text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl hover:bg-orange-500 hover:text-white transition-all">Configure Rewards</button>
                  <button className="px-16 py-6 bg-slate-800 text-slate-400 rounded-[32px] text-[11px] font-black uppercase tracking-[0.3em] hover:text-white transition-all border border-slate-700">Audit Leaderboard</button>
               </div>
            </div>
         </div>

         <div className="bg-white border-2 border-slate-300 rounded-[64px] p-16 shadow-[0_60px_120px_-30px_rgba(15,23,42,0.15)] border-t-[12px] border-t-slate-100">
            <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em] mb-12">Historical Archive</h3>
            <div className="space-y-6">
               <HistorySeason name="Season Beta" winner="ahmad_ws" pool="$5,000" date="Jan 2024" />
               <HistorySeason name="Genesis Phase" winner="crypto_king" pool="$2,500" date="Dec 2023" />
            </div>
         </div>
      </div>
   )
}

function RewardBundles() {
   return (
      <div className="bg-white border-2 border-slate-300 rounded-[64px] p-16 shadow-[0_80px_160px_-40px_rgba(15,23,42,0.25)] border-t-[12px] border-t-emerald-500">
         <div className="flex items-center gap-8 mb-16">
            <div className="p-6 bg-emerald-50 text-emerald-500 rounded-[28px] border-2 border-emerald-100 shadow-2xl shadow-emerald-500/10"><Gift size={40} /></div>
            <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase tracking-[0.2em]">Mega Bundles</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <BundleCard name="Founder Pack" contents="10,000 Coins + Gold Tier + 5 Boosters" price="$99" />
            <BundleCard name="Starter Kit" contents="500 Coins + Silver Tier" price="$25" />
         </div>
      </div>
   )
}

/* UI COMPONENTS */

function MarketItemCard({ name, duration, price, type, activeUsers }: any) {
   return (
      <div className="bg-white border-2 border-slate-300 p-12 rounded-[48px] shadow-[0_45px_90px_-20px_rgba(15,23,42,0.15)] group hover:border-orange-500 transition-all duration-700 hover:shadow-[0_60px_120px_-20px_rgba(249,115,22,0.3)] hover:-translate-y-4 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full translate-x-12 -translate-y-12 transition-transform duration-1000 opacity-60"></div>
         <div className="relative z-10">
            <div className="flex justify-between items-start mb-10">
               <div className="p-5 bg-orange-50 rounded-2xl text-orange-500 border-2 border-orange-100 shadow-xl shadow-orange-500/5 group-hover:rotate-12 transition-transform"><Sparkles size={28} /></div>
               <span className="text-[10px] font-black text-white bg-slate-900 px-4 py-2 rounded-xl shadow-2xl uppercase tracking-[0.2em]">{type}</span>
            </div>
            <h4 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">{name}</h4>
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Duration: <span className="text-slate-900">{duration}</span></p>
            
            <div className="flex items-center justify-between p-6 bg-slate-50 border-2 border-slate-100 rounded-[32px] mb-12 shadow-inner">
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Cost Protocol</p>
                  <p className="text-2xl font-black text-slate-900 leading-none">{price} <span className="text-xs text-slate-400 ml-1">Coins</span></p>
               </div>
               <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Active nodes</p>
                  <p className="text-lg font-black text-emerald-500 leading-none">{activeUsers}</p>
               </div>
            </div>

            <button className="w-full py-6 bg-slate-900 text-white font-black rounded-[24px] text-[11px] uppercase tracking-[0.3em] group-hover:bg-orange-500 transition-all shadow-2xl shadow-slate-900/40">Configure item</button>
         </div>
      </div>
   )
}

function AccessItem({ title, price, downloads, status }: any) {
   return (
      <div className="p-10 bg-slate-50 border-2 border-slate-100 rounded-[44px] flex items-center justify-between group hover:bg-white hover:border-blue-500 transition-all duration-700 shadow-inner hover:shadow-2xl translate-x-0 hover:translate-x-4">
         <div className="flex items-center gap-8">
            <div className="w-20 h-20 rounded-[28px] bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-500 group-hover:border-blue-200 transition-all shadow-xl group-hover:rotate-12"><Globe size={32} /></div>
            <div>
               <h4 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-slate-900">{title}</h4>
               <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2 bg-white px-3 py-1 rounded-lg w-fit border border-slate-200">{price}</p>
            </div>
         </div>
         <div className="text-right flex items-center gap-10">
            <div>
               <p className="text-2xl font-black text-slate-900 leading-none group-hover:text-slate-900">{downloads}</p>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">D-LOADS</p>
            </div>
            <div className={cn(
               "w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-xs shadow-2xl",
               status === 'LIVE' ? "bg-emerald-500 shadow-emerald-500/40" : status === 'PRO' ? "bg-slate-900 shadow-slate-900/40" : "bg-blue-500 shadow-blue-500/40"
            )}>{status}</div>
         </div>
      </div>
   )
}

function SeasonStat({ label, value }: any) {
   return (
      <div className="p-10 bg-white/5 border-2 border-white/10 rounded-[40px] backdrop-blur-3xl">
         <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">{label}</p>
         <p className="text-5xl font-black text-white tracking-tighter leading-none">{value}</p>
      </div>
   )
}

function HistorySeason({ name, winner, pool, date }: any) {
   return (
      <div className="p-8 bg-white border-2 border-slate-200 rounded-[36px] flex items-center justify-between group hover:border-orange-500 transition-all duration-500 shadow-sm">
         <div className="flex items-center gap-8">
            <div className="w-14 h-14 bg-slate-50 border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-orange-50 group-hover:text-orange-500 transition-all"><Settings size={22} /></div>
            <div>
               <h4 className="text-xl font-black text-slate-900 tracking-tight">{name}</h4>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{date} Archive</p>
            </div>
         </div>
         <div className="flex items-center gap-12">
            <div className="text-right">
               <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Champion</p>
               <p className="text-lg font-black text-slate-900 leading-none">@{winner}</p>
            </div>
            <div className="px-6 py-2.5 bg-emerald-50 text-emerald-600 font-black text-[11px] uppercase tracking-[0.3em] rounded-full border-2 border-emerald-100">{pool} PAID</div>
         </div>
      </div>
   )
}

function BundleCard({ name, contents, price }: any) {
   return (
      <div className="bg-slate-50 border-2 border-slate-100 p-12 rounded-[52px] group hover:bg-white hover:border-emerald-500 transition-all duration-700 shadow-inner hover:shadow-[0_60px_100px_-20px_rgba(16,185,129,0.2)]">
         <div className="flex justify-between items-start mb-10">
            <div className="w-20 h-20 bg-white rounded-[28px] border-2 border-slate-200 flex items-center justify-center text-emerald-500 shadow-xl group-hover:rotate-12 transition-transform"><Gift size={36} /></div>
            <div className="text-5xl font-black text-slate-900 tracking-tighter leading-none">{price}</div>
         </div>
         <h4 className="text-3xl font-black text-slate-900 tracking-tighter mb-4">{name}</h4>
         <p className="text-sm font-bold text-slate-500 leading-relaxed group-hover:text-slate-900 transition-colors uppercase tracking-widest">{contents}</p>
         <button className="w-full py-6 mt-12 bg-slate-900 text-white font-black rounded-[24px] text-[11px] uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all shadow-2xl">Deploy Bundle Protocol</button>
      </div>
   )
}

function ConfigModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
   if (!isOpen) return null;
   return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-12 animate-in fade-in duration-300">
         <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl" onClick={onClose}></div>
         <div className="bg-white w-full max-w-4xl border-2 border-slate-300 rounded-[64px] shadow-[0_100px_200px_-50px_rgba(0,0,0,0.5)] relative z-10 overflow-hidden border-t-[20px] border-t-orange-500 p-16">
            <button onClick={onClose} className="absolute top-12 right-12 w-16 h-16 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
               <X size={32} />
            </button>
            <div className="mb-16">
               <h3 className="text-4xl font-black tracking-tighter text-slate-900 uppercase">Configuration Protocol</h3>
               <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-xs mt-4">Adjust system parameters in real-time</p>
            </div>
            
            <div className="space-y-12 mb-16">
               <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-4">
                     <label className="text-[11px] font-black tracking-[0.4em] text-slate-400 uppercase ml-4">Entity Identity</label>
                     <input type="text" className="w-full bg-slate-100 border-2 border-slate-200 rounded-[32px] px-10 py-6 text-lg font-black outline-none focus:border-orange-500 shadow-inner" placeholder="Enter Label..." />
                  </div>
                  <div className="space-y-4">
                     <label className="text-[11px] font-black tracking-[0.4em] text-slate-400 uppercase ml-4">Pricing Oracle</label>
                     <input type="number" className="w-full bg-slate-100 border-2 border-slate-200 rounded-[32px] px-10 py-6 text-lg font-black outline-none focus:border-orange-500 shadow-inner" placeholder="0.00" />
                  </div>
               </div>
               <div className="space-y-4">
                     <label className="text-[11px] font-black tracking-[0.4em] text-slate-400 uppercase ml-4">Operational Status</label>
                     <div className="flex gap-4">
                        <button className="flex-1 py-6 bg-orange-500 text-white rounded-[24px] font-black text-xs uppercase tracking-[0.3em] shadow-2xl">Active Node</button>
                        <button className="flex-1 py-6 bg-slate-100 text-slate-400 rounded-[24px] font-black text-xs uppercase tracking-[0.3em] border-2 border-slate-200">De-commissioned</button>
                     </div>
               </div>
            </div>

            <button className="w-full py-8 bg-slate-900 text-white rounded-[32px] font-black text-[11px] uppercase tracking-[0.5em] shadow-2xl hover:bg-orange-600 transition-all">Synchronize Parameters</button>
         </div>
      </div>
   )
}
