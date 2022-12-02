import React from "react";
import Image from "next/image";
import { images } from "../lib/images";

import clsx from "clsx";
import Link from "next/link";

export default function Sidebar(){
    return(
        <aside className="w-full p-4">
          <div>
            <div className="
              inline-flex
              bg-neutral-200
              h-20
              mt-10
              hover:bg-yellow-100
              text-center text-blue-gray-900 hover:text-yellow-900 p-6
              rounded-lg">
              <p className="w-10 h-10 bg-red-600 rounded-full">VT</p>
              <Link href=""><strong className={clsx ("ml-[18px] h-6 w-28 in")}>Víctor Torres</strong></Link>
              <span className="text-blue-gray-500 h-3.5 w-9">friend</span>
            </div>
            
            <p ClassName="text-slate-500 font-light">GENERAL</p>   
            
            <div>
              <ul className={clsx (
                "text-slate-500 w-128",
                "p-2",
                "",
                )}>
                <Link href=""><li className="mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-yellow-700 rounded-md"><Image className="inline-flex mr-4" src={images.home} alt="home"/>Inicio</li></Link>
                <Link href=""><li className="mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-yellow-700 rounded-md "><Image className="inline-flex mr-4 hover:file:bg-violet-100" src={images.events} alt="events"/>Eventos</li></Link>
                <Link href=""><li className="mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-yellow-700 rounded-md"><Image className="inline-flex mr-4 selection:text-fuchsia-900" src={images.places} alt="places"/>Espacios</li></Link>
                <Link href=""><li className="mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-yellow-700 rounded-md"><Image className="inline-flex mr-4 " src={images.discounts} alt="discounts"/>Descuentos</li></Link>
                <Link href=""><li className="mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-yellow-700 rounded-md"><Image className="inline-flex mr-4" src={images.favorite} alt="mis favoritos"/>Mis Favoritos</li></Link>
              </ul>
            </div>
            
            <div className="bg-yellow-100 m-3 mt-10 rounded-md inline-flex border-[gradient-lgbt]">
              <div className="m-auto">
                <h3 className="text-blue-gray-800 ml-3 font-semibold">¡Bienvenido</h3>
                <h4 className="text-blue-gray-600 ml-3">a tu espacio</h4>
                <h4 className="text-blue-gray-600 ml-3">seguro!</h4>
              </div>
              
              <div>
                <Image className="m-3 w-20" src={images.friends} alt="discounts"/>
              </div>

            </div>

          </div>
        </aside>
    )
}
