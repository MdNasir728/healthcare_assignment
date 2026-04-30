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

export const { setSearch, setGenderFilter, setBloodGroupFilter, toggleView } =
    patientSlice.actions;

export default patientSlice.reducer;