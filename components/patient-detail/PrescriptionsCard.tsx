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


export default function PrescriptionsCard({ patient }: Props) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
      
      {/* Header */}
      <CardHeader>
        <CardTitle>Prescriptions</CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-4">
        
        {/* Empty State */}
        {patient.prescriptions.length === 0 && (
          <p className="text-sm text-slate-400">
            No prescriptions available
          </p>
        )}

        {/* List */}
        {patient.prescriptions.map((p) => (
          <div
            key={p.id}
            className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition"
          >
            
            {/* Top Row */}
            <div className="flex items-center justify-between">
              
              <h3 className="font-medium">
                {p.medication}
              </h3>

              <Badge variant="outline">
                {p.dosage}
              </Badge>
            </div>

            {/* Details */}
            <div className="mt-2 text-sm text-slate-400 space-y-1">
              <p>Frequency: {p.frequency}</p>

              <p>
                Duration:{" "}
                {new Date(p.startDate).toLocaleDateString()}
                {" → "}
                {p.endDate
                  ? new Date(p.endDate).toLocaleDateString()
                  : "Ongoing"}
              </p>
            </div>

          </div>
        ))}

      </CardContent>
    </Card>
  );
}