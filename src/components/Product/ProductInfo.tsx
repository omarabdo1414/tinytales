'use client';
import { PiShoppingBagLight, PiHeartLight, PiShoppingBag } from "react-icons/pi";
import {
    CLOTHING_TYPES,
    CLOTHING_SIZES,
} from "@/constants/product-options";

import { AppSelect } from "./selectItem"

import { useState } from "react";
import { COLORS, PRODUCT } from "@/constants/product-options";
import { cn } from "@/lib/utils"

import Counter from "./productCount";
import { Button } from "../ui/button";

const ProductInfo = () => {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    return (
        <div className='flex flex-col text-sm px-5 gap-3'>
            <div className='h-fit px-3 flex justify-between items-center'>
                <p className="py-2 px-3 rounded-2xl font-semibold text-[#BE968E] border border-[#BE968E]">T-Shirt</p>
                <div className='flex gap-5 text-2xl text-gray-600'>
                    <div className="p-2 border border-gray-300 rounded-lg">
                        <PiShoppingBagLight className='cursor-pointer transition' color="#BE968E" />
                    </div>
                    <div className="p-2 border border-gray-300 rounded-lg">
                        <PiHeartLight className='cursor-pointer transition' color="#BE968E" />
                    </div>
                </div>
            </div>
            <div className='text-xl font-medium w-[80%]'>
                {PRODUCT[0].name}
            </div>
            <div>
                <p className="text-lg font-semibold">$300.00 <del className="text-gray-300">$360.00</del></p>
                <p>This price is exclusive of taxes.</p>
            </div>
            <div className='w-[90%] text-lg'>
                {PRODUCT[0].desciption}
            </div>
            <hr />
            <div className=''>
                <AppSelect options={CLOTHING_TYPES} placeholder="Select Type" onValueChange={(value) => {
                    PRODUCT[0].type = value;
                }} />
            </div>
            <div className=''>
                <AppSelect options={CLOTHING_SIZES} placeholder="Select Size" onValueChange={(value) => {
                    PRODUCT[0].size = value;
                }} />
            </div>
            <div className="flex flex-col items-start gap-3">
                <p className="text-xl font-medium">Colors</p>

                <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-4">
                    {COLORS.map((color) => (
                        <button
                            key={color.value}
                            type="button"
                            onClick={() => setSelectedColor(color.value)}
                            className="flex flex-col items-center gap-2"
                        >
                            <div
                                className={cn(
                                    "flex items-center justify-center rounded-full bg-[#F4F7F9] transition border",
                                    "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12",
                                    selectedColor === color.value
                                        ? "border-gray-800"
                                        : "border-transparent hover:border-gray-800"
                                )}
                            >
                                <div
                                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full"
                                    style={{ backgroundColor: color.value }}
                                    suppressHydrationWarning
                                />
                            </div>
                            <span className="text-xs sm:text-sm text-muted-foreground">
                                {color.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
            <div className='w-full my-2 flex justify-between flex-col items-start'>
                <p className="text-xl font-medium">Quantity <span className="text-lg text-[#8A8A8A]">{`($ ${PRODUCT[0].price} for piece)`}</span></p>
                <div className='w-full flex max-md:flex-col md:items-center md:justify-between '>
                    <div className="w-full flex flex-row items-center justify-start gap-6">
                        <Counter />
                        <p className="text-xl font-medium text-black">{PRODUCT[0].price}</p>
                    </div>
                    <Button className="bg-[#BE968E] text-white font-medium hover:bg-[#a9787f] transition" style={{padding:"16px 32px"}}>
                        Add To Cart
                        <PiShoppingBag />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo;