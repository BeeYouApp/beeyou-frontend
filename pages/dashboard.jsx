import clsx from "clsx";
import React from "react";

export default function Dashboard () {
  return(
    <>
      <nav className="h-[60px] w-full bg-emerald-300 gap-4"></nav>
      <div className="grid grid-flow-col grid-cols-6 h-screen">
        <div className="bg-pink-100 row-span-6">Aqui va el aside</div>
        <div className="bg-blue-500 col-span-5 row-span-3 ">
          <h1 className="ml-16 mb-5 mt-5">Friendly espacios</h1>
          <div className=" w-11/12 h-5/6 bg-neutral-600 radaial-2 m-auto rounded-2xl">

          </div>
        </div>
        <div className="bg-red-300 col-span-5 ">Aqui van los botones</div>
        <div className="bg-red-600 col-span-5 row-span-2">Aqui van las cards</div>
      </div>
    </>
  )
}