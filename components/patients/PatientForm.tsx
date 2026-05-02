"use client"

import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { useAppDispatch } from "@/hooks/useAppDispatch"
import { addPatient } from "@/features/patients/patientSlice"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"

import { Gender, BloodGroup, Patient } from "@/types/patient.types"
import toast from "react-hot-toast"


const schema = z.object({
    name: z.string().min(1, "Name is required"),

    age: z.number().min(1, "Age must be > 0"),

    gender: z.nativeEnum(Gender),
    bloodGroup: z.nativeEnum(BloodGroup),

    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Phone must be 10 digits"),
    city: z.string().min(1, "City is required"),
})

type FormData = z.infer<typeof schema>

interface Props {
    mode: "create" | "edit"
    patient?: Patient
    onSuccess: () => void
}

export default function PatientForm({ mode, patient, onSuccess }: Props) {
    const dispatch = useAppDispatch()

    const form = useForm<FormData>({
        resolver: zodResolver(schema),

        defaultValues: patient
            ? {
                name: patient.name,
                age: patient.age,
                gender: patient.gender,
                bloodGroup: patient.bloodGroup,
                email: patient.contact.email,
                phone: patient.contact.phone,
                city: patient.contact.city,
            }
            : {
                name: "",
                age: 0,
                gender: undefined,
                bloodGroup: undefined,
                email: "",
                phone: "",
                city: "",
            },
    })

    const onSubmit = (data: FormData) => {
        const newPatient: Patient = {
            id: crypto.randomUUID(),
            name: data.name,
            age: data.age,
            gender: data.gender,
            bloodGroup: data.bloodGroup,
            avatar: `https://i.pravatar.cc/150?u=${data.email}`,

            contact: {
                email: data.email,
                phone: data.phone,
                address: "",
                city: data.city,
                country: "India",
            },

            medicalHistory: [],
            prescriptions: [],
            appointments: [],

            vitals: {
                heartRate: 72,
                bloodPressure: "120/80",
                temperature: 98.6,
                oxygenLevel: 98,
            },

            lastVisit: new Date().toISOString(),
            createdAt: new Date().toISOString(),
        }

        dispatch(addPatient(newPatient))

        toast.success("Patient added successfully")
        /* 🔔 Browser Notification */
        if (Notification.permission === "granted") {
            new Notification("Patient Added", {
                body: `${newPatient.name} added successfully`,
            });
        }

        onSuccess()
    }

    return (
        <Card className="bg-slate-900 border-none shadow-none text-white">
            <CardHeader>
                <CardTitle>
                    {mode === "create" ? "Add Patient" : "Edit Patient"}
                </CardTitle>
            </CardHeader>

            <CardContent>
                <form id="patient-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>

                        {/* NAME */}
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Name</FieldLabel>
                                    <Input {...field} placeholder="Enter Name" />
                                    {fieldState.error && (
                                        <FieldError errors={[fieldState.error]} className="text-red-500" />
                                    )}
                                </Field>
                            )}
                        />

                        {/* AGE */}
                        <Controller
                            name="age"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Age</FieldLabel>
                                    <Input
                                        type="number"
                                        value={field.value ?? ""}
                                        onChange={(e) =>
                                            field.onChange(Number(e.target.value))
                                        }
                                    />
                                    {fieldState.error && (
                                        <FieldError errors={[fieldState.error]} className="text-red-500" />
                                    )}
                                </Field>
                            )}
                        />

                        {/* GENDER */}
                        <Controller
                            name="gender"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Gender</FieldLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select gender" />
                                        </SelectTrigger>
                                        <SelectContent
                                            className='bg-slate-600 -ml-2'
                                        >
                                            {Object.values(Gender).map((g) => (
                                                <SelectItem key={g} value={g}>
                                                    {g}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {fieldState.error && (
                                        <FieldError errors={[fieldState.error]} className="text-red-500" />
                                    )}
                                </Field>
                            )}
                        />

                        {/* BLOOD GROUP */}
                        <Controller
                            name="bloodGroup"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Blood Group</FieldLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select blood group" />
                                        </SelectTrigger>
                                        <SelectContent
                                            className='bg-slate-600'
                                        >
                                            {Object.values(BloodGroup).map((b) => (
                                                <SelectItem key={b} value={b}>
                                                    {b}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {fieldState.error && (
                                        <FieldError errors={[fieldState.error]} className="text-red-500" />
                                    )}
                                </Field>
                            )}
                        />

                        {/* EMAIL */}
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input {...field} placeholder="Enter email" />
                                    {fieldState.error && (
                                        <FieldError errors={[fieldState.error]} className="text-red-500" />
                                    )}
                                </Field>
                            )}
                        />

                        {/* PHONE */}
                        <Controller
                            name="phone"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Phone</FieldLabel>
                                    <Input {...field} placeholder="Enter phone number" />
                                    {fieldState.error && (
                                        <FieldError errors={[fieldState.error]} className="text-red-500" />
                                    )}
                                </Field>
                            )}
                        />

                        {/* CITY */}
                        <Controller
                            name="city"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>City</FieldLabel>
                                    <Input {...field} placeholder="Enter City" />
                                    {fieldState.error && (
                                        <FieldError errors={[fieldState.error]} className="text-red-500" />
                                    )}
                                </Field>
                            )}
                        />

                    </FieldGroup>
                </form>
            </CardContent>

            <CardFooter className="flex justify-end gap-2">
                {/* <Button variant="outline" onClick={() => form.reset()}>
                    Reset
                </Button> */}
                <Button
                    type="submit"
                    form="patient-form"
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md"

                >
                    {mode === "create" ? "Add Patient" : "Update"}
                </Button>
            </CardFooter>
        </Card>
    )
}