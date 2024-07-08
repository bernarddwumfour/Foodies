"use client"
import { Appcontext } from '@/app/context/Appcontextprovider';
import React, { useContext } from 'react'
import Cartitem from './(components)/Cartitem';



const page = () => {
  const {cart} = useContext(Appcontext)
  return (
    <main>
      <p className="pt-32 text-gray-600 text-center text-xl">
        Products In Cart
      </p>
        <div className="px-2 lg:px-12 py-3 pt-12 pb-32">
         {cart ? cart.map(product=><Cartitem key={product.id} product = {product}/>) : "No Products In Cart"}
       </div>
    </main>
  )
}

export default page