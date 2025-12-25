"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Path = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter(Boolean);
    return (
        <div className='mx-5 lg:mx-20 py-3 text-sm px-5 breadcrumbs bg-base-200 rounded-2xl my-5 bg-[#ECECEC]
        flex gap-2 items-center font-medium max-md:mx-5'>
            <Link href="/" className="hover:underline px-2 py-1 rounded-md">Home</Link>
            <span className="text-gray-600">{'>'}</span>
            <Link href="/our-category" className="hover:underline px-2 py-1 rounded-md">Our Category</Link>
            <span className="text-gray-600">{'>'}</span>
            <Link href="/product-details" className="hover:underline px-2 py-1 rounded-md">Product Details</Link>
        </div>
    )
}

export default Path;