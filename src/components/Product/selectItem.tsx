"use client"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type SelectOption = {
    label: string
    value: string
}

type AppSelectProps = {
    value?: string
    onValueChange?: (value: string) => void

    placeholder: string
    label?: string
    options: SelectOption[]

    triggerClassName?: string
}

export function AppSelect({
    value,
    onValueChange,
    placeholder,
    label,
    options,
    triggerClassName = "w-[180px]",
}: AppSelectProps) {
    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className={triggerClassName}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent>
                <SelectGroup>
                    {label && <SelectLabel>{label}</SelectLabel>}
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
