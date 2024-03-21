import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'

function Cart({cart}) {
  const [CART,setCart] = useState([])
  
  useEffect(()=>{
    setCart(cart)

  },[cart])
  return (
    <div className=' w-[600px] items-center'>
        {CART?.map((cartItem,cartIndex)=>{
            return (
                <div className=' flex items-center justify-center'>
                <img src={cartItem.image}   alt='cartimg' width={150} className=' px-5'/>
                <p className=' px-10'>{cartItem.name}</p>
                <hr />
                <Button className=' bg-black text-white' 
                onClick={()=>{
                  const _CART = CART.map((item,index)=>{
                    return cartIndex===index?{...item,quantity:item.quantity>1?item.quantity-1:1}:item

                  })
                  setCart(_CART)
                 }} >-</Button>
                <p className=' px-5 font-thin'>{cartItem.quantity}</p>
                <Button className=' bg-black text-white' 
                 onClick={()=>{
                  const _CART = CART.map((item,index)=>{
                    return cartIndex===index?{...item,quantity:item.quantity+1}:item

                  })
                  setCart(_CART)
                 }}>+
                 </Button>
                <p className=' text-xl  font-semibold ml-10'>${cartItem.price *cartItem.quantity}</p>

                
                </div>
            )
        })}
        <hr className=' border-b-[2px]' />
        <div className=' flex  items-center w-[600px] justify-between '>
        <Button className=' ml-8'>CheckOut</Button>

        <p className=' text-center font-extrabold py-14'>Total : 
          {
            CART.map(item=> item.price* item.quantity).reduce((total,value)=> total+value,0)
          }
        </p>
        
        </div>
    </div>
  )
}

export default Cart
