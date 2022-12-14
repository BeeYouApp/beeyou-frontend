import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import Image from "next/image";
import { images } from "../../lib/images";
import Sidebar from "../../components/Sidebar";
import TableFavorites from "../../components/TableFavorites";
import CardFavoritesSm from "../../components/CardFavoritesSm";

export default function Favorites() {
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => { setHasMounted(true) }, []);
  if (!hasMounted) {
    return null;
  }

  if (typeof window !== "undefined") {
    if (localStorage.getItem("token")) {
      return (
        <section>
          <div className={clsx("flex")}>
            <Sidebar />
            <article className={clsx("px-4 md:px-8 mt-24 md:mt-24 lg:mt-24 xl:mt-10")}>
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
    } else {
      router.push(`/login`);
    }
  }
}