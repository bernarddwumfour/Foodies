"use client"
import React, { ReactNode, createContext, useState } from "react";

  type appcontext = {
    navopen: boolean,
    togglenav :()=>void,
  }

  export const Appcontext = createContext<appcontext>({
    navopen :false,
    togglenav : ()=>{},
  });

const Appcontextprovider = ({children}:{children:ReactNode}) => {

  const [navopen,setnavopen] = useState(false)

  const togglenav = () =>{
    setnavopen(prev => !prev)
  }


  return <Appcontext.Provider value={
    {navopen:navopen,
    togglenav,
  }
  }>
    {children}
  </Appcontext.Provider>;
};

export default Appcontextprovider;
