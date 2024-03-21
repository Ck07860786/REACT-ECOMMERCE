import React from 'react'
import heroimg from '../assets/mainHero.png';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'




function Hero() {

  return (
    <>

      <div className=' w-full h-[600px]  flex  justify-center'>
        < div className=' h-[300px] w-[750px] py-10  mt-36'>
          <h1 className='  text-7xl px-10 font-marmelad '>Digital Service With <span className=' py-6 text-blue-700'>Excellent Quality</span></h1>
          <p className=' text-start px-12 py-6 font-serif'>Create, consume and connect in style with versatile laptops and 2-in-1s....</p>
          <div className=' flex justify-around py-10 mr-28'>
            <Link to='/register'>
              <Button className='bg-black  ' >Start Shopping</Button>
            </Link>

          </div>

        </div>

        <div className=' h-[600px] w-[600px] mr-28 mt-10  '>
          <img className='  w-[600px] ' src={heroimg} width={600} height={600} alt='heroimg' />

        </div>



      </div>
    </>
  )
}

export default Hero