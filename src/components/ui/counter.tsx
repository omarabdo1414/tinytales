"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"

type CounterProps = {
    number: number
    setNumber: React.Dispatch<React.SetStateAction<number>>

    min?: number
    max?: number
    step?: number

    buttonProps?: ButtonProps
    slidingNumberProps?: React.HTMLAttributes<HTMLSpanElement>
}

export function Counter({
    number,
    setNumber,
    min = -Infinity,
    max = Infinity,
    step = 1,
    buttonProps,
    slidingNumberProps,
}: CounterProps) {
    const increment = () => {
        setNumber((prev) => Math.min(prev + step, max))
    }

    const decrement = () => {
        setNumber((prev) => Math.max(prev - step, min))
    }

    return (
        <div className="flex items-center gap-3">
            <Button
                variant="outline"
                onClick={decrement}
                {...buttonProps}
            >
                −
            </Button>

            <span
                className={cn(
                    "min-w-[2ch] text-center text-base font-medium tabular-nums",
                    slidingNumberProps?.className
                )}
                {...slidingNumberProps}
            >
                {number}
            </span>

            <Button
                variant="outline"
                onClick={increment}
                {...buttonProps}
            >
                +
            </Button>
        </div>
    )
}
