"use client";

import { Patient } from "@/types/patient.types";
import PatientCard from "./PatientCard";
import EmptyState from "./EmptyState";

interface Props {
  patients: Patient[];
}

export default function PatientGrid({ patients }: Props) {
  if (!patients.length) {
    return <EmptyState message="No patients found" />;
  }

  return (
    <div
      className="
        grid gap-4 sm:gap-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </div>
  );
}