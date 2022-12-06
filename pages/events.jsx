import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { images } from "../lib/images";
import Sidebar from "../components/Sidebar";
import TableEvents from "../components/TableEvents";
import CardEventsSm from "../components/CardEventsSm";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";

export default function Events() {
  return (
    <section>
      <div className={clsx("flex")}>
        <Sidebar />
        <article className={clsx("w-screen h-screen px-4 md:px-8 mt-24 lg:mt-14")}
        >
          {/* <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              360: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              }
            }}
            className={clsx("md:max-w-mb-[30px]")}
          > */}
          <h3 className={clsx("font-montserrat font-bold lg:mt-10 xl:mt-0 text-blue-gray-900 text-[24px] leading-[30px]")}>
            Tus eventos
          </h3>
          <section className={clsx("flex items-center mt-4 mb-5")}>
            <Image
              className={clsx("")}
              src={images.nearEventIcon}
              alt="Near Event Icon"
            />
            <h4
              className={clsx("font-montserrat font-normal text-blue-gray-700 text-[20px] leading-[28px] ml-6")}>
              Tus eventos cercanos
            </h4>
          </section>
          <section className={clsx("md:flex lg:ml-16 xl:ml-0 xl:justify-evenly")}>
            <div className={clsx("md:flex justify-center")}>
              <section
                className={clsx("hidden md:flex md:items-center lg:justify-end md:mr-[65px] lg:mr-0.5")}>
                <Image
                  className={clsx("")}
                  src={images.leftArrow}
                  alt="Left Arrow Icon"
                />
              </section>
              <CardEventsSm />
            </div>
            <div className={clsx("hidden md:block")}>
              <CardEventsSm />
            </div>
            <div className={clsx("hidden lg:block")}>
              <CardEventsSm />
            </div>
            <div className={clsx("hidden xl:block")}>
              <CardEventsSm />
            </div>
            <div className={clsx("hidden 2xl:block")}>
              <CardEventsSm />
            </div>
            <div className={clsx("hidden 2xl:block")}>
              <CardEventsSm />
            </div>
            <div className={clsx("hidden 2xl:block")}>
              <CardEventsSm />
            </div>
            <div className={clsx("hidden 2xl:block")}>
              <CardEventsSm />
            </div>
            <section
              className={clsx("hidden md:flex md:items-center md:ml-[65px] lg:-ml-1 xl:-ml-2")}>
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
              <Image src={images.allEventsIcon} alt="All Events Icon" />
              <h4
                className={clsx("font-montserrat font-normal text-blue-gray-700 text-[20px] leading-[28px] ml-6")}>
                Todos tus eventos
              </h4>
            </section>
            <div className={clsx("flex flex-col")}>
              <TableEvents />
            </div>
          </section>
          {/* </Swiper> */}
        </article>
      </div>
    </section>
  );
}
