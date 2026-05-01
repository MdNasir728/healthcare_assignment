"use client";

import { createContext, useState } from "react";

interface SidebarContextType {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export const SidebarContext =
  createContext<SidebarContextType | null>(null);


export function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}