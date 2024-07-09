import React, { useContext } from 'react'
import CheckOutNav from '../../components/CheckOutNav/CheckOutNav'
import { ProductContext } from '../../Context/productContext'
import { AddCircleOutline, DeleteOutline, DriveFileRenameOutline } from '@mui/icons-material'
import CheckOutMobileNav from '../../components/CheckOutMobileNav/CheckOutMobileNav'
import { Link } from 'react-router-dom'
import './checkout.css'

function CheckOut() {

  const { cart, removeFromCart, getTotalAmount } = useContext(ProductContext)

  return (
    <div className=' h-[100vh] '>
      <div className=''>

        <div className='hidden xl:block'>
          <CheckOutNav />
        </div>
        <div className=' flex xl:hidden'>
          <CheckOutMobileNav />
        </div>
        <div className='py-[4%] px-[8%] xl:px-[20%] flex flex-col gap-4 ' >
          {cart.map((item, i) => {
            return (
              <div className=''>
                <div className=' bg-[#B2FBD2] xl:h-[100px] h-[80px] flex justify-between items-center px-4 '>
                  <div>
                    <p className=' font-semibold xl:text-[20px]'>{item.name} X {item.quantity}</p>
                    <p className=' xl:font-medium'>uncut</p>
                  </div>
                  <div className=' flex flex-col gap-2 items-end'>
                    <p className=' font-semibold xl:text-[18px] text-green-950'>₦{item.price * item.quantity}</p>
                    <div className=' text-green-950' onClick={() => removeFromCart(item.id)}>
                      <DeleteOutline />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          <div className=' text-right mb-[10%]'>
            <p className=' font-semibold xl:text-[20px]' >Subtotal: NGN {getTotalAmount()}</p>
          </div>


          <div className=' flex justify-between'>
            <div className='' >
              <p className=' font-normal'>Payment Method</p>
              <p className=' font-normal'>Choose Address</p>
            </div>
            <div className=' flex flex-col'>
              <AddCircleOutline />
              <DriveFileRenameOutline />
            </div>
          </div>

          <div>
            <p className=' font-semibold'>Add a note to your order</p>
            <textarea name="" id="" rows={7} cols={60} className='border-2 outline-none border-solid xl:border-black rounded-xl p-4 w-full h-[100px] xl:h-[150px] border-green-800 '></textarea>
          </div>

          <div className=' flex justify-between mb-8 xl:mb-3'>
            <div>
              <p className=' font-normal text-[#064F26]'>Subtotal</p>
              <p className=' font-normal text-[#064F26]'>Delivery Fee</p>
              <p className=' font-normal text-[#064F26]'>Grand Total</p>
            </div>
            <div>
              <p>NGN {getTotalAmount()}</p>
              <p>NGN 0</p>
              <p className=' font-bold text-[#064F26]'>NGN {getTotalAmount()}</p>
            </div>
          </div>
          <div className=' flex justify-center bg'>
            <p className='w-[200px] h-[50px] bg-[
#B2FBD2] border-[3px] border-solid border-green-950 text-center rounded-br-xl rounded-bl-xl flex justify-center items-center font-semibold  bg-[#B2FBD2]'>Place Order</p>
          </div>
          <Link to={'/'}>
            <div className=' flex justify-center bg'>
              <p className='w-[200px] h-[50px] bg-[
#B2FBD2] border-[3px] border-solid border-green-950 text-center rounded-br-xl rounded-bl-xl flex justify-center items-center font-semibold  bg-[#B2FBD2]'>Continue Shopping</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
