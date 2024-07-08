import React from 'react'
import { FaPen, FaTrash } from 'react-icons/fa6'

const page = () => {
  return (
    <div className='p-8'>
    <p className='text-center text-lg p-3 bg-orange-300 mb-6'>Orders to shop.</p>
    
    <table className="text-sm">
        <thead className="bg-orange-100">
          <td className="p-2">id</td>
          <td className="p-2">Details</td>
          <td className="p-2">Status</td>
          <td className="p-2">Total</td>
          <td className="p-2">Actions</td>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">200</td>
            <td className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              beatae possimus nihil porro sint saepe reprehenderit a consequatur
              quasi? Cumque, ab, aperiam obcaecati cupiditate minus corrupti sed
              perspiciatis incidunt officiis magnam, similique impedit
              architecto veniam.
            </td>
            <td className="p-2">$200.00</td>
            <td className="p-2">Pending</td>
            <td className="flex gap-2 p-2 items-center">
              <span className="p-2 bg-green-400 text-white  rounded-sm">
                <FaPen />
              </span>
              <span className="p-2 bg-red-400 text-white rounded-sm">
                <FaTrash />
              </span>
            </td>
          </tr>
        </tbody>
      </table>

  </div>
  )
}

export default page