"use client";

import { usePathname } from "next/navigation";
import { navItems } from "@/config/navigation.config";

export function usePageTitle() {
  const pathname = usePathname();

  // Find matching route
  const current = navItems.find((item) =>
    pathname.startsWith(item.href)
  );

  return current?.title || "Dashboard";
}