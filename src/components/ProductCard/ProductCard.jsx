import React, { useContext } from 'react'
import { ProductContext } from '../../Context/productContext';

function ProductCard({ name, img, price }) {

  const { addToCart } = useContext(ProductContext);

  const handleAddToCart = () => {
    const product = { name, img, price };
    addToCart(product, 1);
    console.log(product)
  };


  return (
    <div className=' '>
      <div className=' flex flex-col justify-center items-center  '>
        <img src={img} alt="" className=' w-full mb-4' />
        <div className=' text-center flex flex-col gap-1 mb-3  text-black'>
          <p className=' font-bold'>{name}</p>
          <p>{price}NGN</p>
        </div>
        <button className=' bg-green-900 w-[80%] h-[35px] xl:h-[53px] text-[13px] xl:text-[17px] rounded-b-xl  text-white' onClick={handleAddToCart}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductCard
