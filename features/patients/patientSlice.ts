import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { Patient, Gender, BloodGroup } from "@/types/patient.types";
import { mockPatients } from "@/services/patient.service";
import { RootState } from "@/store/store";


interface PatientFilters {
  search: string;
  gender?: Gender;
  bloodGroup?: BloodGroup;
}


interface PatientState {
  patients: Patient[];
  filters: PatientFilters;
  view: "grid" | "list";
}


const initialState: PatientState = {
  patients: mockPatients,
  filters: {
    search: "",
  },
  view: "grid",
};

//   Slice
const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.filters.search = action.payload;
    },

    setGenderFilter(state, action: PayloadAction<Gender | undefined>) {
      state.filters.gender = action.payload;
    },

    setBloodGroupFilter(
      state,
      action: PayloadAction<BloodGroup | undefined>
    ) {
      state.filters.bloodGroup = action.payload;
    },

    toggleView(state) {
      state.view = state.view === "grid" ? "list" : "grid";
    },
    addPatient: (state, action) => {
      state.patients.push(action.payload);
    }
  },
});

const selectPatients = (state: RootState) => state.patients.patients;
const selectFilters = (state: RootState) => state.patients.filters;

export const selectFilteredPatients = createSelector(
  [selectPatients, selectFilters],
  (patients, filters) => {
    return patients.filter((patient) => {
      const matchesSearch =
        patient.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        patient.contact.email
          .toLowerCase()
          .includes(filters.search.toLowerCase());

      const matchesGender =
        !filters.gender || patient.gender === filters.gender;

      const matchesBlood =
        !filters.bloodGroup || patient.bloodGroup === filters.bloodGroup;

      return matchesSearch && matchesGender && matchesBlood;
    });
  }
);

export const selectGenderStats = createSelector(
  [(state: RootState) => state.patients.patients],
  (patients) => {
    const map: Record<string, number> = {};

    patients.forEach((p) => {
      map[p.gender] = (map[p.gender] || 0) + 1;
    });

    return Object.entries(map).map(([name, value]) => ({
      name,
      value,
    }));
  }
);

export const selectBloodGroupStats = createSelector(
  [(state: RootState) => state.patients.patients],
  (patients) => {
    const map: Record<string, number> = {};

    patients.forEach((p) => {
      map[p.bloodGroup] = (map[p.bloodGroup] || 0) + 1;
    });

    return Object.entries(map).map(([name, value]) => ({
      name,
      value,
    }));
  }
);

export const selectSeverityStats = createSelector(
  [(state: RootState) => state.patients.patients],
  (patients) => {
    const map: Record<string, number> = {};

    patients.forEach((p) => {
      p.medicalHistory.forEach((m) => {
        map[m.severity] = (map[m.severity] || 0) + 1;
      });
    });

    return Object.entries(map).map(([name, value]) => ({
      name,
      value,
    }));
  }
);

export const selectPatientGrowth = createSelector(
  [(state: RootState) => state.patients.patients],
  (patients) => {
    const map: Record<string, number> = {};

    patients.forEach((p) => {
      const month = p.createdAt.slice(0, 7);
      map[month] = (map[month] || 0) + 1;
    });

    return Object.entries(map).map(([month, count]) => ({
      month,
      count,
    }));
  }
);


export const selectPatientById = (id: string) =>
  createSelector(
    [(state: RootState) => state.patients.patients],
    (patients) => patients.find((p) => p.id === id)
  );

export const { setSearch, setGenderFilter, setBloodGroupFilter, toggleView, addPatient } =
  patientSlice.actions;

export default patientSlice.reducer;