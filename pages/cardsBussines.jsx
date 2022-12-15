import CardCompany from "../components/CardCompany"
import CardPlacesLg from "../components/CardPlacesLg"
import Image from "next/image";
import { images } from "../lib/images";
import clsx from "clsx";
import TagDiscount from "../components/Tagdiscount-Section";
import ButtonPurple from "../components/ButtonPurple";

export default function Cards(){
  return(
    <>
      <section className="mb-5">
        <CardCompany
          title="Cielito Lindo"
          image={<Image className={clsx("rounded-lg w-full h-full object-none")} src={images.placeImage} alt="Place Image"/>}
          stars={<p>⭐⭐⭐⭐⭐</p>}
          description={<p className="block">CIELITO ® es un refugio único que inspirado en nuestra historia y calidez latina, reinventa la experiencia de “tomar café"...</p>}
          TagSection={<TagDiscount></TagDiscount>}>
        </CardCompany>
        </section>
        <section>
        <CardCompany
          title="Orgullo 2023"
          image={<Image className={clsx("rounded-lg w-full h-full object-none")} src={images.paradeFlag}alt="Parade Flag Image"/>}
          stars={<p>⭐⭐⭐⭐⭐</p>}
          description={<p className="block">El movimiento de liberación LGBT tiene por objetivos el matrimonio homosexual, la adopción, la despenalización de la homosexualidad en los diversos países del mundo, etc.</p>}
          TagSection={
            <ButtonPurple
              label="ASISTIR"
              style="mt-4">
            </ButtonPurple>}>
        </CardCompany>
      </section> 
    </>
  )
}