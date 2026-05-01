"use client";

import { useAppSelector } from "@/hooks/useAppSelector";
import { selectPatientGrowth } from "@/features/patients/analytics.selectors";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function GrowthChart() {
  const data = useAppSelector(selectPatientGrowth);

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
      
      {/* Header */}
      <CardHeader>
        <CardTitle className="text-lg">
          Patient Growth (Monthly)
        </CardTitle>
      </CardHeader>

      {/* Chart */}
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
              fontSize={12}
            />

            <YAxis stroke="#94a3b8" fontSize={12} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="count"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 3 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}