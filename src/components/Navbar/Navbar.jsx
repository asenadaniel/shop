import { ArrowDropDown, LocationOn, Search, ShoppingCartOutlined } from '@mui/icons-material'
import React, { useContext } from 'react'
import MobileNav from '../MobileNav/MobileNav'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../Context/productContext';

function Navbar() {
  const { cart } = useContext(ProductContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className=' px-[4%] py-[1%] w-full'>
      <div className=' xl:flex w-full gap-10 justify-between items-center hidden'>
        <img src='./logo.png' alt="logo" className=' md:w-[168px] w-[90px] h-[51px]' />
        <div className=' flex gap-3 border-[2px] items-center px-6 py-3 w-[459px] h-[60px] rounded-[8px] border-solid border-green-900 '>
          <Search />
          <input type="text" placeholder='search products ' className='custom-placeholder outline-none w-full'

          />
        </div>
        <div className=' text-green-900'>
          <LocationOn />
          <ArrowDropDown />

        </div>
        <Link to={'/checkout'} className=' flex'>
          <ShoppingCartOutlined />
          {cartItemCount > 0 && <div className=' min-w-[15px] min-h-4 mr-[20px] right-[87px] top rounded-full bg-red-900  '>

          </div>}
        </Link>
        <div className=' flex gap-[15px]'>
          <p className=' border-[2px] flex border-solid border-green-950 px-8 py-3 rounded-md font-medium'>SIGN IN</p>
          <p className=' border flex border-solid border-green-950 px-8 py-3 rounded-md bg-green-900 text-white '>SIGN UP</p>
        </div>
      </div>
      <div className=' block xl:hidden'>
        <MobileNav />
      </div>
    </div>
  )
}

export default Navbar
