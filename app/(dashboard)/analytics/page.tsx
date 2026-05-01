"use client";

import KPISection from "@/components/dashboard/KPISection";

import GrowthChart from "@/components/analytics/GrowthChart";
import SeverityChart from "@/components/analytics/SeverityChart";
import GenderChart from "@/components/analytics/GenderChart";
import BloodChart from "@/components/analytics/BloodChart";


export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <KPISection />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GrowthChart />
                <SeverityChart />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GenderChart />
                <BloodChart />
            </div>
        </div>
    );
}