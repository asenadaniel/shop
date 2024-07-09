import { Search, ShoppingCartOutlined, TableRows } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../Context/productContext';

function MobileNav() {
  const { cart } = useContext(ProductContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className=' relative flex justify-between items-center h-[70px]'>
      <div className=' flex gap-6'>
        <div className=' text-green-900'>
          <TableRows />
        </div>
        <img src="./logo.png" alt="" className=' w-[100px]' />

      </div>
      <div className=' flex items-center gap-6 text-green-900'>
        <Search />
        <Link to={'/checkout'} >
          <ShoppingCartOutlined />
        </Link>
      </div>
      <p className=' bg-green-900 px-3 py-1 text-white rounded-md' >SIGN IN</p>

    </div>
  )
}

export default MobileNav
