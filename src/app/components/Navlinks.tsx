"use client";
import React, { ReactNode, useContext, useEffect } from "react";
import { Appcontext } from "../context/Appcontextprovider";
import { IoMenu } from "react-icons/io5";


const Navlinks = ({ children }: { children: ReactNode }) => {
    const {navopen , togglenav } = useContext(Appcontext)
      

  return (
    <div
      className={`flex flex-row justify-between  ${
        navopen ? " flex-col items-start gap-12 px-4 pb-8" : " px-4 lg:px-12"
      }`}
    >

      <menu
        className={`${
          navopen ? "flex flex-col gap-4" : "hidden"
        }  lg:flex justify-center`}
      >
      {children}
      </menu>

      <span className="lg:hidden fixed z-20 top-14 right-4 " onClick={()=>togglenav()}>
            <IoMenu />
          </span>

    </div>
  );
};

export default Navlinks;
