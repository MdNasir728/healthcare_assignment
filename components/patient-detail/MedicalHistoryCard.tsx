"use client";

import { Patient } from "@/types/patient.types";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

interface Props {
  patient: Patient;
}

export default function MedicalHistoryCard({ patient }: Props) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
      
      {/* Header */}
      <CardHeader>
        <CardTitle>Medical History</CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-4">
        
        {/* Empty State */}
        {patient.medicalHistory.length === 0 && (
          <p className="text-sm text-slate-400">
            No medical history available
          </p>
        )}

        {/* Records */}
        {patient.medicalHistory.map((record) => {
          
          let badgeVariant: "default" | "secondary" | "destructive" | "outline" = "outline";

          if (record.severity === "High") {
            badgeVariant = "destructive";
          } else if (record.severity === "Medium") {
            badgeVariant = "secondary";
          }

          return (
            <div
              key={record.id}
              className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition"
            >
              
              {/* Top Row */}
              <div className="flex items-center justify-between">
                
                <h3 className="font-medium">
                  {record.condition}
                </h3>

                <Badge variant={badgeVariant}>
                  {record.severity}
                </Badge>
              </div>

              {/* Date */}
              <p className="text-xs text-slate-500 mt-1">
                Diagnosed:{" "}
                {new Date(record.diagnosisDate).toLocaleDateString()}
              </p>

              {/* Notes */}
              <p className="text-sm text-slate-400 mt-2">
                {record.notes}
              </p>

            </div>
          );
        })}

      </CardContent>
    </Card>
  );
}