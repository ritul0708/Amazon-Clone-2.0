import Image from "next/image"
import { useState } from "react"
import { StarIcon } from "@heroicons/react/outline"
import Currency from "react-currency-formatter";

const Max_Rating = 5
const Min_Rating = 1

const Product = ({ id, title, price, description, category, image }) => {
  const [rating] = useState(
    Math.floor(
      Math.random() * (Max_Rating - Min_Rating + 1)
    ) + Min_Rating
  )

  const [hasPrime] = useState(Math.random < 0.5)
 

  return (
    <div className="relative flex flex-col m-5 z-30 bg-gray-100 p-10">
      <p className="absolute top-3 left-7 text-lg italic text-gray-600">{category}</p>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" /> 
        ))}
      </div>
      <p className="text-xs my-2 line-clamp-3">{description}</p>
      <div className="mb-5">
          <Currency quantity={price} currency="EUR" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 mt-5">
          <img
            loading="lazy"
            className="w-12"
            src="https://links.papareact.com/fdw" 
            alt="" 
          />
          <p className="text-sm text-gray-600">Free Next Day Delivery</p>
        </div>
      )}
      <button className="mt-auto button"> Add to Cart</button>
    </div>
  )
}

export default Product