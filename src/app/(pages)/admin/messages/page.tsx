import React from "react";
import { FaPen, FaTrash } from "react-icons/fa6";

const page = () => {
  return (
    <div className="p-8">
      <p className="text-center text-lg p-3 bg-orange-300 mb-6">
        Messages to shop.
      </p>

      <table className="text-sm">
        <thead className="bg-orange-100">
          <td className="p-2">Name</td>
          <td className="p-2">Email</td>
          <td className="p-2">Message</td>
          <td className="p-2">Actions</td>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Bernard Kusi</td>
            <td className="p-2">bernard@gmail.com</td>
            <td className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              beatae possimus nihil porro sint saepe reprehenderit a consequatur
              quasi? Cumque, ab, aperiam obcaecati cupiditate minus corrupti sed
              perspiciatis incidunt officiis magnam, similique impedit
              architecto veniam.
            </td>
            <td className="flex gap-2 p-2">
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
  );
};

export default page;
