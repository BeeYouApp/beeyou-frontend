import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { images } from "../lib/images";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CardPlacesSm from "../components/CardPlacesSm";
import CardPlacesLg from "../components/CardPlacesLg";

export default function PlacesPage() {
  return (
    <>
    <div className="block lg:hidden">
      <Navbar />
    </div>
      <div className="flex">
      <article>
        <div className="w-[247px] h-[745px] bg-blue-gray-100 hidden lg:block"></div>
      </article>
      <article className={clsx("px-4 md:px-8 mt-24 lg:mt-14")}>
        <div className="flex">
          <h3 className={clsx("font-montserrat font-bold text-blue-gray-900 text-[24px] leading-[30px] mr-[79px]")}>
            Tus espacios
          </h3>
          <div className={clsx("hidden lg:flex justify-center items-center bg-blue-gray-50 rounded-full w-[129px]")}>
            <h5 className={clsx("font-montserrat font-medium text-blue-gray-800 text-[10px] leading-[12px] mr-1")}>
              100% FRIENDLY
            </h5>
            <Image className="w-[20px] h-[20px]" src={images.verifiedIcon} alt="Verified Icon" />
          </div>
        </div>
        <section className={clsx("flex items-center mt-4 mb-5")}>
          <Image src={images.favPlaceIcon} alt="Favourite Place Icon" />
          <h4 className={clsx("font-montserrat font-normal text-blue-gray-700 text-[20px] leading-[28px] ml-6")}>
            Espacios en racha
          </h4>
        </section>
        <section className={clsx("md:flex md:justify-evenly")}>
          <div className={clsx("flex justify-center")}>
            <section className={clsx("hidden md:flex md:items-center md:mr-[65px]")}>
              <Image src={images.leftArrow} alt="Left Arrow Icon" />
            </section>
            <div className={clsx("max-w-sm mr-4 md:mr-5")}>
              <a href="#!">
                <CardPlacesSm />
              </a>
            </div>
            <div className={clsx("max-w-sm md:mr-5")}>
              <a href="#!">
                <CardPlacesSm />
              </a>
            </div>
          </div>
          <div className={clsx("hidden md:block")}>
            <div className={clsx("max-w-sm md:mr-5")}>
              <a href="#!">
                <CardPlacesSm />
              </a>
            </div>
          </div>
          <div className={clsx("hidden lg:block")}>
            <div className={clsx("max-w-sm md:mr-5")}>
              <a href="#!">
                <CardPlacesSm />
              </a>
            </div>
          </div>
          <section className={clsx("hidden md:flex md:items-center md:ml-[45px]")}>
            <Image src={images.rightArrow} alt="Right Arrow Icon" />
          </section>
        </section>
        <section className={clsx("md:hidden")}>
          <section className={clsx("flex justify-end mt-6")}>
            <Image src={images.leftArrow} alt="Left Arrow Icon" />
            <Image className={clsx("ml-10")} src={images.rightArrow} alt="Right Arrow Icon" />
          </section>
        </section>
        <section className={clsx("lg:flex lg:items-center lg:justify-between")}>
          <section className={clsx("flex items-center mt-10 mb-5")}>
            <Image src={images.locateIcon} alt="Friendly Places Icon" />
            <h4 className={clsx("font-montserrat font-normal text-blue-gray-700 text-[20px] leading-[28px] ml-5")}>
              Espacios friendly
            </h4>
            <div className={clsx("md:flex md:items-center text-center")}>
              <p className={clsx("font-montserrat font-bold text-[#FFFFFF] text-[12px] leading-4 bg-green-900 rounded-full ml-3 px-3 py-1")}>
                Cerca de ti
              </p>
            </div>
          </section>
          <label className={clsx("relative text-gray-400 focus-within:text-gray-600 block")}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={clsx("pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3")}
              viewBox="-10 -10 85 85"
              fill="currentColor"
            >
              <path
                d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
                    c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
                    C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
                    S32.459,40,21.983,40z"
              />
            </svg>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Busca tu espacio..."
              className={clsx("font-montserrat form-input rounded-lg border border-gray-200 py-3 bg-white font-light placeholder-blue-gray-500 text-blue-gray-500 appearance-none w-full lg:w-[320px] block pl-16 focus:outline-none")}/>
          </label>
        </section>
        <div className={clsx("flex flex-col")}>
          <div className={clsx("overflow-x-auto sm:-mx-6 lg:-mx-8")}>
            <div className={clsx("py-4 inline-block min-w-full sm:px-6 lg:px-8")}>
              <Image className={clsx("rounded-md lg:w-screen")} src={images.mapsImg} alt="Maps Image Example" />
            </div>
          </div>
        </div>
        <CardPlacesLg></CardPlacesLg>
      </article>
      </div>
    </>
  );
}
