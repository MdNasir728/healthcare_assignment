"use client";

import { useAppSelector } from "@/hooks/useAppSelector";
import { selectGenderStats } from "@/features/patients/analytics.selectors";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const COLORS = ["#3b82f6", "#ec4899", "#10b981"];


export default function GenderChart() {
  const data = useAppSelector(selectGenderStats);

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
      
      {/* Header */}
      <CardHeader>
        <CardTitle className="text-lg">
          Gender Distribution
        </CardTitle>
      </CardHeader>

      {/* Chart */}
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}