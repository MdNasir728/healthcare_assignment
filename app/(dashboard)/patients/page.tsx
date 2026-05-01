"use client";

import PatientHeader from "@/components/patients/PatientHeader";
import PatientFilters from "@/components/patients/PatientFilters";
import PatientGrid from "@/components/patients/PatientGrid";
import PatientTable from "@/components/patients/PatientTable";

import { useAppSelector } from "@/hooks/useAppSelector";
import { selectFilteredPatients } from "@/features/patients/patientSlice";


export default function PatientsPage() {
  const patients = useAppSelector(selectFilteredPatients);
  const { view } = useAppSelector((state) => state.patients);

  return (
    <div className="space-y-6">
      <PatientHeader />
      <PatientFilters />
      {view === "grid" ? (
        <PatientGrid patients={patients} />
      ) : (
        <PatientTable patients={patients} />
      )}
    </div>
  );
}