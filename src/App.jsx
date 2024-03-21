
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './webComponent/Products'
import Home from './webComponent/Home'
import Orders from './webComponent/Orders'
import Login from './webComponent/Login'
import ProductDetail from './webComponent/ProductDetail'
import Register from './webComponent/Register'
import Contact from './webComponent/Contact'
import Error from './webComponent/Error'


function App(count) {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/contact' element={< Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='*' element={<Error />} />



        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default App
