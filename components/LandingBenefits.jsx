import clsx from "clsx";
import Button from "./Button";
import Image from "next/image";
import { images } from "../lib/images";

export default function LandingBenefits() {
  return (
    <section className={clsx("mx-4 md:pl-10 lg:pl-14")}>
      <section className="flex lg:content-center md:w-full">
        <article>
          <h1 className="text-3xl md:text-5xl font-montserrat text-blue-gray-900 font-bold mt-0.5">
            Disfruta de los
          </h1>
          <h1 className="text-4xl md:text-5xl font-montserrat text-purple-800 font-bold mt-0.5 leading-tight">
            beneficios friendly
          </h1>
        </article>
        <article className="pl-10 w-36 mt-16 md:mt-6">
          <Image src={images.benefitsIcon} alt="Figure Benefits" />
        </article>
      </section>
      <article className="text-center md:text-start mt-5 font-montserrat text-blue-gray-700">
        <p className="mb-10 md:mb-14 md:max-w-lg lg:mb-16">
          ¡Únete a los negocios en Bee You! Forma parte de los negocios y
          organizaciones que apoyan abierta, libre y activamente a la comunidad
          LGBTIQ+.
        </p>
        <section className="flex flex-nowrap justify-evenly content-center mt-10 md:mt-4 lg:mt-2">
          <div className="text-center invisible lg:visible">
            <Image
              className="ml-6 md:ml-14"
              src={images.businessIcon}
              alt="Business icon"
            />
            <h2 className="text-[25px] font-bold font-montserrat text-blue-gray-900">
              +1K negocios
            </h2>
            <p>Incrementa tu visibilidad</p>
            <p>y alcance</p>
          </div>
          <div className="text-center">
            <Image
              className="ml-6 md:ml-20"
              src={images.loyaltyIcon}
              alt="Loyalty icon"
            />
            <h2 className="text-[25px] font-bold font-montserrat text-blue-gray-900">
              Premiamos tu lealtad
            </h2>
            <p>Obtén magníficos descuentos en</p>
            <p>nuestra app</p>
          </div>
          <div className="text-center invisible lg:visible">
            <Image
              className="ml-6 md:ml-14"
              src={images.calendarIcon}
              alt="Calendar icon"
            />
            <h2 className="text-[25px] font-bold font-montserrat text-blue-gray-900">
              Eventos para ti
            </h2>
            <p>Los mejores eventos en tu</p>
            <p>ciudad estan aquí</p>
          </div>
        </section>

        <section className="w-full flex flex-nowrap justify-evenly content-center">
          <Button
            label="¡ÚNETE A BEE YOU+!"
            isSubmit
            style="md:mt-8 lgbtiq-button-two lgbtiq-grad-bg"
          ></Button>
        </section>
      </article>
    </section>
  );
}
