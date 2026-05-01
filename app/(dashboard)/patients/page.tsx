"use client";

import FilterDropdown from "@/components/common/FilterDropdown";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
  selectFilteredPatients,
  setSearch,
  setGenderFilter,
  setBloodGroupFilter,
  toggleView,
} from "@/features/patients/patientSlice";

import { Gender, BloodGroup } from "@/types/patient.types";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";


export default function PatientsPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();


  const patients = useAppSelector(selectFilteredPatients);
  const { filters, view } = useAppSelector((state) => state.patients);

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6 space-y-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-4">

          <h1 className="text-2xl font-semibold">Patients</h1>

          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-400">Grid</span>
            <Switch
              checked={view === "list"}
              onCheckedChange={() => dispatch(toggleView())}
            />
            <span className="text-sm text-slate-400">List</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4">

          {/* Search */}
          <Input
            placeholder="Search by name or email..."
            value={filters.search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="bg-white/5 border-white/10 text-white placeholder:text-slate-400"
          />

          {/* Gender Filter */}
          <FilterDropdown
            value={filters.gender}
            options={Object.values(Gender).map((g) => ({
              label: g,
              value: g,
            }))}
            placeholder="Gender"
            onChange={(val) => dispatch(setGenderFilter(val))}
          />

          {/* Blood Group Filter */}
          <FilterDropdown
            value={filters.bloodGroup}
            options={Object.values(BloodGroup).map((b) => ({
              label: b,
              value: b,
            }))}
            placeholder="Blood Group"
            onChange={(val) => dispatch(setBloodGroupFilter(val))}
          />
        </div>

        {patients.length === 0 && (
          <div className="text-center text-slate-400 py-10">
            No patients found
          </div>
        )}

        {view === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {patients.map((p) => (
              <div
                key={p.id}
                onClick={() => router.push(`/patients/${p.id}`)}

                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-3"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={p.avatar}
                    alt={p.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h2 className="font-medium">{p.name}</h2>
                    <p className="text-sm text-slate-400">{p.contact.email}</p>
                  </div>
                </div>

                <div className="text-sm text-slate-400">
                  Age: {p.age} | {p.gender}
                </div>

                <div className="text-sm text-slate-400">
                  Blood: {p.bloodGroup}
                </div>
              </div>
            ))}
          </div>
        )}


        {view === "list" && (
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Blood Group</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {patients.map((p) => (
                  <TableRow
                    key={p.id}
                    onClick={() => router.push(`/patients/${p.id}`)}

                  >
                    <TableCell>{p.name}</TableCell>
                    <TableCell>{p.contact.email}</TableCell>
                    <TableCell>{p.age}</TableCell>
                    <TableCell>{p.gender}</TableCell>
                    <TableCell>{p.bloodGroup}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
  );
}