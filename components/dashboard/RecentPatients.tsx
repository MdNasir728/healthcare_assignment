"use client";

import { useAppSelector } from "@/hooks/useAppSelector";
import { selectRecentPatients } from "@/features/patients/analytics.selectors";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

import { Separator } from "@/components/ui/separator";

import { Clock } from "lucide-react";

export default function RecentPatients() {
  const patients = useAppSelector(selectRecentPatients);

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
      
      {/* Header */}
      <CardHeader className="flex flex-row items-center gap-2">
        <Clock className="text-blue-400" size={18} />
        <CardTitle className="text-lg">
          Recent Patients
        </CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-4">
        {patients.length === 0 && (
          <p className="text-sm text-slate-400">
            No recent activity
          </p>
        )}

        {patients.map((p, index) => (
          <div key={p.id}>
            
            <div className="flex items-center justify-between">
              
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
                    {p.contact.email}
                  </p>
                </div>
              </div>

              {/* Right */}
              <span className="text-xs text-slate-500">
                {new Date(p.createdAt).toLocaleDateString()}
              </span>
            </div>

            {/* Separator (except last item) */}
            {index !== patients.length - 1 && (
              <Separator className="mt-4 bg-white/10" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}