import {
  Patient,
  Gender,
  BloodGroup,
  AppointmentStatus,
  SeverityLevel,
} from "@/types/patient.types";


export const mockPatients: Patient[] = [
  {
    id: "P-001",
    name: "Amit Sharma",
    age: 34,
    gender: Gender.MALE,
    bloodGroup: BloodGroup.B_POS,
    avatar: "https://i.pravatar.cc/150?img=3",

    contact: {
      phone: "9876543210",
      email: "amit.sharma@example.com",
      address: "MG Road",
      city: "Delhi",
      country: "India",
    },

    medicalHistory: [
      {
        id: "M-1",
        condition: "Hypertension",
        diagnosisDate: "2022-05-12",
        severity: SeverityLevel.MEDIUM,
        notes: "Requires regular monitoring",
      },
    ],

    prescriptions: [
      {
        id: "PR-1",
        medication: "Amlodipine",
        dosage: "5mg",
        frequency: "Once daily",
        startDate: "2023-01-01",
      },
    ],

    appointments: [
      {
        id: "A-1",
        date: "2024-03-10",
        doctor: "Dr. Mehta",
        department: "Cardiology",
        status: AppointmentStatus.COMPLETED,
      },
      {
        id: "A-2",
        date: "2024-06-15",
        doctor: "Dr. Mehta",
        department: "Cardiology",
        status: AppointmentStatus.SCHEDULED,
      },
    ],

    vitals: {
      heartRate: 78,
      bloodPressure: "130/85",
      temperature: 98.4,
      oxygenLevel: 97,
    },

    lastVisit: "2024-03-10",
    createdAt: "2022-01-01",
  },

  {
    id: "P-002",
    name: "Priya Verma",
    age: 28,
    gender: Gender.FEMALE,
    bloodGroup: BloodGroup.O_POS,
    avatar: "https://i.pravatar.cc/150?img=5",

    contact: {
      phone: "9123456780",
      email: "priya.verma@example.com",
      address: "Sector 62",
      city: "Noida",
      country: "India",
    },

    medicalHistory: [
      {
        id: "M-2",
        condition: "Diabetes",
        diagnosisDate: "2021-08-20",
        severity: SeverityLevel.HIGH,
        notes: "On insulin therapy",
      },
    ],

    prescriptions: [
      {
        id: "PR-2",
        medication: "Insulin",
        dosage: "10 units",
        frequency: "Twice daily",
        startDate: "2021-09-01",
      },
    ],

    appointments: [
      {
        id: "A-3",
        date: "2024-02-11",
        doctor: "Dr. Singh",
        department: "Endocrinology",
        status: AppointmentStatus.COMPLETED,
      },
    ],

    vitals: {
      heartRate: 82,
      bloodPressure: "120/80",
      temperature: 98.6,
      oxygenLevel: 98,
    },

    lastVisit: "2024-02-11",
    createdAt: "2021-07-10",
  },
];