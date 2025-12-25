"use client";

import { useState } from 'react'
import Image from 'next/image'
import { SimilarProducts } from './config';
import { PiShoppingBagLight, PiHeartLight, PiShoppingBag, PiHeart } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { COLORS } from "@/constants/product-options";

const SimilarProductsCard = ({
    name,
    type,
    basePrice,
    price,
    rating,
    no_of_reviews,
    image,
}: SimilarProducts) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isInCart, setIsInCart] = useState(false);

    const discountPercentage = basePrice > 0 && basePrice > price
        ? Math.round(((basePrice - price) / basePrice) * 100)
        : 0;

    const formatPrice = (amount: number) => {
        return `AED ${amount.toFixed(0)}`;
    };

    const formatReviews = (count: number): string => {
        if (count >= 1000) {
            return (count / 1000).toFixed(1).replace('.0', '') + 'K';
        }
        return count.toString();
    };

    const visibleColors = COLORS.slice(0, 3);
    const remainingColors = COLORS.length - visibleColors.length;
    const imagePath = image.replace('../../public', '');

    return (
        <div className="relative bg-white rounded-lg overflow-hidden group">
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg border border-gray-200">
                {discountPercentage > 0 && (
                    <div className="absolute top-3 left-3 z-10 bg-white px-2 py-1 rounded-md border border-gray-200">
                        <span className="text-xs font-semibold text-[#BE968E]">
                            {discountPercentage}% OFF
                        </span>
                    </div>
                )}

                {/* Action Icons */}
                <div className="absolute top-3 right-3 z-10 flex gap-2">
                    <button
                        type="button"
                        onClick={() => setIsInCart(!isInCart)}
                        className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                    >
                        {isInCart ? (
                            <PiShoppingBag className="text-lg text-[#BE968E]" />
                        ) : (
                            <PiShoppingBagLight className="text-lg text-[#BE968E]" />
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                    >
                        {isWishlisted ? (
                            <PiHeart className="text-lg text-[#BE968E]" />
                        ) : (
                            <PiHeartLight className="text-lg text-[#BE968E]" />
                        )}
                    </button>
                </div>

                {/* Image */}
                <Image
                    src={imagePath}
                    alt={name}
                    fill
                    className="p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    loading="lazy"
                />
            </div>

            <div className="p-3 sm:p-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm text-gray-600">{type}</span>
                    <div className="flex items-center gap-1">
                        <FaStar className="text-[#BE968E] text-xs sm:text-sm" />
                        <span className="text-xs sm:text-sm font-medium text-black">
                            {rating.toFixed(1)} ({formatReviews(no_of_reviews)})
                        </span>
                    </div>
                </div>

                <h3 className="text-sm sm:text-base font-medium text-black line-clamp-2 min-h-10">
                    {name}
                </h3>

                <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg font-semibold text-black">
                            {formatPrice(price)}
                        </span>
                        {basePrice > 0 && basePrice > price && (
                            <span className="text-sm text-gray-400 line-through">
                                {formatPrice(basePrice)}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                        {visibleColors.map((colorOption, index) => (
                            <div
                                key={index}
                                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-gray-200"
                                style={{ backgroundColor: colorOption.value }}
                            />
                        ))}
                        {remainingColors > 0 && (
                            <span className="text-xs sm:text-sm text-gray-600">+{remainingColors}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SimilarProductsCard;