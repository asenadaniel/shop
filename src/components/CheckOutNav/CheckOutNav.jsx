import { CancelOutlined, ShoppingCart } from '@mui/icons-material'
import React, { useContext } from 'react'
import { ProductContext } from '../../Context/productContext';
import { Link } from 'react-router-dom';

function CheckOutNav() {
  const { cart } = useContext(ProductContext);



  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className=' px-[6%] py-[2%] border-b-2 border-green-700 relative' >
      <div className=' flex justify-between items-center'>
        <h1 className=' font-semibold text-[24px]'>Order Summary</h1>
        <div className=' flex gap-7  text-green-900 items-center'>
          <p className=' font-semibold text-[21px]'>My Cart</p>
          <div className=' text-green-900 flex'>
            <ShoppingCart />
            {cartItemCount > 0 && <div className=' min-w-[19px] min-h-[1px] rounded-full bg-red-950  '>

            </div>}
          </div>
          <div>
            <Link to={'/'}>
              <CancelOutlined />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CheckOutNav
