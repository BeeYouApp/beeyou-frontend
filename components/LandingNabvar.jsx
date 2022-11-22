import clsx from "clsx";
import Button from "./Button";

export default function LandingNav(){
  return(

    <>
      <section className={clsx(
        'mt-16 p-10'
      )}>
        <article className={clsx(
        )}>
          <h2 className="text-2xl font-montserrat text-blue-gray-900">Encuentra tu lugar favorito</h2>
          <h1 className="text-5xl font-montserrat text-blue-gray-900 font-bold mt-2">Únete a los</h1>
        </article>
        <article>
          <img src="./figure-hero-lines.webp" alt="" />
        </article>
        <article>
            <h1 className="text-6xl font-montserrat font-bold mt-2">negocios en racha</h1>
        </article>
        <article className="mt-5 font-montserrat text-blue-gray-700">
          <p>Úete a Bee You, una plataforma orientada a personas de la</p>
          <p>comunidad LGTBIQ+. ¡Encuentra tus lugares favoritos, eventos de</p>
          <p>interés y recibe varias recompensas!!!</p>
          <Button
            label='Entrar'
            isSubmit
            style="mt-8">
         </Button>
        </article>
      </section>
      <section className="text-center p-10 w-6/6">
        <img src="./figure-hero-cards@2x.webp" alt="" />
      </section>  
    </>


    )
}