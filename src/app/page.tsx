import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="">
        {/* Hero Section */}
        <div
          id="hero"
          className="flex py-52 pt-58 px-2 lg:px-12 bg-gray-200 relative justify-center"
        >
          <Image
            src={"/homeimage.jpg"}
            className="absolute z-0 object-cover brightness-50"
            alt="heroimage"
            fill
          />
          <div className="flex flex-col items-center z-10 py-4 lg:py-12">
            <h1 className="text-2xl lg:text-5xl font-semibold text-center pt-12 text-white uppercase">
              Lorem ipsum dolor
            </h1>
            <p className="text-center py-4 text-orange-100">
              Lorem ipsum, dolor sit amet consectetur adipisicingquaerat, neque
              minima obcaecati .
            </p>
            <a
              href="/menu"
              className="p-3 px-6 bg-orange-300 text-white text-sm w-fit inline-block"
            >
              Order Now
            </a>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="py-24 px-2 lg:px-8">
          <h4 className="heading text-center text-orange-400">Lorem ipsum dolor sit.</h4>
          <h2 className="lg:text-4xl text-2xl uppercase font-extralight lg:pt-4 pt-2 text-center">
            Lorem ipsum dolor sit.
          </h2>

          <div className="flex flex-col lg:flex-row justify-between gap-8 py-16 items-center">
            <div className="image bg-gray-200 w-full lg:w-1/2 h-72 lg:h-96 relative">
            <Image
            src={"/aboutimage.jpg"}
            className="absolute z-0 object-cover"
            alt="heroimage"
            fill
          />
            </div>
            <div className="lg:p-12 p-4 w-full lg:w-1/2  text-gray-600 text-sm lg:text-base lg:leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              voluptates! Voluptate dignissimos quis numquam eligendi libero
              fugiat illum ipsum, corrupti iusto voluptatibus similique ullam
              possimus facere animi impedit, reprehenderit repellat aperiam
              porro asperiores sit, temporibus neque eius sed! Deserunt, illum
              incidunt dolor cupiditate enim id. <br /><br />
              <Link
                href="/about"
                className="p-3 px-6 bg-orange-300 text-white text-sm w-fit inline-block"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>

        {/* First banner */}

        <div
          id="banner"
          className=" bg-gray-200 relative py-48 px-2 lg:px-12 flex justify-center"
        >
           <Image
            src={"/banner1.jpg"}
            className="absolute z-0 object-cover brightness-50"
            alt="heroimage"
            fill
          />
      <div className="z-10 flex flex-col items-center">
      <p className=" max-w-screen-xl text-neutral-300 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Q
          </p>
          <h1 className="lg:text-5xl text-2xl font-semibold text-center py-4 text-white uppercase">
              Lorem ipsum dolor
            </h1>
            <a href="#" className="p-3 px-6 bg-orange-300 text-white text-sm w-fit inline-block">
            Order Now
          </a>
      </div>
        </div>

        {/* menu section */}
        <div id="menu" className="py-24 lg:px-8 px-2">
          <h4 className="heading text-center text-orange-400">Lorem ipsum dolor sit.</h4>
          <h2 className="lg:text-4xl text-2xl uppercase font-extralight lg:pt-4 pt-2 text-center">
            Lorem ipsum dolor sit.
          </h2>

          <div className="menugrid lg:grid-cols-3 2xl:grid-cols-4 grid sm:grid-cols-2  md:grid-cols-2 py-12 gap-2 lg:gap-4">
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
          <div className="menugrid lg:grid-cols-3 2xl:grid-cols-4 grid sm:grid-cols-2  md:grid-cols-2 py-12 gap-2 lg:gap-4">
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

        </div>

        {/* Second Banner */}
        <div
          id="banner"
          className=" bg-gray-200 relative py-48 px-2 lg:px-12 flex justify-center"
        >
           <Image
            src={"/banner2.jpg"}
            className="absolute z-0 object-cover brightness-50"
            alt="heroimage"
            fill
          />
      <div className="z-10 flex flex-col items-center">
      <p className=" max-w-screen-xl text-neutral-300 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Q
          </p>
          {/* <h1 className="text-5xl font-semibold text-center py-4 text-white uppercase">
              Lorem ipsum dolor
            </h1> */}
      </div>
        </div>


        {/* Order Section */}
        <div id="order" className="py-24">
          <h4 className="heading text-center text-orange-400">Lorem ipsum dolor sit.</h4>
          <h2 className="lg:text-4xl text-2xl uppercase font-extralight lg:pt-4 pt-2 text-center">
            Lorem ipsum dolor sit.
          </h2>

          <form className="flex flex-col items-center">
            <div className="flex lg:flex-row flex-col gap-6 w-full justify-center px-2 lg:px-8 py-24">
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
                  Name
                </label>
              </div>
            </div>
            <button className="p-4 px-6 bg-orange-300 text-white text-sm w-fit inline-block border-none outline-none">
              Make Reservation
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
