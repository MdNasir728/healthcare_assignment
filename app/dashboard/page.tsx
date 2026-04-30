"use client";

import AuthGuard from "@/components/common/AuthGuard";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { logoutThunk } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await dispatch(logoutThunk());
    toast.success("Logged out successfully");
    router.push("/login");
  };

  return (
    <AuthGuard>
      <div className="min-h-screen flex bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        
        {/* Sidebar */}
        <aside className="w-64 hidden md:flex flex-col border-r border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <h2 className="text-xl font-semibold mb-8">Healthcare</h2>

          <nav className="space-y-4 text-sm text-slate-300">
            <p className="hover:text-white cursor-pointer">Dashboard</p>
            <p className="hover:text-white cursor-pointer">Patients</p>
            <p className="hover:text-white cursor-pointer">Analytics</p>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          
          {/* Topbar */}
          <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-xl">
            <h1 className="text-lg font-medium">Dashboard</h1>

            <Button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700"
            >
              Logout
            </Button>
          </header>

          {/* Content */}
          <main className="p-6 space-y-6">
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <p className="text-sm text-slate-400">Total Patients</p>
                <h2 className="text-2xl font-semibold mt-2">1,240</h2>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <p className="text-sm text-slate-400">Appointments</p>
                <h2 className="text-2xl font-semibold mt-2">320</h2>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <p className="text-sm text-slate-400">Reports Generated</p>
                <h2 className="text-2xl font-semibold mt-2">540</h2>
              </div>

            </div>

            {/* Placeholder Section */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <p className="text-slate-400">
                Welcome to your healthcare dashboard. More features coming next →
              </p>
            </div>

          </main>
        </div>
      </div>
    </AuthGuard>
  );
}