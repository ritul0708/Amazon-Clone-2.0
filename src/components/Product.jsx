import Image from "next/image"
import { useState } from "react"
import { StarIcon as SolidStarIcon } from "@heroicons/react/solid"
import { StarIcon as OutlineStarIcon } from "@heroicons/react/outline"
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart } from '../slices/cartSlice'

const Max_Rating = 5
const Min_Rating = 1

const Product = ({ id, title, price, description, category, image }) => {

  const dispatch = useDispatch()
  const [rating] = useState(
    Math.floor(
      Math.random() * (Max_Rating - Min_Rating + 1)
    ) + Min_Rating
  )

  const [hasPrime] = useState(Math.random() < 0.5)

  const quantity = 0

  const addItemToCart = () => {
    const product = {
      id, title, price, rating, description, category, image, hasPrime, quantity:quantity + 1
    }
    // sending a product as an action to the redux store...
    dispatch(addToCart(product))
  }
 

  return (
    <div className="relative flex flex-col m-5 z-30 bg-gray-100 p-10">
      <p className="absolute top-3 left-7 text-lg italic text-gray-600">{category}</p>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>

      {/* Rating */}
      <div className="flex ">
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <SolidStarIcon key={i} className="h-5 text-yellow-500" /> 
          ))}
        </div>
        <div className="flex">
          {Array(5-rating)
            .fill()
            .map((_, i) => (
              <OutlineStarIcon key={i} className="h-5 text-yellow-500 w-4" /> 
          ))}
        </div>
      </div>


      <p className="text-xs my-2 line-clamp-3">{description}</p>
      <div className="mb-5">
          <Currency quantity={price} currency="EUR" />
      </div>
      {hasPrime && (
          <div className="flex items-center space-x-2 mt-5">
            <Image 
              src="https://links.papareact.com/fdw"
              alt=""
              width={48}
              height={48}
              objectFit="contain"
            />
            <p className="text-xs text-gray-500">Free Next Day Delivery</p>
          </div>
        )}
      <button 
        className="mt-auto button"
        onClick={addItemToCart}
      > 
        Add to Cart
      </button>
    </div>
  )
}

export default Product