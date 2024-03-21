import React from 'react'
import Nav from './Nav'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'


function Orders() {
  return (
    <>

      <Nav />

      <div className=' flex justify-center mt-20'>
        <div>

        <div>
          <h1 className=' text-4xl'>Your Order List is empty.....😴</h1>
        </div>

        <div className=' flex items-center justify-center'>
         <Link to='/products'> <Button  className=' text-center bg-black   mt-24 text-[20px]'>Continue Shopping😁 </Button></Link>
        </div>


        </div>

      </div>
    </>
  )
}

export default Orders
