"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa6'
import { Appcontext } from '../context/Appcontextprovider'

const Cartlogo = () => {

    let {cart} = useContext(Appcontext)
    let count = cart.length
    
  return (
    <Link
    href="/cart"
    className="text-gray-600 hover:text-orange-400 p-2 pb-0 text-xl inline-block relative"
  >
    <FaCartPlus />
    <span className='absolute -top-3 scale-75 -right-2 p-2 py-0 text-[.7rem] bg-orange-400 text-white rounded-full'>{count}</span>
  </Link>
  )
}

export default Cartlogo