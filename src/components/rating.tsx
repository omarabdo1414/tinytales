import { PRODUCT } from "@/constants/product-options";
import SectionTitle from "./sectionTitle";
import { FaStar } from "react-icons/fa";
import { PiChatCircleDots } from "react-icons/pi";

const Rating = () => {
  const product = PRODUCT[0] || {
    rating: 4.5,
    no_of_reviews: 3000
  };

  // Ratings
  const starDistribution = [67, 15, 6, 3, 9];
  const stars = [5, 4, 3, 2, 1];
  
  const overallRating = product.rating || 4.5;
  const totalReviews = product.no_of_reviews || 3000;
  
  // Formating
  const formatReviews = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <section className="flex items-center justify-start my-4 md:my-6 lg:my-10 mx-4 sm:mx-6 md:mx-10 lg:mx-25">
      <div className="flex flex-col w-full max-w-6xl">
        <SectionTitle title="Rating & Reviews" />
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-20 mt-6 md:mt-8">
          <div className="flex flex-col items-center justify-start">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl md:text-8xl lg:text-9xl font-medium text-black">
                {overallRating.toFixed(1).replace('.', ',')}
              </span>
              <span className="text-lg md:text-xl text-gray-400">/5</span>
            </div>
          </div>

          {/* Star Rating Breakdown */}
          <div className="flex flex-col gap-2 md:gap-3">
            {stars.map((star, index) => {
              const percentage = starDistribution[index] || 0;
              return (
                <div key={star} className="flex items-center gap-2 md:gap-3">
                  <FaStar className="text-[#BE968E] text-sm md:text-base" />
                  <span className="text-sm md:text-base font-medium text-black min-w-[20px]">
                    {star}
                  </span>
                  <div className="flex-1 h-2 md:h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#BE968E] rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm md:text-base text-gray-600 min-w-[35px] text-right">
                    %{percentage}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-4 md:gap-5">
            <div className="flex flex-col items-start md:items-end">
              <span className="text-sm md:text-base text-gray-500">Total Reviews</span>
              <span className="text-3xl md:text-4xl font-bold text-black">
                {formatReviews(totalReviews)}
              </span>
            </div>
            <button
              type="button"
              className="flex items-center gap-2 bg-[#BE968E] text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl font-medium hover:bg-[#a9787f] transition-colors duration-200"
            >
              <span className="text-sm md:text-base">Add Comment</span>
              <PiChatCircleDots className="text-lg md:text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;