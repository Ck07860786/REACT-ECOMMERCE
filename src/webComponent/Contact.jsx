import React from 'react'
import Nav from './Nav'
import Contact from '../assets/contactimg.jpg'
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaHeadphones } from "react-icons/fa";



function Wishlist() {
  return (
    <>
      <Nav />
      <div className=' flex justify-center  w-full'>
        <div className='   '>
          <img className=' w-[500px] h-[500px] ' src={Contact} alt='contactimg' />
        </div>

        <div className=' w-[500px]  ml-10 mt-40 '>
          <h1 className=' text-3xl text-black  font-bold'>Contact Us</h1>
          <div className=' flex mt-11 items-center'>
            <FaPhoneAlt size={25} />
            <h1 className=' text-2xl px-5'>7778885556</h1>
          </div>

          <div className=' flex mt-11 items-center'>
            <BiLogoGmail size={25} />
            <h1 className=' text-2xl px-5'>shop@gamil.com</h1>
          </div>

          <div className=' flex mt-11 items-center'>
            <FaHeadphones size={25} />
            <h1 className=' text-2xl px-5'>1800-5600-1800 (Toll Free)</h1>
          </div>



        </div>
      </div>
    </>
  )
}

export default Wishlist
