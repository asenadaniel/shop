import { CancelOutlined, ShoppingCart } from '@mui/icons-material'
import React from 'react'

function CheckOutNav() {
  return (
    <div className=' px-[6%] py-[2%] border-b-2 border-green-700' >
      <div className=' flex justify-between items-center'>
        <h1 className=' font-semibold text-[24px]'>Order Summary</h1>
        <div className=' flex gap-7  text-green-900 items-center'>
          <p className=' font-semibold text-[21px]'>My Cart</p>
          <div className=' text-green-900'>
            <ShoppingCart />
          </div>
          <div>
            <CancelOutlined />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOutNav
