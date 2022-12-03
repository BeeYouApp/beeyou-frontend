import clsx from "clsx";
import Image from "next/image";
import { images } from "../lib/images";
import ButtonPurple from "../components/ButtonPurple";
import CardComment from "../components/CardComment";
import Dropdown from "../components/DropDown";

export default function CardPlacesLg() {
  return (
    <>
      <article className={clsx("flex justify-center mt-3 md:mt-0")}>
        <div
          className={clsx(
            "rounded-lg shadow-lg bg-white w-[100%] h-[100%] md:w-[100%] md:h-[100%] mb-[46px]"
          )}
        >
          <a href="#!">
            <Image
              className={clsx(
                "rounded-t-lg w-[100%] h-[116px] md:w-[100%] md:h-[250px] object-cover"
              )}
              src={images.placeImage}
              alt="Place Image"
            />
          </a>
          <div className={clsx("px-7 pt-5 pb-4")}>
            <section>
              <section className="md:flex md:flex-row">
                <section className="md:basis-3/5 lg:basis-5/9">
                  <h5
                    className={clsx(
                      "text-blue-gray-900 text-[24px] font-bold leading-[30px] mb-2"
                    )}
                  >
                    Cielito Querido
                  </h5>
                  <span className={clsx("mt-1.5")}>☆☆☆☆☆</span>
                  <p
                    className={clsx(
                      "flex text-[10px] font-light leading-[12px] aling-items self-end"
                    )}
                  >
                    <span
                      className={clsx(
                        "self-center text-blue-gray-500 text-[10px] leading-[12px] mr-1"
                      )}
                    >
                      100% FRIENDLY
                    </span>
                    <Image
                      src={images.verifiedIcon}
                      alt="Verified Place Icon"
                    />
                  </p>
                  <p
                    className={clsx(
                      "text-blue-gray-700 text-[14px] font-light leading-[21px] max-w-[255px] mb-4"
                    )}
                  >
                    CIELITO ® es un refugio único que inspirado en nuestra
                    historia y calidez latina, reinventa la experiencia de
                    “tomar café"...
                  </p>
                </section>
                <section
                  className={clsx(
                    "flex flex-row font-montserrat font-medium text-blue-gray-500 text-[10px] leading-[12px] gap-x-[47px]"
                  )}
                >
                  <h6 className={clsx("basis-1/2 md:basis-1/5 lg:basis-2/9")}>
                    TAGS RELACIONADOS
                    <ul className={clsx("mt-3")}>
                      <li className="flex mb-3">
                        <Image
                          className={clsx("mr-2")}
                          src={images.tagIcon}
                          alt="Tag Icon"
                        />
                        LGBT
                      </li>
                      <li className={clsx("flex mb-3")}>
                        <Image
                          className={clsx("mr-2")}
                          src={images.tagIcon}
                          alt="Tag Icon"
                        />
                        Café
                      </li>
                      <li className={clsx("flex mb-[18px]")}>
                        <Image
                          className={clsx("mr-2")}
                          src={images.tagIcon}
                          alt="Tag Icon"
                        />
                        Descuentos
                      </li>
                    </ul>
                  </h6>
                  <h6 className={clsx("basis-1/2 md:basis-1/2 lg:basis-2/9")}>
                    HORARIOS
                    <ul className={clsx("mt-3")}>
                      <li className={clsx("flex mb-3")}>
                        <Image
                          className={clsx("mr-2")}
                          src={images.dateIcon}
                          alt="Date Icon"
                        />
                        D, L, M, X, J, V, S
                      </li>
                      <li className={clsx("flex mb-3")}>
                        <Image
                          className={clsx("mr-2")}
                          src={images.openClockIcon}
                          alt="Open Clock Icon"
                        />
                        1:00 pm
                      </li>
                      <li className={clsx("flex mb-[18px]")}>
                        <Image
                          className={clsx("mr-2")}
                          src={images.closeClockIcon}
                          alt="Close Clock Icon"
                        />
                        12:00 am
                      </li>
                    </ul>
                  </h6>
                </section>
              </section>
              <section
                className={clsx(
                  "md:flex md:justify-between font-montserrat font-normal text-blue-gray-600 text-[12px] leading-[15px]"
                )}
              >
                <Dropdown>
                  <Image
                    className={clsx("mr-2")}
                    src={images.offerIcon}
                    alt="Offer Icon"
                  />
                  10% de descuento en todas...
                </Dropdown>
                <Dropdown>
                  <Image
                    className={clsx("mr-2")}
                    src={images.pinIcon}
                    alt="Pin Icon"
                  />
                  Juárez, 06600 Ciudad de Mé...
                </Dropdown>
              </section>
              <section className="md:flex md:justify-between">
                <div
                  className={clsx(
                    "flex justify-center bg-blue-gray-50 py-1 px-4 rounded-full mb-3 w-[163px]"
                  )}
                >
                  <Image src={images.reviewsIcon} alt="Reviews Place Icon" />
                  <h5
                    className={clsx(
                      "font-montserrat font-medium text-blue-gray-800 text-[16px] leading-[19.5px] ml-3"
                    )}
                  >
                    Reviews (10)
                  </h5>
                </div>
                <div className={clsx("mb-4")}>
                  <ButtonPurple>DEJAR UN COMENTARIO</ButtonPurple>
                </div>
              </section>
            </section>
            <section
              className={clsx("flex flex-col md:flex md:justify-between mt-7")}
            >
              <section className="mb-3">
                <CardComment />
              </section>
              <section>
                <CardComment />
              </section>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}

// export default function CardPlacesLg() {
//   return (
//     <>
//       <article>
//         <div class={clsx("flex justify-center mt-3 md:mt-0")}>
//           <div
//             class={clsx(
//               "rounded-lg shadow-lg bg-white w-[328px] h-[1089px] md:w-[652px] md:h-[782px] mb-[46px]"
//             )}
//           >
//             <a href="#!">
//               <Image
//                 class={clsx(
//                   "rounded-t-lg w-[328px] h-[116px] md:w-[652px] md:h-[250px] object-cover"
//                 )}
//                 src={images.placeImage}
//                 alt="Place Image"
//               />
//             </a>
//             <div class={clsx("px-7 pt-5 pb-4")}>
//               <section>
//                 <section className="md:flex md:flex-row">
//                   <section className="md:basis-4/7">
//                     <h5
//                       className={clsx(
//                         "text-blue-gray-900 text-[24px] font-bold leading-[30px] mb-2"
//                       )}
//                     >
//                       Cielito Querido
//                     </h5>
//                     <span className={clsx("mt-1.5")}>☆☆☆☆☆</span>
//                     <p
//                       className={clsx(
//                         "flex text-[10px] font-light leading-[12px] aling-items self-end"
//                       )}
//                     >
//                       <span
//                         className={clsx(
//                           "self-center text-blue-gray-500 text-[10px] leading-[12px] mr-1"
//                         )}
//                       >
//                         100% FRIENDLY
//                       </span>
//                       <Image
//                         src={images.verifiedIcon}
//                         alt="Verified Place Icon"
//                       />
//                     </p>
//                     <p
//                       class={clsx(
//                         "text-blue-gray-700 text-[14px] font-light leading-[21px] mb-4"
//                       )}
//                     >
//                       CIELITO ® es un refugio único que inspirado en nuestra
//                       historia y calidez latina, reinventa la experiencia de
//                       “tomar café".
//                     </p>
//                   </section>
//                   <section
//                     className={clsx(
//                       "md:basis-3/7 flex flex-row font-montserrat font-medium text-blue-gray-500 text-[10px] leading-[12px]"
//                     )}
//                   >
//                     <h6 className={clsx("basis-1/2 md:basis-1/2")}>
//                       TAGS RELACIONADOS
//                       <ul className={clsx("mt-3")}>
//                         <li className="flex mb-3">
//                           <Image
//                             className={clsx("mr-2")}
//                             src={images.tagIcon}
//                             alt="Tag Icon"
//                           />
//                           LGBT
//                         </li>
//                         <li className={clsx("flex mb-3")}>
//                           <Image
//                             className={clsx("mr-2")}
//                             src={images.tagIcon}
//                             alt="Tag Icon"
//                           />
//                           Café
//                         </li>
//                         <li className={clsx("flex mb-[18px]")}>
//                           <Image
//                             className={clsx("mr-2")}
//                             src={images.tagIcon}
//                             alt="Tag Icon"
//                           />
//                           Descuentos
//                         </li>
//                       </ul>
//                     </h6>
//                     <h6 className={clsx("basis-1/2 md:basis-1/2")}>
//                       HORARIOS
//                       <ul className={clsx("mt-3")}>
//                         <li className={clsx("flex mb-3")}>
//                           <Image
//                             className={clsx("mr-2")}
//                             src={images.dateIcon}
//                             alt="Date Icon"
//                           />
//                           D, L, Ma, Mi, J, V, S
//                         </li>
//                         <li className={clsx("flex mb-3")}>
//                           <Image
//                             className={clsx("mr-2")}
//                             src={images.openClockIcon}
//                             alt="Open Clock Icon"
//                           />
//                           1:00 pm
//                         </li>
//                         <li className={clsx("flex mb-[18px]")}>
//                           <Image
//                             className={clsx("mr-2")}
//                             src={images.closeClockIcon}
//                             alt="Close Clock Icon"
//                           />
//                           12:00 am
//                         </li>
//                       </ul>
//                     </h6>
//                   </section>
//                 </section>
//                 <section
//                   className={clsx(
//                     "font-montserrat font-normal text-blue-gray-600 text-[12px] leading-[15px]"
//                   )}
//                 ></section>
//                 <Dropdown />
//                 <Dropdown />
//               </section>

//               <section
//                 className={clsx(
//                   "flex flex-col md:flex md:justify-between mt-7"
//                 )}
//               >
//                 <div
//                   className={clsx(
//                     "flex bg-blue-gray-50 py-1 px-4 rounded-full mb-3"
//                   )}
//                 >
//                   <Image src={images.reviewsIcon} alt="Reviews Place Icon" />
//                   <h5
//                     className={clsx(
//                       "font-montserrat font-medium text-blue-gray-800 text-[16px] leading-[19.5px] ml-3"
//                     )}
//                   >
//                     Reviews (10)
//                   </h5>
//                 </div>
//                 <div className={clsx("mb-4")}>
//                   <ButtonPurple>DEJAR COMENTARIO</ButtonPurple>
//                 </div>
//                 <section className="mb-3">
//                   <CardComment />
//                 </section>
//                 <section>
//                   <CardComment />
//                 </section>
//               </section>
//             </div>
//           </div>
//         </div>
//       </article>
//     </>
//   );
// }
