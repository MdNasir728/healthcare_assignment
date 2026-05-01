"use client";

import { Patient } from "@/types/patient.types";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

interface Props {
  patient: Patient;
}


export default function PatientProfileCard({ patient }: Props) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
      <CardContent className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6">
        
        {/* Avatar */}
        <Avatar className="w-16 h-16">
          <AvatarImage src={patient.avatar} />
          <AvatarFallback>
            {patient.name.slice(0, 2)}
          </AvatarFallback>
        </Avatar>

        {/* Info */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold">
            {patient.name}
          </h2>

          <p className="text-sm text-slate-400">
            {patient.contact.email}
          </p>

          <p className="text-sm text-slate-400 mt-1">
            {patient.age} yrs • {patient.gender} • {patient.bloodGroup}
          </p>

          <p className="text-xs text-slate-500 mt-1">
            {patient.contact.city}, {patient.contact.country}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}