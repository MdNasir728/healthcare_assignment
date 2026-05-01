"use client";

import { useAppSelector } from "@/hooks/useAppSelector";
import { selectTodayAppointments } from "@/features/patients/analytics.selectors";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { CalendarCheck, Clock, CheckCircle } from "lucide-react";


export default function TodayOverview() {
  const data = useAppSelector(selectTodayAppointments);

  const items = [
    {
      label: "Total Today",
      value: data.total,
      icon: CalendarCheck,
      color: "text-blue-400",
      badge: "All",
    },
    {
      label: "Scheduled",
      value: data.scheduled,
      icon: Clock,
      color: "text-yellow-400",
      badge: "Pending",
    },
    {
      label: "Completed",
      value: data.completed,
      icon: CheckCircle,
      color: "text-green-400",
      badge: "Done",
    },
  ];

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
      
      {/* Header */}
      <CardHeader>
        <CardTitle className="text-lg">
          Today’s Overview
        </CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">
                    {item.badge}
                  </Badge>
                  <Icon className={item.color} size={20} />
                </div>

                {/* Value */}
                <p className="text-xl font-semibold">
                  {item.value}
                </p>

                {/* Label */}
                <p className="text-sm text-slate-400">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}