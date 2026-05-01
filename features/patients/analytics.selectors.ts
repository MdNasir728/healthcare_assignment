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

/* =========================
   Today Appointments
========================= */
export const selectTodayAppointments = createSelector(
  [selectPatients],
  (patients) => {
    const today = new Date().toISOString().slice(0, 10);

    let scheduled = 0;
    let completed = 0;

    patients.forEach((p) => {
      p.appointments.forEach((a) => {
        if (a.date.startsWith(today)) {
          if (a.status === "Scheduled") scheduled++;
          if (a.status === "Completed") completed++;
        }
      });
    });

    return {
      scheduled,
      completed,
      total: scheduled + completed,
    };
  }
);

/* =========================
   High Risk Patients
========================= */
export const selectHighRiskPatients = createSelector(
  [selectPatients],
  (patients) => {
    return patients.filter((p) =>
      p.medicalHistory.some((m) => m.severity === "High")
    );
  }
);

/* =========================
   Recent Patients
========================= */
export const selectRecentPatients = createSelector(
  [selectPatients],
  (patients) => {
    return [...patients]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      )
      .slice(0, 5);
  }
);

/* =========================
   Top Conditions
========================= */
export const selectTopConditions = createSelector(
  [selectPatients],
  (patients) => {
    const map: Record<string, number> = {};

    patients.forEach((p) => {
      p.medicalHistory.forEach((m) => {
        map[m.condition] = (map[m.condition] || 0) + 1;
      });
    });

    return Object.entries(map)
      .map(([condition, count]) => ({
        condition,
        count,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }
);