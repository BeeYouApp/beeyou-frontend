import clsx from "clsx";
import Image from "next/image";
import { images } from "../lib/images";

export default function CardComment(props) {
  return (
    <>
      <section>
        <div className={clsx("md:w-[100%")}>
          <div className={clsx("p-3 rounded-lg shadow-lg bg-white max-w-sm]")}>
            <div className={clsx("md:flex md:justify-between")}>
              <h5
                className={clsx(
                  "flex items-center font-montserrat font-medium text-blue-gray-700 text-[14px] leading-[17px] mb-2"
                )}
              >
                <Image
                  className={clsx("mr-2.5")}
                  src={images.profilePicture}
                  alt="Profile Picture"
                />
                JOHN DOE
              </h5>
              <span className={clsx("mt-1.5")}>☆☆☆☆☆</span>
            </div>
            <p
              className={clsx(
                "font-poppins font-light text-blue-gray-700 text-[12px] leading-[15.6px] rounded-md bg-[#F9F9F9] py-2.5 px-3 mt-2"
              )}
            >
              Buen café y buen lugar para descansar un poco después de caminar,
              además, me gustó la atención y el espacio, las bebidas estaban
              deliciosas!!! Por eso 5 estrellas...
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
