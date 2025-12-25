import Path from "../path";
import ProductView from "./productView";
import ProductInfo from "./ProductInfo";
import Image from "next/image";

import WaterMark from "../../../public/Images/water_mark.svg"

const Product = () => {
    return (
        <div className="relative w-full overflow-x-hidden">
            <Path />
            <div className="mx-2 sm:mx-5 lg:mx-20 py-3 text-sm px-2 sm:px-5 breadcrumbs bg-base-200 rounded-2xl my-5
                flex gap-2 items-center font-medium">
                <div className="absolute bottom-5 left-35 max-md:-bottom-2 max-md:left-10">
                    <Image src={WaterMark} alt="Watermark" className="" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 md:gap-5 my-4 md:my-6 lg:my-10 max-w-7xl w-full">
                    <ProductView />
                    <ProductInfo />
                </div>
            </div>
        </div>
    )
}

export default Product;