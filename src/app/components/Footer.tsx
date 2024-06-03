import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='relative'>
        <div  className='bg-black bg-opacity-70 py-32 lg:px-12 px-4 flex lg:flex-row lg:items-center lg:justify-between 2xl:justify-evenly gap-12 lg:gap-0 flex-col items-start'>
            <p className="abouttext w-full lg:w-1/3 leading-7 text-gray-300 text-sm">
                <Link href="/"  className='text-orange-400 text-xl font-bold'>Foodies</Link> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quas illo voluptatum vero autem! Nulla, totam nostrum, beatae facilis a molestiae sed pariatur consequuntur excepturi iure in dolorem doloremque expedita unde aliquam repellendus laboriosam placeat!
            </p>
        <menu className='flex flex-col lg:justify-center lg:text-center'>
                <Link href="/" className='text-gray-200 hover:text-orange-400 p-2 pb-0 text-sm'>Home</Link>
                <Link href="/about" className='text-gray-200 hover:text-orange-400 p-2 pb-0 text-sm'>About</Link>
                <Link href="/menu" className='text-gray-200 hover:text-orange-400 p-2 pb-0 text-sm'>Our Menu</Link>
                <Link href="/FAQ" className='text-gray-200 hover:text-orange-400 p-2 pb-0 text-sm'>FAQ</Link>
                <Link href="/contact" className='text-gray-200 hover:text-orange-400 p-2 pb-0 text-sm'>Contact</Link>
            </menu>

            <table className='text-white border-collapse bord-0 text-sm leading-7'>
               <tbody>
               <tr>
                    <td>Modday&nbsp;&nbsp;&nbsp;</td>
                    <td>09:00am - 05:00pm</td>
                </tr>
                <tr>
                    <td>Tuesday&nbsp;&nbsp;&nbsp;</td>
                    <td>09:00am - 05:00pm</td>
                </tr>
                <tr>
                    <td>Wednesday&nbsp;&nbsp;&nbsp;</td>
                    <td>09:00am - 05:00pm</td>
                </tr>
                <tr>
                    <td>Thursday&nbsp;&nbsp;&nbsp;</td>
                    <td>09:00am - 05:00pm</td>
                </tr>
                <tr>
                    <td>Friday&nbsp;&nbsp;&nbsp;</td>
                    <td>09:00am - 05:00pm</td>
                </tr>
                <tr>
                    <td>Saturday&nbsp;&nbsp;&nbsp;</td>
                    <td>09:00am - 05:00pm</td>
                </tr>
                <tr>
                    <td>sunday&nbsp;&nbsp;&nbsp;</td>
                    <td>Closed</td>
                </tr>
               </tbody>  
            </table>
        <p className="text-center left-1/2 -translate-x-1/2 absolute bottom-4 text-sm text-gray-300">Copyright 2024</p>
        </div>

    </footer>
  )
}

export default Footer