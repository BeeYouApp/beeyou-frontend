import Image from "next/image";
import { images } from "../lib/images";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const MobileSidebar = ({ closeSidebar, logout }) => {
  return (
    <section className={clsx("bg-[#000000]/40 h-screen w-screen fixed top-0 left-0 lg:hidden")}>
      <section className={clsx("bg-white max-w-[70%] md:max-w-[35%] p-4 h-full border-2")}>
        <section className={clsx("flex justify-between")}>
          <div className={clsx("flex items-center mb-8")}>
            <Link href="#">
              <Image src={images.beeyouLogo} alt="Bee You Logo" />
            </Link>
          </div>
          <button className={clsx("mb-10")} onClick={() => closeSidebar()}>
            <Image src={images.xMarkIcon} alt="Close Mark Icon" />
          </button>
        </section>
        <section className={clsx("h-[76px] w-[215px] bg-blue-gray-50 text-center rounded-lg flex m-4")}>
          <div className={clsx("w-1/4 ml-5 m-auto")}>
            <div className={clsx("h-10 w-10 bg-[#EFD16B] rounded-full")}>
            </div>
          </div>
          <div className={clsx("w-3/4 mb-auto mt-auto -ml-5 cursor-pointer hover:underline")}>
            <Link href="/user/profile-configuration">
              <p className={clsx("text-base font-poppins font-medium text-blue-gray-900")}>
                Víctor Torres
              </p>
              <p className={clsx("text-[12px] leading-[15px] font-medium font-montserrat text-blue-gray-500")}>
                friend
              </p>
            </Link>
          </div>
        </section>
        <button
          className={clsx("h-[25px] w-[215px] bg-blue-gray-50 rounded-lg font-medium font-montserrat flex justify-center items-center cursor-pointer hover:underline m-4 p-4 text-blue-gray-900")}
          onClick={logout}
          type="reset">
          Cerrar sesión
        </button>
        <section>
          <ul className={clsx("text-blue-gray-500 text-montserrat font-light text-[16px] leading-[24px] w-128 p-2")}>
            <Link href="/user/dashboard">
              <li className={clsx("mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-[#BA9E3A] rounded-lg hover:text-lg")}>
                <svg
                  className={clsx("inline-flex mr-4 hover:fill-red-900")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.5 19.5h3.75v-6.25h5.5v6.25h3.75V9.75L12 4.875 5.5 9.75v9.75zm0 1.5c-.417 0-.77-.146-1.063-.438A1.447 1.447 0 0 1 4 19.5V9.75c0-.233.054-.458.162-.675.109-.217.255-.392.438-.525l6.5-4.875c.133-.1.275-.175.425-.225.15-.05.308-.075.475-.075.167 0 .325.025.475.075.15.05.292.125.425.225l6.5 4.875c.183.133.33.308.438.525.108.217.162.442.162.675v9.75c0 .417-.146.77-.438 1.063A1.446 1.446 0 0 1 18.5 21h-5.25v-6.25h-2.5V21H5.5z"
                    fill="#BA9E3A"
                  />
                </svg>
                Inicio
              </li>
            </Link>
            <Link href="/user/events">
              <li className={clsx("mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-[#BA9E3A] rounded-lg hover:text-lg")}>
                <Image
                  className={clsx(
                    "inline-flex mr-4 hover:file:bg-violet-100")}
                  src={images.eventsIcon}
                  alt="Events Icon"
                />
                Eventos
              </li>
            </Link>
            <Link href="/user/places">
              <li className={clsx("mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-[#BA9E3A] rounded-lg hover:text-lg")}>
                <Image
                  className={clsx("inline-flex mr-4 selection:text-fuchsia-900")}
                  src={images.placesIcon}
                  alt="Places Icon"
                />
                Espacios
              </li>
            </Link>
            <Link href="/user/favorites">
              <li className={clsx("mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-[#BA9E3A] rounded-lg hover:text-lg")}>
                <Image
                  className={clsx("inline-flex mr-4 hover:fill-[#BA9E3A]")}
                  src={images.favoriteIcon}
                  alt="My favourites Icon"
                />
                Mis Favoritos
              </li>
            </Link>
          </ul>
        </section>
        <section className={clsx("block justify-center lgbtiq-grad-bg w-[217px] h-[108px] rounded-lg pl-[1px] pt-[1px] mt-11")}>
          <section className={clsx("bg-yellow-100 text-center rounded-lg flex items-end w-[215px] h-[106px]")}>
            <div className={clsx("m-auto")}>
              <p className={clsx("font-poppins font-medium text-[16px] leading-[17px] text-blue-gray-800 ml-3")}>
                ¡Bienvenid@
              </p>
              <p className={clsx("font-montserrat font-normal text-[14px] leading-[17px] text-blue-gray-600 max-w-[90px] ml-3 text-start")}>
                a tu espacio seguro!
              </p>
            </div>
            <div>
              <Image src={images.friendsFigure} alt="Friends Figure" />
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default function Sidebar() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const closeSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  function logout() {
    localStorage.clear()
    router.reload()
  }

  const router = useRouter();
  if (typeof window !== "undefined") {
    return (
      <>
        <nav className={clsx("w-[247px] p-4 max-lg:hidden")}>
          <section className={clsx("flex justify-center mt-6")}>
            <Image src={images.beeyouLogo} alt="Bee You Logo" />
          </section>
          <section className={clsx("h-[76px] w-[215px] bg-blue-gray-50 text-center rounded-lg flex m-4 mt-7")}>
            <div className={clsx("w-1/4 ml-5 m-auto")}>
              <div className={clsx("h-10 w-10 bg-[#EFD16B] rounded-full")}></div>
            </div>
            <div className={clsx("w-3/4 mb-auto mt-auto -ml-5 cursor-pointer hover:underline")}>
              <Link href="/user/profile-configuration">
                <p className={clsx("text-base font-poppins font-medium text-blue-gray-900")}>
                  Víctor Torres
                </p>
                <p className={clsx("text-[12px] leading-[15px] font-medium font-montserrat text-blue-gray-500")}>
                  friend
                </p>
              </Link>
            </div>
          </section>
          <button
            className={clsx("h-[25px] w-[215px] bg-blue-gray-50 rounded-lg font-medium font-montserrat flex justify-center items-center cursor-pointer hover:underline m-4 p-4 text-blue-gray-900")}
            onClick={logout}
            type="reset">
            Cerrar sesión
          </button>
          <h3 className={clsx("text-xs text-blue-gray-600 font-bold pl-7 pt-8")}>
            GENERAL
          </h3>
          <section>
            <ul className={clsx("text-blue-gray-500 text-montserrat font-light text-[16px] leading-[24px] w-128 p-2")}>
              <Link href="/user/dashboard">
                <li className={clsx("mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-[#BA9E3A] rounded-lg hover:text-lg")}>
                  <Image
                    className={clsx("inline-flex mr-4")}
                    src={images.homeIcon}
                    alt="Home Icon"
                  />
                  Inicio
                </li>
              </Link>
              <Link href="/user/events">
                <li className={clsx("mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-[#BA9E3A] rounded-lg hover:text-lg")}>
                  <Image
                    className={clsx("inline-flex mr-4 hover:file:bg-violet-100")}
                    src={images.eventsIcon}
                    alt="Events Icon"
                  />
                  Eventos
                </li>
              </Link>
              <Link href="/user/places">
                <li className={clsx("mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-[#BA9E3A] rounded-lg hover:text-lg")}>
                  <Image
                    className={clsx("inline-flex mr-4 selection:text-fuchsia-900")}
                    src={images.placesIcon}
                    alt="Places Icon"
                  />
                  Espacios
                </li>
              </Link>
              <Link href="/user/favorites">
                <li className={clsx("mt-3 h-10 pl-7 pt-1 hover:bg-yellow-100 hover:text-[#BA9E3A] rounded-lg hover:text-lg")}>
                  <Image
                    className={clsx("inline-flex mr-4 hover:fill-[#BA9E3A]")}
                    src={images.favoriteIcon}
                    alt="My Favorites Icon"
                  />
                  Mis Favoritos
                </li>
              </Link>
            </ul>
          </section>
          <section className={clsx("block justify-center lgbtiq-grad-bg w-[217px] h-[108px] rounded-lg pl-[1px] pt-[1px] mt-11")}>
            <section className={clsx("bg-yellow-100 text-center rounded-lg flex items-end w-[215px] h-[106px]")}>
              <div className={clsx("m-auto")}>
                <p className={clsx("font-poppins font-medium text-[16px] leading-[17px] text-blue-gray-800 ml-3")}>
                  ¡Bienvenid@
                </p>
                <p className={clsx("font-montserrat font-normal text-[14px] leading-[17px] text-blue-gray-600 max-w-[90px] ml-3 text-start")}>
                  a tu espacio seguro!
                </p>
              </div>
              <div>
                <Image src={images.friendsFigure} alt="Friends Figure" />
              </div>
            </section>
          </section>
        </nav>
        <nav className={clsx("bg-[#ffffff] shadow-lg h-[60px] flex justify-between fixed top-0 w-full space-x-10 sppace-y-4 lg:hidden")}>
          {isMobileSidebarOpen && (
            <MobileSidebar closeSidebar={closeSidebar} logout={logout} />
          )}
          <div className={clsx("flex items-center pl-6")}>
            <Link href="#">
              <Image src={images.beeyouLogo} alt="Bee You Logo" />
            </Link>
          </div>
          <div
            className={clsx("px-4 cursor-pointer flex items-center")}
            onClick={() => { setIsMobileSidebarOpen(true); }}>
            <Link href="#">
              <Image src={images.mobileIcon} alt="Mobile Menu Icon" />
            </Link>
          </div>
        </nav>
      </>
    );
  } else {
    router.push(`/login`);
  };
};