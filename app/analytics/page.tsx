"use client";

import AuthGuard from "@/components/common/AuthGuard";
import { KPI } from "@/components/common/KPI";
import SectionCard from "@/components/common/SectionCard";
import {
    selectGenderStats,
    selectBloodGroupStats,
    selectSeverityStats,
    selectPatientGrowth,
    selectKPIStats,
} from "@/features/patients/analytics.selectors"; import { useAppSelector } from "@/hooks/useAppSelector";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    LineChart,
    Line,
} from "recharts";


const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"];


export default function AnalyticsPage() {
    const genderData = useAppSelector(selectGenderStats)
    const bloodData = useAppSelector(selectBloodGroupStats)
    const severityData = useAppSelector(selectSeverityStats)
    const growthData = useAppSelector(selectPatientGrowth)
    const kpiData = useAppSelector(selectKPIStats)

    return (
        <AuthGuard>
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6 space-y-8">

                <h1 className="text-2xl font-semibold">Analytics</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <KPI label="Total Patients" value={kpiData.totalPatients} />
                        <KPI label="High Risk" value={kpiData.highRiskPatients} />
                        <KPI label="Avg Age" value={kpiData.avgAge} />
                        <KPI label="Active Appointments" value={kpiData.activeAppointments} />
                    </div>

                    {/* Gender Pie */}
                    <SectionCard title="Gender Distribution">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie data={genderData} dataKey="value" outerRadius={100}>
                                    {genderData.map((_, index) => (
                                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </SectionCard>

                    {/* Blood Group */}
                    <SectionCard title="Blood Group Distribution">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={bloodData}>
                                <XAxis dataKey="name" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" />
                                <Tooltip />
                                <Bar dataKey="value" fill="#3b82f6" />
                            </BarChart>
                        </ResponsiveContainer>
                    </SectionCard>

                    {/* Severity */}
                    <SectionCard title="Disease Severity Breakdown">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie data={severityData} dataKey="value" outerRadius={100}>
                                    {severityData.map((_, index) => (
                                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </SectionCard>

                    {/* Growth */}
                    <SectionCard title="Patient Growth">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={growthData}>
                                <XAxis dataKey="month" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" />
                                <Tooltip />
                                <Line type="monotone" dataKey="count" stroke="#22c55e" />
                            </LineChart>
                        </ResponsiveContainer>
                    </SectionCard>

                </div>
            </div>
        </AuthGuard>
    );
}
