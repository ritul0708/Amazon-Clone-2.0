import { StarIcon as SolidStarIcon } from "@heroicons/react/solid"
import { StarIcon as OutlineStarIcon } from "@heroicons/react/outline"
import Image from "next/image"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"
import { removeFromCart } from "../slices/cartSlice"
import { incrementQuantity, decrementQuantity } from "../slices/cartSlice"


const CheckoutProduct = ({ item }) => {
  const dispatch = useDispatch()

  // const removeItemFromCart = () => {
  //   dispatch(removeFromCart({id}))
  // }

  // const increaseItem = () => {
  //   dispatch(incrementQuantity(item))
  // }

  // const decreaseItem = () => {
  //   dispatch(decrementQuantity(item))
  // }

  return (
    <div className="grid grid-cols-4 mt-4 space-y-4">
      {/* Left section only image */}
      <Image src={item.image} alt="" width={150} height={150} objectFit='contain' />
      {/* Middle section  */}
      <div className="col-span-2 mx-5">
        <p>{item.title}</p>

        {/* Rating */}
        <div className="flex ">
          <div className="flex">
            {Array(item.rating)
              .fill()
              .map((_, i) => (
                <SolidStarIcon key={i} className="h-5 text-yellow-500" /> 
            ))}
          </div>
          <div className="flex">
            {Array(5-item.rating)
              .fill()
              .map((_, i) => (
                <OutlineStarIcon key={i} className="h-5 text-yellow-500 w-4" /> 
            ))}
          </div>
        </div>



        <p className="my-2 text-xs line-clamp-2">{item.description}</p>
        {/* <Currency quantity={price} currency="EUR" /> */}
        <span>${item.price}</span>
        {item.hasPrime && (
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

      </div>

      {/* Right Section */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end ">
        
        <div>
          <button 
            className="w-10 h-10 text-xl m-6 bg-gray-200"
            onClick={() => dispatch(decrementQuantity(item.id))}
          >-</button>
          <span>{item.quantity}</span>
          <button 
            className="w-10 h-10 text-xl m-6 bg-gray-200"
            onClick={() => dispatch(incrementQuantity(item.id))}
          >+</button>
        </div>

        <button onClick={() => dispatch(removeFromCart(item.id))} className="button mt-auto">
          Remove from Cart
        </button>


        {/* -----------Showing Individual items total price------------ */}
        {/* <p>$ {item.quantity * item.price}</p> */}
      </div>


    </div>
  )
}

export default CheckoutProduct