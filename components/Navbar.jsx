import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { images } from "../lib/images";

const MobileSidebar = ({ closeSidebar }) => {
  return (
    <section
      className={clsx("bg-[#000000]/40 h-screen w-screen fixed top-0 left-0 lg:hidden")}>
      <section className={clsx("bg-white max-w-[70%] md:max-w-[35%] p-4 h-full border-2")}>
        <section className={clsx("flex justify-between")}>
          <div className={clsx("flex items-center mb-8")}>
            <Link href="">
              <Image src={images.beeyouLogo} alt="Bee You Logo" />
            </Link>
          </div>
          <button className={clsx("mb-10")} onClick={() => closeSidebar()}>
            <Image src={images.xMarkIcon} alt="X Mark Icon" />
          </button>
        </section>
        <ul className={clsx("font-montserrat text-sm text-blue-gray-700")}>
          <li className={clsx("pl-6 overflow-hidden hover:opacity-90 hover:rounded hover:w-56 hover:h-7 transition duration-300 ease-in-out hover:bg-blue-gray-50")}>
            <Link className={clsx("align-middle")} href="">
              Inicio
            </Link>
          </li>
          <li className={clsx("pl-6 overflow-hidden hover:opacity-90 hover:rounded hover:w-56 hover:h-7 transition duration-300 ease-in-out hover:bg-blue-gray-50 mt-4")}>
            <Link>Beneficios</Link>{" "}
          </li>
          <li className={clsx("pl-6 overflow-hidden hover:opacity-90 hover:rounded hover:w-56 hover:h-7 transition duration-300 ease-in-out hover:bg-blue-gray-50 mt-4")}>
            <Link href="/login">Iniciar sesión</Link>{" "}
          </li>
          <button className={clsx("font-montserrat text-sm font-semibold mt-5 w-56 p-1 rounded-lg border-x border-y lgbtiq-grad-color")}>
            {" "}
            <Link href="/register">
              <Image
                className={clsx("inline-block mr-4")}
                src={images.joinIcon}
                alt="Join Icon"
              />
              Únete a Bee you+!
            </Link>
          </button>
        </ul>
      </section>
    </section>
  );
};
export default function Navbar() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const closeSidebar = () => { setIsMobileSidebarOpen(false); };

  return (
    <>
      <nav
        className={clsx(
          "bg-[#ffffff]",
          "shadow-lg",
          "h-[60px]",
          "flex justify-between fixed top-0",
          "z-40",
          "w-full",
          "space-x-10 sppace-y-4  "
        )}
      >
        {isMobileSidebarOpen && <MobileSidebar closeSidebar={closeSidebar} />}
        <div className={clsx("flex items-center pl-6")}>
          <Link href="/">
            <Image src={images.beeyouLogo} alt="Bee You Logo" />
          </Link>
        </div>
        <div className={clsx("flex items-center font-montserrat text-sm text-blue-gray-700 max-lg:hidden")}>
          <button className={clsx("overflow-hidden hover:opacity-90 hover:rounded px-6 py-2 transition duration-300 ease-in-out hover:bg-blue-gray-50")} href="">
            <Link href="/">Inicio</Link>
          </button>
          <button className={clsx("overflow-hidden hover:opacity-90 hover:rounded px-6 py-2 transition duration-300 ease-in-out hover:bg-blue-gray-50")} href="">
            <Link href="/#benefits">Beneficios</Link>
          </button>
          <button
            className={clsx("overflow-hidden hover:opacity-90 hover:rounded px-8 py-2 transition duration-300 ease-in-out hover:bg-blue-gray-50")} href="">
            <Link href="user/login">Iniciar sesión</Link>
          </button>
          <button
            className={clsx("font-montserrat text-sm font-semibold m-6 w-56 p-2 rounded-lg border-x border-y lgbtiq-grad-color")}>
            <Link href="/user/register">
              <Image
                className={clsx("inline-block mr-4")}
                src={images.joinIcon}
                alt="Join Icon"
              />
              Únete a Bee you+!
            </Link>
          </button>
        </div>
        <div
          className={clsx(
            "px-4",
            "cursor-pointer",
            "flex",
            "justify-end",
            "items-center",
            "lg:hidden"
          )}
          onClick={() => { setIsMobileSidebarOpen(true); }}>
          <div className={clsx("hidden md:mr-4 md:mb-5 md:block")}>
            <button className={clsx("font-montserrat text-sm font-semibold mt-5 w-56 p-1 rounded-lg border-x border-y lgbtiq-grad-color")}>
              {" "}
              <Link href="/user/register">
                <Image
                  className={clsx("inline-block mr-4 outline-[lgbtiq-grad-color]")}
                  src={images.joinIcon}
                  alt="Join Icon"
                />
                Únete a Bee you+!
              </Link>
            </button>
          </div>
          <Link href="">
            <Image src={images.mobileIcon} alt="Mobile Menu Icon" />
          </Link>
        </div>
      </nav>
    </>
  );
}
