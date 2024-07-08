import Button from "@/app/components/Button";
import React from "react";

const page = () => {
  return (
    <div className="p-8">
      <p className="text-center text-lg p-3 bg-orange-300 mb-6">
        Add Product To Shop.
      </p>
      <div className="form">
        <form action="" className="p-10">
          <div className="flex gap-12">
            <div className="control flex flex-col-reverse gap-2 pb-8 w-1/2">
              <input
                type="text"
                name="name"
                id="name"
                className="p-2 border-gray-400 border-2 w-full outline-none focus:border-orange-200"
              />
              <label htmlFor="name">Product Name</label>
            </div>

            <div className="control flex flex-col-reverse gap-2 pb-8 w-1/2">
              <input
                type="text"
                name="name"
                id="name"
                className="p-2 border-gray-400 border-2  w-full  outline-none focus:border-orange-200"
              />
              <label htmlFor="name">Product Price</label>
            </div>

          </div>

           
            <div className="flex gap-12">
            <div className="control flex flex-col-reverse gap-2 pb-8 w-1/2">
              <input
                type="text"
                name="name"
                id="name"
                className="p-2 border-gray-400 border-2 w-full outline-none focus:border-orange-200"
              />
              <label htmlFor="name">Product Name</label>
            </div>

            <div className="control flex flex-col-reverse gap-2 pb-8 w-1/2">
              <input
                type="text"
                name="name"
                id="name"
                className="p-2 border-gray-400 border-2  w-full  outline-none focus:border-orange-200"
              />
              <label htmlFor="name">Product Price</label>
            </div>

          </div>

          <div className="control flex flex-col-reverse gap-2 pb-8">
              <textarea
                name="description"
                id="description"
                className="p-2 border-gray-400 border-2 w-full outline-none focus:border-orange-200 resize-none h-[200px]"
              ></textarea>
              <label htmlFor="name">Product Name</label>
            </div>
            
            <button className="outline-none border-none relative left-1/2 -translate-x-1/2">
            <Button>
                Send Message
            </Button>
            </button>
        </form>
      </div>
    </div>
  );
};

export default page;
