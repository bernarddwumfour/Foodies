import Product from "@/app/components/Product";
import Image from "next/image";
import React from "react";

const page = () => {
  let products :product[] = [
    {
      id : 1 ,
      name : "Jollof Rice",
      price : 12 ,
      description : "Description For jollof Rice", 
      image : "food1"
    },
    {
      id : 2 ,
      name : "Plain Rice",
      price : 15 ,
      description : "Description For plain Rice", 
      image : "food2"
    },
    {
      id : 3 ,
      name : "Fried Rice",
      price : 18 ,
      description : "Description For Fried Rice", 
      image : "food3"
    },
    {
      id : 4 ,
      name : "Waakye",
      price : 21,
      description : "Description For Waakye", 
      image : "food4"
    },
    {
      id : 5 ,
      name : "Fries",
      price : 11 ,
      description : "Description For Fries", 
      image : "food4"
    },
    {
      id : 6 ,
      name : "Noodles",
      price : 15 ,
      description : "Description For Noodles", 
      image : "food3"
    },
    {
      id : 7 ,
      name : "Salad",
      price : 13 ,
      description : "Description For Salad", 
      image : "food2"
    },
    {
      id : 8 ,
      name : "Sphagetti",
      price : 7,
      description : "Description For Sphagetti", 
      image : "food1"
    },

  ]
  return (
    <main className="">
      <div className=" bg-gray-200 lg:py-24 py-16 mt-24 px-4 lg:px-12 flex flex-col items-center relative">
        <Image
          src={"/menubanner.jpg"}
          className="absolute z-0 object-cover brightness-50"
          alt="heroimage"
          fill
        />
        <div className="text-center z-10">
          <p className=" max-w-screen-xl text-center py-4 text-orange-300">
            Lorem ipsum dolor sit amet consectetu
          </p>
          <h2 className="lg:text-4xl text-2xl uppercase font-extralight text-center text-white">
            OUR MENU
          </h2>
        </div>
      </div>

      <div className="menugrid lg:grid-cols-3 2xl:grid-cols-4 grid sm:grid-cols-2  md:grid-cols-2 py-32 gap-2 lg:gap-4 px-2 lg:px-4 2xl:px-12">
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </main>
  );
};

export default page;
