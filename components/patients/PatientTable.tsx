"use client";

import { Patient } from "@/types/patient.types";

import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";

import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import EmptyState from "./EmptyState";
import Link from "next/link";

interface Props {
    patients: Patient[];
}

export default function PatientTable({ patients }: Props) {
    if (!patients.length) {
        return <EmptyState message="No patients found" />;
    }

    return (
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="w-full overflow-x-auto">

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Patient</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead>Age</TableHead>
                            <TableHead>Gender</TableHead>
                            <TableHead>Blood</TableHead>
                            <TableHead>Last Visit</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {patients.map((p) => {
                            const isHighRisk = p.medicalHistory.some(
                                (m) => m.severity === "High"
                            );

                            return (
                                <TableRow key={p.id}
                                className="hover:bg-white/5 transition"
                                >
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={p.avatar} />
                                                <AvatarFallback>
                                                    {p.name.slice(0, 2)}
                                                </AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <Link
                                                    href={`/patients/${p.id}`}
                                                    className="font-medium text-sm hover:text-blue-400 transition"
                                                >
                                                    {p.name}
                                                </Link>
                                                {/* <p className="text-xs text-slate-400">
                                                    ID: {p.id}
                                                </p> */}
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell className="text-sm text-slate-400">
                                        {p.contact.email}
                                    </TableCell>

                                    <TableCell>{p.age}</TableCell>
                                    <TableCell>{p.gender}</TableCell>
                                    <TableCell>{p.bloodGroup}</TableCell>

                                    <TableCell>
                                        {new Date(p.lastVisit).toLocaleDateString()}
                                    </TableCell>

                                    <TableCell>
                                        <Badge variant={isHighRisk ? "destructive" : "secondary"}>
                                            {isHighRisk ? "High Risk" : "Normal"}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>

            </div>
        </div>
    );
}