import { ShoppingCart } from '@mui/icons-material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../Context/productContext';

function CheckOutMobileNav() {

  const { cart } = useContext(ProductContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className=' px-[8%] py-[9%] w-full relative'>
      <div className=' flex flex-col'>
        <div className=' flex justify-between items-center'>
          <h1 className=' font-semibold text-[20px]'>Order Summary</h1>
          <Link to={'/'}>
            <img src="./cancel.png" alt="" />
          </Link>
        </div>
        <div className=' flex gap-3'>
          <p className=' font-semibold text-[16px] text-[#064F26]'>My Cart</p>
          <div className=' text-[#064F26] flex'>
            <ShoppingCart />
            {cartItemCount > 0 && <div className=' min-w-[18px] min-h-1 rounded-full bg-red-950  '>

            </div>}
          </div>
        </div>
      </div>
      {/* {cartItemCount > 0 && <div className='absolute min-w-3 min-h-3 rounded-md bg-green-800 xl:top-[65px] xl:right-[226px] top-[67px] right-[224px]  md:top-[104px] md:right-[627px] '>

      </div>} */}
    </div>
  )
}

export default CheckOutMobileNav
