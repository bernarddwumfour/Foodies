import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main>
       <div className=" bg-gray-200 lg:py-24 py-16 mt-24 px-4 lg:px-12 flex flex-col items-center relative">
        <Image
          src={"/aboutimage.jpg"}
          className="absolute z-0 object-cover brightness-50"
          alt="heroimage"
          fill
        />
        <div className="text-center z-10">
          <p className=" max-w-screen-xl text-center py-4 text-orange-300">
            Lorem ipsum dolor sit amet consectetu
          </p>
          <h2 className="lg:text-4xl text-2xl uppercase font-extralight text-center text-white">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
      </div>

      <div className="lg:py-32 py-16 lg:px-24 px-4">
        <div className="p-8 px-2 ">
          <h4 className="text-lg text-orange-400 pb-2">Lorem, ipsum dolor.</h4>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            veritatis, exercitationem iure nesciunt quaerat quia! Consectetur,
            est quod enim saepe atque maxime architecto dolore, ducimus
            doloremque accusamus asperiores, dolor exercitationem iste harum
            laboriosam? Nulla suscipit delectus hic consectetur tenetur
            accusamus optio fugit commodi possimus aut dignissimos magni dolor
            libero, tempora qui officia. Error, debitis consectetur.
          </p>
        </div>

        <div className="p-8 px-2 ">
          <h4 className="text-lg text-orange-400 pb-2">Lorem, ipsum dolor.</h4>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            veritatis, exercitationem iure nesciunt quaerat quia! Consectetur,
            est quod enim saepe atque maxime architecto dolore, ducimus
            doloremque accusamus asperiores, dolor exercitationem iste harum
            laboriosam? Nulla suscipit delectus hic consectetur tenetur
            accusamus optio fugit commodi possimus aut dignissimos magni dolor
            libero, tempora qui officia. Error, debitis consectetur.
          </p>
        </div>

        <div className="p-8 px-2 ">
          <h4 className="text-lg text-orange-400 pb-2">Lorem, ipsum dolor.</h4>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            veritatis, exercitationem iure nesciunt quaerat quia! Consectetur,
            est quod enim saepe atque maxime architecto dolore, ducimus
            doloremque accusamus asperiores, dolor exercitationem iste harum
            laboriosam? Nulla suscipit delectus hic consectetur tenetur
            accusamus optio fugit commodi possimus aut dignissimos magni dolor
            libero, tempora qui officia. Error, debitis consectetur.
          </p>
        </div>

        <div className="p-8 px-2 ">
          <h4 className="text-lg text-orange-400 pb-2">Lorem, ipsum dolor.</h4>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            veritatis, exercitationem iure nesciunt quaerat quia! Consectetur,
            est quod enim saepe atque maxime architecto dolore, ducimus
            doloremque accusamus asperiores, dolor exercitationem iste harum
            laboriosam? Nulla suscipit delectus hic consectetur tenetur
            accusamus optio fugit commodi possimus aut dignissimos magni dolor
            libero, tempora qui officia. Error, debitis consectetur.
          </p>
        </div>

      </div>
    </main>
  );
};

export default page;
