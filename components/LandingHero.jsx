import clsx from "clsx";
import Button from "./Button";

export default function LandingHero() {
  return (
    <main>
      <section className="flex-col lg:flex lg:flex-row">
        <section className={clsx("mt-10 md:mt-32 md:w-1/2 md:pl-8 lg:pl-14")}>
          <section>
            <article>
              <h2 className="text-lg font-normal md:text-3xl font-montserrat text-blue-gray-900 leading-8 mt-4">
                Encuentra tu lugar favorito
              </h2>
              <h1 className="text-3xl md:text-5xl font-bold	font-montserrat text-blue-gray-900 leading-10 md:mt-2">
                Únete a los
              </h1>
            </article>
            <article className="pl-10">
              <img src="./figure-hero-lines.webp w-1/2" alt="" />
            </article>
          </section>
          <section>
            <h1 className="text-6xl text-blue-gray-900 font-montserrat font-bold lgbtiq-grad-color">
              negocios en racha
            </h1>
          </section>
          <article className="mt-5 font-montserrat text-blue-gray-700">
            <p>Únete a Bee You, una plataforma orientada a personas de la</p>
            <p>
              comunidad LGTBIQ+. ¡Encuentra tus lugares favoritos, eventos de
            </p>
            <p>interés y recibe grandes recompensas!</p>
            <Button
              label="ENCUENTRA TU ESPACIO"
              isSubmit
              style="mt-8 lg:mb-16 lgbtiq-button-two lgbtiq-grad-bg"
            ></Button>
          </article>
        </section>
        <section className="p-8 md:w-6/6 md:mb-14 lg:mt-16">
          <img src="./figure-hero-cards@2x.webp" alt="" />
        </section>
      </section>
    </main>
  );
}
