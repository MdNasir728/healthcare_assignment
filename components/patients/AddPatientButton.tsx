"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import PatientFormDialog from "./PatientFormDialog";


export default function AddPatientButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <Button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
      >
        <Plus size={16} />
        Add Patient
      </Button>

      {/* Dialog */}
      <PatientFormDialog
        open={open}
        onOpenChange={setOpen}
        mode="create"
      />
    </>
  );
}