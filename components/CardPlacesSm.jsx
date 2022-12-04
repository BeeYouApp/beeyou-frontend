import clsx from "clsx";
import Image from "next/image";
import { images } from "../lib/images";

export default function CardPlacesSm(props) {
  return (
    <>
      <div className={clsx("relative shadow-lg")}>
        <a href="#!">
          <Image
            className={clsx("rounded-lg w-[215px] h-[150px] object-cover")}
            src={images.placeImage}
            alt="Place Image"
          />
        </a>
        <div className={clsx("font-montserrat absolute bottom-0 left-0 right-0 px-4 py-2 text-montserrat text-[#FFFFFF]")}>
          <h5 className={clsx("text-[14px] font-bold leading-[15px] mt-[72px]")}>
            Cielito Querido
          </h5>
          <span className={clsx("mt-1.5")}>☆☆☆☆☆</span>
          <p className={clsx("flex text-[10px] font-light leading-[12px] aling-items self-end")}>
            <span className="self-center mr-1 leading-[12px]">
              100% FRIENDLY
            </span>
            <Image src={images.verifiedIcon} alt="Verified Place Icon" />
          </p>
        </div>
      </div>
      <div>{props.children}</div>
    </>
  );
}
