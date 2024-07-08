import Image from "next/image";
import React from "react";
import Addtocart from "./Addtocart";
import Link from "next/link";

type props = {
  product: product;
};

const Product = ({ product }: props) => {
  return (
    <div className="product">
      <div className="image bg-gray-200 h-64 relative">
        <Link href={`/menu/${product.id}`}>
          <Image
            src={`/${product.image}.jpg`}
            className="absolute z-0 object-cover"
            alt="foodimage"
            fill
          />
        </Link>
      </div>
      <div className="details p-4">
        <Link href={`/menu/${product.id}`}>
          <p className="uppercase text-orange-400 font-semibold">
            {product.name}
          </p>
        </Link>
        <p className="text-sm text-gray-600 py-2">
          {product.description} adipisicing elit. Maxime consectetur iste
          facere.
        </p>
        <div className="flex justify-between items-center">
          <p className="text-gray-700">${product.price}</p>
          <Addtocart product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
