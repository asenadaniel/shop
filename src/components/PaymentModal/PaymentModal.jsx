import { Card } from '@mui/material'
import React from 'react'

function PaymentModal({ handleShowModal }) {
  return (
    <div className=' w-full h-full absolute top-[200px] backdrop-filter backdrop-brightness-75 backdrop-blur-md' onClick={handleShowModal}>

      <div className='  h-[60vh] bg-white z-30'>
        <div className=' relative'>
          <div className=' flex justify-center items-center'>
            <h1>Payment Method</h1>
            <img src="./cancel.png" alt="" />
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <input type="text" />
            <div>
              <Card />
            </div>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <input type="text" />
            <div>
              <Card />
            </div>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <input type="text" />
            <div>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentModal
