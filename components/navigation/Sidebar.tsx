"use client";

import NavigationList from "./NavigationList";


export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-white/10 bg-slate-900/80 backdrop-blur-xl p-6">
      
      {/* Logo / Brand */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow">
          H
        </div>
        <span className="text-lg font-semibold tracking-wide">
          HealthPro
        </span>
      </div>

      {/* Navigation */}
      <NavigationList />

      {/* Bottom Section (optional future use) */}
      <div className="mt-auto pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} HealthPro
      </div>
    </aside>
  );
}