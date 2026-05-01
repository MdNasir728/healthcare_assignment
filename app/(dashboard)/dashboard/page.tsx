"use client";


import { useAppSelector } from "@/hooks/useAppSelector";
import { selectKPIStats } from "@/features/patients/analytics.selectors";

import { KPI } from "@/components/common/KPI";

export default function DashboardPage() {


  const kpis = useAppSelector(selectKPIStats);


  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Content */}
        <main className="p-6 space-y-6">

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <KPI label="Total Patients" value={kpis.totalPatients} />
            <KPI label="High Risk" value={kpis.highRiskPatients} />
            <KPI label="Avg Age" value={kpis.avgAge} />
            <KPI label="Active Appointments" value={kpis.activeAppointments} />
          </div>

          {/* Welcome Section */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <p className="text-slate-400">
              Welcome to your healthcare dashboard. Insights are now live 🚀
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}

