"use client";

import { useAppSelector } from "@/hooks/useAppSelector";
import { selectHighRiskPatients } from "@/features/patients/analytics.selectors";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { AlertTriangle } from "lucide-react";

export default function HighRiskPatients() {
  const patients = useAppSelector(selectHighRiskPatients);

  return (
    <Card className="bg-red-500/5 border-red-500/20 backdrop-blur-xl">
      
      {/* Header */}
      <CardHeader className="flex flex-row items-center gap-2">
        <AlertTriangle className="text-red-400" size={18} />
        <CardTitle className="text-red-400">
          High Risk Patients
        </CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-4">
        {patients.length === 0 && (
          <p className="text-sm text-slate-400">
            No high-risk patients 🎉
          </p>
        )}

        {patients.slice(0, 6).map((p) => {
          const highCondition = p.medicalHistory.find(
            (m) => m.severity === "High"
          );

          return (
            <div
              key={p.id}
              className="flex items-center justify-between p-3 rounded-lg border border-red-500/10 bg-red-500/5 hover:border-red-400/30 transition"
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                
                <Avatar>
                  <AvatarImage src={p.avatar} />
                  <AvatarFallback>
                    {p.name.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="text-sm font-medium">
                    {p.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    {highCondition?.condition}
                  </p>
                </div>
              </div>

              {/* Right */}
              <Badge variant="destructive">
                High
              </Badge>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}