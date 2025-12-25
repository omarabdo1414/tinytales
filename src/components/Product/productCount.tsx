"use client"

import * as React from "react"
import { Counter } from "@/components/ui/counter"
import { PRODUCT } from "@/constants/product-options"

const CounterStylesDemo = () => {
    const [number1, setNumber1] = React.useState(PRODUCT[0].quantity);
    console.log("Quantity Selected:", number1);
    return (
        <div className="flex items-center justify-center gap-8 py-4">
            <div className="flex flex-col max-md:px-10 items-center gap-3 p-2 bg-[#F5F5F5] rounded-lg">
                <Counter number={number1} setNumber={setNumber1} />
            </div>
        </div>
    )
}

export default CounterStylesDemo
