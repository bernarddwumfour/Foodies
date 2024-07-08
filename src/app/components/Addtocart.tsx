"use client"
import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { Appcontext } from "../context/Appcontextprovider";

type props = {
  product: product;
};

const Addtocart = ({ product }: props) => {
    const {addtocart} = useContext(Appcontext)
  return (
    <button className="bg-orange-400 p-3 rounded-full text-white"   onClick={()=>addtocart(product)}>
      <FaCartPlus />
    </button>
  );
};

export default Addtocart;
