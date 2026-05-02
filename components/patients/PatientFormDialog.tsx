"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Patient } from "@/types/patient.types";
import PatientForm from "./PatientForm";


interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  patient?: Patient;
}

export default function PatientFormDialog({
  open,
  onOpenChange,
  mode,
  patient,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      
      <DialogContent className="sm:max-w-lg bg-slate-900 border border-white/10 max-h-[90vh] overflow-y-scroll">
        
        {/* Header */}
        <DialogHeader>
          <DialogTitle className="text-lg">
            {mode === "create" ? "Add Patient" : "Edit Patient"}
          </DialogTitle>
        </DialogHeader>

        {/* Form */}
        <PatientForm
          mode={mode}
          patient={patient}
          onSuccess={() => onOpenChange(false)}
        />

      </DialogContent>
    </Dialog>
  );
}