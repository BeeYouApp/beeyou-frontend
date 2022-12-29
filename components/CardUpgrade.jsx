import clsx from "clsx";
import Button from "./Button";
import Image from "next/image";
import { images } from "../lib/images";
import ButtonPurple from "./ButtonPurple";

export default function CardUpgrade(){
  return(
    <>
      <main className={clsx("w-full h-full flex m-6 gap-6")}>
        <section className="lgbtiq-grad-bg rounded-xl px-[1px] py-[1px]"> 
        {/* background-lgbtiq -> border radius */}
        <section className={clsx("flex w-[736px] h-[319px] rounded-xl border-[1px] bg-slate-50 lgbtiq-grad-bg-opacy justify-between items-center")}>
          <article className={clsx("px-6")}>
            <h1 className={clsx("text-[32px] leading-[39px] font-montserrat font-bold text-blue-gray-900")}>¡Bienvenid@!</h1>
            <h1 className={clsx("text-[36px] leading-[44px] font-montserrat font-bold text-purple-800")}>a tu espacio bee you!</h1>
            <p className={clsx("text-[14px] leading-[20px] font-montserrat font-light text-blue-gray-800 mt-2.5")}>¿Quieres subir de nivel? Los usuarios de Bee you están en busca</p>
            <p className={clsx("text-[14px] leading-[20px] font-montserrat font-light text-blue-gray-800")}>de comercios incluyentes. ¡Elige el mejor plan para tu negocio!</p>
            <Button
              isSubmit
              label="¡IR POR EL POR EL PLAN PRO!"
              style="font-montserrat text-[12px] bg-blue-200 mt-8 gbtiq-button-two lgbtiq-grad-bg rounded-full cursor-pointer w-[250px] h-[36px]">
            </Button>
          </article>
          <article className="p-4">
            <Image src={images.figureBussines} alt="Figure Bussines"/> 
          </article>
        </section>
        </section>

        <section className={clsx("w-[288px] h-[321px] rounded-xl border-[1px] bg-change-plan bg-cover p-6 flex justify-end flex-col")}>
        <Image className={clsx("mb-4 w-[40px]")} src={images.streakIcon} alt="Streak Icon" />
          <p className={clsx("text-[10px] leading[12px] font-montserrat text-slate-200 text-start")}>¡LLEGA A MÁS USUARIOS DE LA COMUNIDAD!</p>
          <ButtonPurple
            style="mt-2 lg:w-full"
            label="¡IR POR EL PLAN PRO!">
          </ButtonPurple>
        </section>
     </main>
     <p className={clsx("font-montserrat font-bold text-[#FFFFFF] text-[12px] leading-4 bg-green-900 rounded-lg ml-6 mt-16 px-3 py-1 w-[88px]")}>
      Recientes
    </p>

  </>
    )
}