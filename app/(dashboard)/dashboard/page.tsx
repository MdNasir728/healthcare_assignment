"use client";

import KPISection from "@/components/dashboard/KPISection";
import TodayOverview from "@/components/dashboard/TodayOverview";
import HighRiskPatients from "@/components/dashboard/HighRiskPatients";
import RecentPatients from "@/components/dashboard/RecentPatients";
import QuickInsights from "@/components/dashboard/QuickInsights";

export default function DashboardPage() {
  
  return (
    <div className="space-y-6">
      <KPISection />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TodayOverview />
          <HighRiskPatients />
        </div>
        <div className="space-y-6">
          <RecentPatients />
          <QuickInsights />
        </div>
      </div>
    </div>
  );
}