import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import signupimg from '../assets/signupimg.jpg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Nav from './Nav';

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = () => {
        try {
            if (name && email && password) {
                console.log(name, email, password);
                localStorage.setItem("name", name);
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
                navigate('/login');
                alert('Registration successfull')
            }
            else {
                toast.error('somthing went wrong')
            }
        } catch (error) {
            console.log(error);

        }
    };

    return (
        < >

            <div className='w-full flex  justify-center items-center mt-20  '>


                <div className='w-[400px] h-[500px] shadow-xl rounded-md px-5  '>
                    <h1 className='text-center text-4xl font-bold py-5 text-blue-700'>Sign Up</h1>
                    <div className='py-4 px-5'>
                        <Input type='text' placeholder='Enter name' onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className='py-4 px-5'>
                        <Input type='email' placeholder='Enter email' onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className='py-4 px-5'>
                        <Input type='password' placeholder='Enter password' onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className='py-3 px-5'>
                        <Button className='w-full' onClick={handleSubmit}>SignUp</Button>
                        <Toaster />
                    </div>
                    <div className='py-3 px-5'>
                        <Link to='/login'>
                            <Button className='w-full'>Login</Button>
                        </Link>
                    </div>
                    <div className='py-6 flex justify-center gap-6 px5'>
                        <FcGoogle size={30} />
                        <FaFacebook color='blue' size={25} />
                        <FaTwitter color='blue' size={25} />
                        <FaGithub size={25} />
                    </div>
                </div>
                <div className=' px-5'>
                    <img className=' w-[400px]  ' src={signupimg} width={500} height={500} alt='loginbanner' />
                </div>
            </div>

        </>
    );
}

export default Register;
