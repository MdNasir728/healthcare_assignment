"use client";

import { useContext } from "react";
import { SidebarContext } from "@/components/providers/SidebarProvider";

export function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "useSidebar must be used inside SidebarProvider"
    );
  }

  return context;
}