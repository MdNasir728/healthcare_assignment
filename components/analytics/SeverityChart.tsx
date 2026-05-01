"use client";

import { useAppSelector } from "@/hooks/useAppSelector";
import { selectSeverityStats } from "@/features/patients/analytics.selectors";

import {
  BarChart,
  Bar,
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

export default function SeverityChart() {
  const data = useAppSelector(selectSeverityStats);

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
      
      {/* Header */}
      <CardHeader>
        <CardTitle className="text-lg">
          Severity Distribution
        </CardTitle>
      </CardHeader>

      {/* Chart */}
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis
              dataKey="name"
              stroke="#94a3b8"
              fontSize={12}
            />

            <YAxis stroke="#94a3b8" fontSize={12} />

            <Tooltip />

            <Bar
              dataKey="value"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}