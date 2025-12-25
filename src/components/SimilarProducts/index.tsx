"use client";

import { useRef, useState, useEffect } from "react";
import { SIMILAR_PRODUCTS } from "@/constants/product-options";
import SectionTitle from "../sectionTitle";
import SimilarProductsCard from "./card";

const SimilarProducts = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollability = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        checkScrollability();
        window.addEventListener('resize', checkScrollability);
        return () => window.removeEventListener('resize', checkScrollability);
    }, []);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.querySelector('.product-card')?.clientWidth || 0;
            const gap = 24; // gap-6 = 1.5rem = 24px
            scrollContainerRef.current.scrollBy({
                left: -(cardWidth + gap),
                behavior: 'smooth'
            });
            setTimeout(checkScrollability, 300); // Check after scroll animation
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.querySelector('.product-card')?.clientWidth || 0;
            const gap = 24; // gap-6 = 1.5rem = 24px
            scrollContainerRef.current.scrollBy({
                left: cardWidth + gap,
                behavior: 'smooth'
            });
            setTimeout(checkScrollability, 300); // Check after scroll animation
        }
    };

    return (
        <section className="flex flex-col items-start justify-start my-4 md:my-6 lg:my-10 w-full px-5 sm:px-6 md:px-10 lg:px-25">
            <SectionTitle title="Similar Products" />
            <div className="w-full mt-4 md:mt-6 lg:mt-8 relative">
                <div
                    ref={scrollContainerRef}
                    onScroll={checkScrollability}
                    className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {SIMILAR_PRODUCTS.map((product, index) => (
                        <div
                            key={`${product.id}-${index}`}
                            className="product-card shrink-0 w-[280px] sm:w-[300px] md:w-[320px]"
                        >
                            <SimilarProductsCard {...product} />
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-3 mt-4 md:mt-6">
                    <button
                        type="button"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                        className={`h-12 w-12 rounded-full flex items-center justify-center transition-all ${canScrollLeft
                                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                        aria-label="Previous products"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 3.5L5 8l4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                        className={`h-12 w-12 rounded-full flex items-center justify-center transition-all ${canScrollRight
                                ? 'bg-[#BE968E] text-white hover:bg-[#a9787f]'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                        aria-label="Next products"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 3.5L11 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SimilarProducts;