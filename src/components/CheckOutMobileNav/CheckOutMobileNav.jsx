import { ShoppingCart } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

function CheckOutMobileNav() {
  return (
    <div className=' px-[8%] py-[9%] w-full'>
      <div className=' flex flex-col'>
        <div className=' flex justify-between items-center'>
          <h1 className=' font-semibold text-[20px]'>Order Summary</h1>
          <Link to={'/'}>
            <img src="./cancel.png" alt="" />
          </Link>
        </div>
        <div className=' flex gap-3'>
          <p className=' font-semibold text-[16px] text-[#064F26]'>My Cart</p>
          <div className=' text-[#064F26]'>
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOutMobileNav
