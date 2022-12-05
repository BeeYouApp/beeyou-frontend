import clsx from "clsx";
import Image from "next/image";
import { images } from "../lib/images";

export default function CardFavoritesSm () {
    return (
            <div className={clsx("shadow-lg w-fit md:max-w-sm md:mr-5 md:ml-5")}>
              <a href="#!">
                <Image
                  className={clsx("rounded-lg w-[328px] md:w-[215px] h-[257px] object-cover")}
                  src={images.placeImage}
                  alt="Place Image"
                />
              </a>
            </div>
    )
}
