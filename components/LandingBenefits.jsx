import clsx from "clsx";
import Button from "./Button";
import Image from "next/image";
import { images } from "../lib/images";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function LandingBenefits( { id } ) {
  return (
  <div id={id} className="pt-20">
    <section className={clsx("mx-4 md:pl-10 lg:pl-14")}>
      <section className={clsx("flex md:w-full lg:content-center")}>
        <article>
          <h1
            className={clsx(
              "text-3xl md:text-5xl font-montserrat text-blue-gray-900 font-bold mt-0.5"
            )}
          >
            Disfruta de los
          </h1>
          <h1
            className={clsx(
              "text-4xl md:text-5xl font-montserrat text-purple-800 font-bold mt-0.5 leading-tight"
            )}
          >
            beneficios friendly
          </h1>
        </article>
        <article className={clsx("pl-10 w-36 mt-16 md:mt-6")}>
          <Image src={images.benefitsIcon} alt="Figure Benefits" />
        </article>
      </section>
      <article
        className={clsx(
          "text-center md:text-start mt-5 font-montserrat text-blue-gray-700"
        )}
      >
        <p className={clsx("mt-6 md:mb-14 md:max-w-lg lg:mb-16")}>
          ¡Únete a los negocios en Bee You! Forma parte de los negocios y
          organizaciones que apoyan abierta, libre y activamente a la comunidad
          LGBTIQ+.
        </p>

        <section
          className={clsx(
            "md:flex md:flex-nowrap justify-evenly content-center md:mt-4 lg:mt-2"
          )}
        >
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className={clsx("text-center")}>
                <Image
                  className={clsx("mt-10 mb-4 inline-block")}
                  src={images.businessIcon}
                  alt="Business Icon"
                />
                <h2
                  className={clsx(
                    "text-[25px] font-bold font-montserrat text-blue-gray-900"
                  )}
                >
                  +1K negocios
                </h2>
                <p>Incrementa tu visibilidad</p>
                <p>y alcance</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={clsx("mb-16")}>
              <div className={clsx("text-center")}>
                <Image
                  className={clsx("mt-10 mb-4 inline-block")}
                  src={images.loyaltyIcon}
                  alt="Loyalty Icon"
                />
                <h2
                  className={clsx(
                    "text-[25px] font-bold font-montserrat text-blue-gray-900"
                  )}
                >
                  Premiamos tu lealtad
                </h2>
                <p>Obtén magníficos descuentos en</p>
                <p>nuestra app</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={clsx("text-center")}>
                <Image
                  className={clsx("mt-10 mb-4 inline-block")}
                  src={images.calendarIcon}
                  alt="Calendar Icon"
                />
                <h2
                  className={clsx(
                    "text-[25px] font-bold font-montserrat text-blue-gray-900"
                  )}
                >
                  Eventos para ti
                </h2>
                <p>Los mejores eventos en tu</p>
                <p>ciudad estan aquí</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section
          className={clsx(
            "w-full flex flex-nowrap justify-evenly content-center"
          )}
        >
          <Button
            label="¡ÚNETE A BEE YOU+!"
            isSubmit
            style={clsx("mb-10 md:mt-8 lgbtiq-button-two lgbtiq-grad-bg")}
          ></Button>
        </section>
      </article>
    </section>
  </div>
  );
}
