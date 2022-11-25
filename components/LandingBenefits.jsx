import clsx from "clsx";
import Button from "./Button";
import Image from "next/image";
import { images } from "../lib/images";

export default function LandingBenefits() {
  return (
    <section className={clsx("md:pl-10 lg:pl-14")}>
      <section className="flex lg:content-center md:w-full">
        <article>
          <h1 className="text-5xl font-montserrat text-blue-gray-900 font-bold mt-6">
            Disfruta de los
          </h1>
          <h1 className="text-5xl font-montserrat text-purple-800 font-bold mt-6">
            beneficios friendly
          </h1>
        </article>
        <article className="pl-10">
          <img src="./figure-benefits.svg" alt="" />
        </article>
      </section>

      <article className="mt-5 font-montserrat text-blue-gray-700">
        <p>¡Únete a los negocios en Bee You! Forma parte de los negocios y</p>
        <p>organizaciones que apoyan abierta, libre y activamente a la</p>
        <p>comunidad LGBTIQ</p>
        <section className="flex flex-nowrap justify-evenly content-center mt-16">
          <div className="text-center invisible md:visible">
            <Image src={images.businessIcon} alt="Business icon" />
            <h2 className="text-[25px] font-bold font-montserrat text-blue-gray-900">
              +1K negocios
            </h2>
            <p>Incrementa tu visibilidad</p>
            <p>y alcance</p>
          </div>
          <div className="text-center">
            <Image src={images.loyaltyIcon} alt="Loyalty icon" />
            <h2 className="text-[25px] font-bold font-montserrat text-blue-gray-900">
              Premiamos tu lealtad
            </h2>
            <p>Obtén magníficos descuentos en</p>
            <p>nuestra app</p>
          </div>
          <div className="text-center invisible md:visible">
            <Image src={images.calendarIcon} alt="Calendar icon" />
            <h2 className="text-[25px] font-bold font-montserrat text-blue-gray-900">
              Eventos para ti
            </h2>
            <p>Los mejores eventos en tu</p>
            <p>ciudad estan aquí</p>
          </div>
        </section>

        <section className="w-full flex justify-items-center">
          <Button
            label="¡ÚNETE A BEE YOU+!"
            isSubmit
            style="mt-8 lgbtiq-button-two lgbtiq-grad-bg"
          ></Button>
        </section>
      </article>
    </section>
  );
}
