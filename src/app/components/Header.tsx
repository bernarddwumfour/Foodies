import Link from "next/link";
import React from "react";

const Header = () => {

  type links ={link:string,url:string}[]

  let active = false;

  let links:links = [
    {link :"Home",url : "/"},
    {link :"About",url : "/about"},
    {link :"Our Menu",url : "/menu"},
    {link :"FAQ",url : "/FAQ"},
    {link :"Contact",url : "/contact"},
  ]

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 z-20 w-full">
      <nav className="lg:p-4 p-2 flex flex-col justify-center">
        <Link
          href="/"
          className="logo text-xl p-2 inline-block text-center font-bold "
        >
          Foodies
        </Link>
        <div className={`flex justify-between ${active ? " flex-col items-start gap-12 px-4 pb-8" : " px-12"}`}>
          <div></div>

          <menu className={`${active ? "flex flex-col gap-4" : "hidden"}  lg:flex justify-center`}>
          {links.map((link,index)=>( <Link key={index}
              href={link.url}
              className="text-gray-600 hover:text-orange-400 p-2 pb-0 text-sm"
            >
              {link.link}
            </Link>))}
           
          </menu>

          <menu className="flex justify-center">
            <Link
              href="/cart"
              className="text-gray-600 hover:text-orange-400 p-2 pb-0 text-sm"
            >
              #
            </Link>
            <Link
              href="/login"
              className="text-gray-600 hover:text-orange-400 p-2 pb-0 text-sm"
            >
              #
            </Link>
          </menu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
