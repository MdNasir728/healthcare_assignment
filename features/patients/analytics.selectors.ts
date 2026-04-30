import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

const selectPatients = (state: RootState) => state.patients.patients;


export const selectGenderStats = createSelector(
  [selectPatients],
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
  [selectPatients],
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
  [selectPatients],
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
  [selectPatients],
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


//   KPI Summary
export const selectKPIStats = createSelector(
  [selectPatients],
  (patients) => {
    const totalPatients = patients.length;

    const highRiskPatients = patients.filter((p) =>
      p.medicalHistory.some((m) => m.severity === "High")
    ).length;

    const avgAge =
      patients.reduce((sum, p) => sum + p.age, 0) /
      (patients.length || 1);

    const activeAppointments = patients.reduce((count, p) => {
      return (
        count +
        p.appointments.filter((a) => a.status === "Scheduled").length
      );
    }, 0);

    return {
      totalPatients,
      highRiskPatients,
      avgAge: Math.round(avgAge),
      activeAppointments,
    };
  }
);