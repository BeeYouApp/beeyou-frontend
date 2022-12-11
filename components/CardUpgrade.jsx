import clsx from "clsx";
import Button from "./Button";
import Image from "next/image";
import { images } from "../lib/images";
import ButtonPurple from "./ButtonPurple";



export default function CardUpgrade(){
  return(
    <>
      <main className="w-full h-full flex m-6 gap-6 ">
        <section className="flex w-[736px] h-[319px] rounded-xl border-[1px] lgbtiq-grad-bg-opacy justify-between items-center">
          <article className="px-6">
            <h1 className="text-[24px] font-montserrat font-extrabold text-blue-gray-900">¡Bienvenid@!</h1>
            <h1 className="text-[24px] font-montserrat font-extrabold text-purple-800 mt-1 ">a tu espacio bee you!</h1>
            <p className="text-[14px] font-monserrat text-blue-gray-800 mt-1">¿Quieres subir de nivel? Los usuarios de Bee you están en busca</p>
            <p className="text-[14px] font-monserrat text-blue-gray-800 mt-1">de comercios incluyentes, ¡Elige el mejor plan para tui negocio!</p>
            <Button
              isSubmit
              label="¡IR POR EL POR EL PLAN PRO!"
              style="rounded-2xl bg-blue-200 mt-10 gbtiq-button-two lgbtiq-grad-bg rounded-full">
            </Button>
          </article>
          <article className="p-4">
            <Image src={images.figureBussines} alt="Figure Bussines"/> 
          </article>
        </section>

        <section className="w-[288px] h-[319px] rounded-xl border-[1px] bg-change-plan bg-cover p-6 flex justify-end flex-col">
        <Image className="mb-2" src={images.figureRoll} alt="Figure Roll" />
          <p className="text-[10px] font-montserrat text-slate-200 text-end">!LLEGA A MAS USUARIOS DE LA COMUNIDAD</p>
          <ButtonPurple
            style="mt-2 ml-auto mr-auto"
            label="IR POR EL PLAN PRO!">
          </ButtonPurple>
        </section>
     </main>

  </>
    )
}