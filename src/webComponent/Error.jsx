// 404Page.js

import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {
    return (
        <div className=" flex justify-center items-center">
            <div className=' mt-40  text-center'>
                <h1 className=' text-4xl font-bold'>404 - Page Not Found</h1>
                <p className=' mt-10 text-xl'>Oops! Looks like you got lost.</p>
                <p className=' text-xl font-normal mt-2'>Let's get you back on track:</p>
                <Link to="/"><Button className=' mt-10'>Go to Home Page</Button></Link>
            </div>
        </div>
    );
};

export default Error;
