"use client";

import Sidebar from "@/components/navigation/Sidebar";
import MobileSidebar from "@/components/navigation/MobileSidebar";
import Topbar from "@/components/navigation/Topbar";
import { SidebarProvider } from "@/components/providers/SidebarProvider";

import { useLogout } from "@/hooks/useLogout";
import { usePageTitle } from "@/hooks/usePageTitle";
import AuthGuard from './../../components/common/AuthGuard';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { logout } = useLogout();
  const title = usePageTitle();

  return (
    <SidebarProvider>
      <AuthGuard>
      <div className="min-h-screen flex bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

        {/* Desktop Sidebar */}
        <Sidebar />

        {/* Mobile Sidebar */}
        <MobileSidebar />

        {/* Main Area */}
        <div className="flex-1 flex flex-col w-full">

          {/* Topbar (Dynamic) */}
          <Topbar title={title} onLogout={logout} />

          {/* Page Content */}
          <main className="flex-1 p-3.5 ">
            {children}
          </main>

        </div>
      </div>
      </AuthGuard>
    </SidebarProvider>
  );
}