import clsx from "clsx";
import Button from "./Button";
import Image from "next/image";
import { images } from "../lib/images";

export default function LandingHero() {
  return (
    <main>
      <section className={clsx("flex flex-col lg:flex-row mx-4")}>
        <section className={clsx("text-center md:text-start mt-10 md:mt-32 md:pl-8 lg:pl-14 lg:mt-[229px]")}>
          <section className={clsx("md:flex")}>
            <article>
              <h2 className={clsx("text-center md:text-start text-lg font-normal md:text-2xl font-montserrat text-blue-gray-900 mt-14 md:mt-0")}>
                Encuentra tu lugar favorito
              </h2>
              <h1 className={clsx("text-[32px] md:text-[56px] font-bold	font-montserrat text-blue-gray-900 mt-4 md:mt-0 leading-tight")}>
                Únete a los
              </h1>
            </article>
            <article>
              <Image
                className={clsx("hidden md:block md:ml-14")}
                src={images.heroIcon}
                alt="Figure Hero Lines"
              />
            </article>
          </section>
          <section>
            <h1 className={clsx("text-[40px] md:text-[54px] font-montserrat font-bold lgbtiq-grad-color leading-tight")}>
              negocios en racha
            </h1>
          </section>
          <article
            className={clsx("mt-5 font-montserrat text-blue-gray-700 md:max-w-lg lg:mt-8")}>
            <p>
              Únete a Bee You, una plataforma orientada a personas de la
              comunidad LGTBIQ+. ¡Encuentra tus lugares favoritos, eventos de
              interés y recibe grandes recompensas!
            </p>
            <Button
              label="ENCUENTRA TU ESPACIO"
              isSubmit
              style={clsx("mt-8 lg:mb-16 lg:mt-[46px] lgbtiq-button-two lgbtiq-grad-bg")}>
            </Button>
          </article>
        </section>
        <section className={clsx("flex items-end p-8 md:w-6/6 md:mb-20 lg:w-3/6 lg:mt-[100px] lg:ml-32")}>
          <Image src={images.heroCards} alt="Figure Hero Cards" />
        </section>
      </section>
    </main>
  );
}
