"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface Option<T> {
    label: string;
    value: T;
}

interface FilterDropdownProps<T> {
    value?: T;
    options: Option<T>[];
    placeholder?: string;
    onChange: (value: T | undefined) => void;
    allowAll?: boolean;
    className?: string;
}

export default function FilterDropdown<T extends string>({
    value,
    options,
    placeholder = "Select",
    onChange,
    allowAll = true,
    className,
}: FilterDropdownProps<T>) {
    return (
        <Select
            value={value ?? ""}
            onValueChange={(val) =>
                onChange(val === "ALL" ? undefined : (val as T))
            }
        >
            <SelectTrigger
                className={`bg-white/5 border-white/10 text-white ${className}`}
            >
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent className="bg-slate-900 border-white/10 text-white">
                {allowAll && (
                    <SelectItem value="ALL" className="cursor-pointer">
                        All
                    </SelectItem>
                )}

                {options.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}