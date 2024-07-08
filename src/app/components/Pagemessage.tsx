'use client'
import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontextprovider'
import { error } from 'console'

const Pagemessage = () => {
    const { pagemessagestate,pagemessage,pagemessagetype } = useContext(Appcontext)
  return (
    <div className={`p-2 min-w-[300px] text-orange-400 border-2 border-orange-400 opacity-95 text-sm rounded-xl text-center left-1/2 -translate-x-1/2 ${pagemessagestate == true ?"fixed": "hidden"} top-40 z-10 ${pagemessagetype == "info" && "text-orange-400 border-orange-400"} ${pagemessagetype == "success" && "text-green-600 border-green-600"} ${pagemessagetype == "error" && "text-red-600 border-red-600"} bg-white`}>{pagemessage}</div>
  )
}

export default Pagemessage