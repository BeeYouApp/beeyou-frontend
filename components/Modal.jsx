import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { images } from "../lib/images";
import React, { useState } from "react";

export default function Modal( { isOpen, onRequestClose, children } ) {

  const classes = { openModal:"flex" }


  return (
    
    <section     
        isOpen={isOpen}
        onRequestClose={onRequestClose} 
        className={clsx("absolute top-0 left-0 hidden justify-center items-center h-screen w-screen bg-[#000000]/50")}>
        
      <article className={clsx("card #FFFFFF w-[328px] md:w-[581px] h-[713px] md:h-[544px] mx-4 mt-[84px] px-3.5 md:px-[32px] py-8")}>

        {children}

      </article>
    </section>
  );
}