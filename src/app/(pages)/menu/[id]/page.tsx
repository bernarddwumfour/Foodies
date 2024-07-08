import Addtocart from "@/app/components/Addtocart";
import Product from "@/app/components/Product";
import Image from "next/image";
import React from "react";

const page = ({params}:{params:{id:number}}) => {
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
  let pageproduct = products.filter(product=>product.id == params.id)[0]

  return (
    <main className="pt-32 ">
      <div className="product flex lg:flex-row flex-col lg:px-12 p-2 gap-12 items-center">
        <div className="image bg-gray-200 sm:h-[500px] h-[300px] relative lg:w-1/2 w-full max-w-[700px]">
          <Image
            src={`/${pageproduct.image}.jpg`}
            className="absolute z-0 object-cover"
            alt="foodimage"
            fill
          />
        </div>
        <div className="details p-4 lg:w-1/2">
          <p className="uppercase text-orange-400 font-semibold">
            {pageproduct.name}
          </p>
          <p className="text-sm text-gray-600 py-2">
            {pageproduct.description} adipisicing elit. Maxime consectetur iste
            facere.
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-gray-700">${pageproduct.price}</p>
            <span>
            <Addtocart  product={pageproduct} />
            </span>
          </div>
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
