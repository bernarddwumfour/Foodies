import React from 'react'
import Product from './(components)/Product'

const page = () => {
  let products :product[] = [
    {
      id : 1 ,
      name : "Jollof Rice",
      price : 12 ,
      description : "Description For jollof Rice", 
      image : "food1"
    },
    {
      id : 2 ,
      name : "Plain Rice",
      price : 15 ,
      description : "Description For plain Rice", 
      image : "food2"
    },
    {
      id : 3 ,
      name : "Fried Rice",
      price : 18 ,
      description : "Description For Fried Rice", 
      image : "food3"
    },
    {
      id : 4 ,
      name : "Waakye",
      price : 21,
      description : "Description For Waakye", 
      image : "food4"
    },

  ]


  return (
    <div className='p-8'>
      <p className='text-center text-lg p-3 bg-orange-300 mb-6'>Products in shop.</p>
     {products && products.map(product=> <Product key={product.id} product={product}/>)}
    </div>
  )
}

export default page