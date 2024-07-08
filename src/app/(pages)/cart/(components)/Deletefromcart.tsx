"use client"
import { Appcontext } from '@/app/context/Appcontextprovider'
import React, { useContext } from 'react'
import { FaTrash } from 'react-icons/fa6'

const Deletefromcart = ({product}:{product:product}) => {
    const {deletefromcart} = useContext(Appcontext)
  return (
    <div className="actions flex flex-col-reverse gap-4 items-center justify-center scale-75 origin-center">
        <button className="bg-red-500 text-white px-3 rounded-md py-3 lg:text-lg text-sm" onClick={()=>deletefromcart(product)}>
          <FaTrash />
        </button>

        <div className="flex gap-1 my-4">
          <button className="text-white bg-gray-300 px-4"> - </button>
          <input
            type="text"
            name="value"
            id="value"
            className="text-center p-2 w-8 px-0"
          />
          <button className="text-white bg-gray-300 px-4"> + </button>
        </div>
      </div>
  )
}

export default Deletefromcart