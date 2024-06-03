import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main>
      <div className=" bg-gray-200 lg:py-24 py-16 mt-24 px-4 lg:px-12 flex flex-col items-center relative">
      <Image
            src={"/aboutbanner.jpg"}
            className="absolute z-0 object-cover brightness-50"
            alt="heroimage"
            fill
          />
        <div className="text-center z-10">
        <p className=" max-w-screen-xl text-center py-4 text-orange-300">
          Lorem ipsum dolor sit amet consectetu
        </p>
        <h2 className="lg:text-4xl text-2xl uppercase font-extralight text-center text-white">
          ABOUT US
        </h2>
        </div>
      </div>

      <div className="flex flex-col-reverse px-2 lg:px-0 lg:flex-row justify-between gap-4 lg:gap-12 items-center">
        <div className="image bg-gray-200 w-full lg:w-1/2  lg:h-96 h-72 relative">
          <Image
            src={"/aboutimage.jpg"}
            className="absolute z-0 object-cover"
            alt="abutimage"
            fill
          />
        </div>
        <div className="pt-12 w-full lg:w-1/2  text-gray-600 lg:leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          voluptates! Voluptate dignissimos quis numquam eligendi libero fugiat
          illum ipsum, corrupti iusto voluptatibus similique ullam possimus
          facere animi impedit, reprehenderit repellat aperiam porro asperiores
          sit, temporibus neque eius sed! Deserunt, illum incidunt dolor
          cupiditate enim id. <br />
          <br />
        </div>
      </div>

      <div className="py-16 lg:px-8">
        <div className="p-4 ">
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

        <div className="p-4 ">
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

        <div className="p-4 ">
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

        <div className="p-4 ">
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

        <div className="flex flex-col lg:flex-row justify-center lg:gap-12 gap-4 py-12 px-2 lg:px-8">
            <div className=" text-center flex flex-col  items-center gap-2 px-3">
                <div className="image w-full h-72 bg-gray-200 relative">
                     <Image
            src={"/chef1.jpg"}
            className="absolute z-0 object-cover"
            alt="heroimage"
            fill
          />
                </div>
                <p className="text-gray-700">Chef name</p>
                <p className="text-gray-500 text-sm pt-2 max-w-80">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, eaque laborum. Inventore!
                </p>
            </div>

            
            <div className=" text-center flex flex-col items-center gap-2 px-2">
                <div className="image w-full h-72 bg-gray-200 relative">
                     <Image
            src={"/chef2.jpg"}
            className="absolute z-0 object-cover"
            alt="heroimage"
            fill
          />
                </div>
                <p className="text-gray-700">Chef name</p>
                <p className="text-gray-500 text-sm pt-2 max-w-80">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, eaque laborum. Inventore!
                </p>
            </div>

            
            <div className=" text-center flex flex-col items-center gap-2 px-2">
                <div className="image w-full h-72 bg-gray-200 relative">
                     <Image
            src={"/chef3.jpg"}
            className="absolute z-0 object-cover"
            alt="heroimage"
            fill
          />
                </div>
                <p className="text-gray-700">Chef name</p>
                <p className="text-gray-500 text-sm pt-2 max-w-80">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, eaque laborum. Inventore!
                </p>
            </div>

            
            {/* <div className=" text-center flex flex-col items-center gap-2 px-2">
                <div className="image w-full h-72 bg-gray-200 relative">
                 <Image
            src={"/chef1.jpg"}
            className="absolute z-0 object-cover"
            alt="heroimage"
            fill
          /></div>
                <p className="text-gray-700">Chef name</p>
                <p className="text-gray-500 text-sm pt-2 max-w-80">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, eaque laborum. Inventore!
                </p>
            </div> */}

            
        </div>
      </div>
    </main>
  );
};

export default page;
