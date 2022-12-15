import clsx from "clsx";
import Image from "next/image";
import { images } from "../lib/images";
import ButtonPurple from "../components/ButtonPurple";
import CardComment from "../components/CardComment";
import Dropdown from "../components/DropDown";

export default function CardPlacesLg() {
  return (
    <>
      <article className={clsx("md:mt-0 lg:flex rounded-lg shadow-lg bg-white w-[100%] h-[1060px] md:h-[830px] lg:h-[550px] mb-[46px]")}>
        <div className="w-[100%] lg:w-[402px]">
          <Image className={clsx("rounded-t-lg w-[100%] h-[116px] md:w-[100%] md:h-[250px] lg:w-[100%] lg:h-[100%] object-cover")}
            src={images.placeImage}
            alt="Place Image"/>
        </div>
        {/* GREEN */}
        <div className={clsx("px-6 pt-5 pb-4")}>
          {/* 1ST SECTION */}
          <section className={clsx("md:flex md:justify-between")}>
            <section className="md:basis-1/2 lg:basis-7/12">
              <div className="md:flex">
                <div>
                  <h5 className={clsx("text-blue-gray-900 text-[24px] font-bold leading-[30px]")}>
                    Cielito Querido
                  </h5>
                  <span className={clsx("mt-1.5 md:mt-1")}>☆☆☆☆☆</span>
                </div>
                <div className="md:flex md:flex-col md:self-end lg:ml-14">
                  <h6 className={clsx("text-[10px] font-light leading-[12px] aling-items self-end")}>
                  <span className={clsx("inline-block self-center text-blue-gray-500 text-[10px] leading-[12px] mr-1")}>
                    100% FRIENDLY
                  </span>
                  <Image className={clsx("inline-block")} src={images.verifiedIcon} alt="Verified Place Icon" />
                  </h6>
                  <h6 className={clsx("hidden md:block text-[10px] font-light leading-[12px] aling-items self-end")}>
                  <span className={clsx("md:inline-block  self-center text-blue-gray-500 text-[10px] leading-[12px] mr-1")}>
                    NEGOCIO EN RACHA
                  </span>
                  <Image className="md:inline-block " src={images.streakIcon} alt="Streak Icon" />
                  </h6>
                </div>
              </div>
              <p
                className={clsx("text-blue-gray-700 text-[14px] font-light leading-[21px] max-w-[255px] lg:max-w-[328px] mb-4 lg:mb-4 mt-4 lg:mt-4")}>
                CIELITO ® es un refugio único que inspirado en nuestra historia
                y calidez latina, reinventa la experiencia de “tomar café"...
              </p>
            </section>

            <section className={clsx("flex font-montserrat font-medium text-blue-gray-500 text-[10px] leading-[12px] gap-x-[47px] lg:basis-5/12")}>
              {/* ORANGE */}
              <div className="md:basis-1/2">
                <h6>TAGS RELACIONADOS</h6>
                <ul className={clsx("mt-3")}>
                  <li className={clsx("mb-3")}>
                    <Image className={clsx("inline-block mr-2")} src={images.tagIcon} alt="Tag Icon"/>
                    LGBT
                  </li>
                  <li className={clsx("mb-3")}>
                    <Image className={clsx("inline-block mr-2")} src={images.tagIcon} alt="Tag Icon"/>
                    Café
                  </li>
                  <li className={clsx("mb-[18px]")}>
                    <Image className={clsx("inline-block mr-2")} src={images.tagIcon}alt="Tag Icon"/>
                    Descuentos
                  </li>
                </ul>
              </div>
              {/* ORANGE */}
              <div className="md:basis-1/2">
                <h6>HORARIOS</h6>
                <ul className={clsx("mt-3")}>
                  <li className={clsx("mb-3")}>
                    <Image className={clsx("inline-block mr-2")} src={images.dateIcon} alt="Date Icon"/>
                    D, L, M, X, J, V, S
                  </li>
                  <li className={clsx("mb-3")}>
                    <Image className={clsx("inline-block mr-2")} src={images.openClockIcon} alt="Open Clock Icon"/>
                    1:00 pm
                  </li>
                  <li className={clsx("mb-[18px]")}>
                    <Image className={clsx("inline-block mr-2")} src={images.closeClockIcon} alt="Close Clock Icon"/>
                    12:00 am
                  </li>
                </ul>
              </div>
            </section>
          </section>
          {/* 2ND SECTION */}
          <section className={clsx("md:flex md:justify-between font-montserrat font-normal text-blue-gray-600 text-[12px] leading-[15px]")}>
            <Dropdown>
              <Image className={clsx("mr-2")} src={images.offerIcon} alt="Offer Icon"/>
              10% de descuento en todas...
            </Dropdown>
            <Dropdown>
              <Image className={clsx("mr-2")} src={images.pinIcon} alt="Pin Icon"/>
              Juárez, 06600 Ciudad de Méxi...
            </Dropdown>
          </section>
          {/* 3RD SECTION */}
          <section className={clsx("md:flex md:justify-between mt-7 md:mt-6")}>
            <div className={clsx("flex justify-center bg-blue-gray-50 py-1 px-4 rounded-full mb-3 md:mb-0 w-[163px]")}>
              <Image src={images.reviewsIcon} alt="Reviews Place Icon" />
              <h5 className={clsx("font-montserrat font-medium text-blue-gray-800 text-[16px] leading-[19.5px] ml-3")}>
                Reviews (10)
              </h5>
            </div>
            <div className={clsx("max-w-[292px]")}>
              <ButtonPurple
                label="DEJAR UN COMENTARIO">
              </ButtonPurple>
            </div>
          </section>
          {/* 4TH SECTION */}
          <section className={clsx("flex flex-col md:flex md:justify-between mt-4")}>
            <section className={clsx("mb-3")}>
              <CardComment />
            </section>
            <section>
              <CardComment />
            </section>
          </section>
        </div>
      </article>
    </>
  );
}
