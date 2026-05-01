"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/hooks/useSidebar";


interface TopbarProps {
  title?: string;
  onLogout?: () => void;
}

export default function Topbar({
  title = "Dashboard",
  onLogout,
}: TopbarProps) {
  const { setOpen } = useSidebar();

  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-white/10 bg-slate-900/80 backdrop-blur-xl">
      
      {/* Left Section */}
      <div className="flex items-center gap-3">
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
          <Menu size={20} />
        </button>

        {/* Page Title */}
        <h1 className="text-lg font-medium tracking-wide">
          {title}
        </h1>
      </div>

      {/* Right Section */}
      {onLogout && (
        <Button
          onClick={onLogout}
          className="bg-red-600 hover:bg-red-700"
        >
          Logout
        </Button>
      )}
    </header>
  );
}