"use client";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { toggleView } from "@/features/patients/patientSlice";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

import { LayoutGrid, List, Plus } from "lucide-react";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function PatientHeader() {
  const dispatch = useAppDispatch();

  const { view } = useAppSelector((state) => state.patients);
  const patients = useAppSelector((state) => state.patients.patients);

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      
      {/* LEFT: Result Info */}
      <div className="flex items-center gap-3">
        
        <Badge variant="secondary" className="px-3 py-1">
          Patient counts : {patients.length}
        </Badge>

        <p className="text-sm text-slate-400 hidden sm:block">
          Manage and monitor patient records
        </p>
      </div>

      {/* RIGHT: Controls */}
      <div className="flex items-center gap-3">
        
        {/* View Toggle */}
        <div className="flex items-center gap-2 border border-white/10 bg-transparent px-3 py-1.5 rounded-lg">
          
          <LayoutGrid
            size={18}
            className={view === "grid" ? "text-blue-400" : "text-slate-500"}
          />

          <Switch
className='bg-red-500'            checked={view === "list"}
            onCheckedChange={() => dispatch(toggleView())}
          />

          <List
            size={18}
            className={view === "list" ? "text-blue-400" : "text-slate-500"}
          />
        </div>

        {/* Add Patient (future ready) */}
        <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
          <Plus size={16} />
          Add Patient
        </Button>

      </div>
    </div>
  );
}