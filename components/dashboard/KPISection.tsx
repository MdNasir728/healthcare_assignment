"use client";

import { useAppSelector } from "@/hooks/useAppSelector";
import { selectKPIStats } from "@/features/patients/analytics.selectors";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Users, AlertTriangle, Calendar, Activity } from "lucide-react";

export default function KPISection() {
  const kpis = useAppSelector(selectKPIStats);

  const items = [
    {
      label: "Total Patients",
      value: kpis.totalPatients,
      icon: Users,
    },
    {
      label: "High Risk Patients",
      value: kpis.highRiskPatients,
      icon: AlertTriangle,
    },
    {
      label: "Active Appointments",
      value: kpis.activeAppointments,
      icon: Calendar,
    },
    {
      label: "Average Age",
      value: kpis.avgAge,
      icon: Activity,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.label}
            className="bg-white/5 border-white/10 backdrop-blur-xl hover:border-blue-500/40 transition"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-slate-400">
                {item.label}
              </CardTitle>

              <div className="p-2 rounded-lg bg-blue-600/20">
                <Icon className="text-blue-400" size={18} />
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-2xl font-semibold">
                {item.value}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}