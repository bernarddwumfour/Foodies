import React, { ReactNode } from 'react'

const Button = ({children}:{children : ReactNode}) => {
  return (
    <div className='p-4 px-6 text-white bg-orange-400 inline-block'>
        Send Message
    </div>
  )
}

export default Button