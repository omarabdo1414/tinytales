import Product from "@/components/Product"
import PageTitle from "@/components/pageTitle"
import Rating from "@/components/rating"
import Reviews from "@/components/reviews"
import SimilarProducts from "@/components/SimilarProducts"

const ProductDetails = () => {
  return (
    <div className="flex flex-col">
      <PageTitle title="Product Details" />
      <Product />
      <Rating />
      <Reviews />
      <SimilarProducts />
    </div>
  )
}

export default ProductDetails