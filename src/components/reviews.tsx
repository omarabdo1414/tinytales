import { Reviews as ReviewsData } from "../constants/product-options";
import { FaStar } from "react-icons/fa";

import Image from "next/image";
import WaterMark from "../../public/Images/water_mark.svg"
import { Button } from "./ui/button";

const Reviews = () => {

  return (
    <div className="relative flex items-center justify-start flex-col gap-10 my-4 md:my-6 lg:my-10 max-w-6xl mx-5 sm:mx-6 md:mx-10 lg:mx-25">
      {ReviewsData.map((review, index) => {
        return (
          <div className="flex flex-col w-full" key={index}>
            <div className="flex justify-between items-center mb-4">
              <div className="flex justify-center gap-2 items-center">
                <p className="font-semibold text-xl">{review.name}</p>
                <div className="flex items-center">
                  <FaStar className="text-[#BE968E] text-sm md:text-base" />
                  <FaStar className="text-[#BE968E] text-sm md:text-base" />
                  <FaStar className="text-[#BE968E] text-sm md:text-base" />
                  <FaStar className="text-[#BE968E] text-sm md:text-base" />
                  <FaStar className="text-[#BE968E]/40 text-sm md:text-base" />
                </div>
              </div>
              <span className="text-gray-500 text-sm md:text-base">{review.date}</span>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-6">
              {review.review}
            </p>
      </div>
        )
      } )}
      <div>
        <Button variant="outline" size="lg" className="px-6 text-[#BE968E] bg-[#F5F5F5] hover:bg-gray-100 cursor-pointer hover:text-[#BE968E]">
          View More Reviews
        </Button>
      </div>
      <div className="absolute bottom-5 -z-10 left-0">
        <Image src={WaterMark} alt="Watermark" className="" />
      </div>
    </div>
  )
}

export default Reviews;