import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import signinimg from '../assets/signinimg.jpg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Nav from './Nav';







function Login() {

  //accesing data from local storage
  const localEmail = localStorage.getItem('email');
  const localPassword = localStorage.getItem('password');


  //navigating user variable
  const navigate = useNavigate();

  //accessing user 
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null)

  //validation 

  const handlesubmit = () => {
    try {
      if (email === localEmail && password === localPassword) {
        navigate('/');
        toast.success('login successfull');


      }

      else {
        toast.error('email or password is incorrect')
      }

    } catch (error) {
      console.log(error)


    }
  }
  return (
    <>

      <div className=' w-full flex justify-center items-center mt-20 px-5'>

        <div className=' w-[400px] h-[500px] shadow-xl rounded-md  px-5'>
          <h1 className=' text-center text-4xl font-bold py-5 text-blue-700'>Login</h1>
          <div className='py-4 px-5' >
            <Input type='email' placeholder='Enter email' onChange={(e) => {
              setEmail(e.target.value)
            }} />

          </div>
          <div className='py-4 px-5'>
            <Input type='password' placeholder='Enter password' onChange={(e) => {
              setPassword(e.target.value)
            }} />
          </div >

          <div className=' py-3 px-5'>
            <Button className=' w-full' onClick={handlesubmit}>Login</Button>
            <Toaster />

          </div>

          <div className=' py-3 px-5'>
            <Link to='/register'>
              <Button className=' w-full' >Sign Up</Button>
            </Link>
          </div>


          <div className=' py-6 flex justify-center gap-6 px5'>
            <FcGoogle size={30} />
            <FaFacebook color='blue' size={25} />
            <FaTwitter color='blue' size={25} />
            <FaGithub size={25} />



          </div>

        </div>
        <div className=' px-5'>
          <img className=' w-[320px]  ' src={signinimg} width={500} height={500} alt='loginbanner' />
        </div>
      </div>

    </>
  )
}

export default Login
