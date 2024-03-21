import products from '@/ProductArray/Product'
import { Button } from '@/components/ui/button';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Nav from './Nav';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"




function ProductDetail() {

  const { id } = useParams();
  const product = products.find(product => product.id == id)





  return (
    <>
      <Nav />
      <div className=' flex justify-center cursor-pointer mt-15'>
        <div className=' w-[400px] mr-52 '>

          <img src={product.image} alt='productimg' />

        </div>
        <div className=' w-[400px]'>
          <div className=' mt-10 text-2xl'>{product.name}</div>
          <div className=' mt-10'><h1 className=' text-3xl font-semibold'>$ {product.price}</h1></div>
          <div>
            <h1 className=' py-4'>Select Quantity</h1>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="1" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <SelectItem value={i + 1}>{i + 1}</SelectItem>

                })}


              </SelectContent>
            </Select>


          </div>
          <div className=' mt-10'><p>{product.description}</p></div>

          <div className=' py-6'>
            <Link to='/register'>
              <Button>Buy Now</Button>
            </Link>
          </div>
        </div>

      </div>

    </>
  )
}

export default ProductDetail
