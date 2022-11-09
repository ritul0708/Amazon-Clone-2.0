import Header from "../components/Header"
import Image from "next/image"
import { useSelector } from "react-redux"
import { selectItems } from "../slices/cartSlice"
import CheckoutProduct from "../components/CheckoutProduct"
import Currency from "react-currency-formatter"
import { useSession } from "next-auth/react"

const Checkout = () => {
  const session = useSession()

  const items = useSelector(selectItems)

  const getTotalPrice = () => {
    return items.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };


  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">

        {/* Left */}
        <div className="flex-grow m-5 shadow-md">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-50 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your Shopping Cart is empty" : "Shopping Cart"}
            </h1>
            {items.map((item, i) =>(
              <CheckoutProduct 
                key={i}
                // id={item.id}
                // title={item.title}
                // price={item.price}
                // rating={item.rating}
                // description={item.description}
                // category={item.category}
                // image={item.image}
                // hasPrime={item.hasPrime}
                item={item}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-lg">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items)
                <span className="font-bpld">
                  $ {getTotalPrice()}
                </span>
              </h2>
              <button 
                disabled={!session}
                className={`button mt-2 ${!session && 'from-gray-100 to-gray-400 border-gray-200 cursor-not-allowed'}`}
              >
                {!session ? "Sign in to Checkout" : "Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  ) 
}

export default Checkout