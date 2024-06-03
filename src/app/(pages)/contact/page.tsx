import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main>
      <div className=" bg-gray-200 lg:py-24 py-16 mt-24 px-4 lg:px-12 flex flex-col items-center relative">
        <Image
          src={"/contactbanner.jpg"}
          className="absolute z-0 object-cover brightness-50"
          alt="heroimage"
          fill
        />
        <div className="text-center z-10">
          <p className=" max-w-screen-xl text-center py-4 text-orange-300">
            Lorem ipsum dolor sit amet consectetu
          </p>
          <h2 className="lg:text-4xl text-2xl uppercase font-extralight text-center text-white">
            CONTACT US
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4 lg:gap-8 py-16 px-4 lg:px-24">
        <div className="flex flex-col gap-4 rounded-lg text-sm text-gray-600 px-4 text-center shadow-lg p-8">
          <p>Telephone</p>
          <p>0592724408</p>
        </div>

        <div className="flex flex-col gap-4 rounded-lg text-sm text-gray-600 px-4 text-center shadow-lg p-8">
          <p>Telephone</p>
          <p>0592724408</p>
        </div>

        <div className="flex flex-col gap-4 rounded-lg text-sm text-gray-600 px-4 text-center shadow-lg p-8">
          <p>Telephone</p>
          <p>0592724408</p>
        </div>

        <div className="flex flex-col gap-4 rounded-lg text-sm text-gray-600 px-4 text-center shadow-lg p-8">
          <p>Telephone</p>
          <p>0592724408</p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between w-full px-2 lg:px-12 pb-0 pt-8">
        <form className="flex flex-col items-center w-full lg:w-1/2">
          <div className="flex flex-col gap-6 w-full justify-center px-0 lg:px-8 py-8">
            <div className="control w-full flex flex-col-reverse gap-2 relative">
              <input
                type="text"
                className="p-3  border-gray-300 border-2 outline-none w-full block focus:border-orange-200"
                name="name"
                id="name"
              />
              <label htmlFor="name" className="text-gray-500">
                Name
              </label>
            </div>

            <div className="control w-full flex flex-col-reverse gap-2 relative">
              <input
                type="text"
                className="p-3  border-gray-300 border-2 outline-none w-full block focus:border-orange-200"
                name="name"
                id="name"
              />
              <label htmlFor="name" className="text-gray-500">
                Email
              </label>
            </div>

            <div className="control w-full flex flex-col-reverse gap-2 relative">
              <textarea
                className="p-3 resize-none h-24  border-gray-300 border-2 outline-none w-full block focus:border-orange-200"
                name="name"
                id="name"
              ></textarea>
              <label htmlFor="name" className="text-gray-500">
                Message
              </label>
            </div>
          </div>
          <button className="p-4 px-6 bg-orange-300 text-white text-sm w-fit inline-block border-none outline-none">
            Make Reservation
          </button>
        </form>

        <div className="image bg-gray-200 w-full lg:w-1/2 relative">
          <Image
            src={"/contactimage.jpg"}
            className="absolute z-0 object-cover"
            alt="heroimage"
            fill
          />
        </div>
      </div>

      
      <div className="lg:px-16 px-2">
      <div className="map px-0 lg:py-72 my-36 bg-gray-200 w-full h-96"></div>
      </div>
    </main>
  );
};

export default page;
