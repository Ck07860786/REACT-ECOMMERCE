import { Link } from 'react-router-dom'
import React from 'react'
import shopLogo from '../assets/shopLogo.png'
import { CgLogIn } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

function Nav(props) {
    return (
        <>
            <div className=' w-full border-b-[2px] h-24 items-center flex justify-between px-32'>
                <div>
                    <img className=' w-[90px]' src={shopLogo} alt='logo' />
                </div>

                <div className=' flex gap-8'>



                    <p><Link to='/'>Home</Link></p>
                    <p onClick={() => props.handleShow(false)}><Link to='/products'>Products</Link></p>
                    <p><Link to='/orders' >Orders</Link></p>
                    <p><Link to='/contact'>Contact Us</Link></p>




                </div>

                <div className=' flex gap-6 items-center'>
                    <Link to='/register'>
                        <div className=' h-12 w-12 border-[1px] border-zinc-600 rounded-full flex justify-center items-center'>
                            <CgLogIn className=' text-blue-700 ' size={20} />
                        </div>
                    </Link>


                    <div className=' h-12 w-12 flex items-center bg-blue-700  rounded-sm px-4' onClick={() => props.handleShow(true)}>
                        <FaShoppingCart className=' w-[45px]' color='white' />
                        <sup>{props.count}</sup>



                    </div>


                </div>



            </div>

        </>
    )
}

export default Nav