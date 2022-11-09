import Product from "./Product"

const ProductFeed  = ({products}) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {/* Basic Testing */}
      {products.slice(0,4).map(({ id, title, price, description, category, image, quantity }) => (
        <Product 
          key={id} 
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
          quantity={quantity}
        />
      ))}
      <img className="md:col-span-full" 
        src="https://links.papareact.com/dyz" 
        alt="" 
      />
      <div className="md:col-span-2">
        {products.slice(4,5).map(({ id, title, price, description, category, image, quantity }) => (
          <Product 
            key={id} 
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            quantity={quantity}
          />
        ))}
      </div>
      {products.slice(6,products.length).map(({ id, title, price, description, category, image, quantity }) => (
        <Product 
          key={id} 
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
          quantity={quantity}
        />
      ))}
    </div>
  )
}

export default ProductFeed
