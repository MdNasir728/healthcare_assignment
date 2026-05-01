"use client";

import { useSidebar } from "@/hooks/useSidebar";
import NavigationList from "./NavigationList";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";


export default function MobileSidebar() {
  const { open, setOpen } = useSidebar();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-72 bg-slate-950 z-50 p-6 transform transition-transform duration-300 ease-in-out border-r border-white/10",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white">
              H
            </div>
            <span className="text-lg font-semibold">HealthPro</span>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-slate-400 hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <NavigationList onItemClick={() => setOpen(false)} />
      </aside>
    </>
  );
}