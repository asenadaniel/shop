import React, { useContext } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../Context/productContext'

function Fruit() {
  const { Fruits } = useContext(ProductContext)
  return (
    <div className=' px-[5%] xl:py-[2%] py-[10%] pb-32'>
      <div>
        <h1 className=' xl:text-[40px] text-[30px]  font-normal w-full mb-8'>Fruits</h1>
        <div className=' grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-9 '>
          {Fruits.map((item, i) => {
            return (
              <div className=' border-[2px] pb-9 border-solid border-green-800 rounded-xl' key={i}>
                <Link to={`/product/${item.id}`}>
                  <ProductCard
                    id={item.id}
                    name={item.name}
                    img={item.img}
                    price={item.price}
                  />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Fruit
