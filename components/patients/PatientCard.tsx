"use client";

import Link from "next/link";
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

import { Badge } from "@/components/ui/badge";

interface Props {
  patient: Patient;
}

export default function PatientCard({ patient }: Props) {
  const highCondition = patient.medicalHistory.find(
    (m) => m.severity === "High"
  );

  const mediumCondition = patient.medicalHistory.find(
    (m) => m.severity === "Medium"
  );

  let borderColor = "border-white/10";

  if (highCondition) {
    borderColor = "border-red-500/40";
  } else if (mediumCondition) {
    borderColor = "border-yellow-400/40";
  } else {
    borderColor = "border-green-400/30";
  }

  return (
    <Link href={`/patients/${patient.id}`}>
      <Card
        className={` border-2 duration-800 ${borderColor} bg-white/5 backdrop-blur-xl transition-all hover:border-white hover:shadow-lg cursor-pointer w-full
        `}
      >
        <CardContent className="p-4 sm:p-5 space-y-4">

          {/* TOP */}
          <div className="flex items-center gap-3 sm:gap-4">

            <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
              <AvatarImage src={patient.avatar} />
              <AvatarFallback>
                {patient.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0">
              <p className="font-medium text-sm sm:text-base truncate">
                {patient.name}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 truncate">
                {patient.contact.email}
              </p>
            </div>
          </div>

          {/* DETAILS */}
          <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-400">
            <p>Age: {patient.age}</p>
            <p>{patient.gender}</p>
            <p>Blood: {patient.bloodGroup}</p>
            <p className="truncate">
              Last: {new Date(patient.lastVisit).toLocaleDateString()}
            </p>
          </div>

          {/* STATUS */}
          <div className="flex items-center justify-between">

            <Badge
              className={`
    ${highCondition
                  ? "bg-red-500/20 text-red-400 border-red-500/30"
                  : mediumCondition
                    ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                    : "bg-green-500/20 text-green-400 border-green-500/30"
                }
    border
  `}
            >
              {highCondition
                ? "High Risk"
                : mediumCondition
                  ? "Medium"
                  : "Stable"}
            </Badge>

            <span className="text-xs text-slate-500">
              ID: {patient.id}
            </span>

          </div>

        </CardContent>
      </Card>
    </Link>
  );
}