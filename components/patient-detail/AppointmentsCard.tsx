"use client";

import { Patient, AppointmentStatus } from "@/types/patient.types";

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

export default function AppointmentsCard({ patient }: Props) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
      
      {/* Header */}
      <CardHeader>
        <CardTitle>Appointments</CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-4">
        
        {/* Empty State */}
        {patient.appointments.length === 0 && (
          <p className="text-sm text-slate-400">
            No appointments available
          </p>
        )}

        {/* List */}
        {patient.appointments.map((a) => {
          
          let badgeVariant: "default" | "secondary" | "destructive" | "outline" = "outline";

          if (a.status === AppointmentStatus.COMPLETED) {
            badgeVariant = "secondary";
          } else if (a.status === AppointmentStatus.CANCELLED) {
            badgeVariant = "destructive";
          }

          return (
            <div
              key={a.id}
              className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition"
            >
              
              {/* Top Row */}
              <div className="flex items-center justify-between">
                
                <div>
                  <h3 className="font-medium">
                    {a.doctor}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {a.department}
                  </p>
                </div>

                <Badge variant={badgeVariant}>
                  {a.status}
                </Badge>
              </div>

              {/* Date */}
              <p className="text-sm text-slate-400 mt-2">
                {new Date(a.date).toLocaleDateString()}
              </p>

            </div>
          );
        })}

      </CardContent>
    </Card>
  );
}