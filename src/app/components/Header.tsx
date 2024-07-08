import Link from "next/link";
import React from "react";
import { FaCartPlus, FaArrowRightToBracket } from "react-icons/fa6";
import Navlinks from "./Navlinks";
import Pagemessage from "./Pagemessage";
import Cartlogo from "./Cartlogo";

const Header = () => {

  let active = false;

  let links: links = [
    { link: "Home", url: "/" },
    { link: "About", url: "/about" },
    { link: "Our Menu", url: "/menu" },
    { link: "FAQ", url: "/FAQ" },
    { link: "Contact", url: "/contact" },
    { link: "Admin", url: "/admin/dashboard" },
  ];

  return (
    <>
    <header className="bg-white shadow-lg fixed top-0 left-0 z-20 w-full">
      <nav className="lg:p-4 p-2 flex flex-col justify-center">
        <Link
          href="/"
          className="logo text-xl p-2 inline-block text-center font-bold "
        >
          Foodies
        </Link>
      <div className="flex justify-between">

      <div className="hidden lg:block w-32"></div>


      <Navlinks>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="text-gray-600 hover:text-orange-400 p-2 pb-0 text-sm"
            >
              {link.link}
            </Link>
          ))}
        </Navlinks>

        <menu className="flex justify-center gap-2 pe-12 self-end">
         <Cartlogo/>
          <Link
            href="/login"
            className="text-gray-600 hover:text-orange-400 p-2 pb-0 text-lg"
          >
            <FaArrowRightToBracket />
          </Link>

          
        </menu>
        
      </div>
      </nav>
    </header>
    <Pagemessage/>
    </>
  );
};

export default Header;
