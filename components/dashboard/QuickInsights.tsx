"use client";

import { useAppSelector } from "@/hooks/useAppSelector";
import { selectTopConditions } from "@/features/patients/analytics.selectors";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TrendingUp } from "lucide-react";

export default function QuickInsights() {
  const conditions = useAppSelector(selectTopConditions);

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
      
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg flex items-center gap-2">
          <TrendingUp className="text-blue-400" size={18} />
          Top Conditions
        </CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-4">
        {conditions.map((c, index) => (
          <div
            key={c.condition}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-slate-300">
              {index + 1}. {c.condition}
            </span>

            <span className="text-blue-400 font-medium">
              {c.count}
            </span>
          </div>
        ))}

        {/* Empty State */}
        {!conditions.length && (
          <p className="text-sm text-slate-500">
            No data available
          </p>
        )}
      </CardContent>
    </Card>
  );
}