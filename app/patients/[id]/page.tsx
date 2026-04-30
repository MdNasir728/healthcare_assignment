"use client";

import { useParams } from "next/navigation";
import AuthGuard from "@/components/common/AuthGuard";
import { useAppSelector } from "@/hooks/useAppSelector";

import StatCard from "@/components/common/StatCard";
import SectionCard from "@/components/common/SectionCard";


export default function PatientDetailPage() {
    const params = useParams();
    const id = params.id as string;

    const patient = useAppSelector((state) =>
        state.patients.patients.find((p) => p.id === id)
    );


    if (!patient) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
                <p className="text-lg text-slate-400">Patient not found</p>
            </div>
        );
    }

    return (
        <AuthGuard>
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6 space-y-6">


                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                        src={patient.avatar}
                        alt={patient.name}
                        className="w-24 h-24 rounded-full border border-white/10"
                    />

                    <div className="text-center md:text-left">
                        <h1 className="text-2xl font-semibold">{patient.name}</h1>
                        <p className="text-slate-400">{patient.contact.email}</p>
                        <p className="text-sm text-slate-400">
                            {patient.age} yrs • {patient.gender} • {patient.bloodGroup}
                        </p>
                    </div>
                </div>


                <SectionCard title="Contact Information">
                    <p>{patient.contact.phone}</p>
                    <p>
                        {patient.contact.address}, {patient.contact.city},{" "}
                        {patient.contact.country}
                    </p>
                </SectionCard>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <StatCard
                        label="Heart Rate"
                        value={`${patient.vitals.heartRate} bpm`}
                    />
                    <StatCard
                        label="Blood Pressure"
                        value={patient.vitals.bloodPressure}
                    />
                    <StatCard
                        label="Temperature"
                        value={`${patient.vitals.temperature}°F`}
                    />
                    <StatCard
                        label="Oxygen Level"
                        value={`${patient.vitals.oxygenLevel}%`}
                    />
                </div>

                <SectionCard title="Medical History">
                    {patient.medicalHistory.length === 0 ? (
                        <p className="text-slate-400">No records available</p>
                    ) : (
                        patient.medicalHistory.map((m) => (
                            <div
                                key={m.id}
                                className="border-b border-white/10 py-2 last:border-none"
                            >
                                <p className="font-medium">{m.condition}</p>
                                <p className="text-sm text-slate-400">
                                    {m.severity} • {m.diagnosisDate}
                                </p>
                                <p className="text-xs text-slate-500">{m.notes}</p>
                            </div>
                        ))
                    )}
                </SectionCard>


                <SectionCard title="Prescriptions">
                    {patient.prescriptions.length === 0 ? (
                        <p className="text-slate-400">No prescriptions available</p>
                    ) : (
                        patient.prescriptions.map((p) => (
                            <div
                                key={p.id}
                                className="border-b border-white/10 py-2 last:border-none"
                            >
                                <p className="font-medium">{p.medication}</p>
                                <p className="text-sm text-slate-400">
                                    {p.dosage} • {p.frequency}
                                </p>
                                <p className="text-xs text-slate-500">
                                    Start: {p.startDate}
                                    {p.endDate && ` • End: ${p.endDate}`}
                                </p>
                            </div>
                        ))
                    )}
                </SectionCard>
                <SectionCard title="Appointments">
                    {patient.appointments.length === 0 ? (
                        <p className="text-slate-400">No appointments available</p>
                    ) : (
                        patient.appointments.map((a) => (
                            <div
                                key={a.id}
                                className="border-b border-white/10 py-2 last:border-none"
                            >
                                <p className="font-medium">{a.department}</p>
                                <p className="text-sm text-slate-400">
                                    {a.doctor} • {a.date}
                                </p>
                                <p className="text-xs text-slate-500">{a.status}</p>
                            </div>
                        ))
                    )}
                </SectionCard>
            </div>
        </AuthGuard>
    );
}