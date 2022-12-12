import clsx from "clsx";
import Image from "next/image";
import { images } from "../lib/images";

export default function TagDiscount(){
  return(
    <section className="flex justify-between mt-[20px] ">
      <article className="text-[12px] text-blue-gray-700">
        <ul>
          <li>
            <Image className={clsx("inline-block mr-2")} src={images.tagIcon} alt="Tag Icon"/>
              LGBT</li>
          <li>
            <Image className={clsx("inline-block mr-2")} src={images.tagIcon} alt="Tag Icon"/>
              Cafe</li>
          <li>
            <Image className={clsx("inline-block mr-2")} src={images.tagIcon}alt="Tag Icon"/>
              Descuentos</li>
        </ul>
      </article>
      <article className="w-[200px] h-[60px] bg-blue-gray-50 rounded-lg text-[14px] flex justify-between items-center">
        <div>
          <Image className={clsx("mr-3 ml-3 -mt-4")} src={images.offerIcon} alt="Offer Icon"/>
        </div>
        <div>
          <p className="px-3 text-[12px] text-blue-gray-900 font-montserrat">10% de descuento en todas la bebidas</p>
        </div>
      </article>
    </section>
  )
}