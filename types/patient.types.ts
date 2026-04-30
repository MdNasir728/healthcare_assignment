
export enum Gender {
  MALE = "Male",
  FEMALE = "Female",
  OTHER = "Other",
}

export enum BloodGroup {
  A_POS = "A+",
  A_NEG = "A-",
  B_POS = "B+",
  B_NEG = "B-",
  AB_POS = "AB+",
  AB_NEG = "AB-",
  O_POS = "O+",
  O_NEG = "O-",
}

export enum AppointmentStatus {
  SCHEDULED = "Scheduled",
  COMPLETED = "Completed",
  CANCELLED = "Cancelled",
}

export enum SeverityLevel {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

export interface MedicalRecord {
  id: string;
  condition: string;
  diagnosisDate: string;
  severity: SeverityLevel;
  notes: string;
}

export interface Prescription {
  id: string;
  medication: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
}

export interface Appointment {
  id: string;
  date: string;
  doctor: string;
  department: string;
  status: AppointmentStatus;
}

export interface Vitals {
  heartRate: number;
  bloodPressure: string;
  temperature: number;
  oxygenLevel: number;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: Gender;
  bloodGroup: BloodGroup;
  avatar: string;

  contact: ContactInfo;

  medicalHistory: MedicalRecord[];
  prescriptions: Prescription[];
  appointments: Appointment[];

  vitals: Vitals;

  lastVisit: string;
  createdAt: string;
}