import { HomeOutlined, PlaceOutlined, Search, SettingsOutlined, ShoppingCartOutlined, TableRows } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../Context/productContext';

function MobileNav() {
  const { cart } = useContext(ProductContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const [open, setOpen] = useState(false)

  return (
    <div className=' relative flex justify-between items-center h-[70px]'>
      <div className=' flex gap-6'>
        <div className=' text-green-900' onClick={() => setOpen(!open)}>
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

      {open && <div className=' bg-white h-[100vh] absolute top-[9px] z-20 right-[80px] w-[80%]'>
        <div className=' flex justify-between px-[10%] py-[10%] items-center'>
          .
          <div onClick={() => setOpen(!open)}>
            <img src="./cancel.png" alt="" />
          </div>
        </div>

        <div className=' flex flex-col  w-full gap-5'>
          <div className=' border-b-2 border-green-700'>
            <Link to={'/'}>
              <div className=' flex px-[8%] justify-between border-b-2'>
                <p className=' font-semibold text-[20px]'> Home</p>
                <div className=' text-green-900'>
                  <HomeOutlined />
                </div>
              </div>
            </Link>
          </div>

          <div className=' border-b-2 border-green-700'>
            <div className=' px-[8%] flex justify-between'>
              <p className=' font-semibold text-[20px]'>Settings</p>
              <div className=' text-green-900'>
                <SettingsOutlined />
              </div>
            </div>

          </div>

          <div className=' border-b-2 border-green-700'>
            <div className=' px-[8%] flex justify-between'>
              <p className=' font-semibold text-[20px]'>Loaction</p>
              <div className=' text-green-900'><PlaceOutlined /></div>
            </div>

          </div>
        </div>

      </div>}
    </div>
  )
}

export default MobileNav
