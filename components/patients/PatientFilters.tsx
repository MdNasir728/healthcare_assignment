"use client";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

import {
  setSearch,
  setGenderFilter,
  setBloodGroupFilter,
} from "@/features/patients/patientSlice";

import { Gender, BloodGroup } from "@/types/patient.types";

import FilterDropdown from "@/components/common/FilterDropdown";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function PatientFilters() {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.patients);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      
      {/* 🔍 Search */}
      <div className="relative w-full lg:max-w-sm">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <Input
          placeholder="Search by name or email..."
          value={filters.search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      {/* 🎛 Filters */}
      <div className="flex flex-wrap gap-3">
        
        {/* Gender */}
        <FilterDropdown
          value={filters.gender}
          options={Object.values(Gender).map((g) => ({
            label: g,
            value: g,
          }))}
          placeholder="Gender"
          onChange={(val) => dispatch(setGenderFilter(val))}
        />

        {/* Blood Group */}
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
    </div>
  );
}