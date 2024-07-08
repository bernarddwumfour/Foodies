import Image from "next/image";
import React from "react";
import { FaPen, FaTrash } from "react-icons/fa6";

const Product = ({ product }: { product: product }) => {
  return (
    <div className="flex lg:gap-8 py-2 items-center justify-between  text-sm mb-8">
      <div className="image flex-none relative bg-gray-200 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48">
        <Image
          src={`/${product.image}.jpg`}
          className="absolute z-0 object-cover"
          alt="foodimage"
          fill
        />
      </div>

      <div className="details lg:p-4 p-2">
        <p className="capitalize text-orange-300 font-semibold">
          {product.name}
        </p>
        <div className="text-sm hidden md:block text-gray-500 lg:leading-6 leading-5 py-1 max-w-xl">
          {product.description}
          Maxime consectetur iste facere ipsum dolor sit amet consectetur
          adipisicing elit. Maxime consectetur.
        </div>
        <p className=" text-gray-400 text-sm">Rating 5.0</p>
        <p className="text-gray-700">${product.price}</p>
      </div>

      <div className="actions flex flex-col gap-6">
        <span className="p-2 bg-green-400 text-white  rounded-sm">
          <FaPen />
        </span>
        <span className="p-2 bg-red-400 text-white rounded-sm">
          <FaTrash />
        </span>
      </div>
    </div>
  );
};

export default Product;
