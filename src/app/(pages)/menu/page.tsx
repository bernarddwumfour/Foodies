import Image from "next/image";
import React from "react";

const page = () => {
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

      <div className="menugrid lg:grid-cols-3 2xl:grid-cols-4 grid sm:grid-cols-2  md:grid-cols-2 py-12 gap-2 lg:gap-4 px-2 lg:px-4 2xl:px-12">
            <div className="product">
              <div className="image bg-gray-200 h-64 relative">
                 <Image
            src={"/food1.jpg"}
            className="absolute z-0 object-cover"
            alt="foodimage"
            fill
          />
              </div>
              <div className="details p-4">
                <p className="uppercase text-gray-700 font-semibold">
                  Food name here
                </p>
                <p className="text-sm text-gray-600 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime consectetur iste facere.
                </p>
                <p className="text-gray-700">$20.00</p>
              </div>
            </div>

            <div className="product">
              <div className="image bg-gray-200 h-64 relative">
                 <Image
            src={"/food2.jpg"}
            className="absolute z-0 object-cover"
            alt="foodimage"
            fill
          />
              </div>
              <div className="details p-4">
                <p className="uppercase text-gray-700 font-semibold">
                  Food name here
                </p>
                <p className="text-sm text-gray-600 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime consectetur iste facere.
                </p>
                <p className="text-gray-700">$20.00</p>
              </div>
            </div>

            <div className="product">
              <div className="image bg-gray-200 h-64 relative">
                 <Image
            src={"/food3.jpg"}
            className="absolute z-0 object-cover"
            alt="foodimage"
            fill
          />
              </div>
              <div className="details p-4">
                <p className="uppercase text-gray-700 font-semibold">
                  Food name here
                </p>
                <p className="text-sm text-gray-600 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime consectetur iste facere.
                </p>
                <p className="text-gray-700">$20.00</p>
              </div>
            </div>

            <div className="product">
              <div className="image bg-gray-200 h-64 relative">
                 <Image
            src={"/food4.jpg"}
            className="absolute z-0 object-cover"
            alt="foodimage"
            fill
          />
              </div>
              <div className="details p-4">
                <p className="uppercase text-gray-700 font-semibold">
                  Food name here
                </p>
                <p className="text-sm text-gray-600 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime consectetur iste facere.
                </p>
                <p className="text-gray-700">$20.00</p>
              </div>
            </div>
          </div>
    </main>
  );
};

export default page;
