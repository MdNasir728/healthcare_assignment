"use client";

import { Patient } from "@/types/patient.types";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Activity, HeartPulse, Thermometer, Wind } from "lucide-react";

interface Props {
  patient: Patient;
}

export default function PatientVitalsCard({ patient }: Props) {
  const vitals = patient.vitals;

  const items = [
    {
      label: "Heart Rate",
      value: `${vitals.heartRate} bpm`,
      icon: HeartPulse,
      color: "text-red-400",
    },
    {
      label: "Blood Pressure",
      value: vitals.bloodPressure,
      icon: Activity,
      color: "text-blue-400",
    },
    {
      label: "Temperature",
      value: `${vitals.temperature}°F`,
      icon: Thermometer,
      color: "text-yellow-400",
    },
    {
      label: "Oxygen Level",
      value: `${vitals.oxygenLevel}%`,
      icon: Wind,
      color: "text-green-400",
    },
  ];

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
      
      {/* Header */}
      <CardHeader>
        <CardTitle>Vitals</CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-slate-400">
                    {item.label}
                  </p>
                  <Icon className={item.color} size={18} />
                </div>

                <p className="text-lg font-semibold">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}