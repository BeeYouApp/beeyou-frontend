import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

const MobileSidebar = ({ closeSidebar }) => {
  return (
    <section className="bg-black bg-opacity-40 h-screen w-screen fixed top-0 left-0">
      <section className="bg-white max-w-[65%] p-4 h-full">
        <section className="flex justify-between">
          <h1 className="font-bold text-lg mb-4">Bee you!!</h1>
          <button onClick={() => closeSidebar()}>
           <img src="./x-mark.svg" />
          </button>
        </section>
        <ul>
            <li><Link href="">Inicio</Link></li>
            <li><Link href="">Beneficios</Link> </li>
            <li><Link href="" >Iniciar sesion</Link> </li>
        </ul>
      </section>
    </section>
  );
};
export default function Navbar(){
const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

const closeSidebar = () => {
  setIsMobileSidebarOpen(false);
};

  return(
    <>
      <nav className={clsx(
        'bg-[#ffffff]/40',
        'shadow-xl',
        'h-[60px]',
        'flex justify-between fixed top-0',
        'z-40',
        'w-full',
        'space-x-10 sppace-y-4  ')}>
          {isMobileSidebarOpen && <MobileSidebar closeSidebar={closeSidebar} />}
        <div className={clsx('flex items-center pl-6 ')}>
          <Link href=''>
            <img src="/logo-beeyou.svg" alt="Logo" />
          </Link>
        </div>
        <div className="flex items-center text-neutral-700 font-bold max-lg:hidden">
          <a className="m-6" href="">Inicio</a>
          <a className="m-6" href="">Beneficios</a>
          <a className="m-6" href="">Iniciar sesion</a>
          <button className="m-6 p-2 rounded-lg border-4 border-rose-500 ">Unete a Bee you+!</button>  
        </div>
        <div className={clsx(
          "px-4", 
          "cursor-pointer",
          "flex", 
          "justify-end", 
          "items-center", 
          "lg:hidden"
          )}
          onClick={()=>{
            setIsMobileSidebarOpen(true);
          }}> 
          <Link href=''>
            <img src="/icon-menu-mobile.svg" alt="menu" />
          </Link> 
        </div>
      </nav>  
    </>
  )
}