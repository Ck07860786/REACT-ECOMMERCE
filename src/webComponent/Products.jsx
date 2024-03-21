import React, { useState } from 'react';
import Nav from './Nav';
import products from '@/ProductArray/Product';
import { Button } from '@/components/ui/button';
import Cart from './Cart'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Products() {
  const [cart,setCart]= useState([])
  const [showCart,setShowCart] = useState(false)

  const handleShow =(value)=>{
    setShowCart(value)

   }

  const addToCart =(data)=>{
    setCart([...cart,{...data,quantity:1}])
    toast.success('item added to cart')

  }
  return (
    <>
      <Nav handleShow={handleShow} count={cart.length} />
      {
        showCart?
        <Cart cart={cart}/>:
        <div className="flex flex-col items-center mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        
          {products.map(product => (
           
           
            <div  className="bg-white rounded-lg p-4 shadow-2xl px-8 m-10 py-10">
              < Link to={`/product/${product.id}`}>
              <h1 className="text-xl font-bold">{product.name}</h1>
              <img src={product.image} alt="Product" className="mt-2 w-[350px] h-auto" />
              <h1 className="mt-2 text-2xl">${product.price}</h1>
              <p className="mt-2">{product.description}</p>
              </Link>
              <Button className='  p-5 mt-6 items-center'   onClick={()=>addToCart(product)} >Add To Cart</Button>
              <Toaster />
            </div>
          
            
          ))}
        </div>
      </div>


      }
      
      
      
    </>
  );
}

export default Products;
