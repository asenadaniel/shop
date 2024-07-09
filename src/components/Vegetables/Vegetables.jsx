import React, { useContext } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../Context/productContext'

function Vegetables() {
  const { Vegtables } = useContext(ProductContext)

  return (
    <div className=' px-[5%] py-[2%] mb-[100px]'>
      <div>
        <h1 className=' text-[40px] text-center md:text-left font-normal w-full mb-8'>Vegetables</h1>
        <div className=' grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-9 '>
          {Vegtables.map((item, i) => {
            return (
              <div className=' border-[2px] pb-9 border-solid border-green-800 rounded-xl' key={i}>
                <Link to={`/product/${item.id}`}>
                  <ProductCard
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

export default Vegetables
