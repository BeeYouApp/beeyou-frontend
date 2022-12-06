import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { images } from "../lib/images";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TableFavorites from "../components/TableFavorites";
import CardFavoritesSm from "../components/CardFavoritesSm";

export default function Favorites() {
  return (
    <section>
      <div className={clsx("block lg:hidden")}>
        <Navbar />
      </div>
      <div className={clsx("flex")}>
        <Sidebar />
        {/* <article>
          <div className={clsx("w-[247px] h-[745px] bg-blue-gray-100 hidden lg:block")}></div>
        </article> */}
        <article className={clsx("px-4 md:px-8 mt-24 lg:mt-14")}>
          <h3 className={clsx("font-montserrat font-bold text-blue-gray-900 text-[24px] leading-[30px]")}>
            Tus favoritos
          </h3>
          <section className={clsx("flex items-center mt-4 mb-5")}>
            <Image
              className={clsx("")}
              src={images.favPlaceIcon}
              alt="Favorite Place Icon"
            />
            <h4 className={clsx("font-montserrat font-normal text-blue-gray-700 text-[20px] leading-[28px] ml-6")}>
              Tus eventos favoritos
            </h4>
          </section>
          <section className={clsx("md:flex lg:ml-16 xl:ml-0 xl:justify-evenly")}>
            <div className={clsx("md:flex justify-center")}>
              <section className={clsx("hidden md:flex md:items-center md:mr-[65px] lg:mr-2")}>
                <Image
                  className={clsx("")}
                  src={images.leftArrow}
                  alt="Left Arrow Icon"
                />
              </section>
              <CardFavoritesSm />
            </div>
            <div className={clsx("hidden md:block")}>
              <CardFavoritesSm />
            </div>
            <div className={clsx("hidden xl:block")}>
              <CardFavoritesSm />
            </div>
            <div className={clsx("hidden xl:block")}>
              <CardFavoritesSm />
            </div>
            <section className={clsx("hidden md:flex md:items-center md:ml-[65px] lg:ml-2")}>
              <Image
                className={clsx("")}
                src={images.rightArrow}
                alt="Right Arrow Icon"
              />
            </section>
          </section>

          <section className={clsx("md:hidden")}>
            <section className={clsx("flex ml-52 mt-6")}>
              <Image
                className={clsx("")}
                src={images.leftArrow}
                alt="Left Arrow Icon"
              />
              <Image
                className={clsx("ml-10")}
                src={images.rightArrow}
                alt="Right Arrow Icon"
              />
            </section>
          </section>
          <section>
            <section className={clsx("flex items-center mt-10 mb-6")}>
              <Image src={images.savePlacesIcon} alt="Save Places Icon" />
              <h4 className={clsx("font-montserrat font-normal text-blue-gray-700 text-[20px] leading-[28px] ml-6")}>
                Descuentos guardados
              </h4>
            </section>
            <div className={clsx("flex flex-col")}>
              <TableFavorites />
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}
