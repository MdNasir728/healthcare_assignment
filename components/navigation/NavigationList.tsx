"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/config/navigation.config";
import { cn } from "@/lib/utils";


interface NavigationListProps {
  onItemClick?: () => void; // for mobile close
}

export default function NavigationList({
  onItemClick,
}: NavigationListProps) {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition",
              isActive
                ? "bg-blue-600 text-white shadow"
                : "text-slate-400 hover:bg-white/10 hover:text-white"
            )}
          >
            <Icon size={18} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}