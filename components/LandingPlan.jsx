import clsx from "clsx"; // Organize CSS code into the archives
import Image from "next/image";
import { images } from "../lib/images";

export default function LandingPlan() {
  console.log(images)
  return (
    <>
      <section className={clsx("p-4")}>
        <div className="relative">
          <h2
            className={clsx("text-left text-3xl text-blue-gray-900 font-montserrat font-bold mt-6 mb-2")}>
            ¡Únete ahora! y...
          </h2>
          <h2
            className={clsx("text-left text-4xl text-green-900 font-montserrat font-semibold mb-2")}>
            elige el
          </h2>
          <Image className={clsx("absolute top-16 right-0")} src={images.medal} alt="Medal icon"/>
          <h2
            className={clsx("text-left text-4xl text-green-900 font-montserrat font-semibold")}>
            mejor plan
          </h2>
          <h3
            className={clsx("text-center text-base text-blue-gray-500 font-poppins font-light mt-6")}>
            Los usuarios de Bee you están en busca de comercios incluyentes y
            eventos sociales. ¡Elige el mejor plan para tu negocio y apoya
            abiertamente a la comunidad LGBTIQ+!
          </h3>
        </div>
        {/* <div className={clsx("card w-70 h-116")}>
          <div>
            <div>
              <div className="relative mb-3">
              <h3 className={clsx("font-montserrat text-xl")}>Free</h3>
              <p className={clsx("font-poppins font-xl text-sm")}>
                Funcionalidades básicas
              </p>
              <p className={clsx("font-montserrat font-extralight text-blue-gray-700 text-xs absolute top-1 right-0 p-2 rounded bg-madang-50")}>AHORRA MX$396</p>
              </div>
              <Image src={images.check} alt="Check icon" />
              <h4 className={clsx("font-montserrat font-thin text-base")}>
                Forma parte de LGBTIQ+
              </h4>
              <p className={clsx("font-poppins font-light mb-3")}>
                Forma parte de esta increíble comunidad y de los negocios que
                abrazan la diversidad.
              </p>
              <Image src={images.check} alt="Check icon" />
              <h4 className={clsx("font-montserrat text-base")}>
                Conviértete en un negocio en racha
              </h4>
              <p className={clsx("font-poppins font-extralight mb-3")}>
                Incrementa tu alcance, tus impresiones y llega a más personas.
                ¿Todavía no estás en racha?
              </p>
              <Image src={images.check} alt="Check icon" />
              <h4 className={clsx("font-montserrat text-base")}>
                Publica eventos de forma ilimitada
              </h4>
              <Image src={images.check} alt="Check icon" />
              <p className={clsx("font-poppins font-extralight mb-3")}>
                ¡Crea eventos de forma ilimitada! Por temática, estación o
                festividad e incentiva el interés de tu negocio. ¡Da rienda
                suelta a la creatividad!
              </p>
              <Image src={images.check} alt="Check icon" />
              <h4 className={clsx("font-montserrat text-base")}>
                Publica descuentos de forma ilimitada
              </h4>
              <p className={clsx("font-poppins font-extralight")}>
                Publica hasta 5 descuentos de los productos o servicios que tu
                negocio ofrece, incrementa la rotación. ¡Promueve e incentiva el
                consumo!
              </p>
              <button className={clsx("bg-blue-gray-800 hover:blue-gray-100 font-monsterrat text-white text-sm mt-8 py-3 px-16 rounded")}>¡REGÍSTRATE AHORA!</button>
            </div>
          </div>
        </div> */}
        <div className={clsx("card w-70 h-116")}>
          <div>
            <div>
              <div className="relative mb-3">
              <Image src={images.pro} alt="Pro Plan icon" />
              <h3 className={clsx("font-montserrat font-bold text-xl")}>Pro</h3>
              <p className={clsx("font-poppins font-nomral text-sm")}>
                MX$ 1599.99/año
              </p>
              <p className={clsx("font-montserrat font-semibold text-blue-gray-700 text-xs absolute top-1 right-0 px-3 py-1 rounded bg-madang-50")}>AHORRA MX$396</p>
              </div>
              <Image className={clsx("inline mr-4")} src={images.check} alt="Check icon" />
              <div className="inline">
              <h4 className={clsx("font-montserrat font-medium text-base text-blue-gray-700 leading-5")}>
                Forma parte de LGBTIQ+
              </h4>
              <p className={clsx("font-poppins font-light text-sm mb-3 leading-6")}>
                Forma parte de esta increíble comunidad y de los negocios que
                abrazan la diversidad.
              </p>
              </div>
              <Image className={clsx("inline mr-4")} src={images.check} alt="Check icon" />
              <h4 className={clsx("inline font-montserrat font-medium text-base text-blue-gray-700 leading-5")}>
                Conviértete en un negocio en racha
              </h4>
              <p className={clsx("font-poppins font-light text-sm mb-3 leading-6")}>
                Incrementa tu alcance, tus impresiones y llega a más personas.
                ¿Todavía no estás en racha?
              </p>
              <Image className={clsx("inline mr-4")} src={images.check} alt="Check icon" />
              <h4 className={clsx("inline font-montserrat font-medium text-base text-blue-gray-700 leading-5")}>
                Publica eventos de forma ilimitada
              </h4>
              <p className={clsx("font-poppins font-light text-sm mb-3 leading-6")}>
                ¡Crea eventos de forma ilimitada! Por temática, estación o
                festividad e incentiva el interés de tu negocio. ¡Da rienda
                suelta a la creatividad!
              </p>
              <Image className={clsx("inline mr-4")} src={images.check} alt="Check icon" />
              <h4 className={clsx("inline font-montserrat font-medium text-base text-blue-gray-700 leading-5")}>
                Publica descuentos de forma ilimitada
              </h4>
              <p className={clsx("font-poppins font-light text-sm leading-6")}>
                Publica descuentos de forma ilimitada de todos los productos o servicios
                que tu negocio ofrece e incrementa la rotación. ¡Incentiva el
                consumo!
              </p>
              <button className={clsx("bg-gradient-to-r from-red-gradient/95 via-orange-gradient/80, via-yellow-gradient/70, via-green-gradient/70, via-purple-gradient/70 to-pink-gradient/80 hover:blue-gray-100 font-monsterrat text-white text-sm mt-8 py-3 px-16 rounded")}>¡REGÍSTRATE AHORA!</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
