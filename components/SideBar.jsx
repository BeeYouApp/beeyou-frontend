import Image from "next/image"
import { images } from "../lib/images"
import clsx from "clsx"
import Link from "next/link"
import React, { useState } from "react";

const MobileSidebar = ({ closeSidebar }) => {
  return(
    <>
        <section className="'bg-[#ffffff]/40' h-screen w-screen fixed top-0 left-0">
      <section className="bg-white max-w-[50%] p-4 h-full border-2">
        <section className="flex justify-between">
          <div className={clsx("flex items-center mb-8 ")}>
            <Link href="">
              <img src="/logo-beeyou.svg" alt="Logo" />
            </Link>
          </div>
          <button onClick={() => closeSidebar()}>
            <img src="./x-mark.svg" />
          </button>


        </section>
        
        <ul className="blue-gray-700">
          <li>
            <Link href="">Inicio</Link>
          </li>
          <li>
            <Link href="">Beneficios</Link>{" "}
          </li>
          <li>
            <Link href="">Iniciar sesion</Link>{" "}
          </li>
          <button className="mt-5 p-1 rounded-lg border-4 border-rose-500 ">
            Unete a Bee you+!
          </button>
        </ul>
      </section>
    </section>
    
    </>
    

  )
}


export default function Sidebar(){

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const closeSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  return(
    <>
    
    <nav className="w-full p-4 max-xl:hidden">
      {isMobileSidebarOpen && <MobileSidebar closeSidebar={closeSidebar} />}
      
      <section className="h-20 w-10/12 bg-neutral-300 text-center rounded-lg flex m-auto ">
        <div className="w-1/4 ml-5 m-auto">
          <Link href=""><div className="h-16 w-16 bg-red-400 rounded-full"></div></Link>
        </div>
        <div className="w-3/4 mb-auto mt-auto -ml-5">
          <p className="text-base font-poppins font-medium  text-blue-gray-900">Victor Torres</p>
          <p className="text-[12px] leading-[15px] font-medium font-montserrat  text-blue-gray-500">friend</p>
        </div>
      </section>

      <p className=" text-xs text-slate-500 font-medium pl-7 pt-8 ">GENERAL</p>   

      <section>
        <ul className={clsx ("text-slate-500 w-128 p-2 ",)}>
          <Link href=""><li className="mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-[#BA9E3A] rounded-lg hover:text-lg">
            <Image className="inline-flex mr-4" src={images.home} alt="home"/>Inicio</li></Link>
          <Link href=""><li className="mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-[#BA9E3A] rounded-lg hover:text-lg">
            <Image className="inline-flex mr-4 hover:file:bg-violet-100" src={images.events} alt="events"/>Eventos</li></Link>
          <Link href=""><li className="mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-[#BA9E3A] rounded-lg hover:text-lg">
            <Image className="inline-flex mr-4 selection:text-fuchsia-900" src={images.places} alt="places"/>Espacios</li></Link>
          <Link href=""><li className="mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-[#BA9E3A] rounded-lg hover:text-lg">
            <Image className="inline-flex mr-4 hover:fill-[#BA9E3A]" src={images.discounts} alt="discounts"/>Descuentos</li></Link>
          <Link href=""><li className="mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-[#BA9E3A] rounded-lg hover:text-lg">
            <Image className="inline-flex mr-4 hover:fill-[#BA9E3A]" src={images.favorite} alt="mis favoritos"/>Mis Favoritos</li></Link>
        </ul>
      </section>

      <section className="bg-yellow-100 h-auto mt-10 text-center rounded-lg flex m-auto w-10/12 ">
        <div className="m-auto">
          <p className="text-blue-gray-800 ml-3 font-semibold">¡Bienvenido</p>
          <p className="text-blue-gray-600 ml-3">a tu espacio</p>
          <p className="text-blue-gray-600 ml-3">seguro!</p>
        </div>
        <div>
          <Image className="m-4 h-auto w-20" src={images.friends} alt="discounts"/>
            </div>
        </section>
    </nav>

    <nav className={clsx(
      "bg-[#ffffff]",
      "shadow-lg",
      "h-[60px]",
      "flex justify-between fixed top-0",
      "w-full",
      "space-x-10 sppace-y-4 ",
      "xl:hidden",
      "justify-between"	
    )}> 

      <div className={clsx("flex items-center pl-6 ")}>
        <Link href="">
          <img src="/logo-beeyou.svg" alt="Logo" />
        </Link>
      </div>
      <div className={clsx(
        "px-4",
        "cursor-pointer",
        "flex",
        "justify-end",
        "items-center",
       )}
      onClick={() => {
      setIsMobileSidebarOpen(true);
      }}>

        <Link href="">
          <img src="/icon-menu-mobile.svg" alt="menu" />
        </Link>
    </div>
  </nav>
</>
  )
}
