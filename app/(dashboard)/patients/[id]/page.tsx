"use client";

import { useParams } from "next/navigation";
import { useAppSelector } from "@/hooks/useAppSelector";

import PatientProfileCard from "@/components/patient-detail/PatientProfileCard";
import PatientVitalsCard from "@/components/patient-detail/PatientVitalsCard";
import MedicalHistoryCard from "@/components/patient-detail/MedicalHistoryCard";
import PrescriptionsCard from "@/components/patient-detail/PrescriptionsCard";
import AppointmentsCard from "@/components/patient-detail/AppointmentsCard";

export default function PatientDetailPage() {
  const { id } = useParams();

  const patient = useAppSelector((state) =>
    state.patients.patients.find((p) => p.id === id)
  );

  if (!patient) {
    return <div className="text-white p-6">Patient not found</div>;
  }

  return (
    <div className="space-y-6">
      
      <PatientProfileCard patient={patient} />

      <PatientVitalsCard patient={patient} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MedicalHistoryCard patient={patient} />
        <PrescriptionsCard patient={patient} />
      </div>

      <AppointmentsCard patient={patient} />

    </div>
  );
}